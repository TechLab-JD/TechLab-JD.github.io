/* search.js — global search for the Lab404 Study Hub.
   Indexes subjects/folders, topic lessons (that have content), and graded
   courses, then powers the search box in the Start menu. Pure client-side;
   results open the matching window via Desktop.openWindow. */
(function () {
  "use strict";

  var INDEX = null;

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  function norm(s) { return String(s == null ? "" : s).toLowerCase(); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function buildIndex() {
    if (INDEX) return INDEX;
    var idx = [];
    var S = window.LAB404_SUBJECTS || {};
    var C = window.LAB404_CONTENT || {};
    var CO = window.LAB404_COURSES || {};

    /* Subjects (academic) — include topic names in the search text */
    (S.academic || []).forEach(function (s) {
      var topics = (s.topics || []).map(function (t) { return t.t; }).join(" ");
      idx.push({
        type: "Subject", icon: s.icon || "📁", label: s.title, sub: "Subject",
        text: norm(s.title + " " + (s.desc || "") + " " + topics),
        app: "folder-" + s.key
      });

      /* Topic lessons that actually have content */
      (s.topics || []).forEach(function (tp) {
        var key = s.key + "-" + slug(tp.t);
        var t = C[key];
        if (!t) return;                        /* skip coming-soon topics */
        var extra =
          (t.objectives || []).join(" ") + " " +
          (t.sections || []).map(function (sec) { return sec.h; }).join(" ") + " " +
          (t.flash || []).map(function (f) { return f[0]; }).join(" ");
        idx.push({
          type: "Lesson", icon: "📘", label: t.title, sub: s.title,
          text: norm(t.title + " " + (t.subject || "") + " " + extra),
          app: "folder-" + key
        });
      });
    });

    /* Grouping folders + CompTIA */
    (S.groups || []).forEach(function (g) {
      idx.push({
        type: "Folder", icon: g.icon || "📁", label: g.title, sub: "Folder",
        text: norm(g.title + " " + (g.desc || "")), app: "folder-" + g.key
      });
    });
    if (S.comptia) {
      idx.push({
        type: "Certifications", icon: S.comptia.icon || "📁", label: S.comptia.title, sub: "Certifications",
        text: norm(S.comptia.title + " " + (S.comptia.desc || "")), app: "folder-comptia"
      });
    }

    /* Graded courses — include objective titles/codes in the search text */
    Object.keys(CO).forEach(function (k) {
      var c = CO[k];
      var objs = (c.objectives || []).map(function (o) { return (o.title || "") + " " + (o.code || ""); }).join(" ");
      idx.push({
        type: "Course", icon: "🎓", label: c.title, sub: "Graded course",
        text: norm(c.title + " " + objs), app: "course", params: { course: k }
      });
    });

    INDEX = idx;
    return idx;
  }

  function search(q) {
    q = norm(q).trim();
    if (!q) return [];
    var terms = q.split(/\s+/);
    var out = [];
    buildIndex().forEach(function (e) {
      var label = norm(e.label);
      var score = 0, ok = true;
      for (var i = 0; i < terms.length; i++) {
        var tm = terms[i];
        if (label.indexOf(tm) === 0) score += 100;          /* label starts with term */
        else if (label.indexOf(tm) >= 0) score += 45;       /* label contains term */
        else if (e.text.indexOf(tm) >= 0) score += 12;      /* appears in content text */
        else { ok = false; break; }                         /* every term must match somewhere */
      }
      if (ok) {
        if (e.type === "Subject") score += 6;               /* light type weighting on ties */
        else if (e.type === "Course") score += 3;
        out.push({ e: e, score: score });
      }
    });
    out.sort(function (a, b) {
      return b.score - a.score || a.e.label.length - b.e.label.length;
    });
    return out.slice(0, 15).map(function (r) { return r.e; });
  }

  function init() {
    var input = document.getElementById("startSearchInput");
    var results = document.getElementById("startSearchResults");
    var menu = document.getElementById("startMenu");
    var startBtn = document.getElementById("startBtn");
    if (!input || !results || !menu) return;

    function render(list, q) {
      if (!list.length) {
        results.innerHTML = '<div class="start-search-empty">No matches for “' + esc(q) + '”.</div>';
        results._list = [];
        return;
      }
      results.innerHTML = list.map(function (e, i) {
        var line = (e.type === "Lesson") ? (e.sub + " · Lesson") : e.type;
        return '<button class="start-search-item" data-i="' + i + '" role="menuitem">' +
          '<span class="menu-icon">' + e.icon + '</span>' +
          '<span class="ss-main">' +
            '<span class="ss-label">' + esc(e.label) + '</span>' +
            '<span class="ss-sub">' + esc(line) + '</span>' +
          '</span></button>';
      }).join("");
      results._list = list;
    }

    function run() {
      var q = (input.value || "").trim();
      if (q) {
        menu.classList.add("searching");
        render(search(q), q);
      } else {
        menu.classList.remove("searching");
        results.innerHTML = "";
        results._list = [];
      }
    }

    function reset() {
      input.value = "";
      results.innerHTML = "";
      results._list = [];
      menu.classList.remove("searching");
    }

    input.addEventListener("input", run);
    input.addEventListener("click", function (e) { e.stopPropagation(); });
    /* keep typing in the menu from closing it (menu already stops propagation) */

    results.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".start-search-item") : null;
      if (!btn || !results._list) return;
      var item = results._list[+btn.getAttribute("data-i")];
      if (!item) return;
      menu.setAttribute("hidden", "");
      if (startBtn) { startBtn.classList.remove("active"); startBtn.setAttribute("aria-expanded", "false"); }
      reset();
      if (window.Desktop && Desktop.openWindow) Desktop.openWindow(item.app, item.params);
    });

    /* Reset search each time the Start button is tapped (open or close). */
    if (startBtn) startBtn.addEventListener("click", reset);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
