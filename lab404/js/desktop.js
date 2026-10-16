/* desktop.js — OS Window Manager for the Lab404 Study Hub */
(function () {
  "use strict";

  /* ── Helpers ── */
  function escHtml(str) {
    if (window.AplusUtils) return window.AplusUtils.escHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ── App definitions ── */
  var APPS = {
    /* Cert folders */
    "folder-aplus":      { title: "A+ Study Hub",       icon: "📁", cert: "aplus" },
    "folder-netplus":    { title: "Net+ Study Hub",      icon: "📁", cert: "netplus" },
    "folder-secplus":    { title: "Sec+ Study Hub",      icon: "📁", cert: "secplus" },
    "folder-linuxplus":  { title: "Linux+ Study Hub",    icon: "📁", cert: "linuxplus" },
    "folder-cloudplus":  { title: "Cloud+ Study Hub",    icon: "📁", cert: "cloudplus" },
    "folder-serverplus": { title: "Server+ Study Hub",   icon: "📁", cert: "serverplus" },
    "folder-cysa":       { title: "CySA+ Study Hub",     icon: "📁", cert: "cysa" },
    "folder-pentest":    { title: "PenTest+ Study Hub",  icon: "📁", cert: "pentest" },
    "folder-securityx":  { title: "SecurityX Study Hub", icon: "📁", cert: "securityx" },
    "folder-dataplus":   { title: "Data+ Study Hub",     icon: "📁", cert: "dataplus" },
    /* Apps */
    "chapters-1": { title: "Core 1 \u2014 Chapters", icon: "📚" },
    "chapters-2": { title: "Core 2 \u2014 Chapters", icon: "📗" },
    "chapters-3": { title: "Security+ \u2014 Chapters", icon: "🛡️" },
    "synapse":    { title: "Synapse — Security+ Study Hub", icon: "🧠" },
    "practice":   { title: "Practice Test",           icon: "🎯" },
    "flashcards": { title: "Flashcards",               icon: "🃏" },
    "review":     { title: "Review Checklist",         icon: "📋" },
    "glossary":   { title: "Glossary",                 icon: "📖" },
    "chapter":    { title: "Chapter",                  icon: "📄" },
    "notepad":    { title: "Notepad",                  icon: "📝" },
    "data":       { title: "Data Manager",             icon: "💾" },
    "skills":     { title: "Skill Overview",           icon: "📊" },
    "about":      { title: "About Lab404 Study Hub",  icon: "🚀" },
    "forfamilies": { title: "For Parents & Teachers",  icon: "👪" },
    "missed":     { title: "Practice What You Missed", icon: "🔁" },
    "typing":     { title: "Typing Tutor",             icon: "⌨️" },
    "cohort":     { title: "Class View",               icon: "👩‍🏫" },
    "stickers":   { title: "Sticker Book",              icon: "🌟" },
    "assign":     { title: "Assignment",                icon: "📋" },
    "writing":    { title: "Writing Practice",          icon: "✍️" },
    "esglossary": { title: "Bilingual Glossary",        icon: "🌐" },
  };

  /* ── Cert human-readable labels ── */
  var CERT_LABELS = {
    "aplus":      "A+",
    "netplus":    "Net+",
    "secplus":    "Sec+",
    "linuxplus":  "Linux+",
    "cloudplus":  "Cloud+",
    "serverplus": "Server+",
    "cysa":       "CySA+",
    "pentest":    "PenTest+",
    "securityx":  "SecurityX",
    "dataplus":   "Data+",
  };

  /* ── Per-cert icons for the CompTIA folder window ── */
  var CERT_ICONS = {
    "folder-aplus": "💻", "folder-netplus": "🌐", "folder-secplus": "🔒",
    "folder-linuxplus": "🐧", "folder-cloudplus": "☁️", "folder-serverplus": "🖥️",
    "folder-cysa": "🔍", "folder-pentest": "⚔️", "folder-securityx": "🛡️", "folder-dataplus": "📊",
  };

  /* ── Folder contents ── */
  var FOLDER_CONTENTS = {
    "folder-aplus": {
      desc: "CompTIA A+ \u00b7 220-1201 & 220-1202",
      certKey: "aplus",
      apps: [
        { app: "chapters-1", icon: "📚", label: "Core 1 Chapters" },
        { app: "chapters-2", icon: "📗", label: "Core 2 Chapters" },
        { app: "practice",   icon: "🎯", label: "Practice Test" },
        { app: "flashcards", icon: "🃏", label: "Flashcards" },
        { app: "review",     icon: "📋", label: "Review List" },
        { app: "glossary",   icon: "📖", label: "Glossary" },
        { app: "notepad",    icon: "📝", label: "Notepad" },
        { app: "data",       icon: "💾", label: "Data Manager" },
      ]
    },
    /* Security+ is one exam (no cores). core: 3 is only the internal slot the loaders key on. */
    "folder-secplus": {
      desc: "CompTIA Security+ \u00b7 SY0-701",
      certKey: "secplus",
      core: 3,
      apps: [
        { app: "synapse",    icon: "🧠", label: "Synapse" },
        { app: "chapters-3", icon: "🛡️", label: "Chapters" },
        { app: "practice",   icon: "🎯", label: "Practice Test" },
        { app: "flashcards", icon: "🃏", label: "Flashcards" },
        { app: "review",     icon: "📋", label: "Review List" },
        { app: "glossary",   icon: "📖", label: "Glossary" },
        { app: "notepad",    icon: "📝", label: "Notepad" },
        { app: "data",       icon: "💾", label: "Data Manager" },
      ]
    },
  };

  /* The public GitHub copy has no Security+ content yet: keep its folder "coming soon". */
  if (window.LAB404_PUBLIC) delete FOLDER_CONTENTS["folder-secplus"];

  /* ── Universal hub: register CompTIA + academic subject folders from the catalog ──
     Desktop shows SUBJECT folders. CompTIA opens to its certification icons
     (A+ -> Core 1 / Core 2, Security+, ...). Academic subjects open to their
     topic icons; each topic is "coming soon" until its content is added. */
  (function registerSubjects() {
    var S = window.LAB404_SUBJECTS;
    if (!S) return;
    function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }

    if (S.comptia) {
      APPS["folder-comptia"] = { title: S.comptia.title, icon: "📁" };
      var certApps = (S.comptia.certs || []).filter(function (c) { return APPS[c]; }).map(function (c) {
        return { app: c, icon: CERT_ICONS[c] || "📁",
                 label: CERT_LABELS[(APPS[c].cert || "")] || APPS[c].title };
      });
      FOLDER_CONTENTS["folder-comptia"] = { desc: S.comptia.desc, apps: certApps };
    }

    (S.academic || []).forEach(function (subj) {
      var fkey = "folder-" + subj.key;
      APPS[fkey] = { title: subj.title, icon: "📁" };
      var topicApps = (subj.topics || []).map(function (tp) {
        var tkey = "folder-" + subj.key + "-" + slug(tp.t);
        APPS[tkey] = { title: subj.title + " — " + tp.t, icon: "📘", subjectComingSoon: true };
        return { app: tkey, icon: "📘", label: tp.t };
      });
      FOLDER_CONTENTS[fkey] = { desc: subj.desc, apps: topicApps };
    });

    /* Grouping folders (e.g. Tech, Life Skills): a folder whose children are other
       subject folders. Built from S.groups; a grouped subject is tracked so it is
       dropped from the top-level desktop and shown inside its group instead. */
    var memberMeta = {};
    if (S.comptia) memberMeta.comptia = { icon: S.comptia.icon || "📁", short: S.comptia.short || S.comptia.title };
    (S.academic || []).forEach(function (s) { memberMeta[s.key] = { icon: s.icon || "📁", short: s.short || s.title }; });
    var grouped = {}, groupByKey = {};
    (S.groups || []).forEach(function (g) {
      groupByKey[g.key] = g;
      var fkey = "folder-" + g.key;
      APPS[fkey] = { title: g.title, icon: "📁" };
      var memApps = (g.members || []).filter(function (m) { return memberMeta[m]; }).map(function (m) {
        grouped[m] = g.key;
        return { app: "folder-" + m, icon: memberMeta[m].icon, label: memberMeta[m].short };
      });
      FOLDER_CONTENTS[fkey] = { desc: g.desc, apps: memApps };
    });

    /* Adopted subjects: an academic subject can nest another subject's folder inside
       itself (e.g. Science adopts Psychology). The child keeps its own folder + topics
       but is removed from the top-level desktop and shown inside its parent folder. */
    var adoptedBy = {};
    (S.academic || []).forEach(function (parent) {
      (parent.adopt || []).forEach(function (childKey) {
        if (!memberMeta[childKey] || adoptedBy[childKey] || grouped[childKey]) return;
        var pf = FOLDER_CONTENTS["folder-" + parent.key];
        if (pf && pf.apps) pf.apps.push({ app: "folder-" + childKey, icon: memberMeta[childKey].icon, label: memberMeta[childKey].short, adopted: true });
        adoptedBy[childKey] = parent.key;
      });
    });

    /* Build the desktop icons + start-menu subject list from the catalog, so adding a
       subject to subjects-data.js is the only edit needed (icons were hardcoded before). */
    function escA(s) {
      return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    }
    var order = [], emittedGroup = {};
    /* CompTIA shows top-level only if it is not folded into a group. */
    if (S.comptia && !grouped.comptia) {
      order.push({ app: "folder-comptia", icon: S.comptia.icon || "📁",
                   short: S.comptia.short || S.comptia.title, title: S.comptia.title });
    }
    (S.academic || []).forEach(function (s) {
      /* An adopted subject is nested inside its parent folder — hide it from top-level. */
      if (adoptedBy[s.key]) return;
      /* A grouped subject is replaced on the desktop by its group folder, emitted
         once at the position of its first member so placement stays natural. */
      if (grouped[s.key]) {
        var gk = grouped[s.key];
        if (!emittedGroup[gk]) {
          emittedGroup[gk] = true;
          var g = groupByKey[gk];
          order.push({ app: "folder-" + gk, icon: g.icon || "📁", short: g.short || g.title, title: g.title });
        }
        return;
      }
      order.push({ app: "folder-" + s.key, icon: s.icon || "📁", short: s.short || s.title, title: s.title });
    });

    /* Browse by Grade + Report Card are the student/progress tools. They are NOT
       desktop icons anymore — they live behind the level badge in the taskbar tray
       (see wireProgressMenu below), keeping the desktop to pure subjects. */
    APPS["myprogress"] = { title: "My Progress", icon: "📈" };
    APPS["bygrade"] = { title: "Browse by Grade", icon: "🎓" };
    APPS["course"] = { title: "Mastery Course", icon: "🎯" };
    APPS["transcript"] = { title: "Report Card", icon: "📋" };

    /* Apply the user's saved icon arrangement (drag-and-drop); new subjects fall to the end. */
    var ORDER_KEY = "lab404.desktopOrder";
    try {
      var saved = JSON.parse(localStorage.getItem(ORDER_KEY) || "null");
      if (saved && saved.length) {
        order.sort(function (a, b) {
          var ia = saved.indexOf(a.app), ib = saved.indexOf(b.app);
          if (ia === -1) ia = 1000; if (ib === -1) ib = 1000;
          return ia - ib;
        });
      }
    } catch (e) {}

    var di = document.getElementById("desktopIcons");
    if (di) {
      di.innerHTML = order.map(function (o) {
        return '<div class="desktop-icon" data-app="' + escA(o.app) + '" title="' + escA(o.title) +
          '" role="button" tabindex="0" aria-label="Open ' + escA(o.title) + '">' +
          '<div class="desktop-icon-img">' + o.icon + '</div>' +
          '<div class="desktop-icon-label">' + escA(o.short) + '</div></div>';
      }).join("");

      /* Drag-and-drop reordering via Pointer Events (works on mouse, trackpad AND touch),
         saved per device. A real drag suppresses the click so it doesn't also open the folder. */
      function saveOrder() {
        try {
          var keys = [].map.call(di.querySelectorAll(".desktop-icon[data-app]"), function (el) { return el.dataset.app; });
          localStorage.setItem(ORDER_KEY, JSON.stringify(keys));
        } catch (e) {}
      }
      /* Drag to reorder. The move/up are tracked on `document` (not via pointer
         capture) because insertBefore moves the dragged node mid-drag, which drops
         an implicit capture on some browsers and froze the old handler. */
      var drag = null;
      di.addEventListener("pointerdown", function (e) {
        if (e.button && e.button !== 0) return;
        var icon = e.target.closest(".desktop-icon");
        if (!icon || icon.parentNode !== di) return;
        drag = { el: icon, x: e.clientX, y: e.clientY, moved: false };
      });
      document.addEventListener("pointermove", function (e) {
        if (!drag) return;
        if (!drag.moved) {
          if (Math.abs(e.clientX - drag.x) < 5 && Math.abs(e.clientY - drag.y) < 5) return;
          drag.moved = true;
          drag.el.classList.add("dragging");
        }
        e.preventDefault();
        var under = document.elementFromPoint(e.clientX, e.clientY);
        under = under && under.closest(".desktop-icon");
        if (under && under !== drag.el && under.parentNode === di) {
          var r = under.getBoundingClientRect();
          di.insertBefore(drag.el, (e.clientY < r.top + r.height / 2) ? under : under.nextSibling);
        }
      });
      document.addEventListener("pointerup", function () {
        if (!drag) return;
        var d = drag; drag = null;
        if (!d.moved) return;
        d.el.classList.remove("dragging");
        saveOrder();
        /* Swallow the click that fires right after a drag so it doesn't open the folder.
           stopImmediatePropagation (capture phase) also blocks same-element listeners. */
        var block = function (ev) { ev.stopImmediatePropagation(); ev.preventDefault(); d.el.removeEventListener("click", block, true); };
        d.el.addEventListener("click", block, true);
        setTimeout(function () { d.el.removeEventListener("click", block, true); }, 400);
      });
      document.addEventListener("pointercancel", function () { if (drag && drag.moved) drag.el.classList.remove("dragging"); drag = null; });
    }
    var sms = document.getElementById("startSubjects");
    if (sms) {
      sms.innerHTML = order.map(function (o) {
        return '<button class="start-menu-item" data-app="' + escA(o.app) + '" role="menuitem">' +
          '<span class="menu-icon">' + o.icon + '</span> ' + escA(o.title) + '</button>';
      }).join("");
    }
  })();

  /* ── Window Manager ── */
  var Desktop = {
    windows: {},   /* winId -> { el, app, params, minimized, maximized, prevRect } */
    zCounter: 100,
    winCounter: 0,
    _snapZone: null, /* shared snap-zone state across all drag handlers */

    openWindow: function (app, params) {
      /* If a window for this app+params is already open, bring it to front */
      var existingId = Desktop._findExisting(app, params);
      if (existingId) {
        Desktop.restoreWindow(existingId);
        Desktop.bringToFront(existingId);
        return existingId;
      }

      var appDef = APPS[app];
      if (!appDef) return null;

      var winId = "win-" + (++Desktop.winCounter);
      var layer = document.getElementById("windows-layer");
      if (!layer) return null;

      /* Compute staggered position */
      var offset = (Desktop.winCounter % 8) * 28;
      var maxLeft = window.innerWidth - 520 - 20;
      var maxTop = window.innerHeight - 44 - 360 - 20;
      var left = Math.min(80 + offset, maxLeft);
      var top = Math.min(60 + offset, maxTop);

      /* Build window element */
      /* F3: remember who opened this window so focus can return on close */
      var opener = (document.activeElement && document.activeElement !== document.body) ? document.activeElement : null;

      var winEl = document.createElement("div");
      winEl.className = "os-window focused";
      winEl.id = winId;
      winEl.setAttribute("role", "dialog");
      winEl.setAttribute("aria-modal", "false");
      winEl.setAttribute("tabindex", "-1");
      winEl.setAttribute("aria-label", appDef.title);
      winEl.style.left = left + "px";
      winEl.style.top = top + "px";
      winEl.style.zIndex = ++Desktop.zCounter;

      var titleText = Desktop._buildTitle(app, params, appDef.title);

      /* Folder windows open smaller */
      if (app.indexOf("folder-") === 0) {
        winEl.style.width = "540px";
        winEl.style.height = "440px";
      }
      /* Topic windows that have real content open larger (lesson view) */
      if (app.indexOf("folder-") === 0 && window.LAB404_CONTENT && window.LAB404_CONTENT[app.replace(/^folder-/, "")]) {
        winEl.style.width = "700px";
        winEl.style.height = "640px";
      }

      /* Smaller windows for utility apps */
      if (app === "notepad") { winEl.style.width = "560px"; winEl.style.height = "460px"; }
      if (app === "data")    { winEl.style.width = "580px"; winEl.style.height = "520px"; }
      if (app === "skills")  { winEl.style.width = "620px"; winEl.style.height = "580px"; }
      if (app === "about")   { winEl.style.width = "400px"; winEl.style.height = "340px"; }
      if (app === "forfamilies") { winEl.style.width = "640px"; winEl.style.height = "620px"; }
      if (app === "missed")  { winEl.style.width = "640px"; winEl.style.height = "580px"; }
      if (app === "typing")  { winEl.style.width = "660px"; winEl.style.height = "580px"; }
      if (app === "cohort")  { winEl.style.width = "720px"; winEl.style.height = "600px"; }
      if (app === "stickers") { winEl.style.width = "640px"; winEl.style.height = "560px"; }
      if (app === "assign")  { winEl.style.width = "660px"; winEl.style.height = "600px"; }
      if (app === "writing") { winEl.style.width = "680px"; winEl.style.height = "620px"; }
      if (app === "esglossary") { winEl.style.width = "700px"; winEl.style.height = "620px"; }
      if (app === "myprogress") { winEl.style.width = "620px"; winEl.style.height = "600px"; }
      if (app === "bygrade") { winEl.style.width = "740px"; winEl.style.height = "640px"; }
      if (app === "course")  { winEl.style.width = "780px"; winEl.style.height = "660px"; }
      if (app === "transcript") { winEl.style.width = "640px"; winEl.style.height = "600px"; }

      /* Cert theme for folder titlebars */
      if (appDef.cert) winEl.setAttribute("data-cert", appDef.cert);

      winEl.innerHTML =
        '<div class="os-window-titlebar" id="' + winId + '-titlebar">' +
          '<span class="os-window-icon">' + appDef.icon + '</span>' +
          '<span class="os-window-title">' + escHtml(titleText) + '</span>' +
          '<div class="os-window-controls">' +
            '<button class="os-window-btn btn-minimize" title="Minimize" aria-label="Minimize">&#8722;</button>' +
            '<button class="os-window-btn btn-maximize" title="Maximize" aria-label="Maximize">&#9633;</button>' +
            '<button class="os-window-btn btn-close" title="Close" aria-label="Close">&#10005;</button>' +
          '</div>' +
        '</div>' +
        '<div class="os-window-content" id="' + winId + '-content">' +
          '<div class="loading-state">' +
            '<div class="spinner" aria-label="Loading"></div>' +
            '<p>Loading...</p>' +
          '</div>' +
        '</div>' +
        '<div class="rz rz-n"  aria-hidden="true"></div>' +
        '<div class="rz rz-ne" aria-hidden="true"></div>' +
        '<div class="rz rz-e"  aria-hidden="true"></div>' +
        '<div class="rz rz-se" aria-hidden="true"></div>' +
        '<div class="rz rz-s"  aria-hidden="true"></div>' +
        '<div class="rz rz-sw" aria-hidden="true"></div>' +
        '<div class="rz rz-w"  aria-hidden="true"></div>' +
        '<div class="rz rz-nw" aria-hidden="true"></div>';

      layer.appendChild(winEl);

      /* Open animation */
      void winEl.offsetWidth; /* force reflow so animation fires */
      winEl.classList.add("win-opening");
      winEl.addEventListener("animationend", function () {
        winEl.classList.remove("win-opening");
      }, { once: true });

      Desktop.windows[winId] = {
        el: winEl,
        app: app,
        params: params || {},
        minimized: false,
        maximized: false,
        prevRect: null,
        opener: opener,
      };

      /* F3: Escape closes the window (unless typing in a field), and open moves focus in */
      winEl.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        var t = e.target;
        if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;  /* let fields handle Esc first */
        e.stopPropagation();
        Desktop.closeWindow(winId);
      });
      setTimeout(function () { if (Desktop.windows[winId]) { try { winEl.focus(); } catch (e) {} } }, 30);

      /* Wire controls */
      Desktop._wireControls(winId);
      Desktop._makeDraggable(winId);
      Desktop._makeResizable(winId);

      /* Focus on click anywhere in window */
      winEl.addEventListener("mousedown", function (e) {
        /* Don't re-focus if clicking a button that handles its own action */
        Desktop.bringToFront(winId);
      });

      /* Load content */
      Desktop._loadApp(winId, app, params);

      /* Update taskbar */
      Desktop.updateTaskbar();

      return winId;
    },

    _findExisting: function (app, params) {
      for (var id in Desktop.windows) {
        var w = Desktop.windows[id];
        if (w.app !== app) continue;
        if (app === "chapter") {
          /* Chapter: match core + ch number */
          if (!params) continue;
          if (w.params.core === params.core && w.params.ch === params.ch) return id;
        } else if (app === "notepad") {
          /* Notepad: one per cert context; no context = general */
          var wKey = w.params.certKey || "general";
          var pKey = (params && params.certKey) || "general";
          if (wKey === pKey) return id;
        } else if (["practice", "flashcards", "review", "glossary"].indexOf(app) >= 0) {
          /* One window per cert: Sec+ practice must not reuse the A+ one */
          var wc = (w.params && w.params.core) || 0;
          var pc = (params && params.core) || 0;
          if (wc === pc) return id;
        } else {
          return id;
        }
      }
      return null;
    },

    _buildTitle: function (app, params, defaultTitle) {
      if (app === "chapter" && params) {
        return (params.core === 3 ? "Security+" : "Core " + params.core) + " \u2014 Ch " + String(params.ch).padStart(2, "0");
      }
      if (params && params.core === 3 && ["practice", "flashcards", "review", "glossary"].indexOf(app) >= 0) {
        return "Security+ \u2014 " + defaultTitle;
      }
      if (app === "notepad") {
        var ck = params && params.certKey;
        if (!ck) return "Notes";
        var cl = CERT_LABELS[ck] || ck;
        return cl + " \u2014 Notes";
      }
      return defaultTitle;
    },

    closeWindow: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      if (window.ReadAloud) window.ReadAloud.stop();  /* F2/F3: stop any speech from this window */
      var opener = w.opener;
      w.el.remove();
      delete Desktop.windows[winId];
      Desktop.updateTaskbar();
      /* F3: return keyboard focus to whatever opened the window, else the Start button */
      try {
        if (opener && document.body.contains(opener) && opener.offsetParent !== null) opener.focus();
        else { var sb = document.getElementById("startBtn"); if (sb) sb.focus(); }
      } catch (e) {}
    },

    minimizeWindow: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      w.minimized = true;
      w.el.classList.add("minimized");
      Desktop.updateTaskbar();
    },

    maximizeWindow: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      if (w.maximized) {
        /* Restore */
        w.maximized = false;
        w.el.classList.remove("maximized");
        if (w.prevRect) {
          w.el.style.left = w.prevRect.left;
          w.el.style.top = w.prevRect.top;
          w.el.style.width = w.prevRect.width;
          w.el.style.height = w.prevRect.height;
          w.prevRect = null;
        }
        w.el.querySelector(".btn-maximize").innerHTML = "&#9633;";
      } else {
        /* Save current rect */
        w.prevRect = {
          left: w.el.style.left,
          top: w.el.style.top,
          width: w.el.style.width,
          height: w.el.style.height,
        };
        w.maximized = true;
        w.el.classList.add("maximized");
        w.el.querySelector(".btn-maximize").innerHTML = "&#10697;";
      }
      Desktop.bringToFront(winId);
      Desktop.updateTaskbar();
    },

    restoreWindow: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      if (w.minimized) {
        w.minimized = false;
        w.el.classList.remove("minimized");
      }
      Desktop.updateTaskbar();
    },

    bringToFront: function (winId) {
      /* Remove focused class from all */
      for (var id in Desktop.windows) {
        Desktop.windows[id].el.classList.remove("focused");
      }
      var w = Desktop.windows[winId];
      if (!w) return;
      w.el.classList.add("focused");
      w.el.style.zIndex = ++Desktop.zCounter;
      Desktop.updateTaskbar();
    },

    updateTaskbar: function () {
      var bar = document.getElementById("taskbarWindows");
      if (!bar) return;
      bar.innerHTML = "";

      /* Find focused window */
      var focusedId = null;
      var topZ = -1;
      for (var id in Desktop.windows) {
        var z = parseInt(Desktop.windows[id].el.style.zIndex || "0", 10);
        if (z > topZ && Desktop.windows[id].el.classList.contains("focused")) {
          topZ = z;
          focusedId = id;
        }
      }

      for (var winId in Desktop.windows) {
        var w = Desktop.windows[winId];
        var appDef = APPS[w.app] || { icon: "📄", title: w.app };
        var titleText = Desktop._buildTitle(w.app, w.params, appDef.title);

        var btn = document.createElement("button");
        btn.className = "taskbar-win-btn";
        btn.setAttribute("role", "listitem");
        btn.setAttribute("aria-label", titleText);
        if (winId === focusedId) btn.classList.add("active");
        if (w.minimized) btn.classList.add("minimized");
        btn.innerHTML =
          '<span class="win-btn-icon">' + appDef.icon + '</span>' +
          '<span class="win-btn-label">' + escHtml(titleText) + '</span>';

        (function (wid) {
          btn.addEventListener("click", function () {
            var win = Desktop.windows[wid];
            if (!win) return;
            if (win.minimized) {
              Desktop.restoreWindow(wid);
              Desktop.bringToFront(wid);
            } else if (win.el.classList.contains("focused") && !win.minimized) {
              Desktop.minimizeWindow(wid);
            } else {
              Desktop.bringToFront(wid);
            }
          });
        })(winId);

        bar.appendChild(btn);
      }
    },

    _wireControls: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      var el = w.el;

      el.querySelector(".btn-minimize").addEventListener("click", function (e) {
        e.stopPropagation();
        Desktop.minimizeWindow(winId);
      });
      el.querySelector(".btn-maximize").addEventListener("click", function (e) {
        e.stopPropagation();
        Desktop.maximizeWindow(winId);
      });
      el.querySelector(".btn-close").addEventListener("click", function (e) {
        e.stopPropagation();
        Desktop.closeWindow(winId);
      });

      /* Double-click titlebar to maximize */
      el.querySelector(".os-window-titlebar").addEventListener("dblclick", function () {
        Desktop.maximizeWindow(winId);
      });
    },

    _makeDraggable: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      var titleBar = w.el.querySelector(".os-window-titlebar");
      var el = w.el;

      var startX, startY, startLeft, startTop;
      var dragging = false;
      var SNAP_PX = 22;

      function getSnapPreview() { return document.getElementById("snap-preview"); }

      titleBar.addEventListener("mousedown", function (e) {
        if (e.target.classList.contains("os-window-btn")) return;
        if (w.maximized) return;
        dragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseInt(el.style.left || "0", 10);
        startTop  = parseInt(el.style.top  || "0", 10);
        Desktop.bringToFront(winId);
        e.preventDefault();
      });

      document.addEventListener("mousemove", function (e) {
        if (!dragging) return;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        var newLeft = Math.max(0, Math.min(startLeft + dx, window.innerWidth - 80));
        var newTop  = Math.max(0, Math.min(startTop  + dy, window.innerHeight - 44 - 34));
        el.style.left = newLeft + "px";
        el.style.top  = newTop  + "px";

        /* Snap zone detection */
        var zone = null;
        if (e.clientX <= SNAP_PX)                        zone = "left";
        else if (e.clientX >= window.innerWidth - SNAP_PX) zone = "right";
        else if (e.clientY <= SNAP_PX)                   zone = "top";
        Desktop._snapZone = zone;

        var sp = getSnapPreview();
        if (sp) {
          if (zone) { sp.className = "snap-preview snap-" + zone; sp.style.display = ""; }
          else       { sp.style.display = "none"; }
        }
      });

      document.addEventListener("mouseup", function () {
        if (!dragging) return;
        dragging = false;
        var sp = getSnapPreview();
        if (sp) sp.style.display = "none";

        var zone = Desktop._snapZone;
        Desktop._snapZone = null;
        if (!zone || w.maximized) return;

        var tbH = 44, totalH = window.innerHeight - tbH;
        if (zone === "left") {
          el.style.left = "0"; el.style.top = "0";
          el.style.width = Math.floor(window.innerWidth / 2) + "px";
          el.style.height = totalH + "px";
        } else if (zone === "right") {
          var hw = Math.ceil(window.innerWidth / 2);
          el.style.left = (window.innerWidth - hw) + "px"; el.style.top = "0";
          el.style.width = hw + "px";
          el.style.height = totalH + "px";
        } else if (zone === "top") {
          Desktop.maximizeWindow(winId);
        }
      });
    },

    _makeResizable: function (winId) {
      var w = Desktop.windows[winId];
      if (!w) return;
      var el = w.el;

      var activeDir = null;
      var startX, startY, startLeft, startTop, startW, startH;
      var MIN_W = 400, MIN_H = 300, TASKBAR_H = 44;

      ["n","ne","e","se","s","sw","w","nw"].forEach(function (dir) {
        var handle = el.querySelector(".rz-" + dir);
        if (!handle) return;
        handle.addEventListener("mousedown", function (e) {
          if (w.maximized) return;
          activeDir = dir;
          startX    = e.clientX;
          startY    = e.clientY;
          startLeft = parseInt(el.style.left || "0", 10);
          startTop  = parseInt(el.style.top  || "0", 10);
          startW    = el.offsetWidth;
          startH    = el.offsetHeight;
          Desktop.bringToFront(winId);
          document.body.classList.add("is-resizing");
          e.preventDefault();
          e.stopPropagation();
        });
      });

      document.addEventListener("mousemove", function (e) {
        if (!activeDir) return;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        var newLeft = startLeft, newTop = startTop;
        var newW = startW, newH = startH;

        if (activeDir.indexOf("e") !== -1) newW = Math.max(MIN_W, startW + dx);
        if (activeDir.indexOf("s") !== -1) newH = Math.max(MIN_H, startH + dy);
        if (activeDir.indexOf("w") !== -1) {
          newW    = Math.max(MIN_W, startW - dx);
          newLeft = startLeft + startW - newW;
        }
        if (activeDir.indexOf("n") !== -1) {
          newH   = Math.max(MIN_H, startH - dy);
          newTop = startTop + startH - newH;
        }

        newLeft = Math.max(0, newLeft);
        newTop  = Math.max(0, newTop);
        newH    = Math.min(newH, window.innerHeight - TASKBAR_H - newTop);
        newH    = Math.max(MIN_H, newH);

        el.style.left   = newLeft + "px";
        el.style.top    = newTop  + "px";
        el.style.width  = newW    + "px";
        el.style.height = newH    + "px";
      });

      document.addEventListener("mouseup", function () {
        if (activeDir) {
          activeDir = null;
          document.body.classList.remove("is-resizing");
        }
      });
    },

    _loadApp: function (winId, app, params) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;

      /* H1: these views need the lazy-loaded study data — wait for it, then render. */
      var needsData = app.indexOf("folder-") === 0 ||
        ["myprogress", "bygrade", "course", "transcript", "skills", "missed", "cohort", "stickers", "assign"].indexOf(app) >= 0;
      if (needsData && window.Lab404Data && !window.Lab404Data.isLoaded()) {
        content.innerHTML = '<div class="loading-state" style="padding:2.4rem;text-align:center;color:var(--text-muted,#9aa)">Loading study content…</div>';
        window.Lab404Data.ensure().then(function () { Desktop._loadApp(winId, app, params); })
          .catch(function () { content.innerHTML = '<div style="padding:2rem;color:var(--text-muted,#9aa)">Couldn’t load the study data. Check your connection and reopen this window.</div>'; });
        return;
      }

      if (app.indexOf("folder-") === 0) {
        Desktop._renderFolder(winId, app);
      } else if (app === "myprogress") {
        Desktop._renderMyProgress(winId);
      } else if (app === "bygrade") {
        Desktop._renderGradeDash(winId);
      } else if (app === "course") {
        if (window.CourseLoader) window.CourseLoader.init(content, params || {});
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Course loader not available.</div>';
      } else if (app === "transcript") {
        Desktop._renderTranscript(winId);
      } else if (app === "chapters-1") {
        Desktop._renderChapterList(winId, 1);
      } else if (app === "chapters-2") {
        Desktop._renderChapterList(winId, 2);
      } else if (app === "chapters-3") {
        Desktop._renderChapterList(winId, 3);
      } else if (app === "synapse") {
        /* Synapse is a standalone app (built by study-materials/security-plus/study-zone/build_public.py) */
        content.style.padding = "0";
        content.style.overflow = "hidden";
        content.innerHTML =
          '<div style="display:flex;flex-direction:column;height:100%;">' +
            '<div style="display:flex;justify-content:flex-end;padding:4px 8px;border-bottom:1px solid var(--border);">' +
              '<a href="synapse/index.html" target="_blank" rel="noopener" style="font-size:0.75rem;color:var(--text-muted);">Open full screen &#8599;</a>' +
            '</div>' +
            '<iframe src="synapse/index.html" title="Synapse Security+ study zone" style="flex:1;width:100%;border:0;background:#fff;"></iframe>' +
          '</div>';
      } else if (app === "practice") {
        if (window.PracticeLoader) {
          window.PracticeLoader.init(content, params || {});
        } else {
          content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Practice loader not available.</div>';
        }
      } else if (app === "flashcards") {
        if (window.FlashcardLoader) {
          window.FlashcardLoader.init(content, params || {});
        } else {
          content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Flashcard loader not available.</div>';
        }
      } else if (app === "review") {
        if (window.ReviewLoader) {
          window.ReviewLoader.init(content, params || {});
        } else {
          content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Review loader not available.</div>';
        }
      } else if (app === "glossary") {
        if (window.GlossaryLoader) {
          window.GlossaryLoader.init(content, params || {});
        } else {
          content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Glossary loader not available.</div>';
        }
      } else if (app === "chapter") {
        if (window.ChapterLoader) {
          window.ChapterLoader.init(content, params || {});
        } else {
          content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Chapter loader not available.</div>';
        }
      } else if (app === "notepad") {
        Desktop._renderNotepad(winId);
      } else if (app === "data") {
        Desktop._renderDataManager(winId);
      } else if (app === "skills") {
        Desktop._renderSkillOverview(winId);
      } else if (app === "about") {
        content.innerHTML =
          '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:2rem;text-align:center;gap:0.6rem;">' +
            '<div style="font-size:2.8rem;">🚀</div>' +
            '<h2 style="font-size:1.1rem;color:var(--accent2);margin:0;">Lab404 Study Hub</h2>' +
            '<p style="font-size:0.8rem;color:var(--text-muted);margin:0;">Free learning for every subject &mdash; OS Edition</p>' +
            '<div style="width:160px;height:1px;background:var(--border);margin:0.8rem auto;"></div>' +
            '<p style="font-size:0.75rem;color:var(--text-faint);margin:0;line-height:1.8;">' +
              'Math &bull; Science &bull; English &bull; Social Studies &bull; Coding<br>' +
              'Life skills &amp; electives &bull; CompTIA A+ and Security+<br>' +
              'Flashcards &bull; Practice Tests &bull; XP &amp; Levels &bull; Streaks' +
            '</p>' +
            '<div style="width:160px;height:1px;background:var(--border);margin:0.8rem auto;"></div>' +
            '<p style="font-size:0.68rem;color:var(--text-faint);margin:0;">K&ndash;12 through college &bull; private &bull; works offline</p>' +
            '<button id="about-ff" style="margin-top:.7rem;border:1px solid var(--border);background:var(--surface,#1a2230);color:var(--text,#dfe);border-radius:9px;padding:6px 12px;font-size:.72rem;cursor:pointer">👪 For Parents &amp; Teachers</button>' +
          '</div>';
        var affb = document.getElementById("about-ff");
        if (affb) affb.addEventListener("click", function () { Desktop.openWindow("forfamilies"); });
      } else if (app === "forfamilies") {
        Desktop._renderForFamilies(winId);
      } else if (app === "missed") {
        if (window.Lab404Missed) window.Lab404Missed.render(content);
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Missed-questions practice not available.</div>';
      } else if (app === "typing") {
        if (window.Lab404Typing) window.Lab404Typing.render(content);
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Typing tutor not available.</div>';
      } else if (app === "cohort") {
        if (window.Lab404Cohort) window.Lab404Cohort.render(content);
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Class view not available.</div>';
      } else if (app === "stickers") {
        if (window.Lab404Stickers) window.Lab404Stickers.render(content);
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Sticker book not available.</div>';
      } else if (app === "assign") {
        if (window.Lab404Assign) { if (params && params.assign) window.Lab404Assign.renderStudent(content, params.assign); else window.Lab404Assign.renderBuilder(content); }
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Assignments not available.</div>';
      } else if (app === "writing") {
        if (window.Lab404Writing) window.Lab404Writing.render(content);
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Writing practice not available.</div>';
      } else if (app === "esglossary") {
        if (window.Lab404EsGlossary) window.Lab404EsGlossary.render(content);
        else content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Glossary not available.</div>';
      }
    },

    /* C4 — a short, friendly guide for a parent or teacher using the hub with a child/class. */
    _renderForFamilies: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;
      if (!document.getElementById("ff-style")) {
        var st = document.createElement("style"); st.id = "ff-style";
        st.textContent =
          ".ff{padding:18px 20px;font-size:.9rem;line-height:1.6;max-width:600px;margin:0 auto;box-sizing:border-box}" +
          ".ff h2{font-size:1.15rem;color:var(--accent2,#39e3c8);margin:0 0 2px}" +
          ".ff .ff-lead{color:var(--text-muted,#9aa);margin:0 0 16px;font-size:.82rem}" +
          ".ff h3{font-size:.95rem;margin:18px 0 6px;color:var(--text,#dfe)}" +
          ".ff .ff-step{display:flex;gap:10px;align-items:flex-start;margin:0 0 10px}" +
          ".ff .ff-num{flex:0 0 22px;width:22px;height:22px;border-radius:50%;background:var(--accent2,#39e3c8);color:#04201b;font-weight:800;font-size:.72rem;display:flex;align-items:center;justify-content:center;margin-top:1px}" +
          ".ff .ff-step > div:last-child{flex:1}" +
          ".ff .ff-step b{color:var(--text,#dfe)}" +
          ".ff .ff-card{border:1px solid var(--border,#334);border-radius:12px;padding:12px 14px;margin:12px 0}" +
          ".ff .ff-card b{color:var(--accent2,#39e3c8)}" +
          ".ff ul{margin:6px 0;padding-left:20px}" +
          ".ff li{margin:3px 0}" +
          ".ff .ff-priv{border:1px solid var(--border,#334);border-radius:12px;padding:12px 14px;margin:14px 0;background:rgba(57,227,200,.06)}" +
          ".ff .ff-go{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--border,#334);background:var(--surface,#1a2230);color:var(--text,#dfe);border-radius:9px;padding:7px 12px;font-size:.78rem;cursor:pointer;margin:4px 6px 4px 0}" +
          ".ff .ff-go:hover{border-color:var(--accent2,#39e3c8);color:var(--accent2,#39e3c8)}";
        document.head.appendChild(st);
      }
      content.innerHTML =
        '<div class="ff">' +
          '<h2>👪 For Parents &amp; Teachers</h2>' +
          '<p class="ff-lead">Everything here is free, needs no account, and keeps a learner’s work on their own device. Here’s how to use it with a child or a class.</p>' +

          '<div class="ff-priv"><b>🔒 No sign-up, no tracking.</b> Nothing is uploaded. Progress, scores and streaks are saved only in this browser. Using a shared or school computer? Give each learner their own <b>profile</b> (LAUNCH → the profile button) so their work stays separate.</div>' +

          '<h3>Getting a learner started</h3>' +
          '<div class="ff-step"><div class="ff-num">1</div><div>On first open, the hub asks <b>what grade</b> they’re in and drops them into that grade’s subjects. K–2 switches to a bigger, friendlier <b>Junior</b> layout automatically.</div></div>' +
          '<div class="ff-step"><div class="ff-num">2</div><div>Tap <b>LAUNCH → My Grade</b> any time to jump back to their grade. Or open <b>Browse by Grade</b> to pick any grade and subject.</div></div>' +
          '<div class="ff-step"><div class="ff-num">3</div><div>Each subject has <b>concept cards</b>, <b>flashcards</b>, a <b>glossary</b>, and <b>practice questions</b>. Getting questions right builds mastery, XP and a daily streak.</div></div>' +

          '<h3>Assigning a specific lesson</h3>' +
          '<p style="margin:2px 0 8px">Open any course and tap <b>Share / Assign</b> — it copies a link that opens straight to that lesson. Paste it into your class chat, an email, or a worksheet. No roster or login needed; the link just opens the lesson.</p>' +

          '<h3>Seeing how they’re doing</h3>' +
          '<ul>' +
            '<li><b>Skill Overview</b> (LAUNCH menu) — mastery across every subject at a glance.</li>' +
            '<li><b>My Progress</b> — level, streak, what to study next, and a <b>Print progress sheet</b> button for a clean paper/PDF report.</li>' +
            '<li><b>Download certificate</b> — a shareable PNG of what they’ve mastered.</li>' +
          '</ul>' +

          '<div class="ff-card"><b>Classroom tip:</b> have students use <b>Print progress sheet</b> or export their backup (LAUNCH → profile → Export) and hand it in — that’s your gradebook, with no accounts to manage. A <b>⌨ Report</b> button on each course lets them flag a confusing question.</div>' +

          '<h3>Works offline</h3>' +
          '<p style="margin:2px 0 10px">After the first visit the hub keeps working with no internet, and you can <b>install it</b> like an app (look for the install banner, or your browser’s “Install” option). Great for a bus ride or a spotty connection.</p>' +

          '<div style="margin-top:14px">' +
            '<button class="ff-go" data-ff="bygrade">🎓 Browse by Grade</button>' +
            '<button class="ff-go" data-ff="skills">📊 Skill Overview</button>' +
            '<button class="ff-go" data-ff="myprogress">📈 My Progress</button>' +
            '<button class="ff-go" data-ff="cohort">👩‍🏫 Class View (teachers)</button>' +
            '<button class="ff-go" data-ff="assign">📋 Create an assignment</button>' +
            '<button class="ff-go" id="ff-weekly">🗓️ Print weekly plan</button>' +
          '</div>' +
        '</div>';
      content.querySelectorAll(".ff-go[data-ff]").forEach(function (b) {
        b.addEventListener("click", function () { Desktop.openWindow(this.getAttribute("data-ff")); });
      });
      var wkBtn = content.querySelector("#ff-weekly");
      if (wkBtn) wkBtn.addEventListener("click", function () {   /* R6: printable weekly plan */
        if (!window.Lab404WeeklyPlan) return;
        var go = function () { window.Lab404WeeklyPlan.print(); };
        if (window.Lab404Data && !window.Lab404Data.isLoaded()) window.Lab404Data.ensure().then(go).catch(go);
        else go();
      });
    },

    _renderMyProgress: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;
      var C = window.LAB404_CONTENT || {}, COURSES = window.LAB404_COURSES || {}, M = window.LAB404_MASTERY;
      var prog = Desktop._progGet();
      var li = (window.XPSystem && window.XPSystem.levelInfo) ? window.XPSystem.levelInfo()
             : { xp: 0, level: 1, tag: "LV.1", into: 0, span: 100 };
      var streak = parseInt(localStorage.getItem("study-streak-count") || "0", 10);

      /* Life/elective topics */
      var ck = Object.keys(C), topicTotal = ck.length, topicMastered = 0, topicExplored = 0;
      ck.forEach(function (k) { var e = prog[k]; if (e && e.attempts) { topicExplored++; if ((e.best || 0) >= 0.85) topicMastered++; } });

      /* Graded courses */
      var objTot = 0, objMastered = 0, startedN = 0, reviewCourses = [];
      if (M && M.readiness) Object.keys(COURSES).forEach(function (id) {
        var r = M.readiness(id); if (!r) return;
        objTot += r.total; objMastered += r.mastered;
        if (r.started) startedN++;
        if (localStorage.getItem("lab404.mastery." + id) && r.reviewDue > 0) reviewCourses.push({ id: id, title: COURSES[id].title, n: r.reviewDue });
      });

      /* Study-next suggestions: review-due courses, then weak topics, then something new */
      var next = [];
      reviewCourses.slice(0, 3).forEach(function (rc) {
        next.push({ icon: "🔁", label: "Review due · " + rc.title, sub: rc.n + " objective" + (rc.n > 1 ? "s" : "") + " to refresh", app: "course", params: { course: rc.id } });
      });
      ck.forEach(function (k) {
        if (next.length >= 6) return;
        var e = prog[k];
        if (e && e.attempts && (e.best || 0) < 0.85) next.push({ icon: "📘", label: "Keep practicing · " + C[k].title, sub: (C[k].subject || "") + " · best " + Math.round((e.best || 0) * 100) + "%", app: "folder-" + k });
      });
      for (var i = 0; i < ck.length && next.length < 4; i++) {
        var k2 = ck[i]; if (prog[k2] && prog[k2].attempts) continue;
        next.push({ icon: "✨", label: "Try · " + C[k2].title, sub: (C[k2].subject || "") + " · new topic", app: "folder-" + k2 });
      }

      if (!document.getElementById("mp-style")) {
        var st = document.createElement("style"); st.id = "mp-style";
        st.textContent =
          ".mp-wrap{padding:16px;font-size:.9rem}" +
          ".mp-head{border:1px solid var(--border,#334);border-radius:14px;padding:16px;margin-bottom:14px}" +
          ".mp-lvl{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}" +
          ".mp-tag{font-size:1.6rem;font-weight:800;color:var(--accent2,#39e3c8);line-height:1}" +
          ".mp-xp{font-size:.72rem;color:var(--text-muted,#9aa)}" +
          ".mp-streak{margin-left:auto;font-size:.85rem;font-weight:700;color:var(--amber,#E8A33C)}" +
          ".mp-bar{height:8px;background:var(--border,#334);border-radius:4px;overflow:hidden;margin-top:10px}" +
          ".mp-bar-fill{height:100%;background:linear-gradient(90deg,var(--accent2,#39e3c8),var(--accent,#4a90e2));border-radius:4px}" +
          ".mp-stats{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px}" +
          ".mp-stat{flex:1;min-width:120px;border:1px solid var(--border,#334);border-radius:12px;padding:12px;text-align:center}" +
          ".mp-stat b{display:block;font-size:1.5rem;font-weight:800;line-height:1}" +
          ".mp-stat small{display:block;font-size:.6rem;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.4px;margin-top:4px}" +
          ".mp-h{font-weight:700;font-size:.8rem;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.4px;margin:4px 0 8px}" +
          ".mp-item{display:flex;align-items:center;gap:11px;border:1px solid var(--border,#334);border-radius:10px;padding:10px 13px;margin-bottom:6px;cursor:pointer;width:100%;text-align:left;background:transparent;color:var(--text);font-family:inherit}" +
          ".mp-item:hover{background:rgba(127,127,127,.1)}" +
          ".mp-item .ic{font-size:18px;flex-shrink:0}" +
          ".mp-item>span:last-child{display:flex;flex-direction:column;min-width:0}" +
          ".mp-item .lab{display:block;font-weight:700;font-size:.85rem}.mp-item .sb{display:block;font-size:.66rem;color:var(--text-muted,#9aa);margin-top:1px}" +
          ".mp-empty{color:var(--text-muted,#9aa);font-size:.82rem;padding:8px 0 4px;line-height:1.6}" +
          ".mp-goal{border:1px solid var(--border,#334);border-radius:12px;padding:12px 14px;margin-bottom:14px}" +
          ".mp-goal-top{display:flex;align-items:baseline;gap:8px;font-size:.82rem;margin-bottom:8px}" +
          ".mp-goal-top b{font-size:.95rem}.mp-goal-top .done{color:#3cbe6e;font-weight:700;margin-left:auto}" +
          ".mp-goal-top .cnt{margin-left:auto;color:var(--text-muted,#9aa);font-weight:700}" +
          ".mp-goal-bar{height:8px;background:var(--border,#334);border-radius:4px;overflow:hidden}" +
          ".mp-goal-bar span{display:block;height:100%;background:linear-gradient(90deg,var(--accent2,#39e3c8),var(--accent,#4a90e2));border-radius:4px}" +
          ".mp-badges{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:8px;margin-bottom:4px}" +
          ".mp-badge{border:1px solid var(--border,#334);border-radius:10px;padding:10px 6px;text-align:center}" +
          ".mp-badge .bi{font-size:1.5rem;display:block;filter:grayscale(1);opacity:.35}" +
          ".mp-badge.on .bi{filter:none;opacity:1}" +
          ".mp-badge .bl{display:block;font-size:.6rem;font-weight:700;margin-top:4px;color:var(--text-muted,#9aa)}" +
          ".mp-badge.on .bl{color:var(--text,#dfe)}" +
          ".mp-links{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}" +
          ".mp-link{flex:1;min-width:130px;border:1px solid var(--border,#334);border-radius:10px;padding:10px;text-align:center;cursor:pointer;background:transparent;color:var(--text);font-family:inherit;font-size:.8rem;font-weight:700}" +
          ".mp-link:hover{background:rgba(0,255,204,.08);border-color:rgba(0,255,204,.3)}" +
          "#mp-print{display:none}" +
          "@media print{body.mp-printing>*:not(#mp-print){display:none!important}body.mp-printing #mp-print{display:block!important}@page{margin:14mm}}";
        document.head.appendChild(st);
      }
      if (!document.getElementById("mp-print")) {
        var pdiv = document.createElement("div"); pdiv.id = "mp-print"; document.body.appendChild(pdiv);
      }

      var pct = li.span ? Math.max(0, Math.min(100, Math.round(li.into / li.span * 100))) : 0;
      var nextHtml = next.length
        ? next.map(function (n, i) {
            return '<button class="mp-item" data-i="' + i + '"><span class="ic">' + n.icon + '</span>' +
              '<span style="min-width:0"><span class="lab">' + escHtml(n.label) + '</span><span class="sb">' + escHtml(n.sub) + '</span></span></button>';
          }).join("")
        : '<div class="mp-empty">You’re all caught up. Open a subject and take a quiz to build your level — every subject counts. 🎉</div>';

      /* B4 resume + B5 bookmarks */
      var lib = window.Lab404Lib, last = lib && lib.lastCourse(), bms = (lib && lib.bookmarks()) || [];
      var resumeHtml = "";
      if (last && COURSES[last.id]) {
        var rr = (M && M.readiness) ? M.readiness(last.id) : null;
        var rsub = rr ? (rr.pct + "% ready · " + rr.mastered + "/" + rr.total + " mastered") : "pick up where you left off";
        resumeHtml = '<div class="mp-h">▶️ Continue</div><button class="mp-item" data-resume="' + escHtml(last.id) + '">' +
          '<span class="ic">🎯</span><span style="min-width:0"><span class="lab">' + escHtml(last.title) + '</span><span class="sb">' + escHtml(rsub) + '</span></span></button>';
      }
      /* B3b: practice-what-you-missed card */
      var missedHtml = "";
      var missedN = (window.Lab404Missed && window.Lab404Missed.count) ? window.Lab404Missed.count() : 0;
      if (missedN > 0) {
        missedHtml = '<div class="mp-h">🔁 Fix your misses</div><button class="mp-item" data-missed="1">' +
          '<span class="ic">🔁</span><span style="min-width:0"><span class="lab">Practice what you missed</span>' +
          '<span class="sb">' + missedN + ' question' + (missedN > 1 ? 's' : '') + ' to try again</span></span></button>';
      }

      /* E4: daily goal + badges */
      var goalHtml = "", badgesHtml = "";
      if (window.Lab404Goals) {
        var dg = Lab404Goals.daily();
        var gpct = Math.max(0, Math.min(100, Math.round(dg.answered / dg.goal * 100)));
        goalHtml = '<div class="mp-h">🎯 Today’s goal</div><div class="mp-goal">' +
          '<div class="mp-goal-top"><b>Answer ' + dg.goal + ' questions</b>' +
            (dg.met ? '<span class="done">✅ Done! +streak</span>' : '<span class="cnt">' + dg.answered + ' / ' + dg.goal + '</span>') +
          '</div><div class="mp-goal-bar"><span style="width:' + gpct + '%"></span></div></div>';
        var bl = Lab404Goals.badges();
        var earned = bl.filter(function (b) { return b.earned; }).length;
        badgesHtml = '<div class="mp-h">🏅 Badges · ' + earned + ' / ' + bl.length + '</div><div class="mp-badges">' +
          bl.map(function (b) {
            return '<div class="mp-badge' + (b.earned ? " on" : "") + '" title="' + escHtml(b.desc) + (b.earned ? "" : " (locked)") + '">' +
              '<span class="bi">' + b.icon + '</span><span class="bl">' + escHtml(b.label) + '</span></div>';
          }).join("") + '</div>';
      }

      var bmHtml = "";
      var bmShow = bms.filter(function (b) { return COURSES[b.id]; });
      if (bmShow.length) {
        bmHtml = '<div class="mp-h">⭐ Bookmarked</div>' + bmShow.map(function (b) {
          return '<button class="mp-item" data-resume="' + escHtml(b.id) + '"><span class="ic">📘</span>' +
            '<span style="min-width:0"><span class="lab">' + escHtml(b.title) + '</span></span></button>';
        }).join("");
      }

      content.innerHTML =
        '<div class="mp-wrap">' +
          '<div class="mp-head">' +
            '<div class="mp-lvl"><span class="mp-tag">' + escHtml(li.tag) + '</span>' +
              '<span class="mp-xp">' + li.xp + ' XP total' + (li.span ? ' · ' + li.into + ' / ' + li.span + ' to next level' : '') + '</span>' +
              (streak > 0 ? '<span class="mp-streak">🔥 ' + streak + '-day streak</span>' : '') +
            '</div>' +
            '<div class="mp-bar"><div class="mp-bar-fill" style="width:' + pct + '%"></div></div>' +
          '</div>' +
          '<div class="mp-stats">' +
            '<div class="mp-stat"><b>' + topicMastered + '<span style="font-size:.9rem;color:var(--text-faint,#778)">/' + topicTotal + '</span></b><small>Topics mastered</small></div>' +
            '<div class="mp-stat"><b>' + topicExplored + '</b><small>Topics explored</small></div>' +
            '<div class="mp-stat"><b>' + objMastered + '<span style="font-size:.9rem;color:var(--text-faint,#778)">/' + objTot + '</span></b><small>Objectives mastered</small></div>' +
            '<div class="mp-stat"><b>' + startedN + '</b><small>Courses started</small></div>' +
          '</div>' +
          goalHtml +
          resumeHtml +
          missedHtml +
          '<div class="mp-h">🎯 Study next</div>' + nextHtml +
          bmHtml +
          badgesHtml +
          '<div class="mp-links">' +
            '<button class="mp-link" data-open="bygrade">🎓 Browse by Grade</button>' +
            '<button class="mp-link" data-open="stickers">🌟 Sticker Book</button>' +
            '<button class="mp-link" data-open="transcript">📋 Report Card</button>' +
            '<button class="mp-link" data-print="1">🖨 Print progress sheet</button>' +
            '<button class="mp-link" data-cert="1">🎓 Download certificate</button>' +
            '<button class="mp-link" data-compare="1">👥 Compare with a friend</button>' +
          '</div>' +
        '</div>';

      content.querySelectorAll(".mp-item[data-i]").forEach(function (b) {
        b.addEventListener("click", function () { var n = next[+this.getAttribute("data-i")]; if (n) Desktop.openWindow(n.app, n.params); });
      });
      content.querySelectorAll(".mp-item[data-resume]").forEach(function (b) {
        b.addEventListener("click", function () { Desktop.openWindow("course", { course: this.getAttribute("data-resume") }); });
      });
      content.querySelectorAll(".mp-item[data-missed]").forEach(function (b) {
        b.addEventListener("click", function () { Desktop.openWindow("missed"); });
      });
      content.querySelectorAll(".mp-link[data-open]").forEach(function (b) {
        b.addEventListener("click", function () { Desktop.openWindow(this.getAttribute("data-open")); });
      });

      /* ── C1: printable progress sheet (local data only, nothing uploaded) ── */
      function buildSheet() {
        var grade = ""; try { grade = localStorage.getItem("lab404.myGrade") || ""; } catch (e) {}
        var gLbl = grade === "K" ? "Kindergarten" : grade === "C" ? "College" : grade ? "Grade " + grade : "";
        var dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        var started = [];
        if (M && M.readiness) Object.keys(COURSES).forEach(function (id) {
          var r = M.readiness(id); if (r && r.started) {
            started.push({ t: COURSES[id].title, m: r.mastered, tot: r.total, p: r.total ? Math.round(r.mastered / r.total * 100) : 0 });
          }
        });
        var weak = [];
        Object.keys(C).forEach(function (k) { var e = prog[k]; if (e && e.attempts && (e.best || 0) < 0.85) weak.push({ t: C[k].title, best: Math.round((e.best || 0) * 100) }); });
        function sec(t) { return '<h2 style="font-size:14px;color:#2b5fa6;border-bottom:2px solid #4a90e2;padding-bottom:3px;margin:16px 0 7px">' + t + '</h2>'; }
        function row(a, b) { return '<div style="display:flex;justify-content:space-between;font-size:12.5px;padding:3px 0;border-bottom:1px solid #eee"><span>' + a + '</span><span style="color:#555;text-align:right">' + b + '</span></div>'; }
        return '<div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:680px;margin:0 auto;padding:6px">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #4a90e2;padding-bottom:8px">' +
            '<div><div style="font-size:22px;font-weight:800;color:#2b5fa6">Study Progress Report</div>' +
            '<div style="font-size:12px;color:#666">Lab404 Study Hub' + (gLbl ? ' &middot; ' + gLbl : '') + '</div></div>' +
            '<div style="font-size:12px;color:#666">' + dateStr + '</div></div>' +
          sec('Overview') +
            row('Level', escHtml(li.tag) + ' (' + li.xp + ' XP)') +
            (streak > 0 ? row('Study streak', streak + ' days') : '') +
            row('Topics explored', topicExplored + ' of ' + topicTotal) +
            row('Topics mastered (85%+)', String(topicMastered)) +
            row('Course objectives mastered', objMastered + ' of ' + objTot) +
            row('Courses started', String(startedN)) +
          sec('Courses in progress') +
            (started.length ? started.map(function (c) { return row(escHtml(c.t), c.m + '/' + c.tot + ' objectives &middot; ' + c.p + '%'); }).join('')
                            : '<div style="font-size:12px;color:#777">No mastery courses started yet.</div>') +
          sec('Focus next') +
            ((reviewCourses.length || weak.length)
              ? (reviewCourses.map(function (rc) { return row('Review: ' + escHtml(rc.title), rc.n + ' objective' + (rc.n > 1 ? 's' : '') + ' due'); }).join('') +
                 weak.slice(0, 12).map(function (w) { return row('Practice: ' + escHtml(w.t), 'best ' + w.best + '%'); }).join(''))
              : '<div style="font-size:12px;color:#777">All caught up. &#127881;</div>') +
          '<p style="font-size:10px;color:#999;margin-top:22px">Generated on this device from the learner’s saved progress &mdash; nothing was uploaded. Lab404 Study Hub.</p>' +
        '</div>';
      }
      var printBtn = content.querySelector('.mp-link[data-print]');
      if (printBtn) printBtn.addEventListener("click", function () {
        var box = document.getElementById("mp-print"); if (!box) return;
        box.innerHTML = buildSheet();
        document.body.classList.add("mp-printing");
        if (!Desktop._mpAfterPrint) {
          Desktop._mpAfterPrint = true;
          window.addEventListener("afterprint", function () { document.body.classList.remove("mp-printing"); });
        }
        window.print();
      });

      /* ── E3: shareable certificate (canvas -> PNG download, local data only) ── */
      function drawCertificate() {
        var name = "Learner";
        try { if (window.Lab404Profiles && Lab404Profiles.current()) name = Lab404Profiles.current().name || name; } catch (e) {}
        var grade = ""; try { grade = localStorage.getItem("lab404.myGrade") || ""; } catch (e) {}
        var gLbl = grade === "K" ? "Kindergarten" : grade === "C" ? "College" : grade ? "Grade " + grade : "";
        var dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        var W = 1000, H = 700, cv = document.createElement("canvas"); cv.width = W; cv.height = H;
        var x = cv.getContext("2d");
        x.fillStyle = "#0f1b2d"; x.fillRect(0, 0, W, H);
        x.fillStyle = "#13233b"; x.fillRect(30, 30, W - 60, H - 60);
        x.strokeStyle = "#39e3c8"; x.lineWidth = 4; x.strokeRect(40, 40, W - 80, H - 80);
        x.strokeStyle = "rgba(74,144,226,.5)"; x.lineWidth = 1; x.strokeRect(52, 52, W - 104, H - 104);
        x.textAlign = "center";
        x.fillStyle = "#39e3c8"; x.font = "700 20px Georgia, serif"; x.fillText("LAB404 STUDY HUB", W / 2, 120);
        x.fillStyle = "#ffffff"; x.font = "700 46px Georgia, serif"; x.fillText("Certificate of Progress", W / 2, 190);
        x.strokeStyle = "#39e3c8"; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 160, 214); x.lineTo(W / 2 + 160, 214); x.stroke();
        x.fillStyle = "#9fb0ad"; x.font = "18px Arial"; x.fillText("This certifies that", W / 2, 268);
        x.fillStyle = "#ffffff"; x.font = "700 40px Georgia, serif"; x.fillText(name, W / 2, 322);
        x.fillStyle = "#cfe0dc"; x.font = "18px Arial";
        x.fillText("has reached " + li.tag + " with " + li.xp + " XP" + (gLbl ? " in " + gLbl : ""), W / 2, 372);
        var stats = [["Topics mastered", topicMastered], ["Objectives mastered", objMastered], ["Courses started", startedN]];
        if (streak > 0) stats.push(["Day streak", streak]);
        var gap = W / (stats.length + 1);
        stats.forEach(function (s, i) {
          var cx = gap * (i + 1);
          x.fillStyle = "#39e3c8"; x.font = "700 34px Georgia, serif"; x.fillText(String(s[1]), cx, 470);
          x.fillStyle = "#9fb0ad"; x.font = "13px Arial"; x.fillText(s[0], cx, 496);
        });
        x.fillStyle = "#9fb0ad"; x.font = "16px Arial"; x.fillText("Awarded " + dateStr, W / 2, 572);
        x.fillStyle = "#6b7573"; x.font = "12px Arial"; x.fillText("Free learning for every subject · techlab-jd.github.io/lab404", W / 2, 642);
        var a = document.createElement("a");
        a.download = "lab404-certificate.png"; a.href = cv.toDataURL("image/png"); a.click();
      }
      var certBtn = content.querySelector('.mp-link[data-cert]');
      if (certBtn) certBtn.addEventListener("click", drawCertificate);

      /* ── E2: opt-in friend compare via a local share code (no accounts/server) ── */
      function b64enc(s) { return btoa(unescape(encodeURIComponent(s))); }
      function b64dec(s) { return decodeURIComponent(escape(atob(s))); }
      function myStats() {
        var name = ""; try { if (window.Lab404Profiles && Lab404Profiles.current()) name = Lab404Profiles.current().name; } catch (e) {}
        return { n: name || "You", lv: li.level || 1, xp: li.xp || 0, tm: topicMastered, om: objMastered };
      }
      function myCode() { return b64enc(JSON.stringify(myStats())); }
      function parseCode(code) { try { var o = JSON.parse(b64dec((code || "").trim())); if (o && typeof o.lv === "number" && typeof o.xp === "number") return o; } catch (e) {} return null; }
      function showCompare() {
        var ov = document.getElementById("mp-compare-ov");
        if (!ov) {
          ov = document.createElement("div"); ov.id = "mp-compare-ov";
          ov.style.cssText = "position:fixed;inset:0;z-index:9998;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(4,8,10,.72)";
          ov.innerHTML =
            '<div style="box-sizing:border-box;width:min(440px,100%);max-height:88vh;overflow:auto;background:#0f1619;border:1px solid #223;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.6);padding:20px;color:#dfecea;font-family:system-ui,sans-serif;position:relative">' +
              '<button id="mpc-x" aria-label="Close" style="position:absolute;top:12px;right:14px;background:none;border:0;color:#73857f;font-size:22px;cursor:pointer">×</button>' +
              '<div style="font:600 11px/1 ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;color:#39e3c8">Opt-in · stays on your device</div>' +
              '<h2 style="margin:8px 0 4px;font-size:20px;color:#fff">Compare with a friend</h2>' +
              '<p style="margin:0 0 14px;font-size:12.5px;color:#9fb0ad">Share your code, or paste a friend’s, to compare levels. No accounts — nothing is uploaded.</p>' +
              '<div style="font-size:12px;color:#9fb0ad;margin-bottom:5px">Your code (share it)</div>' +
              '<div style="display:flex;gap:7px;margin-bottom:12px"><input id="mpc-mine" readonly style="flex:1;min-width:0;background:#11141a;border:1px solid #2a3b3a;border-radius:7px;padding:8px;color:#eaf4f2;font:11px monospace"><button id="mpc-copy" style="background:#2a3b3a;border:0;color:#dfecea;border-radius:7px;padding:8px 12px;font:600 12px system-ui;cursor:pointer">Copy</button></div>' +
              '<div style="font-size:12px;color:#9fb0ad;margin-bottom:5px">Friend’s code</div>' +
              '<div style="display:flex;gap:7px"><input id="mpc-friend" placeholder="Paste their code…" style="flex:1;min-width:0;background:#11141a;border:1px solid #2a3b3a;border-radius:7px;padding:8px;color:#eaf4f2;font:11px monospace"><button id="mpc-go" style="background:#39e3c8;border:0;color:#06201c;border-radius:7px;padding:8px 14px;font:600 13px system-ui;cursor:pointer">Compare</button></div>' +
              '<div id="mpc-result" style="margin-top:14px"></div>' +
            '</div>';
          document.body.appendChild(ov);
          ov.addEventListener("click", function (e) { if (e.target === ov) ov.style.display = "none"; });
          ov.querySelector("#mpc-x").onclick = function () { ov.style.display = "none"; };
          ov.querySelector("#mpc-copy").onclick = function () {
            var i = document.getElementById("mpc-mine"); i.focus(); i.select();
            var b = this; try { if (navigator.clipboard) navigator.clipboard.writeText(i.value); else document.execCommand("copy"); } catch (e) { try { document.execCommand("copy"); } catch (x) {} }
            b.textContent = "Copied!"; setTimeout(function () { b.textContent = "Copy"; }, 1500);
          };
          ov.querySelector("#mpc-go").onclick = function () {
            var fo = parseCode(document.getElementById("mpc-friend").value);
            var res = document.getElementById("mpc-result");
            if (!fo) { res.innerHTML = '<div style="font-size:12.5px;color:#f0695c">That code didn’t work — check you pasted the whole thing.</div>'; return; }
            var me = myStats();
            function row(label, m, f) {
              return '<div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid #1c2524;font-size:13px"><span style="flex:1;color:#9fb0ad">' + label + '</span>' +
                '<span style="width:72px;text-align:right;font-weight:700;color:' + (m >= f ? "#39e3c8" : "#dfecea") + '">' + m + '</span>' +
                '<span style="width:72px;text-align:right;font-weight:700;color:' + (f >= m ? "#39e3c8" : "#dfecea") + '">' + f + '</span></div>';
            }
            res.innerHTML = '<div style="display:flex;gap:8px;padding:4px 0;font-size:11px;color:#73857f;text-transform:uppercase;letter-spacing:.05em"><span style="flex:1"></span><span style="width:72px;text-align:right">You</span><span style="width:72px;text-align:right">' + escHtml((fo.n || "Friend").slice(0, 10)) + '</span></div>' +
              row("Level", me.lv, fo.lv) + row("XP", me.xp, fo.xp) + row("Topics mastered", me.tm, fo.tm) + row("Objectives mastered", me.om, fo.om);
          };
        }
        ov.style.display = "flex";
        document.getElementById("mpc-mine").value = myCode();
        document.getElementById("mpc-friend").value = "";
        document.getElementById("mpc-result").innerHTML = "";
      }
      var cmpBtn = content.querySelector('.mp-link[data-compare]');
      if (cmpBtn) cmpBtn.addEventListener("click", showCompare);
    },

    _renderTranscript: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;
      var COURSES = window.LAB404_COURSES || {};
      var M = window.LAB404_MASTERY;
      function gFull(g) { return g === "K" ? "Kindergarten" : g === "C" ? "College / Intro" : "Grade " + g; }
      function gcol(gpa) { return gpa >= 3.5 ? "#3cbe6e" : gpa >= 2.5 ? "#4a90e2" : gpa >= 1.5 ? "#e0a93c" : "#e0484a"; }
      var GORDER = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "C"];

      if (!document.getElementById("tc-style")) {
        var st = document.createElement("style"); st.id = "tc-style";
        st.textContent =
          ".tc-wrap{padding:16px;font-size:.9rem}" +
          ".tc-head{display:flex;gap:20px;align-items:center;border:1px solid var(--border,#334);border-radius:14px;padding:16px;margin-bottom:16px;flex-wrap:wrap}" +
          ".tc-head .col{text-align:center}" +
          ".tc-big{font-size:2rem;font-weight:800;line-height:1}" +
          ".tc-head small{display:block;font-size:.62rem;color:var(--text-muted,#9aa);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-top:3px}" +
          ".tc-title{font-size:1.15rem;font-weight:800;color:var(--accent2,#4a90e2);margin:0 0 2px}" +
          ".tc-sub{font-size:.72rem;color:var(--text-muted,#9aa);margin:0}" +
          ".tc-gradehd{font-weight:700;font-size:.8rem;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.4px;margin:16px 0 7px}" +
          ".tc-course{display:flex;align-items:center;gap:12px;border:1px solid var(--border,#334);border-radius:10px;padding:10px 13px;margin-bottom:6px;cursor:pointer}" +
          ".tc-course:hover{background:rgba(127,127,127,.1)}" +
          ".tc-cmain{flex:1;min-width:0}.tc-ctitle{font-weight:700;font-size:.88rem}" +
          ".tc-cmeta{font-size:.68rem;color:var(--text-muted,#9aa);margin-top:2px}" +
          ".tc-cg{text-align:center;min-width:40px}.tc-cg b{font-size:1.3rem;font-weight:800;display:block;line-height:1}.tc-cg small{font-size:.56rem;color:var(--text-faint,#778)}" +
          ".tc-empty{color:var(--text-muted,#9aa);font-size:.85rem;padding:16px 0;line-height:1.6}" +
          ".tc-note{color:var(--text-faint,#778);font-size:.68rem;margin-top:14px;line-height:1.5}";
        document.head.appendChild(st);
      }

      var ids = Object.keys(COURSES);
      var cumW = 0, cumGpaW = 0, startedN = 0, masteredTot = 0, objTot = 0;
      ids.forEach(function (id) {
        var r = M.readiness(id); if (!r) return;
        objTot += r.total; masteredTot += r.mastered;
        if (r.started) { var w = r.total || 1; cumW += w; cumGpaW += r.gpa * w; startedN++; }
      });
      var cumGpa = cumW ? cumGpaW / cumW : 0;

      var groups = "";
      GORDER.forEach(function (g) {
        var gids = ids.filter(function (id) { return COURSES[id].grade === g; });
        if (!gids.length) return;
        var rows = gids.map(function (id) {
          var c = COURSES[id], r = M.readiness(id);
          var meta = r.started ? (Math.round(r.pct * 100) + "% ready · " + r.mastered + "/" + r.total + " objectives mastered") : "Not started — open to take the placement test";
          return '<div class="tc-course" data-course="' + escHtml(id) + '">' +
            '<div class="tc-cmain"><div class="tc-ctitle">' + escHtml(c.title) + '</div><div class="tc-cmeta">' + escHtml(meta) + '</div></div>' +
            (r.started
              ? '<div class="tc-cg"><b style="color:' + gcol(r.gpa) + '">' + r.letter + '</b><small>grade</small></div><div class="tc-cg"><b>' + r.gpa.toFixed(1) + '</b><small>GPA</small></div>'
              : '<div class="tc-cg"><b style="color:var(--text-faint,#778)">—</b><small>grade</small></div>') +
            '</div>';
        }).join("");
        groups += '<div class="tc-gradehd">' + gFull(g) + '</div>' + rows;
      });
      if (!groups) groups = '<div class="tc-empty">No mastery courses yet. Open <b>🎓 By Grade</b>, pick a grade, and start a mastery course — your grades and GPA will show up here like a report card.</div>';

      content.innerHTML =
        '<div class="tc-wrap">' +
          '<div class="tc-head">' +
            '<div class="col" style="flex:1;text-align:left;min-width:160px"><div class="tc-title">📋 Report Card & Transcript</div>' +
              '<p class="tc-sub">Your whole education on one page — grades are mastery-driven and climb as you learn.</p></div>' +
            '<div class="col"><span class="tc-big" style="color:' + gcol(cumGpa) + '">' + cumGpa.toFixed(2) + '</span><small>Cumulative GPA</small></div>' +
            '<div class="col"><span class="tc-big">' + masteredTot + "/" + objTot + '</span><small>Objectives mastered</small></div>' +
            '<div class="col"><span class="tc-big">' + startedN + '</span><small>Courses started</small></div>' +
          '</div>' +
          groups +
          '<p class="tc-note">GPA is weighted by each course’s number of objectives and counts only courses you’ve started. Grades are <b>living</b> — they rise toward an A as objectives reach <b>Mastered</b> (85%+). As more mastery courses are added across the grades, they’ll appear here automatically.</p>' +
        '</div>';

      content.querySelectorAll(".tc-course[data-course]").forEach(function (b) {
        b.addEventListener("click", function () { Desktop.openWindow("course", { course: this.getAttribute("data-course") }); });
      });
    },

    _renderGradeDash: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;
      var S = window.LAB404_SUBJECTS || {};
      var C = window.LAB404_CONTENT || {};
      function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
      var GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "C"];
      function gShort(g) { return g === "C" ? "Col" : g; }
      function gFull(g) { return g === "K" ? "Kindergarten" : g === "C" ? "College / Intro" : "Grade " + g; }
      var KEY = "lab404.myGrade", sel;
      try { sel = localStorage.getItem(KEY); } catch (e) {}
      if (GRADES.indexOf(sel) < 0) sel = "K";

      if (!document.getElementById("gd-style")) {
        var st = document.createElement("style"); st.id = "gd-style";
        st.textContent =
          ".gd-wrap{padding:14px}" +
          ".gd-head h2{margin:0 0 2px;font-size:1.15rem;color:var(--accent2,#4a90e2)}" +
          ".gd-sub{font-size:.76rem;color:var(--text-muted,#9aa);margin:0 0 12px}" +
          ".gd-tabs{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px}" +
          ".gd-tab{border:1px solid var(--border,#334);background:transparent;color:var(--text-muted,#9aa);border-radius:8px;padding:5px 9px;font-size:.78rem;font-weight:700;cursor:pointer;min-width:30px}" +
          ".gd-tab.on{background:var(--accent2,#4a90e2);border-color:var(--accent2,#4a90e2);color:#fff}" +
          ".gd-subj{margin-bottom:14px}" +
          ".gd-sh{font-weight:700;font-size:.9rem;margin-bottom:7px}" +
          ".gd-topics{display:grid;grid-template-columns:repeat(auto-fill,minmax(185px,1fr));gap:7px}" +
          ".gd-topic{display:flex;align-items:center;gap:7px;border:1px solid var(--border,#334);border-radius:9px;padding:8px 10px;background:transparent;color:var(--text,#eee);cursor:pointer;text-align:left;font:inherit}" +
          ".gd-topic.ready{border-color:var(--accent2,#4a90e2)}" +
          ".gd-topic:hover{background:rgba(127,127,127,.12)}" +
          ".gd-ti{font-size:1rem;flex:none}" +
          ".gd-tt{flex:1;font-size:.8rem;font-weight:600}" +
          ".gd-tb{font-size:.6rem;color:var(--text-faint,#778);flex:none;white-space:nowrap}" +
          ".gd-topic.ready .gd-tb{color:var(--accent2,#4a90e2)}" +
          ".gd-empty{color:var(--text-muted,#9aa);font-size:.8rem;padding:14px 0}" +
          ".gd-note{margin-top:14px;color:var(--text-faint,#778);font-size:.7rem;line-height:1.5}" +
          ".gd-course{margin-bottom:16px}" +
          ".gd-cbtn{display:block;width:100%;text-align:left;border:1px solid var(--accent2,#4a90e2);background:rgba(74,144,226,.08);color:var(--text,#eee);border-radius:11px;padding:11px 14px;font:inherit;font-weight:700;font-size:.86rem;cursor:pointer;margin-bottom:6px}" +
          ".gd-cbtn span{display:block;font-weight:400;font-size:.7rem;color:var(--text-muted,#9aa);margin-top:2px}";
        document.head.appendChild(st);
      }

      function render() {
        var tabs = GRADES.map(function (g) {
          return '<button class="gd-tab' + (g === sel ? " on" : "") + '" data-g="' + g + '" title="' + escHtml(gFull(g)) + '">' + gShort(g) + "</button>";
        }).join("");
        var acad = S.academic || [], blocks = "", nSub = 0, nTop = 0, nReady = 0;
        acad.forEach(function (subj) {
          var tps = (subj.topics || []).filter(function (t) { return (t.grades || []).indexOf(sel) >= 0; });
          if (!tps.length) return;
          nSub++;
          var items = tps.map(function (t) {
            var ck = subj.key + "-" + slug(t.t), ready = !!C[ck];
            if (ready) nReady++;
            nTop++;
            return '<button class="gd-topic' + (ready ? " ready" : "") + '" data-app="folder-' + subj.key + "-" + slug(t.t) + '">' +
              '<span class="gd-ti">' + (ready ? "📘" : "🔒") + '</span>' +
              '<span class="gd-tt">' + escHtml(t.t) + '</span>' +
              '<span class="gd-tb">' + (ready ? "Lesson" : "Soon") + '</span></button>';
          }).join("");
          blocks += '<div class="gd-subj"><div class="gd-sh">' + subj.icon + " " + escHtml(subj.title) + '</div><div class="gd-topics">' + items + '</div></div>';
        });
        if (!blocks) blocks = '<div class="gd-empty">No subjects are tagged for ' + escHtml(gFull(sel)) + ' yet — they’re on the build roadmap.</div>';
        var courses = window.LAB404_COURSES || {};
        var cb = Object.keys(courses).filter(function (k) { return courses[k].grade === sel; });
        var courseBanner = cb.length ? '<div class="gd-course">' + cb.map(function (k) {
          var co = courses[k];
          return '<button class="gd-cbtn" data-course="' + k + '">🎯 ' + escHtml(co.title) + ' — Mastery course' +
            '<span>Objective-based: placement test, mastery bands, and a live readiness grade (A–F / GPA)</span></button>';
        }).join("") + '</div>' : "";
        content.innerHTML =
          '<div class="gd-wrap">' +
            '<div class="gd-head"><h2>🎓 ' + escHtml(gFull(sel)) + '</h2>' +
              '<p class="gd-sub">' + nSub + " subject" + (nSub === 1 ? "" : "s") + " · " + nTop + " topic" + (nTop === 1 ? "" : "s") + " · " + nReady + ' with lessons ready &mdash; pick a grade:</p></div>' +
            '<div class="gd-tabs">' + tabs + "</div>" +
            courseBanner +
            blocks +
            '<p class="gd-note">Grades follow the Massachusetts Curriculum Frameworks (provisional spine). 📘 = lesson ready, 🔒 = on the roadmap. Your grade is remembered on this device.</p>' +
          "</div>";
        content.querySelectorAll(".gd-tab").forEach(function (b) {
          b.addEventListener("click", function () { sel = this.getAttribute("data-g"); try { localStorage.setItem(KEY, sel); } catch (e) {} render(); });
        });
        content.querySelectorAll(".gd-topic[data-app]").forEach(function (b) {
          b.addEventListener("click", function () { Desktop.openWindow(this.getAttribute("data-app")); });
        });
        content.querySelectorAll(".gd-cbtn[data-course]").forEach(function (b) {
          b.addEventListener("click", function () { Desktop.openWindow("course", { course: this.getAttribute("data-course") }); });
        });
      }
      render();
    },

    /* ── shared grade context (one `lab404.myGrade` across By-Grade + every subject folder) ── */
    _GRADES: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "C"],
    _gradeGet: function () { try { var g = localStorage.getItem("lab404.myGrade"); return this._GRADES.indexOf(g) >= 0 ? g : "K"; } catch (e) { return "K"; } },
    _gradeSet: function (g) { try { localStorage.setItem("lab404.myGrade", g); } catch (e) {} },
    _gradeFull: function (g) { return g === "K" ? "Kindergarten" : g === "C" ? "College / Intro" : "Grade " + g; },
    _gradeShort: function (g) { return g === "C" ? "Col" : g; },
    _gradePickerStyle: function () {
      if (document.getElementById("gp-style")) return;
      var s = document.createElement("style"); s.id = "gp-style";
      s.textContent =
        ".gp-bar{display:flex;align-items:center;gap:5px;flex-wrap:wrap;margin:0 0 12px;padding:8px 10px;border:1px solid var(--border,#334);border-radius:11px}" +
        ".gp-lab{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted,#9aa);margin-right:3px}" +
        ".gp-tab{border:1px solid var(--border,#334);background:transparent;color:var(--text-muted,#9aa);border-radius:7px;padding:3px 7px;font:inherit;font-size:.72rem;font-weight:700;cursor:pointer;min-width:25px}" +
        ".gp-tab.on{background:var(--accent2,#4a90e2);border-color:var(--accent2,#4a90e2);color:#fff}" +
        ".gp-tab:hover{border-color:var(--accent2,#4a90e2)}";
      document.head.appendChild(s);
    },
    _gradeBar: function (cur) {
      return '<div class="gp-bar"><span class="gp-lab">Grade</span>' +
        this._GRADES.map(function (g) {
          return '<button class="gp-tab' + (g === cur ? " on" : "") + '" data-grade="' + g + '" title="' + escHtml(Desktop._gradeFull(g)) + '">' + escHtml(Desktop._gradeShort(g)) + '</button>';
        }).join("") + '</div>';
    },

    _folderCourseStyle: function () {
      if (document.getElementById("fcs-style")) return;
      var s = document.createElement("style"); s.id = "fcs-style";
      s.textContent =
        ".folder-courses{margin:0 0 14px}" +
        ".folder-courses-h{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--accent2,#4a90e2);margin:0 0 7px}" +
        ".folder-course-btn{display:block;width:100%;text-align:left;border:1px solid var(--accent2,#4a90e2);background:rgba(74,144,226,.08);color:var(--text,#eee);border-radius:10px;padding:9px 12px;font:inherit;cursor:pointer;margin-bottom:6px}" +
        ".folder-course-btn:hover{background:rgba(74,144,226,.16)}" +
        ".folder-course-btn b{font-size:.84rem}" +
        ".folder-course-btn span{display:block;font-size:.65rem;color:var(--text-muted,#9aa);margin-top:2px;font-weight:400}" +
        ".folder-course-none{font-size:.76rem;color:var(--text-muted,#9aa);border:1px dashed var(--border,#334);border-radius:10px;padding:9px 12px;line-height:1.5}" +
        ".folder-lessons-h{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text-muted,#9aa);margin:0 0 7px}" +
        ".folder-lessons-note{font-weight:400;text-transform:none;letter-spacing:0;color:var(--accent2,#4a90e2)}" +
        ".folder-app-icon--grade .folder-app-img{box-shadow:0 0 0 2px var(--accent2,#4a90e2);border-radius:12px}";
      document.head.appendChild(s);
    },

    _renderFolder: function (winId, folderApp) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;

      /* A topic with real content opens as a lesson, not a folder / coming-soon. */
      var ckey = folderApp.replace(/^folder-/, "");
      if (window.LAB404_CONTENT && window.LAB404_CONTENT[ckey]) {
        Desktop._renderLesson(content, window.LAB404_CONTENT[ckey], winId, ckey);
        return;
      }

      var folder = FOLDER_CONTENTS[folderApp];
      if (!folder) {
        /* Coming-soon placeholder (works for both certs and academic topics) */
        var appDef = APPS[folderApp] || {};
        var csHeading, csMessage;
        if (appDef.subjectComingSoon) {
          csHeading = appDef.title || "This topic";
          csMessage = "Lessons, flashcards and practice for this topic are being built.";
        } else {
          csHeading = (CERT_LABELS[(appDef.cert || "")] || appDef.title || "This Cert") + " Study Hub";
          csMessage = "Content for this certification is being developed.";
        }
        content.innerHTML =
          '<div class="folder-coming-soon">' +
            '<div class="folder-cs-glyph">🚧</div>' +
            '<h2>' + escHtml(csHeading) + '</h2>' +
            '<p>' + escHtml(csMessage) + '</p>' +
            '<p class="folder-cs-sub">Check back soon \u2014 Lab404 is working on it.</p>' +
          '</div>';
        return;
      }

      function _folderIcon(item) {
        return '<div class="folder-app-icon" data-app="' + escHtml(item.app) + '" role="button" tabindex="0" aria-label="Open ' + escHtml(item.label) + '">' +
          '<div class="folder-app-img">' + item.icon + '</div>' +
          '<div class="folder-app-label">' + escHtml(item.label) + '</div>' +
        '</div>';
      }
      /* Adopted child folders (e.g. Psychology inside Science) are shown in their own
         always-visible block, so they don't get hidden with the topic-lessons grid when
         the subject has graded courses. Topic lessons stay in iconsHtml. */
      var adoptedApps = folder.apps.filter(function (it) { return it.adopted; });
      var topicApps = folder.apps.filter(function (it) { return !it.adopted; });
      var iconsHtml = topicApps.map(_folderIcon).join("");
      var adoptedHtml = adoptedApps.length
        ? ('<div class="folder-lessons-h">🔗 Related folders</div><div class="folder-apps-grid">' + adoptedApps.map(_folderIcon).join("") + '</div>')
        : "";

      /* Grade-aware subject view: the K–12 grade is the structure, the subject is the content.
         An academic subject shows a shared grade picker, the graded course FOR that grade as the
         headline, and its lessons (the ones for that grade highlighted). CompTIA/cert folders are
         not grade-based, so they skip all of this. */
      var subjKey = folderApp.replace(/^folder-/, "");
      var COURSES = window.LAB404_COURSES || {};
      var SUBJ = window.LAB404_SUBJECTS || {};
      var acadSubj = (SUBJ.academic || []).filter(function (s) { return s.key === subjKey; })[0];
      var isAcademic = !!acadSubj && !folder.certKey;

      var byGrade = {};
      Object.keys(COURSES).forEach(function (k) { if (COURSES[k].subjectKey === subjKey) byGrade[String(COURSES[k].grade)] = k; });
      var hasCourses = Object.keys(byGrade).length > 0;
      var grade = Desktop._gradeGet();

      /* Subject-first: open Math and you get ALL of Math (a tool for everyone, not just students).
         The grade/level is an OPTIONAL filter, never the structure. Default shows the whole ladder. */
      var courseHtml = "";
      if (isAcademic && hasCourses) {
        Desktop._gradePickerStyle(); Desktop._folderCourseStyle();
        var allKeys = Object.keys(COURSES).filter(function (k) { return COURSES[k].subjectKey === subjKey; })
          .sort(function (a, b) { return Desktop._GRADES.indexOf(String(COURSES[a].grade)) - Desktop._GRADES.indexOf(String(COURSES[b].grade)); });
        var level = "all"; try { level = localStorage.getItem("lab404.folderLevel") || "all"; } catch (e) {}
        if (level !== "all" && !allKeys.some(function (k) { return String(COURSES[k].grade) === level; })) level = "all";
        var chips = '<div class="gp-bar"><span class="gp-lab">Level · optional</span>' +
          '<button class="gp-tab' + (level === "all" ? " on" : "") + '" data-level="all">All</button>' +
          allKeys.map(function (k) { var g = String(COURSES[k].grade); return '<button class="gp-tab' + (level === g ? " on" : "") + '" data-level="' + g + '" title="' + escHtml(Desktop._gradeFull(g)) + '">' + escHtml(Desktop._gradeShort(g)) + '</button>'; }).join("") +
          '</div>';
        var shown = (level === "all") ? allKeys : allKeys.filter(function (k) { return String(COURSES[k].grade) === level; });
        var list = shown.map(function (k) {
          return '<button class="folder-course-btn" data-course="' + escHtml(k) + '"><b>' + escHtml(COURSES[k].title) +
            '</b><span>Learn + practice every objective · placement · mastery · live grade</span></button>';
        }).join("");
        courseHtml = '<div class="folder-courses"><div class="folder-courses-h">📚 ' + escHtml(acadSubj.title) + ' — choose where to start</div>' +
          chips + list + '</div>';
      }

      /* lessons grid: shown for subjects WITHOUT a graded course (enrichment / non-core). */
      var showLessons = !(isAcademic && hasCourses);
      var lessonsBlock = (showLessons && iconsHtml)
        ? ((isAcademic ? '<div class="folder-lessons-h">📘 Lessons</div>' : (courseHtml ? '<div class="folder-lessons-h">Topic lessons</div>' : "")) +
           '<div class="folder-apps-grid">' + iconsHtml + '</div>')
        : "";

      content.innerHTML =
        '<div class="folder-header">' + escHtml(folder.desc) + '</div>' +
        adoptedHtml + courseHtml + lessonsBlock;

      content.querySelectorAll(".gp-tab[data-level]").forEach(function (b) {
        b.addEventListener("click", function () { try { localStorage.setItem("lab404.folderLevel", this.getAttribute("data-level")); } catch (e) {} Desktop._renderFolder(winId, folderApp); });
      });
      content.querySelectorAll(".folder-course-btn[data-course]").forEach(function (b) {
        b.addEventListener("click", function () { Desktop.openWindow("course", { course: this.getAttribute("data-course") }); });
      });
      content.querySelectorAll(".folder-app-icon[data-app]").forEach(function (icon) {
        icon.addEventListener("click", function () {
          var childParams = folder.certKey ? { certKey: folder.certKey, core: folder.core } : undefined;
          Desktop.openWindow(this.dataset.app, childParams);
        });
        icon.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            var childParams = folder.certKey ? { certKey: folder.certKey, core: folder.core } : undefined;
            Desktop.openWindow(this.dataset.app, childParams);
          }
        });
      });
    },

    /* Render a subject topic as a lesson: intro + concept cards, with flashcard and quiz views. */
    _progKey: "lab404.progress",
    _progGet: function () { try { return JSON.parse(localStorage.getItem(this._progKey)) || {}; } catch (e) { return {}; } },
    _progSet: function (p) { try { localStorage.setItem(this._progKey, JSON.stringify(p)); } catch (e) {} },
    _recordQuiz: function (ckey, pct) { if (!ckey) return null; var p = this._progGet(); var e = p[ckey] || { best: 0, attempts: 0 }; var leveled = pct >= 0.85 && (e.best || 0) < 0.85; e.best = Math.max(e.best || 0, pct); e.last = pct; e.attempts = (e.attempts || 0) + 1; p[ckey] = e; this._progSet(p); if (window.refreshXP) { try { window.refreshXP(); } catch (x) {} } return { leveled: leveled }; },
    _bandFromPct: function (best, attempted) { if (!attempted) return "none"; if (best >= 0.85) return "mastered"; if (best >= 0.70) return "strong"; if (best >= 0.40) return "needs"; return "weak"; },
    _topicBand: function (ckey) { var e = this._progGet()[ckey]; return this._bandFromPct(e ? e.best : 0, !!(e && e.attempts)); },
    _BAND_COL: { none: "#5a6472", weak: "#e0484a", needs: "#e0a93c", strong: "#4a90e2", mastered: "#3cbe6e" },
    _BAND_LAB: { none: "Not started", weak: "Weak", needs: "Needs work", strong: "Strong", mastered: "Mastered" },
    _lhmStyle: function () {
      if (document.getElementById("lhm-style")) return;
      var s = document.createElement("style"); s.id = "lhm-style";
      s.textContent =
        ".qz-ra{border:1px solid var(--border,#334);background:transparent;color:var(--text-muted,#9aa);border-radius:6px;padding:1px 6px;font-size:.8rem;cursor:pointer;line-height:1;vertical-align:middle}" +
        ".qz-ra:hover{border-color:var(--accent2,#4a90e2);color:var(--accent2,#4a90e2)}.qz-ra.playing{background:var(--accent2,#4a90e2);color:#fff;border-color:var(--accent2,#4a90e2)}" +
        ".lsn-coursetie{display:flex;align-items:center;gap:8px;width:100%;text-align:left;border:1px solid var(--accent2,#4a90e2);background:rgba(74,144,226,.1);color:var(--text,#eee);border-radius:10px;padding:9px 13px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer;margin:0 0 14px}" +
        ".lsn-coursetie span{margin-left:auto;color:var(--accent2,#4a90e2);font-size:1rem}" +
        ".lsn-coursetie:hover{background:rgba(74,144,226,.18)}" +
        ".lsn-prog{padding:2px}" +
        ".lsn-pstat{display:flex;align-items:center;gap:14px;border:1px solid var(--border,#334);border-radius:11px;padding:12px 14px;margin-bottom:14px;flex-wrap:wrap}" +
        ".lsn-pstat .big{font-size:1.6rem;font-weight:800;line-height:1}" +
        ".lsn-pill{font-size:.66rem;font-weight:700;border-radius:99px;padding:3px 10px;color:#fff;display:inline-block}" +
        ".lsn-ph{font-weight:700;font-size:.78rem;margin:16px 0 7px;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.4px}" +
        ".lsn-objlist{margin:0;padding-left:18px;font-size:.84rem;line-height:1.7}" +
        ".lsn-hm{display:grid;grid-template-columns:repeat(auto-fill,minmax(135px,1fr));gap:7px}" +
        ".lsn-hmc{border:1px solid var(--border,#334);border-left-width:4px;border-radius:9px;padding:8px 10px;cursor:pointer;background:transparent;color:var(--text,#eee);text-align:left;font:inherit}" +
        ".lsn-hmc:hover{background:rgba(127,127,127,.1)}.lsn-hmc[disabled]{opacity:.5;cursor:default}" +
        ".lsn-hmc .t{font-size:.76rem;font-weight:600;line-height:1.25}.lsn-hmc .b{font-size:.6rem;margin-top:3px;font-weight:700}" +
        ".lsn-hmc.cur{box-shadow:0 0 0 2px var(--accent2,#4a90e2) inset}" +
        ".lsn-legend{display:flex;gap:11px;flex-wrap:wrap;font-size:.64rem;color:var(--text-muted,#9aa);margin-top:9px}" +
        ".lsn-legend span{display:inline-flex;align-items:center;gap:4px}.lsn-legend i{width:10px;height:10px;border-radius:3px;display:inline-block}" +
        ".lsn-lvl2{border:1px solid var(--border,#334);border-radius:11px;padding:12px 14px;margin-top:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}" +
        ".lsn-lvl2 .big{font-size:1.4rem;font-weight:800;line-height:1}";
      document.head.appendChild(s);
    },

    _renderLesson: function (content, d, winId, ckey) {
      var esc = escHtml;
      function block(c) {
        var h = '<div class="lsn-card"><h3>' + esc(c.h) + '</h3>';
        String(c.body == null ? "" : c.body).split(/\n\n+/).forEach(function (p) { if (p.trim()) h += '<p>' + esc(p.trim()) + '</p>'; });
        if (c.visual) h += '<figure class="lsn-fig">' + c.visual + (c.caption ? '<figcaption class="lsn-fig-cap">' + esc(c.caption) + '</figcaption>' : "") + '</figure>';
        if (c.example) h += '<div class="lsn-ex"><span class="lsn-ex-l">Worked example</span>' + esc(c.example) + '</div>';
        if (c.tip) h += '<div class="lsn-tip">💡 ' + esc(c.tip) + '</div>';
        return h + '</div>';
      }
      var objectives = (d.objectives && d.objectives.length)
        ? '<div class="lsn-obj"><div class="lsn-obj-h">🎯 In this lesson you’ll learn to…</div><ul>' +
          d.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("") + '</ul></div>' : "";
      var mainContent, keyPoints;
      if (d.sections && d.sections.length) {
        mainContent = d.sections.map(block).join("");
        keyPoints = (d.cards && d.cards.length) ? '<h3 class="lsn-sec-h">Key points to remember</h3>' + d.cards.map(block).join("") : "";
      } else {
        mainContent = (d.cards || []).map(block).join("");  /* older lessons: cards are the content */
        keyPoints = "";
      }
      var nav = '<div class="lsn-nav">' +
        '<button class="lsn-tab on" data-view="lesson">📖 Lesson</button>' +
        (d.flash && d.flash.length ? '<button class="lsn-tab" data-view="flash">🃏 Flashcards (' + d.flash.length + ')</button>' : "") +
        (d.quiz && d.quiz.length ? '<button class="lsn-tab" data-view="quiz">🎯 Quiz (' + d.quiz.length + ')</button>' : "") +
        '<button class="lsn-tab" data-view="progress">📊 Progress</button>' +
        '<button class="lsn-tab lsn-listen" type="button" aria-pressed="false" title="Read this lesson aloud"><span class="ra-lbl">🔊 Listen</span></button>' + '</div>';
      /* tie this lesson to its subject's graded course for the current grade (K-12 = the structure) */
      var _sk = ckey ? ckey.split("-")[0] : "", _CO = window.LAB404_COURSES || {}, _g = Desktop._gradeGet();
      var _ck = Object.keys(_CO).filter(function (k) { return _CO[k].subjectKey === _sk && String(_CO[k].grade) === _g; })[0];
      var courseTie = _ck ? '<button class="lsn-coursetie" data-course="' + esc(_ck) + '">🎯 Practice &amp; get graded — ' + esc(_CO[_ck].title) + '<span>→</span></button>' : "";
      var lessonView = '<div class="lsn-view" data-v="lesson">' +
        '<div class="lsn-head"><h2>' + esc(d.title) + '</h2><span class="lsn-lvl">' + esc(d.subject || "") + (d.level ? " · " + esc(d.level) : "") + '</span></div>' +
        courseTie +
        objectives + (d.intro ? '<p class="lsn-intro">' + esc(d.intro) + '</p>' : "") + mainContent + keyPoints +
        '<p class="lsn-src">Original Lab404 lesson, written for study. ' + (d.disclaimer ? esc(d.disclaimer) : "Double-check anything important against an authoritative source.") + '</p></div>';
      var flashView = '<div class="lsn-view hide" data-v="flash"><div class="fc" id="' + winId + '-fc"></div>' +
        '<div class="fc-ctrl"><button class="lsn-btn" data-fprev>‹ Prev</button><span class="fc-count" id="' + winId + '-fcn"></span><button class="lsn-btn" data-fnext>Next ›</button></div></div>';
      var raOK = !!(window.ReadAloud && window.ReadAloud.supported());
      var quizView = '<div class="lsn-view hide" data-v="quiz"><div class="qz-score" id="' + winId + '-qs"></div>' +
        (d.quiz || []).map(function (q, qi) {
          return '<div class="qz-q" data-qi="' + qi + '"><div class="qz-qt">' + (qi + 1) + ". " + esc(q.q) +
            (raOK ? ' <button class="qz-ra" data-qi="' + qi + '" type="button" title="Read question aloud" aria-label="Read question aloud">🔊</button>' : "") + '</div>' +
            q.options.map(function (o, oi) { return '<button class="qz-opt" data-qi="' + qi + '" data-oi="' + oi + '">' + esc(o) + '</button>'; }).join("") +
            '<div class="qz-why hide">' + esc(q.why || "") + '</div></div>';
        }).join("") + '</div>';
      var progressView = '<div class="lsn-view hide" data-v="progress"></div>';
      content.innerHTML = nav + lessonView + flashView + quizView + progressView;
      content.classList.add("lsn-content");
      Desktop._lhmStyle();

      /* read-aloud: speak the lesson (intro + concept sections/cards + tips) */
      (function () {
        var lb = content.querySelector(".lsn-listen");
        if (!lb) return;
        if (!(window.ReadAloud && window.ReadAloud.supported())) { lb.style.display = "none"; return; }
        var secs = (d.sections && d.sections.length) ? d.sections : (d.cards || []);
        var txt = (d.title ? d.title + ". " : "") + (d.intro ? d.intro + " " : "");
        secs.forEach(function (c) {
          txt += (c.h ? c.h + ". " : "") + (c.body ? String(c.body).replace(/\n+/g, " ") + " " : "");
          if (c.tip) txt += "Tip. " + c.tip + " ";
        });
        lb.onclick = function () { window.ReadAloud.toggle(txt, lb); };
        /* stop speaking when the user switches tabs */
        content.querySelectorAll('.lsn-tab[data-view]').forEach(function (t) {
          t.addEventListener("click", function () { window.ReadAloud.stop(); });
        });
      })();

      var fi = 0, flipped = false;
      function drawFC() {
        var fc = document.getElementById(winId + "-fc"); if (!fc || !d.flash || !d.flash.length) return;
        var card = d.flash[fi];
        fc.innerHTML = '<div class="fc-card" data-flip><div class="fc-side">' + esc(flipped ? card[1] : card[0]) +
          '</div><div class="fc-hint">' + (flipped ? "definition — tap to flip" : "term — tap to flip") + '</div></div>';
        document.getElementById(winId + "-fcn").textContent = (fi + 1) + " / " + d.flash.length;
      }
      drawFC();
      var answered = {}, correct = 0;
      function updateScore() { var qs = document.getElementById(winId + "-qs"); if (qs && d.quiz) qs.textContent = "Score: " + correct + " correct of " + Object.keys(answered).length + " answered (" + d.quiz.length + " total)"; }
      updateScore();

      function tslug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
      function renderProgress() {
        var pv = content.querySelector('.lsn-view[data-v="progress"]'); if (!pv) return;
        var COL = Desktop._BAND_COL, LAB = Desktop._BAND_LAB, prog = Desktop._progGet();
        var me = (ckey && prog[ckey]) || {}, myBand = Desktop._bandFromPct(me.best || 0, !!me.attempts);
        var bestTxt = me.attempts ? Math.round((me.best || 0) * 100) + "%" : "—";
        var subjKey = ckey ? ckey.split("-")[0] : "";
        var S = window.LAB404_SUBJECTS || {}, subj = (S.academic || []).filter(function (s) { return s.key === subjKey; })[0];
        var cells = "", mastered = 0, total = 0, attempted = 0;
        if (subj) (subj.topics || []).forEach(function (t) {
          var k = subjKey + "-" + tslug(t.t), b = Desktop._topicBand(k); total++;
          if (b === "mastered") mastered++;
          if (prog[k] && prog[k].attempts) attempted++;
          var has = !!(window.LAB404_CONTENT && window.LAB404_CONTENT[k]);
          cells += '<button class="lsn-hmc' + (k === ckey ? " cur" : "") + '" style="border-left-color:' + COL[b] + '"' + (has ? ' data-open="folder-' + k + '"' : " disabled") + '>' +
            '<div class="t">' + esc(t.t) + '</div><div class="b" style="color:' + COL[b] + '">' + LAB[b] + '</div></button>';
        });
        var objs = (d.objectives && d.objectives.length) ? '<ul class="lsn-objlist">' + d.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("") + '</ul>' : '<p style="color:var(--text-muted,#9aa);font-size:.8rem">No objectives listed for this lesson.</p>';
        var legend = '<div class="lsn-legend">' + ["mastered", "strong", "needs", "weak", "none"].map(function (b) { return '<span><i style="background:' + COL[b] + '"></i>' + LAB[b] + '</span>'; }).join("") + '</div>';
        pv.innerHTML = '<div class="lsn-prog">' +
          '<div class="lsn-pstat"><div style="text-align:center"><div class="big" style="color:' + COL[myBand] + '">' + bestTxt + '</div><small style="color:var(--text-muted,#9aa);font-size:.6rem;text-transform:uppercase;letter-spacing:.5px">Best quiz</small></div>' +
            '<div style="flex:1;min-width:150px"><span class="lsn-pill" style="background:' + COL[myBand] + '">' + LAB[myBand] + '</span>' +
            '<div style="font-size:.74rem;color:var(--text-muted,#9aa);margin-top:6px">' + (myBand === "mastered" ? "You’ve got this topic. 🎉" : "Score 85%+ on the quiz to master this topic.") + '</div></div></div>' +
          '<div class="lsn-ph">🎯 Objectives for this lesson</div>' + objs +
          (subj ? ('<div class="lsn-ph">📊 ' + esc(subj.title) + ' — your heat map</div><div class="lsn-hm">' + cells + '</div>' + legend +
            '<div class="lsn-lvl2"><div style="text-align:center"><div class="big" style="color:var(--accent2,#4a90e2)">Lv ' + (mastered + 1) + '</div><small style="color:var(--text-muted,#9aa);font-size:.6rem">' + esc(subj.short || subj.title) + ' level</small></div>' +
              '<div style="flex:1;min-width:160px;font-size:.8rem;color:var(--text-muted,#9aa)"><b style="color:var(--text,#eee)">' + mastered + ' of ' + total + '</b> topics mastered · ' + attempted + ' attempted. Master more topics to level up ' + esc(subj.short || subj.title) + '.</div></div>') : "") +
          '</div>';
        pv.querySelectorAll("[data-open]").forEach(function (b) { b.addEventListener("click", function () { Desktop.openWindow(this.getAttribute("data-open")); }); });
      }
      renderProgress();

      content.addEventListener("click", function (e) {
        var tie = e.target.closest(".lsn-coursetie[data-course]");
        if (tie) { Desktop.openWindow("course", { course: tie.getAttribute("data-course") }); return; }
        var tab = e.target.closest("[data-view]");
        if (tab) {
          content.querySelectorAll(".lsn-tab").forEach(function (t) { t.classList.remove("on"); });
          tab.classList.add("on");
          content.querySelectorAll(".lsn-view").forEach(function (v) { v.classList.toggle("hide", v.getAttribute("data-v") !== tab.getAttribute("data-view")); });
          if (tab.getAttribute("data-view") === "progress") renderProgress();
          return;
        }
        var qra = e.target.closest(".qz-ra");
        if (qra && window.ReadAloud) {
          var rq = d.quiz[+qra.getAttribute("data-qi")];
          if (rq) { var rt = rq.q + ". Options: " + rq.options.map(function (o, i) { return String.fromCharCode(65 + i) + ". " + o; }).join(". "); window.ReadAloud.toggle(rt, qra); }
          return;
        }
        if (e.target.closest("[data-flip]")) { flipped = !flipped; drawFC(); return; }
        if (e.target.closest("[data-fnext]")) { fi = (fi + 1) % d.flash.length; flipped = false; drawFC(); return; }
        if (e.target.closest("[data-fprev]")) { fi = (fi - 1 + d.flash.length) % d.flash.length; flipped = false; drawFC(); return; }
        var opt = e.target.closest(".qz-opt");
        if (opt) {
          var qi = +opt.getAttribute("data-qi"), oi = +opt.getAttribute("data-oi"), q = d.quiz[qi];
          var qEl = content.querySelector('.qz-q[data-qi="' + qi + '"]');
          if (qEl.classList.contains("done")) return;
          qEl.classList.add("done");
          qEl.querySelectorAll(".qz-opt").forEach(function (b) {
            var bi = +b.getAttribute("data-oi");
            if (bi === q.a) b.classList.add("ok"); else if (bi === oi) b.classList.add("no");
            b.disabled = true;
          });
          qEl.querySelector(".qz-why").classList.remove("hide");
          answered[qi] = oi; if (oi === q.a) correct++; updateScore();
          if (d.quiz && Object.keys(answered).length === d.quiz.length) { Desktop._recordQuiz(ckey, correct / d.quiz.length); renderProgress(); }
        }
      });
    },

    _renderChapterList: function (winId, core) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;

      var chapters = window["CHAPTERS_CORE" + core];
      var domainLabels = window["DOMAIN_LABELS_CORE" + core];
      if (!chapters) {
        content.innerHTML = '<div style="padding:2rem;color:var(--text-muted);">Chapter data not loaded.</div>';
        return;
      }

      /* Build domain filter list */
      var domains = [];
      chapters.forEach(function (ch) {
        if (domains.indexOf(ch.domain) === -1) domains.push(ch.domain);
      });

      var filterBtns = '<button class="win-filter-btn active" data-domain="all">All</button>';
      domains.forEach(function (d) {
        filterBtns += '<button class="win-filter-btn" data-domain="' + escHtml(d) + '">' +
          escHtml((domainLabels && domainLabels[d]) || d) + '</button>';
      });

      content.innerHTML =
        '<div class="win-chapter-header">' +
          '<h2>' + (core === 3 ? 'Security+ (SY0-701)' : 'Core ' + core) + ' &mdash; ' + chapters.length + ' Chapters</h2>' +
          '<div class="win-search-bar">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
            '<input type="search" id="' + winId + '-search" placeholder="Search chapters..." aria-label="Search chapters">' +
          '</div>' +
          '<div class="win-filter-bar" id="' + winId + '-filters">' + filterBtns + '</div>' +
        '</div>' +
        '<div class="win-chapter-grid" id="' + winId + '-grid" aria-live="polite"></div>' +
        '<p class="win-no-results" id="' + winId + '-noresults" style="display:none;">No chapters match your search.</p>';

      var activeFilter = "all";
      var searchQuery = "";

      function renderCards(filtered) {
        var grid = document.getElementById(winId + "-grid");
        var noResults = document.getElementById(winId + "-noresults");
        if (!grid) return;
        grid.innerHTML = "";
        if (filtered.length === 0) {
          noResults.style.display = "";
          return;
        }
        noResults.style.display = "none";

        filtered.forEach(function (ch) {
          var domLabel = (domainLabels && domainLabels[ch.domain]) || ch.domain;
          var covBadge = ch.coverage === "COVERED"
            ? '<span class="badge badge-covered" style="font-size:0.65rem;">Covered</span>'
            : '<span class="badge badge-partial" style="font-size:0.65rem;">Partial</span>';

          var card = document.createElement("div");
          card.className = "win-chapter-card";
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.setAttribute("aria-label", "Open Chapter " + ch.num + ": " + ch.title);
          card.innerHTML =
            '<div class="win-chapter-num">Ch ' + String(ch.num).padStart(2, "0") + " &bull; " + escHtml(domLabel) + '</div>' +
            '<div class="win-chapter-title">' + escHtml(ch.title) + '</div>' +
            '<div class="win-chapter-meta">' + covBadge + '</div>';

          (function (chNum) {
            card.addEventListener("click", function () {
              Desktop.openWindow("chapter", { core: core, ch: chNum });
            });
            card.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                Desktop.openWindow("chapter", { core: core, ch: chNum });
              }
            });
          })(ch.num);

          grid.appendChild(card);
        });
      }

      function filterChapters() {
        var filtered = chapters.filter(function (ch) {
          var domainOk = activeFilter === "all" || ch.domain === activeFilter;
          var q = searchQuery.toLowerCase();
          var searchOk = !q || ch.title.toLowerCase().indexOf(q) !== -1 ||
            ch.domain.indexOf(q) !== -1 ||
            ch.objectives.some(function (o) { return o.indexOf(q) !== -1; });
          return domainOk && searchOk;
        });
        renderCards(filtered);
      }

      /* Wire search */
      var searchEl = document.getElementById(winId + "-search");
      if (searchEl) {
        searchEl.addEventListener("input", function () {
          searchQuery = this.value.trim();
          filterChapters();
        });
      }

      /* Wire filters */
      var filtersEl = document.getElementById(winId + "-filters");
      if (filtersEl) {
        filtersEl.querySelectorAll(".win-filter-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            filtersEl.querySelectorAll(".win-filter-btn").forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            activeFilter = btn.dataset.domain;
            filterChapters();
          });
        });
      }

      renderCards(chapters);
    },

    _renderSkillOverview: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;
      var COURSES = window.LAB404_COURSES || {}, C = window.LAB404_CONTENT || {}, M = window.LAB404_MASTERY;
      var prog = Desktop._progGet();
      var li = (window.XPSystem && window.XPSystem.levelInfo) ? window.XPSystem.levelInfo() : { xp: 0, tag: "LV.1" };
      var streak = parseInt(localStorage.getItem("study-streak-count") || "0", 10);

      function row(icon, label, desc, pct, valLabel, active) {
        pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
        var fill = pct > 0 ? '<div class="sk-bar-fill" style="width:' + pct + '%"></div>' : "";
        return '<div class="sk-row ' + (active ? "sk-row-active" : "sk-row-dim") + '">' +
          '<div class="sk-cert-col"><span class="sk-cert-label">' + icon + " " + escHtml(label) + '</span>' +
            '<span class="sk-cert-desc">' + escHtml(desc) + '</span></div>' +
          '<div class="sk-bar-col"><div class="sk-bar"><div class="sk-bar-track">' + fill + '</div></div>' +
            '<span class="sk-xp-label">' + escHtml(valLabel) + '</span></div>' +
          '<div class="sk-level-col"><span class="sk-level-num">' + pct + '</span><span class="sk-level-max">/100</span></div>' +
        '</div>';
      }
      function sec(t) { return '<div style="font:700 .72rem system-ui,sans-serif;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted,#9aa);margin:18px 0 8px">' + t + '</div>'; }

      /* Core academic subjects: objectives mastered across each subject's graded courses */
      var SUBJ = [["math", "🔢", "Math"], ["science", "🔬", "Science"],
        ["english", "📖", "English (ELA)"], ["social", "🏛️", "Social Studies"],
        ["coding", "💻", "Coding & CS"]];
      var acad = SUBJ.map(function (s) {
        var tot = 0, mas = 0, started = false;
        Object.keys(COURSES).forEach(function (id) {
          if (COURSES[id].subjectKey !== s[0]) return;
          if (M && M.readiness) { var r = M.readiness(id); if (r) { tot += r.total; mas += r.mastered; if (r.started) started = true; } }
        });
        return row(s[1], s[2], "K–College · " + mas + " of " + tot + " objectives mastered",
          tot ? mas / tot * 100 : 0, tot ? mas + "/" + tot : "—", started || mas > 0);
      }).join("");

      /* Life & enrichment: the 106 elective topics */
      var ck = Object.keys(C), eTot = ck.length, eMas = 0, eExp = 0;
      ck.forEach(function (k) { var e = prog[k]; if (e && e.attempts) { eExp++; if ((e.best || 0) >= 0.85) eMas++; } });
      var elec = row("🌱", "Life & Enrichment", "Money, cooking, coding, survival, arts & 15 more areas",
        eTot ? eMas / eTot * 100 : 0, eExp + " of " + eTot + " topics explored", eExp > 0);

      /* Certifications (CompTIA) */
      var APLUS_MAX_XP = 6000;
      var aplusXP = (window.XPSystem && window.XPSystem.getXP) ? window.XPSystem.getXP() : 0;
      var CERTS = [
        ["A+", "CompTIA A+ · 220-1201 & 220-1202", true],
        ["Sec+", "CompTIA Security+ · SY0-701", true],
        ["Net+", "CompTIA Network+ · coming soon", false],
        ["Linux+", "CompTIA Linux+ · coming soon", false],
        ["CySA+", "CompTIA CySA+ · coming soon", false]
      ];
      var certRows = CERTS.map(function (c) {
        var pct = c[2] ? aplusXP / APLUS_MAX_XP * 100 : 0;
        return row("🎓", c[0], c[1], pct, c[2] ? aplusXP + " XP" : "Coming soon", c[2]);
      }).join("");

      content.innerHTML =
        '<div class="sk-header"><h2>Skill Overview</h2>' +
          '<p class="sk-subtitle">Your progress across every subject &middot; <b>' + escHtml(li.tag) + '</b> &middot; ' + li.xp + ' XP' +
            (streak > 0 ? ' &middot; 🔥 ' + streak + '-day streak' : '') + '</p></div>' +
        sec("📚 Core subjects") + '<div class="sk-list">' + acad + '</div>' +
        sec("✨ Life &amp; enrichment") + '<div class="sk-list">' + elec + '</div>' +
        sec("🎓 Certifications") + '<div class="sk-list">' + certRows + '</div>';
    },

    _renderNotepad: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;
      content.classList.add("notepad-content");

      var w = Desktop.windows[winId];
      var certKey = (w && w.params && w.params.certKey) || "general";
      var storageKey = certKey + "-notes";

      var saved = "";
      try { saved = localStorage.getItem(storageKey) || ""; } catch (e) {}

      content.innerHTML =
        '<div class="notepad-toolbar">' +
          '<span class="notepad-status" id="' + winId + '-np-status">' +
            (saved.length > 0 ? saved.length + " chars" : "Ready") +
          '</span>' +
          '<button class="notepad-btn" id="' + winId + '-np-clear">Clear</button>' +
        '</div>' +
        '<textarea class="notepad-area" id="' + winId + '-np-area"' +
          ' placeholder="Start typing\u2026 Changes are saved automatically."' +
          ' spellcheck="true" aria-label="Notes"></textarea>';

      var area   = content.querySelector(".notepad-area");
      var status = content.querySelector(".notepad-status");
      var clearBtn = content.querySelector(".notepad-btn");

      if (area) {
        area.value = saved;
        var saveTimer;
        area.addEventListener("input", function () {
          status.textContent = "Saving\u2026";
          clearTimeout(saveTimer);
          saveTimer = setTimeout(function () {
            try {
              localStorage.setItem(storageKey, area.value);
              status.textContent = area.value.length > 0 ? area.value.length + " chars" : "Ready";
            } catch (e) {
              status.textContent = "Save failed";
            }
          }, 600);
        });
      }

      if (clearBtn && area && status) {
        clearBtn.addEventListener("click", function () {
          if (!area.value) return;
          if (confirm("Clear all notes? This cannot be undone.")) {
            area.value = "";
            try { localStorage.removeItem(storageKey); } catch (e) {}
            status.textContent = "Ready";
          }
        });
      }
    },

    _renderDataManager: function (winId) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;

      if (!window.AplusData) {
        content.innerHTML =
          '<div style="padding:2rem;color:var(--text-muted);">Data manager script not loaded.</div>';
        return;
      }

      var KEY_LABELS = {
        "aplus-checklist-c1":       "A+ Core 1 Checklist",
        "aplus-checklist-c2":       "A+ Core 2 Checklist",
        "aplus-checklist-terms-c1": "A+ Core 1 Term Checklist",
        "aplus-checklist-terms-c2": "A+ Core 2 Term Checklist",
        "aplus-checklist-c3":       "Security+ Checklist",
        "aplus-checklist-terms-c3": "Security+ Term Checklist",
        "aplus-wrong":              "A+ Missed Questions",
        "aplus-theme":              "Theme Preference",
        "aplus-notes":              "A+ Notes",
        "netplus-notes":            "Net+ Notes",
        "secplus-notes":            "Sec+ Notes",
        "linuxplus-notes":          "Linux+ Notes",
        "cloudplus-notes":          "Cloud+ Notes",
        "serverplus-notes":         "Server+ Notes",
        "cysa-notes":               "CySA+ Notes",
        "pentest-notes":            "PenTest+ Notes",
        "securityx-notes":          "SecurityX Notes",
        "dataplus-notes":           "Data+ Notes",
      };

      function render() {
        var stats = window.AplusData.getStats();
        var totalBytes = 0;
        Object.keys(stats).forEach(function (k) { totalBytes += stats[k].bytes; });

        var rows = window.AplusData.KEYS.map(function (key) {
          var s = stats[key] || { present: false, bytes: 0 };
          var label = KEY_LABELS[key] || key;
          return '<tr class="dm-row' + (s.present ? "" : " dm-row-empty") + '">' +
            '<td class="dm-key-name">' + escHtml(label) + '</td>' +
            '<td class="dm-key-status">' +
              (s.present
                ? '<span class="dm-dot dm-dot-ok">\u25cf</span> Saved'
                : '<span class="dm-dot dm-dot-no">\u25cb</span> Empty') +
            '</td>' +
            '<td class="dm-key-size">' + (s.present ? s.bytes + " B" : "\u2014") + '</td>' +
          '</tr>';
        }).join("");

        content.innerHTML =
          '<div class="dm-header">' +
            '<h2>Study Data Manager</h2>' +
            '<p class="dm-subtitle">Backup and restore your study progress across devices.</p>' +
          '</div>' +
          '<div class="dm-storage-info">' +
            '<span class="dm-total">Total stored: ' + totalBytes + ' bytes</span>' +
          '</div>' +
          '<table class="dm-table">' +
            '<thead><tr><th>Data</th><th>Status</th><th>Size</th></tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
          '</table>' +
          '<div class="dm-actions">' +
            '<div class="dm-section">' +
              '<h3>Export</h3>' +
              '<p>Download all study progress as a JSON backup file.</p>' +
              '<button class="dm-export-btn" id="' + winId + '-dm-export">\ud83d\udcbe Export Study Data</button>' +
            '</div>' +
            '<div class="dm-section">' +
              '<h3>Import</h3>' +
              '<p>Restore progress from a previously exported JSON file.</p>' +
              '<label class="dm-import-label" for="' + winId + '-dm-import">\ud83d\udcc2 Choose File</label>' +
              '<input type="file" id="' + winId + '-dm-import" accept=".json"' +
                ' style="display:none" aria-label="Import study data file">' +
            '</div>' +
          '</div>' +
          '<div class="dm-msg" id="' + winId + '-dm-msg" style="display:none"></div>';

        var exportBtn = document.getElementById(winId + "-dm-export");
        if (exportBtn) {
          exportBtn.addEventListener("click", function () {
            try { window.AplusData.export(); }
            catch (e) { showMsg("Export failed: " + e.message, "error"); }
          });
        }

        var importInput = document.getElementById(winId + "-dm-import");
        if (importInput) {
          importInput.addEventListener("change", function () {
            var file = this.files && this.files[0];
            if (!file) return;
            window.AplusData.import(file, function (result) {
              if (result.ok) {
                showMsg("Imported " + result.count + " " + (result.count === 1 ? "item" : "items") + " successfully.", "ok");
                setTimeout(render, 800);
              } else {
                showMsg(result.msg || "Import failed.", "error");
              }
            });
            importInput.value = "";
          });
        }
      }

      function showMsg(text, type) {
        var msg = document.getElementById(winId + "-dm-msg");
        if (!msg) return;
        msg.textContent = text;
        msg.className = "dm-msg dm-msg-" + type;
        msg.style.display = "";
        setTimeout(function () { if (msg) msg.style.display = "none"; }, 5000);
      }

      render();
    },
  };

  /* ── Start menu ── */
  var startBtn = document.getElementById("startBtn");
  var startMenu = document.getElementById("startMenu");

  if (startBtn && startMenu) {
    startBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isHidden = startMenu.hasAttribute("hidden");
      if (isHidden) {
        try { if (Desktop._syncGrade) Desktop._syncGrade(); } catch (x) {} /* B2: keep "My Grade" label current */
        startMenu.removeAttribute("hidden");
        startBtn.classList.add("active");
        startBtn.setAttribute("aria-expanded", "true");
      } else {
        startMenu.setAttribute("hidden", "");
        startBtn.classList.remove("active");
        startBtn.setAttribute("aria-expanded", "false");
      }
    });

    /* Close on outside click */
    document.addEventListener("click", function () {
      startMenu.setAttribute("hidden", "");
      startBtn.classList.remove("active");
      startBtn.setAttribute("aria-expanded", "false");
    });

    startMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    /* Start menu items */
    startMenu.querySelectorAll(".start-menu-item[data-app]").forEach(function (item) {
      item.addEventListener("click", function () {
        var app = this.dataset.app;
        startMenu.setAttribute("hidden", "");
        startBtn.classList.remove("active");
        startBtn.setAttribute("aria-expanded", "false");
        Desktop.openWindow(app);
      });
    });
  }

  /* ── Desktop icon clicks ── */
  document.querySelectorAll(".desktop-icon[data-app]").forEach(function (icon) {
    icon.addEventListener("click", function () {
      Desktop.openWindow(this.dataset.app);
    });
    icon.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        Desktop.openWindow(this.dataset.app);
      }
    });
  });

  /* ── Progress menu behind the level badge (Browse by Grade + Report Card) ──
     These two aren't desktop icons; clicking the taskbar level badge opens them. */
  (function wireProgressMenu() {
    var badge = document.getElementById("trayXP");
    if (!badge) return;
    badge.setAttribute("role", "button");
    badge.setAttribute("tabindex", "0");
    badge.setAttribute("aria-haspopup", "true");
    badge.setAttribute("aria-expanded", "false");

    var menu = document.createElement("div");
    menu.className = "progress-menu";
    menu.setAttribute("hidden", "");
    menu.innerHTML =
      '<div class="progress-menu-h">Your progress</div>' +
      '<button class="progress-menu-item" data-app="myprogress"><span>📈</span> My Progress</button>' +
      '<button class="progress-menu-item" id="pm-bygrade" data-app="bygrade"><span>🎓</span> Browse by Grade</button>' +
      '<button class="progress-menu-item" data-app="transcript"><span>📋</span> Report Card</button>';
    document.body.appendChild(menu);

    /* B2: reflect the learner's chosen grade on the grade shortcuts (progress menu + LAUNCH) */
    function gradeLbl() {
      var g = ""; try { g = localStorage.getItem("lab404.myGrade") || ""; } catch (e) {}
      return g === "K" ? "Kindergarten" : g === "C" ? "College" : g ? "Grade " + g : "";
    }
    function syncGrade() {
      var gl = gradeLbl();
      var es = (window.Lab404I18n && Lab404I18n.get() === "es");   /* F5: match UI language */
      var txt = gl ? (es ? "Mi grado · " : "My Grade · ") + gl : (es ? "Explorar por grado" : "Browse by Grade");
      var pm = document.getElementById("pm-bygrade");
      if (pm) pm.innerHTML = '<span>🎓</span> ' + txt;
      var sm = document.getElementById("smMyGrade");
      if (sm) { var lbl = sm.querySelector("span:last-child"); if (lbl) lbl.textContent = txt; }
    }
    Desktop._syncGrade = syncGrade;
    syncGrade();

    function place() {
      var r = badge.getBoundingClientRect();
      menu.style.right = Math.max(8, window.innerWidth - r.right) + "px";
      menu.style.bottom = (window.innerHeight - r.top + 8) + "px";
    }
    function open() { syncGrade(); place(); menu.removeAttribute("hidden"); badge.setAttribute("aria-expanded", "true"); }
    function close() { menu.setAttribute("hidden", ""); badge.setAttribute("aria-expanded", "false"); }

    badge.addEventListener("click", function (e) { e.stopPropagation(); if (menu.hasAttribute("hidden")) open(); else close(); });
    badge.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (menu.hasAttribute("hidden")) open(); else close(); } });
    menu.addEventListener("click", function (e) { e.stopPropagation(); });
    menu.querySelectorAll(".progress-menu-item[data-app]").forEach(function (b) {
      b.addEventListener("click", function () { Desktop.openWindow(this.getAttribute("data-app")); close(); });
    });
    document.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    window.addEventListener("resize", function () { if (!menu.hasAttribute("hidden")) place(); });
  })();

  /* ── Calendar popup behind the taskbar clock ── */
  (function wireCalendar() {
    var clock = document.getElementById("taskbarClock");
    if (!clock) return;
    clock.setAttribute("role", "button");
    clock.setAttribute("tabindex", "0");
    clock.setAttribute("aria-haspopup", "true");

    var pop = document.createElement("div");
    pop.className = "cal-pop";
    pop.setAttribute("hidden", "");
    document.body.appendChild(pop);

    var viewY, viewM;
    var MON = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];
    var DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    function render() {
      var today = new Date();
      var startDow = new Date(viewY, viewM, 1).getDay();
      var daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
      var cells = "";
      DOW.forEach(function (d) { cells += '<div class="cal-dow">' + d + "</div>"; });
      for (var i = 0; i < startDow; i++) cells += '<div class="cal-cell cal-empty"></div>';
      for (var day = 1; day <= daysInMonth; day++) {
        var isToday = (day === today.getDate() && viewM === today.getMonth() && viewY === today.getFullYear());
        cells += '<div class="cal-cell' + (isToday ? " cal-today" : "") + '">' + day + "</div>";
      }
      pop.innerHTML =
        '<div class="cal-head">' +
          '<button class="cal-nav" data-nav="-1" aria-label="Previous month">‹</button>' +
          '<span class="cal-title">' + MON[viewM] + " " + viewY + "</span>" +
          '<button class="cal-nav" data-nav="1" aria-label="Next month">›</button>' +
        "</div>" +
        '<div class="cal-grid">' + cells + "</div>" +
        '<button class="cal-today-btn">Today</button>';
      pop.querySelectorAll(".cal-nav").forEach(function (b) {
        b.addEventListener("click", function (e) {
          e.stopPropagation();
          viewM += parseInt(this.getAttribute("data-nav"), 10);
          if (viewM < 0) { viewM = 11; viewY--; } else if (viewM > 11) { viewM = 0; viewY++; }
          render();
        });
      });
      pop.querySelector(".cal-today-btn").addEventListener("click", function (e) {
        e.stopPropagation(); var t = new Date(); viewY = t.getFullYear(); viewM = t.getMonth(); render();
      });
    }
    function place() {
      var r = clock.getBoundingClientRect();
      pop.style.right = Math.max(8, window.innerWidth - r.right) + "px";
      pop.style.bottom = (window.innerHeight - r.top + 8) + "px";
    }
    function open() { var t = new Date(); viewY = t.getFullYear(); viewM = t.getMonth(); render(); place(); pop.removeAttribute("hidden"); }
    function close() { pop.setAttribute("hidden", ""); }

    clock.addEventListener("click", function (e) { e.stopPropagation(); if (pop.hasAttribute("hidden")) open(); else close(); });
    clock.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (pop.hasAttribute("hidden")) open(); else close(); } });
    pop.addEventListener("click", function (e) { e.stopPropagation(); });
    document.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    window.addEventListener("resize", function () { if (!pop.hasAttribute("hidden")) place(); });
  })();

  /* ── Clock ── */
  var clockEl = document.getElementById("taskbarClock");
  function updateClock() {
    if (clockEl) {
      clockEl.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
  }
  updateClock();
  setInterval(updateClock, 10000);

  /* ── Hash routing ── */
  function handleHash() {
    var hash = window.location.hash.replace("#", "");
    if (!hash) return;
    var parts = hash.split("/");
    var route = parts[0];

    if (route === "chapters" && parts[1]) {
      var core = parseInt(parts[1], 10);
      if (core === 1 || core === 2) Desktop.openWindow("chapters-" + core);
    } else if (route === "chapter" && parts[1] && parts[2]) {
      var core = parseInt(parts[1], 10);
      var ch = parseInt(parts[2], 10);
      if ((core === 1 || core === 2) && !isNaN(ch)) {
        Desktop.openWindow("chapter", { core: core, ch: ch });
      }
    } else if (route === "practice") {
      var core = parts[1] ? parseInt(parts[1], 10) : null;
      Desktop.openWindow("practice", core ? { core: core } : {});
    } else if (route === "flashcards") {
      Desktop.openWindow("flashcards");
    } else if (route === "review") {
      Desktop.openWindow("review");
    } else if (route === "glossary") {
      Desktop.openWindow("glossary");
    }
  }

  window.addEventListener("hashchange", handleHash);
  handleHash();

  /* ── Right-click context menu ── */
  var ctxMenu = document.getElementById("ctx-menu");
  var ctxOpen = false;

  function openCtx(x, y) {
    if (!ctxMenu) return;
    ctxMenu.style.left = "";
    ctxMenu.style.top  = "";
    ctxMenu.classList.add("ctx-visible");
    /* Reposition after display so offsetWidth is real */
    var mx = Math.min(x, window.innerWidth  - ctxMenu.offsetWidth  - 6);
    var my = Math.min(y, window.innerHeight - ctxMenu.offsetHeight - 6);
    ctxMenu.style.left = mx + "px";
    ctxMenu.style.top  = my + "px";
    ctxOpen = true;
  }

  function closeCtx() {
    if (!ctxMenu) return;
    ctxMenu.classList.remove("ctx-visible");
    ctxOpen = false;
  }

  document.addEventListener("contextmenu", function (e) {
    /* Intercept right-clicks only on the desktop background, not on windows */
    if (!e.target.closest || !e.target.closest(".os-desktop")) return;
    if (e.target.closest(".os-window") || e.target.closest(".taskbar") || e.target.closest(".start-menu")) return;
    e.preventDefault();
    openCtx(e.clientX, e.clientY);
  });

  document.addEventListener("click", function () { if (ctxOpen) closeCtx(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && ctxOpen) closeCtx(); });

  if (ctxMenu) {
    ctxMenu.addEventListener("click", function (e) {
      var item = e.target.closest("[data-ctx]");
      if (!item) return;
      closeCtx();
      var action = item.dataset.ctx;
      if      (action === "comptia")    Desktop.openWindow("folder-comptia");
      else if (action === "aplus")      Desktop.openWindow("folder-aplus");
      else if (action === "practice")   Desktop.openWindow("practice");
      else if (action === "flashcards") Desktop.openWindow("flashcards");
      else if (action === "review")     Desktop.openWindow("review");
      else if (action === "glossary")   Desktop.openWindow("glossary");
      else if (action === "notepad")    Desktop.openWindow("notepad");
      else if (action === "resetlayout") { try { localStorage.removeItem("lab404.desktopOrder"); } catch (e) {} location.reload(); }
      else if (action === "about")      Desktop.openWindow("about");
    });
  }

  /* Expose for external use */
  window.Desktop = Desktop;

})();
