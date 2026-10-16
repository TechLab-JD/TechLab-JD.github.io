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
    "g5-math": {
      // order of operations
      "g5-math-oa1a": ["Do the parentheses first: 4 + 2 = 6.", "Then multiply: 3 × 6.", "3 × 6 = 18."],
      "g5-math-oa1b": ["Parentheses first: 12 − 4 = 8.", "Then divide: 8 ÷ 2.", "8 ÷ 2 = 4."],
      "g5-math-oa1c": ["Parentheses first: 3 + 5 = 8.", "Multiply before subtracting: 2 × 8 = 16.", "Then subtract: 16 − 4 = 12."],
      "g5-math-oa1u6": ["Division comes before addition: 12 ÷ 4 = 3.", "Then add: 8 + 3.", "8 + 3 = 11."],
      "g5-math-oa2u3": ["Parentheses first: 3 + 4 = 7.", "Then multiply: 7 × 2.", "7 × 2 = 14."],
      "g5-math-oa2u6": ["Parentheses first: 10 − 4 = 6.", "Then multiply: 2 × 6.", "2 × 6 = 12."],
      // multi-digit multiplication (partial products)
      "g5-math-nbt5u1": ["Break 36 into 30 + 6.", "24 × 30 = 720 and 24 × 6 = 144.", "Add the partial products: 720 + 144 = 864."],
      "g5-math-nbt5u2": ["Break 12 into 10 + 2.", "123 × 10 = 1230 and 123 × 2 = 246.", "Add: 1230 + 246 = 1476."],
      "g5-math-nbt5u3": ["Break the second 45 into 40 + 5.", "45 × 40 = 1800 and 45 × 5 = 225.", "Add: 1800 + 225 = 2025."],
      "g5-math-nbt5u5": ["Break 25 into 20 + 5.", "32 × 20 = 640 and 32 × 5 = 160.", "Add: 640 + 160 = 800."],
      "g5-math-nbt5u6": ["Break 108 into 100 + 8.", "100 × 9 = 900 and 8 × 9 = 72.", "Add: 900 + 72 = 972."],
      "g5-math-nb5a": ["Multiply each place by 3: 200×3=600, 40×3=120, 5×3=15.", "Add the partial products: 600 + 120 + 15.", "= 735."],
      "g5-math-nb5b": ["Break 24 into 20 + 4.", "32 × 20 = 640 and 32 × 4 = 128.", "Add: 640 + 128 = 768."],
      "g5-math-nb5c": ["Break 12 into 10 + 2.", "126 × 10 = 1260 and 126 × 2 = 252.", "Add: 1260 + 252 = 1512."],
      "g5-math-nb5d": ["Multiply by 2, then by 10.", "408 × 2 = 816.", "816 × 10 = 8160."],
      // division
      "g5-math-nbt6u1": ["Ask: 12 times what equals 144?", "12 × 12 = 144.", "So 144 ÷ 12 = 12."],
      "g5-math-nbt6u2": ["Ask: 25 times what equals 625?", "25 × 25 = 625.", "So 625 ÷ 25 = 25."],
      "g5-math-nbt6u3": ["Divide both numbers by 10 first: 42 ÷ 2.", "42 ÷ 2 = 21.", "So 420 ÷ 20 = 21."],
      "g5-math-nbt6u4": ["Ask: 15 times what equals 300?", "15 × 20 = 300.", "So 300 ÷ 15 = 20."],
      "g5-math-nbt6u5": ["Ask: 14 times what equals 196?", "14 × 14 = 196.", "So 196 ÷ 14 = 14."],
      "g5-math-nbt6u6": ["Ask: 16 times what equals 480?", "16 × 30 = 480.", "So 480 ÷ 16 = 30."],
      // decimal operations
      "g5-math-nbt7u1": ["Line up the decimal points: 0.50 + 0.25.", "Add column by column.", "= 0.75."],
      "g5-math-nbt7u2": ["Line up the decimals: 1.2 − 0.7.", "12 tenths − 7 tenths = 5 tenths.", "= 0.5."],
      "g5-math-nbt7u3": ["Multiply as whole numbers: 6 × 3 = 18.", "There is one decimal place, so place it: 1.8.", "= 1.8."],
      "g5-math-nbt7u4": ["Divide the digits: 24 ÷ 2 = 12.", "Keep one decimal place.", "= 1.2."],
      "g5-math-nbt7u6": ["Write 5 as 5.0 so the places line up.", "5.0 − 1.5.", "= 3.5."],
      "g5-math-nb7b": ["Line up the decimals: 3.6 − 1.2.", "Subtract the tenths and the ones.", "= 2.4."],
      "g5-math-nb7c": ["Multiply as whole numbers: 2 × 4 = 8.", "One decimal place: 0.8.", "= 0.8."],
      "g5-math-nb7d": ["Line up: 1.50 + 2.75.", "Add column by column.", "= 4.25."],
      // fractions: add/subtract (common denominator) and multiply
      "g5-math-nf1a5": ["Give a common denominator of 4: 1/2 = 2/4.", "Add: 2/4 + 1/4.", "= 3/4."],
      "g5-math-nf1b5": ["Common denominator 6: 2/3 = 4/6.", "Subtract: 4/6 − 1/6 = 3/6.", "Simplify: 3/6 = 1/2."],
      "g5-math-nf1c5": ["Common denominator 6: 1/3 = 2/6.", "Add: 2/6 + 1/6 = 3/6.", "Simplify: 3/6 = 1/2."],
      "g5-math-nf1d5": ["Common denominator 4: 1/2 = 2/4.", "Subtract: 3/4 − 2/4.", "= 1/4."],
      "g5-math-nf4a5": ["Multiply the tops: 1 × 1 = 1.", "Multiply the bottoms: 2 × 3 = 6.", "= 1/6."],
      "g5-math-nf4b5": ["Multiply the tops: 2 × 1 = 2.", "Multiply the bottoms: 3 × 2 = 6.", "2/6 simplifies to 1/3."],
      // fraction of a number
      "g5-math-nf6u4": ["Divide by the bottom: 8 ÷ 4 = 2.", "Multiply by the top: 2 × 3.", "= 6."],
      "g5-math-nf6u6": ["Divide by 5: 20 ÷ 5 = 4.", "Multiply by 2: 4 × 2.", "= 8."],
      "g5-math-nf4c5": ["'1/4 of' means divide by 4.", "12 ÷ 4.", "= 3."],
      "g5-math-nf4d5": ["Divide by 3: 9 ÷ 3 = 3.", "Multiply by 2: 3 × 2.", "= 6."],
      "g5-math-nf7u4": ["Dividing by 1/3 asks 'how many thirds are in 3?'", "Multiply by the reciprocal: 3 × 3.", "= 9."],
      // volume
      "g5-math-md5u1": ["Volume = length × width × height.", "2 × 3 × 4.", "= 24 cubic units."],
      "g5-math-md5u2": ["A cube's volume = side × side × side.", "5 × 5 × 5.", "= 125 cubic units."],
      "g5-math-md5u3": ["Volume = 10 × 2 × 3.", "10 × 2 = 20, then × 3.", "= 60 cubic units."],
      "g5-math-md5u5": ["Volume = 4 × 4 × 2.", "4 × 4 = 16, then × 2.", "= 32 cubic units."],
      "g5-math-md5a": ["Volume = length × width × height = 4 × 3 × 2.", "4 × 3 = 12, then × 2.", "= 24 cubic cm."],
      "g5-math-md5b": ["A cube's volume = side³ = 3 × 3 × 3.", "3 × 3 = 9, then × 3.", "= 27 cubic cm."],
      "g5-math-md4u1": ["Each layer has 6 cubes, and there are 3 layers.", "6 × 3.", "= 18 cubes."],
      "g5-math-md4u3": ["Each layer is the base: 10 cubes.", "3 layers: 10 × 3.", "= 30 cubes."],
      "g5-math-md4u5": ["Volume = 5 × 2 × 1.", "5 × 2 = 10, then × 1.", "= 10 cubes."],
      "g5-math-md4u6": ["Volume = 3 × 3 × 3.", "3 × 3 = 9, then × 3.", "= 27 cubes."],
      // unit conversion
      "g5-math-md1u1": ["1 meter = 100 centimeters.", "Multiply: 2 × 100.", "= 200 cm."],
      "g5-math-md1u2": ["1 foot = 12 inches.", "Divide: 36 ÷ 12.", "= 3 feet."],
      "g5-math-md1u3": ["1 liter = 1000 milliliters.", "Multiply: 3 × 1000.", "= 3000 mL."],
      "g5-math-md1u4": ["1 kilogram = 1000 grams.", "Multiply: 2 × 1000.", "= 2000 g."],
      "g5-math-md1u5": ["1 hour = 60 minutes.", "Multiply: 3 × 60.", "= 180 minutes."],
      "g5-math-md1u6": ["1 foot = 12 inches.", "Multiply: 4 × 12.", "= 48 inches."],
      "g5-math-md1a": ["1 meter = 100 centimeters.", "Multiply: 2 × 100.", "= 200 cm."],
      "g5-math-md1b": ["1 foot = 12 inches.", "Multiply: 3 × 12.", "= 36 inches."],
      "g5-math-md1c": ["1 hour = 60 minutes.", "Multiply: 2 × 60.", "= 120 minutes."],
      // rounding
      "g5-math-nbt4u1": ["Look at the tenths place (4) and the next digit (7).", "7 ≥ 5, so round the tenths up: 4 → 5.", "= 3.5."],
      "g5-math-nbt4u2": ["Look at the hundredths (6) and the next digit (3).", "3 < 5, so keep the hundredths.", "= 0.86."],
      "g5-math-nbt4u3": ["Look at the tenths (5).", "5 ≥ 5, so round the whole number up.", "= 6."],
      "g5-math-nbt4u4": ["Tenths is 3; the next digit is 4.", "4 < 5, so keep it.", "= 2.3."],
      "g5-math-nbt4u5": ["Hundredths is 4; the next digit is 9.", "9 ≥ 5, so round up: 4 → 5.", "= 0.15."],
      "g5-math-nbt4u6": ["Tenths is 9; the next digit is 6.", "6 ≥ 5, so 9 tenths rounds up and carries.", "= 10.0."],
      "g5-math-nb4b": ["Look at the tenths (6).", "6 ≥ 5, so round the whole number up.", "= 9."],
      "g5-math-nb4c": ["Hundredths is 3; the next digit is 4.", "4 < 5, so keep it.", "= 0.83."],
      "g5-math-nb4d": ["Look at the tenths (5).", "5 ≥ 5, so round up.", "= 13."]
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
