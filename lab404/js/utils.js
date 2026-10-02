/* utils.js — Shared utilities for A+ Study Hub */
(function (root) {
  "use strict";

  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeTitle(str) {
    return String(str || "").replace(/[<>"'&]/g, "");
  }

  function safeStorage(key, fallback) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return fallback !== undefined ? fallback : null;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* storage blocked or full — silently ignore */
    }
  }

  root.AplusUtils = { escHtml: escHtml, safeTitle: safeTitle, safeStorage: safeStorage, setStorage: setStorage };
})(window);
