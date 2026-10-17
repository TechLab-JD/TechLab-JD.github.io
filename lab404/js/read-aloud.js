/* read-aloud.js — Study Hub listen-to-the-lesson layer.
   Uses the browser's built-in Web Speech API (SpeechSynthesis): no audio files,
   no server, works offline, free, covers every lesson instantly. A 🔊 Listen
   button reads the lesson text aloud; tap again to stop. Falls back to hidden if
   the browser has no speech support.
   window.ReadAloud.toggle(text, buttonEl) | .stop() | .supported() */
window.ReadAloud = (function () {
  var synth = window.speechSynthesis || null;
  var speaking = false, curBtn = null, chunks = [], idx = 0, voice = null, keepAlive = null, curLang = "";
  var rate = 1;  /* R4: adjustable reading speed */
  try { var rr = parseFloat(localStorage.getItem("lab404.raRate")); if (rr >= 0.5 && rr <= 2) rate = rr; } catch (e) {}

  function supported() { return !!synth; }
  function setRate(r) { if (r >= 0.5 && r <= 2) { rate = r; try { localStorage.setItem("lab404.raRate", String(r)); } catch (e) {} } }

  function loadVoice() {
    if (!synth) return null;
    var vs = synth.getVoices() || [];
    voice =
      vs.filter(function (v) { return /en[-_]US/i.test(v.lang) && /natural|google|samantha|aria|jenny|zira/i.test(v.name); })[0] ||
      vs.filter(function (v) { return /en[-_]US/i.test(v.lang); })[0] ||
      vs.filter(function (v) { return /^en/i.test(v.lang); })[0] ||
      vs[0] || null;
    return voice;
  }
  if (synth) {
    loadVoice();
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoice;
  }

  function chunk(text) {
    var clean = String(text || "").replace(/\s+/g, " ").trim();
    if (!clean) return [];
    var sentences = clean.match(/[^.!?]+[.!?]*(\s|$)/g) || [clean];
    var out = [], cur = "";
    sentences.forEach(function (s) {
      if ((cur + s).length > 230) { if (cur.trim()) out.push(cur.trim()); cur = s; }
      else cur += s;
    });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function setBtn(on) {
    if (!curBtn) return;
    curBtn.classList.toggle("playing", on);
    curBtn.setAttribute("aria-pressed", on ? "true" : "false");
    var label = curBtn.querySelector(".ra-lbl") || curBtn;
    label.textContent = on ? "⏸ Stop" : "🔊 Listen";
  }

  function stop() {
    if (keepAlive) { clearInterval(keepAlive); keepAlive = null; }
    try { if (synth) synth.cancel(); } catch (e) {}
    speaking = false;
    setBtn(false);
  }

  /* R6: pick a voice matching a requested language (e.g., "es"), falling back to the default. */
  function voiceFor(lang) {
    if (!lang || !synth) return voice;
    var vs = synth.getVoices() || [];
    var m = vs.filter(function (v) { return new RegExp("^" + lang, "i").test(v.lang); });
    if (!m.length) return voice;
    return m.filter(function (v) { return /google|natural|microsoft|mónica|monica|paulina|helena/i.test(v.name); })[0] || m[0];
  }

  function run() {
    if (!synth) return;
    if (idx >= chunks.length) { stop(); return; }
    var u = new SpeechSynthesisUtterance(chunks[idx++]);
    if (!voice) loadVoice();
    var v = curLang ? voiceFor(curLang) : voice;
    if (v) u.voice = v;
    if (curLang) u.lang = curLang; else if (v && v.lang) u.lang = v.lang;
    u.rate = rate * 0.98; u.pitch = 1; u.volume = 1;
    u.onend = function () { if (speaking) run(); };
    u.onerror = function () { stop(); };
    synth.speak(u);
  }

  function speak(text, btn, lang) {
    if (!synth) return;
    stop();
    curBtn = btn || curBtn;
    curLang = lang || "";
    chunks = chunk(text);
    if (!chunks.length) return;
    idx = 0; speaking = true; setBtn(true);
    // Chrome pauses long synthesis after ~15s; nudge it to keep going.
    keepAlive = setInterval(function () { if (speaking && synth.speaking) { synth.pause(); synth.resume(); } }, 9000);
    run();
  }

  function toggle(text, btn, lang) {
    if (speaking && curBtn === btn) { stop(); return; }
    speak(text, btn, lang);
  }

  window.addEventListener("beforeunload", stop);
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); });

  return { supported: supported, toggle: toggle, speak: speak, stop: stop, setRate: setRate };
})();
