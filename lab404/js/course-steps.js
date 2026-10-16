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
    "g6-math": {
      // ratios & rates
      "g6-math-rp1c": ["Boys:girls is 2:3, and there are 6 boys.", "6 is 3 times the '2' (6 ÷ 2 = 3), so scale girls by 3 too: 3 × 3.", "= 9 girls."],
      "g6-math-rp1u2": ["Divide both parts of 10:15 by their GCF, 5.", "10 ÷ 5 = 2 and 15 ÷ 5 = 3.", "So 10:15 = 2:3."],
      "g6-math-rp1u5": ["Red went from 1 to 2 (×2), so scale blue by 2 as well.", "3 × 2.", "= 6 blue."],
      "g6-math-rp2a": ["Unit rate = total cost ÷ number of items.", "$6 ÷ 3 notebooks.", "= $2 per notebook."],
      "g6-math-rp2b": ["Speed = distance ÷ time.", "120 ÷ 2.", "= 60 mph."],
      "g6-math-rp2c": ["Divide cookies by dollars: 12 ÷ 4.", "= 3 cookies per dollar."],
      "g6-math-rp2u1": ["Speed = distance ÷ time = 60 ÷ 2.", "= 30 mph."],
      "g6-math-rp2u2": ["Divide dollars by pounds: 12 ÷ 4.", "= $3 per pound."],
      "g6-math-rp2u4": ["Divide words by minutes: 150 ÷ 3.", "= 50 words per minute."],
      "g6-math-rp2u5": ["Divide miles by gallons: 200 ÷ 10.", "= 20 miles per gallon."],
      // percent of a number
      "g6-math-rp3a": ["25% = 1/4.", "80 ÷ 4.", "= 20."],
      "g6-math-rp3b": ["40% of the number is 20, so number = 20 ÷ 0.40.", "20 ÷ 0.4.", "= 50."],
      "g6-math-rp3c": ["Discount = 10% of $50 = 0.10 × 50.", "= $5."],
      "g6-math-rp3d": ["50% means half.", "30 ÷ 2.", "= 15."],
      "g6-math-rp3u1": ["25% = 1/4.", "80 ÷ 4.", "= 20."],
      "g6-math-rp3u2": ["10% = 0.10 (move the decimal one place left).", "0.10 × 200.", "= 20."],
      "g6-math-rp3u3": ["50% = half: 60 ÷ 2.", "= 30."],
      "g6-math-rp3u5": ["75% = 3/4.", "40 ÷ 4 = 10, then × 3.", "= 30."],
      "g6-math-rp3u6": ["20% = 1/5.", "50 ÷ 5.", "= 10."],
      // dividing by a fraction
      "g6-math-ns1c": ["Dividing asks 'how many 1/3s are in 2?'", "2 ÷ 1/3 = 2 × 3.", "= 6 servings."],
      "g6-math-ns1u6": ["How many 1/2s are in 3? Multiply by the reciprocal: 3 × 2.", "= 6."],
      // long division
      "g6-math-ns2a": ["Ask: 12 times what is 432?", "12 × 36 = 432.", "= 36."],
      "g6-math-ns2b": ["24 × 50 = 1200, leaving 48.", "24 × 2 = 48.", "50 + 2 = 52."],
      "g6-math-ns2c": ["15 × 60 = 900, leaving 45.", "15 × 3 = 45.", "60 + 3 = 63."],
      "g6-math-ns2d": ["Divide both numbers by 10: 200 ÷ 5.", "200 ÷ 5 = 40.", "= 40."],
      "g6-math-ns2u1": ["25 × 300 = 7500, which is 75 too big.", "75 ÷ 25 = 3, so reduce 300 by 3.", "300 − 3 = 297."],
      "g6-math-ns2u2": ["8 × 100 = 800, leaving 200.", "8 × 25 = 200.", "100 + 25 = 125."],
      "g6-math-ns2u3": ["12 × 200 = 2400, leaving 1056.", "12 × 88 = 1056.", "200 + 88 = 288."],
      "g6-math-ns2u4": ["Ask: 36 times what is 900?", "36 × 25 = 900.", "= 25."],
      "g6-math-ns2u5": ["Ask: 64 times what is 4480?", "64 × 70 = 4480.", "= 70."],
      "g6-math-ns2u6": ["Ask: 45 times what is 2025?", "45 × 45 = 2025.", "= 45."],
      // decimal operations
      "g6-math-ns3a": ["Line up the decimals: 3.50 + 2.75.", "Add column by column.", "= 6.25."],
      "g6-math-ns3b": ["Write 10 as 10.0.", "10.0 − 3.4.", "= 6.6."],
      "g6-math-ns3c": ["Multiply as whole numbers: 25 × 4 = 100.", "One decimal place: 10.0.", "= 10."],
      "g6-math-ns3d": ["48 ÷ 2 = 24.", "Keep one decimal place.", "= 2.4."],
      "g6-math-ns3u1": ["Line up: 3.50 + 2.75.", "Add.", "= 6.25."],
      "g6-math-ns3u2": ["Write 10 as 10.0, then subtract 3.4.", "= 6.6."],
      "g6-math-ns3u3": ["12 × 3 = 36.", "One decimal place: 3.6.", "= 3.6."],
      "g6-math-ns3u4": ["48 ÷ 4 = 12.", "One decimal place.", "= 1.2."],
      "g6-math-ns3u5": ["25 × 4 = 100.", "Two decimal places: 1.00.", "= 1."],
      "g6-math-ns3u6": ["Line up: 6.3 − 1.8.", "63 tenths − 18 tenths = 45 tenths.", "= 4.5."],
      // GCF / LCM
      "g6-math-ns4a": ["Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18.", "The greatest shared factor is 6.", "= 6."],
      "g6-math-ns4b": ["Multiples of 4: 4,8,12... Multiples of 6: 6,12...", "The smallest shared multiple is 12.", "= 12."],
      "g6-math-ns4c": ["Factors of 8: 1,2,4,8. Factors of 20: 1,2,4,5,10,20.", "Greatest shared factor is 4.", "= 4."],
      "g6-math-ns4u1": ["Factors of 12 and 18 share 1,2,3,6.", "The greatest is 6.", "= 6."],
      "g6-math-ns4u2": ["Multiples of 4 and 6 first meet at 12.", "= 12."],
      "g6-math-ns4u3": ["Factors of 8: 1,2,4,8. Factors of 12: 1,2,3,4,6,12.", "Greatest shared is 4.", "= 4."],
      "g6-math-ns4u4": ["3 and 5 share no common factor, so LCM = 3 × 5.", "= 15."],
      "g6-math-ns4u6": ["Factors of 15: 1,3,5,15. Factors of 25: 1,5,25.", "Greatest shared is 5.", "= 5."],
      // absolute value
      "g6-math-ns7b": ["Absolute value is the distance from zero, always non-negative.", "|−6| = 6."],
      "g6-math-ns7u1": ["Absolute value = distance from zero.", "|−8| = 8."],
      "g6-math-ns7u6": ["Distance from zero is positive.", "|−10| = 10."],
      // exponents
      "g6-math-ee1a": ["2³ means 2 × 2 × 2.", "2 × 2 = 4, then × 2.", "= 8."],
      "g6-math-ee1c": ["10⁴ = 10 × 10 × 10 × 10.", "Each factor of 10 adds a zero — four zeros.", "= 10000."],
      "g6-math-ee1u1": ["2³ = 2 × 2 × 2.", "4 × 2.", "= 8."],
      "g6-math-ee1u3": ["3² = 3 × 3.", "= 9."],
      "g6-math-ee1u6": ["2⁴ = 2 × 2 × 2 × 2.", "4 → 8 → 16.", "= 16."],
      // evaluate expressions
      "g6-math-ee2b": ["Substitute n = 4: 3 × 4 + 2.", "Multiply first: 12 + 2.", "= 14."],
      "g6-math-ee2d": ["Substitute x = 5: 2 × 5 − 1.", "Multiply first: 10 − 1.", "= 9."],
      "g6-math-ee2u2": ["Substitute x = 5: 2 × 5.", "= 10."],
      "g6-math-ee2u3": ["Substitute x = 3: 3 + 7.", "= 10."],
      "g6-math-ee2u5": ["Substitute a = 4: 3 × 4.", "= 12."],
      // one-step equations
      "g6-math-ee7a": ["Undo +7 by subtracting 7 from both sides.", "x = 12 − 7.", "x = 5."],
      "g6-math-ee7b": ["Undo ×3 by dividing both sides by 3.", "x = 21 ÷ 3.", "x = 7."],
      "g6-math-ee7c": ["Undo −4 by adding 4 to both sides.", "x = 10 + 4.", "x = 14."],
      "g6-math-ee7d": ["Undo ÷2 by multiplying both sides by 2.", "x = 8 × 2.", "x = 16."],
      "g6-math-ee7u1": ["Subtract 5 from both sides.", "x = 12 − 5.", "x = 7."],
      "g6-math-ee7u2": ["Add 3 to both sides.", "x = 10 + 3.", "x = 13."],
      "g6-math-ee7u3": ["Divide both sides by 4.", "x = 20 ÷ 4.", "x = 5."],
      "g6-math-ee7u4": ["Multiply both sides by 2.", "x = 6 × 2.", "x = 12."],
      "g6-math-ee7u5": ["Subtract 9 from both sides.", "x = 15 − 9.", "x = 6."],
      "g6-math-ee7u6": ["Divide both sides by 3.", "x = 27 ÷ 3.", "x = 9."],
      // area
      "g6-math-g1a": ["Area of a triangle = 1/2 × base × height.", "1/2 × 6 × 4 = 1/2 × 24.", "= 12."],
      "g6-math-g1b": ["Area of a rectangle = length × width.", "8 × 5.", "= 40."],
      "g6-math-g1c": ["Area = 1/2 × base × height = 1/2 × 10 × 3.", "1/2 × 30.", "= 15."],
      "g6-math-g1d": ["Area of a parallelogram = base × height.", "7 × 4.", "= 28."],
      "g6-math-g1u1": ["Triangle area = 1/2 × base × height = 1/2 × 6 × 4.", "1/2 × 24.", "= 12."],
      "g6-math-g1u2": ["Rectangle area = length × width = 8 × 5.", "= 40."],
      "g6-math-g1u3": ["Triangle area = 1/2 × 10 × 3 = 1/2 × 30.", "= 15."],
      "g6-math-g1u5": ["Parallelogram area = base × height = 7 × 4.", "= 28."],
      "g6-math-g1u6": ["Triangle area = 1/2 × 8 × 5 = 1/2 × 40.", "= 20."],
      // volume
      "g6-math-g2a": ["Volume = length × width × height.", "3 × 4 × 2.", "= 24."],
      "g6-math-g2b": ["Cube volume = side³ = 2 × 2 × 2.", "= 8."],
      "g6-math-g2d": ["Volume = 5 × 2 × 3.", "5 × 2 = 10, then × 3.", "= 30."],
      "g6-math-g2u1": ["Volume = 3 × 4 × 5.", "3 × 4 = 12, then × 5.", "= 60."],
      "g6-math-g2u2": ["Cube volume = 4 × 4 × 4.", "4 × 4 = 16, then × 4.", "= 64."],
      "g6-math-g2u3": ["Volume = 2 × 2 × 10.", "2 × 2 = 4, then × 10.", "= 40."],
      "g6-math-g2u5": ["Volume = 6 × 1 × 3.", "= 18."],
      // surface area
      "g6-math-g4b": ["Surface area = sum of all 6 faces, each 4 sq units.", "6 × 4.", "= 24."],
      "g6-math-g4u2": ["Each face is 2 × 2 = 4 sq units.", "A cube has 6 faces: 6 × 4.", "= 24."],
      // statistics
      "g6-math-sp5a": ["Add the values: 4 + 6 + 8 = 18.", "Divide by how many there are (3): 18 ÷ 3.", "= 6."],
      "g6-math-sp5b": ["Put the values in order: 3, 7, 9.", "The median is the middle value.", "= 7."],
      "g6-math-sp5c": ["Range = highest − lowest.", "10 − 2.", "= 8."],
      "g6-math-sp5d": ["Add: 10 + 20 = 30.", "Divide by 2.", "= 15."],
      "g6-math-sp5u1": ["Add: 2 + 4 + 6 = 12.", "Divide by 3.", "= 4."],
      "g6-math-sp5u2": ["In order: 3, 7, 9 — the middle value is the median.", "= 7."],
      "g6-math-sp5u3": ["The mode is the value that appears most often.", "2 appears twice.", "= 2."],
      "g6-math-sp5u4": ["Range = highest − lowest = 10 − 3.", "= 7."],
      "g6-math-sp5u5": ["Add: 10 + 20 + 30 = 60.", "Divide by 3.", "= 20."],
      "g6-math-sp5u6": ["Even count, so average the two middle values, 2 and 3.", "(2 + 3) ÷ 2.", "= 2.5."]
    },
    "g7-math": {
      // integer operations (sign rules)
      "g7-math-m7n1a": ["Different signs: subtract and keep the larger number's sign.", "8 − 3 = 5; 8 is larger and negative.", "= −5."],
      "g7-math-m7n1b": ["Subtracting a negative is the same as adding: 5 + 7.", "= 12."],
      "g7-math-m7n1c": ["Same signs: add the numbers and keep the sign.", "4 + 6 = 10, both negative.", "= −10."],
      "g7-math-m7n2a": ["Different signs multiply to a negative.", "6 × 4 = 24.", "= −24."],
      "g7-math-m7n2b": ["Same signs divide to a positive.", "18 ÷ 3 = 6.", "= 6."],
      "g7-math-m7n2c": ["Negative × negative = positive.", "5 × 3 = 15.", "= 15."],
      "g7-math-ns1u1": ["Different signs: subtract, keep the larger sign.", "5 − 3 = 2; larger is negative.", "= −2."],
      "g7-math-ns1u2": ["Same signs: add, keep the sign.", "4 + 6 = 10, negative.", "= −10."],
      "g7-math-ns1u3": ["7 − 10 drops below zero.", "10 − 7 = 3, result negative.", "= −3."],
      "g7-math-ns1u4": ["Subtracting a negative = adding: −8 + 3.", "8 − 3 = 5, keep negative.", "= −5."],
      "g7-math-ns1u5": ["Different signs: 9 − 2 = 7, larger is positive.", "= 7."],
      "g7-math-ns1u6": ["Different signs: 12 − 5 = 7, larger is negative.", "= −7."],
      "g7-math-ns2u1": ["Different signs → negative. 3 × 4 = 12.", "= −12."],
      "g7-math-ns2u2": ["Negative × negative = positive. 6 × 2 = 12.", "= 12."],
      "g7-math-ns2u3": ["Different signs → negative. 20 ÷ 4 = 5.", "= −5."],
      "g7-math-ns2u4": ["Same signs → positive. 15 ÷ 3 = 5.", "= 5."],
      "g7-math-ns2u6": ["Different signs → negative. 8 × 3 = 24.", "= −24."],
      // integer word problems
      "g7-math-m7n3a": ["Dropping means subtract: 4 − 11.", "= −7°."],
      "g7-math-m7n3b": ["Rising means add: −15 + 9.", "15 − 9 = 6, keep negative.", "= −6 ft."],
      "g7-math-m7n3c": ["Add the deposit: −20 + 50.", "50 − 20 = 30.", "= $30."],
      "g7-math-m7n3d": ["A $12 loss is −12, split among 4.", "−12 ÷ 4.", "= −3."],
      "g7-math-ns3u1": ["Dropping means subtract: 5 − 8.", "= −3°."],
      "g7-math-ns3u2": ["Rising means add: −20 + 12.", "20 − 12 = 8, keep negative.", "= −8 ft."],
      "g7-math-ns3u3": ["Add the deposit: −30 + 50.", "= $20."],
      "g7-math-ns3u4": ["Three −4s is the same as −4 × 3.", "= −12."],
      "g7-math-ns3u5": ["Paying back reduces the debt: 15 − 9.", "= still owe $6."],
      "g7-math-ns3u6": ["Falling $3 a day for 4 days: −3 × 4.", "= −12."],
      // unit rates & proportionality
      "g7-math-m71a": ["Unit rate = miles ÷ gallons = 150 ÷ 5.", "= 30 mpg."],
      "g7-math-m71b": ["A full batch is 4 quarter-batches, so 1/2 cup × 4.", "= 2 cups."],
      "g7-math-m71d": ["Cost per pencil = $3 ÷ 12.", "= $0.25."],
      "g7-math-m72b": ["The constant k = y ÷ x.", "12 ÷ 3.", "= 4."],
      "g7-math-m72c": ["Substitute x = 7 into y = 4x: 4 × 7.", "= 28."],
      "g7-math-rp1u1": ["Speed = distance ÷ time = 60 ÷ 1.5.", "= 40 mph."],
      "g7-math-rp1u2": ["Divide dollars by pounds: 6 ÷ 3.", "= $2 per pound."],
      "g7-math-rp1u4": ["(1/2 mile) ÷ (1/4 hour) = 1/2 × 4.", "= 2 mph."],
      "g7-math-rp1u5": ["150 ÷ 5.", "= 30 mpg."],
      "g7-math-rp1u6": ["12 ÷ 4.", "= 3 cups per batch."],
      "g7-math-rp2u3": ["6 pencils is 3 times 2 pencils, so 3 × $1.", "= $3."],
      "g7-math-rp2u5": ["Substitute x = 4 into y = 3x: 3 × 4.", "= 12."],
      // percent problems
      "g7-math-m73a": ["Discount = 25% of $40 = 1/4 × 40.", "= $10."],
      "g7-math-m73b": ["Tip = 20% of 50 = 0.20 × 50.", "= $10."],
      "g7-math-m73c": ["Tax = 8% of 200 = 0.08 × 200 = 16.", "Total = 200 + 16.", "= $216."],
      "g7-math-m73d": ["Interest = principal × rate × time = 500 × 0.04 × 1.", "= $20."],
      "g7-math-rp3u1": ["Tax = 0.10 × 50 = 5.", "Total = 50 + 5.", "= $55."],
      "g7-math-rp3u2": ["0.20 × 40.", "= $8."],
      "g7-math-rp3u3": ["Discount = 1/4 × 80 = 20.", "Pay 80 − 20.", "= $60."],
      "g7-math-rp3u4": ["0.15 × 60.", "= 9."],
      "g7-math-rp3u5": ["Markup = 0.10 × 200 = 20.", "Total = 200 + 20.", "= $220."],
      "g7-math-rp3u6": ["Interest = 100 × 0.05 × 1.", "= $5."],
      // expressions in context
      "g7-math-m7e3a": ["Texts cost 0.10 × 50 = $5.", "Add the base fee: 30 + 5.", "= $35."],
      "g7-math-m7e3b": ["Shirts: 3 × 12 = 36.", "Add the hat: 36 + 5.", "= $41."],
      "g7-math-m7e3c": ["Split the bill: 60 ÷ 4 = 15 each.", "Add the $2 tip: 15 + 2.", "= $17."],
      "g7-math-m7e3d": ["48 ÷ 6.", "= 8 in."],
      "g7-math-ee3u3": ["25 ÷ 5.", "= $5."],
      "g7-math-ee3u5": ["3 × 12 = 36.", "Add tax: 36 + 4.", "= $40."],
      // two-step equations
      "g7-math-m7e4a": ["Subtract 4 from both sides: 3x = 15.", "Divide by 3: x = 5."],
      "g7-math-m7e4b": ["Divide both sides by 2: x + 3 = 8.", "Subtract 3: x = 5."],
      "g7-math-m7e4c": ["Add 7 to both sides: 5x = 25.", "Divide by 5: x = 5."],
      "g7-math-ee3u1": ["Subtract 4: 3x = 15.", "Divide by 3: x = 5."],
      "g7-math-ee3u2": ["Divide both sides by 2: x + 5 = 8.", "Subtract 5: x = 3."],
      "g7-math-ee3u4": ["Add 3: 4x = 20.", "Divide by 4: x = 5."],
      "g7-math-ee3u6": ["Subtract 2: 5x = 25.", "Divide by 5: x = 5."],
      "g7-math-ee4u1": ["Subtract 3: 2x = 8.", "Divide by 2: x = 4."],
      "g7-math-ee4u2": ["Divide both sides by 3: x − 1 = 4.", "Add 1: x = 5."],
      "g7-math-ee4u3": ["Divide both sides by 5.", "x = 7."],
      "g7-math-ee4u5": ["Subtract 2: 4x = 16.", "Divide by 4: x = 4."],
      // scale drawings
      "g7-math-m7g1a": ["Each inch represents 20 miles.", "4 × 20.", "= 80 miles."],
      "g7-math-m7g1b": ["Each cm represents 5 m.", "7 × 5.", "= 35 m."],
      "g7-math-m7g1c": ["At 1:50, each model cm is 50 real cm.", "3 × 50.", "= 150 cm."],
      "g7-math-g1u2": ["Each inch = 5 ft.", "3 × 5.", "= 15 ft."],
      "g7-math-g1u3": ["Each cm = 10 km.", "4 × 10.", "= 40 km."],
      "g7-math-g1u5": ["Per-inch scale: 8 ÷ 2 = 4 ft per inch.", "5 × 4.", "= 20 ft."],
      // circles
      "g7-math-m7g4c": ["Area = π × r² = 3.14 × 5².", "5² = 25, so 3.14 × 25.", "= 78.5."],
      "g7-math-m7g4d": ["Circumference = π × diameter = 3.14 × 10.", "= 31.4."],
      // angle relationships
      "g7-math-m7g5a": ["Complementary angles add to 90°.", "90 − 35.", "= 55°."],
      "g7-math-m7g5b": ["Supplementary angles add to 180°.", "180 − 110.", "= 70°."],
      "g7-math-m7g5d": ["Vertical angles are equal.", "= 48°."],
      "g7-math-g5u4": ["Complement means 90 − the angle.", "90 − 30.", "= 60°."],
      "g7-math-g5u5": ["Supplement means 180 − the angle.", "180 − 110.", "= 70°."],
      "g7-math-g5u6": ["Complementary angles add to 90°.", "90 − 25.", "= 65°."],
      // area / volume / surface area
      "g7-math-m7g6a": ["Volume = 2 × 3 × 4.", "= 24."],
      "g7-math-m7g6b": ["Triangle area = 1/2 × base × height = 1/2 × 10 × 6.", "1/2 × 60.", "= 30."],
      "g7-math-m7g6c": ["Each face = 3 × 3 = 9; a cube has 6 faces.", "6 × 9.", "= 54."],
      "g7-math-m7g6d": ["Rectangle area = 8 × 5.", "= 40."],
      "g7-math-g6u1": ["Rectangle area = 7 × 4.", "= 28."],
      "g7-math-g6u2": ["Volume = 2 × 3 × 5.", "= 30."],
      "g7-math-g6u3": ["Triangle area = 1/2 × 6 × 8 = 1/2 × 48.", "= 24."],
      "g7-math-g6u4": ["Each face 3×3=9, 6 faces: 6 × 9.", "= 54."],
      "g7-math-g6u5": ["Cube volume = 2 × 2 × 2.", "= 8."],
      "g7-math-g6u6": ["Parallelogram area = base × height = 5 × 6.", "= 30."],
      // probability (as decimals)
      "g7-math-m7s5c": ["P(red) = reds ÷ total = 1 ÷ 4.", "= 0.25."],
      "g7-math-m7s6b": ["Experimental P = times it happened ÷ trials = 48 ÷ 100.", "= 0.48."],
      "g7-math-m7s6d": ["P = 1 ÷ 6 = 0.1666...", "Rounded to 2 places.", "= 0.17."],
      "g7-math-m7s7a": ["Evens are 2, 4, 6 → 3 of 6 outcomes.", "3 ÷ 6.", "= 0.5."],
      "g7-math-m7s7b": ["P(green) = 2 ÷ 5.", "= 0.4."],
      "g7-math-m7s7d": ["Total = 4 + 6 = 10. P(blue) = 6 ÷ 10.", "= 0.6."],
      "g7-math-m7s8a": ["Two coins give 4 equally likely outcomes; only HH is both heads.", "1 ÷ 4.", "= 0.25."],
      "g7-math-m7s8d": ["Multiply independent events: (1/2) × (1/6) = 1/12.", "1 ÷ 12 = 0.0833...", "Rounded to 3 places: 0.083."]
    },
    "g8-math": {
      // exponents & roots
      "g8-math-x8n2c": ["√49 = 7 and √64 = 8.", "50 is just above 49, so √50 is between 7 and 8.", "Lower whole number = 7."],
      "g8-math-x8e1b": ["Same base, so add the exponents: 2^(3+2) = 2^5.", "2^5 = 32.", "= 32."],
      "g8-math-x8e1d": ["Any nonzero number to the 0 power equals 1.", "= 1."],
      "g8-math-x8e2a": ["Take the square root of both sides.", "√49 = 7.", "x = 7."],
      "g8-math-x8e2b": ["Take the cube root of both sides.", "∛27 = 3 (3 × 3 × 3 = 27).", "x = 3."],
      "g8-math-x8e2c": ["Ask: what number times itself is 81?", "9 × 9 = 81.", "= 9."],
      "g8-math-x8e2d": ["Ask: what number cubed is 64?", "4 × 4 × 4 = 64.", "= 4."],
      "g8-math-ns2u1": ["3 × 3 = 9.", "= 3."],
      "g8-math-ns2u2": ["4 × 4 = 16.", "= 4."],
      "g8-math-ns2u5": ["5 × 5 = 25.", "= 5."],
      "g8-math-ee1u6": ["2 × 2 × 2 × 2.", "4 → 8 → 16.", "= 16."],
      "g8-math-ee2u1": ["Take the square root: √49 = 7.", "x = 7."],
      "g8-math-ee2u2": ["Take the cube root: ∛27 = 3.", "x = 3."],
      "g8-math-ee2u4": ["2 × 2 × 2 = 8, so the cube root of 8 is 2.", "= 2."],
      "g8-math-ee2u5": ["Take the square root: √100 = 10.", "x = 10."],
      // slope
      "g8-math-x8e5a": ["Slope = rise ÷ run = change in y ÷ change in x.", "(6 − 0) ÷ (2 − 0) = 6 ÷ 2.", "= 3."],
      "g8-math-x8e5c": ["Slope from the origin to (4, 12) = 12 ÷ 4.", "= 3."],
      "g8-math-ee5u6": ["Slope = rise ÷ run = 6 ÷ 2.", "= 3."],
      // linear functions / evaluating
      "g8-math-x8e6c": ["Substitute x = 3: 2 × 3 + 5.", "6 + 5.", "= 11."],
      "g8-math-x8e6d": ["The y-intercept is the value when x = 0: 4(0) − 1.", "= −1."],
      "g8-math-ee6u5": ["Substitute x = 2: 4 × 2 + 1.", "8 + 1.", "= 9."],
      "g8-math-x8f2c": ["The two functions differ only by the +4 constant.", "So at any x, B − A = 4.", "= 4."],
      "g8-math-x8f4b": ["Substitute x = 5 into y = 2x + 3: 2 × 5 + 3.", "10 + 3.", "= $13."],
      "g8-math-f4u2": ["The line is y = 3x + 2.", "At x = 1: 3 × 1 + 2.", "= 5."],
      "g8-math-f4u4": ["Cost = 20 + 10 × 3.", "20 + 30.", "= $50."],
      // linear equations
      "g8-math-x8e7a": ["Subtract 5: 3x = 15.", "Divide by 3: x = 5."],
      "g8-math-x8e7b": ["Divide both sides by 2: x − 1 = 5.", "Add 1: x = 6."],
      "g8-math-x8e7c": ["Collect the x's: 5x − 2x = 9 + 3, so 3x = 12.", "Divide by 3: x = 4."],
      "g8-math-ee7u1": ["Subtract 5: 2x = 8.", "Divide by 2: x = 4."],
      "g8-math-ee7u2": ["Add 7: 3x = 15.", "Divide by 3: x = 5."],
      "g8-math-ee7u3": ["Divide both sides by 4: x − 1 = 3.", "Add 1: x = 4."],
      "g8-math-ee7u4": ["Subtract 2x from both sides: 3x = 9.", "Divide by 3: x = 3."],
      "g8-math-ee7u5": ["Subtract 2: x/3 = 3.", "Multiply by 3: x = 9."],
      "g8-math-ee7u6": ["Add 4: 6x = 18.", "Divide by 6: x = 3."],
      // systems
      "g8-math-x8e8a": ["y = x and y = 4, so x must equal 4.", "x = 4."],
      "g8-math-x8e8d": ["Set the two equal: 2x = x + 3.", "Subtract x: x = 3."],
      "g8-math-ee8u2": ["y = x and y = 4, so x = 4.", "x = 4."],
      "g8-math-ee8u5": ["Substitute x = 6: 6 + y = 10.", "y = 10 − 6 = 4."],
      // triangle angles
      "g8-math-x8g5a": ["The angles of a triangle add to 180°.", "180 − 50 − 60.", "= 70°."],
      "g8-math-x8g5d": ["An exterior angle equals the sum of the two remote interior angles.", "40 + 70.", "= 110°."],
      "g8-math-g5u2": ["Angles of a triangle add to 180°.", "180 − 60 − 70.", "= 50°."],
      "g8-math-g5u5": ["Angles on a straight line add to 180°.", "180 − 120.", "= 60°."],
      // Pythagorean theorem
      "g8-math-x8g7a": ["a² + b² = c²: 3² + 4² = 9 + 16 = 25.", "c = √25.", "= 5."],
      "g8-math-x8g7b": ["6² + 8² = 36 + 64 = 100.", "c = √100.", "= 10."],
      "g8-math-x8g7d": ["5² + 12² = 25 + 144 = 169.", "c = √169.", "= 13."],
      "g8-math-g7u2": ["3² + 4² = 9 + 16 = 25; c = √25.", "= 5."],
      "g8-math-g7u3": ["6² + 8² = 36 + 64 = 100; c = √100.", "= 10."],
      "g8-math-g7u6": ["5² + 12² = 25 + 144 = 169; c = √169.", "= 13."],
      // cylinder volume
      "g8-math-x8g9b": ["Volume = π × r² × h = 3.14 × 2² × 5.", "2² = 4, so 3.14 × 4 × 5 = 3.14 × 20.", "= 62.8."],
      // two-way table
      "g8-math-x8s4d": ["With no overlap, just add the two groups.", "12 + 8.", "= 20 students."]
    },
    "g9-math": {
      // roots & rational exponents
      "g9-math-a91c": ["A 1/2 exponent means the square root.", "√16 = 4.", "= 4."],
      "g9-math-a92a": ["Ask: what number squared is 36?", "6 × 6 = 36.", "= 6."],
      "g9-math-a92c": ["√9 = 3 and √16 = 4.", "Add them: 3 + 4.", "= 7."],
      "g9-math-a1n2u5": ["9 × 9 = 81.", "= 9."],
      // linear equations
      "g9-math-a9a4a": ["Subtract 7: 2x = 8.", "Divide by 2: x = 4."],
      "g9-math-a9a4b": ["Collect the x's: 5x − 2x = 12 + 3, so 3x = 15.", "Divide by 3: x = 5."],
      "g9-math-a9a4c": ["Divide both sides by 3: x − 2 = 3.", "Add 2: x = 5."],
      "g9-math-a9a4d": ["Subtract 1: x/4 = 3.", "Multiply by 4: x = 12."],
      "g9-math-a1a4u1": ["Subtract 7: 2x = 8.", "Divide by 2: x = 4."],
      "g9-math-a1a4u2": ["Add 5: 3x = 15.", "Divide by 3: x = 5."],
      "g9-math-a1a4u3": ["Divide both sides by 4: x − 2 = 3.", "Add 2: x = 5."],
      "g9-math-a1a4u4": ["Collect the x's: 5x − 2x = 12 − 3, so 3x = 9.", "Divide by 3: x = 3."],
      "g9-math-a1a4u5": ["Multiply both sides by 4.", "x = 24."],
      "g9-math-a1a4u6": ["Add 2: 7x = 21.", "Divide by 7: x = 3."],
      // systems
      "g9-math-a9a6a": ["Set the two equal: x + 1 = 2x − 3.", "Move x's and numbers: 1 + 3 = 2x − x.", "x = 4."],
      "g9-math-a9a6d": ["Add the two equations so y cancels: 2x = 12.", "Divide by 2: x = 6."],
      "g9-math-a1a6u1": ["2x = 8.", "Divide by 2: x = 4."],
      "g9-math-a1a6u3": ["Add the equations so y cancels: 2x = 12.", "x = 6."],
      "g9-math-a1a6u5": ["x + 1 = 5.", "Subtract 1: x = 4."],
      // modeling / word problems
      "g9-math-a9a7b": ["Substitute m = 6 into C = 15m + 20: 15 × 6 + 20.", "90 + 20.", "= $110."],
      "g9-math-a9a7d": ["'Tripled equals 21' means 3n = 21.", "Divide by 3.", "n = 7."],
      "g9-math-a1a7u2": ["Cost = 3 + 2 × 4.", "3 + 8.", "= $11."],
      "g9-math-a1a7u4": ["8 × 5.", "= $40."],
      "g9-math-a1a7u6": ["5 × 6.", "= $30."],
      // quadratic (square-root method)
      "g9-math-a9a9c": ["Take the square root of both sides.", "√81 = 9.", "x = 9."],
      "g9-math-a1a9u5": ["Take the square root: √49 = 7.", "x = 7."],
      // functions
      "g9-math-a9f1a": ["Substitute x = 4: 2 × 4 + 3.", "8 + 3.", "= 11."],
      "g9-math-a9f1b": ["Substitute x = 3: 3² − 1.", "9 − 1.", "= 8."],
      "g9-math-a9f1d": ["Substitute x = 2: 5 − 2.", "= 3."],
      "g9-math-a1f1u4": ["Substitute x = 5: 3 × 5.", "= 15."],
      "g9-math-a9f4c": ["Substitute x = 2: 4 × 2 − 3.", "8 − 3.", "= 5."],
      "g9-math-a1f4u4": ["Substitute x = 3: 2 × 3 + 1.", "6 + 1.", "= 7."],
      // slope
      "g9-math-a9f3a": ["Slope = (y₂ − y₁) ÷ (x₂ − x₁) = (8 − 2) ÷ (3 − 1).", "6 ÷ 2.", "= 3."],
      "g9-math-a9f3c": ["Slope = (5 − 1) ÷ (2 − 0) = 4 ÷ 2.", "= 2."],
      "g9-math-a1f3u5": ["Slope = rise ÷ run = 8 ÷ 2.", "= 4."],
      // statistics
      "g9-math-a9s1a": ["Add: 4 + 8 + 6 = 18.", "Divide by 3.", "= 6."],
      "g9-math-a9s1b": ["Already in order; with 5 values the middle (3rd) is the median.", "= 9."],
      "g9-math-a1s1u1": ["Add: 4 + 6 + 8 = 18.", "Divide by 3.", "= 6."],
      "g9-math-a1s1u2": ["In order, the middle value is 5.", "= 5."],
      "g9-math-a1s1u6": ["Range = highest − lowest = 10 − 3.", "= 7."]
    },
    "g10-math": {
      // angles
      "g10-math-g102a": ["Complementary angles add to 90°.", "90 − 40.", "= 50°."],
      "g10-math-g102b": ["Supplementary angles add to 180°.", "180 − 125.", "= 55°."],
      "g10-math-g102d": ["Vertical angles are equal.", "= 73°."],
      "g10-math-g103c": ["Co-interior (same-side interior) angles are supplementary — they add to 180°.", "180 − 110.", "= 70°."],
      "g10-math-g104a": ["Triangle angles add to 180°.", "180 − 55 − 65.", "= 60°."],
      "g10-math-g104c": ["An exterior angle equals the sum of the two remote interior angles.", "45 + 80.", "= 125°."],
      "g10-math-gco2u4": ["Complement means 90 − the angle.", "90 − 40.", "= 50°."],
      "g10-math-gco2u5": ["Supplement means 180 − the angle.", "180 − 130.", "= 50°."],
      "g10-math-gco4u2": ["Triangle angles sum to 180°.", "180 − 50 − 60.", "= 70°."],
      "g10-math-gco4u4": ["All three angles are equal and sum to 180°.", "180 ÷ 3.", "= 60°."],
      "g10-math-gco4u5": ["The three angles sum to 180° and one is 90°.", "180 − 90.", "= 90°."],
      "g10-math-gco4u6": ["Triangle angles sum to 180°.", "180 − 30 − 90.", "= 60°."],
      // similar triangles
      "g10-math-g1s1b": ["Multiply the side by the scale factor: 4 × 3.", "= 12."],
      "g10-math-g1s1d": ["Scale factor = large ÷ small = 6 ÷ 2.", "= 3."],
      "g10-math-gsrt1u4": ["Scale factor = 6 ÷ 3 = 2.", "Third side = 5 × 2.", "= 10."],
      // Pythagorean theorem
      "g10-math-g1s2a": ["9² + 12² = 81 + 144 = 225.", "c = √225.", "= 15."],
      "g10-math-g1s2b": ["8² + 15² = 64 + 225 = 289.", "c = √289.", "= 17."],
      "g10-math-g1s2c": ["Rearrange: leg² = hyp² − leg² = 10² − 6² = 100 − 36 = 64.", "√64.", "= 8."],
      "g10-math-gsrt2u2": ["3² + 4² = 25; c = √25.", "= 5."],
      "g10-math-gsrt2u3": ["6² + 8² = 100; c = √100.", "= 10."],
      "g10-math-gsrt2u4": ["5² + 12² = 169; c = √169.", "= 13."],
      "g10-math-gsrt2u6": ["8² + 15² = 289; c = √289.", "= 17."],
      // special triangles & trig
      "g10-math-g1s3c": ["In a 45-45-90 triangle the two legs are equal.", "So the other leg is 5."],
      "g10-math-g1s4d": ["Sine = opposite ÷ hypotenuse.", "3 ÷ 5.", "= 0.6."],
      // area & perimeter
      "g10-math-g1g1a": ["Perimeter = 2 × (length + width) = 2 × (7 + 4).", "2 × 11.", "= 22."],
      "g10-math-g1g1b": ["Area of a square = side².", "6 × 6.", "= 36."],
      "g10-math-g1g1c": ["Area = length × width = 9 × 5.", "= 45."],
      "g10-math-g1g1d": ["A regular pentagon has 5 equal sides.", "5 × 4.", "= 20."],
      "g10-math-g1g2a": ["Triangle area = 1/2 × base × height = 1/2 × 10 × 8.", "1/2 × 80.", "= 40."],
      "g10-math-g1g2b": ["Parallelogram area = base × height = 6 × 5.", "= 30."],
      "g10-math-g1g2c": ["Trapezoid area = 1/2 × (b₁ + b₂) × h = 1/2 × (6 + 10) × 4.", "1/2 × 16 × 4.", "= 32."],
      "g10-math-g1g2d": ["Triangle area = 1/2 × 14 × 3 = 1/2 × 42.", "= 21."],
      "g10-math-ggmd1u1": ["Perimeter of a square = 4 × side = 4 × 5.", "= 20."],
      "g10-math-ggmd1u2": ["Area = 8 × 4.", "= 32."],
      "g10-math-ggmd1u3": ["Perimeter = 2 × (6 + 3).", "2 × 9.", "= 18."],
      "g10-math-ggmd1u5": ["Area of a square = 6 × 6.", "= 36."],
      "g10-math-ggmd2u1": ["Triangle area = 1/2 × 6 × 8 = 1/2 × 48.", "= 24."],
      "g10-math-ggmd2u2": ["Parallelogram area = 5 × 4.", "= 20."],
      "g10-math-ggmd2u4": ["Triangle area = 1/2 × 10 × 3 = 1/2 × 30.", "= 15."],
      "g10-math-ggmd2u5": ["Trapezoid area = 1/2 × (4 + 6) × 2 = 1/2 × 10 × 2.", "= 10."],
      // circles
      "g10-math-g1c1a": ["Area = π × r² = 3.14 × 3².", "3² = 9, so 3.14 × 9.", "= 28.26."],
      "g10-math-g1c1b": ["Circumference = 2 × π × r = 2 × 3.14 × 10.", "= 62.8."],
      "g10-math-g1c1d": ["Radius = diameter ÷ 2 = 8 ÷ 2.", "= 4."],
      // surface area & volume
      "g10-math-g1g3a": ["Each face = 2 × 2 = 4; a cube has 6 faces.", "6 × 4.", "= 24."],
      "g10-math-g1g3c": ["SA = 2(lw + lh + wh) = 2(6 + 8 + 12).", "2 × 26.", "= 52."],
      "g10-math-g1g4a": ["Volume = π × r² × h = 3.14 × 2² × 10.", "3.14 × 4 × 10 = 3.14 × 40.", "= 125.6."],
      "g10-math-g1g4b": ["Volume = 3 × 4 × 5.", "= 60."],
      "g10-math-ggmd3u2": ["Each face = 3 × 3 = 9; 6 faces: 6 × 9.", "= 54."],
      "g10-math-ggmd3u6": ["Each face = 2 × 2 = 4; 6 × 4.", "= 24."],
      "g10-math-ggmd4u1": ["Volume = 2 × 3 × 4.", "= 24."],
      "g10-math-ggmd4u2": ["Cube volume = 5 × 5 × 5.", "= 125."],
      "g10-math-ggmd4u6": ["Volume = 10 × 2 × 3.", "= 60."],
      // coordinate geometry
      "g10-math-g1p1a": ["Distance = √((3−0)² + (4−0)²) = √(9 + 16).", "√25.", "= 5."],
      "g10-math-g1p1c": ["Same x-value, so it is just the vertical gap: 6 − 1.", "= 5."],
      "g10-math-ggpe1u3": ["Midpoint x = average of the x's = (0 + 4) ÷ 2.", "= 2."],
      "g10-math-ggpe1u4": ["Distance = √(3² + 4²) = √(9 + 16) = √25.", "= 5."],
      "g10-math-ggpe1u5": ["Midpoint x = (2 + 6) ÷ 2.", "= 4."]
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
