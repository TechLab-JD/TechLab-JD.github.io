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
      { code: "4.SS.H2", domain: "H", weight: 0.9, title: "Read timelines and use chronological order", xwalk: { cc: "", ma: "4.T3", teks: "", vasol: "", flbest: "" } }
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
      { id: "ssh2d", obj: "4.SS.H2", type: "mc", q: "A period of 100 years is called a:", options: ["Century", "Decade", "Year", "Week"], a: 0, why: "A century is 100 years." }
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
      { code: "5.G.1", domain: "G", weight: 0.9, title: "Plot and interpret points on the coordinate plane", xwalk: { cc: "5.G.A.1", ma: "5.G.A.1", teks: "", vasol: "", flbest: "" } }
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
      { id: "g1d5", obj: "5.G.1", type: "mc", q: "The two number lines on a coordinate grid are the:", options: ["x-axis and y-axis", "top and bottom", "rows and columns", "start and end"], a: 0, why: "The horizontal x-axis and vertical y-axis." }
    ]
  }
};
