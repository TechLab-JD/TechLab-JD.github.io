/* theme-init.js — Flash prevention: apply theme before paint.
   Must be loaded synchronously in <head> BEFORE the stylesheet link. */
(function () {
  var STORAGE_KEY = "aplus-theme";
  var theme = "dark";
  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") theme = stored;
  } catch (e) { /* storage blocked */ }
  var link = document.getElementById("theme-stylesheet");
  if (link) link.href = theme === "light" ? "css/light.css" : "css/dark.css";
  document.documentElement.setAttribute("data-theme", theme);
})();
