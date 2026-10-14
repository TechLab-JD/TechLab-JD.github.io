/* read-aloud.js — Study Hub listen-to-the-lesson layer.
   Uses the browser's built-in Web Speech API (SpeechSynthesis): no audio files,
   no server, works offline, free, covers every lesson instantly. A 🔊 Listen
   button reads the lesson text aloud; tap again to stop. Falls back to hidden if
   the browser has no speech support.
   window.ReadAloud.toggle(text, buttonEl) | .stop() | .supported() */
window.ReadAloud = (function () {
  var synth = window.speechSynthesis || null;
  var speaking = false, curBtn = null, chunks = [], idx = 0, voice = null, keepAlive = null;

  function supported() { return !!synth; }

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

  function run() {
    if (!synth) return;
    if (idx >= chunks.length) { stop(); return; }
    var u = new SpeechSynthesisUtterance(chunks[idx++]);
    if (!voice) loadVoice();
    if (voice) u.voice = voice;
    u.rate = 0.98; u.pitch = 1; u.volume = 1;
    u.onend = function () { if (speaking) run(); };
    u.onerror = function () { stop(); };
    synth.speak(u);
  }

  function speak(text, btn) {
    if (!synth) return;
    stop();
    curBtn = btn || curBtn;
    chunks = chunk(text);
    if (!chunks.length) return;
    idx = 0; speaking = true; setBtn(true);
    // Chrome pauses long synthesis after ~15s; nudge it to keep going.
    keepAlive = setInterval(function () { if (speaking && synth.speaking) { synth.pause(); synth.resume(); } }, 9000);
    run();
  }

  function toggle(text, btn) {
    if (speaking && curBtn === btn) { stop(); return; }
    speak(text, btn);
  }

  window.addEventListener("beforeunload", stop);
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); });

  return { supported: supported, toggle: toggle, speak: speak, stop: stop };
})();
