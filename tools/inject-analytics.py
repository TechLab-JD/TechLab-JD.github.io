"""Inject the Cloudflare Web Analytics beacon into every portfolio HTML page.

Usage:  python tools/inject-analytics.py <CF_WA_TOKEN>
        python tools/inject-analytics.py --remove        (strip the beacon again)

Idempotent: skips pages that already have the beacon, and re-running with a new token updates it.
The token comes from Cloudflare dash -> Web Analytics -> (the techlab-jd.github.io site) -> the
data-cf-beacon {"token":"..."} value in its snippet. Privacy-first, cookieless - no consent banner needed.
Run from the portfolio root; commit + push afterward so GitHub Pages serves the instrumented pages.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # portfolio/
MARK = "cloudflareinsights.com/beacon.min.js"
BEACON = ('<script defer src="https://static.cloudflareinsights.com/beacon.min.js" '
          'data-cf-beacon=\'{"token": "%s"}\'></script>')
# existing beacon line (any token) so we can replace/remove it
BEACON_RE = re.compile(r'[ \t]*<script[^>]*cloudflareinsights\.com/beacon\.min\.js[^>]*></script>\n?', re.I)


def html_files():
    for dirpath, _dirs, files in os.walk(ROOT):
        if os.sep + ".git" in dirpath:
            continue
        for f in files:
            if f.endswith(".html"):
                yield os.path.join(dirpath, f)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    remove = sys.argv[1] == "--remove"
    token = None if remove else sys.argv[1].strip()
    changed = skipped = 0
    for path in html_files():
        src = open(path, encoding="utf-8").read()
        src = BEACON_RE.sub("", src)  # drop any existing beacon first
        if not remove:
            tag = BEACON % token
            # insert just before </head>, else before </body>
            if "</head>" in src:
                src2 = src.replace("</head>", "  " + tag + "\n</head>", 1)
            elif "</body>" in src:
                src2 = src.replace("</body>", "  " + tag + "\n</body>", 1)
            else:
                print("  ! no </head> or </body>, skipped:", os.path.relpath(path, ROOT))
                skipped += 1
                continue
            src = src2
        open(path, "w", encoding="utf-8", newline="\n").write(src)
        changed += 1
        print(("  removed " if remove else "  injected ") + os.path.relpath(path, ROOT))
    print(f"\n{'removed from' if remove else 'injected into'} {changed} files, {skipped} skipped.")
    if not remove:
        print("Next: git add -A && commit && push the portfolio; data appears in the CF dashboard within minutes.")


if __name__ == "__main__":
    main()
