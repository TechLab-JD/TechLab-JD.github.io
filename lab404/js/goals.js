/* goals.js — daily goal + achievement badges (E4).
   A small per-day target (answer N questions today) and a set of badges derived
   from existing progress. Local only; the streak itself lives in xp-system.js. */
(function () {
  "use strict";

  var GOAL = 10;                         /* questions per day to hit the daily goal */
  var DKEY = "lab404.daily";             /* { date, answered, correct } */
  var TKEY = "lab404.answeredTotal";     /* cumulative questions answered */
  var WKEY = "lab404.week";              /* R4-8: { "YYYY-MM-DD": {a, c} }, last ~14 days */

  function today() { return new Date().toISOString().slice(0, 10); }
  function loadDaily() {
    try { var d = JSON.parse(localStorage.getItem(DKEY) || "null"); if (d && d.date) return d; } catch (e) {}
    return { date: "", answered: 0, correct: 0 };
  }

  /* Called once per answered question from the quiz runners. */
  function bump(ok) {
    var d = loadDaily();
    if (d.date !== today()) d = { date: today(), answered: 0, correct: 0 };
    d.answered++; if (ok) d.correct++;
    try { localStorage.setItem(DKEY, JSON.stringify(d)); } catch (e) {}
    try { localStorage.setItem(TKEY, String((parseInt(localStorage.getItem(TKEY) || "0", 10) || 0) + 1)); } catch (e) {}
    /* R4-8: keep a rolling per-day log so a parent can see the week. */
    try {
      var w = {};
      try { w = JSON.parse(localStorage.getItem(WKEY) || "{}") || {}; } catch (e2) { w = {}; }
      var t = today(); w[t] = w[t] || { a: 0, c: 0 }; w[t].a++; if (ok) w[t].c++;
      var cutoff = new Date(Date.now() - 14 * 864e5).toISOString().slice(0, 10);
      Object.keys(w).forEach(function (k) { if (k < cutoff) delete w[k]; });   /* prune */
      localStorage.setItem(WKEY, JSON.stringify(w));
    } catch (e) {}
    try { window.dispatchEvent(new CustomEvent("lab404:answered")); } catch (e) {}  /* R4-4: live tray update */
  }

  /* R4-8: the last 7 days (oldest→newest) plus simple totals, for the weekly summary. */
  function weekStats() {
    var w = {}; try { w = JSON.parse(localStorage.getItem(WKEY) || "{}") || {}; } catch (e) {}
    var days = [], totalA = 0, totalC = 0, active = 0, goalDays = 0;
    for (var i = 6; i >= 0; i--) {
      var dt = new Date(Date.now() - i * 864e5), key = dt.toISOString().slice(0, 10);
      var e = w[key] || { a: 0, c: 0 };
      days.push({ key: key, dow: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dt.getDay()], a: e.a, c: e.c });
      totalA += e.a; totalC += e.c; if (e.a > 0) active++; if (e.a >= GOAL) goalDays++;
    }
    return { days: days, totalA: totalA, totalC: totalC, active: active, goalDays: goalDays,
      streak: parseInt(localStorage.getItem("study-streak-count") || "0", 10) || 0 };
  }

  function daily() {
    var d = loadDaily();
    var answered = d.date === today() ? d.answered : 0;
    return { answered: answered, correct: d.date === today() ? d.correct : 0, goal: GOAL, met: answered >= GOAL };
  }

  function stats() {
    var M = window.LAB404_MASTERY, CO = window.LAB404_COURSES || {};
    var objMastered = 0, started = 0, bestA = false, subj = {};
    if (M && M.readiness) Object.keys(CO).forEach(function (id) {
      if (!localStorage.getItem("lab404.mastery." + id)) return;   /* only started courses */
      var r = M.readiness(id); if (!r) return;
      started++; objMastered += (r.mastered || 0);
      if (r.letter === "A") bestA = true;
      var sk = CO[id].subjectKey; if (sk) subj[sk] = true;
    });
    return {
      streak: parseInt(localStorage.getItem("study-streak-count") || "0", 10) || 0,
      total: parseInt(localStorage.getItem(TKEY) || "0", 10) || 0,
      objMastered: objMastered, started: started, bestA: bestA,
      subjects: Object.keys(subj).length, dailyMet: daily().met
    };
  }

  /* Badge catalog — each earned purely from the stats above. */
  function badges() {
    var s = stats();
    return [
      { icon: "🌱", label: "Getting started", desc: "Start your first course",      earned: s.started >= 1 },
      { icon: "🎯", label: "Daily goal",      desc: "Answer " + GOAL + " questions in a day", earned: s.dailyMet },
      { icon: "🔥", label: "On a roll",       desc: "3-day study streak",            earned: s.streak >= 3 },
      { icon: "📅", label: "Week warrior",    desc: "7-day study streak",            earned: s.streak >= 7 },
      { icon: "💯", label: "Century",         desc: "Answer 100 questions",          earned: s.total >= 100 },
      { icon: "🧠", label: "Scholar",         desc: "Master 10 objectives",          earned: s.objMastered >= 10 },
      { icon: "🏆", label: "Mastermind",      desc: "Master 50 objectives",          earned: s.objMastered >= 50 },
      { icon: "⭐", label: "Straight A",      desc: "Reach an A in any course",       earned: s.bestA },
      { icon: "🌍", label: "Explorer",        desc: "Study 3 different subjects",     earned: s.subjects >= 3 }
    ];
  }

  window.Lab404Goals = { bump: bump, daily: daily, stats: stats, badges: badges, weekStats: weekStats, GOAL: GOAL };
})();
