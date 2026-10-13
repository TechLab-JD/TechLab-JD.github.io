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
      { code: "4.OA.2", domain: "OA", weight: 1.0, title: "Solve multiplication & division word problems, including “times as many” comparisons", xwalk: { cc: "4.OA.A.2", ma: "4.OA.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.OA.4", domain: "OA", weight: 0.9, title: "Find factor pairs & multiples; tell if a number 1–100 is prime or composite", xwalk: { cc: "4.OA.B.4", ma: "4.OA.B.4", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.2", domain: "NBT", weight: 1.0, title: "Read, write & compare multi-digit whole numbers using place value", xwalk: { cc: "4.NBT.A.2", ma: "4.NBT.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.3", domain: "NBT", weight: 0.9, title: "Round multi-digit whole numbers to any place", xwalk: { cc: "4.NBT.A.3", ma: "4.NBT.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.5", domain: "NBT", weight: 1.1, title: "Multiply multi-digit numbers (up to 4-digit × 1-digit, 2-digit × 2-digit)", xwalk: { cc: "4.NBT.B.5", ma: "4.NBT.B.5", teks: "", vasol: "", flbest: "" } },
      { code: "4.NBT.6", domain: "NBT", weight: 1.1, title: "Divide up to 4-digit by 1-digit numbers, with remainders", xwalk: { cc: "4.NBT.B.6", ma: "4.NBT.B.6", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.1", domain: "NF", weight: 1.2, title: "Recognize & generate equivalent fractions", xwalk: { cc: "4.NF.A.1", ma: "4.NF.A.1", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.2", domain: "NF", weight: 1.2, title: "Compare two fractions with different numerators & denominators", xwalk: { cc: "4.NF.A.2", ma: "4.NF.A.2", teks: "", vasol: "", flbest: "" } },
      { code: "4.NF.3", domain: "NF", weight: 1.2, title: "Add & subtract fractions with like denominators; add mixed numbers", xwalk: { cc: "4.NF.B.3", ma: "4.NF.B.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.MD.3", domain: "MD", weight: 0.9, title: "Apply area & perimeter formulas for rectangles", xwalk: { cc: "4.MD.A.3", ma: "4.MD.A.3", teks: "", vasol: "", flbest: "" } },
      { code: "4.G.1", domain: "G", weight: 0.8, title: "Identify points, lines, rays, angles (right/acute/obtuse) & parallel/perpendicular lines", xwalk: { cc: "4.G.A.1", ma: "4.G.A.1", teks: "", vasol: "", flbest: "" } }
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
      { id: "g1d", obj: "4.G.1", type: "mc", q: "Two lines that cross to form right angles are:", options: ["Perpendicular", "Parallel", "Acute", "Obtuse"], a: 0, why: "Perpendicular lines meet at 90°." }
    ]
  }
};
