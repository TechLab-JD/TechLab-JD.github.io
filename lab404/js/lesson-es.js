/* lesson-es.js (R6-1) — full-lesson Spanish translations.
   The in-lesson "Español" toggle (course-loader) upgrades to a full Spanish lesson
   when a translation exists here, and read-aloud reads it in Spanish; otherwise it
   falls back to annotating key terms. Translations are attached to each objective as
   `esFull = { teach, sections:[...] }` after the course data loads. Machine-assisted
   translations, offered as a community aid. Extend grade by grade (same pattern as
   course-steps.js / course-diagrams.js). window.Lab404LessonES */
(function () {
  "use strict";

  var L = {
    "g4-math": {
      "4.OA.1": {
        teach: "La multiplicación puede describir “cuántas veces más”. Decir que 35 es 5 veces 7 significa 35 = 5 × 7 — el número de “veces” te dice cuántos grupos iguales tienes.",
        s: [
          "La multiplicación compara dos cantidades diciendo cuántas veces más es una que la otra. “35 es 5 veces 7” significa 5 grupos de 7, es decir 5 × 7 = 35.",
          "Convierte las palabras en una ecuación de multiplicación. “A es n veces B” se escribe A = n × B.",
          "“Veces más” es multiplicación. 35 es 5 veces 7 porque 5 × 7 = 35.",
          "“Veces más” significa multiplicar, no sumar. “5 veces 7” es 5 × 7, no 5 + 7."
        ]
      },
      "4.OA.2": {
        teach: "En los problemas de “veces más”, multiplica la cantidad menor por el número de veces. Para repartir o agrupar, divide.",
        s: [
          "Imagina lo que hace el problema. Juntar grupos iguales o hallar “veces más” significa multiplicar. Repartir en partes iguales o separar en grupos significa dividir.",
          "La multiplicación y la división son operaciones inversas, así que puedes comprobar una respuesta trabajando al revés.",
          "Para un problema de “veces más”, multiplica; para repartir en partes iguales, divide.",
          "Decide la operación antes de calcular: “repartido en partes iguales” es división, “veces más” es multiplicación."
        ]
      },
      "4.NBT.5": {
        teach: "Multiplica descomponiendo un número en sus valores posicionales y sumando los productos parciales (el método de la caja o el algoritmo estándar).",
        s: [
          "Multiplica separando un número en sus partes según el valor posicional (el método de la caja) y sumando los productos parciales.",
          "El método en columna hace lo mismo: multiplica cada dígito y lleva lo que corresponde.",
          "Multiplica descomponiendo un número en valores posicionales y sumando los productos parciales.",
          "No olvides sumar todos los productos parciales al final."
        ]
      },
      "4.NF.1": {
        teach: "Las fracciones equivalentes nombran la misma cantidad. Multiplica o divide el numerador y el denominador por el mismo número para encontrar una.",
        s: [
          "Las fracciones equivalentes nombran la misma parte de un entero. Multiplica o divide arriba y abajo por el mismo número para formar una.",
          "Estás cortando el entero en más (o menos) partes iguales, pero la cantidad sombreada no cambia.",
          "Multiplica o divide el numerador Y el denominador por el mismo número para obtener una fracción equivalente.",
          "Debes hacer lo mismo al numerador y al denominador, no solo a uno."
        ]
      },
      "4.MD.3": {
        teach: "Área de un rectángulo = largo × ancho (en unidades cuadradas). Perímetro = la distancia alrededor = 2 × (largo + ancho).",
        s: [
          "El área es el espacio dentro de un rectángulo (largo × ancho, en unidades cuadradas). El perímetro es la distancia que rodea la figura (2 × (largo + ancho)).",
          "El área usa unidades cuadradas; el perímetro usa unidades de longitud normales.",
          "Área de un rectángulo = largo × ancho; perímetro = distancia alrededor.",
          "El área va en unidades cuadradas; el perímetro es una longitud. No los confundas."
        ]
      },
      "4.G.1": {
        teach: "Un punto marca un lugar, una recta sigue para siempre en ambas direcciones, y un rayo empieza en un punto y va en una sola dirección. Los ángulos rectos miden 90°, los agudos menos y los obtusos más. Las rectas paralelas nunca se cruzan; las perpendiculares se cruzan a 90°.",
        s: [
          "Un punto marca un lugar. Una recta sigue para siempre en ambas direcciones; un rayo empieza en un punto y va en una dirección; un segmento tiene dos extremos. Dos rayos desde un punto forman un ángulo.",
          "Las rectas paralelas nunca se cruzan; las perpendiculares se cruzan formando ángulos rectos.",
          "Un punto marca un lugar, una recta sigue para siempre en ambas direcciones, y un rayo empieza en un punto y va en una sola dirección para siempre.",
          "Un ángulo agudo mide menos de 90°, un ángulo recto mide exactamente 90°, y un ángulo obtuso mide más de 90°."
        ]
      }
    }
  };

  function apply() {
    var CO = window.LAB404_COURSES;
    if (!CO) return;
    Object.keys(L).forEach(function (cid) {
      var c = CO[cid]; if (!c || !c.objectives) return;
      c.objectives.forEach(function (o) {
        var t = L[cid][o.code];
        if (t && !o.esFull) o.esFull = { teach: t.teach, sections: t.s };
      });
    });
  }

  apply();
  window.addEventListener("lab404:data-ready", apply);
  window.Lab404LessonES = { apply: apply };
})();
