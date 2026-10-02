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

  /* Security+ has no cores: "core" 3 is just the internal slot the A+ loaders key on.
     The UI always labels it SECPLUS_LABEL. A+ "Both" (core 0) means Core 1 + Core 2 only. */
  var SECPLUS = 3;
  var SECPLUS_LABEL = "Security+ (SY0-701)";
  var SECPLUS_DOMAINS = {
    d1: "General Security Concepts",
    d2: "Threats & Vulnerabilities",
    d3: "Security Architecture",
    d4: "Security Operations",
    d5: "Program Management",
  };

  function inScope(itemCore, viewCore) {
    if (viewCore === 0) return itemCore === 1 || itemCore === 2;
    return itemCore === viewCore;
  }

  root.AplusUtils = {
    escHtml: escHtml, safeTitle: safeTitle, safeStorage: safeStorage, setStorage: setStorage,
    SECPLUS: SECPLUS, SECPLUS_LABEL: SECPLUS_LABEL, SECPLUS_DOMAINS: SECPLUS_DOMAINS, inScope: inScope,
  };
})(window);
