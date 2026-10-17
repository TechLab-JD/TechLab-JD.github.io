/* kid-mode.js (R4-12) — a locked, picture-first "kiosk" for the youngest learners.
   Junior mode makes targets big but a pre-reader still can't navigate the desktop.
   Kid Mode pins the device to ONE grade and shows a full-screen launcher of big
   picture tiles (one per subject course), read aloud on tap, with no free-roam:
   the Start button is hidden and leaving requires a quick grown-up check.
   Builds on Junior styling. Local-only. window.Lab404Kid. */
(function () {
  "use strict";

  var KEY = "lab404.kiosk";          /* locked grade ("K".."12"/"C"), absent = off */
  var GRADE_KEY = "lab404.myGrade";
  var GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "C"];
  var GLABEL = { K: "Kindergarten", C: "College" };
  var SUBJ = {
    math:    { emoji: "🔢", name: "Math" },
    english: { emoji: "📖", name: "Reading & Writing" },
    science: { emoji: "🔬", name: "Science" },
    social:  { emoji: "🏛️", name: "Social Studies" },
    coding:  { emoji: "💻", name: "Coding" }
  };
  var SUBJ_ORDER = ["math", "science", "english", "social", "coding"];
  /* When a grade has more than one course in a subject (e.g. Grade 12 science =
     Environmental Science + AP Bio/Chem/Phys), the tiles must not all read "Science".
     These give each discipline its own picture + name so they're told apart. */
  var DISC = [
    [/biolog/i, "🧬"], [/chemist/i, "🧪"], [/physics/i, "⚛️"], [/environmental/i, "🌍"],
    [/statistic/i, "📊"], [/psycholog/i, "🧠"], [/govern|civic/i, "🏛️"], [/\beconom/i, "💵"],
    [/sat\s*math/i, "📐"], [/act\s*science/i, "🔭"], [/sat\s*(reading|writing)/i, "✍️"],
    [/\bsat\b|\bact\b|prep/i, "📝"], [/precalc|calculus|algebra|geometr|quantitative|trigonom/i, "🔢"],
    [/english|reading|writing|composition|literature/i, "📖"], [/cod|computer/i, "💻"]
  ];
  function discIcon(title, fallback) {
    for (var i = 0; i < DISC.length; i++) if (DISC[i][0].test(title)) return DISC[i][1];
    return fallback;
  }
  function shortTitle(t) {
    return String(t || "").replace(/\s*\([^)]*\)/g, "").replace(/\s*\bPrep\b/i, "")
      .replace(/^Grade\s+\d+\s+/i, "").replace(/^College\s+/i, "").replace(/\s{2,}/g, " ").trim();
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function get() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
  function isOn() { return !!get(); }
  function glabel(g) { return GLABEL[g] || ("Grade " + g); }
  function speak(t) { try { if (window.ReadAloud && ReadAloud.supported && ReadAloud.supported()) ReadAloud.speak(t); } catch (e) {} }

  function css() {
    if (document.getElementById("kiosk-style")) return;
    var s = document.createElement("style"); s.id = "kiosk-style";
    s.textContent = [
      "html.lab404-kiosk .taskbar-start{display:none!important}",      /* no menu = no free-roam */
      "html.lab404-kiosk .desktop-icons-area{display:none!important}",
      "html.lab404-kiosk #wallpaper-canvas{display:none!important}",
      ".kiosk{position:fixed;inset:0;z-index:4000;display:flex;flex-direction:column;",
      "  background:linear-gradient(165deg,#e9f5ff 0%,#eefaf0 55%,#fff6e8 100%);",
      "  font-family:system-ui,-apple-system,'Segoe UI',sans-serif;overflow:auto}",
      ".kiosk[hidden]{display:none!important}",
      ".kiosk-top{display:flex;align-items:center;justify-content:space-between;padding:16px 20px}",
      ".kiosk-top h1{margin:0;font-size:1.5rem;color:#24324d}",
      ".kiosk-lock{border:2px solid #cfd9e8;background:#fff;color:#51607a;border-radius:14px;width:46px;height:46px;font-size:1.2rem;cursor:pointer}",
      ".kiosk-grid{flex:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:18px;padding:10px 22px 30px;align-content:start;max-width:860px;margin:0 auto;width:100%;box-sizing:border-box}",
      ".kiosk-tile{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;",
      "  background:#fff;border:3px solid #dbe6f5;border-radius:24px;padding:26px 14px;cursor:pointer;",
      "  box-shadow:0 4px 14px rgba(40,70,110,.1);transition:transform .08s,border-color .12s;min-height:150px}",
      ".kiosk-tile:hover,.kiosk-tile:focus{transform:translateY(-3px);border-color:#4a90e2;outline:none}",
      ".kiosk-tile .ke{font-size:3.4rem;line-height:1;filter:drop-shadow(0 2px 3px rgba(40,70,110,.22))}",
      ".kiosk-tile .kn{font-size:1.1rem;font-weight:800;color:#24324d;text-align:center}",
      ".kiosk-empty{grid-column:1/-1;text-align:center;color:#51607a;font-size:1rem;padding:30px}",
      ".kiosk-foot{text-align:center;color:#7a8aa2;font-size:.78rem;padding:0 20px 18px}",
      /* grown-up exit gate */
      ".kiosk-gate{position:fixed;inset:0;z-index:4100;display:flex;align-items:center;justify-content:center;background:rgba(20,30,48,.55)}",
      ".kiosk-gate[hidden]{display:none!important}",
      ".kiosk-gate .box{background:#fff;border-radius:18px;padding:24px 26px;max-width:320px;width:90%;text-align:center;font-family:system-ui,sans-serif}",
      ".kiosk-gate h2{margin:0 0 4px;font-size:1.15rem;color:#24324d}",
      ".kiosk-gate p{margin:0 0 14px;color:#51607a;font-size:.9rem}",
      ".kiosk-gate .q{font-size:1.4rem;font-weight:800;color:#24324d;margin-bottom:10px}",
      ".kiosk-gate input{font-size:1.2rem;padding:10px;width:100px;text-align:center;border:2px solid #cfd9e8;border-radius:12px}",
      ".kiosk-gate .row{display:flex;gap:8px;justify-content:center;margin-top:14px}",
      ".kiosk-gate button{border:0;border-radius:11px;padding:11px 18px;font:inherit;font-weight:700;font-size:.9rem;cursor:pointer}",
      ".kiosk-gate .go{background:#4a90e2;color:#fff}.kiosk-gate .cancel{background:#eef1f7;color:#51607a}",
      ".kiosk-gate .err{color:#d26a2b;font-size:.82rem;min-height:1.1em;margin-top:8px}",
      /* setup picker (choose a grade to lock) */
      ".kiosk-setup{max-width:520px;margin:0 auto;padding:16px}",
      ".kiosk-setup h2{color:var(--accent2,#4a90e2);margin:0 0 4px;font-size:1.15rem}",
      ".kiosk-setup p{color:var(--text-muted,#9aa);font-size:.85rem;margin:0 0 14px;line-height:1.5}",
      ".kiosk-ggrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:8px}",
      ".kiosk-gbtn{border:1px solid var(--border,#334);background:var(--surface-2,rgba(127,127,127,.08));color:var(--text,#dfe);border-radius:12px;padding:14px 6px;font:inherit;font-weight:800;cursor:pointer}",
      ".kiosk-gbtn:hover{border-color:var(--accent2,#4a90e2)}"
    ].join("");
    document.head.appendChild(s);
  }

  /* ── The locked launcher overlay ── */
  var overlay = null, observer = null;

  function coursesFor(grade) {
    var C = window.LAB404_COURSES || {};
    return Object.keys(C).map(function (id) { return C[id]; })
      .filter(function (co) { return String(co.grade) === String(grade); });
  }

  function buildOverlay(grade) {
    if (overlay) overlay.parentNode.removeChild(overlay);
    overlay = document.createElement("div");
    overlay.className = "kiosk";
    overlay.setAttribute("role", "region");
    overlay.setAttribute("aria-label", "Kid mode home");

    var list = coursesFor(grade).slice();
    /* group same-subject tiles next to each other so the grid reads tidily */
    list.sort(function (a, b) {
      var ai = SUBJ_ORDER.indexOf(a.subjectKey); if (ai < 0) ai = 99;
      var bi = SUBJ_ORDER.indexOf(b.subjectKey); if (bi < 0) bi = 99;
      return ai - bi;
    });
    var counts = {};
    list.forEach(function (co) { counts[co.subjectKey] = (counts[co.subjectKey] || 0) + 1; });
    var tiles = list.length ? list.map(function (co) {
      var sk = SUBJ[co.subjectKey] || { emoji: "⭐", name: co.title };
      var dup = counts[co.subjectKey] > 1;               /* several courses share this subject */
      var name = dup ? shortTitle(co.title) : sk.name;   /* use the course's own name so they differ */
      var emoji = dup ? discIcon(co.title, sk.emoji) : sk.emoji;
      return '<button class="kiosk-tile" data-course="' + co.id + '" data-say="' + esc(name) + '">' +
        '<span class="ke" aria-hidden="true">' + emoji + '</span>' +
        '<span class="kn">' + esc(name) + '</span></button>';
    }).join("") : '<div class="kiosk-empty">No lessons for this grade yet. Ask a grown-up to pick another grade.</div>';
    /* R5-C: the youngest grades get the picture/audio Coding Play (no MC coding course exists for K-2). */
    if (grade === "K" || grade === "1" || grade === "2") {
      tiles += '<button class="kiosk-tile" data-app="kcoding" data-say="Coding Play">' +
        '<span class="ke" aria-hidden="true">🐢</span><span class="kn">Coding Play</span></button>';
    }

    overlay.innerHTML =
      '<div class="kiosk-top"><h1>⭐ ' + glabel(grade) + '</h1>' +
        '<button class="kiosk-lock" id="kiosk-exit" title="Grown-ups: leave Kid Mode" aria-label="Leave Kid Mode">🔒</button></div>' +
      '<div class="kiosk-grid">' + tiles + '</div>' +
      '<div class="kiosk-foot">Kid Mode — tap a subject to start. A grown-up can unlock with the 🔒 button.</div>';
    document.body.appendChild(overlay);

    overlay.querySelectorAll(".kiosk-tile").forEach(function (b) {
      b.addEventListener("click", function () {
        speak(this.getAttribute("data-say"));
        if (!(window.Desktop && Desktop.openWindow)) return;
        var course = this.getAttribute("data-course");
        if (course) Desktop.openWindow("course", { course: course });
        else if (this.getAttribute("data-app")) Desktop.openWindow(this.getAttribute("data-app"));
      });
    });
    overlay.querySelector("#kiosk-exit").addEventListener("click", gate);

    /* Hide the launcher whenever a lesson window is open; show it again when all close. */
    var layer = document.getElementById("windows-layer");
    function sync() {
      var open = layer && layer.querySelector(".os-window:not(.minimized)");
      overlay.hidden = !!open;
    }
    if (observer) observer.disconnect();
    if (layer) {
      observer = new MutationObserver(sync);
      observer.observe(layer, { childList: true, attributes: true, subtree: true, attributeFilter: ["class"] });
    }
    sync();
  }

  /* ── Grown-up exit gate (a small sum a young child can't do by accident) ── */
  function gate() {
    var a = 3 + Math.floor(Math.random() * 7), b = 4 + Math.floor(Math.random() * 6);
    var g = document.createElement("div"); g.className = "kiosk-gate";
    g.innerHTML = '<div class="box"><h2>For grown-ups</h2><p>Answer to leave Kid Mode.</p>' +
      '<div class="q">' + a + ' + ' + b + ' = ?</div>' +
      '<input type="number" id="kiosk-ans" inputmode="numeric" aria-label="Answer">' +
      '<div class="err" id="kiosk-err"></div>' +
      '<div class="row"><button class="cancel" id="kiosk-cancel">Stay</button><button class="go" id="kiosk-go">Unlock</button></div></div>';
    document.body.appendChild(g);
    var inp = g.querySelector("#kiosk-ans"); setTimeout(function () { try { inp.focus(); } catch (e) {} }, 40);
    function close() { g.parentNode.removeChild(g); }
    g.querySelector("#kiosk-cancel").addEventListener("click", close);
    g.querySelector("#kiosk-go").addEventListener("click", function () {
      if (parseInt(inp.value, 10) === a + b) { close(); exit(); }
      else { g.querySelector("#kiosk-err").textContent = "Not quite — try again."; inp.value = ""; inp.focus(); }
    });
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") g.querySelector("#kiosk-go").click(); });
  }

  function enable(grade) {
    try { localStorage.setItem(KEY, grade); localStorage.setItem(GRADE_KEY, grade); } catch (e) {}
    document.documentElement.classList.add("lab404-kiosk");
    if (window.Lab404Junior && Lab404Junior.set) Lab404Junior.set(true);  /* big targets + light theme */
    css(); buildOverlay(grade);
    updateToggleLabel();
  }
  function exit() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    document.documentElement.classList.remove("lab404-kiosk");
    if (observer) { observer.disconnect(); observer = null; }
    if (overlay) { overlay.parentNode.removeChild(overlay); overlay = null; }
    updateToggleLabel();
  }

  /* ── Setup picker (opened from the menu) — lives in a normal window's content ── */
  function renderSetup(content) {
    css();
    content.innerHTML =
      '<div class="kiosk-setup"><h2>🔒 Kid Mode</h2>' +
        '<p>Lock this device to one grade. Your child sees a simple, full-screen picture menu for that grade and can’t wander off — no Start menu, no other subjects. A grown-up unlocks it with a quick math question.</p>' +
        '<p style="font-weight:700;color:var(--text,#dfe)">Lock to which grade?</p>' +
        '<div class="kiosk-ggrid">' +
          GRADES.map(function (g) { return '<button class="kiosk-gbtn" data-g="' + g + '">' + (GLABEL[g] ? (g === "K" ? "K" : "Col") : g) + '</button>'; }).join("") +
        '</div>' +
        '<p style="margin-top:14px;font-size:.78rem">K = Kindergarten · Col = College. You can leave Kid Mode any time with the 🔒 button.</p>' +
      '</div>';
    content.querySelectorAll("[data-g]").forEach(function (b) {
      b.addEventListener("click", function () {
        var grade = this.getAttribute("data-g");
        enable(grade);
        /* close this setup window if it's in one */
        var win = content.closest(".os-window");
        if (win && window.Desktop && Desktop.closeWindow) Desktop.closeWindow(win.id);
      });
    });
  }

  function updateToggleLabel() {
    var btn = document.getElementById("kioskToggle");
    if (btn) btn.querySelector(".kk-state").textContent = isOn() ? ("On · " + glabel(get())) : "Off";
  }
  function addToggle() {
    var items = document.querySelector("#startMenu .start-menu-items");
    if (!items || document.getElementById("kioskToggle")) return;
    var btn = document.createElement("button");
    btn.className = "start-menu-item"; btn.id = "kioskToggle"; btn.setAttribute("role", "menuitem");
    btn.innerHTML = '<span class="menu-icon">🔒</span><span>Kid Mode: <b class="kk-state">' +
      (isOn() ? ("On · " + glabel(get())) : "Off") + '</b></span>';
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var sm = document.getElementById("startMenu"); if (sm) sm.setAttribute("hidden", "");  /* close the menu */
      if (isOn()) gate();                       /* on → ask to leave */
      else if (window.Desktop && Desktop.openWindow) Desktop.openWindow("kidmode");  /* off → setup */
    });
    items.appendChild(btn);
  }

  window.Lab404Kid = { enable: enable, exit: exit, isOn: isOn, grade: get, renderSetup: renderSetup };

  function init() {
    css();
    addToggle();
    if (isOn()) {                      /* device boots straight into the locked launcher */
      document.documentElement.classList.add("lab404-kiosk");
      /* wait for course data so tiles have real courses */
      if (window.LAB404_COURSES) buildOverlay(get());
      else window.addEventListener("lab404:data-ready", function () { if (isOn()) buildOverlay(get()); }, { once: true });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
