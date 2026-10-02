/* data-manager.js — Import / export study session data */
(function () {
  "use strict";

  var STORAGE_KEYS = [
    /* A+ study data */
    "aplus-checklist-c1",
    "aplus-checklist-c2",
    "aplus-checklist-terms-c1",
    "aplus-checklist-terms-c2",
    /* Security+ study data (internal slot 3; Security+ has no cores) */
    "aplus-checklist-c3",
    "aplus-checklist-terms-c3",
    "aplus-wrong",
    "aplus-theme",
    /* General notepad (no cert context) */
    "general-notes",
    /* Per-cert notes */
    "aplus-notes",
    "netplus-notes",
    "secplus-notes",
    "linuxplus-notes",
    "cloudplus-notes",
    "serverplus-notes",
    "cysa-notes",
    "pentest-notes",
    "securityx-notes",
    "dataplus-notes",
  ];

  function exportData() {
    var payload = {
      version: 1,
      app: "aplus-study-hub",
      exported: new Date().toISOString(),
      data: {},
    };
    STORAGE_KEYS.forEach(function (key) {
      try {
        var val = localStorage.getItem(key);
        if (val !== null) payload.data[key] = val;
      } catch (e) {}
    });

    var json = JSON.stringify(payload, null, 2);
    var blob = new Blob([json], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "aplus-study-" + new Date().toISOString().slice(0, 10) + ".json";
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
        if (!parsed.data || typeof parsed.data !== "object") {
          onDone({ ok: false, msg: "Invalid file — missing data block." });
          return;
        }
        var count = 0;
        Object.keys(parsed.data).forEach(function (key) {
          /* Only restore known keys to avoid injecting arbitrary data */
          if (STORAGE_KEYS.indexOf(key) === -1) return;
          try {
            localStorage.setItem(key, parsed.data[key]);
            count++;
          } catch (err) {}
        });
        onDone({ ok: true, count: count });
      } catch (err) {
        onDone({ ok: false, msg: "Could not parse file: " + err.message });
      }
    };
    reader.readAsText(file);
  }

  function getStats() {
    var stats = {};
    STORAGE_KEYS.forEach(function (key) {
      try {
        var val = localStorage.getItem(key);
        if (val !== null) {
          var size = new Blob([val]).size;
          stats[key] = { present: true, bytes: size };
        } else {
          stats[key] = { present: false, bytes: 0 };
        }
      } catch (e) {
        stats[key] = { present: false, bytes: 0 };
      }
    });
    return stats;
  }

  window.AplusData = {
    export: exportData,
    import: importData,
    getStats: getStats,
    KEYS: STORAGE_KEYS,
  };
})();
