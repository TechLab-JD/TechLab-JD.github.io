/* boot.js — Lab404 OS boot sequence */
(function () {
  "use strict";

  /* Short display names for the boot banner, keyed to subjects-data.js */
  var SHORT = { math: "Math", science: "Science", english: "English", social: "Social Studies",
                coding: "Coding", languages: "Languages", lifeskills: "Life Skills",
                medicine: "Medicine", survival: "Survival", cooking: "Cooking", arts: "Arts",
                mind: "Psychology", fitness: "Fitness", business: "Business", repair: "Repair" };

  function subjectTagRows() {
    var subs = [];
    var S = window.LAB404_SUBJECTS;
    if (S) {
      if (S.comptia) subs.push(S.comptia.short || "CompTIA");
      (S.academic || []).forEach(function (s) { subs.push(s.short || SHORT[s.key] || s.title); });
    }
    if (!subs.length) subs = ["CompTIA"];
    var rows = [];
    for (var i = 0; i < subs.length; i += 4) {
      rows.push("  " + subs.slice(i, i + 4).map(function (t) { return "[" + t + "]"; }).join("  "));
    }
    return rows;
  }

  var LINES = [
    { text: "LAB404 STUDY OS  v2.1.0",                                     delay: 0,    hi: true },
    { text: "Copyright (c) 2026 Lab404. All rights reserved.",             delay: 160 },
    { text: "",                                                              delay: 260 },
    { text: "BIOS integrity check.......................... PASS",           delay: 380 },
    { text: "Initializing memory banks..................... OK",             delay: 510 },
    { text: "Loading subject modules....................... OK",             delay: 630 },
    { text: "Mounting study database....................... OK",             delay: 750 },
    { text: "Calibrating flashcard engine.................. OK",             delay: 860 },
    { text: "Verifying practice question sets.............. OK",            delay: 970 },
    { text: "Starting XP tracking engine................... OK",            delay: 1070 },
    { text: "",                                                              delay: 1150 },
    { text: "Study subjects registered:",                                   delay: 1220 },
  ];

  /* Dynamically append one bracketed row per 4 subjects, then the tail. */
  var _tagRows = subjectTagRows();
  _tagRows.forEach(function (r, i) { LINES.push({ text: r, delay: 1320 + i * 100 }); });
  var _tail = 1320 + _tagRows.length * 100;
  LINES.push({ text: "",                      delay: _tail + 60 });
  LINES.push({ text: "ALL SYSTEMS NOMINAL",   delay: _tail + 130, hi: true });
  LINES.push({ text: "Launching Study Hub...", delay: _tail + 300 });

  /* Snappy, index-based timing so the boot screen stays short no matter how many subjects. */
  var STEP = 34;                                /* ms between lines */
  var FADE_START = LINES.length * STEP + 200;   /* begin fade right after the last line */
  var FADE_DONE  = FADE_START + 300;

  function init() {
    var screen = document.getElementById("boot-screen");
    if (!screen) return;
    var log   = document.getElementById("bootLog");
    var bar   = document.getElementById("bootBar");
    if (!log || !bar) return;

    var total = LINES.length;

    LINES.forEach(function (item, i) {
      setTimeout(function () {
        if (item.text === "") {
          log.appendChild(document.createElement("br"));
        } else {
          var line = document.createElement("div");
          line.className = "boot-line" + (item.hi ? " boot-hi" : "");
          line.textContent = item.text;
          log.appendChild(line);
          log.scrollTop = log.scrollHeight;
        }
        bar.style.width = Math.round((i + 1) / total * 100) + "%";
      }, i * STEP);
    });

    setTimeout(function () { screen.classList.add("boot-fade"); }, FADE_START);
    setTimeout(function () { screen.style.display = "none"; },    FADE_DONE);

    /* Click/tap anywhere to skip straight to the desktop. */
    screen.style.cursor = "pointer";
    screen.title = "Click to skip";
    screen.addEventListener("click", function () {
      screen.classList.add("boot-fade");
      setTimeout(function () { screen.style.display = "none"; }, 140);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
