/* utils.js — Shared utilities for the Lab404 Study Hub */
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

  /* Network+ (N10-009): internal slot 4, same single-exam-cert treatment as Security+.
     The UI always labels it NETPLUS_LABEL. */
  var NETPLUS = 4;
  var NETPLUS_LABEL = "Network+ (N10-009)";
  var NETPLUS_DOMAINS = {
    d1: "Networking Concepts",
    d2: "Network Implementation",
    d3: "Network Operations",
    d4: "Network Security",
    d5: "Network Troubleshooting",
  };

  /* Cert helpers: core 3 = Security+, core 4 = Network+. Both are single-exam certs with d1–d5 domains. */
  function isCert(core) { return core === SECPLUS || core === NETPLUS; }
  function certLabel(core) { return core === SECPLUS ? SECPLUS_LABEL : core === NETPLUS ? NETPLUS_LABEL : ""; }
  function certShort(core) { return core === SECPLUS ? "Security+" : core === NETPLUS ? "Network+" : ""; }
  function certDomains(core) { return core === SECPLUS ? SECPLUS_DOMAINS : core === NETPLUS ? NETPLUS_DOMAINS : {}; }

  function inScope(itemCore, viewCore) {
    if (viewCore === 0) return itemCore === 1 || itemCore === 2;
    return itemCore === viewCore;
  }

  root.AplusUtils = {
    escHtml: escHtml, safeTitle: safeTitle, safeStorage: safeStorage, setStorage: setStorage,
    SECPLUS: SECPLUS, SECPLUS_LABEL: SECPLUS_LABEL, SECPLUS_DOMAINS: SECPLUS_DOMAINS,
    NETPLUS: NETPLUS, NETPLUS_LABEL: NETPLUS_LABEL, NETPLUS_DOMAINS: NETPLUS_DOMAINS,
    isCert: isCert, certLabel: certLabel, certShort: certShort, certDomains: certDomains,
    inScope: inScope,
  };
})(window);
