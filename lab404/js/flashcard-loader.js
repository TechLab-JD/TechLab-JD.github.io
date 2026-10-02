/* flashcard-loader.js — Flashcard study tool for A+ Study Hub */
(function () {
  "use strict";

  var TOTAL_CHAPTERS = { 1: 25, 2: 20, 3: 16 };

  var state = {
    mode: "concept",   // "concept" | "missed" | "terms" | "acronyms"
    core: 1,           // 1 | 2 | 0 (both A+ cores) | 3 (Security+, no cores)
    locked: false,     // true when opened from a cert folder: no core switching
    domain: "all",
    cards: [],
    queue: [],
    queueIdx: 0,
    known: 0,
    flipped: false,
    chapterCache: {},  // core -> { chNN: data }
    glossaryCache: null,
  };

  function escHtml(str) {
    if (window.AplusUtils) return window.AplusUtils.escHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ── Data loading ── */

  function chapterUrl(core, num) {
    var n = String(num).padStart(2, "0");
    return "data/core" + core + "/ch" + n + ".json";
  }

  function fetchChaptersForCore(core) {
    var cached = state.chapterCache[core];
    if (cached) return Promise.resolve(cached);

    var total = TOTAL_CHAPTERS[core] || 25;
    var promises = [];
    for (var i = 1; i <= total; i++) {
      promises.push(
        fetch(chapterUrl(core, i))
          .then(function(r) { return r.ok ? r.json() : null; })
          .catch(function() { return null; })
      );
    }
    return Promise.all(promises).then(function(results) {
      var chapters = results.filter(function(r) { return r !== null; });
      state.chapterCache[core] = chapters;
      return chapters;
    });
  }

  function fetchAllChapters() {
    if (state.core === 0) {
      return Promise.all([fetchChaptersForCore(1), fetchChaptersForCore(2)])
        .then(function(both) { return both[0].concat(both[1]); });
    }
    return fetchChaptersForCore(state.core);
  }

  function fetchGlossary() {
    if (state.glossaryCache) return Promise.resolve(state.glossaryCache);
    return fetch("data/glossary.json")
      .then(function(r) { return r.ok ? r.json() : []; })
      .catch(function() { return []; })
      .then(function(data) {
        state.glossaryCache = data;
        return data;
      });
  }

  /* ── Card builders ── */

  function buildConceptCards(chapters) {
    var cards = [];
    chapters.forEach(function(ch) {
      (ch.concept_cards || []).forEach(function(c) {
        cards.push({
          front: escHtml(c.concept || ""),
          frontSub: escHtml(c.hook || ""),
          back: escHtml(c.summary || c.hook || ""),
          backSub: "",
          domain: ch.domain || "",
          domainLabel: ch.domain_label || "",
          badge: "Ch " + ch.chapter,
        });
      });
    });
    return cards;
  }

  function buildMissedCards() {
    var raw = JSON.parse(localStorage.getItem("aplus-wrong") || "[]");
    raw = raw.filter(function(q) { return inScope(q.core); });
    return raw.map(function(q) {
      var idxs = q.answers && q.answers.length ? q.answers : [q.answer];
      var correctText = idxs.map(function(i) { return q.options && q.options[i] ? q.options[i] : ""; }).join("  +  ");
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

  function buildTermCards(terms) {
    var filtered = terms.filter(function(t) { return inScope(t.core); });
    if (state.domain !== "all") {
      filtered = filtered.filter(function(t) { return t.domain === state.domain; });
    }
    return filtered.map(function(t) {
      return {
        front: escHtml(t.term || ""),
        frontSub: "",
        back: escHtml(t.definition || ""),
        backSub: "",
        domain: t.domain || "",
        domainLabel: domainLabel(t.domain),
        badge: t.objective ? "Obj " + t.objective : "",
      };
    });
  }

  /* An acronym term is one whose first word is 2+ uppercase letters/digits/slashes.
     e.g. "CPU", "BIOS", "ZIF", "TCP/IP", "SODIMM" — but not "Battery" or "eDP". */
  function isAcronym(term) {
    var first = term.split(/[\s\(]/)[0];
    return /^[A-Z][A-Z0-9\/\-\.]{1,}$/.test(first);
  }

  function buildAcronymCards(terms) {
    var filtered = terms.filter(function(t) {
      if (!inScope(t.core)) return false;
      return isAcronym(t.term);
    });
    return filtered.map(function(t) {
      return {
        front: escHtml(t.term || ""),
        frontSub: "",
        back: escHtml(t.definition || ""),
        backSub: "",
        domain: t.domain || "",
        domainLabel: domainLabel(t.domain),
        badge: t.objective ? "Obj " + t.objective : "",
      };
    });
  }

  function isSec() { return state.core === 3; }

  /* A+ "Both" (0) = Core 1 + Core 2 only; Security+ never mixes with A+. */
  function inScope(c) {
    return state.core === 0 ? (c === 1 || c === 2) : c === state.core;
  }

  function secDomains() {
    return (window.AplusUtils && window.AplusUtils.SECPLUS_DOMAINS) || {};
  }

  var APLUS_DOMAIN_BTNS = [
    ["hardware", "Hardware"], ["networking", "Networking"], ["mobile", "Mobile"], ["security", "Security"],
    ["os", "OS"], ["cloud", "Cloud"], ["troubleshooting", "Troubleshooting"], ["operational", "Operational"],
  ];

  function domainButtons() {
    var list = isSec()
      ? Object.keys(secDomains()).map(function(k) { return [k, secDomains()[k]]; })
      : APLUS_DOMAIN_BTNS;
    return list.map(function(p) {
      return '<button class="filter-btn' + (state.domain === p[0] ? " active" : "") + '" data-domain="' + p[0] + '">' + p[1] + '</button>';
    }).join("");
  }

  function domainLabel(d) {
    if (isSec()) return secDomains()[d] || d;
    var map = {
      hardware: "Hardware", networking: "Networking", mobile: "Mobile Devices",
      cloud: "Cloud & Virt", troubleshooting: "Troubleshooting",
      os: "Operating Systems", security: "Security", operational: "Operational",
    };
    return map[d] || (d ? d.charAt(0).toUpperCase() + d.slice(1) : "");
  }

  /* ── Render ── */

  function renderRoot(container) {
    container.innerHTML =
      '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;max-width:760px;">' +

        '<div class="section-header">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb">' +
            '<a href="index.html">Home</a>' +
            '<span class="breadcrumb-sep">›</span>' +
            '<span>Flashcards</span>' +
          '</nav>' +
          '<span class="section-label">Study Tool</span>' +
          '<h1 style="font-size:clamp(1.5rem,3.5vw,2.25rem);margin-bottom:0.5rem;">' + (isSec() ? "Security+ Flashcards" : "Flashcards") + '</h1>' +
        '</div>' +

        /* Mode tabs */
        '<div class="core-tab-bar" id="modeTabs">' +
          '<button class="core-tab' + (state.mode === "concept" ? " active" : "") + '" data-mode="concept">Concept Cards</button>' +
          '<button class="core-tab' + (state.mode === "missed" ? " active" : "") + '" data-mode="missed">Missed Questions</button>' +
          '<button class="core-tab' + (state.mode === "terms" ? " active" : "") + '" data-mode="terms">Key Terms</button>' +
          '<button class="core-tab' + (state.mode === "acronyms" ? " active" : "") + '" data-mode="acronyms">Acronyms</button>' +
        '</div>' +

        /* Filter row */
        '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem;align-items:center;" id="filterRow">' +
          '<div class="filter-bar" id="coreFilter" style="margin:0;">' +
            (state.locked && isSec()
              ? '<span class="filter-btn active" style="cursor:default;">Security+ (SY0-701)</span>'
              : '<button class="filter-btn' + (state.core === 1 ? " active" : "") + '" data-core="1">Core 1</button>' +
                '<button class="filter-btn' + (state.core === 2 ? " active" : "") + '" data-core="2">Core 2</button>' +
                '<button class="filter-btn' + (state.core === 0 ? " active" : "") + '" data-core="0">Both</button>') +
          '</div>' +
          '<div class="filter-bar" id="domainFilter" style="margin:0;' + (state.mode === "terms" ? "" : "display:none") + '">' +
            '<button class="filter-btn' + (state.domain === "all" ? " active" : "") + '" data-domain="all">All Domains</button>' +
            domainButtons() +
          '</div>' +
        '</div>' +

        /* Card area */
        '<div id="cardArea" class="fc-deck-wrap">' +
          '<div class="loading-state"><div class="spinner"></div><p>Loading cards...</p></div>' +
        '</div>' +

      '</div>';

    /* Wire mode tabs */
    container.querySelectorAll("[data-mode]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.mode = this.dataset.mode;
        state.flipped = false;
        renderRoot(container);
        loadCards(container);
      });
    });

    /* Wire core filter */
    container.querySelectorAll("[data-core]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.core = parseInt(this.dataset.core, 10);
        state.flipped = false;
        renderRoot(container);
        loadCards(container);
      });
    });

    /* Wire domain filter */
    container.querySelectorAll("[data-domain]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.domain = this.dataset.domain;
        state.flipped = false;
        renderRoot(container);
        loadCards(container);
      });
    });

    loadCards(container);
  }

  function loadCards(container) {
    var cardArea = container.querySelector("#cardArea");
    if (!cardArea) return;
    cardArea.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading cards...</p></div>';

    var promise;
    if (state.mode === "concept") {
      promise = fetchAllChapters().then(function(chapters) {
        return buildConceptCards(chapters);
      });
    } else if (state.mode === "missed") {
      promise = Promise.resolve(buildMissedCards());
    } else if (state.mode === "acronyms") {
      promise = fetchGlossary().then(function(terms) {
        return buildAcronymCards(terms);
      });
    } else {
      promise = fetchGlossary().then(function(terms) {
        return buildTermCards(terms);
      });
    }

    promise.then(function(cards) {
      state.cards = cards;
      state.queue = shuffleArray(cards);
      state.queueIdx = 0;
      state.known = 0;
      state.flipped = false;
      renderDeck(cardArea);
    }).catch(function(err) {
      cardArea.innerHTML = '<div class="error-state"><h2>Load Error</h2><p>' + escHtml(String(err)) + '</p></div>';
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

  function renderDeck(cardArea) {
    if (state.queue.length === 0) {
      var emptyMsg = state.mode === "missed"
        ? "No missed questions yet — take a practice test first."
        : "No cards found for the current filters.";
      cardArea.innerHTML =
        '<div class="error-state" style="padding:3rem;text-align:center;">' +
          '<p style="color:var(--text-muted);font-size:1rem;">' + emptyMsg + '</p>' +
          (state.mode === "missed" ? '<a href="practice.html" class="btn btn-primary" style="margin-top:1rem;">Take Practice Test</a>' : '') +
        '</div>';
      return;
    }

    if (state.queueIdx >= state.queue.length) {
      renderSummary(cardArea);
      return;
    }

    var card = state.queue[state.queueIdx];
    var total = state.queue.length;
    var pct = total > 0 ? Math.round((state.known / total) * 100) : 0;

    cardArea.innerHTML =
      /* Card scene */
      '<div class="fc-card-scene" id="fcScene" aria-label="Flashcard — click to flip">' +
        '<div class="fc-card' + (state.flipped ? " flipped" : "") + '" id="fcCard">' +
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

      /* Action buttons */
      '<div class="fc-actions" id="fcActions"' + (!state.flipped ? ' style="visibility:hidden"' : '') + '>' +
        '<button class="btn fc-btn-know" id="fcKnow">Know It &#10003;</button>' +
        '<button class="btn fc-btn-again" id="fcAgain">Study Again &#8617;</button>' +
      '</div>' +

      /* Session bar */
      '<div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;margin-top:0.5rem;">' +
        '<div style="font-size:0.8rem;color:var(--text-muted);">' +
          state.known + ' of ' + total + ' known &nbsp;|&nbsp; Card ' + (state.queueIdx + 1) + ' of ' + state.queue.length +
        '</div>' +
        '<div class="fc-progress-bar"><div class="fc-progress-fill" style="width:' + pct + '%;"></div></div>' +
      '</div>';

    /* Wire card flip */
    var scene = cardArea.querySelector("#fcScene");
    if (scene) {
      scene.addEventListener("click", function() {
        state.flipped = !state.flipped;
        var fc = cardArea.querySelector("#fcCard");
        if (fc) fc.classList.toggle("flipped", state.flipped);
        var actions = cardArea.querySelector("#fcActions");
        if (actions) actions.style.visibility = state.flipped ? "visible" : "hidden";
      });
    }

    /* Wire Know It */
    var knowBtn = cardArea.querySelector("#fcKnow");
    if (knowBtn) {
      knowBtn.addEventListener("click", function() {
        state.known++;
        state.queueIdx++;
        state.flipped = false;
        renderDeck(cardArea);
      });
    }

    /* Wire Study Again */
    var againBtn = cardArea.querySelector("#fcAgain");
    if (againBtn) {
      againBtn.addEventListener("click", function() {
        var current = state.queue[state.queueIdx];
        state.queue.push(current);
        state.queueIdx++;
        state.flipped = false;
        renderDeck(cardArea);
      });
    }
  }

  function renderSummary(cardArea) {
    var total = state.queue.length;
    var pct = total > 0 ? Math.round((state.known / total) * 100) : 0;
    cardArea.innerHTML =
      '<div style="text-align:center;padding:2rem 1rem;">' +
        '<div style="font-size:3rem;font-weight:800;color:' + (pct >= 80 ? "var(--correct)" : "var(--accent2)") + ';">' + pct + '%</div>' +
        '<div style="font-size:1rem;color:var(--text-muted);margin:.5rem 0 1.5rem;">' + state.known + ' of ' + total + ' known</div>' +
        '<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">' +
          '<button class="btn btn-primary" id="fcRestart">Study Again</button>' +
          '<button class="btn btn-secondary" id="fcShuffle">New Shuffle</button>' +
        '</div>' +
      '</div>';

    cardArea.querySelector("#fcRestart").addEventListener("click", function() {
      state.queueIdx = 0;
      state.known = 0;
      state.flipped = false;
      renderDeck(cardArea);
    });
    cardArea.querySelector("#fcShuffle").addEventListener("click", function() {
      state.queue = shuffleArray(state.cards);
      state.queueIdx = 0;
      state.known = 0;
      state.flipped = false;
      renderDeck(cardArea);
    });
  }

  function init(rootEl, opts) {
    var container = rootEl || document.getElementById("flashcard-root");
    if (!container) return;
    var wasSec = isSec();
    if (opts && opts.core) { state.core = opts.core; state.locked = true; }
    else { state.locked = false; if (wasSec) state.core = 1; }
    if (isSec() !== wasSec) state.domain = "all";
    renderRoot(container);
  }

  /* Expose for desktop window manager */
  window.FlashcardLoader = { init: init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { if (!document.getElementById("windows-layer")) init(); });
  } else {
    if (!document.getElementById("windows-layer")) init();
  }
})();
