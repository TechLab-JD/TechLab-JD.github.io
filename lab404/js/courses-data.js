/* Lab404 Study Zone — mastery courses (objective-based, Synapse-style grading).
   Pilot: Grade 4 Math, aligned to the Massachusetts Curriculum Frameworks (= Common Core codes for core
   standards). Each objective carries a multi-state crosswalk (cc + ma filled; teks/vasol/flbest pending the
   crosswalk brick). Questions are tagged to an objective and use anti-guess types (numeric / multi / mc).
   The mastery engine (js/mastery.js) + course view (js/course-loader.js) consume this.
   Adding a course = append to LAB404_COURSES. */
window.LAB404_COURSES = {
  "g4-math": {
    id: "g4-math", title: "Grade 4 Math", subjectKey: "math", grade: "4",
    standard: "Massachusetts Curriculum Frameworks — Grade 4 Mathematics",
    note: "Pilot course: a representative set of Grade 4 objectives spanning all five domains.",
    domains: [
      { code: "OA", name: "Operations & Algebraic Thinking" },
      { code: "NBT", name: "Number & Operations in Base Ten" },
      { code: "NF", name: "Fractions" },
      { code: "MD", name: "Measurement & Data" },
      { code: "G", name: "Geometry" }
    ],
    objectives: [
      { code: "4.OA.1", domain: "OA", weight: 0.9, title: "Interpret multiplication as a comparison (e.g., 35 is 5 times as many as 7)", xwalk: { cc: "4.OA.A.1", ma: "4.OA.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.OA.2", domain: "OA", weight: 1.0, title: "Solve multiplication & division word problems, including “times as many” comparisons", xwalk: { cc: "4.OA.A.2", ma: "4.OA.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.OA.3", domain: "OA", weight: 1.0, title: "Solve multistep word problems; interpret remainders; estimate", xwalk: { cc: "4.OA.A.3", ma: "4.OA.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.OA.4", domain: "OA", weight: 0.9, title: "Find factor pairs & multiples; tell if a number 1–100 is prime or composite", xwalk: { cc: "4.OA.B.4", ma: "4.OA.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.OA.5", domain: "OA", weight: 0.8, title: "Generate and analyze number and shape patterns", xwalk: { cc: "4.OA.C.5", ma: "4.OA.C.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.1", domain: "NBT", weight: 0.9, title: "A digit in one place is worth 10 times the place to its right", xwalk: { cc: "4.NBT.A.1", ma: "4.NBT.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.2", domain: "NBT", weight: 1.0, title: "Read, write & compare multi-digit whole numbers using place value", xwalk: { cc: "4.NBT.A.2", ma: "4.NBT.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.3", domain: "NBT", weight: 0.9, title: "Round multi-digit whole numbers to any place", xwalk: { cc: "4.NBT.A.3", ma: "4.NBT.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.4", domain: "NBT", weight: 1.1, title: "Add and subtract multi-digit whole numbers fluently", xwalk: { cc: "4.NBT.B.4", ma: "4.NBT.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.5", domain: "NBT", weight: 1.1, title: "Multiply multi-digit numbers (up to 4-digit × 1-digit, 2-digit × 2-digit)", xwalk: { cc: "4.NBT.B.5", ma: "4.NBT.B.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.6", domain: "NBT", weight: 1.1, title: "Divide up to 4-digit by 1-digit numbers, with remainders", xwalk: { cc: "4.NBT.B.6", ma: "4.NBT.B.6", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.1", domain: "NF", weight: 1.2, title: "Recognize & generate equivalent fractions", xwalk: { cc: "4.NF.A.1", ma: "4.NF.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.2", domain: "NF", weight: 1.2, title: "Compare two fractions with different numerators & denominators", xwalk: { cc: "4.NF.A.2", ma: "4.NF.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.3", domain: "NF", weight: 1.2, title: "Add & subtract fractions with like denominators; add mixed numbers", xwalk: { cc: "4.NF.B.3", ma: "4.NF.B.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.4", domain: "NF", weight: 1.1, title: "Multiply a fraction by a whole number", xwalk: { cc: "4.NF.B.4", ma: "4.NF.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.5", domain: "NF", weight: 0.9, title: "Add fractions with denominators 10 and 100", xwalk: { cc: "4.NF.C.5", ma: "4.NF.C.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.6", domain: "NF", weight: 1.0, title: "Use decimal notation for fractions with denominators 10 or 100", xwalk: { cc: "4.NF.C.6", ma: "4.NF.C.6", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.7", domain: "NF", weight: 1.0, title: "Compare two decimals to the hundredths", xwalk: { cc: "4.NF.C.7", ma: "4.NF.C.7", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.1", domain: "MD", weight: 0.9, title: "Know relative sizes of units; convert within a measurement system", xwalk: { cc: "4.MD.A.1", ma: "4.MD.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.2", domain: "MD", weight: 1.0, title: "Solve word problems involving measurement, time, and money", xwalk: { cc: "4.MD.A.2", ma: "4.MD.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.3", domain: "MD", weight: 0.9, title: "Apply area & perimeter formulas for rectangles", xwalk: { cc: "4.MD.A.3", ma: "4.MD.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.4", domain: "MD", weight: 0.8, title: "Make and interpret line plots with fractions", xwalk: { cc: "4.MD.B.4", ma: "4.MD.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.5", domain: "MD", weight: 0.8, title: "Understand angles and measure them in degrees", xwalk: { cc: "4.MD.C.5", ma: "4.MD.C.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.6", domain: "MD", weight: 0.8, title: "Measure and draw angles using a protractor", xwalk: { cc: "4.MD.C.6", ma: "4.MD.C.6", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.7", domain: "MD", weight: 0.8, title: "Add angle measures; find an unknown angle", xwalk: { cc: "4.MD.C.7", ma: "4.MD.C.7", teks: "", vasol: "", flbest: "" } },
      { code: "4.G.1", domain: "G", weight: 0.8, title: "Identify points, lines, rays, angles (right/acute/obtuse) & parallel/perpendicular lines", xwalk: { cc: "4.G.A.1", ma: "4.G.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.G.2", domain: "G", weight: 0.9, title: "Classify 2D figures by their lines and angles; identify right triangles", xwalk: { cc: "4.G.A.2", ma: "4.G.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.G.3", domain: "G", weight: 0.8, title: "Recognize lines of symmetry in 2D figures", xwalk: { cc: "4.G.A.3", ma: "4.G.A.3", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 4.OA.2
      { id: "oa2a", obj: "4.OA.2", type: "numeric", q: "A red ribbon is 3 times as long as a blue ribbon. The blue ribbon is 7 cm. How long is the red ribbon, in cm?", answer: 21, why: "“3 times as long” means 3 × 7 = 21 cm." },
      { id: "oa2b", obj: "4.OA.2", type: "numeric", q: "There are 6 boxes with 8 markers in each. How many markers in all?", answer: 48, why: "6 × 8 = 48." },
      { id: "oa2c", obj: "4.OA.2", type: "numeric", q: "48 students are split equally into 6 teams. How many students are on each team?", answer: 8, why: "48 ÷ 6 = 8." },
      { id: "oa2d", obj: "4.OA.2", type: "mc", q: "Which expression matches “5 times as many as 4”?", options: ["5 × 4", "5 + 4", "4 ÷ 5", "5 − 4"], a: 0, why: "“times as many” means multiply." },
      // 4.OA.4
      { id: "oa4a", obj: "4.OA.4", type: "multi", q: "Select ALL the factors of 12.", options: ["2", "3", "5", "4", "7", "6"], correct: [0, 1, 3, 5], why: "Factors of 12: 1, 2, 3, 4, 6, 12." },
      { id: "oa4b", obj: "4.OA.4", type: "mc", q: "Is 17 prime or composite?", options: ["Prime", "Composite"], a: 0, why: "17’s only factors are 1 and 17, so it’s prime." },
      { id: "oa4c", obj: "4.OA.4", type: "mc", q: "Is 21 prime or composite?", options: ["Prime", "Composite"], a: 1, why: "21 = 3 × 7, so it’s composite." },
      { id: "oa4d", obj: "4.OA.4", type: "multi", q: "Select ALL the multiples of 5 that are 30 or less.", options: ["5", "12", "15", "20", "22", "25"], correct: [0, 2, 3, 5], why: "Multiples of 5: 5, 10, 15, 20, 25, 30." },
      // 4.NBT.2
      { id: "nbt2a", obj: "4.NBT.2", type: "mc", q: "Which number is greater: 45,208 or 45,280?", options: ["45,208", "45,280"], a: 1, why: "They match until the tens place: 8 tens > 0 tens." },
      { id: "nbt2b", obj: "4.NBT.2", type: "mc", q: "What is the value of the 7 in 37,642?", options: ["7", "700", "7,000", "70,000"], a: 2, why: "The 7 is in the thousands place → 7,000." },
      { id: "nbt2c", obj: "4.NBT.2", type: "numeric", q: "Write as a number: four thousand, two hundred six.", answer: 4206, why: "4,206." },
      { id: "nbt2d", obj: "4.NBT.2", type: "mc", q: "Which symbol makes it true?   8,090 ___ 8,009", options: ["<", ">", "="], a: 1, why: "8,090 is greater than 8,009." },
      // 4.NBT.3
      { id: "nbt3a", obj: "4.NBT.3", type: "numeric", q: "Round 4,728 to the nearest hundred.", answer: 4700, why: "The tens digit is 2, so round down → 4,700." },
      { id: "nbt3b", obj: "4.NBT.3", type: "numeric", q: "Round 3,650 to the nearest thousand.", answer: 4000, why: "650 ≥ 500, so round up → 4,000." },
      { id: "nbt3c", obj: "4.NBT.3", type: "mc", q: "What is 6,472 rounded to the nearest ten?", options: ["6,470", "6,480", "6,400", "6,500"], a: 0, why: "The ones digit is 2, so round down → 6,470." },
      { id: "nbt3d", obj: "4.NBT.3", type: "numeric", q: "Round 15,500 to the nearest thousand.", answer: 16000, why: "500 rounds up → 16,000." },
      // 4.NBT.5
      { id: "nbt5a", obj: "4.NBT.5", type: "numeric", q: "34 × 6 = ?", answer: 204, why: "34 × 6 = 204." },
      { id: "nbt5b", obj: "4.NBT.5", type: "numeric", q: "125 × 4 = ?", answer: 500, why: "125 × 4 = 500." },
      { id: "nbt5c", obj: "4.NBT.5", type: "numeric", q: "23 × 15 = ?", answer: 345, why: "23 × 15 = 345." },
      { id: "nbt5d", obj: "4.NBT.5", type: "numeric", q: "408 × 3 = ?", answer: 1224, why: "408 × 3 = 1,224." },
      // 4.NBT.6
      { id: "nbt6a", obj: "4.NBT.6", type: "numeric", q: "96 ÷ 8 = ?", answer: 12, why: "8 × 12 = 96." },
      { id: "nbt6b", obj: "4.NBT.6", type: "numeric", q: "128 ÷ 4 = ?", answer: 32, why: "4 × 32 = 128." },
      { id: "nbt6c", obj: "4.NBT.6", type: "numeric", q: "What is the remainder when 50 ÷ 7?", answer: 1, why: "7 × 7 = 49, remainder 1." },
      { id: "nbt6d", obj: "4.NBT.6", type: "numeric", q: "What is the remainder when 253 ÷ 5?", answer: 3, why: "5 × 50 = 250, remainder 3." },
      // 4.NF.1
      { id: "nf1a", obj: "4.NF.1", type: "mc", q: "Which fraction is equivalent to 1/2?", options: ["2/4", "1/3", "3/5", "2/3"], a: 0, why: "Multiply top and bottom by 2 → 2/4." },
      { id: "nf1b", obj: "4.NF.1", type: "numeric", q: "Fill in the missing number:  3/4 = ?/8", answer: 6, why: "×2 on top and bottom → 6/8." },
      { id: "nf1c", obj: "4.NF.1", type: "mc", q: "Which fraction is equivalent to 2/3?", options: ["4/6", "3/4", "2/6", "5/6"], a: 0, why: "×2 → 4/6." },
      { id: "nf1d", obj: "4.NF.1", type: "numeric", q: "Fill in the missing number:  2/5 = ?/10", answer: 4, why: "×2 → 4/10." },
      // 4.NF.2
      { id: "nf2a", obj: "4.NF.2", type: "mc", q: "Which fraction is greater: 3/4 or 2/3?", options: ["3/4", "2/3", "They are equal"], a: 0, why: "3/4 = 9/12 and 2/3 = 8/12, so 3/4 is greater." },
      { id: "nf2b", obj: "4.NF.2", type: "mc", q: "Which fraction is smaller: 1/3 or 1/5?", options: ["1/3", "1/5"], a: 1, why: "A bigger denominator means smaller pieces, so 1/5 < 1/3." },
      { id: "nf2c", obj: "4.NF.2", type: "mc", q: "Compare:  5/8 ___ 1/2", options: ["<", ">", "="], a: 1, why: "1/2 = 4/8, and 5/8 > 4/8." },
      { id: "nf2d", obj: "4.NF.2", type: "mc", q: "Which fraction is the greatest?", options: ["3/5", "1/2", "2/5", "1/4"], a: 0, why: "3/5 = 0.6, the largest of these." },
      // 4.NF.3
      { id: "nf3a", obj: "4.NF.3", type: "mc", q: "1/5 + 2/5 = ?", options: ["3/5", "3/10", "2/5", "3/25"], a: 0, why: "Add the numerators over the same denominator: 3/5." },
      { id: "nf3b", obj: "4.NF.3", type: "mc", q: "7/8 − 3/8 = ?", options: ["4/8", "10/8", "4/16", "4/0"], a: 0, why: "7 − 3 = 4 over 8 → 4/8 (= 1/2)." },
      { id: "nf3c", obj: "4.NF.3", type: "mc", q: "2 1/4 + 1 2/4 = ?", options: ["3 3/4", "3 1/4", "4 3/4", "3 3/8"], a: 0, why: "Wholes: 2 + 1 = 3; fractions: 1/4 + 2/4 = 3/4 → 3 3/4." },
      { id: "nf3d", obj: "4.NF.3", type: "mc", q: "5/6 − 1/6 = ?", options: ["4/6", "6/6", "4/12", "4/0"], a: 0, why: "5 − 1 = 4 over 6 → 4/6." },
      // 4.MD.3
      { id: "md3a", obj: "4.MD.3", type: "numeric", q: "A rectangle is 8 cm by 3 cm. What is its area, in square cm?", answer: 24, why: "Area = length × width = 8 × 3 = 24." },
      { id: "md3b", obj: "4.MD.3", type: "numeric", q: "What is the perimeter of an 8 cm by 3 cm rectangle, in cm?", answer: 22, why: "Perimeter = 8 + 3 + 8 + 3 = 22." },
      { id: "md3c", obj: "4.MD.3", type: "numeric", q: "A square has sides of 5 m. What is its area, in square m?", answer: 25, why: "5 × 5 = 25." },
      { id: "md3d", obj: "4.MD.3", type: "numeric", q: "A rectangle has an area of 36 square cm and a width of 4 cm. What is its length, in cm?", answer: 9, why: "36 ÷ 4 = 9." },
      // 4.G.1
      { id: "g1a", obj: "4.G.1", type: "mc", q: "An angle smaller than a right angle is called:", options: ["Acute", "Obtuse", "Right", "Straight"], a: 0, why: "Acute angles are less than 90°." },
      { id: "g1b", obj: "4.G.1", type: "mc", q: "Lines that never cross and stay the same distance apart are:", options: ["Parallel", "Perpendicular", "Intersecting", "Rays"], a: 0, why: "Parallel lines never meet." },
      { id: "g1c", obj: "4.G.1", type: "mc", q: "A right angle measures how many degrees?", options: ["90", "45", "180", "60"], a: 0, why: "A right angle is exactly 90°." },
      { id: "g1d", obj: "4.G.1", type: "mc", q: "Two lines that cross to form right angles are:", options: ["Perpendicular", "Parallel", "Acute", "Obtuse"], a: 0, why: "Perpendicular lines meet at 90°." },
      // 4.OA.1
      { id: "oa1a", obj: "4.OA.1", type: "mc", q: "Which statement matches 24 = 4 × 6?", options: ["24 is 4 times as many as 6", "24 is 4 more than 6", "24 is 6 less than 4", "24 is half of 6"], a: 0, why: "Multiplication can mean 'times as many'." },
      { id: "oa1b", obj: "4.OA.1", type: "numeric", q: "A blue rope is 5 times as long as a 3-foot red rope. How long is the blue rope, in feet?", answer: 15, why: "5 × 3 = 15." },
      { id: "oa1c", obj: "4.OA.1", type: "mc", q: "'3 times as many as 8' is written as:", options: ["3 × 8", "3 + 8", "8 − 3", "8 ÷ 3"], a: 0, why: "'times as many' means multiply." },
      { id: "oa1d", obj: "4.OA.1", type: "numeric", q: "There are 6 apples and 4 times as many oranges. How many oranges are there?", answer: 24, why: "4 × 6 = 24." },
      { id: "oa1e", obj: "4.OA.1", type: "mc", q: "If 42 = 6 × 7, then 42 is:", options: ["7 times as many as 6", "7 more than 6", "6 less than 7", "half of 6"], a: 0, why: "42 = 7 groups of 6." },
      // 4.OA.3
      { id: "oa3a", obj: "4.OA.3", type: "numeric", q: "4 teams share 29 markers equally. How many does each team get (ignore the leftovers)?", answer: 7, why: "29 ÷ 4 = 7 remainder 1." },
      { id: "oa3b", obj: "4.OA.3", type: "numeric", q: "Each bus holds 30 students. 95 students go on a trip. How many buses are needed?", answer: 4, why: "95 ÷ 30 = 3 r5, so round up to 4 buses." },
      { id: "oa3c", obj: "4.OA.3", type: "numeric", q: "Maria buys 3 books at $8 each and pays with $50. How much change does she get, in dollars?", answer: 26, why: "3 × 8 = 24; 50 − 24 = 26." },
      { id: "oa3d", obj: "4.OA.3", type: "numeric", q: "A baker makes 5 trays of 12 muffins, then sells 48. How many muffins are left?", answer: 12, why: "5 × 12 = 60; 60 − 48 = 12." },
      { id: "oa3e", obj: "4.OA.3", type: "mc", q: "For '53 pencils packed in boxes of 6, how many FULL boxes?' you should:", options: ["Ignore the remainder — 8 boxes", "Round up to 9", "Use the remainder as the answer", "Add 6"], a: 0, why: "53 ÷ 6 = 8 r5; only 8 boxes are full." },
      // 4.OA.5
      { id: "oa5a", obj: "4.OA.5", type: "numeric", q: "The pattern adds 5 each time: 3, 8, 13, 18, ___. What is the next number?", answer: 23, why: "18 + 5 = 23." },
      { id: "oa5b", obj: "4.OA.5", type: "mc", q: "In the pattern 2, 4, 6, 8, 10, all the numbers are:", options: ["Even", "Odd", "Prime", "Multiples of 3"], a: 0, why: "They are all even numbers." },
      { id: "oa5c", obj: "4.OA.5", type: "numeric", q: "A pattern starts at 4 and doubles each time: 4, 8, 16, ___. What is next?", answer: 32, why: "16 × 2 = 32." },
      { id: "oa5d", obj: "4.OA.5", type: "numeric", q: "Rule: subtract 3. The sequence is 20, 17, 14, 11, ___. What is next?", answer: 8, why: "11 − 3 = 8." },
      { id: "oa5e", obj: "4.OA.5", type: "mc", q: "The pattern 5, 10, 15, 20, ... is made by:", options: ["Adding 5 each time", "Multiplying by 5", "Subtracting 5", "Adding 10"], a: 0, why: "Each term is 5 more than the last." },
      // 4.NBT.1
      { id: "nb1a", obj: "4.NBT.1", type: "mc", q: "In 770, the first 7 is worth how many times the second 7?", options: ["10", "100", "2", "7"], a: 0, why: "Each place is 10 times the place to its right." },
      { id: "nb1b", obj: "4.NBT.1", type: "mc", q: "The 5 in 5,000 is worth ___ compared to the 5 in 500.", options: ["10 times as much", "1/10 as much", "the same", "100 times as much"], a: 0, why: "5,000 is 10 times 500." },
      { id: "nb1c", obj: "4.NBT.1", type: "numeric", q: "What is 10 times 30?", answer: 300, why: "10 × 30 = 300." },
      { id: "nb1d", obj: "4.NBT.1", type: "mc", q: "In 4,000 the 4 means:", options: ["4 thousands", "4 hundreds", "4 tens", "4 ones"], a: 0, why: "The 4 is in the thousands place." },
      { id: "nb1e", obj: "4.NBT.1", type: "numeric", q: "The value of the 8 in 8,000 is how many times the value of the 8 in 800?", answer: 10, why: "Each place is 10 times larger." },
      // 4.NBT.4
      { id: "nb4a", obj: "4.NBT.4", type: "numeric", q: "4,582 + 3,219 = ?", answer: 7801, why: "4,582 + 3,219 = 7,801." },
      { id: "nb4b", obj: "4.NBT.4", type: "numeric", q: "6,000 − 2,345 = ?", answer: 3655, why: "6,000 − 2,345 = 3,655." },
      { id: "nb4c", obj: "4.NBT.4", type: "numeric", q: "12,450 + 8,275 = ?", answer: 20725, why: "12,450 + 8,275 = 20,725." },
      { id: "nb4d", obj: "4.NBT.4", type: "numeric", q: "9,004 − 3,678 = ?", answer: 5326, why: "9,004 − 3,678 = 5,326." },
      { id: "nb4e", obj: "4.NBT.4", type: "numeric", q: "3,456 + 2,544 = ?", answer: 6000, why: "3,456 + 2,544 = 6,000." },
      // 4.NF.4
      { id: "nf4a", obj: "4.NF.4", type: "mc", q: "3 × 1/4 = ?", options: ["3/4", "1/12", "4/3", "3/12"], a: 0, why: "Three one-fourths is 3/4." },
      { id: "nf4b", obj: "4.NF.4", type: "mc", q: "2 × 2/5 = ?", options: ["4/5", "2/10", "4/10", "2/5"], a: 0, why: "2 × 2/5 = 4/5." },
      { id: "nf4c", obj: "4.NF.4", type: "mc", q: "5 × 1/3 = ?", options: ["5/3", "1/15", "5/15", "6/3"], a: 0, why: "Five one-thirds is 5/3." },
      { id: "nf4d", obj: "4.NF.4", type: "numeric", q: "A recipe uses 1/3 cup of sugar per batch. For 6 batches, how many cups of sugar? (whole number)", answer: 2, why: "6 × 1/3 = 6/3 = 2." },
      { id: "nf4e", obj: "4.NF.4", type: "mc", q: "4 × 3/8 = ?", options: ["12/8", "7/8", "12/32", "4/8"], a: 0, why: "4 × 3/8 = 12/8." },
      // 4.NF.5
      { id: "nf5a", obj: "4.NF.5", type: "mc", q: "3/10 is the same as how many hundredths?", options: ["30/100", "3/100", "13/100", "300/100"], a: 0, why: "3/10 = 30/100." },
      { id: "nf5b", obj: "4.NF.5", type: "mc", q: "3/10 + 4/100 = ?", options: ["34/100", "7/100", "7/110", "34/10"], a: 0, why: "3/10 = 30/100, plus 4/100 = 34/100." },
      { id: "nf5c", obj: "4.NF.5", type: "mc", q: "6/10 + 20/100 = ?", options: ["80/100", "26/100", "26/110", "80/10"], a: 0, why: "60/100 + 20/100 = 80/100." },
      { id: "nf5d", obj: "4.NF.5", type: "numeric", q: "Write 50/100 as tenths: __/10 (give the numerator)", answer: 5, why: "50/100 = 5/10." },
      { id: "nf5e", obj: "4.NF.5", type: "mc", q: "2/10 equals:", options: ["20/100", "2/100", "12/100", "200/100"], a: 0, why: "2/10 = 20/100." },
      // 4.NF.6
      { id: "nf6a", obj: "4.NF.6", type: "mc", q: "7/10 written as a decimal is:", options: ["0.7", "0.07", "7.10", "0.007"], a: 0, why: "Seven tenths = 0.7." },
      { id: "nf6b", obj: "4.NF.6", type: "mc", q: "0.25 written as a fraction is:", options: ["25/100", "25/10", "2.5/100", "100/25"], a: 0, why: "0.25 = 25 hundredths = 25/100." },
      { id: "nf6c", obj: "4.NF.6", type: "numeric", q: "Write 3/10 as a decimal.", answer: 0.3, why: "3/10 = 0.3." },
      { id: "nf6d", obj: "4.NF.6", type: "numeric", q: "Write 45/100 as a decimal.", answer: 0.45, why: "45/100 = 0.45." },
      { id: "nf6e", obj: "4.NF.6", type: "mc", q: "The decimal 0.9 means:", options: ["9 tenths", "9 hundredths", "9 ones", "90"], a: 0, why: "0.9 = nine tenths." },
      // 4.NF.7
      { id: "nf7a", obj: "4.NF.7", type: "mc", q: "Which is greater: 0.3 or 0.25?", options: ["0.3", "0.25"], a: 0, why: "0.30 is greater than 0.25." },
      { id: "nf7b", obj: "4.NF.7", type: "mc", q: "Which symbol makes it true?   0.7 ___ 0.70", options: ["=", "<", ">"], a: 0, why: "0.7 and 0.70 are equal." },
      { id: "nf7c", obj: "4.NF.7", type: "mc", q: "Which of these is the smallest?", options: ["0.05", "0.5", "0.55"], a: 0, why: "0.05 is five hundredths, the least." },
      { id: "nf7d", obj: "4.NF.7", type: "mc", q: "Compare:   0.4 ___ 0.40", options: ["=", ">", "<"], a: 0, why: "0.4 equals 0.40." },
      { id: "nf7e", obj: "4.NF.7", type: "mc", q: "Which is greater: 0.6 or 0.59?", options: ["0.6", "0.59"], a: 0, why: "0.60 is greater than 0.59." },
      // 4.MD.1
      { id: "md1a", obj: "4.MD.1", type: "numeric", q: "How many inches are in 2 feet?", answer: 24, why: "1 foot = 12 inches, so 2 × 12 = 24." },
      { id: "md1b", obj: "4.MD.1", type: "numeric", q: "How many centimeters are in 3 meters?", answer: 300, why: "1 m = 100 cm, so 3 × 100 = 300." },
      { id: "md1c", obj: "4.MD.1", type: "numeric", q: "How many minutes are in 3 hours?", answer: 180, why: "1 hour = 60 minutes, so 3 × 60 = 180." },
      { id: "md1d", obj: "4.MD.1", type: "mc", q: "Which is heavier: 1 kilogram or 1 gram?", options: ["1 kilogram", "1 gram", "They are equal"], a: 0, why: "1 kg = 1,000 g." },
      { id: "md1e", obj: "4.MD.1", type: "numeric", q: "How many feet are in 2 yards?", answer: 6, why: "1 yard = 3 feet, so 2 × 3 = 6." },
      // 4.MD.2
      { id: "md2a", obj: "4.MD.2", type: "numeric", q: "A movie starts at 3:00 and lasts 2 hours. What hour does it end? (e.g., 5)", answer: 5, why: "3 + 2 = 5 o'clock." },
      { id: "md2b", obj: "4.MD.2", type: "numeric", q: "You have $10 and spend $3.50. How much is left, in dollars?", answer: 6.5, why: "10 − 3.50 = 6.50." },
      { id: "md2c", obj: "4.MD.2", type: "numeric", q: "A ribbon is 150 cm long. You cut off 60 cm. How many cm are left?", answer: 90, why: "150 − 60 = 90." },
      { id: "md2d", obj: "4.MD.2", type: "numeric", q: "A water jug holds 2 liters. How many milliliters is that?", answer: 2000, why: "1 L = 1,000 mL, so 2 L = 2,000 mL." },
      { id: "md2e", obj: "4.MD.2", type: "numeric", q: "A trip is 240 miles and you've driven 90. How many miles are left?", answer: 150, why: "240 − 90 = 150." },
      // 4.MD.4
      { id: "md4a", obj: "4.MD.4", type: "mc", q: "A line plot uses marks above a number line to show:", options: ["How many times each value occurs", "The area of a shape", "The current time", "A pattern of shapes"], a: 0, why: "Line plots show how often each value appears." },
      { id: "md4b", obj: "4.MD.4", type: "mc", q: "On a line plot, each X usually stands for:", options: ["One data point", "Ten points", "A fraction only", "Nothing"], a: 0, why: "Each X is one measurement." },
      { id: "md4c", obj: "4.MD.4", type: "mc", q: "If a line plot shows three X's above 1/2, that means:", options: ["Three measurements were 1/2", "One measurement was 3", "The total is 1/2", "Half of an X"], a: 0, why: "Three data points had the value 1/2." },
      { id: "md4d", obj: "4.MD.4", type: "mc", q: "Line plots are most useful for showing:", options: ["How often each measurement appears", "A map", "The weather", "A story"], a: 0, why: "They display frequency of values." },
      { id: "md4e", obj: "4.MD.4", type: "mc", q: "To find the most common value on a line plot, look for:", options: ["The value with the most X's", "The smallest number", "The biggest X", "The last point"], a: 0, why: "The tallest stack of X's is the most common value." },
      // 4.MD.5
      { id: "md5a", obj: "4.MD.5", type: "mc", q: "Angles are measured in:", options: ["Degrees", "Inches", "Pounds", "Liters"], a: 0, why: "Angles are measured in degrees." },
      { id: "md5b", obj: "4.MD.5", type: "numeric", q: "A right angle measures how many degrees?", answer: 90, why: "A right angle is 90°." },
      { id: "md5c", obj: "4.MD.5", type: "numeric", q: "A straight angle measures how many degrees?", answer: 180, why: "A straight angle is 180°." },
      { id: "md5d", obj: "4.MD.5", type: "mc", q: "An angle smaller than 90° is:", options: ["Acute", "Obtuse", "Right", "Straight"], a: 0, why: "Acute angles are less than 90°." },
      { id: "md5e", obj: "4.MD.5", type: "mc", q: "An angle between 90° and 180° is:", options: ["Obtuse", "Acute", "Right", "Straight"], a: 0, why: "Obtuse angles are between 90° and 180°." },
      // 4.MD.6
      { id: "md6a", obj: "4.MD.6", type: "mc", q: "The tool used to measure angles is a:", options: ["Protractor", "Ruler", "Scale", "Thermometer"], a: 0, why: "A protractor measures angles." },
      { id: "md6b", obj: "4.MD.6", type: "mc", q: "A protractor measures angles from 0° up to:", options: ["180°", "90°", "360°", "100°"], a: 0, why: "A standard protractor goes to 180°." },
      { id: "md6c", obj: "4.MD.6", type: "numeric", q: "An angle opens from 0 to the 45 mark on a protractor. It measures ___ degrees.", answer: 45, why: "It reads 45°." },
      { id: "md6d", obj: "4.MD.6", type: "mc", q: "To measure an angle, place the protractor's center on the angle's:", options: ["Vertex (corner)", "Longest side", "Middle of a side", "Top edge"], a: 0, why: "Center the protractor on the vertex." },
      { id: "md6e", obj: "4.MD.6", type: "mc", q: "An angle measured at 120° is:", options: ["Obtuse", "Acute", "Right", "Straight"], a: 0, why: "120° is between 90° and 180°, so obtuse." },
      // 4.MD.7
      { id: "md7a", obj: "4.MD.7", type: "numeric", q: "Angles of 30° and 40° side by side make an angle of ___ degrees.", answer: 70, why: "30 + 40 = 70." },
      { id: "md7b", obj: "4.MD.7", type: "numeric", q: "A 90° angle is split into a 55° angle and another. The other angle is ___ degrees.", answer: 35, why: "90 − 55 = 35." },
      { id: "md7c", obj: "4.MD.7", type: "numeric", q: "Three 60° angles together make ___ degrees.", answer: 180, why: "60 × 3 = 180." },
      { id: "md7d", obj: "4.MD.7", type: "numeric", q: "A straight angle (180°) is split into 110° and ___ degrees.", answer: 70, why: "180 − 110 = 70." },
      { id: "md7e", obj: "4.MD.7", type: "numeric", q: "Two angles of 25° each make ___ degrees together.", answer: 50, why: "25 + 25 = 50." },
      // 4.G.2
      { id: "g2a", obj: "4.G.2", type: "mc", q: "A triangle with one 90° angle is called a:", options: ["Right triangle", "Equilateral triangle", "Circle", "Square"], a: 0, why: "A right triangle has a 90° angle." },
      { id: "g2b", obj: "4.G.2", type: "mc", q: "A shape with 4 equal sides and 4 right angles is a:", options: ["Square", "Triangle", "Pentagon", "Circle"], a: 0, why: "That describes a square." },
      { id: "g2c", obj: "4.G.2", type: "mc", q: "Parallel lines in a shape are lines that:", options: ["Never cross", "Always cross", "Form right angles", "Curve"], a: 0, why: "Parallel lines never meet." },
      { id: "g2d", obj: "4.G.2", type: "mc", q: "A triangle with all three angles less than 90° is a(n):", options: ["Acute triangle", "Right triangle", "Obtuse triangle", "Square"], a: 0, why: "All acute angles make an acute triangle." },
      { id: "g2e", obj: "4.G.2", type: "multi", q: "Select ALL shapes that have at least one pair of parallel sides.", options: ["Square", "Rectangle", "Parallelogram", "Triangle"], correct: [0, 1, 2], why: "A triangle has no parallel sides." },
      // 4.G.3
      { id: "g3a", obj: "4.G.3", type: "mc", q: "A line of symmetry divides a shape into:", options: ["Two matching halves", "Three parts", "Four corners", "A circle"], a: 0, why: "The two halves are mirror images." },
      { id: "g3b", obj: "4.G.3", type: "mc", q: "How many lines of symmetry does a square have?", options: ["4", "1", "2", "0"], a: 0, why: "A square has 4 lines of symmetry." },
      { id: "g3c", obj: "4.G.3", type: "mc", q: "A shape has a line of symmetry if one half is the ___ of the other.", options: ["Mirror image", "Opposite color", "Bigger version", "Rotation"], a: 0, why: "The halves match like a mirror." },
      { id: "g3d", obj: "4.G.3", type: "mc", q: "Which letter has a vertical line of symmetry?", options: ["A", "F", "G", "J"], a: 0, why: "A looks the same on both sides of a vertical line." },
      { id: "g3e", obj: "4.G.3", type: "numeric", q: "How many lines of symmetry does a (non-square) rectangle have?", answer: 2, why: "One vertical and one horizontal." }
    ]
  },

  "g4-science": {
    id: "g4-science", title: "Grade 4 Science", subjectKey: "science", grade: "4",
    standard: "Massachusetts Science & Technology/Engineering (Grade 4, NGSS-aligned)",
    note: "Pilot course: a representative set of Grade 4 science objectives across Physical, Life, and Earth Science.",
    domains: [
      { code: "PS", name: "Physical Science (Energy & Waves)" },
      { code: "LS", name: "Life Science (Structure & Function)" },
      { code: "ESS", name: "Earth & Space Science" }
    ],
    objectives: [
      { code: "4-PS3-2", domain: "PS", weight: 1.0, title: "Energy can transfer by sound, light, heat, and electric currents", xwalk: { cc: "4-PS3-2", ma: "4-PS3-2", teks: "", vasol: "", flbest: "" } },
      { code: "4-PS3-4", domain: "PS", weight: 0.9, title: "Devices convert energy from one form to another", xwalk: { cc: "4-PS3-4", ma: "4-PS3-4", teks: "", vasol: "", flbest: "" } },
      { code: "4-PS4-1", domain: "PS", weight: 1.0, title: "Waves have amplitude & wavelength and can make objects move", xwalk: { cc: "4-PS4-1", ma: "4-PS4-1", teks: "", vasol: "", flbest: "" } },
      { code: "4-PS4-2", domain: "PS", weight: 1.0, title: "We see objects because light reflects off them into our eyes", xwalk: { cc: "4-PS4-2", ma: "4-PS4-2", teks: "", vasol: "", flbest: "" } },
      { code: "4-LS1-1", domain: "LS", weight: 1.1, title: "Plants & animals have internal and external structures that aid survival", xwalk: { cc: "4-LS1-1", ma: "4-LS1-1", teks: "", vasol: "", flbest: "" } },
      { code: "4-LS1-2", domain: "LS", weight: 1.0, title: "Animals sense their environment, process it (brain), and respond", xwalk: { cc: "4-LS1-2", ma: "4-LS1-2", teks: "", vasol: "", flbest: "" } },
      { code: "4-ESS1-1", domain: "ESS", weight: 1.0, title: "Rock layers & fossils are evidence of change over time", xwalk: { cc: "4-ESS1-1", ma: "4-ESS1-1", teks: "", vasol: "", flbest: "" } },
      { code: "4-ESS2-1", domain: "ESS", weight: 1.0, title: "Weathering and erosion change the land", xwalk: { cc: "4-ESS2-1", ma: "4-ESS2-1", teks: "", vasol: "", flbest: "" } },
      { code: "4-ESS2-2", domain: "ESS", weight: 0.9, title: "Maps show where Earth's features are, and reveal patterns", xwalk: { cc: "4-ESS2-2", ma: "4-ESS2-2", teks: "", vasol: "", flbest: "" } },
      { code: "4-ESS3-1", domain: "ESS", weight: 1.0, title: "Energy & fuels come from natural resources (renewable vs. nonrenewable)", xwalk: { cc: "4-ESS3-1", ma: "4-ESS3-1", teks: "", vasol: "", flbest: "" } },
      { code: "4-ESS3-2", domain: "ESS", weight: 0.9, title: "Communities can reduce the impacts of natural hazards", xwalk: { cc: "4-ESS3-2", ma: "4-ESS3-2", teks: "", vasol: "", flbest: "" } },
      { code: "4-PS3-1", domain: "PS", weight: 0.9, title: "A faster-moving object has more energy of motion", xwalk: { cc: "4-PS3-1", ma: "4-PS3-1", teks: "", vasol: "", flbest: "" } },
      { code: "4-PS3-3", domain: "PS", weight: 0.9, title: "Energy transfers when objects collide", xwalk: { cc: "4-PS3-3", ma: "4-PS3-3", teks: "", vasol: "", flbest: "" } },
      { code: "4-PS4-3", domain: "PS", weight: 0.9, title: "Patterns can be used to transfer information (codes & signals)", xwalk: { cc: "4-PS4-3", ma: "4-PS4-3", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 4-PS3-2
      { id: "ps32a", obj: "4-PS3-2", type: "mc", q: "When you rub your hands together they get warm. This shows energy transferring as:", options: ["Heat", "Sound", "Light", "Nothing"], a: 0, why: "Friction transfers energy as heat." },
      { id: "ps32b", obj: "4-PS3-2", type: "multi", q: "Select ALL the ways energy can transfer from place to place.", options: ["Sound", "Light", "Heat", "Electric currents", "Weight"], correct: [0, 1, 2, 3], why: "Energy moves by sound, light, heat, and electric currents — weight is not an energy transfer." },
      { id: "ps32c", obj: "4-PS3-2", type: "mc", q: "A wire carries energy from a battery to a bulb as:", options: ["An electric current", "Sound waves", "Wind", "Gravity"], a: 0, why: "Electric current carries the energy through the wire." },
      { id: "ps32d", obj: "4-PS3-2", type: "mc", q: "Standing near a campfire, you feel warm even without touching it. Energy reaches you as:", options: ["Heat (and light)", "Sound only", "Electric current", "Gravity"], a: 0, why: "The fire transfers heat and light energy to you." },
      // 4-PS3-4
      { id: "ps34a", obj: "4-PS3-4", type: "mc", q: "A toaster changes electrical energy mostly into:", options: ["Heat", "Sound", "Magnetism", "Cold"], a: 0, why: "A toaster converts electricity to heat." },
      { id: "ps34b", obj: "4-PS3-4", type: "mc", q: "Solar panels change ___ into electrical energy.", options: ["Light from the Sun", "Sound", "Heat from ice", "Wind"], a: 0, why: "Solar panels convert sunlight to electricity." },
      { id: "ps34c", obj: "4-PS3-4", type: "mc", q: "A speaker changes electrical energy into:", options: ["Sound", "Light", "Cold", "Smell"], a: 0, why: "Speakers produce sound from an electric signal." },
      { id: "ps34d", obj: "4-PS3-4", type: "mc", q: "A wind turbine changes the motion of wind into:", options: ["Electrical energy", "Sound", "Light", "Heat"], a: 0, why: "Turbines convert wind motion to electricity." },
      // 4-PS4-1
      { id: "ps41a", obj: "4-PS4-1", type: "mc", q: "The height of a wave is called its:", options: ["Amplitude", "Wavelength", "Speed", "Color"], a: 0, why: "Amplitude is the height of a wave." },
      { id: "ps41b", obj: "4-PS4-1", type: "mc", q: "The distance from one wave crest to the next is the:", options: ["Wavelength", "Amplitude", "Weight", "Temperature"], a: 0, why: "Wavelength is measured crest to crest." },
      { id: "ps41c", obj: "4-PS4-1", type: "mc", q: "A bigger (taller) wave in water will make a floating toy boat:", options: ["Bob up and down more", "Sink forever", "Disappear", "Stay perfectly still"], a: 0, why: "A larger amplitude moves the object more." },
      { id: "ps41d", obj: "4-PS4-1", type: "mc", q: "As a wave moves across a pond, it mainly carries:", options: ["Energy", "The water itself across the pond", "Nothing", "Fish"], a: 0, why: "Waves transfer energy; the water mostly stays in place." },
      // 4-PS4-2
      { id: "ps42a", obj: "4-PS4-2", type: "mc", q: "We can see a book because light:", options: ["Reflects off it into our eyes", "Comes out of our eyes", "Is stored in the book", "Makes sound"], a: 0, why: "We see objects by light reflecting off them into our eyes." },
      { id: "ps42b", obj: "4-PS4-2", type: "mc", q: "In a completely dark room with no light at all, you:", options: ["Cannot see objects", "See them glowing", "See better", "See only red"], a: 0, why: "With no light, nothing reflects into your eyes." },
      { id: "ps42c", obj: "4-PS4-2", type: "mc", q: "Which object makes its own light?", options: ["The Sun", "The Moon", "A mirror", "A book"], a: 0, why: "The Sun is a light source; the Moon only reflects sunlight." },
      { id: "ps42d", obj: "4-PS4-2", type: "mc", q: "A mirror lets us see our reflection because it:", options: ["Reflects light", "Makes its own light", "Absorbs all light", "Bends sound"], a: 0, why: "Mirrors reflect light back to our eyes." },
      // 4-LS1-1
      { id: "ls11a", obj: "4-LS1-1", type: "mc", q: "A plant's roots mainly help it:", options: ["Take in water and anchor it in place", "Make seeds", "Fly", "Make sound"], a: 0, why: "Roots absorb water/nutrients and hold the plant in the ground." },
      { id: "ls11b", obj: "4-LS1-1", type: "mc", q: "Thorns on a rose bush help the plant:", options: ["Protect itself from being eaten", "Make flowers", "Grow taller", "Breathe"], a: 0, why: "Thorns are a protective structure." },
      { id: "ls11c", obj: "4-LS1-1", type: "multi", q: "Select ALL external structures that help an animal survive.", options: ["Fur for warmth", "Claws for hunting", "Gills for breathing underwater", "A favorite color"], correct: [0, 1, 2], why: "Fur, claws, and gills all help survival; a favorite color does not." },
      { id: "ls11d", obj: "4-LS1-1", type: "mc", q: "A cactus has a thick stem mainly to:", options: ["Store water", "Make noise", "Attract predators", "Fly"], a: 0, why: "Thick stems store water for life in dry places." },
      // 4-LS1-2
      { id: "ls12a", obj: "4-LS1-2", type: "mc", q: "When a loud noise surprises you, which body part processes the information and directs your reaction?", options: ["The brain", "The stomach", "The hair", "The bones"], a: 0, why: "The brain processes senses and controls responses." },
      { id: "ls12b", obj: "4-LS1-2", type: "mc", q: "Eyes, ears, and a nose are all examples of:", options: ["Sense organs", "Muscles", "Bones", "Light sources"], a: 0, why: "They sense information from the environment." },
      { id: "ls12c", obj: "4-LS1-2", type: "mc", q: "A dog hears a can opener and runs to the kitchen. This shows the dog can:", options: ["Sense and respond to its environment", "Make its own food", "Always see in the dark", "Breathe underwater"], a: 0, why: "It sensed a sound and responded with a behavior." },
      { id: "ls12d", obj: "4-LS1-2", type: "mc", q: "Information travels from your senses to your brain through:", options: ["Nerves", "Blood only", "Bones", "Skin color"], a: 0, why: "Nerves carry signals to the brain." },
      // 4-ESS1-1
      { id: "ess11a", obj: "4-ESS1-1", type: "mc", q: "In undisturbed rock layers, the oldest layer is usually:", options: ["At the bottom", "At the top", "In the middle", "Missing"], a: 0, why: "Older layers are deposited first, underneath newer ones." },
      { id: "ess11b", obj: "4-ESS1-1", type: "mc", q: "A fossil of a sea creature found on a mountain suggests that area was once:", options: ["Underwater", "A desert", "A city", "On the Moon"], a: 0, why: "Fossils reveal a place's past environment." },
      { id: "ess11c", obj: "4-ESS1-1", type: "mc", q: "Fossils are:", options: ["Preserved remains or traces of living things from long ago", "Man-made rocks", "Living animals", "Types of soil"], a: 0, why: "Fossils are evidence of past life." },
      { id: "ess11d", obj: "4-ESS1-1", type: "mc", q: "Rock layers and fossils are evidence that Earth:", options: ["Has changed over a very long time", "Never changes", "Was built last year", "Is flat"], a: 0, why: "They record slow change over long periods." },
      // 4-ESS2-1
      { id: "ess21a", obj: "4-ESS2-1", type: "mc", q: "Wind and water slowly breaking rock into smaller pieces is called:", options: ["Weathering", "Melting", "Freezing", "Planting"], a: 0, why: "Weathering breaks rock down into smaller pieces." },
      { id: "ess21b", obj: "4-ESS2-1", type: "mc", q: "When a river carries away bits of soil and rock, that process is:", options: ["Erosion", "Evaporation", "Reflection", "Gravity only"], a: 0, why: "Erosion moves weathered material to a new place." },
      { id: "ess21c", obj: "4-ESS2-1", type: "multi", q: "Select ALL things that can cause weathering or erosion.", options: ["Flowing water", "Wind", "Ice", "Plant roots", "A photograph"], correct: [0, 1, 2, 3], why: "Water, wind, ice, and roots all wear down and move rock." },
      { id: "ess21d", obj: "4-ESS2-1", type: "mc", q: "A smooth, rounded river rock got that way mostly from:", options: ["Water tumbling it over a long time", "Being painted", "Being cut by a machine", "Lightning"], a: 0, why: "Moving water smooths and rounds rocks over time." },
      // 4-ESS2-2
      { id: "ess22a", obj: "4-ESS2-2", type: "mc", q: "On a map, mountains, rivers, and coastlines show us:", options: ["Where Earth's features are located", "Tomorrow's weather", "People's names", "The time"], a: 0, why: "Maps show the location of Earth's features." },
      { id: "ess22b", obj: "4-ESS2-2", type: "mc", q: "Most of Earth's earthquakes and volcanoes happen:", options: ["Along certain lines/patterns (plate boundaries)", "Randomly, equally everywhere", "Only at the North Pole", "Only in deserts"], a: 0, why: "They cluster along plate boundaries — a pattern maps reveal." },
      { id: "ess22c", obj: "4-ESS2-2", type: "mc", q: "A map that uses color to show how high the land is (mountains vs. valleys) is showing:", options: ["Elevation", "Temperature", "Population", "Rainfall only"], a: 0, why: "Elevation maps show the height of the land." },
      { id: "ess22d", obj: "4-ESS2-2", type: "mc", q: "Why are maps of Earth's features useful to scientists?", options: ["They reveal patterns in where features are", "They make land disappear", "They change the weather", "They are only decoration"], a: 0, why: "Patterns help scientists understand Earth." },
      // 4-ESS3-1
      { id: "ess31a", obj: "4-ESS3-1", type: "multi", q: "Select ALL the RENEWABLE energy sources (ones that won't run out).", options: ["Sunlight", "Wind", "Moving water", "Coal", "Oil"], correct: [0, 1, 2], why: "Sun, wind, and water renew; coal and oil are nonrenewable fossil fuels." },
      { id: "ess31b", obj: "4-ESS3-1", type: "mc", q: "Coal, oil, and natural gas are fossil fuels, which means they are:", options: ["Nonrenewable (they can run out)", "Renewable", "Made quickly in factories", "Unlimited"], a: 0, why: "Fossil fuels take millions of years to form and can run out." },
      { id: "ess31c", obj: "4-ESS3-1", type: "mc", q: "Which is a natural resource used to make electricity?", options: ["Moving water in a dam", "Plastic toys", "Television shows", "Homework"], a: 0, why: "Dams use moving water (hydropower) to make electricity." },
      { id: "ess31d", obj: "4-ESS3-1", type: "mc", q: "Using solar and wind power instead of coal helps because they:", options: ["Don't run out and pollute less", "Cost nothing ever", "Make no energy", "Use more coal"], a: 0, why: "Renewables are cleaner and won't run out." },
      // 4-ESS3-2
      { id: "ess32a", obj: "4-ESS3-2", type: "mc", q: "Building levees or flood walls near a river helps protect against:", options: ["Floods", "Sunlight", "Homework", "Wind only"], a: 0, why: "Levees reduce flood damage." },
      { id: "ess32b", obj: "4-ESS3-2", type: "mc", q: "An earthquake drill at school helps people:", options: ["Stay safer during an earthquake", "Cause earthquakes", "Predict the lottery", "Stop the rain"], a: 0, why: "Drills reduce injuries during a hazard." },
      { id: "ess32c", obj: "4-ESS3-2", type: "multi", q: "Select ALL the ways communities reduce damage from natural hazards.", options: ["Early warning systems", "Stronger buildings", "Evacuation plans", "Ignoring the danger"], correct: [0, 1, 2], why: "Warnings, strong buildings, and plans all reduce harm." },
      { id: "ess32d", obj: "4-ESS3-2", type: "mc", q: "We can't always stop natural hazards, but we can:", options: ["Prepare and reduce their impact", "Make them disappear forever", "Fully control the weather", "Safely ignore them"], a: 0, why: "Preparation reduces the impact of hazards." },
      // 4-PS3-1 (speed & energy)
      { id: "ps31a", obj: "4-PS3-1", type: "mc", q: "A faster-moving object has:", options: ["More energy of motion", "Less energy", "No energy", "Only heat"], a: 0, why: "Faster motion means more energy of motion." },
      { id: "ps31b", obj: "4-PS3-1", type: "mc", q: "Which has more energy of motion: a car rolling fast or the same car rolling slowly?", options: ["The fast car", "The slow car", "They are equal", "Neither has any"], a: 0, why: "Greater speed means more energy of motion." },
      { id: "ps31c", obj: "4-PS3-1", type: "mc", q: "When a swing moves faster, its energy of motion:", options: ["Increases", "Decreases", "Stays zero", "Disappears"], a: 0, why: "More speed, more energy." },
      { id: "ps31d", obj: "4-PS3-1", type: "mc", q: "A bowling ball knocks down more pins when it is rolled:", options: ["Faster (more energy)", "Slower", "Not at all", "Backward"], a: 0, why: "A faster ball carries more energy to the pins." },
      { id: "ps31e", obj: "4-PS3-1", type: "mc", q: "The energy an object has because it is moving is called:", options: ["Energy of motion", "Light", "Sound", "Cold"], a: 0, why: "Moving objects have energy of motion (kinetic energy)." },
      // 4-PS3-3 (collisions)
      { id: "ps33a", obj: "4-PS3-3", type: "mc", q: "When a moving marble hits a still marble, energy:", options: ["Transfers to the still marble, making it move", "Disappears", "Only makes light", "Goes up"], a: 0, why: "Energy transfers in the collision." },
      { id: "ps33b", obj: "4-PS3-3", type: "mc", q: "In a collision, a faster object usually transfers:", options: ["More energy", "Less energy", "No energy", "Only sound"], a: 0, why: "More speed means more energy to transfer." },
      { id: "ps33c", obj: "4-PS3-3", type: "mc", q: "When two toy cars bump, some energy of motion changes into:", options: ["Sound and heat", "Light only", "New cars", "Nothing"], a: 0, why: "Energy changes form during a collision." },
      { id: "ps33d", obj: "4-PS3-3", type: "mc", q: "If a rolling ball hits a wall and stops, its energy of motion is:", options: ["Transferred and changed to sound and heat", "Destroyed", "Doubled", "Turned into a ball"], a: 0, why: "Energy isn't destroyed — it changes form." },
      { id: "ps33e", obj: "4-PS3-3", type: "mc", q: "The harder (faster) a hammer hits a nail:", options: ["The more energy it transfers to the nail", "The less the nail moves", "The quieter it is", "Nothing changes"], a: 0, why: "More energy drives the nail farther." },
      // 4-PS4-3 (information transfer)
      { id: "ps43a", obj: "4-PS4-3", type: "mc", q: "Morse code sends messages using patterns of:", options: ["Dots and dashes", "Colors only", "Smells", "Weights"], a: 0, why: "Morse code is a pattern of dots and dashes." },
      { id: "ps43b", obj: "4-PS4-3", type: "mc", q: "Which is an example of using a pattern to send information?", options: ["A lighthouse's flashing light signal", "A plain rock", "Still water", "An empty box"], a: 0, why: "The flashing pattern carries information." },
      { id: "ps43c", obj: "4-PS4-3", type: "mc", q: "Text messages travel as patterns of:", options: ["Electronic signals (code)", "Paper", "Sound in the air only", "Sunlight"], a: 0, why: "Devices send coded electronic signals." },
      { id: "ps43d", obj: "4-PS4-3", type: "mc", q: "Binary code uses just two symbols:", options: ["0 and 1", "A and B", "Red and blue", "Up and down"], a: 0, why: "Computers use 0s and 1s." },
      { id: "ps43e", obj: "4-PS4-3", type: "multi", q: "Select ALL the ways people send information using patterns.", options: ["Morse code", "Flashing light signals", "Written words", "Sign language", "A plain rock"], correct: [0, 1, 2, 3], why: "All but the plain rock carry a pattern of information." },
      // 5th questions for the original objectives
      { id: "ps32e", obj: "4-PS3-2", type: "mc", q: "A hot cup of cocoa warms your cold hands. Energy transfers as:", options: ["Heat", "Sound", "Light", "Gravity"], a: 0, why: "Thermal energy transfers as heat." },
      { id: "ps34e", obj: "4-PS3-4", type: "mc", q: "A hand-crank flashlight changes the motion of your hand into:", options: ["Electrical energy, then light", "Only sound", "Cold", "Gravity"], a: 0, why: "Motion → electricity → light." },
      { id: "ps41e", obj: "4-PS4-1", type: "mc", q: "Which part of a wave is how high it rises above the middle line?", options: ["Amplitude", "Wavelength", "Speed", "Width"], a: 0, why: "Amplitude is the wave's height." },
      { id: "ps42e", obj: "4-PS4-2", type: "mc", q: "Why can't you see colors well in very dim light?", options: ["There isn't enough light reflecting into your eyes", "Your eyes make color", "Colors turn off", "Light is too fast"], a: 0, why: "Seeing color needs light reflecting to your eyes." },
      { id: "ls11e", obj: "4-LS1-1", type: "mc", q: "A fish's gills are a structure that help it:", options: ["Take in oxygen from water", "Fly", "See in the dark", "Make sound"], a: 0, why: "Gills let fish breathe underwater." },
      { id: "ls12e", obj: "4-LS1-2", type: "mc", q: "When you touch something hot and jerk your hand back, your body:", options: ["Sensed danger and responded", "Grew bigger", "Made light", "Stopped working"], a: 0, why: "Senses → brain/nerves → quick response." },
      { id: "ess11e", obj: "4-ESS1-1", type: "mc", q: "Rock layers near the bottom of a canyon wall are usually:", options: ["Older than the layers on top", "Newer than the top", "The same age", "Not rock"], a: 0, why: "Lower layers were deposited first, so they're older." },
      { id: "ess21e", obj: "4-ESS2-1", type: "mc", q: "Over many years, a river can carve a canyon through:", options: ["Erosion (wearing away rock)", "Building new rock", "Freezing metal", "Melting"], a: 0, why: "Flowing water erodes rock over time." },
      { id: "ess22e", obj: "4-ESS2-2", type: "mc", q: "A map showing rivers, mountains, and deserts helps us find:", options: ["Patterns in Earth's features", "The time of day", "People's names", "The temperature"], a: 0, why: "Maps reveal where features are and their patterns." },
      { id: "ess31e", obj: "4-ESS3-1", type: "mc", q: "Which energy source is nonrenewable (it can run out)?", options: ["Oil", "Sunlight", "Wind", "Moving water"], a: 0, why: "Oil is a fossil fuel; the others renew." },
      { id: "ess32e", obj: "4-ESS3-2", type: "mc", q: "Planting trees and grass on a bare hillside can help prevent:", options: ["Erosion and landslides", "Sunshine", "Wind forever", "Rain"], a: 0, why: "Roots hold soil in place, reducing erosion." }
    ]
  },

  "g4-english": {
    id: "g4-english", title: "Grade 4 English (ELA)", subjectKey: "english", grade: "4",
    standard: "Massachusetts English Language Arts (Grade 4, Common Core-aligned)",
    note: "Pilot course: reading comprehension, language conventions, and vocabulary (auto-graded). Writing (the W standards) is assessed separately once AI-graded writing is added.",
    domains: [
      { code: "RL", name: "Reading: Literature" },
      { code: "RI", name: "Reading: Informational Text" },
      { code: "L", name: "Language & Vocabulary" },
      { code: "RF", name: "Word Analysis" }
    ],
    objectives: [
      { code: "4.RL.1", domain: "RL", weight: 1.1, title: "Refer to details & examples and draw inferences from a story", xwalk: { cc: "4.RL.1", ma: "4.RL.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.RL.2", domain: "RL", weight: 1.1, title: "Determine a theme and summarize a story", xwalk: { cc: "4.RL.2", ma: "4.RL.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.RL.3", domain: "RL", weight: 1.0, title: "Describe a character, setting, or event using details", xwalk: { cc: "4.RL.3", ma: "4.RL.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.1", domain: "RI", weight: 1.0, title: "Refer to details & draw inferences from informational text", xwalk: { cc: "4.RI.1", ma: "4.RI.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.2", domain: "RI", weight: 1.1, title: "Determine the main idea and supporting details", xwalk: { cc: "4.RI.2", ma: "4.RI.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.3", domain: "RI", weight: 1.0, title: "Explain events, procedures, or ideas using text information", xwalk: { cc: "4.RI.3", ma: "4.RI.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.L.1", domain: "L", weight: 1.1, title: "Command of grammar: pronouns, verb tenses, complete sentences", xwalk: { cc: "4.L.1", ma: "4.L.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.L.2", domain: "L", weight: 1.0, title: "Capitalization, punctuation (commas, quotation marks) & spelling", xwalk: { cc: "4.L.2", ma: "4.L.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.L.4", domain: "L", weight: 1.0, title: "Word meaning from context clues and prefixes, suffixes & roots", xwalk: { cc: "4.L.4", ma: "4.L.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.L.5", domain: "L", weight: 0.9, title: "Figurative language (similes, idioms) and synonyms/antonyms", xwalk: { cc: "4.L.5", ma: "4.L.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.RF.3", domain: "RF", weight: 0.9, title: "Decode multisyllable words using syllables and word parts", xwalk: { cc: "4.RF.3", ma: "4.RF.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.RL.4", domain: "RL", weight: 1.0, title: "Determine word & phrase meaning in a story, including mythological allusions", xwalk: { cc: "4.RL.4", ma: "4.RL.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.RL.5", domain: "RL", weight: 0.9, title: "Explain major differences between poems, drama, and prose", xwalk: { cc: "4.RL.5", ma: "4.RL.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.RL.6", domain: "RL", weight: 0.9, title: "Compare first- and third-person points of view", xwalk: { cc: "4.RL.6", ma: "4.RL.6", teks: "", vasol: "", flbest: "" } },
      { code: "4.RL.9", domain: "RL", weight: 0.9, title: "Compare themes and patterns across stories, myths, and folktales", xwalk: { cc: "4.RL.9", ma: "4.RL.9", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.4", domain: "RI", weight: 1.0, title: "Determine academic & domain-specific word meanings in informational text", xwalk: { cc: "4.RI.4", ma: "4.RI.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.5", domain: "RI", weight: 1.0, title: "Describe a text's structure (sequence, cause/effect, compare, problem/solution)", xwalk: { cc: "4.RI.5", ma: "4.RI.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.6", domain: "RI", weight: 0.9, title: "Compare firsthand and secondhand accounts of an event", xwalk: { cc: "4.RI.6", ma: "4.RI.6", teks: "", vasol: "", flbest: "" } },
      { code: "4.RI.8", domain: "RI", weight: 1.0, title: "Explain how an author uses reasons and evidence to support points", xwalk: { cc: "4.RI.8", ma: "4.RI.8", teks: "", vasol: "", flbest: "" } },
      { code: "4.L.6", domain: "L", weight: 0.9, title: "Acquire and use grade-level academic and domain-specific vocabulary", xwalk: { cc: "4.L.6", ma: "4.L.6", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 4.RL.1
      { id: "rl1a", obj: "4.RL.1", type: "mc", q: "Read: Maya checked the sky, grabbed her umbrella, and sighed. What will most likely happen?", options: ["It will rain", "It is sunny", "She lost her umbrella", "It is nighttime"], a: 0, why: "Grabbing an umbrella and sighing hints that rain is coming." },
      { id: "rl1b", obj: "4.RL.1", type: "mc", q: "Read: Tom's hands shook as he stepped onto the stage, and he forgot his first line. How does Tom most likely feel?", options: ["Nervous", "Bored", "Sleepy", "Angry"], a: 0, why: "Shaking hands and forgetting lines show nervousness." },
      { id: "rl1c", obj: "4.RL.1", type: "mc", q: "Read: The puppy wagged its tail and licked Jamal's face. Which detail shows the puppy is happy?", options: ["Wagging its tail", "It was raining", "Jamal was tall", "The floor was clean"], a: 0, why: "A wagging tail is a detail that shows happiness." },
      { id: "rl1d", obj: "4.RL.1", type: "mc", q: "To support an answer about what a character is like, you should:", options: ["Point to details and examples in the text", "Just guess", "Use only your own opinion", "Skip to the last page"], a: 0, why: "Back up answers with evidence from the text." },
      // 4.RL.2
      { id: "rl2a", obj: "4.RL.2", type: "mc", q: "A story shows a boy who keeps trying after failing, and finally succeeds. The theme is most likely:", options: ["Hard work and persistence pay off", "Never try new things", "Cheating is best", "Give up quickly"], a: 0, why: "Persistence leading to success is the message (theme)." },
      { id: "rl2b", obj: "4.RL.2", type: "mc", q: "A good summary of a story includes:", options: ["The main events, in order", "Every tiny detail", "Your opinion of the author", "Only the title"], a: 0, why: "A summary briefly retells the main events." },
      { id: "rl2c", obj: "4.RL.2", type: "mc", q: "The lesson or message a story teaches is called its:", options: ["Theme", "Setting", "Title", "Author"], a: 0, why: "Theme is the central message." },
      { id: "rl2d", obj: "4.RL.2", type: "mc", q: "Read: The ant saved food all summer while the grasshopper played. In winter, the ant had plenty and the grasshopper had none. The theme is:", options: ["Plan ahead and work for the future", "Playing is always best", "Winter is fun", "Ants are small"], a: 0, why: "It teaches preparing for the future." },
      // 4.RL.3
      { id: "rl3a", obj: "4.RL.3", type: "mc", q: "Read: Rosa shared her lunch with the new student and showed her around school. Rosa is best described as:", options: ["Kind", "Rude", "Lazy", "Selfish"], a: 0, why: "Sharing and helping show kindness." },
      { id: "rl3b", obj: "4.RL.3", type: "mc", q: "The time and place where a story happens is the:", options: ["Setting", "Character", "Plot", "Theme"], a: 0, why: "Setting is the time and place." },
      { id: "rl3c", obj: "4.RL.3", type: "mc", q: "Read: Snow covered the quiet village as lanterns glowed in the windows. This mostly describes the story's:", options: ["Setting", "Main character", "Problem", "Ending"], a: 0, why: "It paints the time and place — the setting." },
      { id: "rl3d", obj: "4.RL.3", type: "mc", q: "To describe a character well, you should use:", options: ["Their actions, words, and thoughts in the text", "Only their name", "The page number", "The cover color"], a: 0, why: "Use what the character does, says, and thinks." },
      // 4.RI.1
      { id: "ri1a", obj: "4.RI.1", type: "mc", q: "Read: Bats sleep during the day and hunt at night. Bats are best described as:", options: ["Nocturnal", "Daytime animals", "Plants", "Fish"], a: 0, why: "Active at night means nocturnal — an inference from the detail." },
      { id: "ri1b", obj: "4.RI.1", type: "mc", q: "Read: Recycling one aluminum can saves enough energy to run a TV for three hours. This detail supports the idea that recycling:", options: ["Saves energy", "Wastes time", "Is impossible", "Makes TVs"], a: 0, why: "The example shows an energy benefit." },
      { id: "ri1c", obj: "4.RI.1", type: "mc", q: "When answering a question about a nonfiction text, you should:", options: ["Refer to details and examples from the text", "Make it up", "Use only the picture", "Ask a friend"], a: 0, why: "Support answers with evidence from the text." },
      { id: "ri1d", obj: "4.RI.1", type: "mc", q: "Read: Unlike frogs, toads have dry, bumpy skin. What can you infer about frogs' skin?", options: ["It is smoother and moister", "It is also dry and bumpy", "Frogs have no skin", "Frogs are toads"], a: 0, why: "'Unlike frogs' implies frogs are different — smoother/moister." },
      // 4.RI.2
      { id: "ri2a", obj: "4.RI.2", type: "mc", q: "Read: Honeybees pollinate crops, make honey, and support many plants. Without bees, many foods would disappear. The main idea is:", options: ["Bees are very important to our food", "Honey tastes sweet", "Bees are small", "Bees can sting"], a: 0, why: "The overall point is that bees matter to our food." },
      { id: "ri2b", obj: "4.RI.2", type: "mc", q: "The main idea of a paragraph is:", options: ["What the paragraph is mostly about", "The first word", "One tiny detail", "The author's name"], a: 0, why: "The main idea is the central point." },
      { id: "ri2c", obj: "4.RI.2", type: "mc", q: "Supporting details in a paragraph should:", options: ["Back up the main idea", "Contradict the topic", "Be about anything", "Be left out"], a: 0, why: "Details support the main idea." },
      { id: "ri2d", obj: "4.RI.2", type: "mc", q: "Read: Exercise strengthens your heart, builds muscles, and lifts your mood. A good title would be:", options: ["The Benefits of Exercise", "My Favorite Color", "A Rainy Day", "How to Draw"], a: 0, why: "The title should match the main idea." },
      // 4.RI.3
      { id: "ri3a", obj: "4.RI.3", type: "mc", q: "Read: First the caterpillar eats leaves, then it forms a chrysalis, and finally it becomes a butterfly. What happens right after it eats leaves?", options: ["It forms a chrysalis", "It becomes a butterfly", "It lays eggs", "It flies away"], a: 0, why: "The sequence is stated in the text." },
      { id: "ri3b", obj: "4.RI.3", type: "mc", q: "Read: Because the dam blocked the river, a lake slowly formed behind it. Why did the lake form?", options: ["The dam blocked the river", "The sun was hot", "Fish swam in", "It rained once"], a: 0, why: "The cause is stated: the dam blocked the river." },
      { id: "ri3c", obj: "4.RI.3", type: "mc", q: "A text that explains the steps of how something happens is describing a:", options: ["Sequence or process", "Character", "Setting", "Rhyme"], a: 0, why: "Steps in order describe a process." },
      { id: "ri3d", obj: "4.RI.3", type: "mc", q: "Read: Plants need sunlight to make food. In a dark closet, the plant turned yellow and wilted. Why did the plant wilt?", options: ["It did not get sunlight", "It got too much water", "It was too happy", "It was a toy"], a: 0, why: "No sunlight means it cannot make food." },
      // 4.L.1
      { id: "l1a", obj: "4.L.1", type: "mc", q: "Choose the sentence with correct grammar.", options: ["She and I went to the park.", "Her and me went to the park.", "Me and her goed to the park.", "She and me gone to the park."], a: 0, why: "Use the subject pronouns 'She and I' with 'went'." },
      { id: "l1b", obj: "4.L.1", type: "mc", q: "Which word is a pronoun?", options: ["they", "run", "happy", "quickly"], a: 0, why: "'They' takes the place of a noun." },
      { id: "l1c", obj: "4.L.1", type: "mc", q: "Pick the complete, correctly joined sentence (no fragment or run-on).", options: ["The dog barked, and the cat ran.", "Because it was late.", "The dog barked the cat ran away quickly.", "Running fast."], a: 0, why: "It is a complete sentence, properly joined with a comma and 'and'." },
      { id: "l1d", obj: "4.L.1", type: "mc", q: "Choose the correct verb: Yesterday we ___ to the museum.", options: ["went", "go", "goes", "going"], a: 0, why: "'Yesterday' calls for the past tense 'went'." },
      // 4.L.2 (double quotes in options -> single-quoted JS strings)
      { id: "l2a", obj: "4.L.2", type: "mc", q: "Which sentence is punctuated correctly?", options: ['She asked, "Where are we going?"', 'She asked where are we going', 'She asked, Where are we going?', 'She asked "where are we going".'], a: 0, why: "A comma sets off the quote, and the question mark goes inside the quotation marks." },
      { id: "l2b", obj: "4.L.2", type: "mc", q: "Which sentence is capitalized correctly?", options: ["We visited New York in July.", "we visited new york in july.", "We visited new York in july.", "we Visited New York In July."], a: 0, why: "Capitalize the first word and proper nouns (New York, July)." },
      { id: "l2c", obj: "4.L.2", type: "mc", q: "Choose the correctly spelled word.", options: ["believe", "beleive", "belive", "beleeve"], a: 0, why: "'Believe' — i before e here." },
      { id: "l2d", obj: "4.L.2", type: "mc", q: "In a list, commas go between items. Which is correct?", options: ["I bought apples, oranges, and grapes.", "I bought apples oranges and grapes.", "I bought apples; oranges; and grapes.", "I bought apples oranges, and grapes."], a: 0, why: "Commas separate the items in a list." },
      // 4.L.4
      { id: "l4a", obj: "4.L.4", type: "mc", q: "In 'The gigantic whale was bigger than a bus,' the word gigantic means:", options: ["Very big", "Tiny", "Fast", "Blue"], a: 0, why: "The context ('bigger than a bus') shows it means huge." },
      { id: "l4b", obj: "4.L.4", type: "mc", q: "The prefix 're-' in the word rewrite means:", options: ["Again", "Not", "Before", "Under"], a: 0, why: "'re-' means again (rewrite = write again)." },
      { id: "l4c", obj: "4.L.4", type: "mc", q: "The suffix '-less' in the word fearless means:", options: ["Without", "Full of", "More", "Again"], a: 0, why: "'-less' means without (fearless = without fear)." },
      { id: "l4d", obj: "4.L.4", type: "mc", q: "In 'The nocturnal owl hunts at night,' nocturnal most likely means:", options: ["Active at night", "Sleepy", "Large", "Hungry"], a: 0, why: "The context 'hunts at night' is the clue." },
      // 4.L.5
      { id: "l5a", obj: "4.L.5", type: "mc", q: "Her smile was as bright as the sun. This is an example of a:", options: ["Simile", "Fact", "Question", "Command"], a: 0, why: "A comparison using 'as...as' is a simile." },
      { id: "l5b", obj: "4.L.5", type: "mc", q: "The idiom 'It's raining cats and dogs' means:", options: ["It is raining very hard", "Animals are falling", "It is sunny", "It is snowing"], a: 0, why: "It is an idiom for heavy rain." },
      { id: "l5c", obj: "4.L.5", type: "mc", q: "Which word is an ANTONYM (opposite) of 'ancient'?", options: ["Modern", "Old", "Dusty", "Historic"], a: 0, why: "Ancient means very old; its opposite is modern." },
      { id: "l5d", obj: "4.L.5", type: "mc", q: "Which word is a SYNONYM for 'happy'?", options: ["Joyful", "Sad", "Angry", "Tired"], a: 0, why: "Joyful means the same as happy." },
      // 4.RF.3
      { id: "rf3a", obj: "4.RF.3", type: "mc", q: "How many syllables are in the word butterfly?", options: ["3", "2", "4", "1"], a: 0, why: "but-ter-fly = 3 syllables." },
      { id: "rf3b", obj: "4.RF.3", type: "mc", q: "The word unhappiness is built from these parts:", options: ["un + happy + ness", "unh + appi + ness", "u + nhappi + ness", "unhapp + iness"], a: 0, why: "Prefix 'un-' + root 'happy' + suffix '-ness'." },
      { id: "rf3c", obj: "4.RF.3", type: "mc", q: "Which prefix means 'not'?", options: ["un-", "re-", "pre-", "mis-"], a: 0, why: "'un-' means not (unhappy = not happy)." },
      { id: "rf3d", obj: "4.RF.3", type: "mc", q: "To read a long word like independent, it helps to:", options: ["Break it into syllables and parts", "Guess from the first letter only", "Skip it", "Spell it backward"], a: 0, why: "Decode long words by chunking them into parts." },
      // 4.RL.4
      { id: "rl4a", obj: "4.RL.4", type: "mc", q: "In 'The old house groaned in the wind,' the word groaned suggests the house:", options: ["Made a low creaking sound", "Was happy", "Was freshly painted", "Was very tall"], a: 0, why: "'Groaned' is a sound word suggesting creaking." },
      { id: "rl4b", obj: "4.RL.4", type: "mc", q: "A character has 'the strength of Hercules.' This means they are very:", options: ["Strong", "Weak", "Quiet", "Short"], a: 0, why: "Hercules was a myth hero famous for strength (an allusion)." },
      { id: "rl4c", obj: "4.RL.4", type: "mc", q: "In 'She had a mountain of homework,' a mountain means:", options: ["A very large amount", "A real mountain", "A tiny bit", "A snack"], a: 0, why: "It's an exaggeration for a huge amount." },
      { id: "rl4d", obj: "4.RL.4", type: "mc", q: "The phrase 'quick as a wink' describes something:", options: ["Very fast", "Very slow", "Very loud", "Very cold"], a: 0, why: "A wink is fast, so it means very fast." },
      { id: "rl4e", obj: "4.RL.4", type: "mc", q: "If a plan was someone's 'Achilles' heel,' it was their:", options: ["Weak spot", "Best skill", "Favorite food", "New shoe"], a: 0, why: "An allusion to the myth of Achilles' one weak spot." },
      // 4.RL.5
      { id: "rl5a", obj: "4.RL.5", type: "mc", q: "Which is written in lines and stanzas, often with rhythm or rhyme?", options: ["A poem", "A news article", "A recipe", "A map"], a: 0, why: "Poems use lines and stanzas." },
      { id: "rl5b", obj: "4.RL.5", type: "mc", q: "In a play, the notes that tell actors how to move are called:", options: ["Stage directions", "Stanzas", "Chapters", "Verses"], a: 0, why: "Stage directions guide the actors." },
      { id: "rl5c", obj: "4.RL.5", type: "mc", q: "A story written in regular sentences and paragraphs is:", options: ["Prose", "A poem", "A song", "A stanza"], a: 0, why: "Prose is ordinary sentence-and-paragraph writing." },
      { id: "rl5d", obj: "4.RL.5", type: "mc", q: "A group of lines in a poem is called a:", options: ["Stanza", "Chapter", "Scene", "Paragraph"], a: 0, why: "Poems are grouped into stanzas." },
      { id: "rl5e", obj: "4.RL.5", type: "mc", q: "A play (drama) is usually divided into:", options: ["Acts and scenes", "Stanzas", "Verses", "Rhymes"], a: 0, why: "Plays have acts and scenes." },
      // 4.RL.6
      { id: "rl6a", obj: "4.RL.6", type: "mc", q: "A story that uses 'I' and 'me' to tell what happens is written in:", options: ["First person", "Third person", "Second person", "No point of view"], a: 0, why: "First person uses I/me." },
      { id: "rl6b", obj: "4.RL.6", type: "mc", q: "A story that uses 'he,' 'she,' and 'they' for the characters is in:", options: ["Third person", "First person", "Second person", "No point of view"], a: 0, why: "Third person uses he/she/they." },
      { id: "rl6c", obj: "4.RL.6", type: "mc", q: "In first-person point of view, the narrator is:", options: ["A character in the story", "Outside the story", "The reader", "The publisher"], a: 0, why: "A first-person narrator is inside the story." },
      { id: "rl6d", obj: "4.RL.6", type: "mc", q: "'He opened the door and saw the surprise.' This is told in:", options: ["Third person", "First person", "Second person", "No point of view"], a: 0, why: "It uses 'he' — third person." },
      { id: "rl6e", obj: "4.RL.6", type: "mc", q: "'I couldn't believe my eyes!' uses ___ point of view.", options: ["First person", "Third person", "Second person", "None"], a: 0, why: "'I' signals first person." },
      // 4.RL.9
      { id: "rl9a", obj: "4.RL.9", type: "mc", q: "Many folktales from around the world share the theme that:", options: ["Kindness is rewarded", "Being mean always wins", "Nothing matters", "Animals can't talk"], a: 0, why: "Rewarded kindness is a common folktale theme." },
      { id: "rl9b", obj: "4.RL.9", type: "mc", q: "Two stories each show a small, clever character beating a big, strong one. This is a shared:", options: ["Theme/pattern", "Setting", "Author", "Title"], a: 0, why: "It's a recurring theme or pattern." },
      { id: "rl9c", obj: "4.RL.9", type: "mc", q: "Comparing two myths means looking at how they are:", options: ["Alike and different", "Exactly copied", "Totally unrelated", "The same length"], a: 0, why: "Comparing = finding similarities and differences." },
      { id: "rl9d", obj: "4.RL.9", type: "mc", q: "A common pattern in fairy tales is:", options: ["Good triumphs over evil", "Villains always win", "No one learns anything", "Stories never end"], a: 0, why: "Good overcoming evil is a classic pattern." },
      { id: "rl9e", obj: "4.RL.9", type: "mc", q: "'The Tortoise and the Hare' and another 'slow but steady' story share a:", options: ["Lesson about patience and persistence", "Main character's name", "Setting", "Page count"], a: 0, why: "They share the same theme." },
      // 4.RI.4
      { id: "ri4a", obj: "4.RI.4", type: "mc", q: "In a science text, 'The water will evaporate in the sun.' Evaporate means to:", options: ["Turn into vapor (gas)", "Freeze solid", "Spill over", "Get colder"], a: 0, why: "Evaporate = change from liquid to gas." },
      { id: "ri4b", obj: "4.RI.4", type: "mc", q: "In a government text, 'citizens' means:", options: ["Members of a country or community", "Buildings", "Laws", "Animals"], a: 0, why: "Citizens are members of a community/country." },
      { id: "ri4c", obj: "4.RI.4", type: "mc", q: "A text says 'The heart pumps blood through arteries.' An artery is a kind of:", options: ["Blood vessel", "Bone", "Food", "Tooth"], a: 0, why: "Arteries are blood vessels." },
      { id: "ri4d", obj: "4.RI.4", type: "mc", q: "To figure out a hard science word in a text, you can use:", options: ["Context clues and a glossary", "Only the cover", "The page number", "The author's name"], a: 0, why: "Context and a glossary give the meaning." },
      { id: "ri4e", obj: "4.RI.4", type: "mc", q: "In a history text, an 'ancestor' is a:", options: ["Family member from long ago", "A new baby", "A stranger", "A building"], a: 0, why: "Ancestors are relatives from the past." },
      // 4.RI.5
      { id: "ri5a", obj: "4.RI.5", type: "mc", q: "A text that lists First, Next, Then, Finally uses a ___ structure.", options: ["Sequence (order of steps)", "Compare/contrast", "Cause/effect", "Problem/solution"], a: 0, why: "Those signal words show sequence." },
      { id: "ri5b", obj: "4.RI.5", type: "mc", q: "A text explaining WHY something happened and WHAT resulted uses:", options: ["Cause and effect", "A poem", "A rhyme", "Alphabetical order"], a: 0, why: "Cause/effect links a reason to a result." },
      { id: "ri5c", obj: "4.RI.5", type: "mc", q: "A text showing how two animals are alike and different uses:", options: ["Compare and contrast", "Sequence", "Rhyme", "A cast list"], a: 0, why: "Alike-and-different is compare/contrast." },
      { id: "ri5d", obj: "4.RI.5", type: "mc", q: "A text that describes a trouble and then how it was fixed uses:", options: ["Problem and solution", "Rhyme scheme", "A stanza", "A cast list"], a: 0, why: "Trouble + fix = problem/solution." },
      { id: "ri5e", obj: "4.RI.5", type: "mc", q: "Signal words like 'because,' 'so,' and 'as a result' point to a ___ structure.", options: ["Cause/effect", "Sequence", "Compare", "Rhyme"], a: 0, why: "They connect causes to effects." },
      // 4.RI.6
      { id: "ri6a", obj: "4.RI.6", type: "mc", q: "A firsthand account of an event is told by:", options: ["Someone who was there", "A reporter who wasn't there", "A later textbook author", "A stranger"], a: 0, why: "Firsthand = from someone who experienced it." },
      { id: "ri6b", obj: "4.RI.6", type: "mc", q: "A diary entry by a soldier about a battle he fought is a ___ account.", options: ["Firsthand", "Secondhand", "Fictional", "Rhyming"], a: 0, why: "He was there, so it's firsthand." },
      { id: "ri6c", obj: "4.RI.6", type: "mc", q: "A textbook paragraph summarizing a battle, written by a historian later, is a ___ account.", options: ["Secondhand", "Firsthand", "Personal", "Poetic"], a: 0, why: "The writer wasn't there — secondhand." },
      { id: "ri6d", obj: "4.RI.6", type: "mc", q: "Firsthand accounts often use words like:", options: ["I and we", "it is known", "the author states", "long ago they"], a: 0, why: "First-person words signal a firsthand account." },
      { id: "ri6e", obj: "4.RI.6", type: "mc", q: "Why read both firsthand AND secondhand accounts?", options: ["To get personal detail AND a broad overview", "To get confused", "They're identical", "Only one is allowed"], a: 0, why: "Each gives something the other doesn't." },
      // 4.RI.8
      { id: "ri8a", obj: "4.RI.8", type: "mc", q: "An author claims 'Recess is important.' Good EVIDENCE would be:", options: ["A study showing recess improves focus", "The author likes recess", "Recess is a nice word", "It sounds fun"], a: 0, why: "Evidence is facts/data that support the point." },
      { id: "ri8b", obj: "4.RI.8", type: "mc", q: "Reasons and evidence in a text are used to:", options: ["Support the author's point", "Decorate the page", "Confuse readers", "Rhyme"], a: 0, why: "They back up the author's claims." },
      { id: "ri8c", obj: "4.RI.8", type: "mc", q: "Which is EVIDENCE, not just an opinion?", options: ["Sharks have existed for over 400 million years", "Sharks are the coolest animal", "Sharks are scary", "I love sharks"], a: 0, why: "A fact can be checked; the others are opinions." },
      { id: "ri8d", obj: "4.RI.8", type: "mc", q: "To check if an author's point is well supported, look for:", options: ["Facts, examples, and reasons", "Pretty pictures only", "The title", "The page count"], a: 0, why: "Support comes from facts, examples, and reasons." },
      { id: "ri8e", obj: "4.RI.8", type: "mc", q: "An author writes 'Plant trees because they clean the air and give shade.' The reasons given are:", options: ["They clean the air and give shade", "Trees are tall", "The author's name", "A rhyme"], a: 0, why: "Those two 'because' statements are the reasons." },
      // 4.L.6
      { id: "l6a", obj: "4.L.6", type: "mc", q: "The science word 'observe' means to:", options: ["Watch carefully", "Run fast", "Guess", "Ignore"], a: 0, why: "To observe is to watch closely." },
      { id: "l6b", obj: "4.L.6", type: "mc", q: "In math, 'estimate' means to:", options: ["Make a close guess", "Find the exact answer always", "Erase", "Count to ten"], a: 0, why: "An estimate is a reasonable approximate value." },
      { id: "l6c", obj: "4.L.6", type: "mc", q: "The academic word 'compare' asks you to tell how things are:", options: ["Alike and different", "Only wrong", "Loud", "Colored"], a: 0, why: "Comparing looks at similarities and differences." },
      { id: "l6d", obj: "4.L.6", type: "mc", q: "The word 'predict' means to:", options: ["Say what will probably happen", "Look only at the past", "Measure weight", "Draw a picture"], a: 0, why: "A prediction says what will likely happen." },
      { id: "l6e", obj: "4.L.6", type: "mc", q: "When a teacher says 'summarize the text,' they want you to:", options: ["Tell the main points briefly", "Copy every word", "Read it louder", "Skip it"], a: 0, why: "A summary is a brief retelling of the main points." },
      // 5th questions for the original objectives
      { id: "rl1e", obj: "4.RL.1", type: "mc", q: "Read: The lights flickered and Sam pulled the blanket tighter. Sam most likely feels:", options: ["Scared", "Excited", "Bored", "Hungry"], a: 0, why: "Flickering lights + pulling the blanket close suggests fear." },
      { id: "rl2e", obj: "4.RL.2", type: "mc", q: "A fable usually ends with a short lesson called a:", options: ["Moral", "Title", "Rhyme", "Setting"], a: 0, why: "A fable's lesson is its moral." },
      { id: "rl3e", obj: "4.RL.3", type: "mc", q: "Read: Dev practiced the piano every day, even when it was hard. Dev is:", options: ["Determined", "Lazy", "Cruel", "Shy"], a: 0, why: "Practicing even when it's hard shows determination." },
      { id: "ri1e", obj: "4.RI.1", type: "mc", q: "The best way to answer 'What does the text say?' is to:", options: ["Find the exact words in the text", "Guess", "Use the picture only", "Skip ahead"], a: 0, why: "Go back to the text for the evidence." },
      { id: "ri2e", obj: "4.RI.2", type: "mc", q: "The sentence that often states the main idea of a paragraph is the:", options: ["Topic sentence", "Last word", "Page number", "Caption"], a: 0, why: "The topic sentence usually states the main idea." },
      { id: "ri3e", obj: "4.RI.3", type: "mc", q: "Read: The seed sprouts, then grows leaves, then flowers. What happens after it sprouts?", options: ["It grows leaves", "It flowers", "It dies", "It becomes a seed again"], a: 0, why: "The order in the text: sprout → leaves → flowers." },
      { id: "l1e", obj: "4.L.1", type: "mc", q: "Choose the correct word: 'The team played ___ best game.'", options: ["its", "it's", "its'", "it is"], a: 0, why: "'Its' shows possession; 'it's' means 'it is'." },
      { id: "l2e", obj: "4.L.2", type: "mc", q: "Which word should be capitalized in 'my friend lives in texas'?", options: ["Texas", "friend", "lives", "in"], a: 0, why: "Texas is a proper noun." },
      { id: "l4e", obj: "4.L.4", type: "mc", q: "The root 'port' (as in transport and portable) means:", options: ["Carry", "Water", "Fire", "See"], a: 0, why: "'Port' means to carry." },
      { id: "l5e", obj: "4.L.5", type: "mc", q: "'The classroom was a zoo' is an example of a:", options: ["Metaphor", "Simile", "Fact", "Rhyme"], a: 0, why: "It calls one thing another directly — a metaphor." },
      { id: "rf3e", obj: "4.RF.3", type: "mc", q: "Which word has the prefix 'pre-' meaning 'before'?", options: ["preview", "review", "unfair", "helpful"], a: 0, why: "Preview = view before." }
    ]
  },

  "g4-social": {
    id: "g4-social", title: "Grade 4 Social Studies", subjectKey: "social", grade: "4",
    standard: "Massachusetts History & Social Science (Grade 4) + C3 Framework",
    note: "Pilot course: geography & map skills, civics & government, economics, and early history (Social studies has no Common Core; codes are internal, aligned to MA frameworks).",
    domains: [
      { code: "G", name: "Geography & Map Skills" },
      { code: "C", name: "Civics & Government" },
      { code: "E", name: "Economics" },
      { code: "H", name: "History" }
    ],
    objectives: [
      { code: "4.SS.G1", domain: "G", weight: 1.0, title: "Use map skills: directions, the compass rose, and the map key", xwalk: { cc: "", ma: "4.T1", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.G2", domain: "G", weight: 0.9, title: "Identify the continents and oceans", xwalk: { cc: "", ma: "4.T1", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.G3", domain: "G", weight: 1.0, title: "Identify US regions and major landforms", xwalk: { cc: "", ma: "4.T2", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.G4", domain: "G", weight: 0.9, title: "Use the globe: equator, latitude/longitude, hemispheres", xwalk: { cc: "", ma: "4.T1", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.C1", domain: "C", weight: 1.1, title: "Rights and responsibilities of citizens", xwalk: { cc: "", ma: "4.T4", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.C2", domain: "C", weight: 1.0, title: "Levels of government: local, state, and national", xwalk: { cc: "", ma: "4.T4", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.C3", domain: "C", weight: 0.9, title: "Why communities have rules and laws", xwalk: { cc: "", ma: "4.T4", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.E1", domain: "E", weight: 1.0, title: "Goods and services; needs versus wants", xwalk: { cc: "", ma: "4.T5", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.E2", domain: "E", weight: 0.9, title: "Producers, consumers, and scarcity", xwalk: { cc: "", ma: "4.T5", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.H1", domain: "H", weight: 1.0, title: "Native American cultures were shaped by their regions", xwalk: { cc: "", ma: "4.T3", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.H2", domain: "H", weight: 0.9, title: "Read timelines and use chronological order", xwalk: { cc: "", ma: "4.T3", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.G5", domain: "G", weight: 0.9, title: "Use a map's scale and legend to read distances and features", xwalk: { cc: "", ma: "4.T1", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.G6", domain: "G", weight: 1.0, title: "Explain how climate and resources shape how people live", xwalk: { cc: "", ma: "4.T2", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.C4", domain: "C", weight: 1.1, title: "Identify the three branches of government and what each does", xwalk: { cc: "", ma: "4.T4", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.C5", domain: "C", weight: 1.0, title: "Recognize key US symbols and founding documents", xwalk: { cc: "", ma: "4.T4", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.E3", domain: "E", weight: 1.0, title: "Understand money, saving, trade, and the choices scarcity forces", xwalk: { cc: "", ma: "4.T5", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.E4", domain: "E", weight: 0.9, title: "Explain why people pay taxes and what public goods are", xwalk: { cc: "", ma: "4.T5", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.H3", domain: "H", weight: 1.0, title: "Describe why European explorers came to the Americas", xwalk: { cc: "", ma: "4.T3", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.H4", domain: "H", weight: 0.9, title: "Explain why people move to and within a country (immigration)", xwalk: { cc: "", ma: "4.T3", teks: "", vasol: "", flbest: "" } },
      { code: "4.SS.H5", domain: "H", weight: 0.9, title: "Tell the difference between primary and secondary sources", xwalk: { cc: "", ma: "4.T3", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // G1
      { id: "ssg1a", obj: "4.SS.G1", type: "mc", q: "On most maps, which direction is at the top?", options: ["North", "South", "East", "West"], a: 0, why: "By convention, north is at the top of a map." },
      { id: "ssg1b", obj: "4.SS.G1", type: "mc", q: "The part of a map that explains what the symbols mean is the:", options: ["Map key (legend)", "Title", "Scale", "Border"], a: 0, why: "The key, or legend, explains the symbols." },
      { id: "ssg1c", obj: "4.SS.G1", type: "mc", q: "The compass rose on a map shows:", options: ["Directions (N, S, E, W)", "The weather", "The population", "The time"], a: 0, why: "A compass rose shows directions." },
      { id: "ssg1d", obj: "4.SS.G1", type: "mc", q: "If you travel from the United States toward the North Pole, you are heading:", options: ["North", "South", "East", "West"], a: 0, why: "The North Pole is to the north." },
      // G2
      { id: "ssg2a", obj: "4.SS.G2", type: "mc", q: "How many continents are there on Earth?", options: ["7", "5", "4", "10"], a: 0, why: "There are 7 continents." },
      { id: "ssg2b", obj: "4.SS.G2", type: "mc", q: "Which is the largest ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], a: 0, why: "The Pacific is the largest ocean." },
      { id: "ssg2c", obj: "4.SS.G2", type: "multi", q: "Select ALL of these that are CONTINENTS.", options: ["Africa", "Asia", "Antarctica", "Canada", "Europe"], correct: [0, 1, 2, 4], why: "Canada is a country, not a continent." },
      { id: "ssg2d", obj: "4.SS.G2", type: "mc", q: "The continent the United States is located on is:", options: ["North America", "Europe", "Asia", "Africa"], a: 0, why: "The US is in North America." },
      // G3
      { id: "ssg3a", obj: "4.SS.G3", type: "mc", q: "A large area of flat or gently rolling land, good for farming, is a:", options: ["Plain", "Mountain", "Ocean", "Canyon"], a: 0, why: "Plains are flat lands good for farming." },
      { id: "ssg3b", obj: "4.SS.G3", type: "mc", q: "A very tall landform with steep sides is a:", options: ["Mountain", "Valley", "Plain", "Island"], a: 0, why: "Mountains are tall and steep." },
      { id: "ssg3c", obj: "4.SS.G3", type: "mc", q: "Land completely surrounded by water is an:", options: ["Island", "Isthmus", "Plateau", "Plain"], a: 0, why: "An island is surrounded by water." },
      { id: "ssg3d", obj: "4.SS.G3", type: "mc", q: "The US is often divided into regions such as the Northeast, South, Midwest, and:", options: ["West", "Canada", "Europe", "Ocean"], a: 0, why: "The West is one of the main US regions." },
      // G4
      { id: "ssg4a", obj: "4.SS.G4", type: "mc", q: "The imaginary line around the middle of the Earth is the:", options: ["Equator", "Prime Meridian", "North Pole", "Border"], a: 0, why: "The Equator circles the middle of the Earth." },
      { id: "ssg4b", obj: "4.SS.G4", type: "mc", q: "Lines that run east-west and measure distance north or south of the Equator are called:", options: ["Latitude", "Longitude", "Borders", "Rivers"], a: 0, why: "Latitude lines run east-west." },
      { id: "ssg4c", obj: "4.SS.G4", type: "mc", q: "A round model of the Earth shaped like a ball is a:", options: ["Globe", "Map", "Chart", "Graph"], a: 0, why: "A globe is a 3-D model of Earth." },
      { id: "ssg4d", obj: "4.SS.G4", type: "mc", q: "The halves of the Earth divided by the Equator are called:", options: ["Hemispheres", "Continents", "Oceans", "Poles"], a: 0, why: "The Northern and Southern hemispheres." },
      // C1
      { id: "ssc1a", obj: "4.SS.C1", type: "mc", q: "A responsibility of a good citizen is to:", options: ["Follow laws and help the community", "Ignore all rules", "Never vote", "Litter"], a: 0, why: "Following laws and helping are citizen responsibilities." },
      { id: "ssc1b", obj: "4.SS.C1", type: "mc", q: "A right that US citizens have is:", options: ["Freedom of speech", "The right to break laws", "The right to never pay any taxes", "The right to own the government"], a: 0, why: "Freedom of speech is a protected right." },
      { id: "ssc1c", obj: "4.SS.C1", type: "multi", q: "Select ALL responsibilities of a good citizen.", options: ["Voting when old enough", "Obeying laws", "Helping neighbors", "Paying taxes", "Never telling the truth"], correct: [0, 1, 2, 3], why: "The first four are responsibilities of a citizen." },
      { id: "ssc1d", obj: "4.SS.C1", type: "mc", q: "Voting lets citizens:", options: ["Choose their leaders", "Avoid all rules", "Pick the weather", "Leave the country"], a: 0, why: "Voting is how citizens choose their leaders." },
      // C2
      { id: "ssc2a", obj: "4.SS.C2", type: "mc", q: "A mayor leads which level of government?", options: ["Local (a city or town)", "State", "National", "None"], a: 0, why: "A mayor leads a city or town." },
      { id: "ssc2b", obj: "4.SS.C2", type: "mc", q: "The President leads which level of government?", options: ["National (federal)", "Local", "State", "City"], a: 0, why: "The President leads the national government." },
      { id: "ssc2c", obj: "4.SS.C2", type: "mc", q: "A governor leads a:", options: ["State", "City", "Country", "School"], a: 0, why: "Governors lead states." },
      { id: "ssc2d", obj: "4.SS.C2", type: "mc", q: "Laws for the whole country are made by the:", options: ["National government (Congress)", "Your school", "Your family", "A single city"], a: 0, why: "Congress makes national laws." },
      // C3
      { id: "ssc3a", obj: "4.SS.C3", type: "mc", q: "Communities have rules and laws mainly to:", options: ["Keep people safe and treat them fairly", "Make life boring", "Help only leaders", "Waste time"], a: 0, why: "Rules and laws keep people safe and fair." },
      { id: "ssc3b", obj: "4.SS.C3", type: "mc", q: "What might happen if there were no traffic laws?", options: ["Driving would be dangerous", "Everyone would be safer", "Cars would fly", "Nothing would change"], a: 0, why: "Traffic laws keep driving orderly and safe." },
      { id: "ssc3c", obj: "4.SS.C3", type: "mc", q: "A rule and a law are alike because both:", options: ["Tell people how to behave", "Are always fun", "Cost money", "Are secret"], a: 0, why: "Both guide how people behave." },
      { id: "ssc3d", obj: "4.SS.C3", type: "mc", q: "Who is expected to follow a community's laws?", options: ["Everyone", "Only children", "Only adults", "Only leaders"], a: 0, why: "Laws apply to everyone." },
      // E1
      { id: "sse1a", obj: "4.SS.E1", type: "mc", q: "A haircut is an example of a:", options: ["Service", "Good", "Need", "Factory"], a: 0, why: "A service is useful work done for others." },
      { id: "sse1b", obj: "4.SS.E1", type: "mc", q: "A toy, a shirt, and an apple are all examples of:", options: ["Goods", "Services", "Taxes", "Laws"], a: 0, why: "Goods are physical products you can hold." },
      { id: "sse1c", obj: "4.SS.E1", type: "mc", q: "Which is a NEED, not just a want?", options: ["Food", "A video game", "Candy", "A toy"], a: 0, why: "Food is a basic need for survival." },
      { id: "sse1d", obj: "4.SS.E1", type: "multi", q: "Select ALL that are SERVICES.", options: ["A doctor's checkup", "Teaching a class", "Delivering mail", "A loaf of bread"], correct: [0, 1, 2], why: "Bread is a good; the other three are services." },
      // E2
      { id: "sse2a", obj: "4.SS.E2", type: "mc", q: "A person who makes or grows goods is a:", options: ["Producer", "Consumer", "Tourist", "Voter"], a: 0, why: "Producers make or grow goods." },
      { id: "sse2b", obj: "4.SS.E2", type: "mc", q: "A person who buys and uses goods is a:", options: ["Consumer", "Producer", "Mayor", "Factory"], a: 0, why: "Consumers buy and use goods." },
      { id: "sse2c", obj: "4.SS.E2", type: "mc", q: "When there is not enough of something for everyone who wants it, that is:", options: ["Scarcity", "Plenty", "A service", "A law"], a: 0, why: "Scarcity means limited supply." },
      { id: "sse2d", obj: "4.SS.E2", type: "mc", q: "Because of scarcity, people must:", options: ["Make choices", "Have everything", "Never trade", "Stop working"], a: 0, why: "Limited resources force people to make choices." },
      // H1
      { id: "ssh1a", obj: "4.SS.H1", type: "mc", q: "Native American groups in different regions had different ways of life mostly because of:", options: ["The land and resources around them", "Their favorite colors", "The internet", "Cars"], a: 0, why: "The environment shaped how groups lived." },
      { id: "ssh1b", obj: "4.SS.H1", type: "mc", q: "Many Great Plains Native American groups depended heavily on the:", options: ["Buffalo (bison)", "Ocean whales", "Pineapple", "Camel"], a: 0, why: "Buffalo were central to Plains life." },
      { id: "ssh1c", obj: "4.SS.H1", type: "mc", q: "Native Americans lived in the Americas:", options: ["Long before European explorers arrived", "Only after the year 1900", "Only in modern cities", "Just last year"], a: 0, why: "They lived here for thousands of years before Europeans." },
      { id: "ssh1d", obj: "4.SS.H1", type: "mc", q: "The kinds of homes and foods a Native American group had depended on:", options: ["The natural environment of their region", "The alphabet", "Television", "Airplanes"], a: 0, why: "Available resources came from the environment." },
      // H2
      { id: "ssh2a", obj: "4.SS.H2", type: "mc", q: "A timeline shows events in order of:", options: ["Time (when they happened)", "Size", "Color", "Price"], a: 0, why: "Timelines are ordered by time." },
      { id: "ssh2b", obj: "4.SS.H2", type: "mc", q: "On most timelines, the earliest event is on the:", options: ["Left", "Right", "Top corner", "Bottom"], a: 0, why: "Timelines read from left (earliest) to right (latest)." },
      { id: "ssh2c", obj: "4.SS.H2", type: "mc", q: "The word chronological means in order of:", options: ["Time", "Importance", "Height", "The alphabet"], a: 0, why: "Chronological means time order." },
      { id: "ssh2d", obj: "4.SS.H2", type: "mc", q: "A period of 100 years is called a:", options: ["Century", "Decade", "Year", "Week"], a: 0, why: "A century is 100 years." },
      // 4.SS.G5
      { id: "ssg5a", obj: "4.SS.G5", type: "mc", q: "A map's SCALE tells you:", options: ["How real distances compare to distances on the map", "The map's title", "Who made the map", "The weather"], a: 0, why: "Scale relates map distance to real distance." },
      { id: "ssg5b", obj: "4.SS.G5", type: "mc", q: "If a map's scale is 1 inch = 10 miles, then 2 inches on the map equals:", options: ["20 miles", "2 miles", "10 miles", "100 miles"], a: 0, why: "2 × 10 = 20 miles." },
      { id: "ssg5c", obj: "4.SS.G5", type: "mc", q: "A small picture on a map, explained in the legend, is a map:", options: ["Symbol", "Scale", "Title", "Border"], a: 0, why: "Symbols stand for real features." },
      { id: "ssg5d", obj: "4.SS.G5", type: "mc", q: "To find what a blue line on a map stands for, you check the:", options: ["Legend (key)", "Scale", "Compass", "Title"], a: 0, why: "The legend explains the symbols." },
      { id: "ssg5e", obj: "4.SS.G5", type: "mc", q: "Map scale helps you figure out:", options: ["How far apart two places are", "The time of day", "People's names", "The temperature"], a: 0, why: "Scale gives real-world distances." },
      // 4.SS.G6
      { id: "ssg6a", obj: "4.SS.G6", type: "mc", q: "People in a very cold, snowy region are MOST likely to:", options: ["Wear heavy coats and heat their homes", "Grow bananas outside", "Swim at the beach daily", "Never need shelter"], a: 0, why: "People adapt to a cold climate." },
      { id: "ssg6b", obj: "4.SS.G6", type: "mc", q: "A region with rich soil and plenty of rain is well suited for:", options: ["Farming", "Deep-sea fishing only", "No activities", "Skiing only"], a: 0, why: "Good soil and rain support farming." },
      { id: "ssg6c", obj: "4.SS.G6", type: "mc", q: "A town built beside a big river might use the river for:", options: ["Water, travel, and trade", "Nothing", "Decoration only", "Blocking the sun"], a: 0, why: "Rivers provide water, transport, and trade." },
      { id: "ssg6d", obj: "4.SS.G6", type: "mc", q: "Why do many large cities grow near coasts or rivers?", options: ["For water, trade, and transportation", "To avoid people", "Because of deserts", "For no reason"], a: 0, why: "Water access supports trade and travel." },
      { id: "ssg6e", obj: "4.SS.G6", type: "mc", q: "Natural resources like forests and minerals affect a region's:", options: ["Jobs and economy", "Alphabet", "Day of the week", "Flag colors"], a: 0, why: "Resources shape the kinds of work available." },
      // 4.SS.C4
      { id: "ssc4a", obj: "4.SS.C4", type: "mc", q: "How many branches does the US federal government have?", options: ["Three", "One", "Five", "Ten"], a: 0, why: "Legislative, Executive, and Judicial — three branches." },
      { id: "ssc4b", obj: "4.SS.C4", type: "mc", q: "The branch that MAKES laws is the:", options: ["Legislative (Congress)", "Executive", "Judicial", "Local"], a: 0, why: "Congress (legislative) makes laws." },
      { id: "ssc4c", obj: "4.SS.C4", type: "mc", q: "The branch that CARRIES OUT laws, led by the President, is the:", options: ["Executive", "Legislative", "Judicial", "City council"], a: 0, why: "The executive branch carries out laws." },
      { id: "ssc4d", obj: "4.SS.C4", type: "mc", q: "The branch that decides if laws follow the Constitution (the courts) is the:", options: ["Judicial", "Executive", "Legislative", "Mayor"], a: 0, why: "The judicial branch interprets the laws." },
      { id: "ssc4e", obj: "4.SS.C4", type: "mc", q: "Having three branches helps make sure:", options: ["No one branch has too much power", "One person rules everything", "Laws stay secret", "There are no laws"], a: 0, why: "It balances power among the branches." },
      // 4.SS.C5
      { id: "ssc5a", obj: "4.SS.C5", type: "mc", q: "The document that sets out the basic plan and laws of the US government is the:", options: ["Constitution", "Grocery list", "Weather report", "Phone book"], a: 0, why: "The Constitution is the plan of government." },
      { id: "ssc5b", obj: "4.SS.C5", type: "mc", q: "The Declaration of Independence announced that the colonies would:", options: ["Be free from Britain", "Stay British forever", "Have no leaders", "Become one city"], a: 0, why: "It declared independence from Britain." },
      { id: "ssc5c", obj: "4.SS.C5", type: "mc", q: "The bald eagle and the flag are US:", options: ["Symbols", "Laws", "Taxes", "Rivers"], a: 0, why: "They are national symbols." },
      { id: "ssc5d", obj: "4.SS.C5", type: "mc", q: "The Statue of Liberty is a symbol of:", options: ["Freedom and welcome", "War", "Winter", "Farming"], a: 0, why: "It symbolizes liberty and welcoming newcomers." },
      { id: "ssc5e", obj: "4.SS.C5", type: "mc", q: "The first part of the Constitution that lists basic rights is the:", options: ["Bill of Rights", "Map key", "Timeline", "Legend"], a: 0, why: "The Bill of Rights lists protected rights." },
      // 4.SS.E3
      { id: "sse3a", obj: "4.SS.E3", type: "mc", q: "Trading goods directly without using money is called:", options: ["Bartering", "Saving", "Paying tax", "Borrowing"], a: 0, why: "Barter is trading goods for goods." },
      { id: "sse3b", obj: "4.SS.E3", type: "mc", q: "When you spend money on one thing, you give up buying something else. That give-up is a:", options: ["Trade-off (opportunity cost)", "Tax", "Profit", "Map"], a: 0, why: "Every choice has an opportunity cost." },
      { id: "sse3c", obj: "4.SS.E3", type: "mc", q: "Saving money means:", options: ["Keeping some instead of spending it all", "Spending everything", "Giving it all away", "Losing it"], a: 0, why: "Saving is setting money aside." },
      { id: "sse3d", obj: "4.SS.E3", type: "mc", q: "People use money instead of trading goods because money is:", options: ["Easy to use for any purchase", "Only for the rich", "Never accepted", "Made of gold only"], a: 0, why: "Money is accepted everywhere for goods and services." },
      { id: "sse3e", obj: "4.SS.E3", type: "mc", q: "Because we can't have everything (scarcity), we must:", options: ["Make choices about what to buy", "Buy it all", "Never shop", "Stop earning"], a: 0, why: "Scarcity forces choices." },
      // 4.SS.E4
      { id: "sse4a", obj: "4.SS.E4", type: "mc", q: "Taxes are money that people pay to:", options: ["The government, to pay for shared services", "A toy store", "Their neighbors", "No one"], a: 0, why: "Taxes fund government services." },
      { id: "sse4b", obj: "4.SS.E4", type: "mc", q: "Which is paid for by taxes (a public good)?", options: ["Public schools and roads", "A private birthday gift", "Your own candy", "A video game you buy"], a: 0, why: "Schools and roads are public goods." },
      { id: "sse4c", obj: "4.SS.E4", type: "multi", q: "Select ALL the things taxes usually help pay for.", options: ["Roads", "Public schools", "Firefighters and police", "Your personal toys"], correct: [0, 1, 2], why: "Personal toys aren't paid for by taxes." },
      { id: "sse4d", obj: "4.SS.E4", type: "mc", q: "Public parks are free to use because they are paid for by:", options: ["Taxes (everyone's shared money)", "One person", "Nobody", "A candy sale"], a: 0, why: "Taxes fund public parks." },
      { id: "sse4e", obj: "4.SS.E4", type: "mc", q: "A 'public good' is something that:", options: ["Is shared by the whole community", "Only one person owns", "Can't be used", "Is always a toy"], a: 0, why: "Public goods are shared by everyone." },
      // 4.SS.H3
      { id: "ssh3a", obj: "4.SS.H3", type: "mc", q: "European explorers like Columbus sailed hoping to find:", options: ["New trade routes and riches", "The North Pole only", "Nothing in particular", "A new moon"], a: 0, why: "They sought trade routes and wealth." },
      { id: "ssh3b", obj: "4.SS.H3", type: "mc", q: "When Europeans arrived, the Americas were:", options: ["Already home to millions of Native Americans", "Completely empty", "Only ocean", "Underwater"], a: 0, why: "Native peoples had lived there for thousands of years." },
      { id: "ssh3c", obj: "4.SS.H3", type: "mc", q: "Explorers crossed the ocean by:", options: ["Sailing ships", "Airplanes", "Trains", "Cars"], a: 0, why: "They used sailing ships." },
      { id: "ssh3d", obj: "4.SS.H3", type: "mc", q: "One result of European exploration was:", options: ["Contact and conflict between Europeans and Native peoples", "Nothing changed", "The Americas disappeared", "Time stopped"], a: 0, why: "Exploration led to major (and often harmful) contact." },
      { id: "ssh3e", obj: "4.SS.H3", type: "mc", q: "Explorers often claimed the land for:", options: ["Their home countries (like Spain or England)", "Themselves forever", "No one", "The ocean"], a: 0, why: "They claimed territory for their nations." },
      // 4.SS.H4
      { id: "ssh4a", obj: "4.SS.H4", type: "mc", q: "Many people have immigrated to the United States to find:", options: ["Freedom and a better life", "Worse jobs", "Nothing", "Colder weather"], a: 0, why: "Opportunity and freedom draw immigrants." },
      { id: "ssh4b", obj: "4.SS.H4", type: "mc", q: "A person who moves to a new country to live there is an:", options: ["Immigrant", "Explorer", "Ancestor", "Astronaut"], a: 0, why: "Immigrants move to a new country to settle." },
      { id: "ssh4c", obj: "4.SS.H4", type: "mc", q: "The United States is often called a nation of:", options: ["Immigrants", "Only one group", "Robots", "Islands"], a: 0, why: "People came from all over the world." },
      { id: "ssh4d", obj: "4.SS.H4", type: "mc", q: "People sometimes move to a new place because of:", options: ["Jobs, safety, or family", "No reason ever", "To get lost", "Boredom only"], a: 0, why: "Work, safety, and family are common reasons." },
      { id: "ssh4e", obj: "4.SS.H4", type: "mc", q: "Different immigrant groups have brought the US their:", options: ["Foods, traditions, and languages", "Nothing at all", "Only problems", "The same exact culture"], a: 0, why: "Immigrants enrich the culture." },
      // 4.SS.H5
      { id: "ssh5a", obj: "4.SS.H5", type: "mc", q: "A primary source is:", options: ["A record made by someone who was there (a letter, diary, or photo)", "A textbook written much later", "A made-up story", "A guess"], a: 0, why: "Primary sources come from the time and the people involved." },
      { id: "ssh5b", obj: "4.SS.H5", type: "mc", q: "A textbook or encyclopedia article about the past is a ___ source.", options: ["Secondary", "Primary", "Fictional", "Rhyming"], a: 0, why: "It was written later, about the events — secondary." },
      { id: "ssh5c", obj: "4.SS.H5", type: "mc", q: "Which is a PRIMARY source about the 1800s?", options: ["A diary written in the 1800s", "A new movie about the 1800s", "A modern textbook", "A guess"], a: 0, why: "A diary from the time is a primary source." },
      { id: "ssh5d", obj: "4.SS.H5", type: "mc", q: "Historians use sources to:", options: ["Learn what really happened in the past", "Predict the lottery", "Make maps only", "Do math"], a: 0, why: "Sources are evidence about the past." },
      { id: "ssh5e", obj: "4.SS.H5", type: "mc", q: "An old photograph taken during an event is a:", options: ["Primary source", "Secondary source", "Fiction", "Prediction"], a: 0, why: "It captured the event firsthand." },
      // 5th questions for the original objectives
      { id: "ssg1e", obj: "4.SS.G1", type: "mc", q: "On a compass, halfway between north and east is:", options: ["Northeast", "South", "West", "Down"], a: 0, why: "The in-between direction is northeast." },
      { id: "ssg2e", obj: "4.SS.G2", type: "mc", q: "Which of these is an OCEAN, not a continent?", options: ["Atlantic", "Africa", "Asia", "Europe"], a: 0, why: "The Atlantic is an ocean." },
      { id: "ssg3e", obj: "4.SS.G3", type: "mc", q: "A low area of land between hills or mountains is a:", options: ["Valley", "Peak", "Island", "Plateau"], a: 0, why: "A valley is low land between higher land." },
      { id: "ssg4e", obj: "4.SS.G4", type: "mc", q: "The imaginary line at 0° longitude is the:", options: ["Prime Meridian", "Equator", "Border", "Coastline"], a: 0, why: "The Prime Meridian is 0° longitude." },
      { id: "ssc1e", obj: "4.SS.C1", type: "mc", q: "Serving on a jury is a ___ of citizens.", options: ["Responsibility", "Toy", "Vacation", "Snack"], a: 0, why: "Jury duty is a civic responsibility." },
      { id: "ssc2e", obj: "4.SS.C2", type: "mc", q: "A city council makes rules for a:", options: ["Local city or town", "Whole country", "Single family", "School club only"], a: 0, why: "City councils govern locally." },
      { id: "ssc3e", obj: "4.SS.C3", type: "mc", q: "A school rule like 'walk in the hallway' exists mainly to:", options: ["Keep students safe", "Make school boring", "Punish teachers", "Waste time"], a: 0, why: "Rules protect safety." },
      { id: "sse1e", obj: "4.SS.E1", type: "mc", q: "A NEED is something you must have to live; a WANT is something you:", options: ["Would like but can live without", "Must have to live", "Can never get", "Always sell"], a: 0, why: "Wants are nice-to-haves, not necessities." },
      { id: "sse2e", obj: "4.SS.E2", type: "mc", q: "A farmer who grows corn to sell is acting as a:", options: ["Producer", "Consumer", "Tourist", "Judge"], a: 0, why: "Producers make or grow goods." },
      { id: "ssh1e", obj: "4.SS.H1", type: "mc", q: "Native American groups near forests often built homes from:", options: ["Wood and bark", "Ice only", "Steel", "Plastic"], a: 0, why: "They used the materials their environment provided." },
      { id: "ssh2e", obj: "4.SS.H2", type: "mc", q: "On a timeline, events that happened earlier go:", options: ["To the left (before)", "To the right", "On top", "Nowhere"], a: 0, why: "Timelines run earliest-left to latest-right." }
    ]
  },

  "g5-math": {
    id: "g5-math", title: "Grade 5 Math", subjectKey: "math", grade: "5",
    standard: "Massachusetts Curriculum Frameworks — Grade 5 Mathematics",
    note: "Pilot course: a representative set of Grade 5 objectives across all five domains.",
    domains: [
      { code: "OA", name: "Operations & Algebraic Thinking" },
      { code: "NBT", name: "Number & Operations in Base Ten" },
      { code: "NF", name: "Fractions" },
      { code: "MD", name: "Measurement & Data" },
      { code: "G", name: "Geometry" }
    ],
    objectives: [
      { code: "5.OA.1", domain: "OA", weight: 1.0, title: "Evaluate expressions using parentheses and order of operations", xwalk: { cc: "5.OA.A.1", ma: "5.OA.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.1", domain: "NBT", weight: 1.0, title: "Place value: a digit is 10× the place to its right", xwalk: { cc: "5.NBT.A.1", ma: "5.NBT.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.3", domain: "NBT", weight: 1.1, title: "Read, write & compare decimals to the thousandths", xwalk: { cc: "5.NBT.A.3", ma: "5.NBT.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.4", domain: "NBT", weight: 0.9, title: "Round decimals to any place", xwalk: { cc: "5.NBT.A.4", ma: "5.NBT.A.4", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.5", domain: "NBT", weight: 1.0, title: "Multiply multi-digit whole numbers", xwalk: { cc: "5.NBT.B.5", ma: "5.NBT.B.5", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.7", domain: "NBT", weight: 1.1, title: "Add, subtract, multiply & divide decimals", xwalk: { cc: "5.NBT.B.7", ma: "5.NBT.B.7", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.1", domain: "NF", weight: 1.2, title: "Add & subtract fractions with unlike denominators", xwalk: { cc: "5.NF.A.1", ma: "5.NF.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.4", domain: "NF", weight: 1.1, title: "Multiply a fraction by a fraction or whole number", xwalk: { cc: "5.NF.B.4", ma: "5.NF.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "5.MD.1", domain: "MD", weight: 0.9, title: "Convert among measurement units", xwalk: { cc: "5.MD.A.1", ma: "5.MD.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.MD.5", domain: "MD", weight: 1.0, title: "Find the volume of rectangular prisms (l × w × h)", xwalk: { cc: "5.MD.C.5", ma: "5.MD.C.5", teks: "", vasol: "", flbest: "" } },
      { code: "5.G.1", domain: "G", weight: 0.9, title: "Plot and interpret points on the coordinate plane", xwalk: { cc: "5.G.A.1", ma: "5.G.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.OA.2", domain: "OA", weight: 0.9, title: "Write and interpret numerical expressions", xwalk: { cc: "5.OA.A.2", ma: "5.OA.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.OA.3", domain: "OA", weight: 0.8, title: "Generate two patterns and graph the ordered pairs", xwalk: { cc: "5.OA.B.3", ma: "5.OA.B.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.2", domain: "NBT", weight: 0.9, title: "Explain patterns with powers of 10 and exponents", xwalk: { cc: "5.NBT.A.2", ma: "5.NBT.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.NBT.6", domain: "NBT", weight: 1.1, title: "Divide up to 4-digit by 2-digit whole numbers", xwalk: { cc: "5.NBT.B.6", ma: "5.NBT.B.6", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.2", domain: "NF", weight: 1.1, title: "Solve word problems adding and subtracting fractions", xwalk: { cc: "5.NF.A.2", ma: "5.NF.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.3", domain: "NF", weight: 1.0, title: "Understand a fraction as division (a/b = a ÷ b)", xwalk: { cc: "5.NF.B.3", ma: "5.NF.B.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.5", domain: "NF", weight: 0.9, title: "Interpret multiplication as scaling (resizing)", xwalk: { cc: "5.NF.B.5", ma: "5.NF.B.5", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.6", domain: "NF", weight: 1.1, title: "Solve real-world problems multiplying fractions", xwalk: { cc: "5.NF.B.6", ma: "5.NF.B.6", teks: "", vasol: "", flbest: "" } },
      { code: "5.NF.7", domain: "NF", weight: 1.0, title: "Divide unit fractions and whole numbers", xwalk: { cc: "5.NF.B.7", ma: "5.NF.B.7", teks: "", vasol: "", flbest: "" } },
      { code: "5.MD.2", domain: "MD", weight: 0.8, title: "Make a line plot with fractions and use it to solve problems", xwalk: { cc: "5.MD.B.2", ma: "5.MD.B.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.MD.3", domain: "MD", weight: 0.9, title: "Understand volume as the number of unit cubes", xwalk: { cc: "5.MD.C.3", ma: "5.MD.C.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.MD.4", domain: "MD", weight: 0.9, title: "Measure volume by counting unit cubes", xwalk: { cc: "5.MD.C.4", ma: "5.MD.C.4", teks: "", vasol: "", flbest: "" } },
      { code: "5.G.2", domain: "G", weight: 0.9, title: "Graph and interpret points on the coordinate plane to solve problems", xwalk: { cc: "5.G.A.2", ma: "5.G.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.G.3", domain: "G", weight: 0.8, title: "Attributes of a shape category belong to all its subcategories", xwalk: { cc: "5.G.B.3", ma: "5.G.B.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.G.4", domain: "G", weight: 0.8, title: "Classify two-dimensional figures in a hierarchy", xwalk: { cc: "5.G.B.4", ma: "5.G.B.4", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 5.OA.1
      { id: "oa1a", obj: "5.OA.1", type: "numeric", q: "Evaluate: 3 × (4 + 2)", answer: 18, why: "Parentheses first: 4 + 2 = 6, then 3 × 6 = 18." },
      { id: "oa1b", obj: "5.OA.1", type: "numeric", q: "Evaluate: (12 − 4) ÷ 2", answer: 4, why: "12 − 4 = 8, then 8 ÷ 2 = 4." },
      { id: "oa1c", obj: "5.OA.1", type: "numeric", q: "Evaluate: 2 × (3 + 5) − 4", answer: 12, why: "3 + 5 = 8, 2 × 8 = 16, 16 − 4 = 12." },
      { id: "oa1d", obj: "5.OA.1", type: "mc", q: "In 5 × (2 + 3), what do you do FIRST?", options: ["Add 2 + 3", "Multiply 5 × 2", "Multiply 5 × 3", "Nothing"], a: 0, why: "Do what's inside the parentheses first." },
      // 5.NBT.1
      { id: "nb1a", obj: "5.NBT.1", type: "mc", q: "In 4,400, the first 4 is worth how many times the second 4?", options: ["10", "100", "2", "1000"], a: 0, why: "Each place is 10 times the place to its right." },
      { id: "nb1b", obj: "5.NBT.1", type: "mc", q: "The 7 in 7,000 is worth ___ compared to the 7 in 700.", options: ["10 times as much", "1/10 as much", "the same", "100 times as much"], a: 0, why: "7,000 is 10 times 700." },
      { id: "nb1c", obj: "5.NBT.1", type: "numeric", q: "What is 10 times 46?", answer: 460, why: "10 × 46 = 460." },
      { id: "nb1d", obj: "5.NBT.1", type: "numeric", q: "What is one-tenth (1/10) of 80?", answer: 8, why: "80 ÷ 10 = 8." },
      // 5.NBT.3
      { id: "nb3a", obj: "5.NBT.3", type: "mc", q: "Which is greater: 0.6 or 0.06?", options: ["0.6", "0.06"], a: 0, why: "0.6 = 0.60, which is greater than 0.06." },
      { id: "nb3b", obj: "5.NBT.3", type: "mc", q: "How do you write 'three and twelve hundredths' as a decimal?", options: ["3.12", "3.012", "312", "0.312"], a: 0, why: "Twelve hundredths is .12, so 3.12." },
      { id: "nb3c", obj: "5.NBT.3", type: "mc", q: "Which symbol makes it true?   0.45 ___ 0.5", options: ["<", ">", "="], a: 0, why: "0.5 = 0.50, which is greater than 0.45." },
      { id: "nb3d", obj: "5.NBT.3", type: "numeric", q: "Write 'seven tenths' as a decimal.", answer: 0.7, why: "Seven tenths = 0.7." },
      // 5.NBT.4
      { id: "nb4a", obj: "5.NBT.4", type: "numeric", q: "Round 3.47 to the nearest tenth.", answer: 3.5, why: "The hundredths digit is 7, so round up to 3.5." },
      { id: "nb4b", obj: "5.NBT.4", type: "numeric", q: "Round 8.62 to the nearest whole number.", answer: 9, why: ".62 is more than .5, so round up to 9." },
      { id: "nb4c", obj: "5.NBT.4", type: "numeric", q: "Round 0.834 to the nearest hundredth.", answer: 0.83, why: "The thousandths digit is 4, so round down to 0.83." },
      { id: "nb4d", obj: "5.NBT.4", type: "numeric", q: "Round 12.5 to the nearest whole number.", answer: 13, why: ".5 rounds up to 13." },
      // 5.NBT.5
      { id: "nb5a", obj: "5.NBT.5", type: "numeric", q: "245 × 3 = ?", answer: 735, why: "245 × 3 = 735." },
      { id: "nb5b", obj: "5.NBT.5", type: "numeric", q: "32 × 24 = ?", answer: 768, why: "32 × 24 = 768." },
      { id: "nb5c", obj: "5.NBT.5", type: "numeric", q: "126 × 12 = ?", answer: 1512, why: "126 × 12 = 1,512." },
      { id: "nb5d", obj: "5.NBT.5", type: "numeric", q: "408 × 20 = ?", answer: 8160, why: "408 × 20 = 8,160." },
      // 5.NBT.7
      { id: "nb7a", obj: "5.NBT.7", type: "numeric", q: "0.5 + 0.25 = ?", answer: 0.75, why: "0.50 + 0.25 = 0.75." },
      { id: "nb7b", obj: "5.NBT.7", type: "numeric", q: "3.6 − 1.2 = ?", answer: 2.4, why: "3.6 − 1.2 = 2.4." },
      { id: "nb7c", obj: "5.NBT.7", type: "numeric", q: "0.2 × 4 = ?", answer: 0.8, why: "0.2 × 4 = 0.8." },
      { id: "nb7d", obj: "5.NBT.7", type: "numeric", q: "1.5 + 2.75 = ?", answer: 4.25, why: "1.50 + 2.75 = 4.25." },
      // 5.NF.1
      { id: "nf1a5", obj: "5.NF.1", type: "mc", q: "1/2 + 1/4 = ?", options: ["3/4", "2/6", "1/6", "2/4"], a: 0, why: "1/2 = 2/4, plus 1/4 = 3/4." },
      { id: "nf1b5", obj: "5.NF.1", type: "mc", q: "2/3 − 1/6 = ?", options: ["1/2", "1/6", "5/6", "1/3"], a: 0, why: "2/3 = 4/6, minus 1/6 = 3/6 = 1/2." },
      { id: "nf1c5", obj: "5.NF.1", type: "mc", q: "1/3 + 1/6 = ?", options: ["1/2", "2/9", "1/9", "2/3"], a: 0, why: "1/3 = 2/6, plus 1/6 = 3/6 = 1/2." },
      { id: "nf1d5", obj: "5.NF.1", type: "mc", q: "3/4 − 1/2 = ?", options: ["1/4", "1/2", "3/8", "1/8"], a: 0, why: "3/4 − 2/4 = 1/4." },
      // 5.NF.4
      { id: "nf4a5", obj: "5.NF.4", type: "mc", q: "1/2 × 1/3 = ?", options: ["1/6", "2/5", "1/3", "3/4"], a: 0, why: "Multiply tops and bottoms: 1×1 over 2×3 = 1/6." },
      { id: "nf4b5", obj: "5.NF.4", type: "mc", q: "2/3 × 1/2 = ?", options: ["1/3", "2/5", "3/5", "4/5"], a: 0, why: "2/6 = 1/3." },
      { id: "nf4c5", obj: "5.NF.4", type: "numeric", q: "1/4 of 12 = ?", answer: 3, why: "12 ÷ 4 = 3." },
      { id: "nf4d5", obj: "5.NF.4", type: "numeric", q: "2/3 of 9 = ?", answer: 6, why: "9 ÷ 3 = 3, then × 2 = 6." },
      // 5.MD.1
      { id: "md1a", obj: "5.MD.1", type: "numeric", q: "How many centimeters are in 2 meters?", answer: 200, why: "1 m = 100 cm, so 2 m = 200 cm." },
      { id: "md1b", obj: "5.MD.1", type: "numeric", q: "How many inches are in 3 feet?", answer: 36, why: "1 ft = 12 in, so 3 ft = 36 in." },
      { id: "md1c", obj: "5.MD.1", type: "numeric", q: "How many minutes are in 2 hours?", answer: 120, why: "1 hr = 60 min, so 2 hr = 120 min." },
      { id: "md1d", obj: "5.MD.1", type: "mc", q: "Which is longer: 1 kilometer or 1 meter?", options: ["1 kilometer", "1 meter", "They are equal"], a: 0, why: "1 km = 1,000 m." },
      // 5.MD.5
      { id: "md5a", obj: "5.MD.5", type: "numeric", q: "A box is 4 cm long, 3 cm wide, and 2 cm tall. What is its volume, in cubic cm?", answer: 24, why: "V = 4 × 3 × 2 = 24." },
      { id: "md5b", obj: "5.MD.5", type: "numeric", q: "A cube has sides of 3 cm. What is its volume, in cubic cm?", answer: 27, why: "3 × 3 × 3 = 27." },
      { id: "md5c", obj: "5.MD.5", type: "mc", q: "The volume of a rectangular prism is found by:", options: ["length × width × height", "length + width + height", "length × width", "side × 4"], a: 0, why: "V = l × w × h." },
      { id: "md5d", obj: "5.MD.5", type: "numeric", q: "A box 5 cm × 2 cm × 2 cm has a volume of ___ cubic cm.", answer: 20, why: "5 × 2 × 2 = 20." },
      // 5.G.1
      { id: "g1a5", obj: "5.G.1", type: "mc", q: "In the point (3, 5), the first number tells you to move:", options: ["Right along the x-axis", "Up the y-axis", "Down", "Left"], a: 0, why: "The x-coordinate comes first (horizontal)." },
      { id: "g1b5", obj: "5.G.1", type: "mc", q: "The point where the x-axis and y-axis cross is the:", options: ["Origin", "Corner", "Peak", "End"], a: 0, why: "The origin is (0, 0)." },
      { id: "g1c5", obj: "5.G.1", type: "mc", q: "To plot the point (2, 4), you go:", options: ["Right 2, then up 4", "Up 2, then right 4", "Left 2, then down 4", "Right 4, then up 2"], a: 0, why: "x = 2 (right), y = 4 (up)." },
      { id: "g1d5", obj: "5.G.1", type: "mc", q: "The two number lines on a coordinate grid are the:", options: ["x-axis and y-axis", "top and bottom", "rows and columns", "start and end"], a: 0, why: "The horizontal x-axis and vertical y-axis." },
      // 5.OA.2
      { id: "oa2a", obj: "5.OA.2", type: "mc", q: "Which expression means 'add 8 and 7, then multiply by 2'?", options: ["2 × (8 + 7)", "2 × 8 + 7", "8 + 7 × 2", "(8 + 7) ÷ 2"], a: 0, why: "Parentheses keep the sum together, then multiply by 2." },
      { id: "oa2b", obj: "5.OA.2", type: "numeric", q: "Write as a number: 'the sum of 6 and 4, times 3'.", answer: 30, why: "(6 + 4) × 3 = 30." },
      { id: "oa2c", obj: "5.OA.2", type: "mc", q: "'3 times as large as (5 + 2)' is written:", options: ["3 × (5 + 2)", "3 + 5 + 2", "(3 × 5) + 2", "3 ÷ (5 + 2)"], a: 0, why: "Multiply 3 by the quantity (5 + 2)." },
      { id: "oa2d", obj: "5.OA.2", type: "numeric", q: "Evaluate: (10 − 2) × 5", answer: 40, why: "10 − 2 = 8, then 8 × 5 = 40." },
      // 5.OA.3
      { id: "oa3a", obj: "5.OA.3", type: "numeric", q: "Pattern A adds 2 (0, 2, 4, ...); Pattern B adds 4 (0, 4, 8, ...). When A is 6, B is ___.", answer: 12, why: "B is always double A." },
      { id: "oa3b", obj: "5.OA.3", type: "mc", q: "In the ordered pair (3, 5), the 3 is the:", options: ["x-coordinate", "y-coordinate", "origin", "sum"], a: 0, why: "The first number is the x-coordinate." },
      { id: "oa3c", obj: "5.OA.3", type: "mc", q: "If pattern B is always 3 times pattern A, the point for A = 2 is:", options: ["(2, 6)", "(6, 2)", "(2, 2)", "(3, 3)"], a: 0, why: "B = 3 × 2 = 6, so (2, 6)." },
      { id: "oa3d", obj: "5.OA.3", type: "numeric", q: "Rule: multiply by 5. If the input is 4, the output is ___.", answer: 20, why: "4 × 5 = 20." },
      // 5.NBT.2
      { id: "nb2a", obj: "5.NBT.2", type: "numeric", q: "10 × 10 × 10 = ?", answer: 1000, why: "That's 10³ = 1,000." },
      { id: "nb2b", obj: "5.NBT.2", type: "mc", q: "Multiplying a number by 10 moves the decimal point:", options: ["One place to the right", "One place to the left", "Nowhere", "Two places left"], a: 0, why: "×10 shifts the decimal one place right." },
      { id: "nb2c", obj: "5.NBT.2", type: "numeric", q: "4.5 × 100 = ?", answer: 450, why: "×100 moves the decimal two places right." },
      { id: "nb2d", obj: "5.NBT.2", type: "mc", q: "10 to the 3rd power (10³) equals:", options: ["1,000", "30", "300", "100"], a: 0, why: "10 × 10 × 10 = 1,000." },
      // 5.NBT.6
      { id: "nb6a", obj: "5.NBT.6", type: "numeric", q: "144 ÷ 12 = ?", answer: 12, why: "12 × 12 = 144." },
      { id: "nb6b", obj: "5.NBT.6", type: "numeric", q: "875 ÷ 25 = ?", answer: 35, why: "25 × 35 = 875." },
      { id: "nb6c", obj: "5.NBT.6", type: "numeric", q: "1,200 ÷ 40 = ?", answer: 30, why: "40 × 30 = 1,200." },
      { id: "nb6d", obj: "5.NBT.6", type: "numeric", q: "96 ÷ 16 = ?", answer: 6, why: "16 × 6 = 96." },
      // 5.NF.2
      { id: "nf2a", obj: "5.NF.2", type: "mc", q: "You run 1/2 mile, then 1/4 mile more. How far in total?", options: ["3/4 mile", "2/6 mile", "1/6 mile", "2/4 mile"], a: 0, why: "1/2 = 2/4, plus 1/4 = 3/4." },
      { id: "nf2b", obj: "5.NF.2", type: "mc", q: "A recipe needs 3/4 cup of flour. You've added 1/4 cup. How much more?", options: ["1/2 cup", "1/4 cup", "1 cup", "3/8 cup"], a: 0, why: "3/4 − 1/4 = 2/4 = 1/2." },
      { id: "nf2c", obj: "5.NF.2", type: "mc", q: "A board is 5/6 ft long. You cut off 1/6 ft. What is left?", options: ["4/6 ft", "6/6 ft", "4/12 ft", "5/12 ft"], a: 0, why: "5/6 − 1/6 = 4/6." },
      { id: "nf2d", obj: "5.NF.2", type: "mc", q: "You read 1/3 of a book Monday and 1/6 Tuesday. How much in total?", options: ["1/2", "2/9", "1/9", "2/3"], a: 0, why: "1/3 = 2/6, plus 1/6 = 3/6 = 1/2." },
      // 5.NF.3
      { id: "nf3a", obj: "5.NF.3", type: "mc", q: "The fraction 3/4 can be read as:", options: ["3 divided by 4", "4 divided by 3", "3 times 4", "3 minus 4"], a: 0, why: "a/b means a ÷ b." },
      { id: "nf3b", obj: "5.NF.3", type: "mc", q: "If 3 pizzas are shared equally among 4 people, each gets:", options: ["3/4 of a pizza", "4/3 pizzas", "3 pizzas", "12 pizzas"], a: 0, why: "3 ÷ 4 = 3/4." },
      { id: "nf3c", obj: "5.NF.3", type: "numeric", q: "8 ÷ 4 (written as the fraction 8/4) equals what whole number?", answer: 2, why: "8/4 = 2." },
      { id: "nf3d", obj: "5.NF.3", type: "mc", q: "5 cookies shared by 2 kids means each gets:", options: ["5/2 (2 1/2) cookies", "2/5 cookie", "10 cookies", "5 cookies"], a: 0, why: "5 ÷ 2 = 5/2 = 2 1/2." },
      // 5.NF.5
      { id: "nf5a", obj: "5.NF.5", type: "mc", q: "Multiplying a number by a fraction LESS than 1 makes the result:", options: ["Smaller than the original", "Larger", "The same", "Negative"], a: 0, why: "Scaling by less than 1 shrinks it." },
      { id: "nf5b", obj: "5.NF.5", type: "mc", q: "Multiplying 8 by 2 makes it:", options: ["Larger (16)", "Smaller", "The same", "Zero"], a: 0, why: "×2 (more than 1) makes it larger." },
      { id: "nf5c", obj: "5.NF.5", type: "mc", q: "6 × 1/2 is ___ 6.", options: ["Less than", "Greater than", "Equal to", "Double"], a: 0, why: "Half of 6 is 3, which is less than 6." },
      { id: "nf5d", obj: "5.NF.5", type: "mc", q: "Multiplying a number by 1 gives you:", options: ["The same number", "A bigger number", "Zero", "Half"], a: 0, why: "×1 leaves a number unchanged." },
      // 5.NF.6
      { id: "nf6a", obj: "5.NF.6", type: "numeric", q: "A room is 1/2 of 10 meters long. How long is it, in meters?", answer: 5, why: "1/2 × 10 = 5." },
      { id: "nf6b", obj: "5.NF.6", type: "mc", q: "You eat 1/4 of a pizza that had 8 slices. How many slices did you eat?", options: ["2", "4", "8", "1"], a: 0, why: "1/4 of 8 = 2." },
      { id: "nf6c", obj: "5.NF.6", type: "numeric", q: "3/4 of 12 cookies = ? cookies", answer: 9, why: "12 ÷ 4 = 3, × 3 = 9." },
      { id: "nf6d", obj: "5.NF.6", type: "numeric", q: "2/3 of 15 students = ? students", answer: 10, why: "15 ÷ 3 = 5, × 2 = 10." },
      // 5.NF.7
      { id: "nf7a", obj: "5.NF.7", type: "numeric", q: "How many 1/2-cup servings are in 3 cups?", answer: 6, why: "3 ÷ 1/2 = 6." },
      { id: "nf7b", obj: "5.NF.7", type: "numeric", q: "How many 1/4s are in 1 whole?", answer: 4, why: "1 ÷ 1/4 = 4." },
      { id: "nf7c", obj: "5.NF.7", type: "mc", q: "1/2 ÷ 2 = ?", options: ["1/4", "1", "2", "4"], a: 0, why: "Half, split into 2 equal parts, is a quarter." },
      { id: "nf7d", obj: "5.NF.7", type: "numeric", q: "How many 1/3-cup scoops fill 2 cups?", answer: 6, why: "2 ÷ 1/3 = 6." },
      // 5.MD.2
      { id: "md2a", obj: "5.MD.2", type: "mc", q: "A line plot can display measurements given in:", options: ["Fractions like 1/2 and 1/4", "Only whole numbers", "Only money", "Only time"], a: 0, why: "Line plots can show fractional measurements." },
      { id: "md2b", obj: "5.MD.2", type: "mc", q: "Each X above a value on a line plot represents:", options: ["One measurement", "Ten measurements", "A fraction of an X", "Nothing"], a: 0, why: "One X = one data point." },
      { id: "md2c", obj: "5.MD.2", type: "mc", q: "To find the total of all values on a line plot, you:", options: ["Add up each value times how many X's it has", "Count only the X's", "Use the biggest value", "Ignore repeats"], a: 0, why: "Multiply each value by its count, then add." },
      { id: "md2d", obj: "5.MD.2", type: "mc", q: "Line plots help you see:", options: ["How data is spread out and repeated", "A map", "The weather", "A story"], a: 0, why: "They show the distribution of values." },
      // 5.MD.3
      { id: "md3a", obj: "5.MD.3", type: "mc", q: "Volume is measured in:", options: ["Cubic units", "Square units", "Units of length", "Degrees"], a: 0, why: "Volume uses cubic units." },
      { id: "md3b", obj: "5.MD.3", type: "mc", q: "A 'unit cube' is a cube that is:", options: ["1 unit on each side", "Flat", "Very large", "Round"], a: 0, why: "A unit cube measures 1 × 1 × 1." },
      { id: "md3c", obj: "5.MD.3", type: "numeric", q: "A box is filled with exactly 24 unit cubes. Its volume is ___ cubic units.", answer: 24, why: "Volume = number of unit cubes." },
      { id: "md3d", obj: "5.MD.3", type: "mc", q: "Volume measures:", options: ["How much space a solid takes up", "How long something is", "How heavy it is", "Its temperature"], a: 0, why: "Volume is the space inside a solid." },
      // 5.MD.4
      { id: "md4a", obj: "5.MD.4", type: "numeric", q: "A box is 3 cubes long, 2 wide, and 2 tall. How many unit cubes fit?", answer: 12, why: "3 × 2 × 2 = 12." },
      { id: "md4b", obj: "5.MD.4", type: "numeric", q: "A layer has 6 cubes, and there are 3 layers. Total cubes = ?", answer: 18, why: "6 × 3 = 18." },
      { id: "md4c", obj: "5.MD.4", type: "numeric", q: "A box holds 2 rows of 4 cubes per layer, with 2 layers. Total cubes = ?", answer: 16, why: "8 cubes per layer × 2 layers = 16." },
      { id: "md4d", obj: "5.MD.4", type: "mc", q: "To count all the cubes in a box, you can multiply:", options: ["Length × width × height", "Length + width", "Only two sides", "The weight"], a: 0, why: "That gives the number of unit cubes (the volume)." },
      // 5.G.2
      { id: "g2a", obj: "5.G.2", type: "mc", q: "On a graph, moving right means the ___ coordinate gets bigger.", options: ["x", "y", "both", "neither"], a: 0, why: "Right increases the x value." },
      { id: "g2b", obj: "5.G.2", type: "mc", q: "The point (0, 0) is called the:", options: ["Origin", "Top", "End", "Peak"], a: 0, why: "The origin is where the axes meet." },
      { id: "g2c", obj: "5.G.2", type: "mc", q: "To plot (4, 2), start at the origin and go:", options: ["Right 4, up 2", "Up 4, right 2", "Left 4, down 2", "Right 2, up 4"], a: 0, why: "x = 4 (right), y = 2 (up)." },
      { id: "g2d", obj: "5.G.2", type: "mc", q: "A line that goes up to the right on a graph shows a value that is:", options: ["Increasing", "Decreasing", "Staying flat", "Disappearing"], a: 0, why: "Up-to-the-right means increasing." },
      // 5.G.3
      { id: "g3a", obj: "5.G.3", type: "mc", q: "All squares are also rectangles because a square has:", options: ["4 right angles, like all rectangles", "3 sides", "No sides", "Curved edges"], a: 0, why: "A square meets the definition of a rectangle." },
      { id: "g3b", obj: "5.G.3", type: "mc", q: "A square is a special kind of:", options: ["Rectangle (and rhombus)", "Triangle", "Circle", "Pentagon"], a: 0, why: "A square is a rectangle with equal sides." },
      { id: "g3c", obj: "5.G.3", type: "mc", q: "If all rectangles have 4 right angles, then a square (a type of rectangle):", options: ["Also has 4 right angles", "Has no right angles", "Has 3 angles", "Is a circle"], a: 0, why: "Attributes pass down to subcategories." },
      { id: "g3d", obj: "5.G.3", type: "mc", q: "Attributes of a shape category belong to:", options: ["All shapes in that category", "Only one shape", "No shapes", "Circles only"], a: 0, why: "Every member of the category shares them." },
      // 5.G.4
      { id: "g4a", obj: "5.G.4", type: "mc", q: "A shape with exactly 4 equal sides and 4 right angles is best classified as a:", options: ["Square", "Triangle", "Pentagon", "Circle"], a: 0, why: "Equal sides + right angles = a square." },
      { id: "g4b", obj: "5.G.4", type: "mc", q: "A quadrilateral is any shape with:", options: ["4 sides", "3 sides", "5 sides", "Curved sides"], a: 0, why: "Quadri- means four sides." },
      { id: "g4c", obj: "5.G.4", type: "mc", q: "A rectangle is always a:", options: ["Quadrilateral (4-sided figure)", "Triangle", "Pentagon", "Circle"], a: 0, why: "Rectangles have 4 sides." },
      { id: "g4d", obj: "5.G.4", type: "multi", q: "Select ALL the shapes that are quadrilaterals (4-sided).", options: ["Square", "Rectangle", "Trapezoid", "Triangle"], correct: [0, 1, 2], why: "A triangle has 3 sides, not 4." }
    ]
  },

  "g5-science": {
    id: "g5-science", title: "Grade 5 Science", subjectKey: "science", grade: "5",
    standard: "Massachusetts Science & Technology/Engineering (Grade 5, NGSS-aligned)",
    note: "Pilot course: matter, forces & energy, ecosystems, and Earth & space science.",
    domains: [
      { code: "PS", name: "Physical Science (Matter, Forces & Energy)" },
      { code: "LS", name: "Life Science (Ecosystems)" },
      { code: "ESS", name: "Earth & Space Science" }
    ],
    objectives: [
      { code: "5-PS1-1", domain: "PS", weight: 1.0, title: "Matter is made of particles too small to be seen", xwalk: { cc: "5-PS1-1", ma: "5-PS1-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-PS1-2", domain: "PS", weight: 1.0, title: "The amount of matter is conserved during changes", xwalk: { cc: "5-PS1-2", ma: "5-PS1-2", teks: "", vasol: "", flbest: "" } },
      { code: "5-PS1-3", domain: "PS", weight: 0.9, title: "Identify materials by their observable properties", xwalk: { cc: "5-PS1-3", ma: "5-PS1-3", teks: "", vasol: "", flbest: "" } },
      { code: "5-PS2-1", domain: "PS", weight: 0.9, title: "Gravity pulls objects down, toward Earth's center", xwalk: { cc: "5-PS2-1", ma: "5-PS2-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-PS3-1", domain: "PS", weight: 1.0, title: "The energy in food can be traced back to the sun", xwalk: { cc: "5-PS3-1", ma: "5-PS3-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-LS1-1", domain: "LS", weight: 1.1, title: "Plants get materials for growth mainly from air and water", xwalk: { cc: "5-LS1-1", ma: "5-LS1-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-LS2-1", domain: "LS", weight: 1.1, title: "Matter cycles among organisms and the environment", xwalk: { cc: "5-LS2-1", ma: "5-LS2-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-ESS1-1", domain: "ESS", weight: 1.0, title: "The sun is a star; brightness depends on distance", xwalk: { cc: "5-ESS1-1", ma: "5-ESS1-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-ESS1-2", domain: "ESS", weight: 1.0, title: "Daily patterns (day/night, shadows) come from Earth's motion", xwalk: { cc: "5-ESS1-2", ma: "5-ESS1-2", teks: "", vasol: "", flbest: "" } },
      { code: "5-ESS2-2", domain: "ESS", weight: 0.9, title: "Most of Earth's water is salt water in the oceans", xwalk: { cc: "5-ESS2-2", ma: "5-ESS2-2", teks: "", vasol: "", flbest: "" } },
      { code: "5-ESS3-1", domain: "ESS", weight: 1.0, title: "Ways people can protect Earth's resources and environment", xwalk: { cc: "5-ESS3-1", ma: "5-ESS3-1", teks: "", vasol: "", flbest: "" } },
      { code: "5-PS1-4", domain: "PS", weight: 1.0, title: "Mixing substances can form a new substance (chemical change)", xwalk: { cc: "5-PS1-4", ma: "5-PS1-4", teks: "", vasol: "", flbest: "" } },
      { code: "5-ESS2-1", domain: "ESS", weight: 1.0, title: "Earth's systems (land, water, air, life) interact", xwalk: { cc: "5-ESS2-1", ma: "5-ESS2-1", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 5-PS1-1
      { id: "p11a", obj: "5-PS1-1", type: "mc", q: "Even though you can't see it, air is made of:", options: ["Tiny particles of matter", "Nothing at all", "Only water", "Light"], a: 0, why: "Air is matter made of particles too small to see." },
      { id: "p11b", obj: "5-PS1-1", type: "mc", q: "A balloon filled with air weighs slightly more than an empty one. This shows that air:", options: ["Is matter and has mass", "Is nothing", "Is only warmth", "Disappears"], a: 0, why: "Having mass means air is matter." },
      { id: "p11c", obj: "5-PS1-1", type: "mc", q: "Sugar stirred into water seems to disappear. Really, the sugar:", options: ["Broke into particles too small to see", "Was destroyed", "Turned into water", "Floated away as a gas"], a: 0, why: "It's still there as tiny dissolved particles." },
      { id: "p11d", obj: "5-PS1-1", type: "mc", q: "Matter is anything that:", options: ["Has mass and takes up space", "Can be seen", "Is always solid", "Gives off light"], a: 0, why: "That's the definition of matter." },
      // 5-PS1-2
      { id: "p12a", obj: "5-PS1-2", type: "mc", q: "When ice melts into water, the amount of matter (its weight):", options: ["Stays the same", "Disappears", "Doubles", "Becomes zero"], a: 0, why: "Matter is conserved in a physical change." },
      { id: "p12b", obj: "5-PS1-2", type: "mc", q: "You mix 50 g of baking soda with 50 g of vinegar in a SEALED bag. The total mass afterward is about:", options: ["100 g", "0 g", "50 g", "200 g"], a: 0, why: "Mass is conserved — the gas stays in the sealed bag." },
      { id: "p12c", obj: "5-PS1-2", type: "mc", q: "When a log burns, the matter:", options: ["Changes into ash, smoke, and gases", "Is destroyed", "Turns into light only", "Vanishes completely"], a: 0, why: "Matter changes form but is not destroyed." },
      { id: "p12d", obj: "5-PS1-2", type: "mc", q: "In any physical or chemical change, the total amount of matter:", options: ["Is conserved (stays the same)", "Always increases", "Always vanishes", "Turns into energy"], a: 0, why: "Conservation of matter." },
      // 5-PS1-3
      { id: "p13a", obj: "5-PS1-3", type: "multi", q: "Select ALL the properties you could use to identify a material.", options: ["Color", "Hardness", "Whether it conducts electricity", "Magnetism", "A sticker someone put on it"], correct: [0, 1, 2, 3], why: "Observable, testable properties identify a material." },
      { id: "p13b", obj: "5-PS1-3", type: "mc", q: "To test whether a material is magnetic, you would:", options: ["See if a magnet sticks to it", "Smell it", "Weigh the room", "Ask a friend"], a: 0, why: "Test it with a magnet." },
      { id: "p13c", obj: "5-PS1-3", type: "mc", q: "Which property tells how well a material lets electricity flow through it?", options: ["Conductivity", "Color", "Smell", "Shape"], a: 0, why: "Conductivity measures how electricity flows." },
      { id: "p13d", obj: "5-PS1-3", type: "mc", q: "Two clear liquids that look the same can be told apart by testing their:", options: ["Properties (like density or how they react)", "Names", "Prices", "Labels"], a: 0, why: "Properties distinguish materials." },
      // 5-PS2-1
      { id: "p21a", obj: "5-PS2-1", type: "mc", q: "When you drop a ball, gravity pulls it:", options: ["Down, toward the center of Earth", "Up", "Sideways", "In a circle"], a: 0, why: "Gravity pulls objects toward Earth's center." },
      { id: "p21b", obj: "5-PS2-1", type: "mc", q: "The force that keeps us on the ground is:", options: ["Gravity", "Magnetism", "Wind", "Friction"], a: 0, why: "Gravity holds us down." },
      { id: "p21c", obj: "5-PS2-1", type: "mc", q: "If you jump up, you come back down because of:", options: ["Gravity", "Electricity", "Sound", "Light"], a: 0, why: "Gravity pulls you back to Earth." },
      { id: "p21d", obj: "5-PS2-1", type: "mc", q: "Earth's gravity pulls objects:", options: ["Toward Earth's center", "Away from Earth", "Only if they are heavy", "Only at night"], a: 0, why: "Always toward the center of Earth." },
      // 5-PS3-1
      { id: "p31a", obj: "5-PS3-1", type: "mc", q: "The energy in the food you eat originally came from:", options: ["The sun", "The ocean", "Rocks", "The moon"], a: 0, why: "Plants capture sunlight, and that energy flows up the food chain." },
      { id: "p31b", obj: "5-PS3-1", type: "mc", q: "A rabbit eats grass for energy. The grass got its energy from:", options: ["Sunlight", "The soil only", "The rabbit", "The wind"], a: 0, why: "Grass makes food using sunlight." },
      { id: "p31c", obj: "5-PS3-1", type: "mc", q: "Energy in a food chain starts with:", options: ["The sun and plants", "Top predators", "Decomposers", "Rocks"], a: 0, why: "Producers use sunlight to start the chain." },
      { id: "p31d", obj: "5-PS3-1", type: "mc", q: "When you eat an apple, the energy you get started as:", options: ["Sunlight", "Moonlight", "Electricity", "Cold"], a: 0, why: "The apple tree used sunlight to make the apple." },
      // 5-LS1-1
      { id: "l11a", obj: "5-LS1-1", type: "mc", q: "Most of the material that makes a plant grow bigger comes from:", options: ["Air and water", "Dirt becoming part of the plant", "Sunlight turning solid", "Rocks"], a: 0, why: "Plants build material mainly from air (carbon dioxide) and water." },
      { id: "l11b", obj: "5-LS1-1", type: "mc", q: "Plants take in carbon dioxide from the:", options: ["Air", "Soil", "Ocean floor", "Sun"], a: 0, why: "Carbon dioxide comes from the air." },
      { id: "l11c", obj: "5-LS1-1", type: "mc", q: "A plant uses sunlight, water, and air to:", options: ["Make its own food (sugar)", "Eat other plants", "Drink soil", "Make rocks"], a: 0, why: "Photosynthesis makes the plant's food." },
      { id: "l11d", obj: "5-LS1-1", type: "mc", q: "When a plant grows a new branch, that new material comes mostly from:", options: ["Air and water the plant took in", "The pot", "The gardener", "Nothing"], a: 0, why: "New plant material is built from air and water." },
      // 5-LS2-1
      { id: "l21a", obj: "5-LS2-1", type: "mc", q: "Organisms that break down dead plants and animals are called:", options: ["Decomposers", "Producers", "Predators", "Stars"], a: 0, why: "Decomposers (like fungi and bacteria) recycle matter." },
      { id: "l21b", obj: "5-LS2-1", type: "mc", q: "In a food web, matter and energy pass from:", options: ["Producers to consumers to decomposers", "Rocks to the sun", "Decomposers to the sun", "Water to the moon"], a: 0, why: "That's how matter cycles through an ecosystem." },
      { id: "l21c", obj: "5-LS2-1", type: "mc", q: "What do decomposers return to the soil for plants to reuse?", options: ["Nutrients", "Sunlight", "Sound", "Plastic"], a: 0, why: "They recycle nutrients back to the soil." },
      { id: "l21d", obj: "5-LS2-1", type: "mc", q: "Plants are called producers because they:", options: ["Make their own food", "Eat animals", "Decompose things", "Hunt prey"], a: 0, why: "They produce food through photosynthesis." },
      // 5-ESS1-1
      { id: "e11a", obj: "5-ESS1-1", type: "mc", q: "The sun looks much bigger and brighter than other stars because it is:", options: ["Much closer to Earth", "The biggest star there is", "Made only of fire", "Hotter than every star"], a: 0, why: "The sun is far closer than any other star." },
      { id: "e11b", obj: "5-ESS1-1", type: "mc", q: "The sun is actually a:", options: ["Star", "Planet", "Moon", "Comet"], a: 0, why: "The sun is a star." },
      { id: "e11c", obj: "5-ESS1-1", type: "mc", q: "Other stars look like tiny points of light because they are:", options: ["Very far away", "Very small", "Not real", "Behind the sun"], a: 0, why: "Their great distance makes them look tiny." },
      { id: "e11d", obj: "5-ESS1-1", type: "mc", q: "A star bigger than the sun can still look dimmer from Earth because of its:", options: ["Distance", "Color", "Name", "Shape"], a: 0, why: "Distance strongly affects how bright a star appears." },
      // 5-ESS1-2
      { id: "e12a", obj: "5-ESS1-2", type: "mc", q: "Day and night are caused by:", options: ["Earth spinning (rotating) once a day", "The sun turning off", "The moon blocking the sun", "Clouds"], a: 0, why: "Earth's rotation causes day and night." },
      { id: "e12b", obj: "5-ESS1-2", type: "mc", q: "A shadow changes length during the day because:", options: ["The sun appears to move across the sky", "The object grows", "It is magic", "The ground moves"], a: 0, why: "The sun's apparent position changes as Earth rotates." },
      { id: "e12c", obj: "5-ESS1-2", type: "mc", q: "Earth takes about how long to spin around once?", options: ["24 hours (one day)", "One year", "One month", "One minute"], a: 0, why: "One rotation takes about 24 hours." },
      { id: "e12d", obj: "5-ESS1-2", type: "mc", q: "The sun appears to rise in the ___ and set in the ___.", options: ["east; west", "west; east", "north; south", "up; down"], a: 0, why: "Earth's spin makes the sun rise east and set west." },
      // 5-ESS2-2
      { id: "e22a", obj: "5-ESS2-2", type: "mc", q: "Most of Earth's water is:", options: ["Salt water in the oceans", "Fresh water in lakes", "Ice at the North Pole", "Rain"], a: 0, why: "About 97% of Earth's water is salty ocean water." },
      { id: "e22b", obj: "5-ESS2-2", type: "mc", q: "Only a small amount of Earth's water is:", options: ["Fresh water we can drink", "Salt water", "In the ocean", "Underground salt"], a: 0, why: "Fresh water is a small fraction of all water." },
      { id: "e22c", obj: "5-ESS2-2", type: "mc", q: "Most of Earth's FRESH water is found:", options: ["Frozen in ice caps and glaciers", "In rivers", "In bottles", "In clouds"], a: 0, why: "Most fresh water is locked up as ice." },
      { id: "e22d", obj: "5-ESS2-2", type: "mc", q: "Why is it important to protect fresh water?", options: ["There is only a little of it on Earth", "There is an unlimited supply", "Water isn't needed", "The oceans are fresh water"], a: 0, why: "Usable fresh water is limited." },
      // 5-ESS3-1
      { id: "e31a", obj: "5-ESS3-1", type: "multi", q: "Select ALL the ways people can protect Earth's resources.", options: ["Recycling", "Saving water", "Reducing pollution", "Planting trees", "Wasting electricity"], correct: [0, 1, 2, 3], why: "The first four protect resources; wasting electricity does not." },
      { id: "e31b", obj: "5-ESS3-1", type: "mc", q: "Turning off lights when you leave a room helps save:", options: ["Energy", "Only water", "Only trees", "Nothing"], a: 0, why: "It saves electrical energy." },
      { id: "e31c", obj: "5-ESS3-1", type: "mc", q: "Recycling paper helps protect:", options: ["Trees and forests", "The sun", "Gravity", "The moon"], a: 0, why: "Less new paper means fewer trees cut down." },
      { id: "e31d", obj: "5-ESS3-1", type: "mc", q: "One way communities reduce pollution is by:", options: ["Using cleaner energy like solar and wind", "Burning more coal", "Dumping trash in rivers", "Idling cars longer"], a: 0, why: "Clean energy produces less pollution." },
      // 5-PS1-4 (new substance from mixing)
      { id: "p14a", obj: "5-PS1-4", type: "mc", q: "When vinegar and baking soda mix and fizz, it shows:", options: ["A new substance forming (a chemical change)", "Just a color change", "Nothing happening", "Only melting"], a: 0, why: "The fizzing gas is a new substance." },
      { id: "p14b", obj: "5-PS1-4", type: "mc", q: "Which is a sign that a NEW substance has formed?", options: ["Fizzing, a color change, or a new smell", "The bowl gets bigger", "You stir it", "It stays exactly the same"], a: 0, why: "New gas, color, or odor signals a chemical change." },
      { id: "p14c", obj: "5-PS1-4", type: "mc", q: "Stirring salt into water makes a:", options: ["Mixture you can separate again (no new substance)", "Brand new metal", "Fire", "A gas"], a: 0, why: "Dissolving is a physical change, not a new substance." },
      { id: "p14d", obj: "5-PS1-4", type: "mc", q: "Burning wood produces ash and smoke. This is:", options: ["A new substance forming", "Just melting", "No change at all", "Freezing"], a: 0, why: "Burning is a chemical change making new substances." },
      { id: "p14e", obj: "5-PS1-4", type: "mc", q: "When some substances are combined, the result:", options: ["Can be a different substance with new properties", "Is always the same stuff", "Disappears", "Becomes gold"], a: 0, why: "Chemical changes create new substances." },
      // 5-ESS2-1 (Earth's systems interact)
      { id: "e21a", obj: "5-ESS2-1", type: "mc", q: "Land, water, air, and living things are Earth's:", options: ["Four major systems", "Four planets", "Four oceans", "Four countries"], a: 0, why: "Geosphere, hydrosphere, atmosphere, and biosphere." },
      { id: "e21b", obj: "5-ESS2-1", type: "mc", q: "Rain (water) wearing down a rocky hill (land) is an example of Earth's systems:", options: ["Interacting", "Never touching", "Disappearing", "Freezing only"], a: 0, why: "Water and land are interacting." },
      { id: "e21c", obj: "5-ESS2-1", type: "mc", q: "Plants (living things) taking in air shows two Earth systems:", options: ["Working together", "Being totally separate", "Fighting", "Vanishing"], a: 0, why: "The biosphere and atmosphere interact." },
      { id: "e21d", obj: "5-ESS2-1", type: "mc", q: "Which of these is part of the water system (hydrosphere)?", options: ["Oceans, rivers, and lakes", "Mountains", "The air", "Birds"], a: 0, why: "The hydrosphere is Earth's water." },
      { id: "e21e", obj: "5-ESS2-1", type: "mc", q: "Wind shaping sand dunes is an example of:", options: ["Earth's systems interacting (air and land)", "Magic", "Nothing", "A new planet"], a: 0, why: "The atmosphere shapes the geosphere." },
      // 5th questions for the original objectives
      { id: "p11e", obj: "5-PS1-1", type: "mc", q: "Steam rising from a kettle is water in the form of a:", options: ["Gas (tiny particles spread out)", "Solid", "A new substance", "Light"], a: 0, why: "Steam is water as a gas — still matter, just spread out." },
      { id: "p12e", obj: "5-PS1-2", type: "mc", q: "If you freeze 200 g of water into ice, the ice weighs about:", options: ["200 g", "0 g", "100 g", "400 g"], a: 0, why: "Mass is conserved when water freezes." },
      { id: "p13e", obj: "5-PS1-3", type: "mc", q: "You could identify an unknown metal by testing its:", options: ["Properties, like magnetism and hardness", "Name", "Price", "Owner"], a: 0, why: "Properties identify a material." },
      { id: "p21e", obj: "5-PS2-1", type: "mc", q: "A dropped pencil falls because Earth's gravity pulls it:", options: ["Downward (toward Earth's center)", "Upward", "Sideways", "Away"], a: 0, why: "Gravity pulls objects down." },
      { id: "p31e", obj: "5-PS3-1", type: "mc", q: "A deer gets energy by eating plants. Those plants got their energy from:", options: ["The sun", "The soil only", "The deer", "Rocks"], a: 0, why: "Plants capture sunlight; energy flows up the chain." },
      { id: "l11e", obj: "5-LS1-1", type: "mc", q: "A tree's trunk and leaves are built mostly from materials taken from:", options: ["Air and water", "The soil turning solid", "Rocks", "Sunlight turning solid"], a: 0, why: "Plants build material from air and water." },
      { id: "l21e", obj: "5-LS2-1", type: "mc", q: "In a food web, mushrooms and other fungi usually act as:", options: ["Decomposers", "Producers", "Top predators", "Stars"], a: 0, why: "Fungi break down dead matter." },
      { id: "e11e", obj: "5-ESS1-1", type: "mc", q: "Compared to the sun, the other stars we see at night are:", options: ["Much farther from Earth", "Much closer", "Not really stars", "Inside the sun"], a: 0, why: "They look dim because they're very far away." },
      { id: "e12e", obj: "5-ESS1-2", type: "mc", q: "Shadows are usually shortest around:", options: ["Midday (noon)", "Sunrise", "Midnight", "Sunset"], a: 0, why: "The sun is highest in the sky at midday." },
      { id: "e22e", obj: "5-ESS2-2", type: "mc", q: "About how much of Earth's water is fresh water we could drink?", options: ["A small amount (only a few percent)", "Most of it", "Exactly half", "None"], a: 0, why: "Most water is salty ocean water; little is fresh." },
      { id: "e31e", obj: "5-ESS3-1", type: "mc", q: "Using a refillable water bottle instead of plastic ones helps:", options: ["Reduce waste", "Make more trash", "Use more oil", "Nothing"], a: 0, why: "Reusing cuts down on plastic waste." }
    ]
  },

  "g5-english": {
    id: "g5-english", title: "Grade 5 English (ELA)", subjectKey: "english", grade: "5",
    standard: "Massachusetts English Language Arts (Grade 5, Common Core-aligned)",
    note: "Reading (literature & informational), language conventions, and vocabulary (auto-graded). Writing (W) is assessed separately once AI-graded writing is added.",
    domains: [
      { code: "RL", name: "Reading: Literature" },
      { code: "RI", name: "Reading: Informational Text" },
      { code: "L", name: "Language & Vocabulary" }
    ],
    objectives: [
      { code: "5.RL.1", domain: "RL", weight: 1.1, title: "Quote accurately from a story and draw inferences", xwalk: { cc: "5.RL.1", ma: "5.RL.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.RL.2", domain: "RL", weight: 1.1, title: "Determine a theme and summarize a story", xwalk: { cc: "5.RL.2", ma: "5.RL.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.RL.3", domain: "RL", weight: 1.0, title: "Compare and contrast characters, settings, and events", xwalk: { cc: "5.RL.3", ma: "5.RL.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.RL.4", domain: "RL", weight: 1.0, title: "Determine word meaning, including figurative language", xwalk: { cc: "5.RL.4", ma: "5.RL.4", teks: "", vasol: "", flbest: "" } },
      { code: "5.RL.5", domain: "RL", weight: 0.9, title: "Explain how chapters, scenes, and stanzas structure a text", xwalk: { cc: "5.RL.5", ma: "5.RL.5", teks: "", vasol: "", flbest: "" } },
      { code: "5.RL.6", domain: "RL", weight: 0.9, title: "Describe how a narrator's point of view shapes a story", xwalk: { cc: "5.RL.6", ma: "5.RL.6", teks: "", vasol: "", flbest: "" } },
      { code: "5.RI.1", domain: "RI", weight: 1.1, title: "Quote accurately from informational text and draw inferences", xwalk: { cc: "5.RI.1", ma: "5.RI.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.RI.2", domain: "RI", weight: 1.1, title: "Determine main ideas and key details; summarize", xwalk: { cc: "5.RI.2", ma: "5.RI.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.RI.3", domain: "RI", weight: 1.0, title: "Explain relationships and interactions between ideas or events", xwalk: { cc: "5.RI.3", ma: "5.RI.3", teks: "", vasol: "", flbest: "" } },
      { code: "5.RI.4", domain: "RI", weight: 1.0, title: "Determine academic and domain-specific word meanings", xwalk: { cc: "5.RI.4", ma: "5.RI.4", teks: "", vasol: "", flbest: "" } },
      { code: "5.RI.5", domain: "RI", weight: 1.0, title: "Compare the overall structure of two or more texts", xwalk: { cc: "5.RI.5", ma: "5.RI.5", teks: "", vasol: "", flbest: "" } },
      { code: "5.RI.8", domain: "RI", weight: 1.0, title: "Explain how an author uses reasons and evidence to support points", xwalk: { cc: "5.RI.8", ma: "5.RI.8", teks: "", vasol: "", flbest: "" } },
      { code: "5.L.1", domain: "L", weight: 1.1, title: "Command of grammar (tenses, conjunctions, prepositions, interjections)", xwalk: { cc: "5.L.1", ma: "5.L.1", teks: "", vasol: "", flbest: "" } },
      { code: "5.L.2", domain: "L", weight: 1.0, title: "Conventions: commas, punctuation, titles, and spelling", xwalk: { cc: "5.L.2", ma: "5.L.2", teks: "", vasol: "", flbest: "" } },
      { code: "5.L.4", domain: "L", weight: 1.0, title: "Word meaning from context, roots/affixes, and reference materials", xwalk: { cc: "5.L.4", ma: "5.L.4", teks: "", vasol: "", flbest: "" } },
      { code: "5.L.5", domain: "L", weight: 0.9, title: "Figurative language, idioms, proverbs, synonyms & antonyms", xwalk: { cc: "5.L.5", ma: "5.L.5", teks: "", vasol: "", flbest: "" } },
      { code: "5.L.6", domain: "L", weight: 0.9, title: "Acquire and use grade-level academic and domain-specific vocabulary", xwalk: { cc: "5.L.6", ma: "5.L.6", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 5.RL.1
      { id: "rl1a", obj: "5.RL.1", type: "mc", q: "Read: The trophy slipped from Dana's hands and shattered. She stared at the floor, unable to speak. Dana most likely feels:", options: ["Shocked and upset", "Proud", "Bored", "Hungry"], a: 0, why: "A broken trophy and stunned silence suggest shock." },
      { id: "rl1b", obj: "5.RL.1", type: "mc", q: "To 'quote accurately' from a story means to:", options: ["Copy the exact words from the text", "Paraphrase loosely", "Make something up", "Use the title"], a: 0, why: "A quote uses the author's exact words." },
      { id: "rl1c", obj: "5.RL.1", type: "mc", q: "Read: Leo packed an umbrella, boots, and a raincoat. What can you infer?", options: ["He expects rain", "It is sunny", "He is going swimming", "It is summer"], a: 0, why: "Rain gear suggests he expects rain." },
      { id: "rl1d", obj: "5.RL.1", type: "mc", q: "An inference is:", options: ["A smart conclusion based on text clues", "A direct quote", "A random guess", "The title"], a: 0, why: "Inferences combine clues with reasoning." },
      // 5.RL.2
      { id: "rl2a", obj: "5.RL.2", type: "mc", q: "A story shows a selfish king who learns to share and becomes loved. The theme is:", options: ["Generosity brings happiness", "Greed always wins", "Kings never change", "Sharing is bad"], a: 0, why: "The lesson is about generosity." },
      { id: "rl2b", obj: "5.RL.2", type: "mc", q: "A good summary of a story is:", options: ["Brief, covering the main events", "As long as the story", "Only your opinion", "Just the first line"], a: 0, why: "Summaries are short and hit the main points." },
      { id: "rl2c", obj: "5.RL.2", type: "mc", q: "A theme is a story's:", options: ["Central message or lesson", "Setting", "Narrator's name", "Page count"], a: 0, why: "Theme = the underlying message." },
      { id: "rl2d", obj: "5.RL.2", type: "mc", q: "When you summarize, you leave out:", options: ["Small, unimportant details", "The main events", "The ending", "The main characters"], a: 0, why: "Summaries drop minor details." },
      // 5.RL.3
      { id: "rl3a", obj: "5.RL.3", type: "mc", q: "Read: Mia shares her snacks, but her brother hoards his. The author is showing the characters are:", options: ["Different (contrasting)", "Exactly the same", "Both greedy", "Twins"], a: 0, why: "Their behavior contrasts." },
      { id: "rl3b", obj: "5.RL.3", type: "mc", q: "Comparing two characters means looking at how they are:", options: ["Alike and different", "Only identical", "Never related", "The same age"], a: 0, why: "Compare = similarities and differences." },
      { id: "rl3c", obj: "5.RL.3", type: "mc", q: "A character who goes from shy to confident shows a change in the:", options: ["Character", "Setting", "Title", "Author"], a: 0, why: "The character developed." },
      { id: "rl3d", obj: "5.RL.3", type: "mc", q: "To compare two events in a story, examine their:", options: ["Causes, effects, and how they're alike/different", "Page numbers", "Fonts", "Covers"], a: 0, why: "Look at how the events relate." },
      // 5.RL.4
      { id: "rl4a", obj: "5.RL.4", type: "mc", q: "'Time is a thief' is an example of a:", options: ["Metaphor", "Simile", "Fact", "List"], a: 0, why: "It calls time a thief directly — a metaphor." },
      { id: "rl4b", obj: "5.RL.4", type: "mc", q: "'He ran like the wind' is a:", options: ["Simile", "Metaphor", "Fact", "Command"], a: 0, why: "'like' makes it a simile." },
      { id: "rl4c", obj: "5.RL.4", type: "mc", q: "In 'the stars winked at us,' giving stars a human action is:", options: ["Personification", "A fact", "A question", "A list"], a: 0, why: "Human traits given to non-human things = personification." },
      { id: "rl4d", obj: "5.RL.4", type: "mc", q: "The phrase 'a heart of stone' means someone is:", options: ["Unkind or unfeeling", "Made of rock", "Very soft", "A doctor"], a: 0, why: "It's figurative for being cold/unfeeling." },
      // 5.RL.5
      { id: "rl5a", obj: "5.RL.5", type: "mc", q: "Chapters, scenes, and stanzas are parts that give a text its:", options: ["Structure", "Color", "Price", "Author"], a: 0, why: "They structure (organize) the text." },
      { id: "rl5b", obj: "5.RL.5", type: "mc", q: "A group of lines in a poem is a:", options: ["Stanza", "Chapter", "Scene", "Act"], a: 0, why: "Poems are built from stanzas." },
      { id: "rl5c", obj: "5.RL.5", type: "mc", q: "In a play, a section where the setting stays the same is a:", options: ["Scene", "Stanza", "Chapter", "Verse"], a: 0, why: "Plays are divided into scenes." },
      { id: "rl5d", obj: "5.RL.5", type: "mc", q: "Why do authors divide a novel into chapters?", options: ["To organize the story into parts", "To waste paper", "To rhyme", "To hide the ending"], a: 0, why: "Chapters organize the story." },
      // 5.RL.6
      { id: "rl6a", obj: "5.RL.6", type: "mc", q: "If a narrator says 'I was terrified,' the story is told in:", options: ["First person", "Third person", "Second person", "No point of view"], a: 0, why: "'I' signals first person." },
      { id: "rl6b", obj: "5.RL.6", type: "mc", q: "A narrator's point of view affects:", options: ["Whose thoughts and feelings we know", "The page count", "The cover", "The font"], a: 0, why: "POV controls what the reader sees." },
      { id: "rl6c", obj: "5.RL.6", type: "mc", q: "A narrator outside the story who knows every character's thoughts is:", options: ["Third-person omniscient", "First person", "A character", "The reader"], a: 0, why: "Omniscient = all-knowing outside narrator." },
      { id: "rl6d", obj: "5.RL.6", type: "mc", q: "Reading the SAME event from two characters' points of view helps you see:", options: ["Different feelings and perspectives", "Nothing new", "The exact same thing", "Only the setting"], a: 0, why: "Different POVs reveal different perspectives." },
      // 5.RI.1
      { id: "ri1a", obj: "5.RI.1", type: "mc", q: "Read: The city added bike lanes, and accidents dropped by 30%. You can infer bike lanes:", options: ["Made streets safer", "Caused more crashes", "Did nothing", "Are ugly"], a: 0, why: "Fewer accidents implies greater safety." },
      { id: "ri1b", obj: "5.RI.1", type: "mc", q: "To support an answer from a nonfiction text, you should:", options: ["Quote or cite details from the text", "Guess", "Use only a picture", "Skip it"], a: 0, why: "Use textual evidence." },
      { id: "ri1c", obj: "5.RI.1", type: "mc", q: "Read: The desert gets less than 10 inches of rain a year. You can infer the desert is:", options: ["Very dry", "Very wet", "Underwater", "Snowy all year"], a: 0, why: "Little rain means a dry climate." },
      { id: "ri1d", obj: "5.RI.1", type: "mc", q: "'Quote accurately' means using the author's:", options: ["Exact words", "Rough idea", "Opposite meaning", "Title only"], a: 0, why: "A quote is word-for-word." },
      // 5.RI.2
      { id: "ri2a", obj: "5.RI.2", type: "mc", q: "Read: Exercise helps your heart, muscles, mood, and sleep. The main idea is:", options: ["Exercise has many health benefits", "Sleep is nice", "Muscles are big", "Hearts beat"], a: 0, why: "The overall point is exercise's benefits." },
      { id: "ri2b", obj: "5.RI.2", type: "mc", q: "A longer informational text can have:", options: ["More than one main idea", "Only a title", "No details", "Just page 1"], a: 0, why: "Grade 5 texts may have multiple main ideas." },
      { id: "ri2c", obj: "5.RI.2", type: "mc", q: "Key details in a text:", options: ["Support the main idea", "Contradict it", "Are random", "Are decorations"], a: 0, why: "Details back up the main idea." },
      { id: "ri2d", obj: "5.RI.2", type: "mc", q: "To find the main idea, ask:", options: ["What is this mostly about?", "What is the last word?", "Who printed it?", "What color is it?"], a: 0, why: "Main idea = what it's mostly about." },
      // 5.RI.3
      { id: "ri3a", obj: "5.RI.3", type: "mc", q: "Read: When the factory closed, workers lost jobs, so the town's shops lost customers. This shows:", options: ["A chain of cause and effect", "No connection", "A poem", "A rhyme"], a: 0, why: "One event causes the next." },
      { id: "ri3b", obj: "5.RI.3", type: "mc", q: "A science text explaining how the sun, plants, and animals connect describes their:", options: ["Relationships and interactions", "Names", "Prices", "Sizes only"], a: 0, why: "It shows how they interact." },
      { id: "ri3c", obj: "5.RI.3", type: "mc", q: "Explaining how two historical events are linked means showing:", options: ["How one affected the other", "Their page numbers", "Their fonts", "Nothing"], a: 0, why: "It shows the connection between them." },
      { id: "ri3d", obj: "5.RI.3", type: "mc", q: "In informational text, 'interactions' means how things:", options: ["Affect or connect to each other", "Are spelled", "Look", "Rhyme"], a: 0, why: "Interactions = how they influence each other." },
      // 5.RI.4
      { id: "ri4a", obj: "5.RI.4", type: "mc", q: "In a science text, 'The circuit was complete, so the bulb lit up.' A circuit is a:", options: ["Path for electricity", "Kind of food", "Type of weather", "Musical note"], a: 0, why: "A circuit is a path electricity flows through." },
      { id: "ri4b", obj: "5.RI.4", type: "mc", q: "In an economics text, 'demand' means:", options: ["How much people want to buy something", "A loud noise", "A kind of map", "A fruit"], a: 0, why: "Demand = consumer desire to buy." },
      { id: "ri4c", obj: "5.RI.4", type: "mc", q: "To figure out a domain-specific word, use:", options: ["Context clues and a glossary", "The cover", "The author's age", "The price"], a: 0, why: "Context and a glossary give the meaning." },
      { id: "ri4d", obj: "5.RI.4", type: "mc", q: "In a history text, a 'colony' is:", options: ["A settlement controlled by a faraway country", "A kind of insect only", "A planet", "A dessert"], a: 0, why: "At grade 5, colony = a settlement ruled by another country." },
      // 5.RI.5
      { id: "ri5a", obj: "5.RI.5", type: "mc", q: "A text organized by First, Then, Next uses a ___ structure.", options: ["Sequence", "Compare/contrast", "Rhyme", "Stanza"], a: 0, why: "Those words signal sequence." },
      { id: "ri5b", obj: "5.RI.5", type: "mc", q: "One text lists causes and effects; another compares two volcanoes. They use ___ structures.", options: ["Different", "Identical", "No", "Rhyming"], a: 0, why: "Cause/effect vs. compare/contrast are different." },
      { id: "ri5c", obj: "5.RI.5", type: "mc", q: "A text that presents a trouble and its fix uses:", options: ["Problem/solution", "Rhyme", "A cast list", "Alphabetical order"], a: 0, why: "Trouble + fix = problem/solution." },
      { id: "ri5d", obj: "5.RI.5", type: "mc", q: "Comparing how two texts are organized means looking at their:", options: ["Text structure", "Covers", "Fonts", "Prices"], a: 0, why: "Structure is how a text is organized." },
      // 5.RI.8
      { id: "ri8a", obj: "5.RI.8", type: "mc", q: "An author argues 'Schools should start later.' Which is EVIDENCE?", options: ["A study showing teens learn better later", "The author prefers it", "It sounds nice", "Mornings are early"], a: 0, why: "A study is factual support." },
      { id: "ri8b", obj: "5.RI.8", type: "mc", q: "Reasons and evidence are used to:", options: ["Support the author's claims", "Decorate the page", "Confuse readers", "Rhyme"], a: 0, why: "They back up the author's points." },
      { id: "ri8c", obj: "5.RI.8", type: "mc", q: "To decide which evidence supports which point, you:", options: ["Match each reason to the claim it backs up", "Ignore the claims", "Count the words", "Look at the cover"], a: 0, why: "Connect each reason to its point." },
      { id: "ri8d", obj: "5.RI.8", type: "mc", q: "Which is a fact (evidence), not an opinion?", options: ["The Pacific is the largest ocean", "Oceans are the best", "Water is boring", "I like beaches"], a: 0, why: "A fact can be checked; the rest are opinions." },
      // 5.L.1
      { id: "l1a", obj: "5.L.1", type: "mc", q: "Choose the correct verb: 'By the time we arrived, the show had ___.'", options: ["started", "start", "starts", "starting"], a: 0, why: "Past perfect: 'had started'." },
      { id: "l1b", obj: "5.L.1", type: "mc", q: "Which word is a conjunction (a joining word)?", options: ["and", "happy", "quickly", "blue"], a: 0, why: "'And' joins words or clauses." },
      { id: "l1c", obj: "5.L.1", type: "mc", q: "'Wow, that was amazing!' The word 'Wow' is an:", options: ["Interjection", "Noun", "Verb", "Preposition"], a: 0, why: "Interjections express feeling." },
      { id: "l1d", obj: "5.L.1", type: "mc", q: "Which word is a preposition?", options: ["under", "run", "bright", "they"], a: 0, why: "'Under' shows position — a preposition." },
      // 5.L.2
      { id: "l2a", obj: "5.L.2", type: "mc", q: "Which sentence uses commas correctly?", options: ["We bought apples, bread, and milk.", "We bought apples bread and milk.", "We, bought apples and bread.", "We bought, apples and bread."], a: 0, why: "Commas separate items in a list." },
      { id: "l2b", obj: "5.L.2", type: "mc", q: "A book title should usually be:", options: ["Italicized or underlined", "All lowercase", "Spelled backward", "In a tiny font"], a: 0, why: "Titles of books are italicized or underlined." },
      { id: "l2c", obj: "5.L.2", type: "mc", q: "Which sentence is punctuated correctly?", options: ["Yes, I will help you.", "Yes I will help you", "Yes; I will help you.", "Yes I, will help you."], a: 0, why: "A comma follows the introductory 'Yes'." },
      { id: "l2d", obj: "5.L.2", type: "mc", q: "Choose the correctly spelled word:", options: ["separate", "seperate", "separete", "sepparate"], a: 0, why: "It's 'separate' (there's 'a rat' in sep-a-rate)." },
      // 5.L.4
      { id: "l4a", obj: "5.L.4", type: "mc", q: "In 'The ancient ruins were thousands of years old,' ancient means:", options: ["Very old", "Brand new", "Loud", "Tall"], a: 0, why: "Context ('thousands of years') shows very old." },
      { id: "l4b", obj: "5.L.4", type: "mc", q: "The root 'spect' (inspect, spectator) means:", options: ["Look or see", "Carry", "Water", "Write"], a: 0, why: "'Spect' relates to seeing." },
      { id: "l4c", obj: "5.L.4", type: "mc", q: "The prefix 'bi-' in bicycle and biweekly means:", options: ["Two", "Not", "Before", "Under"], a: 0, why: "'Bi-' means two." },
      { id: "l4d", obj: "5.L.4", type: "mc", q: "To find a word's exact meaning and part of speech, use a:", options: ["Dictionary", "Clock", "Map", "Ruler"], a: 0, why: "A dictionary gives meaning and part of speech." },
      // 5.L.5
      { id: "l5a", obj: "5.L.5", type: "mc", q: "The idiom 'bite the bullet' means to:", options: ["Face something hard bravely", "Eat metal", "Give up", "Chew gum"], a: 0, why: "It means to endure something difficult." },
      { id: "l5b", obj: "5.L.5", type: "mc", q: "The proverb 'Don't count your chickens before they hatch' means:", options: ["Don't assume success too early", "Raise more chickens", "Count carefully", "Wake up early"], a: 0, why: "Don't rely on something before it happens." },
      { id: "l5c", obj: "5.L.5", type: "mc", q: "A synonym for 'enormous' is:", options: ["Huge", "Tiny", "Fast", "Quiet"], a: 0, why: "Enormous means very large (huge)." },
      { id: "l5d", obj: "5.L.5", type: "mc", q: "An antonym (opposite) of 'generous' is:", options: ["Stingy", "Kind", "Giving", "Big"], a: 0, why: "Stingy is the opposite of generous." },
      // 5.L.6
      { id: "l6a", obj: "5.L.6", type: "mc", q: "The academic word 'analyze' means to:", options: ["Examine something in detail", "Guess quickly", "Ignore it", "Color it"], a: 0, why: "To analyze is to study closely." },
      { id: "l6b", obj: "5.L.6", type: "mc", q: "In a word problem, 'in all' usually signals you should:", options: ["Add", "Subtract", "Divide", "Do nothing"], a: 0, why: "'In all' often means find the total (add)." },
      { id: "l6c", obj: "5.L.6", type: "mc", q: "The word 'describe' asks you to:", options: ["Tell details about something", "Only name it", "Erase it", "Rhyme"], a: 0, why: "Describing means giving details." },
      { id: "l6d", obj: "5.L.6", type: "mc", q: "'Determine the meaning' means to:", options: ["Figure out what it means", "Spell it", "Count its letters", "Draw it"], a: 0, why: "Determine = figure out." }
    ]
  },

  "g5-social": {
    id: "g5-social", title: "Grade 5 Social Studies", subjectKey: "social", grade: "5",
    standard: "Massachusetts History & Social Science (Grade 5: US history to the founding) + C3",
    note: "US history from the early Americas through the Constitution, plus geography, civics, and economics. Social studies has no Common Core; codes are internal, aligned to MA frameworks.",
    domains: [
      { code: "G", name: "Geography" },
      { code: "H", name: "History" },
      { code: "C", name: "Civics & Government" },
      { code: "E", name: "Economics" }
    ],
    objectives: [
      { code: "5.SS.G1", domain: "G", weight: 0.9, title: "US regions and major physical features", xwalk: { cc: "", ma: "5.T1", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.G2", domain: "G", weight: 1.0, title: "How geography influenced settlement and the colonies", xwalk: { cc: "", ma: "5.T1", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H1", domain: "H", weight: 1.0, title: "Diverse Native American cultures before European contact", xwalk: { cc: "", ma: "5.T2", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H2", domain: "H", weight: 1.0, title: "European exploration of the Americas and the Columbian Exchange", xwalk: { cc: "", ma: "5.T2", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H3", domain: "H", weight: 1.0, title: "European colonization and the 13 colonies", xwalk: { cc: "", ma: "5.T3", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H4", domain: "H", weight: 1.1, title: "Causes of the American Revolution (taxation & representation)", xwalk: { cc: "", ma: "5.T3", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H5", domain: "H", weight: 1.1, title: "The American Revolution and the Declaration of Independence", xwalk: { cc: "", ma: "5.T3", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H6", domain: "H", weight: 1.0, title: "Slavery in early America (its injustice and impact)", xwalk: { cc: "", ma: "5.T3", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.H7", domain: "H", weight: 0.9, title: "Timelines and primary vs. secondary sources", xwalk: { cc: "", ma: "5.T2", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.C1", domain: "C", weight: 1.1, title: "The Constitution: purpose and the three branches", xwalk: { cc: "", ma: "5.T4", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.C2", domain: "C", weight: 1.0, title: "The Bill of Rights and basic freedoms", xwalk: { cc: "", ma: "5.T4", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.C3", domain: "C", weight: 1.0, title: "Rights, responsibilities, and how citizens participate", xwalk: { cc: "", ma: "5.T4", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.C4", domain: "C", weight: 0.9, title: "Federalism: national, state, and local government", xwalk: { cc: "", ma: "5.T4", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.E1", domain: "E", weight: 1.0, title: "The colonial economy, cash crops, and trade", xwalk: { cc: "", ma: "5.T5", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.E2", domain: "E", weight: 1.0, title: "Supply, demand, and scarcity", xwalk: { cc: "", ma: "5.T5", teks: "", vasol: "", flbest: "" } },
      { code: "5.SS.E3", domain: "E", weight: 0.9, title: "Goods & services, producers & consumers", xwalk: { cc: "", ma: "5.T5", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 5.SS.G1
      { id: "sg1a", obj: "5.SS.G1", type: "mc", q: "The US region known for the Rocky Mountains and dry deserts is the:", options: ["West", "Northeast", "Southeast", "Midwest"], a: 0, why: "The West has the Rockies and desert areas." },
      { id: "sg1b", obj: "5.SS.G1", type: "mc", q: "The Mississippi River was important because it:", options: ["Was a major route for trade and travel", "Is the smallest river", "Is in the ocean", "Is frozen all year"], a: 0, why: "Rivers served as highways for trade." },
      { id: "sg1c", obj: "5.SS.G1", type: "mc", q: "The flat, fertile farmland of the central US is called the:", options: ["Great Plains", "Rocky Mountains", "Atlantic Ocean", "Desert Southwest"], a: 0, why: "The Great Plains are flat farmland." },
      { id: "sg1d", obj: "5.SS.G1", type: "mc", q: "The region along the Atlantic coast where the 13 colonies formed is the:", options: ["East Coast", "West Coast", "Hawaii", "Alaska"], a: 0, why: "The 13 colonies were on the Atlantic (east) coast." },
      // 5.SS.G2
      { id: "sg2a", obj: "5.SS.G2", type: "mc", q: "Early colonies were built near the coast and rivers mainly for:", options: ["Water, trade, and transportation", "The mountains", "Desert heat", "No reason"], a: 0, why: "Water access supported survival and trade." },
      { id: "sg2b", obj: "5.SS.G2", type: "mc", q: "Good farmland and a warm climate in the Southern colonies led to:", options: ["Large farms and plantations", "No farming", "Only fishing", "Deserts"], a: 0, why: "The South's climate favored large cash-crop farms." },
      { id: "sg2c", obj: "5.SS.G2", type: "mc", q: "Rocky soil and short summers in New England led colonists to rely more on:", options: ["Fishing, trade, and shipbuilding", "Growing cotton", "Large plantations", "Mining gold"], a: 0, why: "Poor farmland pushed New England toward the sea and trade." },
      { id: "sg2d", obj: "5.SS.G2", type: "mc", q: "Geography affects where people settle because people need:", options: ["Water, food, and ways to travel", "Only mountains", "Only deserts", "Nothing"], a: 0, why: "Settlement follows resources and routes." },
      // 5.SS.H1
      { id: "sh1a", obj: "5.SS.H1", type: "mc", q: "Before Europeans arrived, the Americas were home to:", options: ["Many diverse Native American cultures", "No people", "Only Europeans", "Only one tribe"], a: 0, why: "Hundreds of diverse nations lived here." },
      { id: "sh1b", obj: "5.SS.H1", type: "mc", q: "Different Native American groups had different ways of life mainly because of:", options: ["The land and resources where they lived", "Their favorite colors", "The internet", "Cars"], a: 0, why: "Environment shaped each culture." },
      { id: "sh1c", obj: "5.SS.H1", type: "mc", q: "Peoples of the Southwest, like the Ancestral Puebloans, built homes from:", options: ["Adobe (clay/mud) and stone", "Ice", "Steel", "Glass"], a: 0, why: "They used local clay and stone." },
      { id: "sh1d", obj: "5.SS.H1", type: "mc", q: "Native Americans had lived in the Americas for:", options: ["Thousands of years before Europeans", "Only a few years", "Never", "Only since 1900"], a: 0, why: "They were here for millennia before contact." },
      // 5.SS.H2
      { id: "sh2a", obj: "5.SS.H2", type: "mc", q: "European explorers in the 1400s-1500s sailed hoping to find:", options: ["New trade routes, riches, and land", "The North Pole only", "Nothing", "A new moon"], a: 0, why: "They sought trade routes and wealth." },
      { id: "sh2b", obj: "5.SS.H2", type: "mc", q: "In 1492, Christopher Columbus sailed for:", options: ["Spain", "England", "France", "Germany"], a: 0, why: "Spain funded Columbus's voyage." },
      { id: "sh2c", obj: "5.SS.H2", type: "mc", q: "The 'Columbian Exchange' was the transfer of plants, animals, and diseases between:", options: ["The Americas and Europe/Africa", "Two US cities", "Two planets", "Two oceans"], a: 0, why: "It connected the hemispheres." },
      { id: "sh2d", obj: "5.SS.H2", type: "mc", q: "A tragic result of European contact was that many Native Americans died from:", options: ["New diseases they had never been exposed to", "Too much food", "Cold weather only", "Nothing"], a: 0, why: "Diseases like smallpox devastated Native populations." },
      // 5.SS.H3
      { id: "sh3a", obj: "5.SS.H3", type: "mc", q: "The 13 British colonies were located along the:", options: ["Atlantic coast of North America", "Pacific coast", "Rocky Mountains", "Hawaiian Islands"], a: 0, why: "They lined the Atlantic coast." },
      { id: "sh3b", obj: "5.SS.H3", type: "mc", q: "Many people came to the colonies seeking:", options: ["Religious freedom and economic opportunity", "Worse lives", "Colder weather", "Nothing"], a: 0, why: "Freedom and opportunity drew settlers." },
      { id: "sh3c", obj: "5.SS.H3", type: "mc", q: "The 13 colonies were ruled by:", options: ["Great Britain (England)", "Spain", "France", "No one"], a: 0, why: "They were British colonies." },
      { id: "sh3d", obj: "5.SS.H3", type: "mc", q: "The three colonial regions were New England, the Middle colonies, and the:", options: ["Southern colonies", "Western colonies", "Arctic colonies", "Island colonies"], a: 0, why: "New England, Middle, and Southern colonies." },
      // 5.SS.H4
      { id: "sh4a", obj: "5.SS.H4", type: "mc", q: "A main complaint of the colonists was 'taxation without ___.'", options: ["representation", "money", "food", "water"], a: 0, why: "They had no representatives in Parliament." },
      { id: "sh4b", obj: "5.SS.H4", type: "mc", q: "The Boston Tea Party was a protest against:", options: ["British taxes on tea", "Too much tea", "No tea", "Coffee"], a: 0, why: "Colonists dumped taxed tea into the harbor." },
      { id: "sh4c", obj: "5.SS.H4", type: "mc", q: "Colonists were angry that Britain taxed them but they had no:", options: ["Representatives in Parliament", "Tea", "Ships", "Maps"], a: 0, why: "No voice in the government taxing them." },
      { id: "sh4d", obj: "5.SS.H4", type: "mc", q: "'No taxation without representation' means people should help make the laws that:", options: ["Tax them", "Feed them", "Draw maps", "Build ships"], a: 0, why: "People wanted a say in their own taxes." },
      // 5.SS.H5
      { id: "sh5a", obj: "5.SS.H5", type: "mc", q: "The Declaration of Independence (1776) announced that the colonies were:", options: ["Free and independent from Britain", "Staying British", "A single city", "Part of Spain"], a: 0, why: "It declared independence." },
      { id: "sh5b", obj: "5.SS.H5", type: "mc", q: "The main author of the Declaration of Independence was:", options: ["Thomas Jefferson", "King George", "Christopher Columbus", "Abraham Lincoln"], a: 0, why: "Jefferson drafted it." },
      { id: "sh5c", obj: "5.SS.H5", type: "mc", q: "The American Revolution was a war between the colonies and:", options: ["Great Britain", "Spain", "France", "Canada"], a: 0, why: "The colonies fought Britain for independence." },
      { id: "sh5d", obj: "5.SS.H5", type: "mc", q: "The Declaration says people have rights to 'life, liberty, and the pursuit of ___.'", options: ["happiness", "money", "gold", "power"], a: 0, why: "'...the pursuit of Happiness.'" },
      // 5.SS.H6
      { id: "sh6a", obj: "5.SS.H6", type: "mc", q: "Enslaved people in early America were:", options: ["Forced to work against their will, with no freedom or pay", "Paid workers who could leave", "Free citizens", "Visitors"], a: 0, why: "Slavery denied people freedom and basic rights." },
      { id: "sh6b", obj: "5.SS.H6", type: "mc", q: "Many enslaved people were brought by force from:", options: ["Africa", "Europe only", "The moon", "Nowhere"], a: 0, why: "Enslaved Africans were taken across the Atlantic." },
      { id: "sh6c", obj: "5.SS.H6", type: "mc", q: "Slavery was wrong because it:", options: ["Denied people their freedom and basic human rights", "Helped everyone", "Was fair", "Was a free choice"], a: 0, why: "It stripped people of their rights and humanity." },
      { id: "sh6d", obj: "5.SS.H6", type: "mc", q: "Despite terrible treatment, enslaved Africans and their descendants:", options: ["Contributed greatly to building the early American economy and culture", "Did nothing", "Only lived in Europe", "Built only ships"], a: 0, why: "Their forced labor and culture shaped early America." },
      // 5.SS.H7
      { id: "sh7a", obj: "5.SS.H7", type: "mc", q: "A diary written by a colonist in 1776 is a ___ source.", options: ["Primary", "Secondary", "Fictional", "Rhyming"], a: 0, why: "It was created by someone who was there." },
      { id: "sh7b", obj: "5.SS.H7", type: "mc", q: "A textbook written today about the Revolution is a ___ source.", options: ["Secondary", "Primary", "Personal", "Poetic"], a: 0, why: "It was written later, about the events." },
      { id: "sh7c", obj: "5.SS.H7", type: "mc", q: "On a timeline, the year 1492 comes ___ the year 1776.", options: ["before (to the left)", "after", "at the same time", "nowhere"], a: 0, why: "1492 is earlier than 1776." },
      { id: "sh7d", obj: "5.SS.H7", type: "mc", q: "Historians study the past using:", options: ["Evidence from primary and secondary sources", "Guesses only", "The weather", "Nothing"], a: 0, why: "They rely on source evidence." },
      // 5.SS.C1
      { id: "sc1a", obj: "5.SS.C1", type: "mc", q: "The US Constitution is:", options: ["The plan of government and supreme law", "A grocery list", "A map", "A storybook"], a: 0, why: "It's the framework and highest law." },
      { id: "sc1b", obj: "5.SS.C1", type: "mc", q: "The branch that makes laws is the:", options: ["Legislative (Congress)", "Executive", "Judicial", "City"], a: 0, why: "Congress makes laws." },
      { id: "sc1c", obj: "5.SS.C1", type: "mc", q: "The branch that carries out laws, led by the President, is the:", options: ["Executive", "Legislative", "Judicial", "Local"], a: 0, why: "The executive enforces laws." },
      { id: "sc1d", obj: "5.SS.C1", type: "mc", q: "The branch of courts that interprets laws is the:", options: ["Judicial", "Executive", "Legislative", "Mayor"], a: 0, why: "Courts interpret the law." },
      // 5.SS.C2
      { id: "sc2a", obj: "5.SS.C2", type: "mc", q: "The first ten amendments to the Constitution are called the:", options: ["Bill of Rights", "Declaration", "Preamble", "Map key"], a: 0, why: "The Bill of Rights is the first ten amendments." },
      { id: "sc2b", obj: "5.SS.C2", type: "mc", q: "Freedom of speech, religion, and the press are protected by the:", options: ["First Amendment", "Map", "Timeline", "Scale"], a: 0, why: "These are First Amendment freedoms." },
      { id: "sc2c", obj: "5.SS.C2", type: "mc", q: "The Bill of Rights protects:", options: ["Basic freedoms and rights of the people", "Only the President", "Only soldiers", "No one"], a: 0, why: "It guards the people's rights." },
      { id: "sc2d", obj: "5.SS.C2", type: "mc", q: "The Bill of Rights was added to make sure the government could not:", options: ["Take away people's basic rights", "Build roads", "Collect any taxes", "Have a flag"], a: 0, why: "It limits government power over rights." },
      // 5.SS.C3
      { id: "sc3a", obj: "5.SS.C3", type: "mc", q: "A way citizens participate in government is by:", options: ["Voting", "Ignoring elections", "Breaking laws", "Doing nothing"], a: 0, why: "Voting is key participation." },
      { id: "sc3b", obj: "5.SS.C3", type: "mc", q: "A responsibility of citizens is to:", options: ["Obey laws and stay informed", "Never vote", "Litter", "Ignore rules"], a: 0, why: "Good citizens follow laws and stay informed." },
      { id: "sc3c", obj: "5.SS.C3", type: "mc", q: "Citizens can influence their government by:", options: ["Voting, speaking out, and contacting leaders", "Doing nothing", "Complaining silently only", "Moving away"], a: 0, why: "There are many ways to take part." },
      { id: "sc3d", obj: "5.SS.C3", type: "mc", q: "In a democracy, power ultimately comes from:", options: ["The people", "One king", "The army", "The weather"], a: 0, why: "Democracy means rule by the people." },
      // 5.SS.C4
      { id: "sc4a", obj: "5.SS.C4", type: "mc", q: "In the US, power is shared between the national government and the:", options: ["State governments", "Ocean", "Other countries", "No one"], a: 0, why: "Power is divided between national and state governments." },
      { id: "sc4b", obj: "5.SS.C4", type: "mc", q: "A governor leads a:", options: ["State", "City", "Country", "School"], a: 0, why: "Governors lead states." },
      { id: "sc4c", obj: "5.SS.C4", type: "mc", q: "National laws for the whole country are made by:", options: ["Congress", "A single city", "Your family", "A governor alone"], a: 0, why: "Congress makes federal law." },
      { id: "sc4d", obj: "5.SS.C4", type: "mc", q: "Sharing power between national, state, and local government is called:", options: ["Federalism", "A monarchy", "A map", "Scarcity"], a: 0, why: "That system is federalism." },
      // 5.SS.E1
      { id: "se1a", obj: "5.SS.E1", type: "mc", q: "The Southern colonies' economy depended heavily on cash crops like:", options: ["Tobacco and rice", "Ice", "Steel", "Oil"], a: 0, why: "Tobacco and rice were major Southern crops." },
      { id: "se1b", obj: "5.SS.E1", type: "mc", q: "Colonists traded goods with Britain and others across the:", options: ["Atlantic Ocean", "Pacific Ocean", "Desert", "Rocky Mountains"], a: 0, why: "Trade crossed the Atlantic." },
      { id: "se1c", obj: "5.SS.E1", type: "mc", q: "A 'cash crop' is a crop grown mainly to:", options: ["Sell for money", "Feed only the farmer", "Decorate", "Throw away"], a: 0, why: "Cash crops are grown to sell." },
      { id: "se1d", obj: "5.SS.E1", type: "mc", q: "Natural resources in a colony affected:", options: ["The kinds of jobs and trade there", "The alphabet", "The flag", "Nothing"], a: 0, why: "Resources shaped the local economy." },
      // 5.SS.E2
      { id: "se2a", obj: "5.SS.E2", type: "mc", q: "When MANY people want something but there is very little of it, the price usually:", options: ["Goes up", "Goes down", "Disappears", "Stays zero"], a: 0, why: "High demand + low supply raises prices." },
      { id: "se2b", obj: "5.SS.E2", type: "mc", q: "Scarcity means:", options: ["There is not enough for everyone who wants it", "There is plenty of everything", "Nothing is for sale", "Everything is free"], a: 0, why: "Scarcity is limited supply." },
      { id: "se2c", obj: "5.SS.E2", type: "mc", q: "Because resources are limited, people and countries must:", options: ["Make choices", "Buy everything", "Never trade", "Stop working"], a: 0, why: "Scarcity forces choices." },
      { id: "se2d", obj: "5.SS.E2", type: "mc", q: "If the supply of a toy is HIGH and demand is low, the price tends to:", options: ["Go down", "Go way up", "Stay infinite", "Vanish"], a: 0, why: "Lots of supply and little demand lowers price." },
      // 5.SS.E3
      { id: "se3a", obj: "5.SS.E3", type: "mc", q: "A doctor's checkup and a haircut are both:", options: ["Services", "Goods", "Taxes", "Laws"], a: 0, why: "Services are useful work done for others." },
      { id: "se3b", obj: "5.SS.E3", type: "mc", q: "A person who buys and uses goods is a:", options: ["Consumer", "Producer", "Judge", "Explorer"], a: 0, why: "Consumers buy and use goods." },
      { id: "se3c", obj: "5.SS.E3", type: "mc", q: "A farmer growing wheat to sell is a:", options: ["Producer", "Consumer", "Tourist", "Voter"], a: 0, why: "Producers make or grow goods." },
      { id: "se3d", obj: "5.SS.E3", type: "mc", q: "A shirt, a book, and an apple are examples of:", options: ["Goods", "Services", "Taxes", "Rights"], a: 0, why: "Goods are physical products." }
    ]
  },

  "g6-math": {
    id: "g6-math", title: "Grade 6 Math", subjectKey: "math", grade: "6",
    standard: "Massachusetts Curriculum Frameworks — Grade 6 Mathematics",
    note: "A comprehensive set of Grade 6 objectives across all five domains.",
    domains: [
      { code: "RP", name: "Ratios & Proportional Relationships" },
      { code: "NS", name: "The Number System" },
      { code: "EE", name: "Expressions & Equations" },
      { code: "G", name: "Geometry" },
      { code: "SP", name: "Statistics & Probability" }
    ],
    objectives: [
      { code: "6.RP.1", domain: "RP", weight: 1.0, title: "Understand the concept of a ratio", xwalk: { cc: "6.RP.A.1", ma: "6.RP.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "6.RP.2", domain: "RP", weight: 1.0, title: "Understand unit rate", xwalk: { cc: "6.RP.A.2", ma: "6.RP.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "6.RP.3", domain: "RP", weight: 1.1, title: "Use ratio & rate reasoning, including percent", xwalk: { cc: "6.RP.A.3", ma: "6.RP.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.1", domain: "NS", weight: 1.1, title: "Divide fractions by fractions", xwalk: { cc: "6.NS.A.1", ma: "6.NS.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.2", domain: "NS", weight: 0.9, title: "Divide multi-digit numbers fluently", xwalk: { cc: "6.NS.B.2", ma: "6.NS.B.2", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.3", domain: "NS", weight: 1.0, title: "Add, subtract, multiply & divide decimals", xwalk: { cc: "6.NS.B.3", ma: "6.NS.B.3", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.4", domain: "NS", weight: 0.9, title: "Find the greatest common factor and least common multiple", xwalk: { cc: "6.NS.B.4", ma: "6.NS.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.5", domain: "NS", weight: 1.0, title: "Understand positive and negative numbers", xwalk: { cc: "6.NS.C.5", ma: "6.NS.C.5", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.6", domain: "NS", weight: 1.0, title: "Negatives on the number line and coordinate plane", xwalk: { cc: "6.NS.C.6", ma: "6.NS.C.6", teks: "", vasol: "", flbest: "" } },
      { code: "6.NS.7", domain: "NS", weight: 1.0, title: "Order rational numbers and understand absolute value", xwalk: { cc: "6.NS.C.7", ma: "6.NS.C.7", teks: "", vasol: "", flbest: "" } },
      { code: "6.EE.1", domain: "EE", weight: 1.0, title: "Write and evaluate numerical expressions with exponents", xwalk: { cc: "6.EE.A.1", ma: "6.EE.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "6.EE.2", domain: "EE", weight: 1.1, title: "Write, read & evaluate expressions with variables", xwalk: { cc: "6.EE.A.2", ma: "6.EE.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "6.EE.7", domain: "EE", weight: 1.1, title: "Solve one-step equations", xwalk: { cc: "6.EE.B.7", ma: "6.EE.B.7", teks: "", vasol: "", flbest: "" } },
      { code: "6.EE.8", domain: "EE", weight: 0.9, title: "Write and understand inequalities", xwalk: { cc: "6.EE.B.8", ma: "6.EE.B.8", teks: "", vasol: "", flbest: "" } },
      { code: "6.G.1", domain: "G", weight: 1.0, title: "Find the area of triangles and quadrilaterals", xwalk: { cc: "6.G.A.1", ma: "6.G.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "6.G.2", domain: "G", weight: 0.9, title: "Find the volume of rectangular prisms", xwalk: { cc: "6.G.A.2", ma: "6.G.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "6.G.4", domain: "G", weight: 0.9, title: "Find surface area using nets", xwalk: { cc: "6.G.A.4", ma: "6.G.A.4", teks: "", vasol: "", flbest: "" } },
      { code: "6.SP.3", domain: "SP", weight: 0.9, title: "Understand measures of center and variability", xwalk: { cc: "6.SP.A.3", ma: "6.SP.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "6.SP.5", domain: "SP", weight: 1.0, title: "Summarize data: mean, median, mode, and range", xwalk: { cc: "6.SP.B.5", ma: "6.SP.B.5", teks: "", vasol: "", flbest: "" } }
    ],
    questions: [
      // 6.RP.1
      { id: "rp1a", obj: "6.RP.1", type: "mc", q: "There are 3 cats and 5 dogs. The ratio of cats to dogs is:", options: ["3 to 5", "5 to 3", "3 to 8", "8 to 5"], a: 0, why: "Cats first: 3 to 5." },
      { id: "rp1b", obj: "6.RP.1", type: "mc", q: "A ratio of 2:4 is equivalent to:", options: ["1:2", "4:2", "2:1", "3:4"], a: 0, why: "Divide both by 2 to get 1:2." },
      { id: "rp1c", obj: "6.RP.1", type: "numeric", q: "The ratio of boys to girls is 2:3. If there are 6 boys, how many girls?", answer: 9, why: "2:3 scales to 6:9." },
      { id: "rp1d", obj: "6.RP.1", type: "mc", q: "'For every 4 apples there are 2 oranges' describes a:", options: ["Ratio", "Sum", "Difference", "Single quotient"], a: 0, why: "It compares two quantities — a ratio." },
      // 6.RP.2
      { id: "rp2a", obj: "6.RP.2", type: "numeric", q: "If 3 notebooks cost $6, the unit rate is $___ per notebook.", answer: 2, why: "6 ÷ 3 = 2." },
      { id: "rp2b", obj: "6.RP.2", type: "numeric", q: "A car travels 120 miles in 2 hours. Its speed is ___ miles per hour.", answer: 60, why: "120 ÷ 2 = 60." },
      { id: "rp2c", obj: "6.RP.2", type: "numeric", q: "12 cookies for $4 is ___ cookies per dollar.", answer: 3, why: "12 ÷ 4 = 3." },
      { id: "rp2d", obj: "6.RP.2", type: "mc", q: "A unit rate compares a quantity to:", options: ["One unit of another", "Ten units", "A ratio", "Nothing"], a: 0, why: "A unit rate is 'per one'." },
      // 6.RP.3
      { id: "rp3a", obj: "6.RP.3", type: "numeric", q: "What is 25% of 80?", answer: 20, why: "0.25 × 80 = 20." },
      { id: "rp3b", obj: "6.RP.3", type: "numeric", q: "If 40% of a number is 20, the number is ___.", answer: 50, why: "20 ÷ 0.40 = 50." },
      { id: "rp3c", obj: "6.RP.3", type: "numeric", q: "A shirt is $50 with 10% off. The discount is $___.", answer: 5, why: "10% of 50 = 5." },
      { id: "rp3d", obj: "6.RP.3", type: "numeric", q: "What is 50% of 30?", answer: 15, why: "Half of 30 is 15." },
      // 6.NS.1
      { id: "ns1a", obj: "6.NS.1", type: "mc", q: "1/2 ÷ 1/4 = ?", options: ["2", "1/8", "1/2", "8"], a: 0, why: "1/2 × 4/1 = 2." },
      { id: "ns1b", obj: "6.NS.1", type: "mc", q: "3/4 ÷ 1/2 = ?", options: ["3/2 (1 1/2)", "3/8", "1/2", "2/3"], a: 0, why: "3/4 × 2/1 = 6/4 = 3/2." },
      { id: "ns1c", obj: "6.NS.1", type: "numeric", q: "How many 1/3-cup servings are in 2 cups?", answer: 6, why: "2 ÷ 1/3 = 6." },
      { id: "ns1d", obj: "6.NS.1", type: "mc", q: "To divide by a fraction, you:", options: ["Multiply by its reciprocal (flip it)", "Add it", "Subtract it", "Square it"], a: 0, why: "Dividing is multiplying by the reciprocal." },
      // 6.NS.2
      { id: "ns2a", obj: "6.NS.2", type: "numeric", q: "432 ÷ 12 = ?", answer: 36, why: "12 × 36 = 432." },
      { id: "ns2b", obj: "6.NS.2", type: "numeric", q: "1,248 ÷ 24 = ?", answer: 52, why: "24 × 52 = 1,248." },
      { id: "ns2c", obj: "6.NS.2", type: "numeric", q: "945 ÷ 15 = ?", answer: 63, why: "15 × 63 = 945." },
      { id: "ns2d", obj: "6.NS.2", type: "numeric", q: "2,000 ÷ 50 = ?", answer: 40, why: "50 × 40 = 2,000." },
      // 6.NS.3
      { id: "ns3a", obj: "6.NS.3", type: "numeric", q: "3.5 + 2.75 = ?", answer: 6.25, why: "3.50 + 2.75 = 6.25." },
      { id: "ns3b", obj: "6.NS.3", type: "numeric", q: "10 − 3.4 = ?", answer: 6.6, why: "10.0 − 3.4 = 6.6." },
      { id: "ns3c", obj: "6.NS.3", type: "numeric", q: "2.5 × 4 = ?", answer: 10, why: "2.5 × 4 = 10." },
      { id: "ns3d", obj: "6.NS.3", type: "numeric", q: "4.8 ÷ 2 = ?", answer: 2.4, why: "4.8 ÷ 2 = 2.4." },
      // 6.NS.4
      { id: "ns4a", obj: "6.NS.4", type: "numeric", q: "The greatest common factor (GCF) of 12 and 18 is ___.", answer: 6, why: "6 is the largest factor of both." },
      { id: "ns4b", obj: "6.NS.4", type: "numeric", q: "The least common multiple (LCM) of 4 and 6 is ___.", answer: 12, why: "12 is the smallest multiple of both." },
      { id: "ns4c", obj: "6.NS.4", type: "numeric", q: "The GCF of 8 and 20 is ___.", answer: 4, why: "4 divides both 8 and 20." },
      { id: "ns4d", obj: "6.NS.4", type: "mc", q: "The GCF is the largest number that:", options: ["Divides both numbers evenly", "Is a multiple of both", "Adds to both", "Is bigger than both"], a: 0, why: "GCF = greatest common factor." },
      // 6.NS.5
      { id: "ns5a", obj: "6.NS.5", type: "mc", q: "A temperature of 5 degrees below zero is written as:", options: ["−5", "5", "+5", "0"], a: 0, why: "Below zero is negative." },
      { id: "ns5b", obj: "6.NS.5", type: "mc", q: "On a number line, −3 is located:", options: ["To the left of 0", "To the right of 0", "At 0", "Above 0"], a: 0, why: "Negatives are left of zero." },
      { id: "ns5c", obj: "6.NS.5", type: "mc", q: "Which is a real-life use of negative numbers?", options: ["Owing money (debt)", "Counting apples", "A full cup", "Your age"], a: 0, why: "Debt is below zero." },
      { id: "ns5d", obj: "6.NS.5", type: "mc", q: "Which number is less than 0?", options: ["−2", "2", "0", "5"], a: 0, why: "−2 is negative." },
      // 6.NS.6
      { id: "ns6a", obj: "6.NS.6", type: "mc", q: "The point (−2, 3) is located:", options: ["Left of the y-axis and above the x-axis", "Right and up", "Right and down", "At the origin"], a: 0, why: "Negative x is left; positive y is up." },
      { id: "ns6b", obj: "6.NS.6", type: "mc", q: "The opposite of −7 is:", options: ["7", "−7", "0", "14"], a: 0, why: "Opposites are the same distance from 0." },
      { id: "ns6c", obj: "6.NS.6", type: "mc", q: "On a number line, which is farther right: −1 or −5?", options: ["−1", "−5", "equal", "neither"], a: 0, why: "−1 is greater, so farther right." },
      { id: "ns6d", obj: "6.NS.6", type: "mc", q: "The coordinate plane has how many quadrants?", options: ["4", "2", "1", "8"], a: 0, why: "Two axes divide it into 4 quadrants." },
      // 6.NS.7
      { id: "ns7a", obj: "6.NS.7", type: "mc", q: "Which is greater: −3 or −8?", options: ["−3", "−8"], a: 0, why: "−3 is to the right of −8, so greater." },
      { id: "ns7b", obj: "6.NS.7", type: "numeric", q: "The absolute value |−6| = ?", answer: 6, why: "Absolute value is distance from 0." },
      { id: "ns7c", obj: "6.NS.7", type: "numeric", q: "|9| = ?", answer: 9, why: "9 is 9 units from 0." },
      { id: "ns7d", obj: "6.NS.7", type: "mc", q: "Of −5, 0, and 2, the smallest is:", options: ["−5", "0", "2", "they're equal"], a: 0, why: "−5 is the least." },
      // 6.EE.1
      { id: "ee1a", obj: "6.EE.1", type: "numeric", q: "What is 2³ (2 to the 3rd power)?", answer: 8, why: "2 × 2 × 2 = 8." },
      { id: "ee1b", obj: "6.EE.1", type: "numeric", q: "What is 5²?", answer: 25, why: "5 × 5 = 25." },
      { id: "ee1c", obj: "6.EE.1", type: "numeric", q: "What is 10⁴?", answer: 10000, why: "10 × 10 × 10 × 10 = 10,000." },
      { id: "ee1d", obj: "6.EE.1", type: "mc", q: "3⁴ means:", options: ["3 × 3 × 3 × 3", "3 × 4", "4 × 4 × 4", "3 + 4"], a: 0, why: "The exponent 4 means multiply 3 four times." },
      // 6.EE.2
      { id: "ee2a", obj: "6.EE.2", type: "mc", q: "The expression 'x + 5' means:", options: ["A number plus 5", "5 minus a number", "5 times x", "x divided by 5"], a: 0, why: "x stands for a number, plus 5." },
      { id: "ee2b", obj: "6.EE.2", type: "numeric", q: "Evaluate 3n + 2 when n = 4.", answer: 14, why: "3 × 4 = 12, + 2 = 14." },
      { id: "ee2c", obj: "6.EE.2", type: "mc", q: "In the expression 4y, the 4 is the:", options: ["Coefficient", "Exponent", "Variable", "Sum"], a: 0, why: "The number multiplying a variable is the coefficient." },
      { id: "ee2d", obj: "6.EE.2", type: "numeric", q: "Evaluate 2x − 1 when x = 5.", answer: 9, why: "2 × 5 = 10, − 1 = 9." },
      // 6.EE.7
      { id: "ee7a", obj: "6.EE.7", type: "numeric", q: "Solve for x:  x + 7 = 12.  x = ?", answer: 5, why: "12 − 7 = 5." },
      { id: "ee7b", obj: "6.EE.7", type: "numeric", q: "Solve:  3x = 21.  x = ?", answer: 7, why: "21 ÷ 3 = 7." },
      { id: "ee7c", obj: "6.EE.7", type: "numeric", q: "Solve:  x − 4 = 10.  x = ?", answer: 14, why: "10 + 4 = 14." },
      { id: "ee7d", obj: "6.EE.7", type: "numeric", q: "Solve:  x ÷ 2 = 8.  x = ?", answer: 16, why: "8 × 2 = 16." },
      // 6.EE.8
      { id: "ee8a", obj: "6.EE.8", type: "mc", q: "The inequality x > 5 means x is:", options: ["Greater than 5", "Less than 5", "Equal to 5", "At most 5"], a: 0, why: "> means greater than." },
      { id: "ee8b", obj: "6.EE.8", type: "mc", q: "Which number makes x < 3 true?", options: ["2", "3", "5", "10"], a: 0, why: "2 is less than 3." },
      { id: "ee8c", obj: "6.EE.8", type: "mc", q: "'At least 10' is written as:", options: ["x ≥ 10", "x > 10", "x < 10", "x = 10"], a: 0, why: "At least means greater than or equal to." },
      { id: "ee8d", obj: "6.EE.8", type: "mc", q: "The symbol ≤ means:", options: ["Less than or equal to", "Greater than", "Exactly", "Not equal"], a: 0, why: "≤ is 'less than or equal to'." },
      // 6.G.1
      { id: "g1a", obj: "6.G.1", type: "numeric", q: "The area of a triangle with base 6 and height 4 is ___. (Area = 1/2 × b × h)", answer: 12, why: "1/2 × 6 × 4 = 12." },
      { id: "g1b", obj: "6.G.1", type: "numeric", q: "The area of a rectangle 8 by 5 is ___.", answer: 40, why: "8 × 5 = 40." },
      { id: "g1c", obj: "6.G.1", type: "numeric", q: "A triangle has base 10 and height 3. Its area is ___.", answer: 15, why: "1/2 × 10 × 3 = 15." },
      { id: "g1d", obj: "6.G.1", type: "numeric", q: "A parallelogram with base 7 and height 4 has area ___. (A = b × h)", answer: 28, why: "7 × 4 = 28." },
      // 6.G.2
      { id: "g2a", obj: "6.G.2", type: "numeric", q: "A box 3 × 4 × 2 has a volume of ___ cubic units.", answer: 24, why: "3 × 4 × 2 = 24." },
      { id: "g2b", obj: "6.G.2", type: "numeric", q: "A cube with side 2 has a volume of ___.", answer: 8, why: "2 × 2 × 2 = 8." },
      { id: "g2c", obj: "6.G.2", type: "mc", q: "The volume of a rectangular prism is:", options: ["length × width × height", "length + width + height", "2 × length", "base × 2"], a: 0, why: "V = l × w × h." },
      { id: "g2d", obj: "6.G.2", type: "numeric", q: "A box 5 × 2 × 3 has a volume of ___ cubic units.", answer: 30, why: "5 × 2 × 3 = 30." },
      // 6.G.4
      { id: "g4a", obj: "6.G.4", type: "mc", q: "A flat pattern you can fold into a 3-D shape is called a:", options: ["Net", "Graph", "Grid", "Line"], a: 0, why: "A net unfolds the faces of a solid." },
      { id: "g4b", obj: "6.G.4", type: "numeric", q: "A cube has 6 faces, each with area 4 sq units. Its total surface area is ___ sq units.", answer: 24, why: "6 × 4 = 24." },
      { id: "g4c", obj: "6.G.4", type: "mc", q: "Surface area measures:", options: ["The total area of all the faces", "The space inside", "The length", "The weight"], a: 0, why: "Surface area adds up every face." },
      { id: "g4d", obj: "6.G.4", type: "numeric", q: "A cube has 6 faces, each 1 sq unit. Its surface area = ___.", answer: 6, why: "6 × 1 = 6." },
      // 6.SP.3
      { id: "sp3a", obj: "6.SP.3", type: "mc", q: "The 'mean' of a set of numbers is the:", options: ["Average", "Middle value", "Most common value", "Range"], a: 0, why: "Mean is the average." },
      { id: "sp3b", obj: "6.SP.3", type: "mc", q: "The 'median' is the:", options: ["Middle value when ordered", "Average", "Most common", "Biggest"], a: 0, why: "Median is the middle." },
      { id: "sp3c", obj: "6.SP.3", type: "mc", q: "The 'mode' is the:", options: ["Most common value", "Average", "Middle", "Smallest"], a: 0, why: "Mode appears most often." },
      { id: "sp3d", obj: "6.SP.3", type: "mc", q: "The 'range' is:", options: ["The highest minus the lowest", "The average", "The middle", "The mode"], a: 0, why: "Range = max − min." },
      // 6.SP.5
      { id: "sp5a", obj: "6.SP.5", type: "numeric", q: "The mean (average) of 4, 6, and 8 is ___.", answer: 6, why: "(4 + 6 + 8) ÷ 3 = 6." },
      { id: "sp5b", obj: "6.SP.5", type: "numeric", q: "The median of 3, 7, 9 is ___.", answer: 7, why: "7 is the middle value." },
      { id: "sp5c", obj: "6.SP.5", type: "numeric", q: "The range of 2, 5, 10 is ___.", answer: 8, why: "10 − 2 = 8." },
      { id: "sp5d", obj: "6.SP.5", type: "numeric", q: "The mean of 10 and 20 is ___.", answer: 15, why: "(10 + 20) ÷ 2 = 15." }
    ]
  }
};
