/* data-manager.js — Backup / restore ALL hub progress across devices.
   R4-7: the hub keeps everything in localStorage under three namespaces, so a
   learner's progress is otherwise trapped on one device. Export dumps every key
   in those namespaces (mastery per course, goals, streak, writing drafts, notes,
   settings, legacy A+ checklists) to a JSON file; import restores the same.
   Prefix-based so new features are captured automatically. No accounts, no server. */
(function () {
  "use strict";

  /* Everything the hub writes lives under one of these. Prefix-matching means a
     new feature's key (e.g. lab404.focus) is backed up without editing this list. */
  var SAFE_PREFIXES = ["lab404.", "aplus", "netplus-", "secplus-", "linuxplus-",
    "cloudplus-", "serverplus-", "cysa-", "pentest-", "securityx-", "dataplus-", "study-"];

  function isSafe(key) {
    for (var i = 0; i < SAFE_PREFIXES.length; i++) {
      if (key.indexOf(SAFE_PREFIXES[i]) === 0) return true;
    }
    return false;
  }

  function collect() {
    var keys = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && isSafe(k)) keys.push(k);
      }
    } catch (e) {}
    return keys;
  }

  function exportData() {
    var payload = { version: 2, app: "lab404-study-hub", exported: new Date().toISOString(), data: {} };
    collect().forEach(function (key) {
      try { var v = localStorage.getItem(key); if (v !== null) payload.data[key] = v; } catch (e) {}
    });
    var json = JSON.stringify(payload, null, 2);
    var blob = new Blob([json], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "lab404-progress-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  function importData(file, onDone) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var parsed = JSON.parse(e.target.result);
        if (!parsed || !parsed.data || typeof parsed.data !== "object") {
          onDone({ ok: false, msg: "That doesn't look like a Lab404 backup file." });
          return;
        }
        var count = 0, skipped = 0;
        Object.keys(parsed.data).forEach(function (key) {
          if (!isSafe(key)) { skipped++; return; }   /* only restore known namespaces */
          try { localStorage.setItem(key, parsed.data[key]); count++; } catch (err) {}
        });
        onDone({ ok: true, count: count, skipped: skipped });
      } catch (err) {
        onDone({ ok: false, msg: "Could not read the file: " + err.message });
      }
    };
    reader.readAsText(file);
  }

  /* Grouped, human-readable view of what's stored — the raw keys (esp. the
     per-course lab404.mastery.* ones) aren't meaningful to a parent. */
  function summary() {
    var keys = collect(), totalBytes = 0, courses = 0, notes = 0;
    var has = {};
    keys.forEach(function (k) {
      try { totalBytes += new Blob([localStorage.getItem(k) || ""]).size; } catch (e) {}
      if (k.indexOf("lab404.mastery.") === 0) courses++;
      if (/(^|-)notes$/.test(k) || k === "general-notes") notes++;
      has[k] = true;
    });
    var groups = [
      { label: "Course progress & mastery", detail: courses + " course" + (courses === 1 ? "" : "s") + " with saved progress", present: courses > 0 },
      { label: "Daily activity & streak", detail: "practice counts and streak", present: !!(has["lab404.daily"] || has["lab404.answeredTotal"] || has["study-streak-count"]) },
      { label: "Writing drafts", detail: "saved writing practice", present: !!has["lab404.writing"] },
      { label: "Bookmarks & review", detail: "saved courses and missed questions", present: !!(has["lab404.bookmarks"] || has["lab404.missed"] || has["aplus-wrong"]) },
      { label: "Notes", detail: notes + " note file" + (notes === 1 ? "" : "s"), present: notes > 0 },
      { label: "Settings", detail: "grade, theme, framework, read-aloud", present: !!(has["lab404.myGrade"] || has["aplus-theme"] || has["lab404.stdFramework"] || has["lab404.raRate"]) },
      { label: "A+ / cert checklists", detail: "legacy CompTIA study data", present: !!(has["aplus-checklist-c1"] || has["aplus-checklist-c2"] || has["aplus-checklist-c3"]) }
    ];
    return { totalKeys: keys.length, totalBytes: totalBytes, groups: groups };
  }

  window.AplusData = {
    export: exportData,
    import: importData,
    summary: summary,
    collect: collect,
  };
})();
