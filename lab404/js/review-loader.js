/* review-loader.js v5 — Review checklist + Flashcards with PDF export */
(function () {
  "use strict";

  var TOTAL_CHAPTERS = { 1: 25, 2: 20 };

  var DOMAIN_LABELS = {
    hardware: "Hardware",
    networking: "Networking",
    mobile: "Mobile Devices",
    cloud: "Cloud & Virtualization",
    troubleshooting: "Troubleshooting",
    os: "Operating Systems",
    security: "Security",
    operational: "Operational Procedures",
  };

  var DOMAIN_WEIGHTS = {
    hardware: "27%", networking: "20%", mobile: "13%", cloud: "11%",
    troubleshooting: "29%", os: "28%", security: "27%", operational: "19%",
  };

  var state = {
    tab: "chapters",   // "chapters" | "terms" | "glossary" | "flashcards"
    core: 1,
    chapters: [],
    glossaryTerms: [],
    collapsed: {},
    chCollapsed: {},
    domainCollapsed: {},
    glossarySearch: "",
    glossaryDomain: "all",
    glossaryDebounce: null,
    /* Flashcard sub-state */
    fc: {
      mode: "concept",  // "concept" | "missed" | "terms" | "acronyms"
      core: 1,          // 1 | 2 | 0 (both)
      domain: "all",
      cards: [],
      queue: [],
      queueIdx: 0,
      known: 0,
      flipped: false,
      chapterCache: {},
      glossaryCache: null,
    },
  };

  /* ── Utility ── */

  function escHtml(str) {
    if (window.AplusUtils) return window.AplusUtils.escHtml(str);
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function fcDomainLabel(d) {
    return DOMAIN_LABELS[d] || (d ? d.charAt(0).toUpperCase() + d.slice(1) : "");
  }

  function domainColor(d) {
    var c = {
      hardware: "background:var(--accent-dim);color:var(--accent);",
      networking: "background:var(--accent2-dim);color:var(--accent2);",
      mobile: "background:rgba(0,200,255,0.12);color:#00c8ff;",
      cloud: "background:rgba(100,220,100,0.12);color:#64dc64;",
      troubleshooting: "background:rgba(255,140,0,0.12);color:#ff8c00;",
      os: "background:var(--accent3-dim);color:var(--accent3);",
      security: "background:rgba(255,200,0,0.12);color:var(--warning);",
      operational: "background:var(--accent2-dim);color:var(--accent2);",
    };
    return c[d] || "background:var(--surface-elevated);color:var(--text-muted);";
  }

  /* ── Checklist storage ── */

  function storageKey() { return "aplus-checklist-c" + state.core; }
  function termStorageKey() { return "aplus-checklist-terms-c" + state.core; }

  function getItemState(chNum, sectionIdx) {
    var store = JSON.parse(localStorage.getItem(storageKey()) || "{}");
    return store["ch" + chNum + "-s" + sectionIdx] || null;
  }
  function setItemState(chNum, sectionIdx, val) {
    var key = "ch" + chNum + "-s" + sectionIdx;
    var store = JSON.parse(localStorage.getItem(storageKey()) || "{}");
    if (val) { store[key] = val; } else { delete store[key]; }
    localStorage.setItem(storageKey(), JSON.stringify(store));
  }
  function getTermState(termKey) {
    var store = JSON.parse(localStorage.getItem(termStorageKey()) || "{}");
    return store[termKey] || null;
  }
  function setTermState(termKey, val) {
    var store = JSON.parse(localStorage.getItem(termStorageKey()) || "{}");
    if (val) { store[termKey] = val; } else { delete store[termKey]; }
    localStorage.setItem(termStorageKey(), JSON.stringify(store));
  }
  function clearAll() {
    if (state.tab === "chapters") { localStorage.removeItem(storageKey()); }
    else if (state.tab === "terms") { localStorage.removeItem(termStorageKey()); }
  }

  /* ── Data loading ── */

  function loadChapters() {
    var total = TOTAL_CHAPTERS[state.core] || 25;
    var promises = [];
    for (var i = 1; i <= total; i++) {
      (function(num) {
        promises.push(
          fetch("data/core" + state.core + "/ch" + String(num).padStart(2, "0") + ".json")
            .then(function(r) { return r.ok ? r.json() : null; })
            .catch(function() { return null; })
        );
      })(i);
    }
    return Promise.all(promises).then(function(results) {
      state.chapters = results.filter(Boolean);
    });
  }

  function loadGlossary() {
    if (state.glossaryTerms.length) return Promise.resolve();
    return fetch("data/glossary.json")
      .then(function(r) { return r.ok ? r.json() : []; })
      .catch(function() { return []; })
      .then(function(data) { state.glossaryTerms = data; });
  }

  /* ── Flashcard data loading ── */

  function fcFetchCore(core) {
    if (state.fc.chapterCache[core]) return Promise.resolve(state.fc.chapterCache[core]);
    var total = TOTAL_CHAPTERS[core] || 25;
    var promises = [];
    for (var i = 1; i <= total; i++) {
      promises.push(
        fetch("data/core" + core + "/ch" + String(i).padStart(2, "0") + ".json")
          .then(function(r) { return r.ok ? r.json() : null; })
          .catch(function() { return null; })
      );
    }
    return Promise.all(promises).then(function(results) {
      var chapters = results.filter(Boolean);
      state.fc.chapterCache[core] = chapters;
      return chapters;
    });
  }

  function fcFetchChapters() {
    if (state.fc.core === 0) {
      return Promise.all([fcFetchCore(1), fcFetchCore(2)])
        .then(function(both) { return both[0].concat(both[1]); });
    }
    return fcFetchCore(state.fc.core);
  }

  function fcFetchGlossary() {
    if (state.fc.glossaryCache) return Promise.resolve(state.fc.glossaryCache);
    /* Reuse already-loaded glossary if available */
    if (state.glossaryTerms.length) {
      state.fc.glossaryCache = state.glossaryTerms;
      return Promise.resolve(state.fc.glossaryCache);
    }
    return fetch("data/glossary.json")
      .then(function(r) { return r.ok ? r.json() : []; })
      .catch(function() { return []; })
      .then(function(data) {
        state.fc.glossaryCache = data;
        if (!state.glossaryTerms.length) state.glossaryTerms = data;
        return data;
      });
  }

  /* ── Flashcard card builders ── */

  function fcIsAcronym(term) {
    var first = term.split(/[\s\(]/)[0];
    return /^[A-Z][A-Z0-9\/\-\.]{1,}$/.test(first);
  }

  function fcBuildConceptCards(chapters) {
    var cards = [];
    chapters.forEach(function(ch) {
      (ch.concept_cards || []).forEach(function(c) {
        cards.push({
          front: escHtml(c.concept || ""),
          frontSub: escHtml(c.hook || ""),
          back: escHtml(c.summary || c.hook || ""),
          backSub: "",
          domain: ch.domain || "",
          domainLabel: fcDomainLabel(ch.domain),
          badge: "Ch " + ch.chapter,
        });
      });
    });
    return cards;
  }

  function fcBuildMissedCards() {
    var raw = JSON.parse(localStorage.getItem("aplus-wrong") || "[]");
    if (state.fc.core !== 0) {
      raw = raw.filter(function(q) { return q.core === state.fc.core; });
    }
    return raw.map(function(q) {
      var correctText = q.options && q.options[q.answer] ? q.options[q.answer] : "";
      return {
        front: escHtml(q.q || ""),
        frontSub: "",
        back: escHtml(correctText),
        backSub: escHtml(q.explanation || ""),
        domain: "",
        domainLabel: "Missed Question",
        badge: q.objective ? "Obj " + q.objective : "Ch " + (q.chapter || ""),
      };
    });
  }

  function fcBuildTermCards(terms) {
    return terms
      .filter(function(t) {
        if (state.fc.core !== 0 && t.core !== state.fc.core) return false;
        if (state.fc.domain !== "all" && t.domain !== state.fc.domain) return false;
        return true;
      })
      .map(function(t) {
        return {
          front: escHtml(t.term || ""),
          frontSub: "",
          back: escHtml(t.definition || ""),
          backSub: "",
          domain: t.domain || "",
          domainLabel: fcDomainLabel(t.domain),
          badge: t.objective ? "Obj " + t.objective : "",
        };
      });
  }

  function fcBuildAcronymCards(terms) {
    return terms
      .filter(function(t) {
        if (state.fc.core !== 0 && t.core !== state.fc.core) return false;
        return fcIsAcronym(t.term);
      })
      .map(function(t) {
        return {
          front: escHtml(t.term || ""),
          frontSub: "",
          back: escHtml(t.definition || ""),
          backSub: "",
          domain: t.domain || "",
          domainLabel: fcDomainLabel(t.domain),
          badge: t.objective ? "Obj " + t.objective : "",
        };
      });
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* ── Domain grouping (checklist) ── */

  function groupByDomain(chapters) {
    var domains = {};
    chapters.forEach(function(ch) {
      var d = ch.domain || "other";
      if (!domains[d]) domains[d] = [];
      domains[d].push(ch);
    });
    return domains;
  }

  function groupTermsByDomain(terms) {
    var domains = {};
    terms.filter(function(t) { return state.core === 0 || t.core === state.core; })
      .forEach(function(t) {
        var d = t.domain || "other";
        if (!domains[d]) domains[d] = [];
        domains[d].push(t);
      });
    return domains;
  }

  function domainProgress(domain, chapters) {
    var total = 0, gotIt = 0, focus = 0;
    chapters.forEach(function(ch) {
      (ch.sections || []).forEach(function(sec, si) {
        total++;
        var s = getItemState(ch.chapter, si);
        if (s === "got-it") gotIt++; else if (s === "focus") focus++;
      });
    });
    return { total: total, gotIt: gotIt, focus: focus };
  }

  function termDomainProgress(terms) {
    var total = terms.length, gotIt = 0, focus = 0;
    terms.forEach(function(t) {
      var s = getTermState(t.term.toLowerCase());
      if (s === "got-it") gotIt++; else if (s === "focus") focus++;
    });
    return { total: total, gotIt: gotIt, focus: focus };
  }

  /* ── Render shell ── */

  var DOMAINS_LIST = ["hardware","networking","mobile","cloud","troubleshooting","os","security","operational"];

  function renderRoot(container) {
    var isGlossary = state.tab === "glossary";
    var isFlashcards = state.tab === "flashcards";

    /* Action buttons label */
    var clearLabel = "Clear All";
    var showExport = !isGlossary;

    container.innerHTML =
      '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;max-width:900px;">' +

        '<div class="section-header">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb">' +
            '<a href="index.html">Home</a><span class="breadcrumb-sep">›</span><span>Review</span>' +
          '</nav>' +
          '<span class="section-label">Study Tool</span>' +
          '<h1 style="font-size:clamp(1.5rem,3.5vw,2.25rem);margin-bottom:0.5rem;">Review &amp; Study</h1>' +
          '<p class="text-muted text-sm">Mark sections as Got It or Focus, study with flashcards, and export a targeted PDF study guide.</p>' +
        '</div>' +

        /* Top bar: core + mode tabs + actions */
        '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1rem;">' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">' +
            /* Core tabs — show Both only for flashcards */
            (isFlashcards
              ? '<div class="core-tab-bar" style="margin:0;" id="coreTabs">' +
                  '<button class="core-tab' + (state.fc.core === 1 ? " active" : "") + '" data-fccore="1">Core 1</button>' +
                  '<button class="core-tab' + (state.fc.core === 2 ? " active" : "") + '" data-fccore="2">Core 2</button>' +
                  '<button class="core-tab' + (state.fc.core === 0 ? " active" : "") + '" data-fccore="0">Both</button>' +
                '</div>'
              : '<div class="core-tab-bar" style="margin:0;" id="coreTabs">' +
                  '<button class="core-tab' + (state.core === 1 ? " active" : "") + '" data-core="1">Core 1</button>' +
                  '<button class="core-tab' + (state.core === 2 ? " active" : "") + '" data-core="2">Core 2</button>' +
                '</div>'
            ) +
            /* Mode tabs */
            '<div class="core-tab-bar" style="margin:0;" id="modeTabs">' +
              '<button class="core-tab' + (state.tab === "chapters"   ? " active" : "") + '" data-tab="chapters">Chapters</button>' +
              '<button class="core-tab' + (state.tab === "terms"      ? " active" : "") + '" data-tab="terms">Key Terms</button>' +
              '<button class="core-tab' + (state.tab === "glossary"   ? " active" : "") + '" data-tab="glossary">Glossary</button>' +
              '<button class="core-tab' + (state.tab === "flashcards" ? " active" : "") + '" data-tab="flashcards">&#9654; Flashcards</button>' +
            '</div>' +
          '</div>' +
          /* Action buttons */
          '<div style="display:flex;gap:0.5rem;">' +
            (!isGlossary && !isFlashcards
              ? '<button class="btn btn-secondary btn-sm" id="clearAllBtn">' + clearLabel + '</button>'
              : '') +
            (isFlashcards
              ? '<button class="btn btn-secondary btn-sm" id="fcResetBtn">&#8635; Reset</button>'
              : '') +
            '<button class="btn btn-primary btn-sm" id="exportPdfBtn">&#128438; Export Study Pack</button>' +
          '</div>' +
        '</div>' +

        '<div id="checklistBody">' +
          '<div class="loading-state"><div class="spinner"></div><p>Loading...</p></div>' +
        '</div>' +

      '</div>';

    /* Wire core tabs — checklist mode */
    container.querySelectorAll("[data-core]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.core = parseInt(this.dataset.core, 10);
        state.chapters = [];
        renderRoot(container);
        reloadAndRender(container);
      });
    });

    /* Wire core tabs — flashcard mode */
    container.querySelectorAll("[data-fccore]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.fc.core = parseInt(this.dataset.fccore, 10);
        state.fc.flipped = false;
        renderRoot(container);
        reloadAndRender(container);
      });
    });

    /* Wire mode tabs */
    container.querySelectorAll("[data-tab]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.tab = this.dataset.tab;
        renderRoot(container);
        reloadAndRender(container);
      });
    });

    /* Wire clear all */
    var clearBtn = container.querySelector("#clearAllBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", function() {
        var label = state.tab === "terms" ? "Key Terms" : "Chapters";
        if (confirm("Clear all Got It and Focus marks for " + label + " (Core " + state.core + ")?")) {
          clearAll();
          if (state.tab === "chapters") { renderChecklist(container); }
          else { renderTermsChecklist(container); }
        }
      });
    }

    /* Wire flashcard reset */
    var fcResetBtn = container.querySelector("#fcResetBtn");
    if (fcResetBtn) {
      fcResetBtn.addEventListener("click", function() {
        state.fc.queue = shuffleArray(state.fc.cards);
        state.fc.queueIdx = 0;
        state.fc.known = 0;
        state.fc.flipped = false;
        var cardArea = container.querySelector("#fcCardArea");
        if (cardArea) renderDeck(container, cardArea);
      });
    }

    /* Wire PDF export */
    var exportBtn = container.querySelector("#exportPdfBtn");
    if (exportBtn) { exportBtn.addEventListener("click", exportPdf); }

    reloadAndRender(container);
  }

  function reloadAndRender(container) {
    if (state.tab === "chapters") {
      if (state.chapters.length === 0) {
        loadChapters().then(function() { renderChecklist(container); });
      } else {
        renderChecklist(container);
      }
    } else if (state.tab === "glossary") {
      if (state.glossaryTerms.length === 0) {
        var b1 = container.querySelector("#checklistBody");
        if (b1) b1.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading glossary...</p></div>';
        loadGlossary().then(function() { renderGlossary(container); });
      } else {
        renderGlossary(container);
      }
    } else if (state.tab === "flashcards") {
      renderFlashcardShell(container);
    } else {
      if (state.glossaryTerms.length === 0) {
        var b2 = container.querySelector("#checklistBody");
        if (b2) b2.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading terms...</p></div>';
        loadGlossary().then(function() { renderTermsChecklist(container); });
      } else {
        renderTermsChecklist(container);
      }
    }
  }

  /* ── Chapters checklist ── */

  function renderChecklist(container) {
    var body = container.querySelector("#checklistBody");
    if (!body) return;
    if (state.chapters.length === 0) {
      body.innerHTML = '<div class="error-state"><h2>No Data</h2><p>Could not load chapter data.</p></div>';
      return;
    }
    var domains = groupByDomain(state.chapters);
    body.innerHTML = Object.keys(domains).map(function(domain) {
      var chs = domains[domain];
      var prog = domainProgress(domain, chs);
      var dLabel = DOMAIN_LABELS[domain] || domain;
      var dWeight = DOMAIN_WEIGHTS[domain] ? " (" + DOMAIN_WEIGHTS[domain] + ")" : "";
      var isCollapsed = state.collapsed[domain];
      return '<div class="checklist-domain">' +
        '<div class="checklist-domain-header" data-domain-toggle="' + domain + '">' +
          '<span>' + escHtml(dLabel + dWeight) + '</span>' +
          '<div style="display:flex;align-items:center;gap:0.75rem;">' +
            '<span class="checklist-progress">' + prog.focus + ' focus &nbsp;|&nbsp; ' + prog.gotIt + ' got it &nbsp;/&nbsp; ' + prog.total + ' total</span>' +
            '<span style="color:var(--text-faint);font-size:0.8rem;">' + (isCollapsed ? "&#9660;" : "&#9650;") + '</span>' +
          '</div>' +
        '</div>' +
        (isCollapsed ? "" : '<div>' + chs.map(renderChapter).join("") + '</div>') +
      '</div>';
    }).join("");

    body.querySelectorAll("[data-domain-toggle]").forEach(function(el) {
      el.addEventListener("click", function() {
        state.collapsed[this.dataset.domainToggle] = !state.collapsed[this.dataset.domainToggle];
        renderChecklist(container);
      });
    });
    body.querySelectorAll("[data-ch-toggle]").forEach(function(el) {
      el.addEventListener("click", function() {
        state.chCollapsed[this.dataset.chToggle] = !state.chCollapsed[this.dataset.chToggle];
        renderChecklist(container);
      });
    });
    body.querySelectorAll("[data-cl-btn]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var chNum = parseInt(this.dataset.ch, 10);
        var si = parseInt(this.dataset.si, 10);
        var action = this.dataset.clBtn;
        setItemState(chNum, si, getItemState(chNum, si) === action ? null : action);
        renderChecklist(container);
      });
    });
  }

  function renderChapter(ch) {
    var chKey = "ch" + ch.chapter;
    var isCollapsed = state.chCollapsed[chKey];
    var sections = ch.sections || [];
    var gotCount = 0, focusCount = 0;
    sections.forEach(function(sec, si) {
      var s = getItemState(ch.chapter, si);
      if (s === "got-it") gotCount++; else if (s === "focus") focusCount++;
    });
    return '<div class="checklist-chapter">' +
      '<div class="checklist-chapter-header" data-ch-toggle="' + chKey + '">' +
        '<span>Ch' + String(ch.chapter).padStart(2, "0") + ' &mdash; ' + escHtml(ch.title) + '</span>' +
        '<div style="display:flex;align-items:center;gap:0.5rem;">' +
          '<span class="checklist-progress">' + focusCount + 'F &nbsp;' + gotCount + 'G &nbsp;/ ' + sections.length + '</span>' +
          '<span style="color:var(--text-faint);font-size:0.75rem;">' + (isCollapsed ? "&#9660;" : "&#9650;") + '</span>' +
        '</div>' +
      '</div>' +
      (isCollapsed ? "" :
        sections.map(function(sec, si) {
          var s = getItemState(ch.chapter, si);
          return '<div class="checklist-item' + (s ? " " + s : "") + '">' +
            '<span style="flex:1;">' + escHtml(sec.title || "Section " + (si + 1)) + '</span>' +
            '<div class="checklist-item-actions">' +
              '<button class="cl-btn' + (s === "got-it" ? " gotit-active" : "") + '" data-cl-btn="got-it" data-ch="' + ch.chapter + '" data-si="' + si + '">&#10003; Got It</button>' +
              '<button class="cl-btn' + (s === "focus" ? " focus-active" : "") + '" data-cl-btn="focus" data-ch="' + ch.chapter + '" data-si="' + si + '">&#9873; Focus</button>' +
            '</div>' +
          '</div>';
        }).join("")
      ) +
    '</div>';
  }

  /* ── Terms checklist ── */

  function renderTermsChecklist(container) {
    var body = container.querySelector("#checklistBody");
    if (!body) return;
    var domains = groupTermsByDomain(state.glossaryTerms);
    if (Object.keys(domains).length === 0) {
      body.innerHTML = '<div class="error-state"><p>No terms found. Run build-glossary.py first.</p></div>';
      return;
    }
    body.innerHTML = Object.keys(domains).sort().map(function(domain) {
      var terms = domains[domain];
      var prog = termDomainProgress(terms);
      var dLabel = DOMAIN_LABELS[domain] || domain;
      var isCollapsed = state.domainCollapsed[domain];
      return '<div class="checklist-domain">' +
        '<div class="checklist-domain-header" data-term-domain-toggle="' + domain + '">' +
          '<span>' + escHtml(dLabel) + '</span>' +
          '<div style="display:flex;align-items:center;gap:0.75rem;">' +
            '<span class="checklist-progress">' + prog.focus + ' focus &nbsp;|&nbsp; ' + prog.gotIt + ' got it &nbsp;/&nbsp; ' + prog.total + ' total</span>' +
            '<span style="color:var(--text-faint);font-size:0.8rem;">' + (isCollapsed ? "&#9660;" : "&#9650;") + '</span>' +
          '</div>' +
        '</div>' +
        (isCollapsed ? "" :
          '<div>' + terms.map(function(t) {
            var tKey = t.term.toLowerCase();
            var s = getTermState(tKey);
            return '<div class="checklist-item' + (s ? " " + s : "") + '">' +
              '<div style="flex:1;min-width:0;">' +
                '<div style="font-weight:600;font-size:.875rem;">' + escHtml(t.term) + '</div>' +
                '<div style="font-size:.8rem;color:var(--text-faint);margin-top:.15rem;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">' + escHtml(t.definition) + '</div>' +
              '</div>' +
              '<div class="checklist-item-actions" style="margin-left:.75rem;">' +
                '<button class="cl-btn' + (s === "got-it" ? " gotit-active" : "") + '" data-term-btn="got-it" data-tkey="' + escHtml(tKey) + '">&#10003; Got It</button>' +
                '<button class="cl-btn' + (s === "focus" ? " focus-active" : "") + '" data-term-btn="focus" data-tkey="' + escHtml(tKey) + '">&#9873; Focus</button>' +
              '</div>' +
            '</div>';
          }).join("") + '</div>'
        ) +
      '</div>';
    }).join("");

    body.querySelectorAll("[data-term-domain-toggle]").forEach(function(el) {
      el.addEventListener("click", function() {
        var d = this.dataset.termDomainToggle;
        state.domainCollapsed[d] = !state.domainCollapsed[d];
        renderTermsChecklist(container);
      });
    });
    body.querySelectorAll("[data-term-btn]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var tKey = this.dataset.tkey;
        var action = this.dataset.termBtn;
        setTermState(tKey, getTermState(tKey) === action ? null : action);
        renderTermsChecklist(container);
      });
    });
  }

  /* ── Glossary tab ── */

  function renderGlossary(container) {
    var body = container.querySelector("#checklistBody");
    if (!body) return;
    var search = state.glossarySearch.toLowerCase().trim();
    var coreFilt = state.core;
    var domFilt = state.glossaryDomain;
    var filtered = state.glossaryTerms.filter(function(t) {
      if (coreFilt !== 0 && t.core !== coreFilt) return false;
      if (domFilt !== "all" && t.domain !== domFilt) return false;
      if (search) {
        return t.term.toLowerCase().indexOf(search) >= 0 ||
               t.definition.toLowerCase().indexOf(search) >= 0;
      }
      return true;
    });
    var groups = {};
    filtered.forEach(function(t) {
      var l = t.term.charAt(0).toUpperCase();
      if (!/[A-Z]/.test(l)) l = "#";
      if (!groups[l]) groups[l] = [];
      groups[l].push(t);
    });
    var letters = Object.keys(groups).sort();
    body.innerHTML =
      '<div style="margin-bottom:1rem;">' +
        '<div class="glossary-search-wrap">' +
          '<svg style="position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
          '<input class="glossary-search" id="glossarySearchInline" type="search" placeholder="Search ' + state.glossaryTerms.filter(function(t){return coreFilt===0||t.core===coreFilt;}).length + '+ terms..." value="' + escHtml(state.glossarySearch) + '" autocomplete="off">' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.6rem;" id="gDomainChips">' +
          '<button class="filter-btn' + (domFilt === "all" ? " active" : "") + '" data-gdom="all">All</button>' +
          DOMAINS_LIST.map(function(d) {
            return '<button class="filter-btn' + (domFilt === d ? " active" : "") + '" data-gdom="' + d + '">' + (DOMAIN_LABELS[d] || d) + '</button>';
          }).join("") +
        '</div>' +
        '<div class="glossary-alpha-bar" style="margin:.6rem 0 0;">' +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("").map(function(l) {
            return groups[l]
              ? '<a href="#gal-' + l + '">' + l + '</a>'
              : '<span style="color:var(--text-faint);font-size:.75rem;padding:.2rem .4rem;">' + l + '</span>';
          }).join("") +
        '</div>' +
        '<p class="text-muted text-sm" style="margin-top:.5rem;">Showing ' + filtered.length + ' of ' + state.glossaryTerms.length + ' terms</p>' +
      '</div>' +
      (letters.length === 0
        ? '<p class="text-muted" style="padding:2rem 0;">No terms match your filters.</p>'
        : letters.map(function(letter) {
            return '<div class="glossary-group" id="gal-' + letter + '">' +
              '<div class="glossary-letter">' + letter + '</div>' +
              groups[letter].map(function(t) {
                var dLabel = DOMAIN_LABELS[t.domain] || t.domain || "";
                return '<div class="glossary-entry">' +
                  '<div class="glossary-term">' + escHtml(t.term) + '</div>' +
                  '<div class="glossary-def">' + escHtml(t.definition) + '</div>' +
                  '<div style="display:flex;flex-direction:column;gap:.3rem;align-items:flex-end;min-width:90px;">' +
                    (dLabel ? '<span class="badge" style="font-size:.65rem;' + domainColor(t.domain) + '">' + escHtml(dLabel) + '</span>' : '') +
                    (t.objective ? '<span class="badge badge-objective" style="font-size:.65rem;">' + escHtml(t.objective) + '</span>' : '') +
                  '</div>' +
                '</div>';
              }).join("") +
            '</div>';
          }).join("")
      );

    var inp = body.querySelector("#glossarySearchInline");
    if (inp) {
      inp.addEventListener("input", function() {
        clearTimeout(state.glossaryDebounce);
        var val = this.value;
        state.glossaryDebounce = setTimeout(function() {
          state.glossarySearch = val;
          renderGlossary(container);
        }, 120);
      });
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
    }
    body.querySelectorAll("[data-gdom]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.glossaryDomain = this.dataset.gdom;
        renderGlossary(container);
      });
    });
  }

  /* ── Flashcard tab shell ── */

  function renderFlashcardShell(container) {
    var body = container.querySelector("#checklistBody");
    if (!body) return;

    var fc = state.fc;
    body.innerHTML =
      /* Mode sub-tabs */
      '<div class="core-tab-bar" id="fcModeTabs" style="margin-bottom:1.25rem;">' +
        '<button class="core-tab' + (fc.mode === "concept"  ? " active" : "") + '" data-fcmode="concept">Concept Cards</button>' +
        '<button class="core-tab' + (fc.mode === "missed"   ? " active" : "") + '" data-fcmode="missed">Missed Questions</button>' +
        '<button class="core-tab' + (fc.mode === "terms"    ? " active" : "") + '" data-fcmode="terms">Key Terms</button>' +
        '<button class="core-tab' + (fc.mode === "acronyms" ? " active" : "") + '" data-fcmode="acronyms">Acronyms</button>' +
      '</div>' +

      /* Domain filter (terms/acronyms only) */
      '<div id="fcDomainRow" style="display:' + (fc.mode === "terms" || fc.mode === "acronyms" ? "flex" : "none") + ';flex-wrap:wrap;gap:.35rem;margin-bottom:1rem;">' +
        '<button class="filter-btn' + (fc.domain === "all" ? " active" : "") + '" data-fcdom="all">All Domains</button>' +
        DOMAINS_LIST.map(function(d) {
          return '<button class="filter-btn' + (fc.domain === d ? " active" : "") + '" data-fcdom="' + d + '">' + (DOMAIN_LABELS[d] || d) + '</button>';
        }).join("") +
      '</div>' +

      /* Card area */
      '<div id="fcCardArea" class="fc-deck-wrap">' +
        '<div class="loading-state"><div class="spinner"></div><p>Loading cards...</p></div>' +
      '</div>';

    /* Wire mode sub-tabs */
    body.querySelectorAll("[data-fcmode]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.fc.mode = this.dataset.fcmode;
        state.fc.flipped = false;
        var domRow = body.querySelector("#fcDomainRow");
        if (domRow) domRow.style.display = (state.fc.mode === "terms" || state.fc.mode === "acronyms") ? "flex" : "none";
        loadFcCards(container);
      });
    });

    /* Wire domain chips */
    body.querySelectorAll("[data-fcdom]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.fc.domain = this.dataset.fcdom;
        /* Update active state */
        body.querySelectorAll("[data-fcdom]").forEach(function(b) { b.classList.remove("active"); });
        this.classList.add("active");
        state.fc.flipped = false;
        loadFcCards(container);
      });
    });

    loadFcCards(container);
  }

  function loadFcCards(container) {
    var cardArea = container.querySelector("#fcCardArea");
    if (!cardArea) return;
    cardArea.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading cards...</p></div>';

    var promise;
    var mode = state.fc.mode;
    if (mode === "concept") {
      promise = fcFetchChapters().then(fcBuildConceptCards);
    } else if (mode === "missed") {
      promise = Promise.resolve(fcBuildMissedCards());
    } else if (mode === "acronyms") {
      promise = fcFetchGlossary().then(fcBuildAcronymCards);
    } else {
      promise = fcFetchGlossary().then(fcBuildTermCards);
    }

    promise.then(function(cards) {
      state.fc.cards = cards;
      state.fc.queue = shuffleArray(cards);
      state.fc.queueIdx = 0;
      state.fc.known = 0;
      state.fc.flipped = false;
      renderDeck(container, cardArea);
    }).catch(function(err) {
      cardArea.innerHTML = '<div class="error-state"><h2>Load Error</h2><p>' + escHtml(String(err)) + '</p></div>';
    });
  }

  function renderDeck(container, cardArea) {
    var fc = state.fc;
    if (fc.queue.length === 0) {
      var emptyMsg = fc.mode === "missed"
        ? "No missed questions yet — take a practice test first."
        : "No cards found for the current filters.";
      cardArea.innerHTML =
        '<div class="error-state" style="padding:3rem;text-align:center;">' +
          '<p style="color:var(--text-muted);font-size:1rem;">' + emptyMsg + '</p>' +
          (fc.mode === "missed" ? '<a href="practice.html" class="btn btn-primary" style="margin-top:1rem;">Take Practice Test</a>' : '') +
        '</div>';
      return;
    }
    if (fc.queueIdx >= fc.queue.length) {
      renderFcSummary(container, cardArea);
      return;
    }

    var card = fc.queue[fc.queueIdx];
    var total = fc.queue.length;
    var pct = total > 0 ? Math.round((fc.known / total) * 100) : 0;

    cardArea.innerHTML =
      '<div class="fc-card-scene" id="fcScene" aria-label="Flashcard — click to flip">' +
        '<div class="fc-card' + (fc.flipped ? " flipped" : "") + '" id="fcCard">' +
          '<div class="fc-card-face fc-card-front">' +
            (card.domainLabel ? '<span class="badge badge-domain" style="font-size:0.65rem;margin-bottom:0.75rem;">' + escHtml(card.domainLabel) + '</span>' : '') +
            '<div style="font-size:1.05rem;font-weight:700;color:var(--text);margin-bottom:0.5rem;">' + card.front + '</div>' +
            (card.frontSub ? '<div style="font-size:0.78rem;color:var(--text-faint);line-height:1.45;">' + card.frontSub + '</div>' : '') +
            '<div style="position:absolute;bottom:0.75rem;font-size:0.7rem;color:var(--text-faint);">Click to flip</div>' +
          '</div>' +
          '<div class="fc-card-face fc-card-back">' +
            (card.badge ? '<span class="badge badge-objective" style="font-size:0.65rem;margin-bottom:0.75rem;">' + escHtml(card.badge) + '</span>' : '') +
            '<div style="font-size:0.9rem;color:var(--text);line-height:1.55;">' + card.back + '</div>' +
            (card.backSub ? '<div style="font-size:0.8rem;color:var(--accent2);margin-top:0.5rem;font-style:italic;">' + card.backSub + '</div>' : '') +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="fc-actions" id="fcActions"' + (!fc.flipped ? ' style="visibility:hidden"' : '') + '>' +
        '<button class="btn fc-btn-know" id="fcKnow">Know It &#10003;</button>' +
        '<button class="btn fc-btn-again" id="fcAgain">Study Again &#8617;</button>' +
      '</div>' +

      '<div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;margin-top:0.5rem;">' +
        '<div style="font-size:0.8rem;color:var(--text-muted);">' +
          fc.known + ' of ' + total + ' known &nbsp;|&nbsp; Card ' + (fc.queueIdx + 1) + ' of ' + fc.queue.length +
        '</div>' +
        '<div class="fc-progress-bar"><div class="fc-progress-fill" style="width:' + pct + '%;"></div></div>' +
      '</div>';

    var scene = cardArea.querySelector("#fcScene");
    if (scene) {
      scene.addEventListener("click", function() {
        fc.flipped = !fc.flipped;
        var fcEl = cardArea.querySelector("#fcCard");
        if (fcEl) fcEl.classList.toggle("flipped", fc.flipped);
        var actions = cardArea.querySelector("#fcActions");
        if (actions) actions.style.visibility = fc.flipped ? "visible" : "hidden";
      });
    }

    var knowBtn = cardArea.querySelector("#fcKnow");
    if (knowBtn) {
      knowBtn.addEventListener("click", function() {
        fc.known++;
        fc.queueIdx++;
        fc.flipped = false;
        renderDeck(container, cardArea);
      });
    }

    var againBtn = cardArea.querySelector("#fcAgain");
    if (againBtn) {
      againBtn.addEventListener("click", function() {
        fc.queue.push(fc.queue[fc.queueIdx]);
        fc.queueIdx++;
        fc.flipped = false;
        renderDeck(container, cardArea);
      });
    }
  }

  function renderFcSummary(container, cardArea) {
    var fc = state.fc;
    var total = fc.queue.length;
    var pct = total > 0 ? Math.round((fc.known / total) * 100) : 0;
    cardArea.innerHTML =
      '<div style="text-align:center;padding:2rem 1rem;">' +
        '<div style="font-size:3rem;font-weight:800;color:' + (pct >= 80 ? "var(--correct)" : "var(--accent2)") + ';">' + pct + '%</div>' +
        '<div style="font-size:1rem;color:var(--text-muted);margin:.5rem 0 1.5rem;">' + fc.known + ' of ' + total + ' known</div>' +
        '<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">' +
          '<button class="btn btn-primary" id="fcRestartBtn">Study Again</button>' +
          '<button class="btn btn-secondary" id="fcShuffleBtn">New Shuffle</button>' +
        '</div>' +
      '</div>';

    cardArea.querySelector("#fcRestartBtn").addEventListener("click", function() {
      fc.queueIdx = 0; fc.known = 0; fc.flipped = false;
      renderDeck(container, cardArea);
    });
    cardArea.querySelector("#fcShuffleBtn").addEventListener("click", function() {
      fc.queue = shuffleArray(fc.cards);
      fc.queueIdx = 0; fc.known = 0; fc.flipped = false;
      renderDeck(container, cardArea);
    });
  }

  /* ── PDF Export — unified Study Pack ── */

  function exportPdf() {
    var btn = document.getElementById("exportPdfBtn");
    if (btn) { btn.disabled = true; btn.textContent = "Loading…"; }

    /* Ensure all data is loaded before building */
    var p1 = state.chapters.length ? Promise.resolve() : loadChapters();
    var p2 = state.glossaryTerms.length ? Promise.resolve() : loadGlossary();

    Promise.all([p1, p2]).then(function() {
      var date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      var coreLabel = "Core " + state.core;
      var html = '<h1>' + escHtml(coreLabel + " — Complete Study Pack") + '</h1>';
      html += '<p class="print-date">Generated: ' + escHtml(date) + ' &nbsp;|&nbsp; Lab404 A+ Study Hub</p>';
      html += '<hr style="border:1pt solid #ccc;margin:1em 0;">';

      /* ── Part 1: Study Notes ── */
      html += '<h2 style="page-break-before:auto;">Part 1 — Study Notes</h2>';
      var focused = [];
      state.chapters.forEach(function(ch) {
        (ch.sections || []).forEach(function(sec, si) {
          if (getItemState(ch.chapter, si) === "focus") focused.push({ ch: ch, sec: sec });
        });
      });
      var useAll = focused.length === 0;
      var notesItems = useAll ? [] : focused;
      if (useAll) {
        state.chapters.forEach(function(ch) {
          (ch.sections || []).forEach(function(sec) { notesItems.push({ ch: ch, sec: sec }); });
        });
      }
      if (useAll) html += '<p style="font-style:italic;font-size:9pt;">(No Focus marks set — showing all sections)</p>';
      var noteDomains = {};
      notesItems.forEach(function(item) {
        var d = item.ch.domain || "other";
        if (!noteDomains[d]) noteDomains[d] = {};
        var ck = item.ch.chapter;
        if (!noteDomains[d][ck]) noteDomains[d][ck] = { ch: item.ch, sections: [] };
        noteDomains[d][ck].sections.push(item.sec);
      });
      Object.keys(noteDomains).forEach(function(domain) {
        html += '<h3>' + escHtml(DOMAIN_LABELS[domain] || domain) + '</h3>';
        Object.keys(noteDomains[domain]).sort(function(a,b){return +a - +b;}).forEach(function(cNum) {
          var entry = noteDomains[domain][cNum];
          html += '<h4>Ch' + String(entry.ch.chapter).padStart(2,"0") + ' &mdash; ' + escHtml(entry.ch.title) + '</h4>';
          entry.sections.forEach(function(sec) {
            html += '<p><strong>' + escHtml(sec.title || "") + '</strong></p>';
            (sec.content || "").split("\n").map(function(p){return p.trim();})
              .filter(function(p){return p.length > 3 && p !== "---";})
              .forEach(function(p){ html += '<p>' + escHtml(p) + '</p>'; });
            (sec.exam_tips || []).forEach(function(tip) {
              html += '<blockquote class="print-tip">EXAM TIP: ' + escHtml(tip) + '</blockquote>';
            });
          });
        });
      });

      /* ── Part 2: Key Terms ── */
      if (state.glossaryTerms.length) {
        html += '<div style="page-break-before:always;"><h2>Part 2 — Key Terms</h2>';
        var focusedTerms = state.glossaryTerms.filter(function(t) {
          return (state.core === 0 || t.core === state.core) && getTermState(t.term.toLowerCase()) === "focus";
        });
        var termUseAll = focusedTerms.length === 0;
        var termsToUse = termUseAll
          ? state.glossaryTerms.filter(function(t) { return state.core === 0 || t.core === state.core; })
          : focusedTerms;
        if (termUseAll) html += '<p style="font-style:italic;font-size:9pt;">(No Focus marks set — showing all terms)</p>';
        var termDomains = {};
        termsToUse.forEach(function(t) {
          var d = t.domain || "other";
          if (!termDomains[d]) termDomains[d] = [];
          termDomains[d].push(t);
        });
        Object.keys(termDomains).sort().forEach(function(domain) {
          html += '<h3>' + escHtml(DOMAIN_LABELS[domain] || domain) + '</h3>';
          termDomains[domain].forEach(function(t) {
            html += '<div class="print-fc-card"><h4>' + escHtml(t.term) + '</h4><p>' + escHtml(t.definition) + '</p></div>';
          });
        });
        html += '</div>';
      }

      /* ── Part 3: Concept Flashcards ── */
      var conceptCards = [];
      state.chapters.forEach(function(ch) {
        (ch.concept_cards || []).forEach(function(c) {
          conceptCards.push({ front: c.concept || "", back: c.summary || c.hook || "", domain: ch.domain || "", ch: ch.chapter });
        });
      });
      if (conceptCards.length) {
        html += '<div style="page-break-before:always;"><h2>Part 3 — Concept Flashcards</h2>';
        var conceptDomains = {};
        conceptCards.forEach(function(c) {
          if (!conceptDomains[c.domain]) conceptDomains[c.domain] = [];
          conceptDomains[c.domain].push(c);
        });
        Object.keys(conceptDomains).sort().forEach(function(d) {
          html += '<h3>' + escHtml(DOMAIN_LABELS[d] || d) + '</h3>';
          conceptDomains[d].forEach(function(c) {
            html += '<div class="print-fc-card"><h4>' + escHtml(c.front) + '</h4><p>' + escHtml(c.back) + '</p></div>';
          });
        });
        html += '</div>';
      }

      /* ── Part 4: Acronyms ── */
      function isAcronym(term) {
        var first = term.split(/[\s\(]/)[0];
        return /^[A-Z][A-Z0-9\/\-\.]{1,}$/.test(first);
      }
      var acronyms = state.glossaryTerms.filter(function(t) {
        return (state.core === 0 || t.core === state.core) && isAcronym(t.term);
      });
      if (acronyms.length) {
        html += '<div style="page-break-before:always;"><h2>Part 4 — Acronyms</h2>';
        var acDomains = {};
        acronyms.forEach(function(t) {
          var d = t.domain || "other";
          if (!acDomains[d]) acDomains[d] = [];
          acDomains[d].push(t);
        });
        Object.keys(acDomains).sort().forEach(function(d) {
          html += '<h3>' + escHtml(DOMAIN_LABELS[d] || d) + '</h3>';
          acDomains[d].forEach(function(t) {
            html += '<div class="print-fc-card"><h4>' + escHtml(t.term) + '</h4><p>' + escHtml(t.definition) + '</p></div>';
          });
        });
        html += '</div>';
      }

      var printView = document.getElementById("print-view");
      if (!printView) return;
      printView.innerHTML = html;
      window.print();
      setTimeout(function() { printView.innerHTML = ""; }, 3000);
    }).catch(function(err) {
      alert("Could not load data for PDF: " + err.message);
    }).then(function() {
      if (btn) { btn.disabled = false; btn.textContent = "\u{1F4BE} Export Study Pack"; }
    });
  }

  /* ── Init ── */

  function init(rootEl) {
    var container = rootEl || document.getElementById("review-root");
    if (!container) return;
    renderRoot(container);
  }

  /* Expose for desktop window manager */
  window.ReviewLoader = { init: init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { if (!document.getElementById("windows-layer")) init(); });
  } else {
    if (!document.getElementById("windows-layer")) init();
  }
})();
