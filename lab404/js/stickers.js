/* stickers.js (R7) — a collectible Sticker Book. Stickers unlock as a learner hits
   milestones (levels, streaks, questions answered, objectives mastered, subjects
   explored). A playful, kid-facing layer on top of the same stats the badges use.
   Local only. window.Lab404Stickers.render(el) | .count() */
(function () {
  "use strict";

  function statsNow() {
    var s = (window.Lab404Goals && Lab404Goals.stats) ? Lab404Goals.stats()
      : { streak: 0, total: 0, objMastered: 0, started: 0, bestA: false, subjects: 0, dailyMet: false };
    var li = (window.XPSystem && XPSystem.levelInfo) ? XPSystem.levelInfo() : { level: 1, xp: 0 };
    s.level = li.level; s.xp = li.xp;
    return s;
  }

  /* emoji, name, unlock test, and the hint shown while locked */
  var STICKERS = [
    { e: "🚀", n: "Blast Off", f: function (s) { return s.started >= 1; }, h: "Start your first course" },
    { e: "⭐", n: "First Star", f: function (s) { return s.objMastered >= 1; }, h: "Master your first skill" },
    { e: "🎯", n: "On Target", f: function (s) { return s.dailyMet; }, h: "Hit your daily goal" },
    { e: "🔥", n: "On Fire", f: function (s) { return s.streak >= 3; }, h: "Study 3 days in a row" },
    { e: "📅", n: "Week Streak", f: function (s) { return s.streak >= 7; }, h: "Study 7 days in a row" },
    { e: "🦄", n: "Level 3", f: function (s) { return s.level >= 3; }, h: "Reach level 3" },
    { e: "💎", n: "Gem Hunter", f: function (s) { return s.level >= 5; }, h: "Reach level 5" },
    { e: "💯", n: "Century", f: function (s) { return s.total >= 100; }, h: "Answer 100 questions" },
    { e: "🏅", n: "500 Club", f: function (s) { return s.total >= 500; }, h: "Answer 500 questions" },
    { e: "🧠", n: "Big Brain", f: function (s) { return s.objMastered >= 10; }, h: "Master 10 skills" },
    { e: "🦉", n: "Wise One", f: function (s) { return s.objMastered >= 25; }, h: "Master 25 skills" },
    { e: "🏆", n: "Champion", f: function (s) { return s.objMastered >= 50; }, h: "Master 50 skills" },
    { e: "🅰️", n: "Ace", f: function (s) { return s.bestA; }, h: "Earn an A in any course" },
    { e: "🌍", n: "Explorer", f: function (s) { return s.subjects >= 3; }, h: "Study 3 different subjects" },
    { e: "🌈", n: "Rainbow", f: function (s) { return s.subjects >= 5; }, h: "Study 5 different subjects" }
  ];

  function count() { var s = statsNow(); var n = 0; STICKERS.forEach(function (k) { if (k.f(s)) n++; }); return n; }

  function style() {
    if (document.getElementById("stk-style")) return;
    var st = document.createElement("style"); st.id = "stk-style";
    st.textContent =
      ".stk{padding:16px 18px;max-width:640px;margin:0 auto;box-sizing:border-box}" +
      ".stk h2{font-size:1.15rem;color:var(--accent2,#39e3c8);margin:0 0 2px}" +
      ".stk .stk-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 14px}" +
      ".stk-bar{height:10px;background:var(--border,#334);border-radius:5px;overflow:hidden;margin:0 0 16px}" +
      ".stk-bar span{display:block;height:100%;background:linear-gradient(90deg,var(--accent2,#39e3c8),var(--accent,#4a90e2))}" +
      ".stk-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:10px}" +
      ".stk-card{border:1px solid var(--border,#334);border-radius:12px;padding:12px 6px 10px;text-align:center}" +
      ".stk-card.on{border-color:var(--accent2,#39e3c8);background:rgba(57,227,200,.06)}" +
      ".stk-e{font-size:2.3rem;line-height:1;display:block;filter:grayscale(1);opacity:.35}" +
      ".stk-card.on .stk-e{filter:none;opacity:1}" +
      ".stk-n{display:block;font-size:.68rem;font-weight:700;margin-top:6px;color:var(--text-muted,#9aa)}" +
      ".stk-card.on .stk-n{color:var(--text,#dfe)}" +
      ".stk-h{display:block;font-size:.58rem;color:var(--text-faint,#778);margin-top:3px;line-height:1.3}";
    document.head.appendChild(st);
  }

  function render(content) {
    style();
    var s = statsNow();
    var got = 0;
    var cards = STICKERS.map(function (k) {
      var on = k.f(s); if (on) got++;
      return '<div class="stk-card' + (on ? " on" : "") + '">' +
        '<span class="stk-e">' + k.e + '</span>' +
        '<span class="stk-n">' + k.n + '</span>' +
        (on ? '<span class="stk-h">✓ unlocked</span>' : '<span class="stk-h">' + k.h + '</span>') +
        '</div>';
    }).join("");
    var pct = Math.round(got / STICKERS.length * 100);
    content.innerHTML =
      '<div class="stk">' +
        '<h2>🌟 Sticker Book</h2>' +
        '<p class="stk-lead">Collect a sticker every time you reach a new milestone. You’ve collected <b>' + got + ' of ' + STICKERS.length + '</b>!</p>' +
        '<div class="stk-bar"><span style="width:' + pct + '%"></span></div>' +
        '<div class="stk-grid">' + cards + '</div>' +
      '</div>';
  }

  window.Lab404Stickers = { render: render, count: count };
})();
