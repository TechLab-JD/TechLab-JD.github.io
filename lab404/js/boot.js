/* boot.js — Lab404 OS boot sequence */
(function () {
  "use strict";

  var LINES = [
    { text: "LAB404 STUDY OS  v2.0.0",                                     delay: 0,    hi: true },
    { text: "Copyright (c) 2026 Lab404. All rights reserved.",             delay: 160 },
    { text: "",                                                              delay: 260 },
    { text: "BIOS integrity check.......................... PASS",           delay: 380 },
    { text: "Initializing memory banks..................... OK",             delay: 510 },
    { text: "Loading chapter modules....................... OK",             delay: 630 },
    { text: "Mounting study database....................... OK",             delay: 750 },
    { text: "Calibrating flashcard engine.................. OK",             delay: 860 },
    { text: "Verifying practice question sets.............. OK",            delay: 970 },
    { text: "Starting XP tracking engine................... OK",            delay: 1070 },
    { text: "",                                                              delay: 1150 },
    { text: "CompTIA certification hubs registered:",                       delay: 1220 },
    { text: "  [A+]  [Net+]  [Sec+]  [Linux+]  [Cloud+]  [Server+]",      delay: 1320 },
    { text: "  [CySA+]  [PenTest+]  [SecurityX]  [Data+]",                delay: 1420 },
    { text: "",                                                              delay: 1510 },
    { text: "ALL SYSTEMS NOMINAL",                                          delay: 1580, hi: true },
    { text: "Launching Study Zone...",                                      delay: 1750 },
  ];

  var FADE_START = 2150;
  var FADE_DONE  = 2750;

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
      }, item.delay);
    });

    setTimeout(function () { screen.classList.add("boot-fade"); }, FADE_START);
    setTimeout(function () { screen.style.display = "none"; },    FADE_DONE);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
