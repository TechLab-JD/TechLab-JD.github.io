"""Revolutionary News — refresh engine.

Pulls headlines from a curated, spectrum-balanced set of news outlets plus
independent fact-check organizations, clusters the same story across sources,
tags each outlet with a bias rating, detects "blindspots" (a story one side is
covering heavily while the other ignores it), and writes data/news.json for the
static page to render. No API keys, stdlib only. Run from any scheduler.

Design rule: we never editorialize a story. We show who is covering it, from
which part of the spectrum, and what the fact-checkers have said — and let the
reader decide.
"""

import json
import re
import ssl
import time
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from html import unescape
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE / "news.json"

# Bias buckets: -2 left, -1 lean-left, 0 center, +1 lean-right, +2 right.
# Ratings follow the broad consensus of AllSides / Ad Fontes media-bias charts;
# they describe the outlet, not any single story. Edit freely.
# "fact" = factual-reporting reputation (High / Mostly / Mixed), per the broad
# consensus of media-reliability raters. Like bias, it describes the outlet, not
# any single article.
SOURCES = [
    # --- Left / Lean Left ---
    {"name": "NPR",                 "lean": -1, "fact": "High",   "rss": "https://feeds.npr.org/1001/rss.xml"},
    {"name": "The Guardian",        "lean": -1, "fact": "High",   "rss": "https://www.theguardian.com/world/rss"},
    {"name": "NBC News",            "lean": -1, "fact": "High",   "rss": "https://feeds.nbcnews.com/nbcnews/public/news"},
    {"name": "CBS News",            "lean": -1, "fact": "High",   "rss": "https://www.cbsnews.com/latest/rss/main"},
    {"name": "ABC News",            "lean": -1, "fact": "High",   "rss": "https://abcnews.go.com/abcnews/topstories"},
    {"name": "PBS NewsHour",        "lean": -1, "fact": "High",   "rss": "https://www.pbs.org/newshour/feeds/rss/headlines"},
    {"name": "Politico",            "lean": -1, "fact": "High",   "rss": "https://rss.politico.com/politics-news.xml"},
    {"name": "Vox",                 "lean": -2, "fact": "Mostly", "rss": "https://www.vox.com/rss/index.xml"},
    {"name": "Slate",               "lean": -2, "fact": "Mostly", "rss": "https://slate.com/feeds/all.rss"},
    {"name": "Mother Jones",        "lean": -2, "fact": "Mostly", "rss": "https://www.motherjones.com/feed/"},
    {"name": "The Atlantic",        "lean": -1, "fact": "High",   "rss": "https://www.theatlantic.com/feed/all/"},
    {"name": "Time",                "lean": -1, "fact": "High",   "rss": "https://time.com/feed/"},
    # --- Center ---
    {"name": "BBC News",            "lean":  0, "fact": "High",   "rss": "http://feeds.bbci.co.uk/news/world/rss.xml"},
    {"name": "The Hill",            "lean":  0, "fact": "High",   "rss": "https://thehill.com/news/feed/"},
    {"name": "CNBC",                "lean":  0, "fact": "High",   "rss": "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114"},
    {"name": "USA Today",           "lean":  0, "fact": "High",   "rss": "https://rssfeeds.usatoday.com/usatoday-NewsTopStories"},
    {"name": "Axios",               "lean":  0, "fact": "High",   "rss": "https://api.axios.com/feed/"},
    {"name": "Al Jazeera",          "lean":  0, "fact": "Mostly", "rss": "https://www.aljazeera.com/xml/rss/all.xml"},
    {"name": "The Christian Science Monitor", "lean": 0, "fact": "High", "rss": "https://rss.csmonitor.com/feeds/all"},
    {"name": "Deutsche Welle",      "lean":  0, "fact": "High",   "rss": "https://rss.dw.com/rdf/rss-en-all"},
    {"name": "Newsweek",            "lean":  0, "fact": "Mixed",  "rss": "https://www.newsweek.com/rss"},
    # --- Lean Right / Right ---
    {"name": "Reason",              "lean":  1, "fact": "Mostly", "rss": "https://reason.com/latest/feed/"},
    {"name": "New York Post",       "lean":  1, "fact": "Mixed",  "rss": "https://nypost.com/feed/"},
    {"name": "Washington Examiner", "lean":  1, "fact": "Mostly", "rss": "https://www.washingtonexaminer.com/feed"},
    {"name": "National Review",     "lean":  1, "fact": "Mostly", "rss": "https://www.nationalreview.com/feed/"},
    {"name": "Washington Times",    "lean":  1, "fact": "Mostly", "rss": "https://www.washingtontimes.com/rss/headlines/news/"},
    {"name": "Fox News",            "lean":  2, "fact": "Mixed",  "rss": "https://moxie.foxnews.com/google-publisher/latest.xml"},
    {"name": "The Daily Wire",      "lean":  2, "fact": "Mixed",  "rss": "https://www.dailywire.com/feeds/rss.xml"},
    {"name": "The Federalist",      "lean":  2, "fact": "Mixed",  "rss": "https://thefederalist.com/feed/"},
    {"name": "Newsmax",             "lean":  2, "fact": "Mixed",  "rss": "https://www.newsmax.com/rss/Newsfront/16/"},
    {"name": "Daily Caller",        "lean":  2, "fact": "Mixed",  "rss": "https://feeds.feedburner.com/dailycaller"},
]

FACTCHECKERS = [
    {"name": "PolitiFact",    "rss": "https://www.politifact.com/rss/all/"},
    {"name": "Snopes",        "rss": "https://www.snopes.com/feed/"},
    {"name": "FactCheck.org", "rss": "https://www.factcheck.org/feed/"},
    {"name": "Full Fact",     "rss": "https://fullfact.org/feed/all/"},
]

# News YouTube channels (free per-channel RSS, no API key). Clips are matched to
# story clusters by headline overlap, and carry the channel's bias tag.
YT_CHANNELS = [
    {"name": "AP",             "lean": 0,  "cid": "UC52X5wxOL_s5yw0dQk7NtgA"},
    {"name": "Reuters",        "lean": 0,  "cid": "UChqUTb7kYRX8-EiaN3XFrSQ"},
    {"name": "BBC News",       "lean": 0,  "cid": "UC16niRr50-MSBwiO3YDb3RA"},
    {"name": "PBS NewsHour",   "lean": -1, "cid": "UC6ZFN9Tx6xh-skXCuRHCDpQ"},
    {"name": "NBC News",       "lean": -1, "cid": "UCeY0bbntWzzVIaj2z3QigXg"},
    {"name": "ABC News",       "lean": -1, "cid": "UCBi2mrWuNuyYy4gbM6fU18Q"},
    {"name": "CBS News",       "lean": -1, "cid": "UC8p1vwvWtl6T73JiExfWs1g"},
    {"name": "CNN",            "lean": -1, "cid": "UCupvZG-5ko_eiXAupbDfxWw"},
    {"name": "The Guardian",   "lean": -1, "cid": "UCHpw8xwDNhU9gdohEcJu4aA"},
    {"name": "Washington Post","lean": -1, "cid": "UCHd62-u_v4DvJ8TCFtpi4GA"},
    {"name": "Al Jazeera",     "lean": 0,  "cid": "UCNye-wNBqNL5ZzHSJj3l8Bg"},
    {"name": "DW News",        "lean": 0,  "cid": "UCknLrEdhRCp1aegoMqRaCZg"},
    {"name": "Sky News",       "lean": 0,  "cid": "UCoMdktPbSTixAyNGwb-UYkQ"},
    {"name": "Fox News",       "lean": 2,  "cid": "UCXIJgqnII2ZOINSWNOGFThA"},
]

LEAN_LABEL = {-2: "Left", -1: "Lean Left", 0: "Center", 1: "Lean Right", 2: "Right"}

CATEGORIES = {
    "World":    ["ukraine", "russia", "gaza", "israel", "china", "iran", "europe", "africa", "united nations", "war", "border", "migrant", "nato", "putin", "zelensky"],
    "Politics": ["trump", "biden", "congress", "senate", "house", "election", "vote", "supreme court", "white house", "governor", "republican", "democrat", "campaign", "impeach", "shutdown"],
    "Economy":  ["inflation", "jobs", "economy", "stock", "market", "fed", "rate", "price", "tariff", "gdp", "wage", "unemployment", "housing", "deficit", "spending"],
    "Tech":     ["ai ", "artificial intelligence", "google", "apple", "openai", "chip", "tech", "cyber", "data breach", "social media", "meta", "microsoft", "nvidia"],
    "Health":   ["health", "covid", "vaccine", "cdc", "fda", "disease", "drug", "medicaid", "medicare", "hospital", "mental health"],
    "Science":  ["climate", "nasa", "space", "study finds", "researchers", "scientists", "emissions", "environment"],
}

STOP = set("the a an and or but to of in on for with at by from as is are was were be been being this that these those it its it's they them their there here what which who whom will would can could should may might must not no into over after before about than then more most new says say said amid over under up down out off against vs".split())

UA = {"User-Agent": "Mozilla/5.0 (compatible; RevolutionaryNews/1.0; +https://techlab-jd.github.io/)"}
CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE  # some feeds have finicky certs; we only read public headlines


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    return urllib.request.urlopen(req, timeout=20, context=CTX).read()


def text_of(el, *tags):
    for t in tags:
        c = el.find(t)
        if c is not None and c.text:
            return unescape(c.text.strip())
    return ""


def strip_html(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def parse_items(raw):
    """Return list of {title, link, summary, when} from RSS or Atom XML."""
    out = []
    try:
        root = ET.fromstring(raw)
    except Exception:
        return out
    # RSS <item>
    for it in root.findall(".//item"):
        title = text_of(it, "title")
        link = text_of(it, "link", "guid")
        summ = strip_html(text_of(it, "description", "{http://purl.org/rss/1.0/modules/content/}encoded"))
        when = text_of(it, "pubDate", "{http://purl.org/dc/elements/1.1/}date")
        if title:
            out.append({"title": title, "link": link, "summary": summ[:280], "when": when})
    # Atom <entry>
    if not out:
        ns = "{http://www.w3.org/2005/Atom}"
        for en in root.findall(f".//{ns}entry"):
            title = text_of(en, f"{ns}title")
            link = ""
            le = en.find(f"{ns}link")
            if le is not None:
                link = le.get("href", "")
            summ = strip_html(text_of(en, f"{ns}summary", f"{ns}content"))
            when = text_of(en, f"{ns}updated", f"{ns}published")
            if title:
                out.append({"title": title, "link": link, "summary": summ[:280], "when": when})
    return out


def parse_youtube(raw):
    """Parse a YouTube channel RSS (Atom) feed into video dicts."""
    out = []
    try:
        root = ET.fromstring(raw)
    except Exception:
        return out
    A = "{http://www.w3.org/2005/Atom}"
    YT = "{http://www.youtube.com/xml/schemas/2015}"
    for e in root.findall(A + "entry"):
        vid_el = e.find(YT + "videoId")
        t_el = e.find(A + "title")
        p_el = e.find(A + "published")
        if vid_el is None or t_el is None or not vid_el.text:
            continue
        vid = vid_el.text
        out.append({"videoId": vid, "title": unescape(t_el.text or ""),
                    "thumb": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
                    "when": p_el.text if p_el is not None else ""})
    return out


def tokens(title):
    words = re.findall(r"[a-z0-9]+", title.lower())
    return {w for w in words if len(w) > 3 and w not in STOP}


def categorize(title, summary):
    blob = (title + " " + summary).lower()
    for cat, kws in CATEGORIES.items():
        for kw in kws:
            if kw in blob:
                return cat
    return "General"


def cluster(articles):
    """Union-find clustering by shared significant tokens in the headline."""
    n = len(articles)
    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b):
        parent[find(a)] = find(b)

    toks = [tokens(a["title"]) for a in articles]
    for i in range(n):
        if not toks[i]:
            continue
        for j in range(i + 1, n):
            if articles[i]["source"] == articles[j]["source"]:
                continue
            shared = toks[i] & toks[j]
            if len(shared) >= 3 or (len(shared) >= 2 and len(shared) / max(1, min(len(toks[i]), len(toks[j]))) >= 0.5):
                union(i, j)

    groups = {}
    for i in range(n):
        groups.setdefault(find(i), []).append(articles[i])
    return list(groups.values())


def main():
    print("Revolutionary News refresh …")
    articles = []
    live_sources = []
    for s in SOURCES:
        try:
            items = parse_items(fetch(s["rss"]))
            if not items:
                print(f"  - {s['name']}: no items"); continue
            take = items[:12]
            live_sources.append({"name": s["name"], "lean": s["lean"], "label": LEAN_LABEL[s["lean"]],
                                 "fact": s.get("fact", "Mostly"), "count": len(take)})
            for it in take:
                articles.append({**it, "source": s["name"], "lean": s["lean"]})
            print(f"  + {s['name']}: {len(items)} items")
        except Exception as e:
            print(f"  ! {s['name']}: {type(e).__name__}")
        time.sleep(0.2)

    # Fact-checks
    factchecks = []
    for f in FACTCHECKERS:
        try:
            for it in parse_items(fetch(f["rss"]))[:12]:
                factchecks.append({"org": f["name"], "title": it["title"], "link": it["link"],
                                   "summary": it["summary"], "toks": list(tokens(it["title"] + " " + it["summary"]))})
            print(f"  + FACT {f['name']}")
        except Exception:
            print(f"  ! FACT {f['name']}: failed")
        time.sleep(0.2)

    # News videos (YouTube channel feeds)
    videos = []
    for c in YT_CHANNELS:
        try:
            vs = parse_youtube(fetch(f"https://www.youtube.com/feeds/videos.xml?channel_id={c['cid']}"))[:10]
            for v in vs:
                videos.append({**v, "channel": c["name"], "lean": c["lean"],
                               "toks": tokens(v["title"])})
            print(f"  + VID {c['name']}: {len(vs)}")
        except Exception:
            print(f"  ! VID {c['name']}: failed")
        time.sleep(0.15)

    # drop near-duplicate items from the same source (feeds often repeat a story)
    seen = set()
    deduped = []
    for a in articles:
        key = (a["source"], " ".join(sorted(tokens(a["title"]))[:6]))
        if key in seen:
            continue
        seen.add(key)
        deduped.append(a)
    articles = deduped

    clusters = cluster(articles)
    stories = []
    for group in clusters:
        group.sort(key=lambda a: a["lean"])
        leans = sorted({a["lean"] for a in group})
        rep = max(group, key=lambda a: len(a["summary"]))  # richest headline as representative
        cat = categorize(rep["title"], rep["summary"])
        # attach matching fact-checks by token overlap with the cluster
        ctoks = set()
        for a in group:
            ctoks |= tokens(a["title"])
        fc = []
        for f in factchecks:
            if len(ctoks & set(f["toks"])) >= 3:
                fc.append({"org": f["org"], "title": f["title"], "link": f["link"]})
        # match news videos to this cluster, preferring distinct channels
        vids, seen_vid, seen_chan = [], set(), set()
        for v in sorted(videos, key=lambda x: len(ctoks & x["toks"]), reverse=True):
            if len(ctoks & v["toks"]) < 4 or v["videoId"] in seen_vid:
                continue
            if v["channel"] in seen_chan and len(vids) >= 1:
                continue
            seen_vid.add(v["videoId"]); seen_chan.add(v["channel"])
            vids.append({"videoId": v["videoId"], "title": v["title"], "thumb": v["thumb"],
                         "channel": v["channel"], "lean": v["lean"], "label": LEAN_LABEL[v["lean"]]})
            if len(vids) >= 3:
                break
        span = (max(leans) - min(leans)) if leans else 0
        n_src = len({a["source"] for a in group})
        # coverage balance: distinct sources on each side of center
        bal = {"l": set(), "c": set(), "r": set()}
        for a in group:
            side = "l" if a["lean"] < 0 else ("r" if a["lean"] > 0 else "c")
            bal[side].add(a["source"])
        balance = {"l": len(bal["l"]), "c": len(bal["c"]), "r": len(bal["r"])}
        # blindspot: 2+ outlets, all on one side of center
        blindspot = None
        if n_src >= 2 and all(l <= -1 for l in leans):
            blindspot = "right"   # the right is not covering this
        elif n_src >= 2 and all(l >= 1 for l in leans):
            blindspot = "left"
        stories.append({
            "title": rep["title"],
            "summary": rep["summary"],
            "category": cat,
            "leans": leans,
            "span": span,
            "n_sources": n_src,
            "balance": balance,
            "blindspot": blindspot,
            "sources": [{"name": a["source"], "lean": a["lean"], "label": LEAN_LABEL[a["lean"]],
                          "title": a["title"], "url": a["link"]} for a in group],
            "factchecks": fc[:3],
            "videos": vids,
        })

    # rank: multi-source + wide spectrum span first (those are the "every angle" stories)
    stories.sort(key=lambda s: (s["n_sources"] >= 2, s["span"], s["n_sources"], len(s["factchecks"])), reverse=True)

    blindspots = [s for s in stories if s["blindspot"] and s["n_sources"] >= 2][:12]

    # trending: significant headline terms weighted by how many DISTINCT outlets use them
    tok_src = {}
    GENERIC = {"news", "says", "said", "report", "reports", "live", "update", "updates",
               "video", "watch", "could", "would", "after", "amid", "over", "first", "year", "years"}
    for a in articles:
        for t in tokens(a["title"]):
            if t in GENERIC:
                continue
            tok_src.setdefault(t, set()).add(a["source"])
    trending = sorted(({"term": t, "n": len(src)} for t, src in tok_src.items() if len(src) >= 3),
                      key=lambda x: x["n"], reverse=True)[:16]

    # latest videos across channels (for the Watch strip)
    seen_lv, latest_videos = set(), []
    for v in sorted(videos, key=lambda x: x.get("when", ""), reverse=True):
        if v["videoId"] in seen_lv:
            continue
        seen_lv.add(v["videoId"])
        latest_videos.append({"videoId": v["videoId"], "title": v["title"], "thumb": v["thumb"],
                              "channel": v["channel"], "lean": v["lean"], "label": LEAN_LABEL[v["lean"]]})
        if len(latest_videos) >= 16:
            break

    standalone_fc = [{"org": f["org"], "title": f["title"], "link": f["link"], "summary": f["summary"]}
                     for f in factchecks][:24]

    data = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "generated_human": datetime.now(timezone.utc).strftime("%b %d, %Y · %H:%M UTC"),
        "sources": live_sources,
        "n_articles": len(articles),
        "n_videos": len(videos),
        "trending": trending,
        "videos": latest_videos,
        "stories": stories[:50],
        "blindspots": blindspots,
        "factchecks": standalone_fc,
    }
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    n_story_vids = sum(1 for s in stories if s["videos"])
    print(f"Wrote {OUT.name}: {len(stories)} stories, {len(blindspots)} blindspots, "
          f"{len(standalone_fc)} fact-checks, {len(live_sources)} live sources, "
          f"{len(videos)} videos ({n_story_vids} stories with video).")


if __name__ == "__main__":
    main()
