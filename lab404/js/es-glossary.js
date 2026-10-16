/* es-glossary.js (R11) — bilingual key-term glossary (English ⇄ Español).
   Lesson content stays in English (see i18n.js), so a Spanish-speaking student or
   parent can get stuck on vocabulary. This is a searchable key-term glossary with a
   toggle to show English, Español, or both side by side. Curated high-frequency
   academic terms across subjects. No network. window.Lab404EsGlossary.render(el) */
(function () {
  "use strict";

  /* { en, es, de:def(EN), ds:def(ES), s:subject } */
  var TERMS = [
    // ── General school / thinking ──
    { en: "Explain", es: "Explicar", de: "To make an idea clear by giving details or reasons.", ds: "Aclarar una idea dando detalles o razones.", s: "General" },
    { en: "Compare", es: "Comparar", de: "To show how two things are alike and different.", ds: "Mostrar en qué se parecen y se diferencian dos cosas.", s: "General" },
    { en: "Summarize", es: "Resumir", de: "To retell the main points in a short way.", ds: "Contar las ideas principales de forma breve.", s: "General" },
    { en: "Evidence", es: "Evidencia / Pruebas", de: "Facts or details that support an answer.", ds: "Hechos o detalles que apoyan una respuesta.", s: "General" },
    { en: "Predict", es: "Predecir", de: "To say what you think will happen next.", ds: "Decir lo que crees que pasará después.", s: "General" },
    { en: "Describe", es: "Describir", de: "To tell what something is like.", ds: "Decir cómo es algo.", s: "General" },
    { en: "Define", es: "Definir", de: "To say exactly what a word means.", ds: "Decir con exactitud qué significa una palabra.", s: "General" },
    { en: "Cause", es: "Causa", de: "The reason something happens.", ds: "La razón por la que algo sucede.", s: "General" },
    { en: "Effect", es: "Efecto", de: "What happens because of a cause.", ds: "Lo que ocurre a causa de algo.", s: "General" },
    { en: "Estimate", es: "Estimar / Calcular", de: "To find an answer that is close enough.", ds: "Hallar una respuesta aproximada.", s: "General" },

    // ── Math ──
    { en: "Add", es: "Sumar", de: "To put numbers together to find the total.", ds: "Juntar números para hallar el total.", s: "Math" },
    { en: "Subtract", es: "Restar", de: "To take one number away from another.", ds: "Quitar un número de otro.", s: "Math" },
    { en: "Multiply", es: "Multiplicar", de: "To add a number to itself a set number of times.", ds: "Sumar un número a sí mismo varias veces.", s: "Math" },
    { en: "Divide", es: "Dividir", de: "To split a number into equal groups.", ds: "Repartir un número en grupos iguales.", s: "Math" },
    { en: "Sum", es: "Suma / Total", de: "The result of adding numbers.", ds: "El resultado de sumar números.", s: "Math" },
    { en: "Difference", es: "Diferencia", de: "The result of subtracting.", ds: "El resultado de restar.", s: "Math" },
    { en: "Product", es: "Producto", de: "The result of multiplying.", ds: "El resultado de multiplicar.", s: "Math" },
    { en: "Quotient", es: "Cociente", de: "The result of dividing.", ds: "El resultado de dividir.", s: "Math" },
    { en: "Fraction", es: "Fracción", de: "A part of a whole, like 1/2.", ds: "Una parte de un entero, como 1/2.", s: "Math" },
    { en: "Numerator", es: "Numerador", de: "The top number of a fraction.", ds: "El número de arriba de una fracción.", s: "Math" },
    { en: "Denominator", es: "Denominador", de: "The bottom number of a fraction.", ds: "El número de abajo de una fracción.", s: "Math" },
    { en: "Equation", es: "Ecuación", de: "A math sentence with an equals sign.", ds: "Una expresión matemática con signo de igual.", s: "Math" },
    { en: "Variable", es: "Variable", de: "A letter that stands for an unknown number.", ds: "Una letra que representa un número desconocido.", s: "Math" },
    { en: "Perimeter", es: "Perímetro", de: "The distance around the edge of a shape.", ds: "La distancia alrededor del borde de una figura.", s: "Math" },
    { en: "Area", es: "Área", de: "The amount of space inside a shape.", ds: "La cantidad de espacio dentro de una figura.", s: "Math" },
    { en: "Angle", es: "Ángulo", de: "The space where two lines meet, measured in degrees.", ds: "El espacio donde se unen dos líneas, medido en grados.", s: "Math" },
    { en: "Average (mean)", es: "Promedio (media)", de: "The sum of values divided by how many there are.", ds: "La suma de los valores dividida entre cuántos hay.", s: "Math" },

    // ── Science ──
    { en: "Hypothesis", es: "Hipótesis", de: "A testable guess you can check with an experiment.", ds: "Una suposición que puedes comprobar con un experimento.", s: "Science" },
    { en: "Experiment", es: "Experimento", de: "A test done to answer a science question.", ds: "Una prueba hecha para responder una pregunta científica.", s: "Science" },
    { en: "Observe", es: "Observar", de: "To watch carefully and notice details.", ds: "Mirar con atención y notar detalles.", s: "Science" },
    { en: "Matter", es: "Materia", de: "Anything that has mass and takes up space.", ds: "Todo lo que tiene masa y ocupa espacio.", s: "Science" },
    { en: "Energy", es: "Energía", de: "The ability to do work or cause change.", ds: "La capacidad de hacer trabajo o causar cambios.", s: "Science" },
    { en: "Cell", es: "Célula", de: "The smallest living unit of an organism.", ds: "La unidad viva más pequeña de un organismo.", s: "Science" },
    { en: "Organism", es: "Organismo", de: "A living thing, like a plant or animal.", ds: "Un ser vivo, como una planta o un animal.", s: "Science" },
    { en: "Photosynthesis", es: "Fotosíntesis", de: "How plants make food using sunlight.", ds: "Cómo las plantas fabrican alimento usando la luz del sol.", s: "Science" },
    { en: "Gravity", es: "Gravedad", de: "The force that pulls objects toward each other.", ds: "La fuerza que atrae los objetos entre sí.", s: "Science" },
    { en: "Force", es: "Fuerza", de: "A push or pull on an object.", ds: "Un empuje o jalón sobre un objeto.", s: "Science" },
    { en: "Atom", es: "Átomo", de: "The tiny building block of all matter.", ds: "La diminuta unidad básica de toda la materia.", s: "Science" },
    { en: "Molecule", es: "Molécula", de: "Two or more atoms joined together.", ds: "Dos o más átomos unidos.", s: "Science" },
    { en: "Ecosystem", es: "Ecosistema", de: "Living things and their environment together.", ds: "Los seres vivos y su entorno en conjunto.", s: "Science" },

    // ── English / Language Arts ──
    { en: "Noun", es: "Sustantivo", de: "A person, place, thing, or idea.", ds: "Una persona, lugar, cosa o idea.", s: "English" },
    { en: "Verb", es: "Verbo", de: "A word for an action or state of being.", ds: "Una palabra que indica acción o estado.", s: "English" },
    { en: "Adjective", es: "Adjetivo", de: "A word that describes a noun.", ds: "Una palabra que describe a un sustantivo.", s: "English" },
    { en: "Sentence", es: "Oración", de: "A complete thought with a subject and a verb.", ds: "Un pensamiento completo con sujeto y verbo.", s: "English" },
    { en: "Paragraph", es: "Párrafo", de: "A group of sentences about one main idea.", ds: "Un grupo de oraciones sobre una idea principal.", s: "English" },
    { en: "Main idea", es: "Idea principal", de: "What a text is mostly about.", ds: "De qué trata principalmente un texto.", s: "English" },
    { en: "Detail", es: "Detalle", de: "A small piece of information that supports the main idea.", ds: "Una pequeña información que apoya la idea principal.", s: "English" },
    { en: "Character", es: "Personaje", de: "A person or animal in a story.", ds: "Una persona o animal en un cuento.", s: "English" },
    { en: "Setting", es: "Escenario / Ambiente", de: "Where and when a story takes place.", ds: "Dónde y cuándo ocurre una historia.", s: "English" },
    { en: "Plot", es: "Trama / Argumento", de: "The events that make up a story.", ds: "Los sucesos que forman una historia.", s: "English" },
    { en: "Theme", es: "Tema", de: "The big message or lesson of a story.", ds: "El mensaje o la lección central de una historia.", s: "English" },
    { en: "Fiction", es: "Ficción", de: "A made-up story.", ds: "Una historia inventada.", s: "English" },
    { en: "Nonfiction", es: "No ficción", de: "Writing about real facts.", ds: "Texto sobre hechos reales.", s: "English" },

    // ── Social Studies ──
    { en: "History", es: "Historia", de: "The study of past events.", ds: "El estudio de los sucesos del pasado.", s: "Social Studies" },
    { en: "Government", es: "Gobierno", de: "The group that makes and enforces laws.", ds: "El grupo que hace y aplica las leyes.", s: "Social Studies" },
    { en: "Citizen", es: "Ciudadano", de: "A legal member of a country.", ds: "Un miembro legal de un país.", s: "Social Studies" },
    { en: "Rights", es: "Derechos", de: "Freedoms that are protected by law.", ds: "Libertades protegidas por la ley.", s: "Social Studies" },
    { en: "Economy", es: "Economía", de: "How people make, buy, and sell things.", ds: "Cómo las personas producen, compran y venden.", s: "Social Studies" },
    { en: "Geography", es: "Geografía", de: "The study of the Earth's places and features.", ds: "El estudio de los lugares y rasgos de la Tierra.", s: "Social Studies" },
    { en: "Culture", es: "Cultura", de: "The beliefs and ways of life of a group.", ds: "Las creencias y el modo de vida de un grupo.", s: "Social Studies" },
    { en: "Democracy", es: "Democracia", de: "A government where people vote for their leaders.", ds: "Un gobierno donde el pueblo vota por sus líderes.", s: "Social Studies" },

    // ── Technology / Computing ──
    { en: "Computer", es: "Computadora / Ordenador", de: "A machine that stores and processes information.", ds: "Una máquina que guarda y procesa información.", s: "Technology" },
    { en: "Program", es: "Programa", de: "A set of instructions a computer follows.", ds: "Un conjunto de instrucciones que sigue una computadora.", s: "Technology" },
    { en: "Data", es: "Datos", de: "Facts and information a computer works with.", ds: "Hechos e información con los que trabaja una computadora.", s: "Technology" },
    { en: "Network", es: "Red", de: "Computers connected so they can share information.", ds: "Computadoras conectadas para compartir información.", s: "Technology" },
    { en: "Password", es: "Contraseña", de: "A secret word that keeps an account safe.", ds: "Una palabra secreta que protege una cuenta.", s: "Technology" },
    { en: "Loop", es: "Bucle / Ciclo", de: "Code that repeats a step many times.", ds: "Código que repite un paso muchas veces.", s: "Technology" }
  ];

  var SUBJ_ORDER = ["General", "Math", "Science", "English", "Social Studies", "Technology"];
  var MODE_KEY = "lab404.esg.mode";   /* both | en | es */

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function style() {
    if (document.getElementById("esg-style")) return;
    var st = document.createElement("style"); st.id = "esg-style";
    st.textContent =
      ".esg{padding:14px 16px;max-width:680px;margin:0 auto;box-sizing:border-box}" +
      ".esg h2{font-size:1.12rem;margin:0 0 2px;color:var(--accent2,#39e3c8)}" +
      ".esg .esg-lead{color:var(--text-muted,#9aa);font-size:.8rem;margin:0 0 12px;line-height:1.55}" +
      ".esg-bar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px;position:sticky;top:0;background:var(--bg,#0a0e17);padding:4px 0 8px;z-index:2}" +
      ".esg-search{flex:1 1 180px;min-width:140px;border:1px solid var(--border,#334);background:var(--surface,#10171f);color:var(--text,#dfe);border-radius:9px;padding:9px 11px;font:inherit;font-size:.9rem}" +
      ".esg-seg{display:inline-flex;border:1px solid var(--border,#334);border-radius:9px;overflow:hidden}" +
      ".esg-seg button{border:0;background:transparent;color:var(--text-muted,#9aa);padding:8px 12px;font:inherit;font-size:.78rem;font-weight:700;cursor:pointer}" +
      ".esg-seg button[aria-pressed=true]{background:var(--accent2,#39e3c8);color:#05211c}" +
      ".esg-sub{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text-faint,#778);margin:16px 0 7px;font-weight:700}" +
      ".esg-term{border:1px solid var(--border,#334);border-radius:11px;padding:11px 13px;margin-bottom:8px}" +
      ".esg-pair{display:flex;gap:14px;flex-wrap:wrap}" +
      ".esg-col{flex:1 1 44%;min-width:150px}" +
      ".esg-w{font-weight:700;font-size:.95rem;color:var(--text,#dfe)}" +
      ".esg-w .flag{font-size:.6rem;font-weight:700;color:var(--text-faint,#778);margin-left:6px;letter-spacing:.06em}" +
      ".esg-d{font-size:.8rem;color:var(--text-muted,#9aa);margin-top:2px;line-height:1.45}" +
      ".esg-empty{color:var(--text-muted,#9aa);font-size:.85rem;padding:20px 0;text-align:center}";
    document.head.appendChild(st);
  }

  function render(content) {
    style();
    var mode = "both";
    try { var m = localStorage.getItem(MODE_KEY); if (m) mode = m; } catch (e) {}
    var query = "";

    content.innerHTML =
      '<div class="esg"><h2>🌐 Bilingual Glossary · Glosario bilingüe</h2>' +
        '<p class="esg-lead">Key school words in English and Spanish. Lessons are in English — use this to look up a term. / Palabras escolares clave en inglés y español. Las lecciones están en inglés; usa esto para buscar un término.</p>' +
        '<div class="esg-bar">' +
          '<input class="esg-search" id="esg-q" type="search" aria-label="Search terms / Buscar términos" placeholder="Search / Buscar…" autocomplete="off">' +
          '<span class="esg-seg" role="group" aria-label="Show language">' +
            '<button data-m="both">Both</button><button data-m="en">EN</button><button data-m="es">ES</button>' +
          '</span>' +
        '</div>' +
        '<div id="esg-list"></div>' +
      '</div>';

    var listEl = content.querySelector("#esg-list");
    var qEl = content.querySelector("#esg-q");

    function draw() {
      var q = query.trim().toLowerCase();
      var hits = TERMS.filter(function (t) {
        if (!q) return true;
        return (t.en + " " + t.es + " " + t.de + " " + t.ds).toLowerCase().indexOf(q) >= 0;
      });
      if (!hits.length) { listEl.innerHTML = '<div class="esg-empty">No matching terms. / No hay términos.</div>'; return; }
      var html = "";
      SUBJ_ORDER.forEach(function (subj) {
        var group = hits.filter(function (t) { return t.s === subj; });
        if (!group.length) return;
        html += '<div class="esg-sub">' + esc(subj) + '</div>';
        group.forEach(function (t) {
          var en = '<div class="esg-col"><div class="esg-w">' + esc(t.en) + '<span class="flag">EN</span></div><div class="esg-d">' + esc(t.de) + '</div></div>';
          var es = '<div class="esg-col"><div class="esg-w">' + esc(t.es) + '<span class="flag">ES</span></div><div class="esg-d">' + esc(t.ds) + '</div></div>';
          var inner = mode === "en" ? en : mode === "es" ? es : (en + es);
          html += '<div class="esg-term"><div class="esg-pair">' + inner + '</div></div>';
        });
      });
      listEl.innerHTML = html;
    }

    function syncSeg() {
      content.querySelectorAll(".esg-seg button").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-m") === mode ? "true" : "false");
      });
    }

    qEl.addEventListener("input", function () { query = qEl.value; draw(); });
    content.querySelectorAll(".esg-seg button").forEach(function (b) {
      b.addEventListener("click", function () {
        mode = this.getAttribute("data-m");
        try { localStorage.setItem(MODE_KEY, mode); } catch (e) {}
        syncSeg(); draw();
      });
    });

    syncSeg();
    draw();
  }

  window.Lab404EsGlossary = { render: render, count: TERMS.length, terms: TERMS };
})();
