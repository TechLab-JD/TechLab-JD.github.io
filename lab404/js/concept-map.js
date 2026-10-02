/* concept-map.js — Exam Objective Star Map — Lab404 A+ Study Hub */

(function () {
  "use strict";

  // ── Constants ──────────────────────────────────────────────────────────────
  const CANVAS_ID = "objectiveMapCanvas";
  const WRAP_ID = "mapWrap";
  const MODAL_ID = "objModal";
  const DAMPING = 0.85;
  const JITTER = 0.08;
  const REPULSION_CAP = 200;
  const SETTLE_FRAMES = 250;
  const STAR_COUNT = 140;

  // ── State ──────────────────────────────────────────────────────────────────
  let canvas, ctx, wrap;
  let mapData = null;
  let currentCore = 1;
  let nodes = [];
  let edges = [];
  let hoveredNode = null;
  let rafId = null;
  let starField = null;        // offscreen canvas
  let canvasW = 0, canvasH = 0;
  let dpr = 1;
  let isTransitioning = false;

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    canvas = document.getElementById(CANVAS_ID);
    wrap = document.getElementById(WRAP_ID);
    if (!canvas || !wrap) return;

    ctx = canvas.getContext("2d");

    fetch("data/concept-map.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        mapData = data;
        sizeCanvas();
        loadCore(currentCore, true);
        bindEvents();
      })
      .catch(function (e) { console.error("concept-map.json load error:", e); });
  }

  // ── Canvas sizing ──────────────────────────────────────────────────────────
  function sizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    var rect = wrap.getBoundingClientRect();
    canvasW = rect.width;
    canvasH = canvas.offsetHeight || 520;

    canvas.width = canvasW * dpr;
    canvas.height = canvasH * dpr;
    canvas.style.width = canvasW + "px";
    canvas.style.height = canvasH + "px";
    ctx.scale(dpr, dpr);

    buildStarField();
  }

  // ── Star field (static offscreen) ─────────────────────────────────────────
  function buildStarField() {
    starField = document.createElement("canvas");
    starField.width = canvasW * dpr;
    starField.height = canvasH * dpr;
    var sc = starField.getContext("2d");
    sc.scale(dpr, dpr);

    for (var i = 0; i < STAR_COUNT; i++) {
      var x = Math.random() * canvasW;
      var y = Math.random() * canvasH;
      var r = Math.random() * 1.2 + 0.2;
      var a = Math.random() * 0.5 + 0.1;
      sc.beginPath();
      sc.arc(x, y, r, 0, Math.PI * 2);
      sc.fillStyle = "rgba(255,255,255," + a + ")";
      sc.fill();
    }
  }

  // ── Hub home positions ─────────────────────────────────────────────────────
  function hubHomes(core) {
    var cx = canvasW / 2;
    var cy = canvasH / 2;
    var rx = canvasW * 0.32;
    var ry = canvasH * 0.30;

    if (core === 1) {
      // Pentagon: 5 domains
      // Angles: top-center=270°, top-right=342°, bottom-right=54°, bottom-left=126°, top-left=198°
      var angles = [-90, -26, 54, 126, 198].map(function (a) { return a * Math.PI / 180; });
      var ids = ["d3", "d5", "d2", "d1", "d4"];
      var result = {};
      for (var i = 0; i < ids.length; i++) {
        result[ids[i]] = {
          x: cx + rx * Math.cos(angles[i]),
          y: cy + ry * Math.sin(angles[i])
        };
      }
      return result;
    } else {
      // Quadrant: 4 domains
      var margin = 0.28;
      return {
        "d1": { x: cx - rx * 0.75, y: cy - ry * 0.75 },  // OS top-left
        "d2": { x: cx + rx * 0.75, y: cy - ry * 0.75 },  // Security top-right
        "d3": { x: cx + rx * 0.75, y: cy + ry * 0.75 },  // Troubleshooting bottom-right
        "d4": { x: cx - rx * 0.75, y: cy + ry * 0.75 }   // Operational bottom-left
      };
    }
  }

  // ── Load core ─────────────────────────────────────────────────────────────
  function loadCore(core, instant) {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }

    var coreKey = "core" + core;
    if (!mapData || !mapData[coreKey]) return;

    var raw = mapData[coreKey];
    var homes = hubHomes(core);

    // Build node objects
    nodes = raw.nodes.map(function (n) {
      var home = homes[n.id] || null;
      var x, y;

      if (n.type === "domain") {
        x = home ? home.x : canvasW / 2;
        y = home ? home.y : canvasH / 2;
      } else {
        // place near parent hub with small random offset
        var ph = homes[n.parent];
        var angle = Math.random() * Math.PI * 2;
        var dist = 60 + Math.random() * 40;
        x = (ph ? ph.x : canvasW / 2) + Math.cos(angle) * dist;
        y = (ph ? ph.y : canvasH / 2) + Math.sin(angle) * dist;
      }

      return {
        id: n.id,
        type: n.type,
        label: n.label,
        domain: n.domain,
        parent: n.parent || null,
        color: n.color || getParentColor(n.parent, raw.nodes),
        weight: n.weight || 0,
        title: n.title || "",
        description: n.description || "",
        chapters: n.chapters || [],
        home: home,
        x: x, y: y,
        vx: 0, vy: 0
      };
    });

    edges = raw.edges.map(function (e) { return { source: e.source, target: e.target }; });

    // Pre-settle physics
    for (var i = 0; i < SETTLE_FRAMES; i++) { stepPhysics(true); }

    if (instant) {
      startLoop();
    } else {
      // fade in
      isTransitioning = true;
      canvas.style.opacity = "0";
      canvas.style.transition = "opacity 0.3s ease";
      setTimeout(function () {
        startLoop();
        canvas.style.opacity = "1";
        setTimeout(function () {
          canvas.style.transition = "";
          isTransitioning = false;
        }, 310);
      }, 30);
    }
  }

  function getParentColor(parentId, nodeList) {
    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].id === parentId) return nodeList[i].color;
    }
    return "#888";
  }

  // ── Physics ────────────────────────────────────────────────────────────────
  function nodeById(id) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) return nodes[i];
    }
    return null;
  }

  function nodeRadius(n) {
    if (n.type === "domain") return 14 + n.weight * 0.55;
    return 7;
  }

  function stepPhysics(silent) {
    var i, j, a, b, dx, dy, dist, force, fx, fy;
    var restLen, parentNode, ax, ay, hubStrength;

    // 1. Repulsion between all pairs
    for (i = 0; i < nodes.length; i++) {
      for (j = i + 1; j < nodes.length; j++) {
        a = nodes[i]; b = nodes[j];
        dx = a.x - b.x; dy = a.y - b.y;
        dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
        if (dist > REPULSION_CAP) continue;
        force = 1200 / (dist * dist);
        fx = (dx / dist) * force;
        fy = (dy / dist) * force;
        a.vx += fx; a.vy += fy;
        b.vx -= fx; b.vy -= fy;
      }
    }

    // 2. Spring edges: objective → parent hub
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (a.type !== "objective" || !a.parent) continue;
      parentNode = nodeById(a.parent);
      if (!parentNode) continue;
      var hubR = nodeRadius(parentNode);
      restLen = hubR + 85;
      dx = a.x - parentNode.x; dy = a.y - parentNode.y;
      dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
      var springK = 0.04;
      var stretch = dist - restLen;
      fx = -(dx / dist) * springK * stretch;
      fy = -(dy / dist) * springK * stretch;
      a.vx += fx; a.vy += fy;
      parentNode.vx -= fx * 0.15; parentNode.vy -= fy * 0.15;
    }

    // 3. Hub anchor to home position
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (a.type !== "domain" || !a.home) continue;
      hubStrength = 0.06;
      a.vx += (a.home.x - a.x) * hubStrength;
      a.vy += (a.home.y - a.y) * hubStrength;
    }

    // 4. Damping + drift + integrate
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (!silent) {
        a.vx += (Math.random() - 0.5) * JITTER;
        a.vy += (Math.random() - 0.5) * JITTER;
      }
      a.vx *= DAMPING; a.vy *= DAMPING;
      a.x += a.vx; a.y += a.vy;

      // boundary clamp
      var r = nodeRadius(a);
      var pad = r + 10;
      if (a.x < pad) { a.x = pad; a.vx = Math.abs(a.vx) * 0.3; }
      if (a.x > canvasW - pad) { a.x = canvasW - pad; a.vx = -Math.abs(a.vx) * 0.3; }
      if (a.y < pad) { a.y = pad; a.vy = Math.abs(a.vy) * 0.3; }
      if (a.y > canvasH - pad) { a.y = canvasH - pad; a.vy = -Math.abs(a.vy) * 0.3; }
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  function render() {
    ctx.clearRect(0, 0, canvasW, canvasH);

    // Star field
    if (starField) {
      ctx.drawImage(starField, 0, 0, canvasW, canvasH);
    }

    // Edges
    for (var e = 0; e < edges.length; e++) {
      var src = nodeById(edges[e].source);
      var tgt = nodeById(edges[e].target);
      if (!src || !tgt) continue;

      var isHoverEdge = (hoveredNode && (hoveredNode.id === tgt.id || hoveredNode.id === src.id));
      ctx.beginPath();
      ctx.moveTo(src.x, src.y);
      ctx.lineTo(tgt.x, tgt.y);
      ctx.strokeStyle = isHoverEdge ? hexAlpha(src.color, 0.55) : hexAlpha(src.color, 0.2);
      ctx.lineWidth = isHoverEdge ? 1.5 : 0.8;
      ctx.stroke();
    }

    // Nodes
    for (var i = 0; i < nodes.length; i++) {
      drawNode(nodes[i]);
    }
  }

  function drawNode(n) {
    var r = nodeRadius(n);
    var isHovered = (hoveredNode && hoveredNode.id === n.id);
    var glow = isHovered ? 22 : (n.type === "domain" ? 14 : 6);

    ctx.save();

    // Glow (shadow)
    ctx.shadowColor = n.color;
    ctx.shadowBlur = glow;

    // Fill circle
    ctx.beginPath();
    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);

    if (n.type === "domain") {
      var grad = ctx.createRadialGradient(n.x - r * 0.3, n.y - r * 0.3, 0, n.x, n.y, r);
      grad.addColorStop(0, hexAlpha(n.color, 0.95));
      grad.addColorStop(1, hexAlpha(n.color, 0.55));
      ctx.fillStyle = grad;
    } else {
      ctx.fillStyle = isHovered ? n.color : hexAlpha(n.color, 0.7);
    }
    ctx.fill();

    // Hover ring
    if (isHovered) {
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
      ctx.strokeStyle = hexAlpha(n.color, 0.7);
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.restore();

    // Labels
    if (n.type === "domain") {
      drawLabel(n, true);
    } else if (isHovered) {
      drawLabel(n, false);
    }
  }

  function drawLabel(n, always) {
    var r = nodeRadius(n);
    ctx.save();
    ctx.font = n.type === "domain" ? "bold 11px 'Segoe UI', system-ui, sans-serif" : "bold 10px 'Segoe UI', system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    var labelY = n.y + r + 14;
    var text = n.label;

    // Background pill
    var tw = ctx.measureText(text).width + 10;
    var th = 14;
    ctx.fillStyle = "rgba(6,6,13,0.82)";
    ctx.beginPath();
    ctx.roundRect(n.x - tw / 2, labelY - th / 2, tw, th, 4);
    ctx.fill();

    ctx.fillStyle = n.color;
    ctx.shadowColor = n.color;
    ctx.shadowBlur = 4;
    ctx.fillText(text, n.x, labelY);
    ctx.restore();
  }

  // ── RAF Loop ───────────────────────────────────────────────────────────────
  function startLoop() {
    if (rafId) cancelAnimationFrame(rafId);
    function tick() {
      stepPhysics(false);
      render();
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }

  // ── Mouse events ───────────────────────────────────────────────────────────
  function canvasPoint(e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function findNodeAt(px, py) {
    // Search in reverse so top-drawn nodes (objectives) hit first
    for (var i = nodes.length - 1; i >= 0; i--) {
      var n = nodes[i];
      var r = nodeRadius(n) + 8;  // hit padding
      var dx = px - n.x, dy = py - n.y;
      if (dx * dx + dy * dy <= r * r) return n;
    }
    return null;
  }

  function bindEvents() {
    canvas.addEventListener("mousemove", function (e) {
      var pt = canvasPoint(e);
      hoveredNode = findNodeAt(pt.x, pt.y);
      canvas.style.cursor = hoveredNode ? "pointer" : "default";
    });

    canvas.addEventListener("mouseleave", function () {
      hoveredNode = null;
      canvas.style.cursor = "default";
    });

    canvas.addEventListener("click", function (e) {
      var pt = canvasPoint(e);
      var hit = findNodeAt(pt.x, pt.y);
      if (hit && hit.type === "objective") openModal(hit);
    });

    // Touch support
    canvas.addEventListener("touchstart", function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      var rect = canvas.getBoundingClientRect();
      var pt = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      var hit = findNodeAt(pt.x, pt.y);
      if (hit && hit.type === "objective") openModal(hit);
    }, { passive: false });

    // Tab bar
    var tabs = document.querySelectorAll(".core-tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var core = parseInt(tab.dataset.core, 10);
        if (core === currentCore) return;
        currentCore = core;
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        loadCore(core, false);
      });
    });

    // Modal close
    var modal = document.getElementById(MODAL_ID);
    var closeBtn = document.getElementById("objModalClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    // Resize
    var ro = new ResizeObserver(function () {
      var oldW = canvasW, oldH = canvasH;
      sizeCanvas();
      // Rescale node positions proportionally
      var scaleX = canvasW / (oldW || canvasW);
      var scaleY = canvasH / (oldH || canvasH);
      nodes.forEach(function (n) {
        n.x *= scaleX; n.y *= scaleY;
        if (n.home) { n.home.x *= scaleX; n.home.y *= scaleY; }
      });
    });
    ro.observe(wrap);
  }

  // ── Modal ──────────────────────────────────────────────────────────────────
  function openModal(node) {
    var modal = document.getElementById(MODAL_ID);
    if (!modal) return;

    document.getElementById("objModalId").textContent = node.id;
    document.getElementById("objModalTitle").textContent = node.title;
    document.getElementById("objModalDesc").textContent = node.description;

    // Coverage badge (use first chapter coverage for overall badge)
    var covEl = document.getElementById("objModalCovBadge");
    if (covEl) {
      var cov = (node.chapters && node.chapters.length > 0) ? node.chapters[0].coverage : "COVERED";
      covEl.textContent = cov;
      covEl.className = "badge " + (cov === "COVERED" ? "badge-covered" : "badge-partial");
    }

    // Chapter links
    var chWrap = document.getElementById("objModalChapters");
    chWrap.innerHTML = "";
    if (node.chapters && node.chapters.length > 0) {
      node.chapters.forEach(function (ch) {
        var a = document.createElement("a");
        var coreNum = currentCore;
        a.href = "chapter.html?core=" + coreNum + "&ch=" + ch.num;
        a.className = "obj-chapter-link";
        a.innerHTML =
          "<span>Ch" + String(ch.num).padStart(2, "0") + " — " + escapeHtml(ch.title) + "</span>" +
          "<span class=\"badge " + (ch.coverage === "COVERED" ? "badge-covered" : "badge-partial") + "\">" + escapeHtml(ch.coverage) + "</span>";
        chWrap.appendChild(a);
      });
    } else {
      chWrap.innerHTML = "<p style=\"font-size:.85rem;color:var(--text-muted);\">No chapters mapped.</p>";
    }

    modal.removeAttribute("hidden");
    modal.querySelector(".obj-modal-card").style.animation = "none";
    void modal.querySelector(".obj-modal-card").offsetHeight;
    modal.querySelector(".obj-modal-card").style.animation = "";
  }

  function closeModal() {
    var modal = document.getElementById(MODAL_ID);
    if (modal) modal.setAttribute("hidden", "");
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  function hexAlpha(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ── Boot ───────────────────────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // polyfill roundRect for older browsers
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.arcTo(x + w, y, x + w, y + r, r);
      this.lineTo(x + w, y + h - r);
      this.arcTo(x + w, y + h, x + w - r, y + h, r);
      this.lineTo(x + r, y + h);
      this.arcTo(x, y + h, x, y + h - r, r);
      this.lineTo(x, y + r);
      this.arcTo(x, y, x + r, y, r);
      this.closePath();
      return this;
    };
  }

}());
