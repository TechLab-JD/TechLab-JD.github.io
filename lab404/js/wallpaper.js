/* wallpaper.js — Procedural cyberpunk circuit-board wallpaper */
(function () {
  "use strict";

  /* XOR-shift seeded RNG — reproducible pattern every load */
  function makeRng(seed) {
    var s = (seed ^ 0x5f3759df) >>> 0 || 1;
    return function () {
      s ^= s << 13;
      s ^= s >>> 17;
      s ^= s << 5;
      return (s >>> 0) / 4294967296;
    };
  }

  var CELL = 60; /* grid size in px */

  /* ── Main draw function ── */
  function draw(canvas) {
    var ctx = canvas.getContext("2d");
    var W = canvas.width;
    var H = canvas.height;
    var cols = Math.ceil(W / CELL) + 1;
    var rows = Math.ceil(H / CELL) + 1;

    ctx.clearRect(0, 0, W, H);

    /* ── 1. Background gradient ── */
    var bg = ctx.createRadialGradient(W * 0.52, H * 0.42, 0, W * 0.52, H * 0.42, Math.max(W, H) * 0.8);
    bg.addColorStop(0,   "#0e1825");
    bg.addColorStop(0.5, "#080d14");
    bg.addColorStop(1,   "#04040b");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    /* ── 2. Circuit traces ── */
    var rng = makeRng(0xc0ffee42);

    /* Draw horizontal trace segments along each grid row */
    for (var r = 0; r <= rows; r++) {
      var y = r * CELL;
      var x = 0;
      while (x < W) {
        var segLen = Math.floor(rng() * 5 + 1) * CELL;
        var draw_ = rng() < 0.58;
        var bright = rng() < 0.18;
        if (draw_) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(Math.min(x + segLen, W), y);
          ctx.strokeStyle = bright ? "rgba(0,255,204,0.22)" : "rgba(0,255,204,0.07)";
          ctx.lineWidth = bright ? 1.5 : 1;
          ctx.stroke();
        }
        var gap = rng() < 0.35 ? Math.floor(rng() * 3 + 1) * CELL : 0;
        x += segLen + gap;
      }
    }

    /* Draw vertical trace segments along each grid column */
    for (var c = 0; c <= cols; c++) {
      var x = c * CELL;
      var y = 0;
      while (y < H) {
        var segLen = Math.floor(rng() * 4 + 1) * CELL;
        var draw_ = rng() < 0.52;
        var bright = rng() < 0.18;
        if (draw_) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, Math.min(y + segLen, H));
          ctx.strokeStyle = bright ? "rgba(0,255,204,0.2)" : "rgba(0,255,204,0.07)";
          ctx.lineWidth = bright ? 1.5 : 1;
          ctx.stroke();
        }
        var gap = rng() < 0.3 ? Math.floor(rng() * 3 + 1) * CELL : 0;
        y += segLen + gap;
      }
    }

    /* ── 3. Nodes at grid intersections ── */
    rng = makeRng(0xdeadbeef);
    for (var r = 0; r <= rows; r++) {
      for (var c = 0; c <= cols; c++) {
        if (rng() > 0.27) continue;
        var nx = c * CELL;
        var ny = r * CELL;
        var bright = rng() < 0.22;
        var radius = bright ? 3.5 : 1.8;

        if (bright) {
          /* Glow halo */
          var halo = ctx.createRadialGradient(nx, ny, 0, nx, ny, radius * 6);
          halo.addColorStop(0, "rgba(0,255,204,0.25)");
          halo.addColorStop(1, "rgba(0,255,204,0)");
          ctx.beginPath();
          ctx.arc(nx, ny, radius * 6, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(nx, ny, radius, 0, Math.PI * 2);
        ctx.fillStyle = bright ? "rgba(0,255,204,0.7)" : "rgba(0,255,204,0.22)";
        ctx.fill();
      }
    }

    /* ── 4. IC chip outlines ── */
    rng = makeRng(0x1337c0de);
    var chipDefs = [
      { cr: 2, cc: 4,  cw: 3, ch: 2 },
      { cr: 5, cc: 10, cw: 4, ch: 2 },
      { cr: 9, cc: 3,  cw: 2, ch: 3 },
      { cr: 3, cc: 18, cw: 3, ch: 2 },
      { cr: 11, cc: 13, cw: 4, ch: 2 },
      { cr: 7, cc: 22, cw: 3, ch: 3 },
      { cr: 13, cc: 7,  cw: 2, ch: 2 },
    ];

    chipDefs.forEach(function (def) {
      var cx = def.cc * CELL;
      var cy = def.cr * CELL;
      var cw = def.cw * CELL;
      var ch = def.ch * CELL;
      if (cx > W || cy > H) return;

      /* Pin stubs */
      ctx.strokeStyle = "rgba(0,255,204,0.12)";
      ctx.lineWidth = 1;
      var pinStep = CELL / 2;
      for (var px = cx + pinStep; px < cx + cw; px += pinStep) {
        ctx.beginPath(); ctx.moveTo(px, cy);      ctx.lineTo(px, cy - 18);      ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, cy + ch); ctx.lineTo(px, cy + ch + 18); ctx.stroke();
      }
      for (var py = cy + pinStep; py < cy + ch; py += pinStep) {
        ctx.beginPath(); ctx.moveTo(cx,      py); ctx.lineTo(cx - 18,      py); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + cw, py); ctx.lineTo(cx + cw + 18, py); ctx.stroke();
      }

      /* Chip body */
      ctx.strokeStyle = "rgba(0,255,204,0.22)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(cx, cy, cw, ch);

      /* Corner notch dot */
      ctx.beginPath();
      ctx.arc(cx + 10, cy + 10, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,255,204,0.18)";
      ctx.fill();

      /* Inner label line */
      ctx.strokeStyle = "rgba(0,255,204,0.06)";
      ctx.lineWidth = 1;
      ctx.strokeRect(cx + 8, cy + 8, cw - 16, ch - 16);
    });

    /* ── 5. Purple accent L-traces ── */
    rng = makeRng(0xabcdef12);
    ctx.lineWidth = 1;
    for (var i = 0; i < 7; i++) {
      var ax1 = Math.round(rng() * cols * 0.85 + cols * 0.05) * CELL;
      var ay1 = Math.round(rng() * rows * 0.85 + rows * 0.05) * CELL;
      var ax2 = Math.round(rng() * cols * 0.85 + cols * 0.05) * CELL;
      var ay2 = Math.round(rng() * rows * 0.85 + rows * 0.05) * CELL;
      ctx.strokeStyle = "rgba(123,47,255,0.22)";
      ctx.beginPath();
      ctx.moveTo(ax1, ay1);
      ctx.lineTo(ax2, ay1);  /* horizontal */
      ctx.lineTo(ax2, ay2);  /* then vertical */
      ctx.stroke();
      /* End node */
      ctx.beginPath();
      ctx.arc(ax2, ay2, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(123,47,255,0.45)";
      ctx.fill();
      /* Start node */
      ctx.beginPath();
      ctx.arc(ax1, ay1, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(123,47,255,0.3)";
      ctx.fill();
    }

    /* Red accent traces (a few) */
    rng = makeRng(0xff2d5511);
    ctx.lineWidth = 1;
    for (var i = 0; i < 4; i++) {
      var ax1 = Math.round(rng() * cols * 0.9 + cols * 0.05) * CELL;
      var ay1 = Math.round(rng() * rows * 0.9 + rows * 0.05) * CELL;
      var ax2 = ax1 + (rng() > 0.5 ? 1 : -1) * Math.round(rng() * 3 + 1) * CELL;
      var ay2 = ay1 + (rng() > 0.5 ? 1 : -1) * Math.round(rng() * 2 + 1) * CELL;
      ctx.strokeStyle = "rgba(255,45,85,0.14)";
      ctx.beginPath();
      ctx.moveTo(ax1, ay1);
      ctx.lineTo(ax2, ay1);
      ctx.lineTo(ax2, ay2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(ax2, ay2, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,45,85,0.35)";
      ctx.fill();
    }

    /* ── 6. Center glow ── */
    var glow = ctx.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, Math.min(W, H) * 0.45);
    glow.addColorStop(0,   "rgba(0,60,45,0.35)");
    glow.addColorStop(0.5, "rgba(0,30,22,0.15)");
    glow.addColorStop(1,   "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    /* ── 7. Edge vignette ── */
    var vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.22, W / 2, H / 2, H * 0.85);
    vig.addColorStop(0, "rgba(0,0,0,0)");
    vig.addColorStop(1, "rgba(0,0,8,0.72)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);
  }

  /* ── Resize handler ── */
  function resize(canvas) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(canvas);
  }

  /* ── Init ── */
  function init() {
    var desktop = document.querySelector(".os-desktop");
    if (!desktop) return;

    var canvas = document.createElement("canvas");
    canvas.id = "wallpaper-canvas";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;display:block;";
    desktop.insertBefore(canvas, desktop.firstChild);

    resize(canvas);
    window.addEventListener("resize", function () { resize(canvas); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
