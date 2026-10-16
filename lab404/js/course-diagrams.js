/* course-diagrams.js (I2) — accessible SVG diagrams for high-value course objectives.
   Kept out of courses-data.js to stay maintainable. After the course data loads,
   each diagram is attached to its objective's first deep lesson section (as `visual`
   + `caption`), where course-loader renders it in the Learn panel. */
(function () {
  "use strict";
  var FF = 'font-family="system-ui,Arial,sans-serif"';

  /* ----- reusable builders ----- */
  function atom() {
    return '<svg viewBox="0 0 240 180" role="img" aria-label="An atom: protons and neutrons in the central nucleus with electrons orbiting around it" ' + FF + '>' +
      '<ellipse cx="120" cy="90" rx="100" ry="40" fill="none" stroke="#94a3b8" stroke-width="1.5"/>' +
      '<ellipse cx="120" cy="90" rx="40" ry="80" fill="none" stroke="#94a3b8" stroke-width="1.5"/>' +
      '<circle cx="120" cy="90" r="30" fill="#ef4444"/>' +
      '<text x="120" y="86" text-anchor="middle" font-size="11" fill="#fff">p+ p+</text>' +
      '<text x="120" y="100" text-anchor="middle" font-size="11" fill="#fff">n n</text>' +
      '<circle cx="220" cy="90" r="7" fill="#2563eb"/><circle cx="20" cy="90" r="7" fill="#2563eb"/>' +
      '<circle cx="120" cy="12" r="7" fill="#2563eb"/><circle cx="120" cy="168" r="7" fill="#2563eb"/>' +
      '<text x="12" y="20" font-size="10" fill="#1e293b">electrons (-)</text>' +
      '<text x="96" y="150" font-size="10" fill="#b91c1c">nucleus</text></svg>';
  }
  function pyramid() {
    return '<svg viewBox="0 0 260 170" role="img" aria-label="An energy pyramid: producers at the wide base, then consumers above, with about ten percent of energy passing up each level" ' + FF + '>' +
      /* Okabe-Ito colorblind-safe sequential blue -> orange */
      '<polygon points="20,150 240,150 190,110 70,110" fill="#0072B2"/>' +
      '<polygon points="70,110 190,110 160,75 100,75" fill="#56B4E9"/>' +
      '<polygon points="100,75 160,75 145,45 115,45" fill="#E69F00"/>' +
      '<polygon points="115,45 145,45 130,20" fill="#D55E00"/>' +
      '<text x="130" y="144" text-anchor="middle" font-size="11" fill="#fff">Producers (100%)</text>' +
      '<text x="130" y="100" text-anchor="middle" font-size="10" fill="#063a52">1st consumers (~10%)</text>' +
      '<text x="130" y="67" text-anchor="middle" font-size="9" fill="#4a3300">2nd (~1%)</text></svg>';
  }
  function wave() {
    return '<svg viewBox="0 0 300 150" role="img" aria-label="A wave showing one wavelength measured crest to crest and the amplitude measured from the midline to a crest" ' + FF + '>' +
      '<line x1="10" y1="75" x2="290" y2="75" stroke="#cbd5e1" stroke-width="1"/>' +
      '<path d="M10 75 Q 45 15 80 75 T 150 75 T 220 75 T 290 75" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
      '<line x1="80" y1="30" x2="150" y2="30" stroke="#ef4444" stroke-width="1.5"/>' +
      '<text x="115" y="24" text-anchor="middle" font-size="10" fill="#b91c1c">wavelength</text>' +
      '<line x1="45" y1="75" x2="45" y2="35" stroke="#16a34a" stroke-width="1.5"/>' +
      '<text x="48" y="58" font-size="10" fill="#15803d">amplitude</text>' +
      '<text x="150" y="100" text-anchor="middle" font-size="9" fill="#64748b">speed = frequency &#215; wavelength</text></svg>';
  }
  function circuit() {
    return '<svg viewBox="0 0 240 160" role="img" aria-label="A simple circuit: a battery provides voltage, a resistor opposes the current, and Ohm\'s law says voltage equals current times resistance" ' + FF + '>' +
      '<rect x="40" y="40" width="160" height="80" fill="none" stroke="#1e293b" stroke-width="2"/>' +
      '<line x1="36" y1="70" x2="36" y2="90" stroke="#1e293b" stroke-width="2"/>' +
      '<line x1="44" y1="74" x2="44" y2="86" stroke="#1e293b" stroke-width="3"/>' +
      '<text x="4" y="84" font-size="10" fill="#1e293b">battery</text>' +
      '<rect x="95" y="32" width="50" height="16" fill="#fde68a" stroke="#1e293b" stroke-width="1.5"/>' +
      '<text x="120" y="24" text-anchor="middle" font-size="10" fill="#1e293b">resistor (R)</text>' +
      '<text x="120" y="112" text-anchor="middle" font-size="13" fill="#b91c1c">V = I &#215; R</text>' +
      '<text x="120" y="140" text-anchor="middle" font-size="9" fill="#64748b">voltage = current &#215; resistance</text></svg>';
  }
  function states() {
    var s = '<svg viewBox="0 0 300 130" role="img" aria-label="Particles in a solid are packed in a fixed pattern, in a liquid are close but free to move, and in a gas are far apart" ' + FF + '>';
    s += '<rect x="10" y="20" width="80" height="80" fill="none" stroke="#1e293b" stroke-width="1.5"/>';
    for (var i = 0; i < 9; i++) s += '<circle cx="' + (25 + (i % 3) * 25) + '" cy="' + (35 + Math.floor(i / 3) * 25) + '" r="6" fill="#0072B2"/>';   /* colorblind-safe: blue */
    s += '<text x="50" y="118" text-anchor="middle" font-size="11" fill="#1e293b">Solid</text>';
    s += '<rect x="110" y="20" width="80" height="80" fill="none" stroke="#1e293b" stroke-width="1.5"/>';
    for (i = 0; i < 7; i++) s += '<circle cx="' + (125 + (i % 3) * 22 + (i % 2) * 4) + '" cy="' + (40 + Math.floor(i / 3) * 22) + '" r="6" fill="#E69F00"/>';   /* orange */
    s += '<text x="150" y="118" text-anchor="middle" font-size="11" fill="#1e293b">Liquid</text>';
    s += '<rect x="210" y="20" width="80" height="80" fill="none" stroke="#1e293b" stroke-width="1.5"/>';
    for (i = 0; i < 4; i++) s += '<circle cx="' + (230 + (i % 2) * 40) + '" cy="' + (40 + Math.floor(i / 2) * 35) + '" r="6" fill="#CC79A7"/>';   /* reddish-purple */
    s += '<text x="250" y="118" text-anchor="middle" font-size="11" fill="#1e293b">Gas</text></svg>';
    return s;
  }
  function foodchain() {
    return '<svg viewBox="0 0 320 110" role="img" aria-label="A food chain: the sun gives energy to grass, which is eaten by a rabbit, which is eaten by a fox" ' + FF + '>' +
      '<circle cx="30" cy="55" r="18" fill="#fde047"/><text x="30" y="90" text-anchor="middle" font-size="10" fill="#1e293b">Sun</text>' +
      '<text x="95" y="62" text-anchor="middle" font-size="24">🌿</text><text x="95" y="90" text-anchor="middle" font-size="10" fill="#1e293b">Grass</text>' +
      '<text x="185" y="62" text-anchor="middle" font-size="24">🐇</text><text x="185" y="90" text-anchor="middle" font-size="10" fill="#1e293b">Rabbit</text>' +
      '<text x="280" y="62" text-anchor="middle" font-size="24">🦊</text><text x="280" y="90" text-anchor="middle" font-size="10" fill="#1e293b">Fox</text>' +
      '<text x="56" y="60" font-size="18" fill="#64748b">&#8594;</text><text x="135" y="60" font-size="18" fill="#64748b">&#8594;</text><text x="228" y="60" font-size="18" fill="#64748b">&#8594;</text></svg>';
  }
  function fractions() {
    var s = '<svg viewBox="0 0 300 120" role="img" aria-label="Two equal bars: one split in halves with one half shaded, the other split in fourths with two fourths shaded, showing one half equals two fourths" ' + FF + '>';
    s += '<rect x="20" y="20" width="120" height="30" fill="none" stroke="#1e293b"/><rect x="20" y="20" width="60" height="30" fill="#60a5fa"/>';
    s += '<line x1="80" y1="20" x2="80" y2="50" stroke="#1e293b"/><text x="80" y="68" text-anchor="middle" font-size="13" fill="#1e293b">1/2</text>';
    s += '<text x="155" y="40" font-size="16" fill="#1e293b">=</text>';
    s += '<rect x="175" y="20" width="120" height="30" fill="none" stroke="#1e293b"/><rect x="175" y="20" width="60" height="30" fill="#60a5fa"/>';
    for (var i = 1; i < 4; i++) s += '<line x1="' + (175 + 30 * i) + '" y1="20" x2="' + (175 + 30 * i) + '" y2="50" stroke="#1e293b"/>';
    s += '<text x="235" y="68" text-anchor="middle" font-size="13" fill="#1e293b">2/4</text></svg>';
    return s;
  }
  function rectangle() {
    return '<svg viewBox="0 0 240 150" role="img" aria-label="A rectangle 8 units long and 3 units wide: area is length times width equals 24, perimeter is 22" ' + FF + '>' +
      '<rect x="40" y="40" width="160" height="60" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>' +
      '<text x="120" y="30" text-anchor="middle" font-size="12" fill="#1e293b">length = 8</text>' +
      '<text x="26" y="74" text-anchor="middle" font-size="12" fill="#1e293b" transform="rotate(-90 26 74)">width = 3</text>' +
      '<text x="120" y="75" text-anchor="middle" font-size="12" fill="#1e40af">Area = 8 &#215; 3 = 24</text>' +
      '<text x="120" y="130" text-anchor="middle" font-size="11" fill="#64748b">Perimeter = 8+8+3+3 = 22</text></svg>';
  }
  function angles() {
    return '<svg viewBox="0 0 300 120" role="img" aria-label="Three angles: a right angle of ninety degrees, an acute angle smaller than ninety, and an obtuse angle larger than ninety" ' + FF + '>' +
      '<line x1="20" y1="90" x2="80" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="20" y1="90" x2="20" y2="30" stroke="#1e293b" stroke-width="2"/>' +
      '<rect x="20" y="78" width="12" height="12" fill="none" stroke="#2563eb"/><text x="50" y="112" text-anchor="middle" font-size="10" fill="#1e293b">Right (90&#176;)</text>' +
      '<line x1="120" y1="90" x2="180" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="120" y1="90" x2="165" y2="45" stroke="#1e293b" stroke-width="2"/>' +
      '<text x="150" y="112" text-anchor="middle" font-size="10" fill="#1e293b">Acute (&lt;90&#176;)</text>' +
      '<line x1="220" y1="90" x2="285" y2="90" stroke="#1e293b" stroke-width="2"/><line x1="220" y1="90" x2="235" y2="40" stroke="#1e293b" stroke-width="2"/>' +
      '<text x="255" y="112" text-anchor="middle" font-size="10" fill="#1e293b">Obtuse (&gt;90&#176;)</text></svg>';
  }
  function grid2d() {
    var vals = [[1, 2, 3], [4, 5, 6]];
    var s = '<svg viewBox="0 0 260 150" role="img" aria-label="A grid of 2 rows and 3 columns; the cell at row 1 column 2 holds the value 6, reached with grid bracket 1 bracket 2" ' + FF + '>';
    for (var r = 0; r < 2; r++) for (var c = 0; c < 3; c++) {
      s += '<rect x="' + (40 + c * 60) + '" y="' + (40 + r * 40) + '" width="60" height="40" fill="' + ((r === 1 && c === 2) ? "#fde68a" : "#fff") + '" stroke="#1e293b"/>';
      s += '<text x="' + (70 + c * 60) + '" y="' + (65 + r * 40) + '" text-anchor="middle" font-size="14" fill="#1e293b">' + vals[r][c] + '</text>';
    }
    s += '<text x="22" y="65" text-anchor="middle" font-size="10" fill="#64748b">r0</text><text x="22" y="105" text-anchor="middle" font-size="10" fill="#64748b">r1</text>';
    s += '<text x="70" y="32" text-anchor="middle" font-size="10" fill="#64748b">c0</text><text x="130" y="32" text-anchor="middle" font-size="10" fill="#64748b">c1</text><text x="190" y="32" text-anchor="middle" font-size="10" fill="#64748b">c2</text>';
    s += '<text x="130" y="138" text-anchor="middle" font-size="11" fill="#b45309">grid[1][2] = 6</text></svg>';
    return s;
  }
  function stackqueue() {
    var s = '<svg viewBox="0 0 300 160" role="img" aria-label="A stack is last in first out, removing the top first; a queue is first in first out, removing the front first" ' + FF + '>';
    s += '<text x="70" y="18" text-anchor="middle" font-size="11" fill="#1e293b">Stack (LIFO)</text>';
    var st = ["C (top)", "B", "A"];
    for (var i = 0; i < st.length; i++) s += '<rect x="40" y="' + (30 + i * 26) + '" width="60" height="24" fill="#dbeafe" stroke="#1e293b"/><text x="70" y="' + (46 + i * 26) + '" text-anchor="middle" font-size="11">' + st[i] + '</text>';
    s += '<text x="225" y="18" text-anchor="middle" font-size="11" fill="#1e293b">Queue (FIFO)</text>';
    var q = ["A", "B", "C"];
    for (i = 0; i < q.length; i++) s += '<rect x="' + (160 + i * 42) + '" y="55" width="40" height="30" fill="#dcfce7" stroke="#1e293b"/><text x="' + (180 + i * 42) + '" y="74" text-anchor="middle" font-size="11">' + q[i] + '</text>';
    s += '<text x="180" y="104" text-anchor="middle" font-size="9" fill="#64748b">front</text><text x="286" y="104" text-anchor="middle" font-size="9" fill="#64748b">back</text></svg>';
    return s;
  }
  function binary() {
    var bits = "01000001", s = '<svg viewBox="0 0 300 110" role="img" aria-label="One byte of eight bits, 0 1 0 0 0 0 0 1, which equals 65, the letter A" ' + FF + '>';
    for (var i = 0; i < 8; i++) {
      var b = bits.charAt(i);
      s += '<rect x="' + (20 + i * 34) + '" y="30" width="30" height="34" fill="' + (b === "1" ? "#bfdbfe" : "#fff") + '" stroke="#1e293b"/>';
      s += '<text x="' + (35 + i * 34) + '" y="53" text-anchor="middle" font-size="15" fill="#1e293b">' + b + '</text>';
    }
    s += '<text x="150" y="88" text-anchor="middle" font-size="12" fill="#1e40af">8 bits = 1 byte = 65 = \'A\'</text></svg>';
    return s;
  }
  function righttri() {
    return '<svg viewBox="0 0 220 170" role="img" aria-label="A right triangle with legs 3 and 4 and hypotenuse 5, since 3 squared plus 4 squared equals 5 squared" ' + FF + '>' +
      '<polygon points="40,140 160,140 40,40" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>' +
      '<rect x="40" y="124" width="16" height="16" fill="none" stroke="#2563eb"/>' +
      '<text x="100" y="156" text-anchor="middle" font-size="12" fill="#1e293b">4</text>' +
      '<text x="26" y="94" text-anchor="middle" font-size="12" fill="#1e293b">3</text>' +
      '<text x="108" y="86" text-anchor="middle" font-size="12" fill="#b91c1c" transform="rotate(-40 108 86)">5</text>' +
      '<text x="110" y="24" text-anchor="middle" font-size="12" fill="#1e40af">3&#178; + 4&#178; = 5&#178;</text></svg>';
  }
  function parabola() {
    return '<svg viewBox="0 0 220 160" role="img" aria-label="A U-shaped parabola, the graph of a quadratic, crossing the x-axis at its two roots" ' + FF + '>' +
      '<line x1="20" y1="130" x2="200" y2="130" stroke="#cbd5e1"/><line x1="110" y1="15" x2="110" y2="145" stroke="#cbd5e1"/>' +
      '<path d="M40 25 Q 110 190 180 25" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
      '<circle cx="70" cy="130" r="4" fill="#ef4444"/><circle cx="150" cy="130" r="4" fill="#ef4444"/>' +
      '<text x="70" y="148" text-anchor="middle" font-size="10" fill="#b91c1c">root</text>' +
      '<text x="150" y="148" text-anchor="middle" font-size="10" fill="#b91c1c">root</text>' +
      '<text x="110" y="12" text-anchor="middle" font-size="10" fill="#1e293b">parabola</text></svg>';
  }
  function bell() {
    return '<svg viewBox="0 0 300 150" role="img" aria-label="A bell-shaped normal curve: about 68 percent of values fall within one standard deviation of the mean" ' + FF + '>' +
      '<line x1="20" y1="120" x2="280" y2="120" stroke="#cbd5e1"/>' +
      '<path d="M20 120 C 90 120 110 30 150 30 C 190 30 210 120 280 120" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>' +
      '<line x1="150" y1="30" x2="150" y2="120" stroke="#1e293b" stroke-dasharray="3 3"/>' +
      '<text x="150" y="134" text-anchor="middle" font-size="10" fill="#1e293b">mean</text>' +
      '<line x1="110" y1="120" x2="190" y2="120" stroke="#16a34a" stroke-width="3"/>' +
      '<text x="150" y="110" text-anchor="middle" font-size="10" fill="#15803d">68%</text>' +
      '<text x="150" y="14" text-anchor="middle" font-size="10" fill="#1e293b">normal distribution</text></svg>';
  }

  /* ----- course -> objective -> [svg, caption] ----- */
  var D = {
    "g10-science": { "CH.1": [atom, "Protons (+) and neutrons sit in the nucleus; electrons (-) orbit around it."] },
    "g9-science": { "B.LS2.1": [pyramid, "Only ~10% of energy passes to each higher level, so food chains are short."] },
    "g11-science": { "PH.12": [wave, "A wave's wavelength and amplitude."], "PH.15": [circuit, "Ohm's law: V = I × R."] },
    "g8-science": { "MS-PS1-4": [states, "Particles are packed in a solid, looser in a liquid, far apart in a gas."], "MS-PS4-1": [wave, "Amplitude and wavelength of a wave."] },
    "g5-science": { "5-PS3-1": [foodchain, "Energy flows from the sun through producers to consumers."] },
    "g4-math": {
      "4.NF.1": [fractions, "1/2 and 2/4 shade the same amount — equivalent fractions."],
      "4.MD.3": [rectangle, "Area = length × width; perimeter is the distance around."],
      "4.G.1": [angles, "Right = 90°, acute is smaller, obtuse is larger."]
    },
    "g10-coding": { "10.CS.1": [grid2d, "Row index first, then column: grid[1][2] is 6."] },
    "gC-coding": { "C.CS.2": [stackqueue, "Stack removes the newest first; queue removes the oldest first."] },
    "g11-coding": { "11.CS.2": [binary, "Every letter is stored as bits: 'A' is 01000001 (65)."] },
    "sat-math": { "SM.6": [righttri, "Pythagorean theorem: 3² + 4² = 25 = 5²."], "SM.5": [parabola, "A quadratic graphs as a parabola; roots are where it crosses zero."] },
    "gC-stats": { "STAT.4": [bell, "About 68% of values lie within one standard deviation of the mean."] },
    "g12-apphys": { "APP.5": [circuit, "Ohm's law: V = I × R."], "APP.6": [wave, "Wave speed = frequency × wavelength."] },
    "g12-apbio": { "APB.6": [pyramid, "~10% of energy passes to each higher trophic level."] }
  };

  function apply() {
    var CO = window.LAB404_COURSES;
    if (!CO) return;
    Object.keys(D).forEach(function (cid) {
      var c = CO[cid]; if (!c || !c.objectives) return;
      c.objectives.forEach(function (o) {
        var d = D[cid][o.code];
        if (d && o.deep && o.deep[0] && !o.deep[0].visual) {
          o.deep[0].visual = d[0]();
          if (d[1]) o.deep[0].caption = d[1];
        }
      });
    });
  }

  apply();  /* in case data is already present */
  window.addEventListener("lab404:data-ready", apply);  /* and after lazy load */
})();
