"""Refresh the American Dream dashboard data from FRED (national + per-state).
Writes usqol.json and us-states-qol.json next to this script. No API key needed.
Run daily via automation/refresh-datalab.ps1. The state geometry (us-states-10m.json)
never changes and is not refetched."""
import urllib.request, urllib.parse, csv, io, json, os, datetime, time

HERE = os.path.dirname(os.path.abspath(__file__))

def fetch_csv(sid):
    url = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=" + sid
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    rows = list(csv.reader(io.StringIO(urllib.request.urlopen(req, timeout=30).read().decode())))
    by = {}
    for r in rows[1:]:
        if len(r) < 2 or r[1] in ("", ".", "NA"):
            continue
        by.setdefault(int(r[0][:4]), []).append(float(r[1]))
    return by

# ---------- national ----------
NATIONAL = {
  "real_median_income": ("MEHOINUSA672N", "Real median household income", "$ (2024 dollars)", "FRED / U.S. Census Bureau"),
  "real_gdp_per_capita": ("A939RX0Q048SBEA", "Real GDP per capita", "$ (2017 chained)", "FRED / U.S. BEA"),
  "median_home_price": ("MSPUS", "Median sales price of houses sold", "$", "FRED / U.S. Census & HUD"),
  "nominal_median_income": ("MEHOINUSA646N", "Median household income (nominal)", "$", "FRED / U.S. Census Bureau"),
  "unemployment": ("UNRATE", "Unemployment rate", "%", "FRED / U.S. BLS"),
  "cpi": ("CPIAUCNS", "Consumer Price Index (all items)", "index 1982-84=100", "FRED / U.S. BLS"),
  "rent_cpi": ("CUUR0000SEHA", "Rent of primary residence (CPI)", "index 1982-84=100", "FRED / U.S. BLS"),
  "medical_cpi": ("CPIMEDSL", "Medical care prices (CPI)", "index 1982-84=100", "FRED / U.S. BLS"),
  "grocery_cpi": ("CUSR0000SAF11", "Grocery (food-at-home) prices (CPI)", "index 1982-84=100", "FRED / U.S. BLS"),
  "gas_price": ("GASREGW", "Gas price (regular, retail)", "$/gallon", "FRED / U.S. EIA"),
  "jobless_claims": ("ICSA", "Initial jobless claims (layoffs)", "claims/week", "FRED / U.S. DOL"),
  "payrolls": ("PAYEMS", "Total nonfarm payrolls", "thousands of jobs", "FRED / U.S. BLS"),
  "home_price_index": ("CSUSHPINSA", "Case-Shiller national home price index", "index Jan2000=100", "FRED / S&P CoreLogic"),
  "life_expectancy": ("SPDYNLE00INUSA", "Life expectancy at birth", "years", "FRED / World Bank"),
  "labor_participation": ("CIVPART", "Labor force participation rate", "%", "FRED / U.S. BLS"),
  "min_wage": ("FEDMINNFRWG", "Federal minimum wage (nominal)", "$/hr", "FRED / U.S. DOL"),
  "poverty_rate": ("PPAAUS00000A156NCEN", "Official poverty rate", "%", "FRED / U.S. Census Bureau"),
  "homeownership": ("RHORUSQ156N", "Homeownership rate", "%", "FRED / U.S. Census Bureau"),
  "debt_service": ("TDSP", "Household debt service ratio", "% of disposable income", "FRED / Federal Reserve"),
  "inequality": ("SIPOVGINIUSA", "Income inequality (Gini)", "Gini index", "FRED / World Bank"),
  "savings_rate": ("PSAVERT", "Personal savings rate", "% of disposable income", "FRED / U.S. BEA"),
  "child_poverty": ("PPU18US00000A156NCEN", "Child poverty rate (under 18)", "%", "FRED / U.S. Census Bureau"),
  "housing_starts": ("HOUST", "Housing starts", "thousands of units/yr", "FRED / U.S. Census Bureau"),
  "student_debt": ("SLOAS", "Student loan debt (outstanding)", "$ millions", "FRED / Federal Reserve"),
  "consumer_debt": ("TOTALSL", "Consumer credit (outstanding)", "$ millions", "FRED / Federal Reserve"),
  "co2": ("EMISSCO2TOTVTTTOUSA", "CO2 emissions (total)", "million metric tons", "FRED / U.S. EIA"),
  "college_tuition": ("CUSR0000SEEB", "College tuition & fees (CPI)", "index 1982-84=100", "FRED / U.S. BLS"),
  "debt_gdp": ("GFDEGDQ188S", "Federal debt (% of GDP)", "% of GDP", "FRED / U.S. OMB"),
  "total_debt": ("GFDEBTN", "Federal debt (total)", "$ millions", "FRED / U.S. Treasury"),
  "mortgage_rate": ("MORTGAGE30US", "30-year mortgage rate", "%", "FRED / Freddie Mac"),
  "consumer_sentiment": ("UMCSENT", "Consumer sentiment", "index 1966=100", "FRED / Univ. of Michigan"),
  "u6_rate": ("U6RATE", "Underemployment (U-6)", "%", "FRED / U.S. BLS"),
}
PRESIDENTS = [
  {"name": "Truman", "party": "D", "start": 1945, "end": 1952}, {"name": "Eisenhower", "party": "R", "start": 1953, "end": 1960},
  {"name": "Kennedy", "party": "D", "start": 1961, "end": 1963}, {"name": "L. Johnson", "party": "D", "start": 1964, "end": 1968},
  {"name": "Nixon", "party": "R", "start": 1969, "end": 1974}, {"name": "Ford", "party": "R", "start": 1975, "end": 1976},
  {"name": "Carter", "party": "D", "start": 1977, "end": 1980}, {"name": "Reagan", "party": "R", "start": 1981, "end": 1988},
  {"name": "G.H.W. Bush", "party": "R", "start": 1989, "end": 1992}, {"name": "Clinton", "party": "D", "start": 1993, "end": 2000},
  {"name": "G.W. Bush", "party": "R", "start": 2001, "end": 2008}, {"name": "Obama", "party": "D", "start": 2009, "end": 2016},
  {"name": "Trump", "party": "R", "start": 2017, "end": 2020}, {"name": "Biden", "party": "D", "start": 2021, "end": 2024},
  {"name": "Trump", "party": "R", "start": 2025, "end": 2028},
]
RECESSIONS = [[1948, 1949], [1953, 1954], [1957, 1958], [1960, 1961], [1969, 1970], [1973, 1975], [1980, 1980], [1981, 1982], [1990, 1991], [2001, 2001], [2007, 2009], [2020, 2020]]

def build_national():
    series = {}
    for key, (sid, label, unit, src) in NATIONAL.items():
        try:
            by = fetch_csv(sid)
            yr = {y: round(sum(v) / len(v), 2) for y, v in by.items()}
            series[key] = {"series_id": sid, "label": label, "unit": unit, "source": src,
                           "years": {str(y): yr[y] for y in sorted(yr)}}
        except Exception as e:
            print("national FAIL", key, e)
        time.sleep(0.05)
    # education (Census CPS Table A-2, bachelor's-or-higher block) — not on FRED, best-effort
    try:
        import openpyxl, io as _io
        url = "https://www2.census.gov/programs-surveys/demo/tables/educational-attainment/time-series/cps-historical-time-series/taba-2.xlsx"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        wb = openpyxl.load_workbook(_io.BytesIO(urllib.request.urlopen(req, timeout=40).read()), read_only=True, data_only=True)
        ws = wb[wb.sheetnames[0]]
        in_block, edu = False, {}
        for r in ws.iter_rows(values_only=True):
            c0 = str(r[0]).strip() if r[0] is not None else ""
            if "Completed 4 Years of College" in c0 or ("Bachelor" in c0 and "Higher" in c0):
                in_block = True; continue
            if not in_block: continue
            try: y = int(c0)
            except Exception:
                if c0 and not c0[:1].isdigit() and len(c0) > 3: break
                continue
            try: edu[y] = round(float(str(r[1]).replace(",", "")), 1)
            except Exception: pass
        if edu:
            series["education_ba"] = {"series_id": "CPS-A2", "label": "College degree (bachelor's+)", "unit": "% of adults 25+",
                                      "source": "U.S. Census Bureau (CPS Table A-2)", "years": {str(k): edu[k] for k in sorted(edu)}}
            print("education: %d-%d" % (min(edu), max(edu)))
    except Exception as e:
        print("education: skipped (" + str(e)[:60] + ")")
    partial = datetime.date.today().year
    out = {"meta": {"title": "The State of the American Dream",
                    "subtitle": "U.S. quality-of-life indicators over time, graded by year and presidential term",
                    "generated": datetime.date.today().isoformat(), "partial_year": partial,
                    "note": "Data from official U.S. statistical agencies via FRED (Federal Reserve Bank of St. Louis). " + str(partial) + " is a partial year (year-to-date averages) and is excluded from the composite grade. Presidential terms are a time grouping (president in office mid-year), not a claim of causation. Shaded grey spans are NBER recessions."},
           "presidents": PRESIDENTS, "recessions": RECESSIONS, "series": series}
    json.dump(out, open(os.path.join(HERE, "usqol.json"), "w"), separators=(",", ":"))
    print("national: %d series" % len(series))

# ---------- per-state ----------
FIPS = {"AL": "01", "AK": "02", "AZ": "04", "AR": "05", "CA": "06", "CO": "08", "CT": "09", "DE": "10", "DC": "11", "FL": "12", "GA": "13", "HI": "15", "ID": "16", "IL": "17", "IN": "18", "IA": "19", "KS": "20", "KY": "21", "LA": "22", "ME": "23", "MD": "24", "MA": "25", "MI": "26", "MN": "27", "MS": "28", "MO": "29", "MT": "30", "NE": "31", "NV": "32", "NH": "33", "NJ": "34", "NM": "35", "NY": "36", "NC": "37", "ND": "38", "OH": "39", "OK": "40", "OR": "41", "PA": "42", "RI": "44", "SC": "45", "SD": "46", "TN": "47", "TX": "48", "UT": "49", "VT": "50", "VA": "51", "WA": "53", "WV": "54", "WI": "55", "WY": "56"}
NAMES = {"AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"}

def last_val(sid):
    try:
        by = fetch_csv(sid)
        if not by:
            return None
        y = max(by)
        return round(sum(by[y]) / len(by[y]), 2)
    except Exception:
        return None

def build_states():
    states = {}
    for ab, fp in FIPS.items():
        inc = last_val("MHI%s%s000A052NCEN" % (ab, fp))
        pov = last_val("PPAA%s%s000A156NCEN" % (ab, fp))
        un = last_val("%sUR" % ab)
        lp = last_val("MEDLISPRI%s" % ab)
        pcpi = last_val("%sPCPI" % ab)
        pop = last_val("%sPOP" % ab)
        states[fp] = {"abbr": ab, "name": NAMES[ab], "income": inc, "poverty": pov, "unemployment": un,
                      "listprice": lp, "pcpi": pcpi, "pop": pop,
                      "afford": round(lp / inc, 2) if (lp and inc) else None}
        time.sleep(0.03)
    out = {"generated": datetime.date.today().isoformat(),
           "notes": "Per-state data from FRED: median household income & poverty (Census SAIPE), unemployment (BLS, latest month), median listing price (Realtor.com via FRED), per-capita personal income (BEA), population (Census). Affordability = median listing price / median household income.",
           "states": states}
    json.dump(out, open(os.path.join(HERE, "us-states-qol.json"), "w"), separators=(",", ":"))
    got = sum(1 for s in states.values() if s["income"])
    print("states: %d (%d with income)" % (len(states), got))

# ---------- per-state legislation (OpenStates; key read from env or local file, never committed) ----------
def openstates_key():
    k = os.environ.get("OPENSTATES_API_KEY")
    if k:
        return k.strip()
    for p in [os.path.join(HERE, "..", "..", "automation", ".openstates_key"),
              os.path.join(HERE, "..", "..", "..", "automation", ".openstates_key")]:
        try:
            if os.path.exists(p):
                return open(p).read().strip()
        except Exception:
            pass
    return None

def build_state_bills():
    key = openstates_key()
    if not key:
        print("state bills: no OpenStates key found, skipping")
        return
    out = {}
    for ab, name in sorted(NAMES.items()):
        try:
            url = ("https://v3.openstates.org/bills?jurisdiction=" + urllib.parse.quote(name) +
                   "&sort=latest_action_desc&per_page=6&apikey=" + key)
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            d = json.loads(urllib.request.urlopen(req, timeout=30).read().decode())
            bills = []
            for b in d.get("results", []):
                bills.append({"id": b.get("identifier"), "title": b.get("title"),
                              "action": b.get("latest_action_description"),
                              "date": b.get("latest_action_date", "")[:10],
                              "url": b.get("openstates_url"),
                              "type": (b.get("classification") or ["bill"])[0]})
            if bills:
                out[ab] = {"name": name, "bills": bills}
            print("state bills", ab, len(bills), flush=True)
        except Exception as e:
            print("state bills FAIL", ab, str(e)[:60])
        time.sleep(6.5)  # OpenStates free tier ~10 req/min
    if out:
        payload = {"generated": datetime.date.today().isoformat(),
                   "note": "Recent state legislation via the OpenStates API (openstates.org). Up to 6 most-recently-acted bills per state.",
                   "states": out}
        json.dump(payload, open(os.path.join(HERE, "state-bills.json"), "w"), separators=(",", ":"))
        print("state bills: %d states written" % len(out))

# ---------- immigration & enforcement (DHS Yearbook; annual, best-effort) ----------
# These xlsx URLs carry a date and change each yearbook; if they 404 the existing
# bundled immigration.json is kept. Update the URLs when DHS publishes a new yearbook.
DHS_LPR_XLSX = "https://ohss.dhs.gov/sites/default/files/2024-09/2024_0906_ohss_yearbook_lawful_permanent_residents_fy2023_0.xlsx"
DHS_ENF_XLSX = "https://ohss.dhs.gov/system/files/2026-08/2026_0806_ohss_yearbook_enforcement_fy2023.xlsx"

def build_immigration():
    try:
        import openpyxl, io as _io
        def getwb(url):
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            return openpyxl.load_workbook(_io.BytesIO(urllib.request.urlopen(req, timeout=40).read()), read_only=True, data_only=True)
        def num(v):
            if v is None: return None
            s = str(v).strip().replace(",", "")
            if s in ("NA", "X", "-", "", "D", "NaN"): return None
            try: return int(float(s))
            except Exception: return None
        lpr = {}
        ws = getwb(DHS_LPR_XLSX)["Table 1"]
        for r in list(ws.iter_rows(values_only=True))[6:]:
            for c in range(0, len(r) - 1, 2):
                try: yy = int(str(r[c]).strip())
                except Exception: continue
                if 1800 <= yy <= 2035:
                    n = num(r[c + 1])
                    if n is not None: lpr[yy] = n
        rem, ret = {}, {}
        ws2 = getwb(DHS_ENF_XLSX)["Table 39"]
        for r in list(ws2.iter_rows(values_only=True))[6:]:
            try: yy = int(str(r[0]).strip())
            except Exception: continue
            if not (1880 <= yy <= 2035): continue
            rv = num(r[3])
            if rv is not None: rem[yy] = rv
            ar, er = num(r[1]), num(r[2])
            if ar is not None or er is not None: ret[yy] = (ar or 0) + (er or 0)
        if not lpr or not rem:
            print("immigration: no data parsed, keeping existing file"); return
        yr = lambda d: {str(k): d[k] for k in sorted(d)}
        payload = {"generated": datetime.date.today().isoformat(),
                   "note": "Legal immigration = persons obtaining lawful permanent resident status (green cards); deportations = formal ICE/DHS removals; returns = voluntary/administrative returns. Source: DHS Office of Homeland Security Statistics, Yearbook of Immigration Statistics (Tables 1 & 39). Fiscal years. Tracking flows, not judging them.",
                   "series": {"legal_immigration": {"label": "Legal immigration (green cards)", "unit": "persons/year", "years": yr(lpr)},
                              "deportations": {"label": "Deportations (formal removals)", "unit": "removals/year", "years": yr(rem)},
                              "returns": {"label": "Voluntary / administrative returns", "unit": "returns/year", "years": yr(ret)}}}
        json.dump(payload, open(os.path.join(HERE, "immigration.json"), "w"), separators=(",", ":"))
        print("immigration: LPR %d-%d, removals %d-%d" % (min(lpr), max(lpr), min(rem), max(rem)))
    except Exception as e:
        print("immigration: skipped (" + str(e)[:80] + "), keeping existing file")

def build_distribution():
    try:
        import openpyxl, io as _io, re as _re
        def dfa(sid): return {y: round(sum(v) / len(v), 2) for y, v in fetch_csv(sid).items()}
        wealth = {"top1": dfa("WFRBST01134"), "next9": dfa("WFRBSN09161"), "mid40": dfa("WFRBSN40188"), "bottom50": dfa("WFRBSB50215")}
        prod = {"output": dfa("OPHNFB"), "pay": dfa("COMPRNFB")}  # productivity vs real pay per hour
        url = "https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-income-households/h03ar.xlsx"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        wb = openpyxl.load_workbook(_io.BytesIO(urllib.request.urlopen(req, timeout=40).read()), read_only=True, data_only=True)
        ws = wb[wb.sheetnames[0]]
        real_block, base = False, "2025"
        low, mid, high, top5 = {}, {}, {}, {}
        for r in ws.iter_rows(values_only=True):
            c0 = str(r[0]).strip() if r[0] is not None else ""
            m = _re.match(r"^(\d{4})\s+Dollars", c0)
            if m: real_block, base = True, m.group(1); continue
            if not real_block: continue
            try: y = int(c0)
            except Exception: continue
            if not (1960 <= y <= 2035): continue
            def g(i):
                try: return round(float(str(r[i]).replace(",", "")))
                except Exception: return None
            if g(1): low[y] = g(1)
            if g(3): mid[y] = g(3)
            if g(5): high[y] = g(5)
            if g(6): top5[y] = g(6)
        if not low or not wealth["top1"]:
            print("distribution: no data, keeping existing"); return
        yr = lambda d: {str(k): d[k] for k in sorted(d)}
        out = {"generated": datetime.date.today().isoformat(), "base_year": int(base),
               "wealth": {"note": "Share of total U.S. household net worth held by each group. Source: Federal Reserve Distributional Financial Accounts.",
                          "series": {"top1": {"label": "Top 1%", "years": yr(wealth["top1"])}, "next9": {"label": "Next 9% (90–99th)", "years": yr(wealth["next9"])},
                                     "mid40": {"label": "Middle 40% (50–90th)", "years": yr(wealth["mid40"])}, "bottom50": {"label": "Bottom 50%", "years": yr(wealth["bottom50"])}}},
               "income": {"note": "Mean household income by group, in constant " + base + " dollars. Source: U.S. Census Bureau, Historical Income Table H-3.",
                          "series": {"low": {"label": "Low income (bottom 20%)", "years": yr(low)}, "mid": {"label": "Middle income (middle 20%)", "years": yr(mid)},
                                     "high": {"label": "High income (top 20%)", "years": yr(high)}, "top5": {"label": "Top 5%", "years": yr(top5)}}},
               "productivity": {"note": "Nonfarm-business output per hour vs. average real hourly compensation (total comp, incl. benefits), indexed to the earliest common year = 100. Source: FRED / U.S. BLS (OPHNFB, COMPRNFB).",
                                "series": {"output": {"label": "Productivity (output per hour)", "years": yr(prod["output"])},
                                           "pay": {"label": "Average pay per hour", "years": yr(prod["pay"])}}}}
        json.dump(out, open(os.path.join(HERE, "distribution.json"), "w"), separators=(",", ":"))
        print("distribution: wealth %d-%d, income %d-%d" % (min(wealth["top1"]), max(wealth["top1"]), min(low), max(low)))
    except Exception as e:
        print("distribution: skipped (" + str(e)[:80] + "), keeping existing file")

def build_despair():
    try:
        def cdc(url):
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            return json.loads(urllib.request.urlopen(req, timeout=40).read().decode())
        od = cdc("https://data.cdc.gov/resource/xkb8-kh2a.json?state=US&indicator=Number%20of%20Drug%20Overdose%20Deaths&month=December&$select=year,data_value&$order=year")
        overdose = {r["year"]: int(float(r["data_value"])) for r in od if r.get("data_value")}
        su = cdc("https://data.cdc.gov/resource/bi63-dtpu.json?state=United%20States&cause_name=Suicide&$select=year,deaths&$order=year")
        suicide = {r["year"]: int(float(r["deaths"])) for r in su if r.get("deaths")}
        # bi63-dtpu (Leading Causes of Death) stops at 2017. Extend with CDC "select causes"
        # monthly sets: bxq8-mugm = final 2014-2019, 9dzk-mvmi = provisional 2020+. Sum whole
        # years only (12 months), and only fill years we don't already have (>=2018).
        def ann_suicide(res_id):
            rows = cdc("https://data.cdc.gov/resource/" + res_id + ".json?$where=jurisdiction_of_occurrence='United%20States'&$limit=5000")
            counts, months = {}, {}
            for r in rows:
                y, v = r.get("year"), r.get("intentional_self_harm_suicide")
                if y and v:
                    counts[y] = counts.get(y, 0) + int(v); months[y] = months.get(y, 0) + 1
            return {y: counts[y] for y in counts if months[y] == 12}
        prov_years = []
        try:
            extra = ann_suicide("bxq8-mugm")            # 2014-2019 final
            prov = ann_suicide("9dzk-mvmi")             # 2020+ provisional (whole years)
            for y, v in list(extra.items()) + list(prov.items()):
                if int(y) >= 2018 and y not in suicide:
                    suicide[y] = v
            prov_years = sorted(y for y in prov if int(y) >= 2020 and suicide.get(y) == prov[y])
        except Exception as _e:
            print("despair: suicide extension skipped (" + str(_e)[:50] + ")")
        if not overdose or not suicide:
            print("despair: no data, keeping existing"); return
        snote = "Suicide = final counts 1999-2019 (NCHS)"
        if prov_years:
            snote += ", plus provisional monthly counts for " + prov_years[0] + "-" + prov_years[-1]
        snote += "."
        out = {"generated": datetime.date.today().isoformat(),
               "note": "Deaths of despair. Drug overdose = provisional 12-month-ending counts (Dec). " + snote + " Source: CDC / National Center for Health Statistics (data.cdc.gov: bi63-dtpu, bxq8-mugm, 9dzk-mvmi). Shown for context, not folded into the grade.",
               "series": {"overdose": {"label": "Drug overdose deaths", "years": {k: overdose[k] for k in sorted(overdose)}},
                          "suicide": {"label": "Suicide deaths", "years": {k: suicide[k] for k in sorted(suicide, key=int)}}}}
        json.dump(out, open(os.path.join(HERE, "despair.json"), "w"), separators=(",", ":"))
        print("despair: overdose %s-%s, suicide %s-%s" % (min(overdose), max(overdose), min(suicide, key=int), max(suicide, key=int)))
    except Exception as e:
        print("despair: skipped (" + str(e)[:70] + "), keeping existing file")

def build_fiscal():
    try:
        FY = 2024
        def getj(url):
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            return json.loads(urllib.request.urlopen(req, timeout=40).read().decode())
        def fred_dollars(sid):
            return {y: round(sum(v) / len(v) * 1e9) for y, v in fetch_csv(sid).items()}
        def amtf(r, f):
            try: return float(r[f])
            except Exception: return None
        # spending by function (NET, Treasury MTS table 9)
        FUNCS = {'National Defense', 'International Affairs', 'General Science, Space, and Technology', 'Energy', 'Natural Resources and Environment', 'Agriculture', 'Commerce and Housing Credit', 'Transportation', 'Community and Regional Development', 'Education, Training, Employment, and Social Services', 'Health', 'Medicare', 'Income Security', 'Social Security', 'Veterans Benefits and Services', 'Administration of Justice', 'General Government', 'Net Interest'}
        t9 = getj("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_9?filter=record_fiscal_year:eq:%d,record_calendar_month:eq:09&fields=classification_desc,current_fytd_rcpt_outly_amt,sequence_level_nbr&page%%5Bsize%%5D=60" % FY)
        funcs, intl = [], None
        for r in t9.get("data", []):
            nm = r["classification_desc"].strip()
            if nm in FUNCS:
                v = amtf(r, "current_fytd_rcpt_outly_amt")
                if v is not None:
                    funcs.append({"name": nm, "amount": round(v)})
                    if nm == "International Affairs": intl = round(v)
        funcs.sort(key=lambda x: -x["amount"])
        # receipts by source (Treasury MTS table 4)
        t4 = getj("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_4?filter=record_fiscal_year:eq:%d,record_calendar_month:eq:09&fields=classification_desc,parent_id,current_fytd_net_rcpt_amt,sequence_level_nbr&page%%5Bsize%%5D=200" % FY)
        rows = t4.get("data", [])
        totals_map = {}
        for r in rows:
            d = r["classification_desc"]
            if d.startswith("Total -- "):
                v = amtf(r, "current_fytd_net_rcpt_amt")
                if v is not None: totals_map[d[len("Total -- "):].rstrip(":")] = v
        receipts_total = totals_map.get("Receipts")
        sources = []
        for r in rows:
            if r.get("sequence_level_nbr") != "1": continue
            nm = r["classification_desc"].rstrip(":")
            if nm.startswith("Total"): continue
            a = amtf(r, "current_fytd_net_rcpt_amt")
            if a is None: a = totals_map.get(nm)
            if a and a > 0: sources.append({"name": nm, "amount": round(a)})
        sources.sort(key=lambda x: -x["amount"])
        fyfsd = fetch_csv("FYFSD")  # {year: [value in $M]}
        dv = fyfsd.get(FY, [-1815377.0])
        deficit = abs(round((sum(dv) / len(dv)) * 1e6))
        tot_rc = round(receipts_total) if receipts_total else sum(s["amount"] for s in sources)
        if funcs and sources:
            json.dump({"generated": datetime.date.today().isoformat(), "fy": FY,
                       "totals": {"outlays": tot_rc + deficit, "receipts": tot_rc, "deficit": deficit},
                       "note": "Federal outlays by function (NET) and receipts by source, from the U.S. Treasury Monthly Treasury Statement; deficit from FRED. Fiscal year " + str(FY) + ".",
                       "spending": funcs, "receipts": sources},
                      open(os.path.join(HERE, "budget.json"), "w"), separators=(",", ":"))
            print("budget: %d functions, %d sources" % (len(funcs), len(sources)))
        json.dump({"generated": datetime.date.today().isoformat(),
                   "note": "Trade (exports, imports, balance) and defense spending from FRED/U.S. BEA; international-affairs outlays from the Treasury MTS.",
                   "intl_affairs": {"amount": intl, "fy": FY},
                   "trade": {"exports": fred_dollars("EXPGS"), "imports": fred_dollars("IMPGS"), "balance": fred_dollars("NETEXP")},
                   "defense": fred_dollars("FDEFX")},
                  open(os.path.join(HERE, "foreign.json"), "w"), separators=(",", ":"))
        print("foreign: trade + defense written")
    except Exception as e:
        print("fiscal: skipped (" + str(e)[:70] + "), keeping existing files")

def build_world():
    # US vs peer nations (World Bank API, key-free). Mobility is a fixed 2017 dataset, not refreshed here.
    try:
        COUNTRIES = ["USA", "CAN", "GBR", "DEU", "FRA", "JPN", "AUS", "SWE", "NLD", "ITA", "ESP", "KOR"]
        # Ordered so U.S. strengths (output, research, schooling) lead, then health/equity
        # measures where it trails, to keep the set balanced rather than negative-leaning.
        IND = {"gdp_pc": ("NY.GDP.PCAP.PP.KD", "GDP per capita", "$ (PPP)", 1),
               "rd_gdp": ("GB.XPD.RSDV.GD.ZS", "R&D spending", "% of GDP", 1),
               "tertiary": ("SE.TER.CUAT.BA.ZS", "Adults with a bachelor's+", "% age 25-64", 1),
               "life_exp": ("SP.DYN.LE00.IN", "Life expectancy", "years", 1),
               "health_gdp": ("SH.XPD.CHEX.GD.ZS", "Health spending", "% of GDP", -1),
               "gini": ("SI.POV.GINI", "Income inequality (Gini)", "index", -1),
               "maternal": ("SH.STA.MMRT", "Maternal mortality", "per 100k births", -1),
               "infant": ("SP.DYN.IMRT.IN", "Infant mortality", "per 1,000 births", -1),
               "homicide": ("VC.IHR.PSRC.P5", "Homicide rate", "per 100k", -1),
               "suicide": ("SH.STA.SUIC.P5", "Suicide rate", "per 100k", -1)}
        NAMES = {"USA": "United States", "CAN": "Canada", "GBR": "United Kingdom", "DEU": "Germany", "FRA": "France", "JPN": "Japan", "AUS": "Australia", "SWE": "Sweden", "NLD": "Netherlands", "ITA": "Italy", "ESP": "Spain", "KOR": "South Korea"}
        def wb(code):
            url = "https://api.worldbank.org/v2/country/" + ";".join(COUNTRIES) + "/indicator/" + code + "?format=json&per_page=500&date=2015:2025&mrnev=1"
            for a in range(3):
                try:
                    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
                    d = json.loads(urllib.request.urlopen(req, timeout=30).read().decode())
                    break
                except Exception:
                    if a == 2: return {}
                    time.sleep(2)
            out = {}
            for r in (d[1] if len(d) > 1 and d[1] else []):
                iso, v = r["countryiso3code"], r["value"]
                if v is not None and iso not in out: out[iso] = {"v": round(v, 1), "y": r["date"]}
            return out
        indicators = {}
        for key, (code, label, unit, better) in IND.items():
            data = wb(code)
            if data:
                indicators[key] = {"label": label, "unit": unit, "better": better, "year": max(x["y"] for x in data.values()),
                                   "countries": {k: data[k]["v"] for k in data}}
        if "maternal" in indicators:
            indicators["maternal"]["note"] = ("World Bank modeled estimate, built for cross-country comparability. "
                "The U.S. CDC's own measure is higher (about 19 in 2023, and 22-33 in recent years).")
        if indicators:
            json.dump({"generated": datetime.date.today().isoformat(),
                       "note": "The U.S. compared with peer high-income nations. The U.S. leads on output and research and sits mid-pack on schooling, but trails the group on most health and equity measures. Source: World Bank (most recent year available per indicator).",
                       "names": NAMES, "indicators": indicators},
                      open(os.path.join(HERE, "world.json"), "w"), separators=(",", ":"))
            print("world: %d indicators" % len(indicators))
    except Exception as e:
        print("world: skipped (" + str(e)[:70] + "), keeping existing file")

def build_demographics():
    # The national average hides who the Dream reaches. Two dimensions FRED carries
    # cleanly over time: unemployment by race (monthly, annual-averaged) and
    # homeownership by race (quarterly, annual-averaged). No API key needed.
    try:
        unemp = {"white": "LNS14000003", "black": "LNS14000006", "hispanic": "LNS14000009", "asian": "LNS14032183"}
        home = {"white": "NHWAHORUSQ156N", "black": "BOAAAHORUSQ156N", "hispanic": "HOLHORUSQ156N"}
        def ann(sid):
            by = fetch_csv(sid)
            return {str(y): round(sum(v) / len(v), 1) for y, v in by.items()}
        u = {g: ann(sid) for g, sid in unemp.items()}
        h = {g: ann(sid) for g, sid in home.items()}
        out = {"generated": datetime.date.today().isoformat(),
               "defnote": "Race/ethnicity groups overlap: Hispanic is an ethnicity, so Hispanics also appear in the race groups. The two charts use slightly different 'White' definitions (noted per chart). Native American and multiracial groups lack a clean long series and are not shown.",
               "unemployment": {
                   "note": "Unemployment rate by race/ethnicity, annual averages. 'White' here includes Hispanic whites (BLS definition). Source: FRED / U.S. BLS (LNS14000003/006/009, LNS14032183). Asian series starts 2003.",
                   "unit": "%", "groups": {"white": "White (incl. Hispanic)", "black": "Black", "hispanic": "Hispanic", "asian": "Asian"},
                   "series": u},
               "homeownership": {
                   "note": "Homeownership rate by race/ethnicity, annual averages from quarterly data (from 1994). 'White' here is non-Hispanic white. Source: FRED / U.S. Census Bureau (NHWAHORUSQ156N, BOAAAHORUSQ156N, HOLHORUSQ156N).",
                   "unit": "%", "groups": {"white": "White (non-Hisp.)", "black": "Black", "hispanic": "Hispanic"},
                   "series": h},
               "wealth": {
                   "note": "Median household net worth by race/ethnicity. Source: Federal Reserve, Survey of Consumer Finances (2022). 'Other' includes Asian, Native American and multiracial households (the SCF does not break Asian out separately).",
                   "unit": "$", "year": "2022",
                   "groups": {"white": "White (non-Hisp.)", "black": "Black", "hispanic": "Hispanic", "other": "Other*"},
                   "values": {"white": 285000, "black": 44900, "hispanic": 61600, "other": 132900}}}
        json.dump(out, open(os.path.join(HERE, "demographics.json"), "w"), separators=(",", ":"))
        print("demographics: unemp %d groups, home %d groups" % (len(u), len(h)))
    except Exception as e:
        print("demographics: skipped (" + str(e)[:70] + "), keeping existing file")

if __name__ == "__main__":
    build_national()
    build_demographics()
    build_states()
    build_state_bills()
    build_immigration()
    build_distribution()
    build_despair()
    build_fiscal()
    build_world()
    print("refresh complete", datetime.datetime.now().isoformat())
