/* guide.js — first-launch quick guide + a persistent "?" help button.
   Self-contained: injects its own styles, a tray button, and the overlay.
   Shows once automatically on first visit; the ? button reopens it anytime.
   State is local only (localStorage), matching the hub's privacy model. */
(function () {
  "use strict";
  var SEEN_KEY = "lab404.guide.seen.v1";
  var GRADE_KEY = "lab404.myGrade";
  var GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "C"];
  function gradeSet() { try { return GRADES.indexOf(localStorage.getItem(GRADE_KEY)) >= 0; } catch (e) { return false; } }
  function gLabel(g) { return g === "K" ? "K" : g === "C" ? "College" : g; }

  var STEPS = [
    ["🖥️", "The desktop", "Each icon down the left is a subject — Math, Science, Social Studies, Tech, Languages, Life Skills and Arts. Open one to pick your grade and start."],
    ["🚀", "The LAUNCH menu", "Bottom-left. The full list: every subject, plus Flashcards, Practice tests, the Glossary and Search — all in one place."],
    ["🎓", "Pick your grade", "Inside a subject, choose your grade (K–12 or College), then a course. Each course has short lessons and lots of practice questions."],
    ["🔍", "Find anything fast", "Search (in the LAUNCH menu) jumps straight to any topic, lesson or term across every subject."],
    ["⭐", "Your progress", "The level badge by the clock tracks XP as you learn, and flashcards remember what you've reviewed. It's all saved on this device only."],
    ["☀️", "Make it yours", "Toggle light or dark next to the clock, use the study timer, and keep going even with no internet — it works offline."]
  ];

  function css() {
    var s = document.createElement("style");
    s.textContent = [
      ".lab404-guide-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;border:1px solid var(--line,#2a3432);background:transparent;color:inherit;font:600 14px/1 var(--mono,ui-monospace,monospace);cursor:pointer;opacity:.78;transition:.15s}",
      ".lab404-guide-btn:hover{opacity:1;border-color:var(--accent,#39e3c8);color:var(--accent,#39e3c8);box-shadow:0 0 10px rgba(57,227,200,.3)}",
      ".lab404-guide-ov{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(4,8,10,.72);backdrop-filter:blur(4px);opacity:0;transition:opacity .22s ease}",
      ".lab404-guide-ov.on{opacity:1}",
      ".lab404-guide-card{width:min(560px,100%);max-height:88vh;overflow:auto;background:#0f1619;border:1px solid #223;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.6),0 0 0 1px rgba(57,227,200,.08);padding:22px 22px 18px;transform:translateY(10px) scale(.99);transition:transform .22s ease;color:#dfecea;font-family:system-ui,-apple-system,Segoe UI,sans-serif}",
      ".lab404-guide-ov.on .lab404-guide-card{transform:none}",
      ".lab404-guide-eyebrow{font:600 11px/1 ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase;color:#39e3c8}",
      ".lab404-guide-card h2{margin:8px 0 4px;font-size:22px;font-weight:700;color:#fff}",
      ".lab404-guide-card .sub{margin:0 0 16px;font-size:13.5px;color:#9fb0ad;line-height:1.5}",
      ".lab404-guide-steps{display:flex;flex-direction:column;gap:11px}",
      ".lab404-guide-step{display:grid;grid-template-columns:34px 1fr;gap:12px;align-items:start}",
      ".lab404-guide-ic{width:34px;height:34px;border-radius:9px;background:rgba(57,227,200,.1);border:1px solid rgba(57,227,200,.22);display:flex;align-items:center;justify-content:center;font-size:17px}",
      ".lab404-guide-step h3{margin:0 0 1px;font-size:14px;font-weight:600;color:#eaf4f2}",
      ".lab404-guide-step p{margin:0;font-size:12.8px;line-height:1.5;color:#9fb0ad}",
      ".lab404-guide-foot{margin-top:18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}",
      ".lab404-guide-hint{font-size:11.5px;color:#73857f}",
      ".lab404-guide-hint b{color:#39e3c8}",
      ".lab404-guide-go{background:#39e3c8;color:#04201c;border:0;border-radius:9px;padding:9px 18px;font:600 14px/1 system-ui,sans-serif;cursor:pointer}",
      ".lab404-guide-go:hover{background:#5ef0d9}",
      ".lab404-guide-x{position:absolute;top:14px;right:16px;background:none;border:0;color:#73857f;font-size:22px;line-height:1;cursor:pointer}",
      ".lab404-guide-x:hover{color:#dfecea}",
      ".lab404-guide-grades{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin:18px 0 4px}",
      "@media (max-width:460px){.lab404-guide-grades{grid-template-columns:repeat(5,1fr)}}",
      ".lab404-guide-grade{border:1px solid #2a3b3a;background:#141d1f;color:#dfecea;border-radius:10px;padding:12px 4px;font:600 15px/1 system-ui,sans-serif;cursor:pointer;transition:.12s}",
      ".lab404-guide-grade:hover{border-color:#39e3c8;color:#39e3c8;background:rgba(57,227,200,.08)}",
      ".lab404-guide-grade.col{grid-column:span 2;font-size:13px}",
      ".lab404-guide-skip{background:none;border:0;color:#73857f;font:13px system-ui;cursor:pointer;text-decoration:underline;padding:6px 0}",
      ".lab404-guide-skip:hover{color:#dfecea}",
      ".lab404-guide-back{background:none;border:0;color:#73857f;font:13px system-ui;cursor:pointer;padding:0}",
      ".lab404-guide-back:hover{color:#dfecea}",
      "@media (prefers-reduced-motion:reduce){.lab404-guide-ov,.lab404-guide-card{transition:none}}"
    ].join("");
    document.head.appendChild(s);
  }

  var overlay = null, lastFocus = null;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "lab404-guide-ov";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Study Hub quick guide");
    var steps = STEPS.map(function (s) {
      return '<div class="lab404-guide-step"><div class="lab404-guide-ic">' + s[0] +
        '</div><div><h3>' + s[1] + '</h3><p>' + s[2] + '</p></div></div>';
    }).join("");
    var grades = GRADES.map(function (g) {
      return '<button class="lab404-guide-grade' + (g === "C" ? " col" : "") + '" data-g="' + g + '">' + gLabel(g) + '</button>';
    }).join("");
    overlay.innerHTML =
      '<div class="lab404-guide-card" style="position:relative">' +
        '<button class="lab404-guide-x" aria-label="Close">×</button>' +
        '<div class="lab404-guide-screen" data-screen="welcome">' +
          '<div class="lab404-guide-eyebrow">Quick guide</div>' +
          '<h2>Welcome to the Study Hub</h2>' +
          '<p class="sub">Free, and built for studying anything — every subject from kindergarten through college. Nothing you do here leaves this device.</p>' +
          '<div class="lab404-guide-steps">' + steps + '</div>' +
          '<div class="lab404-guide-foot">' +
            '<span class="lab404-guide-hint">Need this again? Tap the <b>?</b> in the bottom-right anytime.</span>' +
            '<button class="lab404-guide-go" data-act="next">Start learning</button>' +
          '</div>' +
        '</div>' +
        '<div class="lab404-guide-screen" data-screen="grade" hidden>' +
          '<div class="lab404-guide-eyebrow">One quick thing</div>' +
          '<h2>What grade are you in?</h2>' +
          '<p class="sub">We’ll take you straight to your subjects. You can change this anytime from <b>Browse by Grade</b>.</p>' +
          '<div class="lab404-guide-grades">' + grades + '</div>' +
          '<div class="lab404-guide-foot">' +
            '<button class="lab404-guide-back" data-act="back">← Back</button>' +
            '<button class="lab404-guide-skip" data-act="skip">Skip for now</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) return close();
      var act = e.target.getAttribute && e.target.getAttribute("data-act");
      if (act === "next") { gradeSet() ? close() : showGrade(true); }
      else if (act === "back") showGrade(false);
      else if (act === "skip") close();
      var g = e.target.getAttribute && e.target.getAttribute("data-g");
      if (g) pickGrade(g);
    });
    overlay.querySelector(".lab404-guide-x").addEventListener("click", close);
  }

  function showGrade(on) {
    if (!overlay) return;
    overlay.querySelector('[data-screen="welcome"]').hidden = on;
    overlay.querySelector('[data-screen="grade"]').hidden = !on;
    var focusBtn = overlay.querySelector(on ? '.lab404-guide-grade' : '.lab404-guide-go');
    if (focusBtn) focusBtn.focus();
  }

  function pickGrade(g) {
    try { localStorage.setItem(GRADE_KEY, g); } catch (e) {}
    try { if (window.Lab404Junior) window.Lab404Junior.refresh(); } catch (e) {} /* auto Junior mode for K-2 */
    try { if (window.Desktop && Desktop._syncGrade) Desktop._syncGrade(); } catch (e) {} /* B2: update grade shortcuts */
    close();
    try { if (window.Desktop && Desktop.openWindow) Desktop.openWindow("bygrade"); } catch (e) {}
  }

  function open() {
    if (!overlay) build();
    showGrade(false); /* always start on the welcome screen */
    lastFocus = document.activeElement;
    overlay.style.display = "flex";
    requestAnimationFrame(function () { overlay.classList.add("on"); });
    var go = overlay.querySelector(".lab404-guide-go");
    if (go) go.focus();
    document.addEventListener("keydown", onKey);
  }
  function close() {
    if (!overlay) return;
    overlay.classList.remove("on");
    document.removeEventListener("keydown", onKey);
    try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) {}
    setTimeout(function () { if (overlay) overlay.style.display = "none"; }, 220);
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }
  function onKey(e) { if (e.key === "Escape") close(); }

  function addButton() {
    var tray = document.querySelector(".taskbar-tray");
    if (!tray || document.getElementById("guideBtn")) return;
    var btn = document.createElement("button");
    btn.className = "lab404-guide-btn";
    btn.id = "guideBtn";
    btn.type = "button";
    btn.textContent = "?";
    btn.title = "Quick guide — how the Study Hub works";
    btn.setAttribute("aria-label", "Open the quick guide");
    btn.addEventListener("click", open);
    var clock = document.getElementById("taskbarClock");
    if (clock) tray.insertBefore(btn, clock); else tray.appendChild(btn);
  }

  function firstRun() {
    var seen = false;
    try { seen = localStorage.getItem(SEEN_KEY) === "1"; } catch (e) {}
    if (!seen) setTimeout(open, 1900); /* let the boot sequence finish first */
  }

  function init() { css(); addButton(); firstRun(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
