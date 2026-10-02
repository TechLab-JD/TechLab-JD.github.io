/* glossary-loader.js — Searchable glossary for A+ Study Hub */
(function () {
  "use strict";

  var state = {
    allTerms: [],
    filtered: [],
    core: 0,      // 0 = both A+ cores, 1 = Core 1, 2 = Core 2, 3 = Security+ (no cores)
    locked: false, // true when opened from a cert folder: no core switching
    domain: "all",
    search: "",
    debounceTimer: null,
  };

  var DOMAIN_LABELS = {
    hardware: "Hardware",
    networking: "Networking",
    mobile: "Mobile Devices",
    cloud: "Cloud & Virt",
    troubleshooting: "Troubleshooting",
    os: "Operating Systems",
    security: "Security",
    operational: "Operational",
  };

  var DOMAINS = Object.keys(DOMAIN_LABELS);

  function escHtml(str) {
    if (window.AplusUtils) return window.AplusUtils.escHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function isSec() { return state.core === 3; }

  function inScope(c) {
    return state.core === 0 ? (c === 1 || c === 2) : c === state.core;
  }

  function secDomains() {
    return (window.AplusUtils && window.AplusUtils.SECPLUS_DOMAINS) || {};
  }

  function domainLabel(d) {
    if (isSec()) return secDomains()[d] || d;
    return DOMAIN_LABELS[d] || (d ? d.charAt(0).toUpperCase() + d.slice(1) : "");
  }

  /* ── Filtering ── */

  function applyFilters() {
    var search = state.search.toLowerCase().trim();
    state.filtered = state.allTerms.filter(function(t) {
      if (!inScope(t.core)) return false;
      if (state.domain !== "all" && t.domain !== state.domain) return false;
      if (search) {
        var inTerm = t.term.toLowerCase().indexOf(search) >= 0;
        var inDef = t.definition.toLowerCase().indexOf(search) >= 0;
        if (!inTerm && !inDef) return false;
      }
      return true;
    });
  }

  /* ── Render ── */

  function renderShell(container) {
    container.innerHTML =
      '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;max-width:960px;">' +

        '<div class="section-header">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb">' +
            '<a href="index.html">Home</a>' +
            '<span class="breadcrumb-sep">›</span>' +
            '<span>Glossary</span>' +
          '</nav>' +
          '<span class="section-label">Reference</span>' +
          '<h1 style="font-size:clamp(1.5rem,3.5vw,2.25rem);margin-bottom:0.5rem;">' + (isSec() ? "Security+ Glossary" : "A+ Glossary") + '</h1>' +
          '<p class="text-muted text-sm" id="termCount">Loading terms...</p>' +
        '</div>' +

        /* Search */
        '<div class="glossary-search-wrap">' +
          '<svg style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);pointer-events:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
          '<input class="glossary-search" id="glossarySearch" type="search" placeholder="Search terms and definitions..." autocomplete="off" aria-label="Search glossary">' +
        '</div>' +

        /* Core + Domain chips */
        '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;" id="coreChips">' +
          (state.locked && isSec()
            ? '<span class="filter-btn active" style="cursor:default;">Security+ (SY0-701)</span>'
            : '<button class="filter-btn' + (state.core === 0 ? " active" : "") + '" data-core="0">Both</button>' +
              '<button class="filter-btn' + (state.core === 1 ? " active" : "") + '" data-core="1">Core 1</button>' +
              '<button class="filter-btn' + (state.core === 2 ? " active" : "") + '" data-core="2">Core 2</button>') +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;" id="domainChips">' +
          '<button class="filter-btn' + (state.domain === "all" ? " active" : "") + '" data-domain="all">All</button>' +
          (isSec() ? Object.keys(secDomains()) : DOMAINS).map(function(d) {
            return '<button class="filter-btn' + (state.domain === d ? " active" : "") + '" data-domain="' + d + '">' + domainLabel(d) + '</button>';
          }).join("") +
        '</div>' +

        /* Alpha jump bar */
        '<div class="glossary-alpha-bar" id="alphaBar">' +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function(l) {
            return '<a href="#alpha-' + l + '" title="Jump to ' + l + '">' + l + '</a>';
          }).join("") +
        '</div>' +

        /* Terms list */
        '<div id="glossaryTerms"></div>' +

      '</div>';

    /* Wire search */
    var searchInput = container.querySelector("#glossarySearch");
    if (searchInput) {
      searchInput.value = state.search;
      searchInput.addEventListener("input", function() {
        clearTimeout(state.debounceTimer);
        var val = this.value;
        state.debounceTimer = setTimeout(function() {
          state.search = val;
          applyFilters();
          renderTerms(container);
        }, 100);
      });
    }

    /* Wire core chips */
    container.querySelectorAll("[data-core]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.core = parseInt(this.dataset.core, 10);
        applyFilters();
        renderShell(container);
        renderTerms(container);
      });
    });

    /* Wire domain chips */
    container.querySelectorAll("[data-domain]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.domain = this.dataset.domain;
        applyFilters();
        renderShell(container);
        renderTerms(container);
      });
    });
  }

  function renderTerms(container) {
    var termCount = container.querySelector("#termCount");
    if (termCount) {
      var inView = state.allTerms.filter(function(t) { return inScope(t.core); }).length;
      termCount.textContent = "Showing " + state.filtered.length + " of " + inView + " terms";
    }

    var listEl = container.querySelector("#glossaryTerms");
    if (!listEl) return;

    if (state.filtered.length === 0) {
      listEl.innerHTML = '<p class="text-muted" style="padding:2rem 0;">No terms match your filters.</p>';
      return;
    }

    /* Group by first letter */
    var groups = {};
    state.filtered.forEach(function(t) {
      var letter = t.term.charAt(0).toUpperCase();
      if (!/[A-Z]/.test(letter)) letter = "#";
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(t);
    });

    var letters = Object.keys(groups).sort();
    var html = letters.map(function(letter) {
      var entries = groups[letter].map(function(t) {
        var dLabel = domainLabel(t.domain);
        var dColor = domainColor(t.domain);
        return '<div class="glossary-entry">' +
          '<div class="glossary-term">' + escHtml(t.term) + '</div>' +
          '<div class="glossary-def">' + escHtml(t.definition) + '</div>' +
          '<div style="display:flex;flex-direction:column;gap:0.3rem;align-items:flex-end;min-width:100px;">' +
            (dLabel ? '<span class="badge" style="font-size:0.65rem;' + dColor + '">' + escHtml(dLabel) + '</span>' : '') +
            (t.objective ? '<span class="badge badge-objective" style="font-size:0.65rem;">' + escHtml(t.objective) + '</span>' : '') +
          '</div>' +
        '</div>';
      }).join("");

      return '<div class="glossary-group" id="alpha-' + letter + '">' +
        '<div class="glossary-letter">' + letter + '</div>' +
        entries +
      '</div>';
    }).join("");

    listEl.innerHTML = html;
  }

  function domainColor(d) {
    if (isSec()) return "background:var(--accent-dim);color:var(--accent);";
    var colors = {
      hardware: "background:var(--accent-dim);color:var(--accent);",
      networking: "background:var(--accent2-dim);color:var(--accent2);",
      mobile: "background:rgba(0,200,255,0.12);color:#00c8ff;",
      cloud: "background:rgba(100,220,100,0.12);color:#64dc64;",
      troubleshooting: "background:rgba(255,140,0,0.12);color:#ff8c00;",
      os: "background:var(--accent3-dim);color:var(--accent3);",
      security: "background:rgba(255,200,0,0.12);color:var(--warning);",
      operational: "background:var(--accent2-dim);color:var(--accent2);",
    };
    return colors[d] || "background:var(--surface-elevated);color:var(--text-muted);";
  }

  function init(rootEl, opts) {
    var container = rootEl || document.getElementById("glossary-root");
    if (!container) return;
    state.core = (opts && opts.core) || 0;
    state.locked = !!(opts && opts.core);
    state.domain = "all";

    renderShell(container);
    var listEl = container.querySelector("#glossaryTerms");
    if (listEl) listEl.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading glossary...</p></div>';

    fetch("data/glossary.json")
      .then(function(r) { return r.ok ? r.json() : []; })
      .catch(function() { return []; })
      .then(function(data) {
        state.allTerms = data;
        applyFilters();
        renderShell(container);
        renderTerms(container);
      });
  }

  /* Expose for desktop window manager */
  window.GlossaryLoader = { init: init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { if (!document.getElementById("windows-layer")) init(); });
  } else {
    if (!document.getElementById("windows-layer")) init();
  }
})();
