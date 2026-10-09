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

if __name__ == "__main__":
    build_national()
    build_states()
    build_state_bills()
    build_immigration()
    print("refresh complete", datetime.datetime.now().isoformat())
