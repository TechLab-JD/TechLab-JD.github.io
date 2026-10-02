/* theme.js — Theme toggle + localStorage persistence */
(function () {
  "use strict";

  var STORAGE_KEY = "aplus-theme";
  var DARK = "dark";
  var LIGHT = "light";

  function getTheme() {
    var stored = (window.AplusUtils ? window.AplusUtils.safeStorage(STORAGE_KEY) : null);
    if (!stored) {
      try { stored = localStorage.getItem(STORAGE_KEY); } catch(e) {}
    }
    if (stored === LIGHT || stored === DARK) return stored;
    return DARK;
  }

  function saveTheme(theme) {
    if (window.AplusUtils) {
      window.AplusUtils.setStorage(STORAGE_KEY, theme);
    } else {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch(e) {}
    }
  }

  function applyTheme(theme) {
    var link = document.getElementById("theme-stylesheet");
    if (link) {
      link.href = theme === LIGHT ? "css/light.css" : "css/dark.css";
    }
    document.documentElement.setAttribute("data-theme", theme);

    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute("aria-label", theme === DARK ? "Switch to light theme" : "Switch to dark theme");
      var iconDark = btn.querySelector(".theme-icon-dark");
      var iconLight = btn.querySelector(".theme-icon-light");
      if (iconDark) iconDark.style.display = theme === DARK ? "none" : "";
      if (iconLight) iconLight.style.display = theme === LIGHT ? "none" : "";
    });
  }

  function toggleTheme() {
    var current = getTheme();
    var next = current === DARK ? LIGHT : DARK;
    saveTheme(next);
    applyTheme(next);
  }

  function init() {
    applyTheme(getTheme());
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  }

  /* Apply immediately before paint to prevent flash — called inline by theme-init.js */
  window._aplusApplyTheme = function() {
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch(e) {}
    var theme = (stored === LIGHT || stored === DARK) ? stored : DARK;
    var link = document.getElementById("theme-stylesheet");
    if (link) link.href = theme === LIGHT ? "css/light.css" : "css/dark.css";
    document.documentElement.setAttribute("data-theme", theme);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
