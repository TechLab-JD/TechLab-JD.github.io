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
    "practice":   { title: "Practice Test",           icon: "🎯" },
    "flashcards": { title: "Flashcards",               icon: "🃏" },
    "review":     { title: "Review Checklist",         icon: "📋" },
    "glossary":   { title: "Glossary",                 icon: "📖" },
    "chapter":    { title: "Chapter",                  icon: "📄" },
    "notepad":    { title: "Notepad",                  icon: "📝" },
    "data":       { title: "Data Manager",             icon: "💾" },
    "skills":     { title: "Skill Overview",           icon: "📊" },
    "about":      { title: "About Lab404 Study Zone",  icon: "🚀" },
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
        winEl.style.width = "520px";
        winEl.style.height = "380px";
      }

      /* Smaller windows for utility apps */
      if (app === "notepad") { winEl.style.width = "560px"; winEl.style.height = "460px"; }
      if (app === "data")    { winEl.style.width = "580px"; winEl.style.height = "520px"; }
      if (app === "skills")  { winEl.style.width = "620px"; winEl.style.height = "580px"; }
      if (app === "about")   { winEl.style.width = "400px"; winEl.style.height = "340px"; }

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
      } else if (app === "chapters-1") {
        Desktop._renderChapterList(winId, 1);
      } else if (app === "chapters-2") {
        Desktop._renderChapterList(winId, 2);
      } else if (app === "chapters-3") {
        Desktop._renderChapterList(winId, 3);
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
            '<h2 style="font-size:1.1rem;color:var(--accent2);margin:0;">Lab404 Study Zone</h2>' +
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

    _renderFolder: function (winId, folderApp) {
      var content = document.getElementById(winId + "-content");
      if (!content) return;

      var folder = FOLDER_CONTENTS[folderApp];
      if (!folder) {
        /* Coming-soon placeholder */
        var appDef = APPS[folderApp] || {};
        var certName = CERT_LABELS[(appDef.cert || "")] || appDef.title || "This Cert";
        content.innerHTML =
          '<div class="folder-coming-soon">' +
            '<div class="folder-cs-glyph">🚧</div>' +
            '<h2>' + escHtml(certName) + ' Study Hub</h2>' +
            '<p>Content for this certification is being developed.</p>' +
            '<p class="folder-cs-sub">Check back soon \u2014 Lab404 is working on it.</p>' +
          '</div>';
        return;
      }

      var iconsHtml = folder.apps.map(function (item) {
        return '<div class="folder-app-icon" data-app="' + escHtml(item.app) + '" role="button" tabindex="0" aria-label="Open ' + escHtml(item.label) + '">' +
          '<div class="folder-app-img">' + item.icon + '</div>' +
          '<div class="folder-app-label">' + escHtml(item.label) + '</div>' +
        '</div>';
      }).join("");

      content.innerHTML =
        '<div class="folder-header">' + escHtml(folder.desc) + '</div>' +
        '<div class="folder-apps-grid">' + iconsHtml + '</div>';

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
      if      (action === "aplus")      Desktop.openWindow("folder-aplus");
      else if (action === "practice")   Desktop.openWindow("practice");
      else if (action === "flashcards") Desktop.openWindow("flashcards");
      else if (action === "review")     Desktop.openWindow("review");
      else if (action === "glossary")   Desktop.openWindow("glossary");
      else if (action === "notepad")    Desktop.openWindow("notepad");
      else if (action === "about")      Desktop.openWindow("about");
    });
  }

  /* Expose for external use */
  window.Desktop = Desktop;

})();
