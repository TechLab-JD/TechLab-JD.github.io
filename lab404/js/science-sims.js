/* science-sims.js (R12) — small interactive science simulations for concepts a
   static diagram can't show. Two sims as requested by the teacher panel:
     • Wave — adjustable amplitude / wavelength / speed, animated.
     • Circuit — a rewireable battery+bulb circuit: switch, and series vs parallel.
   Vanilla canvas/SVG, no libraries, no network. Each sim owns a rAF loop that
   stops itself when its element leaves the DOM (window closed / sim switched).
   window.Lab404Sims.render(el) */
(function () {
  "use strict";

  function style() {
    if (document.getElementById("sim-style")) return;
    var st = document.createElement("style"); st.id = "sim-style";
    st.textContent =
      ".sim{padding:14px 16px;max-width:660px;margin:0 auto;box-sizing:border-box}" +
      ".sim h2{font-size:1.12rem;margin:0 0 2px;color:var(--accent2,#39e3c8)}" +
      ".sim .sim-lead{color:var(--text-muted,#9aa);font-size:.8rem;margin:0 0 12px;line-height:1.55}" +
      ".sim-tabs{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap}" +
      ".sim-tab{border:1px solid var(--border,#334);background:transparent;color:var(--text,#dfe);border-radius:9px;padding:9px 15px;font:inherit;font-size:.84rem;font-weight:700;cursor:pointer}" +
      ".sim-tab[aria-pressed=true]{background:var(--accent2,#39e3c8);color:#05211c;border-color:var(--accent2,#39e3c8)}" +
      ".sim-stage{border:1px solid var(--border,#334);border-radius:12px;background:var(--surface,#0c1320);padding:12px;overflow:hidden}" +
      ".sim-canvas{display:block;width:100%;height:auto;border-radius:8px}" +
      ".sim-ctrls{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:14px}" +
      ".sim-ctrl label{display:block;font-size:.76rem;color:var(--text-muted,#9aa);margin-bottom:5px;font-weight:600}" +
      ".sim-ctrl label b{color:var(--text,#dfe);font-weight:800}" +
      ".sim-ctrl input[type=range]{width:100%;accent-color:var(--accent2,#39e3c8)}" +
      ".sim-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;align-items:center}" +
      ".sim-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#05211c;border-radius:9px;padding:8px 15px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer}" +
      ".sim-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".sim-seg{display:inline-flex;border:1px solid var(--border,#334);border-radius:9px;overflow:hidden}" +
      ".sim-seg button{border:0;background:transparent;color:var(--text-muted,#9aa);padding:8px 13px;font:inherit;font-size:.78rem;font-weight:700;cursor:pointer}" +
      ".sim-seg button[aria-pressed=true]{background:var(--accent2,#39e3c8);color:#05211c}" +
      ".sim-note{font-size:.8rem;color:var(--text-muted,#9aa);margin-top:12px;line-height:1.5;background:var(--surface-2,rgba(127,127,127,.08));border:1px solid var(--border,#334);border-radius:9px;padding:10px 12px}";
    document.head.appendChild(st);
  }

  /* ───────────────────────── Wave ───────────────────────── */
  function wave(stage) {
    var W = 620, H = 220;
    stage.innerHTML =
      '<div class="sim-stage"><canvas class="sim-canvas" id="sim-wc" width="' + W + '" height="' + H + '"></canvas></div>' +
      '<div class="sim-ctrls">' +
        '<div class="sim-ctrl"><label>Amplitude &mdash; wave height <b id="wv-a">50</b></label><input type="range" id="wv-amp" min="10" max="95" value="50"></div>' +
        '<div class="sim-ctrl"><label>Wavelength &mdash; distance per wave <b id="wv-l">140</b></label><input type="range" id="wv-wl" min="45" max="300" value="140"></div>' +
        '<div class="sim-ctrl"><label>Speed <b id="wv-s">2.0</b></label><input type="range" id="wv-sp" min="0" max="60" value="20"></div>' +
      '</div>' +
      '<div class="sim-row"><button class="sim-btn" id="wv-play">⏸ Pause</button></div>' +
      '<div class="sim-note" id="wv-note"></div>';

    var cv = stage.querySelector("#sim-wc"), ctx = cv.getContext("2d");
    var amp = 50, wl = 140, speed = 2.0, phase = 0, running = true;
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent2").trim() || "#5aa9ff";
    var grid = "rgba(127,140,170,.18)";

    function note() {
      // f ∝ speed / wavelength (illustrative). Show the qualitative relationship.
      var rel = wl < 110 ? "short wavelength → higher frequency (more waves fit)" :
                wl > 220 ? "long wavelength → lower frequency (fewer waves fit)" :
                "medium wavelength and frequency";
      stage.querySelector("#wv-note").innerHTML =
        "A wave carries energy. <b>Amplitude</b> is its height (louder sound / brighter light), " +
        "<b>wavelength</b> is the distance between peaks, and speed is how fast it travels. " +
        "For a fixed speed, " + rel + " &mdash; wavelength and frequency are inversely related.";
    }

    function frame() {
      if (!document.body.contains(cv)) return;   // window closed → stop
      ctx.clearRect(0, 0, W, H);
      // grid baseline
      ctx.strokeStyle = grid; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
      // wave
      ctx.strokeStyle = accent; ctx.lineWidth = 2.5; ctx.beginPath();
      for (var x = 0; x <= W; x++) {
        var y = H / 2 - amp * Math.sin((x - phase) / wl * Math.PI * 2);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      // amplitude marker
      ctx.strokeStyle = "rgba(230,159,0,.9)"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(14, H / 2); ctx.lineTo(14, H / 2 - amp); ctx.stroke();
      if (running) phase += speed;
      requestAnimationFrame(frame);
    }

    stage.querySelector("#wv-amp").addEventListener("input", function () { amp = +this.value; stage.querySelector("#wv-a").textContent = amp; });
    stage.querySelector("#wv-wl").addEventListener("input", function () { wl = +this.value; stage.querySelector("#wv-l").textContent = wl; note(); });
    stage.querySelector("#wv-sp").addEventListener("input", function () { speed = +this.value / 10; stage.querySelector("#wv-s").textContent = speed.toFixed(1); });
    stage.querySelector("#wv-play").addEventListener("click", function () { running = !running; this.textContent = running ? "⏸ Pause" : "▶ Play"; });

    note();
    requestAnimationFrame(frame);
  }

  /* ─────────────────────── Circuit ─────────────────────── */
  function circuit(stage) {
    stage.innerHTML =
      '<div class="sim-stage"><svg class="sim-canvas" id="sim-cc" viewBox="0 0 620 300" role="img" aria-label="Circuit diagram"></svg></div>' +
      '<div class="sim-row">' +
        '<button class="sim-btn" id="ck-switch">Switch: OFF</button>' +
        '<span class="sim-seg" role="group" aria-label="Wiring">' +
          '<button data-w="one" aria-pressed="true">1 bulb</button>' +
          '<button data-w="series">2 in series</button>' +
          '<button data-w="parallel">2 in parallel</button>' +
        '</span>' +
      '</div>' +
      '<div class="sim-note" id="ck-note"></div>';

    var svg = stage.querySelector("#sim-cc");
    var on = false, wiring = "one";
    var SVGNS = "http://www.w3.org/2000/svg";

    function el(tag, attrs, text) {
      var e = document.createElementNS(SVGNS, tag);
      for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]);
      if (text != null) e.textContent = text;
      return e;
    }
    function bulb(cx, cy, lit, bright) {
      var g = el("g", {});
      var glow = el("circle", { cx: cx, cy: cy, r: 26, fill: lit ? "rgba(255,210,70," + (0.18 + 0.5 * bright) + ")" : "transparent" });
      var body = el("circle", { cx: cx, cy: cy, r: 16, fill: lit ? "rgba(255,221,87," + (0.45 + 0.55 * bright) + ")" : "#2a3342", stroke: "#8595ad", "stroke-width": 2 });
      var fila = el("path", { d: "M" + (cx - 7) + " " + (cy + 5) + " L" + (cx - 3) + " " + (cy - 6) + " L" + (cx + 3) + " " + (cy + 6) + " L" + (cx + 7) + " " + (cy - 5), fill: "none", stroke: lit ? "#7a3d00" : "#556", "stroke-width": 2, "stroke-linejoin": "round" });
      g.appendChild(glow); g.appendChild(body); g.appendChild(fila);
      return g;
    }

    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var wire = on ? "#39e3c8" : "#55617a", wStroke = on ? 3 : 2.4;

      // Battery (left side)
      svg.appendChild(el("line", { x1: 60, y1: 120, x2: 60, y2: 180, stroke: "#e6edf6", "stroke-width": 6 }));      // long terminal (+)
      svg.appendChild(el("line", { x1: 78, y1: 135, x2: 78, y2: 165, stroke: "#e6edf6", "stroke-width": 3 }));      // short terminal (−)
      svg.appendChild(el("text", { x: 50, y: 112, fill: "#9fb0c8", "font-size": 13 }, "+"));
      svg.appendChild(el("text", { x: 84, y: 112, fill: "#9fb0c8", "font-size": 13 }, "−"));
      svg.appendChild(el("text", { x: 40, y: 205, fill: "#9fb0c8", "font-size": 12 }, "Battery"));

      // Outer wire path: battery+ (60,120) up to top rail, across, down right side, bottom back to battery−
      // Top-left up
      svg.appendChild(el("path", { d: "M60 120 L60 60 L250 60", fill: "none", stroke: wire, "stroke-width": wStroke }));
      // Switch gap at ~250–320 on top rail
      // right of switch to top-right then down
      svg.appendChild(el("path", { d: "M320 60 L560 60 L560 150", fill: "none", stroke: wire, "stroke-width": wStroke }));
      // bottom rail back to battery−
      svg.appendChild(el("path", { d: "M560 240 L560 240 L78 240 L78 165", fill: "none", stroke: wire, "stroke-width": wStroke }));

      // Switch (clickable) — lever closes the 250→320 gap
      var sw = el("g", { style: "cursor:pointer" });
      sw.appendChild(el("circle", { cx: 250, cy: 60, r: 5, fill: "#e6edf6" }));
      sw.appendChild(el("circle", { cx: 320, cy: 60, r: 5, fill: "#e6edf6" }));
      sw.appendChild(el("line", { x1: 250, y1: 60, x2: on ? 320 : 305, y2: on ? 60 : 36, stroke: on ? wire : "#9fb0c8", "stroke-width": 4, "stroke-linecap": "round" }));
      sw.appendChild(el("text", { x: 258, y: 90, fill: "#9fb0c8", "font-size": 12 }, "Switch"));
      sw.addEventListener("click", toggle);
      svg.appendChild(sw);

      // Bulb(s) on the right vertical segment (between y=150 and y=240 at x=560), plus parallel branch
      var bright = 1;
      if (wiring === "one") {
        svg.appendChild(bulb(560, 195, on, 1));
      } else if (wiring === "series") {
        bright = 0.45; // same current path → each bulb dimmer
        svg.appendChild(bulb(560, 150, on, bright));
        svg.appendChild(el("line", { x1: 560, y1: 166, x2: 560, y2: 179, stroke: wire, "stroke-width": wStroke }));
        svg.appendChild(bulb(560, 195, on, bright));
      } else { // parallel — two branches, each full brightness
        // split node at (560,150) into two branches down to (560,240)
        svg.appendChild(el("path", { d: "M560 150 L500 150 L500 240", fill: "none", stroke: wire, "stroke-width": wStroke }));
        svg.appendChild(bulb(500, 195, on, 1));
        svg.appendChild(bulb(560, 195, on, 1));
      }

      // moving-charge dots when the circuit is closed
      if (on) {
        for (var i = 0; i < 5; i++) {
          var d = el("circle", { cx: 0, cy: 0, r: 3.5, fill: "#9ff" });
          var am = el("animateMotion", { dur: (wiring === "series" ? 3.2 : 2.2) + "s", repeatCount: "indefinite", begin: (i * (2.2 / 5)) + "s", rotate: "0",
            path: "M60 120 L60 60 L250 60 L320 60 L560 60 L560 240 L78 240 L78 165" });
          d.appendChild(am); svg.appendChild(d);
        }
      }

      noteText();
      swBtn.textContent = "Switch: " + (on ? "ON" : "OFF");
    }

    function noteText() {
      var n = stage.querySelector("#ck-note");
      if (!on) { n.innerHTML = "The circuit is <b>open</b> &mdash; the switch breaks the loop, so no current flows and the bulb stays dark. Close the switch to complete the loop."; return; }
      if (wiring === "one") n.innerHTML = "<b>Closed loop:</b> current flows from the battery through the bulb and back. One complete path lights the bulb.";
      else if (wiring === "series") n.innerHTML = "<b>Series:</b> both bulbs share one path, so each gets less current and both are <b>dimmer</b>. Remove one and the whole circuit breaks.";
      else n.innerHTML = "<b>Parallel:</b> each bulb has its own path, so both stay <b>full brightness</b>. Remove one and the other keeps glowing.";
    }

    function toggle() { on = !on; draw(); }

    var swBtn = stage.querySelector("#ck-switch");
    swBtn.addEventListener("click", toggle);
    stage.querySelectorAll(".sim-seg button").forEach(function (b) {
      b.addEventListener("click", function () {
        wiring = this.getAttribute("data-w");
        stage.querySelectorAll(".sim-seg button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        draw();
      });
    });

    draw();
  }

  var SIMS = [
    { id: "wave", label: "🌊 Waves", fn: wave },
    { id: "circuit", label: "💡 Circuits", fn: circuit }
  ];

  function render(content) {
    style();
    var active = "wave";
    content.innerHTML =
      '<div class="sim"><h2>🔬 Science Lab</h2>' +
        '<p class="sim-lead">Hands-on simulations for ideas a still picture can’t show. Drag the sliders and flip the switches to see what changes.</p>' +
        '<div class="sim-tabs">' + SIMS.map(function (s) { return '<button class="sim-tab" data-id="' + s.id + '">' + s.label + '</button>'; }).join("") + '</div>' +
        '<div id="sim-stage"></div>' +
      '</div>';
    var stage = content.querySelector("#sim-stage");

    function show(id) {
      active = id;
      content.querySelectorAll(".sim-tab").forEach(function (t) { t.setAttribute("aria-pressed", t.getAttribute("data-id") === id ? "true" : "false"); });
      var s = SIMS.filter(function (x) { return x.id === id; })[0];
      if (s) s.fn(stage);
    }
    content.querySelectorAll(".sim-tab").forEach(function (t) { t.addEventListener("click", function () { show(this.getAttribute("data-id")); }); });
    show(active);
  }

  window.Lab404Sims = { render: render };
})();
