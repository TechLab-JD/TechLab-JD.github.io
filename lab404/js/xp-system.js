/* xp-system.js — XP, level, and study streak */
(function () {
  "use strict";

  /* ── XP from localStorage checklist data ── */
  function calcXp() {
    var xp = 0;

    /* Chapter checklists: "known" = 10 XP, "review" = 3 XP */
    ["aplus-checklist-c1", "aplus-checklist-c2"].forEach(function (k) {
      try {
        var d = JSON.parse(localStorage.getItem(k) || "{}");
        Object.keys(d).forEach(function (id) {
          if (d[id] === "known")   xp += 10;
          else if (d[id] === "review") xp +=  3;
        });
      } catch (e) {}
    });

    /* Term checklists: "known" = 5 XP, "review" = 1 XP */
    ["aplus-checklist-terms-c1", "aplus-checklist-terms-c2"].forEach(function (k) {
      try {
        var d = JSON.parse(localStorage.getItem(k) || "{}");
        Object.keys(d).forEach(function (id) {
          if (d[id] === "known")       xp += 5;
          else if (d[id] === "review") xp += 1;
        });
      } catch (e) {}
    });

    /* Practice questions attempted (missed log) */
    try {
      var wrong = JSON.parse(localStorage.getItem("aplus-wrong") || "{}");
      xp += Math.min(Object.keys(wrong).length * 2, 200); /* cap at 200 from this source */
    } catch (e) {}

    return xp;
  }

  /* ── XP → Level ── */
  function xpToLevel(xp) {
    /* Threshold grows: 100, 250, 450, 700, 1000, 1350 … (+150 per level after 1) */
    var level = 1, threshold = 100, step = 150;
    while (xp >= threshold) {
      level++;
      threshold += step;
      step += 50;
    }
    return level;
  }

  function levelTag(level) {
    if (level >= 20) return "MASTER";
    if (level >= 15) return "EXPERT";
    if (level >= 10) return "ADV " + level;
    return "LV." + level;
  }

  /* ── Streak ── */
  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function calcStreak(hasData) {
    if (!hasData) return parseInt(localStorage.getItem("study-streak-count") || "0", 10);

    var today = todayStr();
    var last  = localStorage.getItem("study-streak-date") || "";
    var count = parseInt(localStorage.getItem("study-streak-count") || "0", 10);

    if (last === today) return count; /* already recorded today */

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var yStr = yesterday.toISOString().slice(0, 10);

    count = (last === yStr) ? count + 1 : 1; /* continue or restart */

    try {
      localStorage.setItem("study-streak-date",  today);
      localStorage.setItem("study-streak-count", String(count));
    } catch (e) {}

    return count;
  }

  /* ── Render tray ── */
  function refresh() {
    var xpEl     = document.getElementById("trayXP");
    var streakEl = document.getElementById("trayStreak");
    if (!xpEl && !streakEl) return;

    var xp     = calcXp();
    var level  = xpToLevel(xp);
    var streak = calcStreak(xp > 0);

    if (xpEl) {
      xpEl.textContent = levelTag(level);
      xpEl.title = xp + " XP  \u00b7  Level " + level;
      xpEl.className = "tray-xp" + (level >= 10 ? " tray-xp-glow" : "");
    }
    if (streakEl) {
      if (streak > 0) {
        streakEl.textContent = "\uD83D\uDD25 " + streak;
        streakEl.title = streak + "-day study streak";
        streakEl.style.display = "";
      } else {
        streakEl.style.display = "none";
      }
    }
  }

  /* Init */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refresh);
  } else {
    refresh();
  }
  setInterval(refresh, 30000);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) refresh();
  });

  window.refreshXP = refresh;
  window.XPSystem  = { getXP: calcXp };
})();
