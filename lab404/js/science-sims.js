/* science-sims.js (R12 + R4-10) — interactive science simulations with real
   numbers, units and target challenges, for concepts a static diagram can't show:
     • Waves    — set frequency & wavelength, see speed via v = f × λ (+ a target).
     • Circuits — set the battery voltage, see current & power via Ohm's law across
                  one bulb / series / parallel, with brightness tied to real power.
     • Matter   — a temperature slider melts a solid → liquid → gas.
   Vanilla canvas/SVG, no libraries, no network. Each sim's rAF loop stops itself
   when its element leaves the DOM. window.Lab404Sims.render(el) */
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
      ".sim-note{font-size:.8rem;color:var(--text-muted,#9aa);margin-top:12px;line-height:1.5;background:var(--surface-2,rgba(127,127,127,.08));border:1px solid var(--border,#334);border-radius:9px;padding:10px 12px}" +
      /* R4-10: numeric readouts + challenge banner */
      ".sim-read{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}" +
      ".sim-read .r{flex:1 1 90px;border:1px solid var(--border,#334);border-radius:10px;padding:8px 10px;background:var(--surface-2,rgba(127,127,127,.06))}" +
      ".sim-read .r .k{font-size:.64rem;text-transform:uppercase;letter-spacing:.06em;color:var(--text-faint,#778)}" +
      ".sim-read .r .v{font-size:1.1rem;font-weight:800;color:var(--text,#dfe);font-variant-numeric:tabular-nums}" +
      ".sim-eq{font-family:ui-monospace,Menlo,monospace;font-size:.9rem;color:var(--accent2,#39e3c8);margin-top:10px;text-align:center}" +
      ".sim-chal{display:flex;align-items:center;gap:8px;margin-top:12px;border:1px dashed var(--accent2,#39e3c8);border-radius:10px;padding:9px 12px;font-size:.84rem}" +
      ".sim-chal.hit{border-style:solid;background:rgba(60,190,110,.12);border-color:#3cbe6e}" +
      ".sim-chal .t{flex:1}";
    document.head.appendChild(st);
  }

  /* ───────────────────────── Waves ───────────────────────── */
  function wave(stage) {
    var W = 620, H = 220, PX = 120;   /* pixels per metre on screen */
    var target = (2 + Math.round(Math.random() * 4)) / 1;   /* target speed 2–6 m/s */
    stage.innerHTML =
      '<div class="sim-stage"><canvas class="sim-canvas" id="sim-wc" width="' + W + '" height="' + H + '"></canvas></div>' +
      '<div class="sim-ctrls">' +
        '<div class="sim-ctrl"><label>Frequency &mdash; waves per second <b><span id="wv-f">1.5</span> Hz</b></label><input type="range" id="wv-freq" min="5" max="30" value="15"></div>' +
        '<div class="sim-ctrl"><label>Wavelength &mdash; distance per wave <b><span id="wv-l">1.4</span> m</b></label><input type="range" id="wv-wl" min="5" max="30" value="14"></div>' +
        '<div class="sim-ctrl"><label>Amplitude <b><span id="wv-a">60</span></b></label><input type="range" id="wv-amp" min="10" max="95" value="60"></div>' +
      '</div>' +
      '<div class="sim-read">' +
        '<div class="r"><div class="k">Frequency f</div><div class="v"><span id="wv-rf">1.5</span> Hz</div></div>' +
        '<div class="r"><div class="k">Wavelength &lambda;</div><div class="v"><span id="wv-rl">1.4</span> m</div></div>' +
        '<div class="r"><div class="k">Speed v = f&times;&lambda;</div><div class="v"><span id="wv-rv">2.1</span> m/s</div></div>' +
      '</div>' +
      '<div class="sim-eq" id="wv-eq"></div>' +
      '<div class="sim-chal" id="wv-chal"><span class="t">🎯 Challenge: make the wave travel at <b>' + target.toFixed(1) + ' m/s</b> (adjust f and &lambda; so f&times;&lambda; hits the target).</span><span id="wv-chal-s">—</span></div>' +
      '<div class="sim-row"><button class="sim-btn" id="wv-play">⏸ Pause</button></div>' +
      '<div class="sim-note">A wave’s <b>speed</b> is its frequency times its wavelength: <b>v = f &times; &lambda;</b>. Raise the frequency <i>or</i> stretch the wavelength and the wave moves faster; the amplitude (height) carries more energy but doesn’t change the speed.</div>';

    var cv = stage.querySelector("#sim-wc"), ctx = cv.getContext("2d");
    var f = 1.5, wl = 1.4, amp = 60, phase = 0, running = true, lastT = 0;
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent2").trim() || "#5aa9ff";

    function readouts() {
      var v = f * wl;
      stage.querySelector("#wv-rf").textContent = f.toFixed(1);
      stage.querySelector("#wv-rl").textContent = wl.toFixed(1);
      stage.querySelector("#wv-rv").textContent = v.toFixed(1);
      stage.querySelector("#wv-eq").innerHTML = "v = " + f.toFixed(1) + " Hz &times; " + wl.toFixed(1) + " m = <b>" + v.toFixed(1) + " m/s</b>";
      var chal = stage.querySelector("#wv-chal"), hit = Math.abs(v - target) <= 0.25;
      chal.classList.toggle("hit", hit);
      stage.querySelector("#wv-chal-s").textContent = hit ? "✓ got it!" : (v < target ? "▲ faster" : "▼ slower");
    }

    function frame(ts) {
      if (!document.body.contains(cv)) return;
      var dt = lastT ? (ts - lastT) / 1000 : 0; lastT = ts;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(127,140,170,.18)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
      var lambdaPx = wl * PX;
      ctx.strokeStyle = accent; ctx.lineWidth = 2.5; ctx.beginPath();
      for (var x = 0; x <= W; x++) {
        var y = H / 2 - amp * Math.sin(2 * Math.PI * (x / lambdaPx) - phase);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      if (running) phase += 2 * Math.PI * f * dt;   /* advance by f cycles/sec */
      requestAnimationFrame(frame);
    }

    stage.querySelector("#wv-freq").addEventListener("input", function () { f = +this.value / 10; stage.querySelector("#wv-f").textContent = f.toFixed(1); readouts(); });
    stage.querySelector("#wv-wl").addEventListener("input", function () { wl = +this.value / 10; stage.querySelector("#wv-l").textContent = wl.toFixed(1); readouts(); });
    stage.querySelector("#wv-amp").addEventListener("input", function () { amp = +this.value; stage.querySelector("#wv-a").textContent = amp; });
    stage.querySelector("#wv-play").addEventListener("click", function () { running = !running; this.textContent = running ? "⏸ Pause" : "▶ Play"; });
    readouts();
    requestAnimationFrame(frame);
  }

  /* ─────────────────────── Circuits ─────────────────────── */
  function circuit(stage) {
    var R = 6;   /* ohms per bulb (fixed) */
    stage.innerHTML =
      '<div class="sim-stage"><svg class="sim-canvas" id="sim-cc" viewBox="0 0 620 300" role="img" aria-label="Circuit diagram"></svg></div>' +
      '<div class="sim-ctrls">' +
        '<div class="sim-ctrl"><label>Battery voltage <b><span id="ck-vv">6</span> V</b></label><input type="range" id="ck-volt" min="15" max="120" value="60"></div>' +
      '</div>' +
      '<div class="sim-row">' +
        '<button class="sim-btn" id="ck-switch">Switch: OFF</button>' +
        '<span class="sim-seg" role="group" aria-label="Wiring">' +
          '<button data-w="one" aria-pressed="true">1 bulb</button>' +
          '<button data-w="series">2 in series</button>' +
          '<button data-w="parallel">2 in parallel</button>' +
        '</span>' +
      '</div>' +
      '<div class="sim-read">' +
        '<div class="r"><div class="k">Voltage V</div><div class="v"><span id="ck-rv">6.0</span> V</div></div>' +
        '<div class="r"><div class="k">Current I</div><div class="v"><span id="ck-ri">0.0</span> A</div></div>' +
        '<div class="r"><div class="k">Power / bulb</div><div class="v"><span id="ck-rp">0.0</span> W</div></div>' +
      '</div>' +
      '<div class="sim-eq" id="ck-eq"></div>' +
      '<div class="sim-note" id="ck-note"></div>';

    var svg = stage.querySelector("#sim-cc");
    var on = false, wiring = "one", V = 6;
    var SVGNS = "http://www.w3.org/2000/svg";
    function el(tag, attrs, text) { var e = document.createElementNS(SVGNS, tag); for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; }
    function bulb(cx, cy, lit, bright) {
      var g = el("g", {});
      g.appendChild(el("circle", { cx: cx, cy: cy, r: 26, fill: lit ? "rgba(255,210,70," + (0.1 + 0.5 * bright) + ")" : "transparent" }));
      g.appendChild(el("circle", { cx: cx, cy: cy, r: 16, fill: lit ? "rgba(255,221,87," + (0.35 + 0.6 * bright) + ")" : "#2a3342", stroke: "#8595ad", "stroke-width": 2 }));
      g.appendChild(el("path", { d: "M" + (cx - 7) + " " + (cy + 5) + " L" + (cx - 3) + " " + (cy - 6) + " L" + (cx + 3) + " " + (cy + 6) + " L" + (cx + 7) + " " + (cy - 5), fill: "none", stroke: lit ? "#7a3d00" : "#556", "stroke-width": 2, "stroke-linejoin": "round" }));
      return g;
    }

    /* electrical model → returns { I (total), Pbulb, Pmax, bright } */
    function model() {
      if (!on) return { I: 0, Pbulb: 0, bright: 0 };
      var Pmax = (12 * 12) / R;   /* brightness reference at max voltage, one bulb */
      if (wiring === "one")      { var I = V / R;      return { I: I, Pbulb: V * V / R,          bright: Math.min(1, (V * V / R) / Pmax) }; }
      if (wiring === "series")   { var Is = V / (2 * R); var Pb = Is * Is * R; return { I: Is, Pbulb: Pb, bright: Math.min(1, Pb / Pmax) }; }
      var Ip = V / R; var Pp = V * V / R; return { I: 2 * Ip, Pbulb: Pp, bright: Math.min(1, Pp / Pmax) };  /* parallel: total current = 2×branch */
    }

    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var m = model(), wire = on ? "#39e3c8" : "#55617a", wStroke = on ? 3 : 2.4, b = m.bright;
      svg.appendChild(el("line", { x1: 60, y1: 120, x2: 60, y2: 180, stroke: "#e6edf6", "stroke-width": 6 }));
      svg.appendChild(el("line", { x1: 78, y1: 135, x2: 78, y2: 165, stroke: "#e6edf6", "stroke-width": 3 }));
      svg.appendChild(el("text", { x: 36, y: 205, fill: "#9fb0c8", "font-size": 12 }, V.toFixed(1) + " V"));
      svg.appendChild(el("path", { d: "M60 120 L60 60 L250 60", fill: "none", stroke: wire, "stroke-width": wStroke }));
      svg.appendChild(el("path", { d: "M320 60 L560 60 L560 150", fill: "none", stroke: wire, "stroke-width": wStroke }));
      svg.appendChild(el("path", { d: "M560 240 L78 240 L78 165", fill: "none", stroke: wire, "stroke-width": wStroke }));
      var sw = el("g", { style: "cursor:pointer" });
      sw.appendChild(el("circle", { cx: 250, cy: 60, r: 5, fill: "#e6edf6" }));
      sw.appendChild(el("circle", { cx: 320, cy: 60, r: 5, fill: "#e6edf6" }));
      sw.appendChild(el("line", { x1: 250, y1: 60, x2: on ? 320 : 305, y2: on ? 60 : 36, stroke: on ? wire : "#9fb0c8", "stroke-width": 4, "stroke-linecap": "round" }));
      sw.appendChild(el("text", { x: 258, y: 90, fill: "#9fb0c8", "font-size": 12 }, "Switch"));
      sw.addEventListener("click", toggle); svg.appendChild(sw);

      if (wiring === "one") svg.appendChild(bulb(560, 195, on, b));
      else if (wiring === "series") {
        svg.appendChild(bulb(560, 150, on, b));
        svg.appendChild(el("line", { x1: 560, y1: 166, x2: 560, y2: 179, stroke: wire, "stroke-width": wStroke }));
        svg.appendChild(bulb(560, 195, on, b));
      } else {
        svg.appendChild(el("path", { d: "M560 150 L500 150 L500 240", fill: "none", stroke: wire, "stroke-width": wStroke }));
        svg.appendChild(bulb(500, 195, on, b));
        svg.appendChild(bulb(560, 195, on, b));
      }
      if (on) for (var i = 0; i < 5; i++) {
        var d = el("circle", { cx: 0, cy: 0, r: 3.5, fill: "#9ff" });
        d.appendChild(el("animateMotion", { dur: (wiring === "series" ? 3.2 : 2.2) + "s", repeatCount: "indefinite", begin: (i * 0.44) + "s", path: "M60 120 L60 60 L250 60 L320 60 L560 60 L560 240 L78 240 L78 165" }));
        svg.appendChild(d);
      }
      stage.querySelector("#ck-rv").textContent = V.toFixed(1);
      stage.querySelector("#ck-ri").textContent = m.I.toFixed(2);
      stage.querySelector("#ck-rp").textContent = m.Pbulb.toFixed(1);
      stage.querySelector("#ck-eq").innerHTML = on ? ("I = V / R = " + V.toFixed(1) + " / " + (wiring === "series" ? (2 * R) : R) + " &Omega; = <b>" + (wiring === "series" ? (V / (2 * R)) : (V / R)).toFixed(2) + " A</b> per bulb") : "Close the switch to drive a current.";
      stage.querySelector("#ck-switch").textContent = "Switch: " + (on ? "ON" : "OFF");
      noteText();
    }
    function noteText() {
      var n = stage.querySelector("#ck-note");
      if (!on) { n.innerHTML = "The circuit is <b>open</b> — no current, bulb dark. Each bulb is " + R + " &Omega;. Close the switch and raise the voltage to see Ohm’s law, <b>I = V / R</b>."; return; }
      if (wiring === "one") n.innerHTML = "<b>One bulb:</b> current I = V / R. More voltage → more current → brighter (power P = V&sup2;/R).";
      else if (wiring === "series") n.innerHTML = "<b>Series:</b> resistance doubles (2R), so current halves and each bulb is <b>dimmer</b>. Remove one and both go dark.";
      else n.innerHTML = "<b>Parallel:</b> each bulb gets the full voltage, so both stay <b>bright</b> and the battery supplies double the current.";
    }
    function toggle() { on = !on; draw(); }

    stage.querySelector("#ck-volt").addEventListener("input", function () { V = +this.value / 10; stage.querySelector("#ck-vv").textContent = V.toFixed(1); draw(); });
    stage.querySelector("#ck-switch").addEventListener("click", toggle);
    stage.querySelectorAll(".sim-seg button").forEach(function (b) {
      b.addEventListener("click", function () { wiring = this.getAttribute("data-w"); stage.querySelectorAll(".sim-seg button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); draw(); });
    });
    draw();
  }

  /* ─────────────────────── States of matter ─────────────────────── */
  function matter(stage) {
    var W = 620, H = 240, N = 64;
    stage.innerHTML =
      '<div class="sim-stage"><canvas class="sim-canvas" id="sim-mc" width="' + W + '" height="' + H + '"></canvas></div>' +
      '<div class="sim-ctrls"><div class="sim-ctrl"><label>Temperature <b><span id="mt-tv">20</span> units</b></label><input type="range" id="mt-temp" min="0" max="100" value="20"></div></div>' +
      '<div class="sim-read"><div class="r"><div class="k">State</div><div class="v" id="mt-state">Solid</div></div>' +
        '<div class="r"><div class="k">Particle energy</div><div class="v"><span id="mt-e">low</span></div></div></div>' +
      '<div class="sim-note">Heating adds energy, so particles move faster. A <b>solid</b> holds a fixed shape (particles vibrate in place), a <b>liquid</b> flows (they slip past each other), and a <b>gas</b> fills the whole space (they fly freely).</div>';
    var cv = stage.querySelector("#sim-mc"), ctx = cv.getContext("2d");
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent2").trim() || "#5aa9ff";
    var temp = 20;
    /* lattice home positions (8×8) for the solid state */
    var cols = 8, rows = 8, pad = 40, gx = (W - pad * 2) / (cols - 1), gy = (H - pad * 2) / (rows - 1);
    var p = [];
    for (var i = 0; i < N; i++) {
      var hx = pad + (i % cols) * gx, hy = pad + Math.floor(i / cols) * gy;
      p.push({ x: hx, y: hy, hx: hx, hy: hy, vx: (Math.random() - 0.5), vy: (Math.random() - 0.5) });
    }
    function label() {
      var st = temp < 33 ? "Solid" : temp < 67 ? "Liquid" : "Gas";
      stage.querySelector("#mt-state").textContent = st;
      stage.querySelector("#mt-e").textContent = temp < 33 ? "low" : temp < 67 ? "medium" : "high";
    }
    function frame() {
      if (!document.body.contains(cv)) return;
      ctx.clearRect(0, 0, W, H);
      var speed = temp / 100, spring = temp < 33 ? 0.08 * (1 - temp / 33) + 0.02 : 0;  /* strong pull when cold */
      for (var i = 0; i < N; i++) {
        var q = p[i];
        q.vx += (Math.random() - 0.5) * speed * 1.2;
        q.vy += (Math.random() - 0.5) * speed * 1.2;
        if (spring > 0) { q.vx += (q.hx - q.x) * spring; q.vy += (q.hy - q.y) * spring; }
        q.vx *= 0.92; q.vy *= 0.92;
        q.x += q.vx * (1 + speed * 4); q.y += q.vy * (1 + speed * 4);
        if (q.x < 6) { q.x = 6; q.vx = Math.abs(q.vx); } if (q.x > W - 6) { q.x = W - 6; q.vx = -Math.abs(q.vx); }
        if (q.y < 6) { q.y = 6; q.vy = Math.abs(q.vy); } if (q.y > H - 6) { q.y = H - 6; q.vy = -Math.abs(q.vy); }
        ctx.beginPath(); ctx.arc(q.x, q.y, 5, 0, Math.PI * 2); ctx.fillStyle = accent; ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    stage.querySelector("#mt-temp").addEventListener("input", function () { temp = +this.value; stage.querySelector("#mt-tv").textContent = temp; label(); });
    label();
    requestAnimationFrame(frame);
  }

  /* ─────────────────────── Forces (F = m·a) ─────────────────────── */
  function forces(stage) {
    var W = 620, H = 220;
    stage.innerHTML =
      '<div class="sim-stage"><canvas class="sim-canvas" id="sim-fc" width="' + W + '" height="' + H + '"></canvas></div>' +
      '<div class="sim-ctrls">' +
        '<div class="sim-ctrl"><label>Push force <b><span id="fo-f">10</span> N</b></label><input type="range" id="fo-force" min="0" max="20" value="10"></div>' +
        '<div class="sim-ctrl"><label>Mass of box <b><span id="fo-m">2</span> kg</b></label><input type="range" id="fo-mass" min="1" max="10" value="2"></div>' +
      '</div>' +
      '<div class="sim-row"><span class="sim-seg"><button id="fo-fric" aria-pressed="false">Friction: off</button></span>' +
        '<button class="sim-btn ghost" id="fo-reset">↺ Reset box</button></div>' +
      '<div class="sim-read">' +
        '<div class="r"><div class="k">Force F</div><div class="v"><span id="fo-rf">10</span> N</div></div>' +
        '<div class="r"><div class="k">Mass m</div><div class="v"><span id="fo-rm">2</span> kg</div></div>' +
        '<div class="r"><div class="k">Acceleration a = F/m</div><div class="v"><span id="fo-ra">5.0</span> m/s²</div></div>' +
      '</div>' +
      '<div class="sim-eq" id="fo-eq"></div>' +
      '<div class="sim-note">Newton’s second law: <b>a = F / m</b>. The same push accelerates a light box more than a heavy one. Friction pushes back, so it lowers the net force — and if the push is smaller than friction, the box doesn’t move at all.</div>';
    var cv = stage.querySelector("#sim-fc"), ctx = cv.getContext("2d");
    var F = 10, m = 2, fric = false, x = 60, v = 0, lastT = 0;
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent2").trim() || "#5aa9ff";
    function netForce() { var f = fric ? 4 : 0; return Math.max(0, F) - (v > 0.01 || F > f ? f : 0); }
    function readouts() {
      var a = (F - (fric ? 4 : 0)) / m, aEff = Math.max(0, a);
      stage.querySelector("#fo-rf").textContent = F;
      stage.querySelector("#fo-rm").textContent = m;
      stage.querySelector("#fo-ra").textContent = aEff.toFixed(1);
      stage.querySelector("#fo-eq").innerHTML = "a = " + (fric ? "(" + F + " − 4) N" : F + " N") + " / " + m + " kg = <b>" + aEff.toFixed(1) + " m/s²</b>" + (a <= 0 ? " — too little force to overcome friction" : "");
    }
    function frame(ts) {
      if (!document.body.contains(cv)) return;
      var dt = lastT ? Math.min(0.05, (ts - lastT) / 1000) : 0; lastT = ts;
      var a = netForce() / m;
      v += a * dt * 40; v *= 0.999; x += v * dt;
      if (x > W - 56) { x = W - 56; v = 0; } if (x < 60) { x = 60; v = 0; }
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(127,140,170,.3)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, H - 40); ctx.lineTo(W, H - 40); ctx.stroke();
      if (fric) { ctx.fillStyle = "rgba(230,159,0,.25)"; for (var i = 0; i < W; i += 14) ctx.fillRect(i, H - 40, 7, 6); }
      var sz = 26 + m * 3;
      ctx.fillStyle = accent; ctx.fillRect(x, H - 40 - sz, sz, sz);
      ctx.fillStyle = "#04231f"; ctx.font = "bold 12px system-ui"; ctx.fillText(m + "kg", x + 4, H - 40 - sz / 2 + 4);
      if (F > 0) { ctx.strokeStyle = "#e0603a"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 4, H - 40 - sz / 2); ctx.lineTo(x - 4 - F * 1.5, H - 40 - sz / 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x - 4, H - 40 - sz / 2); ctx.lineTo(x - 10, H - 44 - sz / 2); ctx.lineTo(x - 10, H - 36 - sz / 2); ctx.closePath(); ctx.fillStyle = "#e0603a"; ctx.fill(); }
      requestAnimationFrame(frame);
    }
    stage.querySelector("#fo-force").addEventListener("input", function () { F = +this.value; stage.querySelector("#fo-f").textContent = F; readouts(); });
    stage.querySelector("#fo-mass").addEventListener("input", function () { m = +this.value; stage.querySelector("#fo-m").textContent = m; readouts(); });
    stage.querySelector("#fo-fric").addEventListener("click", function () { fric = !fric; this.setAttribute("aria-pressed", fric ? "true" : "false"); this.textContent = "Friction: " + (fric ? "on" : "off"); readouts(); });
    stage.querySelector("#fo-reset").addEventListener("click", function () { x = 60; v = 0; });
    readouts(); requestAnimationFrame(frame);
  }

  /* ─────────────────────── Solar system ─────────────────────── */
  function solar(stage) {
    var W = 620, H = 300;
    stage.innerHTML =
      '<div class="sim-stage"><canvas class="sim-canvas" id="sim-sc" width="' + W + '" height="' + H + '"></canvas></div>' +
      '<div class="sim-ctrls"><div class="sim-ctrl"><label>Speed <b><span id="so-sv">1.0</span>×</b></label><input type="range" id="so-speed" min="0" max="40" value="10"></div></div>' +
      '<div class="sim-row"><span class="sim-seg"><button id="so-orbits" aria-pressed="true">Orbit paths: on</button></span></div>' +
      '<div class="sim-note">Planets closer to the Sun travel a shorter path <b>and</b> move faster, so they finish a “year” much sooner. Mercury rounds the Sun in 88 days; Neptune takes 165 Earth-years. Watch the inner planets lap the outer ones.</div>';
    var cv = stage.querySelector("#sim-sc"), ctx = cv.getContext("2d");
    var cx = W / 2, cy = H / 2, speed = 1, showOrbits = true, lastT = 0;
    /* name, orbit radius (px), relative angular speed, colour, size */
    var planets = [
      { n: "Mercury", r: 42, w: 1.6, c: "#b7a08a", s: 3 },
      { n: "Venus", r: 66, w: 1.15, c: "#e0b25a", s: 5 },
      { n: "Earth", r: 92, w: 1.0, c: "#5aa9ff", s: 5 },
      { n: "Mars", r: 118, w: 0.8, c: "#d1603a", s: 4 },
      { n: "Jupiter", r: 158, w: 0.44, c: "#d9a66b", s: 11 },
      { n: "Saturn", r: 196, w: 0.32, c: "#e6cf94", s: 9 },
      { n: "Neptune", r: 230, w: 0.18, c: "#4a7fe0", s: 7 }
    ];
    var ang = planets.map(function () { return Math.random() * Math.PI * 2; });
    function frame(ts) {
      if (!document.body.contains(cv)) return;
      var dt = lastT ? (ts - lastT) / 1000 : 0; lastT = ts;
      ctx.clearRect(0, 0, W, H);
      if (showOrbits) { ctx.strokeStyle = "rgba(127,140,170,.18)"; ctx.lineWidth = 1; planets.forEach(function (p) { ctx.beginPath(); ctx.arc(cx, cy, p.r, 0, Math.PI * 2); ctx.stroke(); }); }
      var g = ctx.createRadialGradient(cx, cy, 2, cx, cy, 16); g.addColorStop(0, "#ffe680"); g.addColorStop(1, "#e8a33c");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, 13, 0, Math.PI * 2); ctx.fill();
      planets.forEach(function (p, i) {
        ang[i] += p.w * speed * dt * 0.6;
        var px = cx + Math.cos(ang[i]) * p.r, py = cy + Math.sin(ang[i]) * p.r;
        ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(px, py, p.s, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(frame);
    }
    stage.querySelector("#so-speed").addEventListener("input", function () { speed = +this.value / 10; stage.querySelector("#so-sv").textContent = speed.toFixed(1); });
    stage.querySelector("#so-orbits").addEventListener("click", function () { showOrbits = !showOrbits; this.setAttribute("aria-pressed", showOrbits ? "true" : "false"); this.textContent = "Orbit paths: " + (showOrbits ? "on" : "off"); });
    requestAnimationFrame(frame);
  }

  var SIMS = [
    { id: "wave", label: "🌊 Waves", fn: wave },
    { id: "circuit", label: "💡 Circuits", fn: circuit },
    { id: "forces", label: "📦 Forces", fn: forces },
    { id: "matter", label: "🧊 States of Matter", fn: matter },
    { id: "solar", label: "🪐 Solar System", fn: solar }
  ];

  function render(content, startId) {
    style();
    var active = (startId && SIMS.some(function (s) { return s.id === startId; })) ? startId : "wave";
    content.innerHTML =
      '<div class="sim"><h2>🔬 Science Lab</h2>' +
        '<p class="sim-lead">Hands-on simulations for ideas a still picture can’t show. Drag the sliders and watch the numbers — each one uses the real formula.</p>' +
        '<div class="sim-tabs">' + SIMS.map(function (s) { return '<button class="sim-tab" data-id="' + s.id + '">' + s.label + '</button>'; }).join("") + '</div>' +
        '<div id="sim-stage"></div>' +
      '</div>';
    var stage = content.querySelector("#sim-stage");
    function a11y() {   /* R5-B: labels aren't tied to the range inputs (siblings), and some canvases lack a name */
      stage.querySelectorAll(".sim-ctrl").forEach(function (c) {
        var l = c.querySelector("label"), i = c.querySelector("input");
        if (l && i && !i.getAttribute("aria-label")) i.setAttribute("aria-label", l.textContent.replace(/\s+/g, " ").trim());
      });
      stage.querySelectorAll("canvas:not([aria-label])").forEach(function (cv) { cv.setAttribute("role", "img"); cv.setAttribute("aria-label", "Interactive simulation"); });
    }
    function show(id) {
      active = id;
      content.querySelectorAll(".sim-tab").forEach(function (t) { t.setAttribute("aria-pressed", t.getAttribute("data-id") === id ? "true" : "false"); });
      var s = SIMS.filter(function (x) { return x.id === id; })[0];
      if (s) { s.fn(stage); a11y(); }
    }
    content.querySelectorAll(".sim-tab").forEach(function (t) { t.addEventListener("click", function () { show(this.getAttribute("data-id")); }); });
    show(active);
  }

  window.Lab404Sims = { render: render };
})();
