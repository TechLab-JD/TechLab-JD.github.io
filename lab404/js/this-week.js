/* this-week.js (R4-8) — a glanceable "what happened this week" summary.
   A busy parent hands the hub to a child and later wants a 10-second read on
   whether anything got done — without an account or digging through screens.
   Shows a 7-day activity bar chart plus the week's totals, days active, goal
   days met, and current streak, all from the local per-day log in goals.js.
   window.Lab404Week.render(el) */
(function () {
  "use strict";

  function style() {
    if (document.getElementById("tw-style")) return;
    var s = document.createElement("style"); s.id = "tw-style";
    s.textContent =
      ".tw{padding:16px 18px;max-width:560px;margin:0 auto;box-sizing:border-box}" +
      ".tw h2{font-size:1.15rem;margin:0 0 2px;color:var(--accent2,#39e3c8)}" +
      ".tw .tw-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 16px}" +
      ".tw-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:18px}" +
      ".tw-stat{border:1px solid var(--border,#334);border-radius:12px;padding:12px 13px;background:var(--surface-2,rgba(127,127,127,.06))}" +
      ".tw-stat .n{font-size:1.5rem;font-weight:800;color:var(--text,#dfe);font-variant-numeric:tabular-nums}" +
      ".tw-stat .l{font-size:.68rem;text-transform:uppercase;letter-spacing:.05em;color:var(--text-faint,#778);margin-top:2px}" +
      ".tw-chart{display:flex;align-items:flex-end;gap:8px;height:130px;border-bottom:1px solid var(--border,#334);padding-bottom:4px}" +
      ".tw-col{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:4px}" +
      ".tw-barwrap{flex:1;width:100%;display:flex;align-items:flex-end;justify-content:center}" +
      ".tw-bar{width:62%;min-height:3px;border-radius:5px 5px 0 0;background:var(--accent2,#39e3c8)}" +
      ".tw-bar.goal{background:#3cbe6e}" +
      ".tw-bar.zero{background:var(--border,#334)}" +
      ".tw-cv{font-size:.72rem;font-weight:700;color:var(--text,#dfe);font-variant-numeric:tabular-nums}" +
      ".tw-dow{font-size:.66rem;color:var(--text-muted,#9aa);margin-top:6px}" +
      ".tw-dow.today{color:var(--accent2,#39e3c8);font-weight:800}" +
      ".tw-note{font-size:.8rem;color:var(--text-muted,#9aa);margin-top:14px;line-height:1.5}" +
      ".tw-empty{text-align:center;color:var(--text-muted,#9aa);padding:24px 0}";
    document.head.appendChild(s);
  }

  function render(content) {
    style();
    var G = window.Lab404Goals;
    if (!G || !G.weekStats) { content.innerHTML = '<div class="tw"><p class="tw-empty">Weekly summary isn’t available.</p></div>'; return; }
    var w = G.weekStats(), goal = G.GOAL || 10;
    var max = Math.max(goal, w.days.reduce(function (m, d) { return Math.max(m, d.a); }, 0));
    var todayKey = new Date().toISOString().slice(0, 10);

    var bars = w.days.map(function (d) {
      var h = Math.round(d.a / max * 100);
      var cls = d.a === 0 ? "zero" : (d.a >= goal ? "goal" : "");
      return '<div class="tw-col">' +
        '<div class="tw-cv">' + (d.a || "") + '</div>' +
        '<div class="tw-barwrap"><div class="tw-bar ' + cls + '" style="height:' + h + '%"></div></div>' +
        '<div class="tw-dow' + (d.key === todayKey ? " today" : "") + '">' + d.dow + '</div></div>';
    }).join("");

    var none = w.totalA === 0;
    content.innerHTML = '<div class="tw"><h2>📅 This Week</h2>' +
      '<p class="tw-lead">A quick look at the last 7 days. Green bars are days the daily goal (' + goal + ') was met.</p>' +
      '<div class="tw-stats">' +
        '<div class="tw-stat"><div class="n">' + w.totalA + '</div><div class="l">Questions</div></div>' +
        '<div class="tw-stat"><div class="n">' + w.active + '</div><div class="l">Days active</div></div>' +
        '<div class="tw-stat"><div class="n">' + w.goalDays + '</div><div class="l">Goal days</div></div>' +
        '<div class="tw-stat"><div class="n">🔥 ' + w.streak + '</div><div class="l">Day streak</div></div>' +
      '</div>' +
      '<div class="tw-chart">' + bars + '</div>' +
      (none
        ? '<p class="tw-note">No practice logged in the last 7 days yet. Open any subject and answer a few questions — this fills in automatically.</p>'
        : '<p class="tw-note">' + w.totalC + ' of ' + w.totalA + ' correct this week' + (w.active >= 5 ? ' — a strong, steady week! 🎉' : w.active >= 2 ? ' — nice momentum, keep it going.' : '.') + '</p>') +
      '</div>';
  }

  window.Lab404Week = { render: render };
})();
