/* desktop.js — OS Window Manager for A+ Study Hub */
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
      var winEl = document.createElement("div");
      winEl.className = "os-window focused";
      winEl.id = winId;
      winEl.setAttribute("role", "dialog");
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
      };

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
      w.el.remove();
      delete Desktop.windows[winId];
      Desktop.updateTaskbar();
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

      if (app.indexOf("folder-") === 0) {
        Desktop._renderFolder(winId, app);
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
            '<p style="font-size:0.8rem;color:var(--text-muted);margin:0;">CompTIA certification study hub &mdash; OS Edition</p>' +
            '<div style="width:160px;height:1px;background:var(--border);margin:0.8rem auto;"></div>' +
            '<p style="font-size:0.75rem;color:var(--text-faint);margin:0;line-height:1.8;">' +
              '10 Certification Tracks &bull; Chapter Study Guides<br>' +
              'Flashcards &bull; Practice Tests &bull; Review Checklists<br>' +
              'XP &amp; Level System &bull; Study Streak Tracker' +
            '</p>' +
            '<div style="width:160px;height:1px;background:var(--border);margin:0.8rem auto;"></div>' +
            '<p style="font-size:0.68rem;color:var(--text-faint);margin:0;">Built for CompTIA A+ 220-1201/1202 and beyond</p>' +
          '</div>';
      }
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
      var quizView = '<div class="lsn-view hide" data-v="quiz"><div class="qz-score" id="' + winId + '-qs"></div>' +
        (d.quiz || []).map(function (q, qi) {
          return '<div class="qz-q" data-qi="' + qi + '"><div class="qz-qt">' + (qi + 1) + ". " + esc(q.q) + '</div>' +
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

      /* A+ max XP: ~350 chapter topics × 10 + ~400 terms × 5 + 200 practice = ~5700; cap at 6000 */
      var APLUS_MAX_XP = 6000;

      var CERTS = [
        { key: "aplus",      label: "A+",       desc: "CompTIA A+ \u00b7 220-1201 & 220-1202", active: true  },
        { key: "netplus",    label: "Net+",      desc: "CompTIA Network+",                       active: false },
        { key: "secplus",    label: "Sec+",      desc: "CompTIA Security+",                      active: false },
        { key: "linuxplus",  label: "Linux+",    desc: "CompTIA Linux+",                         active: false },
        { key: "cloudplus",  label: "Cloud+",    desc: "CompTIA Cloud+",                         active: false },
        { key: "serverplus", label: "Server+",   desc: "CompTIA Server+",                        active: false },
        { key: "cysa",       label: "CySA+",     desc: "CompTIA CySA+",                          active: false },
        { key: "pentest",    label: "PenTest+",  desc: "CompTIA PenTest+",                       active: false },
        { key: "securityx",  label: "SecurityX", desc: "CompTIA SecurityX",                      active: false },
        { key: "dataplus",   label: "Data+",     desc: "CompTIA Data+",                          active: false },
      ];

      var aplusXP = (window.XPSystem && window.XPSystem.getXP) ? window.XPSystem.getXP() : 0;

      var rows = CERTS.map(function (cert) {
        var level = 0;
        var xpLabel = "Coming soon";

        if (cert.active) {
          level = Math.min(100, Math.round((aplusXP / APLUS_MAX_XP) * 100));
          xpLabel = aplusXP + " XP";
        }

        var barFill = level > 0
          ? '<div class="sk-bar-fill" style="width:' + level + '%"></div>'
          : "";

        return '<div class="sk-row' + (cert.active ? " sk-row-active" : " sk-row-dim") + '">' +
          '<div class="sk-cert-col">' +
            '<span class="sk-cert-label">' + escHtml(cert.label) + '</span>' +
            '<span class="sk-cert-desc">' + escHtml(cert.desc) + '</span>' +
          '</div>' +
          '<div class="sk-bar-col">' +
            '<div class="sk-bar"><div class="sk-bar-track">' + barFill + '</div></div>' +
            '<span class="sk-xp-label">' + escHtml(xpLabel) + '</span>' +
          '</div>' +
          '<div class="sk-level-col">' +
            '<span class="sk-level-num">' + level + '</span>' +
            '<span class="sk-level-max">/100</span>' +
          '</div>' +
        '</div>';
      }).join("");

      content.innerHTML =
        '<div class="sk-header">' +
          '<h2>Skill Overview</h2>' +
          '<p class="sk-subtitle">CompTIA certification progress &mdash; Level 100 = exam ready</p>' +
        '</div>' +
        '<div class="sk-list">' + rows + '</div>';
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
      '<button class="progress-menu-item" data-app="bygrade"><span>🎓</span> Browse by Grade</button>' +
      '<button class="progress-menu-item" data-app="transcript"><span>📋</span> Report Card</button>';
    document.body.appendChild(menu);

    function place() {
      var r = badge.getBoundingClientRect();
      menu.style.right = Math.max(8, window.innerWidth - r.right) + "px";
      menu.style.bottom = (window.innerHeight - r.top + 8) + "px";
    }
    function open() { place(); menu.removeAttribute("hidden"); badge.setAttribute("aria-expanded", "true"); }
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
