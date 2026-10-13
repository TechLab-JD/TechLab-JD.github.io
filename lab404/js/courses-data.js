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
      { code: "4-ESS3-2", domain: "ESS", weight: 0.9, title: "Communities can reduce the impacts of natural hazards", xwalk: { cc: "4-ESS3-2", ma: "4-ESS3-2", teks: "", vasol: "", flbest: "" } }
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
      { id: "ess32d", obj: "4-ESS3-2", type: "mc", q: "We can't always stop natural hazards, but we can:", options: ["Prepare and reduce their impact", "Make them disappear forever", "Fully control the weather", "Safely ignore them"], a: 0, why: "Preparation reduces the impact of hazards." }
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
      { code: "4.RF.3", domain: "RF", weight: 0.9, title: "Decode multisyllable words using syllables and word parts", xwalk: { cc: "4.RF.3", ma: "4.RF.3", teks: "", vasol: "", flbest: "" } }
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
      { id: "rf3d", obj: "4.RF.3", type: "mc", q: "To read a long word like independent, it helps to:", options: ["Break it into syllables and parts", "Guess from the first letter only", "Skip it", "Spell it backward"], a: 0, why: "Decode long words by chunking them into parts." }
    ]
  }
};
