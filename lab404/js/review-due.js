/* review-due.js (R1) — a gentle "review due today" nudge on launch.
   The mastery engine already schedules spaced review and knows which objectives are
   fading (readiness.reviewDue). Once per day, if anything is due across the learner's
   started courses, show a dismissible banner that opens the course with the most to
   refresh. No nagging: shown at most once per calendar day, per device. */
(function () {
  "use strict";
  var SEEN = "lab404.reviewNudge";   /* stores the date we last showed it */

  function today() { return new Date().toISOString().slice(0, 10); }
  function shownToday() { try { return localStorage.getItem(SEEN) === today(); } catch (e) { return false; } }
  function markShown() { try { localStorage.setItem(SEEN, today()); } catch (e) {} }

  /* Sum review-due objectives across started courses; find the one with the most. */
  function scan() {
    var M = window.LAB404_MASTERY, CO = window.LAB404_COURSES || {};
    if (!M || !M.readiness) return null;
    var total = 0, top = null, topN = 0, courses = 0;
    Object.keys(CO).forEach(function (id) {
      try { if (!localStorage.getItem("lab404.mastery." + id)) return; } catch (e) { return; }
      var r = M.readiness(id); if (!r || !r.reviewDue) return;
      total += r.reviewDue; courses++;
      if (r.reviewDue > topN) { topN = r.reviewDue; top = id; }
    });
    return total > 0 ? { total: total, top: top, courses: courses } : null;
  }

  function style() {
    if (document.getElementById("rvd-style")) return;
    var s = document.createElement("style"); s.id = "rvd-style";
    s.textContent =
      ".rvd{position:fixed;left:50%;transform:translateX(-50%) translateY(16px);bottom:calc(52px + env(safe-area-inset-bottom,0px));z-index:9995;" +
        "display:flex;align-items:center;gap:12px;max-width:min(92vw,440px);" +
        "background:var(--surface,#15201c);border:1px solid var(--accent2,#39e3c8);border-radius:12px;" +
        "padding:11px 13px;box-shadow:0 10px 34px rgba(0,0,0,.45);color:var(--text,#e8efea);font-size:.86rem;opacity:0;transition:opacity .25s,transform .25s}" +
      ".rvd.in{opacity:1;transform:translateX(-50%) translateY(0)}" +
      ".rvd .ic{font-size:1.3rem;flex:none}" +
      ".rvd .tx{flex:1;min-width:0;line-height:1.35}" +
      ".rvd .tx b{color:var(--accent2,#39e3c8)}" +
      ".rvd button{font:inherit;cursor:pointer;border-radius:8px;padding:7px 11px;font-weight:700;font-size:.78rem;white-space:nowrap}" +
      ".rvd .go{background:var(--accent2,#39e3c8);color:#05211c;border:0}" +
      ".rvd .no{background:transparent;color:var(--text-muted,#9aa);border:1px solid var(--border,#2a3432)}";
    document.head.appendChild(s);
  }

  function show(info) {
    style();
    var el = document.createElement("div");
    el.className = "rvd"; el.setAttribute("role", "status");
    var n = info.total, cs = info.courses;
    el.innerHTML =
      '<span class="ic">🔁</span>' +
      '<span class="tx"><b>' + n + '</b> objective' + (n > 1 ? 's' : '') + ' due for review today' +
        (cs > 1 ? ' across ' + cs + ' courses' : '') + '. A quick refresh keeps your grade from fading.</span>' +
      '<button class="go" id="rvd-go">Review</button>' +
      '<button class="no" id="rvd-no" aria-label="Dismiss">✕</button>';
    document.body.appendChild(el);
    void el.offsetWidth; el.classList.add("in");
    function close() { el.classList.remove("in"); setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 260); }
    el.querySelector("#rvd-no").addEventListener("click", close);
    el.querySelector("#rvd-go").addEventListener("click", function () {
      close();
      if (window.Desktop && Desktop.openWindow && info.top) Desktop.openWindow("course", { course: info.top });
    });
    markShown();
  }

  function run() {
    if (shownToday()) return;
    var info = scan();
    if (info) setTimeout(function () { show(info); }, 2200);
  }

  /* Course data is lazy-loaded; wait for it, then check once. */
  if (window.LAB404_COURSES) run();
  else window.addEventListener("lab404:data-ready", run, { once: true });
})();
