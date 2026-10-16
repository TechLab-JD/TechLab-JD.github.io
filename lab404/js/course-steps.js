/* course-steps.js (R2) — authored step-by-step solutions for worked-problem questions.
   Attaches a `steps` array to specific questions by id after the course data loads;
   course-loader shows them as a numbered "How to solve it" panel on a wrong answer
   (and behind a "Show the steps" button on a right answer). Add more by extending STEPS. */
(function () {
  "use strict";

  var STEPS = {
    "g4-math": {
      "g4-math-oa2a": ["“3 times as long” means multiply by 3.", "The blue ribbon is 7 cm, so compute 3 × 7.", "3 × 7 = 21 cm."],
      "g4-math-oa2b": ["“6 boxes with 8 in each” means 6 equal groups of 8.", "Multiply groups by the amount in each: 6 × 8.", "6 × 8 = 48 markers."],
      "g4-math-oa2c": ["“Split equally into 6 teams” means divide.", "Divide the total by the number of teams: 48 ÷ 6.", "48 ÷ 6 = 8 students per team."]
    },
    "sat-math": {
      "sat-math-m1-1": ["Start with 3x + 5 = 20.", "Subtract 5 from both sides: 3x = 15.", "Divide both sides by 3: x = 5."],
      "sat-math-m1-5": ["Start with 2x − 4 = 10.", "Add 4 to both sides: 2x = 14.", "Divide both sides by 2: x = 7."],
      "sat-math-m2-1": ["The system is x + y = 10 and x − y = 2.", "Add the two equations so y cancels: 2x = 12.", "Divide by 2: x = 6 (and then y = 4)."],
      "sat-math-m3-2": ["Find the change: $50 − $40 = $10.", "Percent change = change ÷ original = 10 ÷ 40.", "10 ÷ 40 = 0.25 = a 25% increase."],
      "sat-math-m5-2": ["Find two numbers that multiply to 6 and add to 5.", "Those numbers are 2 and 3.", "So x² − 5x + 6 factors to (x − 2)(x − 3)."],
      "sat-math-m6-2": ["Use the Pythagorean theorem: a² + b² = c².", "Square the legs: 3² + 4² = 9 + 16 = 25.", "The hypotenuse is √25 = 5."]
    },
    "g12-apphys": {
      "g12-apphys-p1-3": ["Acceleration = change in velocity ÷ time.", "The velocity changes 0 → 20 m/s over 4 s, so that's 20 ÷ 4.", "20 ÷ 4 = 5 m/s²."],
      "g12-apphys-p5-3": ["Use Ohm’s law rearranged for current: I = V ÷ R.", "Plug in the voltage and resistance: 12 ÷ 3.", "12 ÷ 3 = 4 amps."]
    },
    "gC-stats": {
      "gC-stats-s1-1": ["Add all the values: 2 + 3 + 3 + 10 = 18.", "Count how many values there are: 4.", "Mean = sum ÷ count = 18 ÷ 4 = 4.5."]
    }
  };

  function apply() {
    var CO = window.LAB404_COURSES;
    if (!CO) return;
    Object.keys(STEPS).forEach(function (cid) {
      var c = CO[cid]; if (!c || !c.questions) return;
      var map = STEPS[cid];
      c.questions.forEach(function (q) {
        if (map[q.id] && !q.steps) q.steps = map[q.id];
      });
    });
  }

  apply();
  window.addEventListener("lab404:data-ready", apply);
})();
