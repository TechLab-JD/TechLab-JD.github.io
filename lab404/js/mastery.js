/* Lab404 Study Zone — mastery / readiness engine (Synapse-style, objective-based).
   Pure logic + localStorage; no DOM. Consumed by js/course-loader.js.
   Per objective: a recent-weighted mastery % (last N attempts) → one of four bands
   (weak / needs / strong / mastered, Mastered ≥85% with consistency). Course readiness =
   weight-averaged objective mastery → a living percentage/letter/GPA that climbs toward A
   as objectives are mastered. Grades reflect current mastery, not a one-time test. */
window.LAB404_MASTERY = (function () {
  var RECENT = 8;        // how many recent attempts count per objective
  var THRESHOLD = 0.85;  // world-class mastery bar
  var MIN_FOR_MASTERED = 4; // consistency: can't "master" on one lucky hit

  function course(id) { return (window.LAB404_COURSES || {})[id] || null; }
  function key(id) { return "lab404.mastery." + id; }

  function load(id) {
    var st = { obj: {}, placed: false };
    try { var r = localStorage.getItem(key(id)); if (r) st = JSON.parse(r); } catch (e) {}
    if (!st.obj) st.obj = {};
    return st;
  }
  function save(id, st) { try { localStorage.setItem(key(id), JSON.stringify(st)); } catch (e) {} }
  function reset(id) { try { localStorage.removeItem(key(id)); } catch (e) {} }

  function record(id, code, correct) {
    var st = load(id);
    var o = st.obj[code] || (st.obj[code] = { recent: [], seen: 0 });
    o.recent.push(correct ? 1 : 0);
    while (o.recent.length > RECENT) o.recent.shift();
    o.seen = (o.seen || 0) + 1;
    save(id, st);
    return o;
  }
  function markPlaced(id) { var st = load(id); st.placed = true; save(id, st); }

  function bandOf(pct, seen) {
    if (!seen) return "none";
    if (seen >= MIN_FOR_MASTERED && pct >= THRESHOLD) return "mastered";
    if (pct >= 0.70) return "strong";
    if (pct >= 0.40) return "needs";
    return "weak";
  }
  var BAND_RANK = { none: 0, weak: 1, needs: 2, strong: 3, mastered: 4 };
  var BAND_LABEL = { none: "Not started", weak: "Weak", needs: "Needs work", strong: "Strong", mastered: "Mastered" };

  function objStats(id, code, st) {
    st = st || load(id);
    var o = st.obj[code] || { recent: [], seen: 0 };
    var n = o.recent.length;
    var pct = n ? o.recent.reduce(function (a, b) { return a + b; }, 0) / n : 0;
    var band = bandOf(pct, o.seen || 0);
    return { code: code, pct: pct, band: band, bandLabel: BAND_LABEL[band], seen: o.seen || 0 };
  }

  var GRADE_TABLE = [
    [0.93, "A", 4.0], [0.90, "A-", 3.7], [0.87, "B+", 3.3], [0.83, "B", 3.0], [0.80, "B-", 2.7],
    [0.77, "C+", 2.3], [0.73, "C", 2.0], [0.70, "C-", 1.7], [0.67, "D+", 1.3], [0.63, "D", 1.0],
    [0.60, "D-", 0.7], [0, "F", 0.0]
  ];
  function grade(pct) {
    for (var i = 0; i < GRADE_TABLE.length; i++) if (pct >= GRADE_TABLE[i][0]) return { letter: GRADE_TABLE[i][1], gpa: GRADE_TABLE[i][2] };
    return { letter: "F", gpa: 0.0 };
  }

  function readiness(id) {
    var c = course(id); if (!c) return null;
    var st = load(id);
    var wSum = 0, pSum = 0, counts = { none: 0, weak: 0, needs: 0, strong: 0, mastered: 0 }, started = false;
    (c.objectives || []).forEach(function (ob) {
      var s = objStats(id, ob.code, st), w = ob.weight || 1;
      wSum += w; pSum += s.pct * w;
      counts[s.band]++;
      if (s.seen > 0) started = true;
    });
    var pct = wSum ? pSum / wSum : 0;
    var g = grade(pct);
    var total = (c.objectives || []).length;
    return {
      pct: pct, letter: g.letter, gpa: g.gpa, counts: counts, total: total,
      mastered: counts.mastered, started: started, placed: !!st.placed,
      complete: total > 0 && counts.mastered === total
    };
  }

  function weakest(id, n) {
    var c = course(id); if (!c) return [];
    var st = load(id);
    var arr = (c.objectives || []).map(function (ob) { return objStats(id, ob.code, st); });
    arr.sort(function (a, b) { return (BAND_RANK[a.band] - BAND_RANK[b.band]) || (a.pct - b.pct); });
    return arr.slice(0, n || arr.length).map(function (s) { return s.code; });
  }

  function norm(s) { return String(s == null ? "" : s).replace(/[,\s]/g, "").toLowerCase(); }
  function check(q, resp) {
    if (!q) return false;
    if (q.type === "numeric") { var a = parseFloat(norm(q.answer)), r = parseFloat(norm(resp)); return !isNaN(r) && a === r; }
    if (q.type === "mc") return Number(resp) === Number(q.a);
    if (q.type === "multi") {
      if (!Array.isArray(resp)) return false;
      var want = (q.correct || []).slice().sort().join(","), got = resp.slice().sort().join(",");
      return want === got && resp.length > 0;
    }
    return false;
  }

  function questionsFor(id, code) {
    var c = course(id); if (!c) return [];
    return (c.questions || []).filter(function (q) { return q.obj === code; });
  }

  return {
    RECENT: RECENT, THRESHOLD: THRESHOLD, BAND_LABEL: BAND_LABEL, BAND_RANK: BAND_RANK,
    course: course, load: load, save: save, reset: reset, record: record, markPlaced: markPlaced,
    bandOf: bandOf, objStats: objStats, grade: grade, readiness: readiness, weakest: weakest,
    check: check, questionsFor: questionsFor
  };
})();
