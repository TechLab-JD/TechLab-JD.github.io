/* kcoding.js (R5-C) — "Coding Play" for K-2, a picture/audio-first way to learn
   the first idea of computer science: a program is a SEQUENCE of steps you plan
   ahead, then run. No reading required — a pre-reader taps big arrow buttons to
   build a path, presses Play, and watches the turtle follow the steps to the
   star. Audio narrates everything via the Web-Speech read-aloud engine. This is
   deliberately NOT the multiple-choice mastery-course format (wrong for this age).
   Local progress in lab404.kcoding. window.Lab404KCoding.render(el) */
(function () {
  "use strict";

  var KEY = "lab404.kcoding";
  /* Each level: grid size, turtle start [row,col], star goal, optional walls. */
  var LEVELS = [
    { size: 4, start: [3, 0], goal: [3, 3], walls: [] },
    { size: 4, start: [3, 0], goal: [0, 0], walls: [] },
    { size: 4, start: [3, 0], goal: [0, 3], walls: [] },
    { size: 5, start: [4, 0], goal: [0, 4], walls: [[2, 2]] },
    { size: 5, start: [4, 2], goal: [0, 2], walls: [[2, 1], [2, 3]] }
  ];
  var MOVES = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
  var ARROWS = [["up", "⬆️", "up"], ["left", "⬅️", "left"], ["right", "➡️", "right"], ["down", "⬇️", "down"]];

  function done() { try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; } }
  function markDone(i) { try { var d = done(); if (d.indexOf(i) < 0) { d.push(i); localStorage.setItem(KEY, JSON.stringify(d)); } } catch (e) {} }
  function speak(t) { try { if (window.ReadAloud && ReadAloud.supported && ReadAloud.supported()) ReadAloud.speak(t); } catch (e) {} }

  function style() {
    if (document.getElementById("kc-style")) return;
    var s = document.createElement("style"); s.id = "kc-style";
    s.textContent = [
      ".kc{padding:14px 16px;max-width:560px;margin:0 auto;box-sizing:border-box;text-align:center;font-family:system-ui,sans-serif}",
      ".kc h2{font-size:1.2rem;margin:0 0 2px;color:var(--accent2,#39e3c8)}",
      ".kc .kc-say{color:var(--text,#dfe);font-size:1rem;margin:0 0 12px;font-weight:700}",
      ".kc-levels{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:12px}",
      ".kc-lv{width:34px;height:34px;border-radius:10px;border:2px solid var(--border,#334);background:transparent;color:var(--text,#dfe);font:inherit;font-weight:800;cursor:pointer}",
      ".kc-lv[aria-pressed=true]{background:var(--accent2,#39e3c8);color:#05211c;border-color:var(--accent2,#39e3c8)}",
      ".kc-lv.done{border-color:#3cbe6e}",
      ".kc-grid{display:grid;gap:5px;justify-content:center;margin:0 auto 12px;width:max-content}",
      ".kc-cell{width:58px;height:58px;border-radius:12px;background:var(--surface-2,rgba(127,140,170,.12));display:flex;align-items:center;justify-content:center;font-size:2rem}",
      ".kc-cell.goal{background:rgba(255,210,70,.18)}",
      ".kc-cell.wall{background:#3a2420}",
      ".kc-cell .tt{transition:transform .25s}",
      ".kc-seq{min-height:40px;display:flex;gap:5px;justify-content:center;flex-wrap:wrap;align-items:center;border:1px dashed var(--border,#334);border-radius:12px;padding:8px;margin-bottom:12px}",
      ".kc-seq .ph{color:var(--text-muted,#9aa);font-size:.82rem}",
      ".kc-step{font-size:1.4rem}",
      ".kc-arrows{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:320px;margin:0 auto 12px}",
      ".kc-arrow{font-size:1.8rem;padding:12px 0;border:2px solid var(--border,#334);border-radius:14px;background:var(--surface,#10171f);cursor:pointer}",
      ".kc-arrow:hover,.kc-arrow:focus{border-color:var(--accent2,#39e3c8);outline:none}",
      ".kc-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}",
      ".kc-btn{border:0;border-radius:12px;padding:12px 20px;font:inherit;font-weight:800;font-size:1rem;cursor:pointer}",
      ".kc-play{background:#3cbe6e;color:#04231f}.kc-clear{background:var(--surface-2,rgba(127,127,127,.15));color:var(--text,#dfe)}",
      ".kc-win{font-size:1.1rem;font-weight:800;color:#3cbe6e;margin-top:10px;min-height:1.4em}",
      ".kc-stars{font-size:1.6rem}"
    ].join("");
    document.head.appendChild(s);
  }

  function render(content) {
    style();
    var cur = 0, seq = [], running = false;

    function render1() {
      var lv = LEVELS[cur], pos = lv.start.slice();
      content.innerHTML =
        '<div class="kc"><h2>🐢 Coding Play</h2>' +
          '<p class="kc-say" id="kc-say">Tap the arrows to help the turtle reach the star. Then press Play!</p>' +
          '<div class="kc-levels">' + LEVELS.map(function (_, i) {
            return '<button class="kc-lv' + (done().indexOf(i) >= 0 ? " done" : "") + '" data-lv="' + i + '" aria-label="Puzzle ' + (i + 1) + '" aria-pressed="' + (i === cur) + '">' + (i + 1) + '</button>';
          }).join("") + '</div>' +
          '<div class="kc-grid" id="kc-grid" role="img" aria-label="Turtle maze"></div>' +
          '<div class="kc-seq" id="kc-seq"><span class="ph">Your steps show up here</span></div>' +
          '<div class="kc-arrows">' + ARROWS.map(function (a) {
            return '<button class="kc-arrow" data-move="' + a[0] + '" aria-label="Add a step: move ' + a[2] + '">' + a[1] + '</button>';
          }).join("") + '</div>' +
          '<div class="kc-row"><button class="kc-btn kc-play" id="kc-play">▶️ Play</button>' +
            '<button class="kc-btn kc-clear" id="kc-clear">🗑️ Clear</button></div>' +
          '<div class="kc-win" id="kc-win"></div>' +
        '</div>';
      drawGrid(pos);
      drawSeq();

      content.querySelectorAll("[data-lv]").forEach(function (b) {
        b.addEventListener("click", function () { if (running) return; cur = +this.getAttribute("data-lv"); seq = []; render1(); });
      });
      content.querySelectorAll("[data-move]").forEach(function (b) {
        b.addEventListener("click", function () { if (running) return; seq.push(this.getAttribute("data-move")); drawSeq(); });
      });
      content.querySelector("#kc-clear").addEventListener("click", function () { if (running) return; seq = []; drawSeq(); drawGrid(LEVELS[cur].start.slice()); content.querySelector("#kc-win").textContent = ""; });
      content.querySelector("#kc-play").addEventListener("click", play);
      setTimeout(function () { speak("Tap the arrows to help the turtle reach the star. Then press play."); }, 250);
    }

    function drawGrid(pos) {
      var lv = LEVELS[cur], g = content.querySelector("#kc-grid");
      g.style.gridTemplateColumns = "repeat(" + lv.size + ", 58px)";
      var html = "";
      for (var r = 0; r < lv.size; r++) for (var c = 0; c < lv.size; c++) {
        var isGoal = lv.goal[0] === r && lv.goal[1] === c;
        var isWall = lv.walls.some(function (w) { return w[0] === r && w[1] === c; });
        var isTurtle = pos[0] === r && pos[1] === c;
        html += '<div class="kc-cell' + (isGoal ? " goal" : "") + (isWall ? " wall" : "") + '">' +
          (isTurtle ? '<span class="tt">🐢</span>' : isGoal ? "⭐" : isWall ? "🧱" : "") + '</div>';
      }
      g.innerHTML = html;
    }

    function drawSeq() {
      var el = content.querySelector("#kc-seq");
      if (!seq.length) { el.innerHTML = '<span class="ph">Your steps show up here</span>'; return; }
      el.innerHTML = seq.map(function (m) { return '<span class="kc-step">' + ({ up: "⬆️", down: "⬇️", left: "⬅️", right: "➡️" })[m] + '</span>'; }).join("");
    }

    function play() {
      if (running || !seq.length) { if (!seq.length) speak("First tap some arrows to make a plan."); return; }
      running = true;
      var lv = LEVELS[cur], pos = lv.start.slice(), i = 0;
      content.querySelector("#kc-win").textContent = "";
      function step() {
        if (i >= seq.length) { finish(pos); return; }
        var mv = MOVES[seq[i]], nr = pos[0] + mv[0], nc = pos[1] + mv[1];
        var offGrid = nr < 0 || nc < 0 || nr >= lv.size || nc >= lv.size;
        var hitWall = lv.walls.some(function (w) { return w[0] === nr && w[1] === nc; });
        if (!offGrid && !hitWall) { pos = [nr, nc]; drawGrid(pos); }
        i++;
        setTimeout(step, 450);
      }
      function finish(p) {
        running = false;
        if (p[0] === lv.goal[0] && p[1] === lv.goal[1]) {
          markDone(cur);
          content.querySelector("#kc-win").innerHTML = '<div class="kc-stars">⭐⭐⭐</div>You did it!';
          content.querySelector("#kc-say").textContent = "Great job! The turtle reached the star! 🎉";
          speak("Hooray! You did it! The turtle reached the star!");
          var next = cur + 1;
          if (next < LEVELS.length) setTimeout(function () { speak("Let's try the next one."); cur = next; seq = []; render1(); }, 2600);
        } else {
          content.querySelector("#kc-win").textContent = "So close! Try changing your steps.";
          speak("So close! Try changing your steps and play again.");
        }
      }
      step();
    }

    render1();
  }

  window.Lab404KCoding = { render: render };
})();
