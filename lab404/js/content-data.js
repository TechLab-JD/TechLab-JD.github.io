/* content-data.js — Study Zone lesson content (first wave, 2026-10-11).
   window.LAB404_CONTENT["<subject>-<topic-slug>"] = { title, subject, level, intro, cards[], flash[], quiz[] }.
   A topic folder with an entry here opens as a lesson (intro + concept cards, flashcards, quiz) instead of
   coming-soon. All original content, written for study and checked against standard curricula. Add topics by
   adding keys here — no engine changes needed. */
window.LAB404_CONTENT = {
 "math-algebra": {
  "title": "Algebra",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "intro": "Algebra is arithmetic with letters. Instead of only known numbers, you use letters (variables) to stand for unknown numbers, then follow rules to find what they equal. It's the language math uses to describe patterns and solve for things you don't know yet.",
  "cards": [
   {
    "h": "Variables and expressions",
    "body": "A variable is a letter (like x) that stands for a number you don't know yet. An expression combines numbers, variables and operations, like 3x + 5. You can't \"solve\" an expression — you simplify it, or evaluate it by plugging in a value for the variable."
   },
   {
    "h": "Equations and the balance rule",
    "body": "An equation says two expressions are equal, like 2x + 3 = 11. The golden rule: whatever you do to one side, you must do to the other, to keep it balanced. You solve by undoing operations until the variable is alone."
   },
   {
    "h": "Solving a one-variable equation",
    "body": "Work backwards through the order of operations. For 2x + 3 = 11: subtract 3 from both sides (2x = 8), then divide both sides by 2 (x = 4). Always do the same step to both sides."
   },
   {
    "h": "Combining like terms",
    "body": "Like terms have the same variable to the same power — 3x and 5x are like terms (they add to 8x), but 3x and 3x² are not. Combine like terms to simplify before solving; plain numbers (constants) combine separately."
   },
   {
    "h": "Distributing and signs",
    "body": "Distributing means multiplying a term across a parenthesis: 2(x + 4) = 2x + 8. Watch signs — a negative in front flips the signs inside: −(x − 3) = −x + 3."
   }
  ],
  "flash": [
   [
    "Variable",
    "A letter that stands for an unknown number (e.g., x)."
   ],
   [
    "Expression",
    "Numbers, variables and operations combined, with no equals sign (e.g., 3x + 5)."
   ],
   [
    "Equation",
    "A statement that two expressions are equal, using an equals sign."
   ],
   [
    "Coefficient",
    "The number multiplied by a variable (the 3 in 3x)."
   ],
   [
    "Constant",
    "A fixed number with no variable (the 5 in 3x + 5)."
   ],
   [
    "Like terms",
    "Terms with the same variable to the same power, which can be combined."
   ],
   [
    "The balance rule",
    "Whatever you do to one side of an equation, do to the other."
   ],
   [
    "Distribute",
    "Multiply a term across everything inside the parentheses."
   ]
  ],
  "quiz": [
   {
    "q": "Solve for x: x + 7 = 12",
    "options": [
     "x = 5",
     "x = 19",
     "x = 7",
     "x = 12"
    ],
    "a": 0,
    "why": "Subtract 7 from both sides: x = 12 − 7 = 5."
   },
   {
    "q": "Simplify: 4x + 3x",
    "options": [
     "7x",
     "12x",
     "7x²",
     "x + 7"
    ],
    "a": 0,
    "why": "They're like terms, so add the coefficients: 4 + 3 = 7, giving 7x."
   },
   {
    "q": "Solve for x: 2x − 6 = 10",
    "options": [
     "x = 8",
     "x = 2",
     "x = 5",
     "x = 16"
    ],
    "a": 0,
    "why": "Add 6 to both sides (2x = 16), then divide by 2: x = 8."
   },
   {
    "q": "What is the coefficient in the term 9y?",
    "options": [
     "9",
     "y",
     "0",
     "1"
    ],
    "a": 0,
    "why": "The coefficient is the number multiplying the variable — here, 9."
   },
   {
    "q": "Distribute: 3(x + 2)",
    "options": [
     "3x + 6",
     "3x + 2",
     "x + 6",
     "3x + 5"
    ],
    "a": 0,
    "why": "Multiply 3 by each term inside: 3·x + 3·2 = 3x + 6."
   },
   {
    "q": "Which pair are like terms?",
    "options": [
     "5x and 2x",
     "5x and 5x²",
     "5x and 5",
     "5 and 2y"
    ],
    "a": 0,
    "why": "Like terms share the same variable to the same power. 5x and 2x both have x¹."
   }
  ]
 },
 "money-budgeting": {
  "title": "Budgeting",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "intro": "A budget is a plan for your money — deciding where it goes before it's gone. The goal isn't to restrict you; it's to make sure the important things (rent, food, saving) get covered first, so you're in control instead of wondering where it all went.",
  "cards": [
   {
    "h": "Income minus expenses",
    "body": "Start with your take-home (after-tax) income — the money that actually lands in your account. Then list what goes out. Income minus expenses that's positive means money to save or pay down debt; negative means you're going backwards and something has to change."
   },
   {
    "h": "Needs, wants, and savings",
    "body": "A simple split is 50/30/20: about 50% of take-home to needs (rent, food, utilities, transport), 30% to wants (eating out, fun), 20% to savings and debt payoff. The percentages are a starting guide, not a rule — adjust to your reality."
   },
   {
    "h": "Fixed vs. variable costs",
    "body": "Fixed costs are the same each month (rent, phone, insurance). Variable costs change (groceries, gas, fun). Fixed costs are hard to cut month to month, so variable spending is usually where you find room when money's tight."
   },
   {
    "h": "Pay yourself first",
    "body": "Treat savings like a bill you owe yourself — move money to savings as soon as you're paid, not whatever's left at the end (there's usually nothing left). Even $10 a paycheck builds the habit and a cushion."
   },
   {
    "h": "The emergency fund",
    "body": "An emergency fund is cash set aside only for true surprises — a car repair, a medical bill, a lost job. Start with a small goal like $500, then build toward a month of expenses. It's what keeps a bad week from becoming debt."
   }
  ],
  "flash": [
   [
    "Budget",
    "A plan for where your money goes before you spend it."
   ],
   [
    "Take-home pay",
    "Income after taxes and deductions — what hits your account."
   ],
   [
    "Fixed cost",
    "An expense that's the same each month (rent, insurance)."
   ],
   [
    "Variable cost",
    "An expense that changes month to month (groceries, gas)."
   ],
   [
    "50/30/20",
    "A budget guide: 50% needs, 30% wants, 20% savings/debt."
   ],
   [
    "Pay yourself first",
    "Save money as soon as you're paid, before spending."
   ],
   [
    "Emergency fund",
    "Cash set aside only for true surprises."
   ],
   [
    "Deficit",
    "Spending more than you earn (the opposite of a surplus)."
   ]
  ],
  "quiz": [
   {
    "q": "You take home $2,000/month and spend $2,300. You have a:",
    "options": [
     "Deficit",
     "Surplus",
     "Balanced budget",
     "Emergency fund"
    ],
    "a": 0,
    "why": "Spending more than you earn is a deficit — you're going backwards."
   },
   {
    "q": "Under 50/30/20, how much of $2,000 take-home goes to savings/debt?",
    "options": [
     "$400",
     "$1,000",
     "$600",
     "$200"
    ],
    "a": 0,
    "why": "20% of $2,000 is $400."
   },
   {
    "q": "Which is a fixed cost?",
    "options": [
     "Car insurance",
     "Groceries",
     "Gas",
     "Eating out"
    ],
    "a": 0,
    "why": "Insurance is the same each month; the others vary."
   },
   {
    "q": "'Pay yourself first' means:",
    "options": [
     "Save right when you're paid",
     "Spend on yourself first",
     "Pay your newest bill first",
     "Buy what you want guilt-free"
    ],
    "a": 0,
    "why": "Move money to savings before you spend, so it actually happens."
   },
   {
    "q": "The main purpose of an emergency fund is to:",
    "options": [
     "Cover true surprises without debt",
     "Invest in stocks",
     "Pay monthly rent",
     "Buy wants faster"
    ],
    "a": 0,
    "why": "It's a cash cushion so a setback doesn't become debt."
   },
   {
    "q": "Which is usually easiest to cut when money is tight?",
    "options": [
     "Variable spending",
     "Rent",
     "Insurance",
     "Loan payments"
    ],
    "a": 0,
    "why": "Variable costs flex month to month; fixed costs are locked in."
   }
  ]
 },
 "medicine-first-aid-cpr": {
  "title": "First Aid & CPR",
  "subject": "Health & Medicine",
  "level": "All levels",
  "disclaimer": "This is general information, NOT medical training. Take a hands-on certified course (American Red Cross or American Heart Association) and ALWAYS call 911 in a real emergency.",
  "intro": "First aid is the help you give before professionals arrive — and in the first minutes of an emergency, a bystander often makes the difference between life and death. You don't need to be a doctor; a few simple actions, done calmly, save lives.",
  "cards": [
   {
    "h": "Scene safety and calling for help",
    "body": "Before you help anyone, make sure the scene is safe for YOU — you can't help if you become a second victim. Then call 911 (or point to a specific person and tell them to call) and, if available, get an AED. Give the dispatcher your location first."
   },
   {
    "h": "Checking responsiveness and breathing",
    "body": "Tap the person's shoulder and shout \"Are you okay?\" If there's no response, check for normal breathing for no more than 10 seconds. Gasping is NOT normal breathing — treat it as not breathing and start CPR."
   },
   {
    "h": "Hands-only CPR",
    "body": "For an adult who collapses and isn't breathing normally, push hard and fast in the center of the chest — about 2 inches deep, 100–120 pushes per minute (the beat of \"Stayin' Alive\"). Let the chest come all the way back up between pushes. Don't stop until help takes over or an AED arrives."
   },
   {
    "h": "Choking",
    "body": "If someone can't breathe, cough, or speak, give abdominal thrusts (the Heimlich): stand behind them, make a fist just above the navel, and thrust inward and upward. If they become unresponsive, lower them to the ground and start CPR."
   },
   {
    "h": "Severe bleeding",
    "body": "Press firmly and directly on the wound with a clean cloth and don't let up. Keep pressure on even if it soaks through — add more cloth on top rather than removing it. For life-threatening limb bleeding that won't stop, a tourniquet placed above the wound can save a life until help arrives."
   }
  ],
  "flash": [
   [
    "First aid",
    "Immediate help given before professional care arrives."
   ],
   [
    "AED",
    "Automated External Defibrillator — a device that can restart a heart and talks you through it."
   ],
   [
    "CPR",
    "Cardiopulmonary resuscitation — chest compressions (and breaths) to keep blood flowing."
   ],
   [
    "Compression depth (adult)",
    "About 2 inches deep, in the center of the chest."
   ],
   [
    "Compression rate",
    "100–120 per minute (the beat of 'Stayin' Alive')."
   ],
   [
    "Heimlich maneuver",
    "Abdominal thrusts to clear a blocked airway in a choking person."
   ],
   [
    "Direct pressure",
    "Pressing firmly on a wound — the first step to stop bleeding."
   ],
   [
    "Recovery position",
    "Rolling an unresponsive but breathing person onto their side to protect the airway."
   ]
  ],
  "quiz": [
   {
    "q": "What's the FIRST thing to do before helping at an emergency?",
    "options": [
     "Make sure the scene is safe for you",
     "Start CPR immediately",
     "Give water",
     "Move the person"
    ],
    "a": 0,
    "why": "If you get hurt too, you can't help. Check scene safety first."
   },
   {
    "q": "For adult hands-only CPR, you push at a rate of:",
    "options": [
     "100–120 per minute",
     "40–60 per minute",
     "200+ per minute",
     "As slow as possible"
    ],
    "a": 0,
    "why": "100–120 compressions per minute — the beat of 'Stayin' Alive.'"
   },
   {
    "q": "Gasping in an unresponsive person should be treated as:",
    "options": [
     "Not breathing — start CPR",
     "Normal breathing",
     "A good sign",
     "A reason to wait"
    ],
    "a": 0,
    "why": "Agonal gasping is not effective breathing; begin CPR."
   },
   {
    "q": "The first step to control most bleeding is:",
    "options": [
     "Firm direct pressure",
     "A tourniquet",
     "Rinsing with water",
     "Elevating only"
    ],
    "a": 0,
    "why": "Direct pressure on the wound is the first and main step."
   },
   {
    "q": "Someone is choking and cannot speak or cough. You:",
    "options": [
     "Give abdominal thrusts",
     "Give them water",
     "Tell them to lie down",
     "Wait and watch"
    ],
    "a": 0,
    "why": "A silent, can't-breathe choking victim needs abdominal thrusts now."
   },
   {
    "q": "How deep are adult chest compressions?",
    "options": [
     "About 2 inches",
     "About half an inch",
     "As deep as possible",
     "About 1 foot"
    ],
    "a": 0,
    "why": "About 2 inches (5 cm) for an adult, letting the chest fully recoil."
   }
  ]
 },
 "cooking-kitchen-basics": {
  "title": "Kitchen Basics",
  "subject": "Cooking & Nutrition",
  "level": "All levels",
  "intro": "Cooking for yourself saves money, eats healthier, and isn't as hard as it looks. Master a handful of basics — a few tools, how heat works, and food safety — and you can make most simple meals without a recipe.",
  "cards": [
   {
    "h": "The few tools you actually need",
    "body": "You can cook almost anything with a chef's knife, a cutting board, one good skillet, one pot, a spatula and a mixing bowl. Everything else is a bonus. A sharp knife is safer than a dull one — dull knives slip."
   },
   {
    "h": "How heat works",
    "body": "Low heat is for gentle cooking (eggs, sauces, simmering). Medium is the everyday default. High heat sears and boils. Most beginners burn food by using heat that's too high — when in doubt, go medium and be patient."
   },
   {
    "h": "Salt, taste, adjust",
    "body": "Season in layers as you cook, not just at the end, and taste as you go — it's the single biggest thing separating good food from bland food. Salt brings out flavor, acid (lemon, vinegar) brightens, and fat (oil, butter) carries flavor."
   },
   {
    "h": "Food safety basics",
    "body": "Wash hands and surfaces, and keep raw meat away from ready-to-eat food (use separate cutting boards). Cook chicken to 165°F and ground beef to 160°F. Don't leave perishable food out more than 2 hours. When in doubt, throw it out."
   },
   {
    "h": "A simple method: the one-pan sauté",
    "body": "Heat a little oil in a skillet over medium. Add aromatics (onion, garlic) first, then your protein until cooked through, then vegetables, seasoning as you go. Most quick dinners are a version of this."
   }
  ],
  "flash": [
   [
    "Chef's knife",
    "The one essential knife — does most kitchen cutting."
   ],
   [
    "Sauté",
    "To cook quickly in a little fat over medium-high heat."
   ],
   [
    "Simmer",
    "To cook in liquid just below a boil (small bubbles)."
   ],
   [
    "Sear",
    "To brown the surface of food over high heat for flavor."
   ],
   [
    "Aromatics",
    "Onion, garlic and the like, cooked first to build flavor."
   ],
   [
    "Cross-contamination",
    "Spreading germs from raw meat to other food — avoid with separate boards."
   ],
   [
    "Safe chicken temp",
    "165°F internal temperature."
   ],
   [
    "Mise en place",
    "Prepping and measuring everything before you start cooking."
   ]
  ],
  "quiz": [
   {
    "q": "The safest knife is:",
    "options": [
     "A sharp one",
     "A dull one",
     "A small one",
     "A serrated one"
    ],
    "a": 0,
    "why": "Dull knives slip and cause cuts; sharp knives cut predictably."
   },
   {
    "q": "Chicken is safe to eat at an internal temperature of:",
    "options": [
     "165°F",
     "120°F",
     "140°F",
     "212°F"
    ],
    "a": 0,
    "why": "Poultry must reach 165°F to be safe."
   },
   {
    "q": "Most beginners ruin food by:",
    "options": [
     "Using heat that's too high",
     "Using medium heat",
     "Stirring too much",
     "Tasting as they go"
    ],
    "a": 0,
    "why": "Too-high heat burns food; medium is the safer everyday default."
   },
   {
    "q": "To avoid cross-contamination you should:",
    "options": [
     "Keep raw meat separate from ready-to-eat food",
     "Rinse everything in hot water only",
     "Cook everything on high",
     "Use one board for all"
    ],
    "a": 0,
    "why": "Separate boards/surfaces for raw meat prevent spreading germs."
   },
   {
    "q": "'Mise en place' means:",
    "options": [
     "Prep everything before cooking",
     "Cook on medium",
     "Season only at the end",
     "Clean as you go"
    ],
    "a": 0,
    "why": "French for 'everything in its place' — prep first, cook smoother."
   },
   {
    "q": "Perishable food shouldn't sit out longer than:",
    "options": [
     "2 hours",
     "8 hours",
     "24 hours",
     "All day"
    ],
    "a": 0,
    "why": "Bacteria grow quickly at room temperature; 2 hours is the limit."
   }
  ]
 },
 "coding-python": {
  "title": "Python",
  "subject": "Computer Science & Coding",
  "level": "Grades 9-12",
  "intro": "Python is one of the best first programming languages — it reads almost like English and is used everywhere from websites to data science. Programming is just giving a computer exact, step-by-step instructions. Learn these building blocks and you can write real, useful code.",
  "cards": [
   {
    "h": "Variables store values",
    "body": "A variable is a named box that holds a value: name = \"Sam\" or age = 20. You can change what's inside later. Python figures out the type automatically — text (strings), whole numbers (ints), decimals (floats), and True/False (booleans)."
   },
   {
    "h": "print() and input()",
    "body": "print() shows text on the screen; input() reads what the user types (always as text). print(\"Hello\") displays Hello. These two let your program talk with a person."
   },
   {
    "h": "if / else makes decisions",
    "body": "Code can choose what to do based on a condition: if age >= 18: print(\"adult\") else: print(\"minor\"). Indentation (the spaces at the start of a line) is how Python groups code — it is not optional."
   },
   {
    "h": "Loops repeat work",
    "body": "A for loop repeats over a sequence; a while loop repeats as long as a condition is true. for i in range(3): print(i) prints 0, 1, 2. Loops save you from writing the same line over and over."
   },
   {
    "h": "Functions package code",
    "body": "A function is reusable code you define once and call by name: def greet(name): return \"Hi \" + name. Then greet(\"Sam\") gives \"Hi Sam\". Functions keep programs organized and avoid repetition."
   }
  ],
  "flash": [
   [
    "Variable",
    "A named container that stores a value."
   ],
   [
    "String",
    "Text data, written in quotes (e.g., \"hello\")."
   ],
   [
    "Integer",
    "A whole number with no decimal (e.g., 5)."
   ],
   [
    "Boolean",
    "A True or False value."
   ],
   [
    "print()",
    "A function that displays output on the screen."
   ],
   [
    "if statement",
    "Runs code only when a condition is true."
   ],
   [
    "Loop",
    "Code that repeats (a for loop or a while loop)."
   ],
   [
    "Function",
    "A reusable named block of code you define and call."
   ]
  ],
  "quiz": [
   {
    "q": "Which creates a variable holding text?",
    "options": [
     "name = \"Sam\"",
     "name = Sam",
     "\"Sam\" = name",
     "name == Sam"
    ],
    "a": 0,
    "why": "Text goes in quotes and is assigned with a single =."
   },
   {
    "q": "What does print(2 + 3) display?",
    "options": [
     "5",
     "23",
     "2 + 3",
     "Error"
    ],
    "a": 0,
    "why": "Python evaluates 2 + 3 to 5 and prints the number."
   },
   {
    "q": "input() always returns data as a:",
    "options": [
     "String (text)",
     "Integer",
     "Boolean",
     "Float"
    ],
    "a": 0,
    "why": "input() gives text; convert with int() if you need a number."
   },
   {
    "q": "How is code grouped under an if or a loop in Python?",
    "options": [
     "Indentation",
     "Curly braces { }",
     "Semicolons",
     "Parentheses"
    ],
    "a": 0,
    "why": "Python uses indentation (spaces) to define blocks."
   },
   {
    "q": "for i in range(3): print(i) prints:",
    "options": [
     "0 1 2",
     "1 2 3",
     "0 1 2 3",
     "3"
    ],
    "a": 0,
    "why": "range(3) gives 0, 1, 2 — it stops before 3."
   },
   {
    "q": "What does a function let you do?",
    "options": [
     "Reuse code by name",
     "Only print text",
     "Store one number",
     "Stop the program"
    ],
    "a": 0,
    "why": "Functions package reusable code you call whenever needed."
   }
  ]
 },
 "english-grammar-mechanics": {
  "title": "Grammar & Mechanics",
  "subject": "English & Language Arts",
  "level": "Grades 6-12",
  "intro": "Good grammar isn't about fancy rules — it's about being clear so readers understand you the first time. A few core ideas (complete sentences, subject–verb agreement, and the common comma and apostrophe uses) cover most of everyday writing.",
  "cards": [
   {
    "h": "What makes a complete sentence",
    "body": "A sentence needs a subject (who or what) and a verb (the action or state), and it must express a complete thought. \"The dog ran.\" is complete. \"Because the dog ran.\" is a fragment — it leaves you hanging."
   },
   {
    "h": "Subject–verb agreement",
    "body": "The verb must match the subject in number. One subject takes a singular verb (The dog runs); more than one takes a plural verb (The dogs run). The tricky part: the verb matches the subject, not words in between."
   },
   {
    "h": "Run-ons and how to fix them",
    "body": "A run-on jams two complete sentences together wrongly (\"I was tired I went to bed\"). Fix it with a period, a semicolon, or a comma plus a joining word (and, but, so): \"I was tired, so I went to bed.\""
   },
   {
    "h": "Commas that matter most",
    "body": "Use a comma between items in a list (apples, bread, and milk), after an introductory phrase (After lunch, we left), and before and/but/so when they join two full sentences. When unsure, read it aloud — natural pauses often signal commas."
   },
   {
    "h": "Apostrophes: contraction vs. possession",
    "body": "An apostrophe shows a contraction (do not → don't) or possession (the dog's bowl). The big trap: \"its\" (belonging to it) has NO apostrophe; \"it's\" always means \"it is.\" \"Your\" = belonging to you; \"you're\" = you are."
   }
  ],
  "flash": [
   [
    "Subject",
    "Who or what the sentence is about."
   ],
   [
    "Verb",
    "The action or state of being in a sentence."
   ],
   [
    "Fragment",
    "An incomplete sentence missing a subject, verb, or complete thought."
   ],
   [
    "Run-on",
    "Two complete sentences wrongly joined together."
   ],
   [
    "Subject–verb agreement",
    "The verb matches the subject in number (singular/plural)."
   ],
   [
    "Contraction",
    "Two words shortened with an apostrophe (can't = cannot)."
   ],
   [
    "Its vs. it's",
    "'Its' = belonging to it; 'it's' = it is."
   ],
   [
    "Your vs. you're",
    "'Your' = belonging to you; 'you're' = you are."
   ]
  ],
  "quiz": [
   {
    "q": "Which is a complete sentence?",
    "options": [
     "The cat slept.",
     "Because it was late.",
     "Running down the street.",
     "When the rain stopped."
    ],
    "a": 0,
    "why": "It has a subject (cat), a verb (slept), and a complete thought."
   },
   {
    "q": "Choose the correct verb: The group of students ___ ready.",
    "options": [
     "is",
     "are",
     "were being",
     "be"
    ],
    "a": 0,
    "why": "The subject is 'group' (singular), so 'is.' Don't be fooled by 'students.'"
   },
   {
    "q": "Which fixes the run-on 'It was hot we went inside'?",
    "options": [
     "It was hot, so we went inside.",
     "It was hot we, went inside.",
     "It was, hot we went inside.",
     "It was hot; we, inside."
    ],
    "a": 0,
    "why": "A comma plus a joining word ('so') correctly links two sentences."
   },
   {
    "q": "Which is correct?",
    "options": [
     "The dog wagged its tail.",
     "The dog wagged it's tail.",
     "The dog wagged its' tail.",
     "The dog wagged its's tail."
    ],
    "a": 0,
    "why": "'Its' (no apostrophe) shows possession; 'it's' means 'it is.'"
   },
   {
    "q": "Pick the correct word: ___ going to love this.",
    "options": [
     "You're",
     "Your",
     "Youre",
     "Yours"
    ],
    "a": 0,
    "why": "'You're' = 'you are,' which fits here."
   },
   {
    "q": "Where does a comma belong in 'After the movie we got food'?",
    "options": [
     "After 'movie'",
     "After 'we'",
     "After 'got'",
     "No comma needed"
    ],
    "a": 0,
    "why": "A comma follows an introductory phrase: 'After the movie, we got food.'"
   }
  ]
 },
 "science-biology": {
  "title": "Biology",
  "subject": "Science",
  "level": "Grades 9-12",
  "intro": "Biology is the study of life — how living things are built, how they work, and how they pass on traits. From a single cell to a whole ecosystem, a few big ideas (cells, energy, DNA and evolution) tie all of life together.",
  "cards": [
   {
    "h": "The cell is the unit of life",
    "body": "Every living thing is made of one or more cells — the smallest unit that counts as alive. Some organisms (bacteria) are a single cell; you are trillions. Cells take in nutrients, use energy, and reproduce."
   },
   {
    "h": "Two main cell types",
    "body": "Prokaryotic cells (bacteria) are small and simple, with no nucleus. Eukaryotic cells (plants, animals, fungi) are bigger and have a nucleus that holds their DNA, plus specialized parts called organelles."
   },
   {
    "h": "Energy: photosynthesis and respiration",
    "body": "Plants make their own food from sunlight, water and carbon dioxide through photosynthesis, releasing oxygen. Almost all living things (including plants) then break food down for energy through cellular respiration, using oxygen and releasing carbon dioxide — the two processes feed each other."
   },
   {
    "h": "DNA and genes",
    "body": "DNA is the molecule that carries the instructions for building and running an organism. A gene is a segment of DNA that codes for a trait. DNA is copied and passed from parents to offspring, which is why you resemble your family."
   },
   {
    "h": "Evolution by natural selection",
    "body": "Within a species, individuals vary. Those whose traits help them survive and reproduce in their environment pass on more of their genes, so helpful traits become more common over generations. This gradual change is evolution — the thread connecting all life."
   }
  ],
  "flash": [
   [
    "Cell",
    "The smallest unit of life; all living things are made of cells."
   ],
   [
    "Nucleus",
    "The part of a eukaryotic cell that holds its DNA."
   ],
   [
    "Prokaryote",
    "A simple cell with no nucleus (e.g., bacteria)."
   ],
   [
    "Eukaryote",
    "A cell with a nucleus and organelles (plants, animals, fungi)."
   ],
   [
    "Photosynthesis",
    "Plants making food from sunlight, water and CO₂, releasing oxygen."
   ],
   [
    "Cellular respiration",
    "Breaking food down for energy, using oxygen and releasing CO₂."
   ],
   [
    "DNA",
    "The molecule carrying an organism's genetic instructions."
   ],
   [
    "Natural selection",
    "Helpful traits become more common because they aid survival and reproduction."
   ]
  ],
  "quiz": [
   {
    "q": "The smallest unit of life is the:",
    "options": [
     "Cell",
     "Atom",
     "Organ",
     "Molecule"
    ],
    "a": 0,
    "why": "All living things are made of one or more cells."
   },
   {
    "q": "Which cell type has a nucleus?",
    "options": [
     "Eukaryotic",
     "Prokaryotic",
     "Bacterial",
     "None of them"
    ],
    "a": 0,
    "why": "Eukaryotic cells (plants, animals, fungi) have a nucleus; prokaryotes don't."
   },
   {
    "q": "Photosynthesis releases which gas?",
    "options": [
     "Oxygen",
     "Carbon dioxide",
     "Nitrogen",
     "Hydrogen"
    ],
    "a": 0,
    "why": "Plants take in CO₂ and release oxygen during photosynthesis."
   },
   {
    "q": "A gene is:",
    "options": [
     "A segment of DNA coding for a trait",
     "A type of cell",
     "An organelle",
     "A kind of protein only"
    ],
    "a": 0,
    "why": "Genes are stretches of DNA that code for traits."
   },
   {
    "q": "Cellular respiration uses oxygen to:",
    "options": [
     "Release energy from food",
     "Make DNA",
     "Build cell walls",
     "Produce sunlight"
    ],
    "a": 0,
    "why": "Respiration breaks food down to release usable energy."
   },
   {
    "q": "In natural selection, traits become more common when they:",
    "options": [
     "Help survival and reproduction",
     "Are the newest",
     "Are the largest",
     "Appear purely at random"
    ],
    "a": 0,
    "why": "Traits that aid survival and reproduction get passed on more often."
   }
  ]
 },
 "survival-shelter-fire": {
  "title": "Shelter & Fire",
  "subject": "Survival & Preparedness",
  "level": "All levels",
  "disclaimer": "General outdoor-safety information. Practice skills before you need them, and never take unnecessary risks.",
  "intro": "In a survival situation, your body is in danger from exposure long before hunger. The priorities are usually shelter and warmth first, then water, then food. Knowing how to stay warm and dry can keep you alive through a cold night.",
  "cards": [
   {
    "h": "The rule of threes",
    "body": "As a rough guide, you can survive about 3 minutes without air, 3 hours without shelter in harsh weather, 3 days without water, and 3 weeks without food. It tells you what to handle first: in cold or wet conditions, shelter and warmth come before water or food."
   },
   {
    "h": "Shelter: block wind and ground",
    "body": "Heat escapes fastest to wind and to the cold ground. A good emergency shelter is small (less air to warm), blocks the wind, and insulates you from the ground with a thick layer of leaves, branches, or a pad. Smaller is warmer."
   },
   {
    "h": "Staying dry is staying alive",
    "body": "Wet clothing pulls heat from your body many times faster than dry clothing. Avoid sweating heavily, keep a dry layer for sleeping, and shelter from rain. Hypothermia — dangerous loss of body heat — is a top killer and can happen even in mild temperatures when you're wet."
   },
   {
    "h": "Fire: the three ingredients",
    "body": "Fire needs heat (a spark or flame), fuel, and oxygen. Build up in stages: a tiny nest of dry tinder (fine, fluffy, dry material) → small kindling (pencil-thin twigs) → larger fuel wood. Give it airflow, and never jump straight to big logs."
   },
   {
    "h": "Signaling for rescue",
    "body": "Three of anything (three fires, three whistle blasts, three flashes) is a recognized distress signal. If you're lost and someone knows roughly where you are, usually stay put — a stationary person is far easier to find than a moving one."
   }
  ],
  "flash": [
   [
    "Rule of threes",
    "~3 min without air, 3 hrs without shelter, 3 days without water, 3 weeks without food."
   ],
   [
    "Exposure",
    "Harm from the environment (cold, heat, wet) — often the first danger outdoors."
   ],
   [
    "Hypothermia",
    "Dangerous loss of body heat; made worse by being wet and windy."
   ],
   [
    "Ground insulation",
    "A barrier (leaves, a pad) between you and the cold ground to keep heat in."
   ],
   [
    "Tinder",
    "Fine, dry, fluffy material that catches a spark first."
   ],
   [
    "Kindling",
    "Small twigs added after the tinder to grow a fire."
   ],
   [
    "Fire triangle",
    "Fire needs heat, fuel, and oxygen."
   ],
   [
    "Signal of three",
    "Three fires, whistles, or flashes signals distress."
   ]
  ],
  "quiz": [
   {
    "q": "In cold, wet conditions your FIRST priority is usually:",
    "options": [
     "Shelter and warmth",
     "Finding food",
     "Finding water",
     "Building a signal fire"
    ],
    "a": 0,
    "why": "Exposure kills fastest; shelter and warmth come before water or food."
   },
   {
    "q": "Body heat is lost fastest to:",
    "options": [
     "Wind and the cold ground",
     "The sky only",
     "Dry air",
     "Your feet only"
    ],
    "a": 0,
    "why": "Wind and ground conduction steal heat quickly; block both."
   },
   {
    "q": "Why is staying dry so important?",
    "options": [
     "Wet clothing pulls heat from you much faster",
     "It keeps clothes clean",
     "It saves water",
     "It helps you sweat"
    ],
    "a": 0,
    "why": "Wet clothing drains body heat rapidly, risking hypothermia."
   },
   {
    "q": "A fire needs heat, oxygen, and:",
    "options": [
     "Fuel",
     "Water",
     "Salt",
     "Metal"
    ],
    "a": 0,
    "why": "The fire triangle is heat, fuel, and oxygen."
   },
   {
    "q": "What do you light first when building a fire?",
    "options": [
     "Tinder",
     "Large logs",
     "Kindling",
     "A whole branch"
    ],
    "a": 0,
    "why": "Start with fine, dry tinder, then add kindling, then larger wood."
   },
   {
    "q": "A recognized distress signal is:",
    "options": [
     "Three of anything",
     "A single whistle",
     "A quiet wave",
     "Moving constantly"
    ],
    "a": 0,
    "why": "Three fires, whistle blasts, or flashes signal distress."
   }
  ]
 },
 "math-arithmetic": {
  "title": "Arithmetic",
  "subject": "Mathematics",
  "level": "Grades K-5",
  "intro": "Arithmetic is working with numbers using the four basic operations. It's the foundation everything else in math is built on — get comfortable here and the rest comes easier.",
  "cards": [
   {
    "h": "Place value",
    "body": "In a number like 342, each digit's position tells its value: 3 hundreds, 4 tens, 2 ones. Place value is why 50 and 500 are very different — the same digit means ten times more each place to the left."
   },
   {
    "h": "The four operations",
    "body": "Addition (+) combines, subtraction (−) takes away, multiplication (×) is repeated addition (3×4 = 3+3+3+3), and division (÷) splits into equal groups. Multiplication and division undo each other, as do addition and subtraction."
   },
   {
    "h": "Fractions",
    "body": "A fraction like 3/4 means 3 parts out of 4 equal parts. The top (numerator) counts the parts; the bottom (denominator) says how many make a whole. 1/2 = 2/4 = 4/8 — the same amount written different ways."
   },
   {
    "h": "Order of operations (PEMDAS)",
    "body": "When a problem has several operations, do them in order: Parentheses, Exponents, Multiplication and Division (left to right), then Addition and Subtraction (left to right). So 2 + 3×4 = 2 + 12 = 14, not 20."
   },
   {
    "h": "Percentages",
    "body": "Percent means 'out of 100.' 25% = 25/100 = 1/4 = 0.25. To find 25% of 80, multiply: 0.25 × 80 = 20. Percentages are everywhere — sales, tips, grades, interest."
   }
  ],
  "flash": [
   [
    "Place value",
    "The value of a digit based on its position (ones, tens, hundreds)."
   ],
   [
    "Numerator",
    "The top number of a fraction — how many parts you have."
   ],
   [
    "Denominator",
    "The bottom number of a fraction — how many parts make a whole."
   ],
   [
    "Product",
    "The answer to a multiplication problem."
   ],
   [
    "Quotient",
    "The answer to a division problem."
   ],
   [
    "PEMDAS",
    "Order of operations: Parentheses, Exponents, Mult/Div, Add/Sub."
   ],
   [
    "Percent",
    "A number out of 100 (25% = 25/100)."
   ],
   [
    "Equivalent fractions",
    "Different fractions that equal the same amount (1/2 = 2/4)."
   ]
  ],
  "quiz": [
   {
    "q": "In the number 507, the 5 is in the:",
    "options": [
     "Hundreds place",
     "Tens place",
     "Ones place",
     "Thousands place"
    ],
    "a": 0,
    "why": "Reading right to left: 7 ones, 0 tens, 5 hundreds."
   },
   {
    "q": "What is 3 × 4?",
    "options": [
     "12",
     "7",
     "34",
     "1"
    ],
    "a": 0,
    "why": "3×4 = 3+3+3+3 = 12."
   },
   {
    "q": "Which fraction equals 1/2?",
    "options": [
     "2/4",
     "1/4",
     "2/3",
     "3/4"
    ],
    "a": 0,
    "why": "2/4 reduces to 1/2 — the same amount."
   },
   {
    "q": "Using PEMDAS, 2 + 3 × 4 =",
    "options": [
     "14",
     "20",
     "24",
     "9"
    ],
    "a": 0,
    "why": "Multiply first (3×4=12), then add 2 → 14."
   },
   {
    "q": "What is 25% of 80?",
    "options": [
     "20",
     "25",
     "40",
     "2"
    ],
    "a": 0,
    "why": "25% = 0.25; 0.25 × 80 = 20."
   },
   {
    "q": "Division is the opposite of:",
    "options": [
     "Multiplication",
     "Addition",
     "Subtraction",
     "Exponents"
    ],
    "a": 0,
    "why": "Multiplication and division undo each other."
   }
  ]
 },
 "money-credit-debt-payoff": {
  "title": "Credit & Debt Payoff",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "intro": "Credit is borrowing money you promise to pay back. Used well it builds your reputation with lenders; used badly it traps you paying interest for years. Here's how it works and how to dig out of debt.",
  "cards": [
   {
    "h": "What credit is",
    "body": "Credit is borrowed money — a credit card, loan, or line of credit. You pay it back over time, almost always with interest (a fee for borrowing). Your track record of paying it back becomes your credit history."
   },
   {
    "h": "Credit score basics",
    "body": "A credit score (roughly 300–850) is a number lenders use to judge how risky you are to lend to. The biggest factors are paying on time and not using too much of your available credit. Higher scores mean easier approval and lower interest."
   },
   {
    "h": "The minimum-payment trap",
    "body": "Paying only the minimum on a credit card keeps you in debt for years, because interest piles onto the leftover balance every month. Carrying a balance at 20%+ interest is one of the most expensive things you can do with money."
   },
   {
    "h": "Snowball vs. avalanche",
    "body": "Two proven payoff plans: the snowball pays smallest balances first (quick wins, momentum); the avalanche pays highest-interest first (saves the most money). Pick whichever keeps you going — the best plan is the one you'll stick with."
   },
   {
    "h": "Avoid the worst traps",
    "body": "Payday loans, car-title loans, and rent-to-own carry brutal interest (often 200%+ a year) and are built to keep you borrowing. Avoid them. A credit union or a payment plan with the biller is almost always cheaper."
   }
  ],
  "flash": [
   [
    "Credit",
    "Borrowed money you agree to pay back, usually with interest."
   ],
   [
    "Interest",
    "The fee charged for borrowing money, as a percentage."
   ],
   [
    "Credit score",
    "A number (about 300–850) showing how reliably you repay."
   ],
   [
    "APR",
    "Annual Percentage Rate — the yearly cost of borrowing."
   ],
   [
    "Minimum payment",
    "The smallest amount due; paying only this keeps you in debt."
   ],
   [
    "Debt snowball",
    "Paying smallest balances first for momentum."
   ],
   [
    "Debt avalanche",
    "Paying highest-interest debt first to save the most."
   ],
   [
    "Payday loan",
    "A very high-interest short-term loan — best avoided."
   ]
  ],
  "quiz": [
   {
    "q": "Paying only the minimum on a credit card:",
    "options": [
     "Keeps you in debt for years",
     "Pays it off fastest",
     "Avoids all interest",
     "Raises your limit instantly"
    ],
    "a": 0,
    "why": "Interest keeps piling on the leftover balance, dragging payoff out for years."
   },
   {
    "q": "The two biggest factors in a credit score are:",
    "options": [
     "Paying on time and low credit usage",
     "Your age and job",
     "How many cards you own only",
     "Your income only"
    ],
    "a": 0,
    "why": "Payment history and how much of your available credit you use matter most."
   },
   {
    "q": "The debt avalanche method pays off which debt first?",
    "options": [
     "Highest-interest",
     "Smallest balance",
     "Newest",
     "Largest balance"
    ],
    "a": 0,
    "why": "Avalanche targets the highest interest rate to save the most money."
   },
   {
    "q": "Which should you usually avoid?",
    "options": [
     "Payday loans",
     "A credit union loan",
     "A biller payment plan",
     "Paying more than the minimum"
    ],
    "a": 0,
    "why": "Payday loans carry extreme interest and trap borrowers."
   },
   {
    "q": "APR stands for:",
    "options": [
     "Annual Percentage Rate",
     "Average Payment Range",
     "Account Payment Record",
     "Annual Principal Return"
    ],
    "a": 0,
    "why": "APR is the yearly cost of borrowing, shown as a percentage."
   },
   {
    "q": "The debt snowball's main advantage is:",
    "options": [
     "Quick wins and momentum",
     "Saving the most interest",
     "Raising your score instantly",
     "Avoiding all payments"
    ],
    "a": 0,
    "why": "Clearing small balances first builds motivation to keep going."
   }
  ]
 },
 "medicine-nutrition": {
  "title": "Nutrition",
  "subject": "Health & Medicine",
  "level": "Grades 6 - adult",
  "disclaimer": "General nutrition information, not medical or dietary advice. Talk to a doctor or dietitian about your specific needs.",
  "intro": "Nutrition is how the food you eat fuels and builds your body. You don't need a perfect diet — just a basic grasp of what food does helps you make better choices most of the time.",
  "cards": [
   {
    "h": "The three macronutrients",
    "body": "Food energy comes from three macros: carbohydrates (the body's main quick fuel — grains, fruit, bread), protein (builds and repairs muscle and tissue — meat, beans, eggs), and fat (concentrated energy and vitamin absorption — oils, nuts). You need all three."
   },
   {
    "h": "Calories and energy balance",
    "body": "A calorie is a unit of food energy. Eat about as many calories as you burn and weight stays steady; eat more and you gain, fewer and you lose. It's a rough balance, not a precise formula."
   },
   {
    "h": "Whole foods vs. processed",
    "body": "Foods closer to their natural state — vegetables, fruit, beans, whole grains, plain meats — tend to have more nutrients and fiber and keep you full longer. Heavily processed foods (chips, soda, candy) pack lots of calories with little nutrition."
   },
   {
    "h": "Hydration",
    "body": "Water carries nutrients, regulates temperature, and keeps you thinking clearly. Thirst, dark urine, and fatigue are signs to drink more. Plain water is best; sugary drinks add calories fast without filling you up."
   },
   {
    "h": "Reading a nutrition label",
    "body": "Check the serving size first (everything on the label is per serving, and a package is often several). Then scan calories, added sugars, sodium, and fiber. Ingredients are listed by weight — the first few are what there's most of."
   }
  ],
  "flash": [
   [
    "Macronutrient",
    "A nutrient needed in large amounts: carbs, protein, or fat."
   ],
   [
    "Carbohydrate",
    "The body's main quick energy source (grains, fruit)."
   ],
   [
    "Protein",
    "Nutrient that builds and repairs muscle and tissue."
   ],
   [
    "Calorie",
    "A unit of energy from food."
   ],
   [
    "Energy balance",
    "Calories in vs. calories out — drives weight change."
   ],
   [
    "Whole food",
    "Food close to its natural state, rich in nutrients and fiber."
   ],
   [
    "Fiber",
    "Plant material that aids digestion and keeps you full."
   ],
   [
    "Serving size",
    "The amount a nutrition label's numbers are based on."
   ]
  ],
  "quiz": [
   {
    "q": "Which macronutrient mainly builds and repairs muscle?",
    "options": [
     "Protein",
     "Carbohydrate",
     "Fat",
     "Water"
    ],
    "a": 0,
    "why": "Protein is the body's building and repair material."
   },
   {
    "q": "If you eat more calories than you burn, you generally:",
    "options": [
     "Gain weight",
     "Lose weight",
     "Stay exactly the same",
     "Burn muscle only"
    ],
    "a": 0,
    "why": "Extra energy in beyond what you use is stored, so weight goes up."
   },
   {
    "q": "The FIRST thing to check on a nutrition label is:",
    "options": [
     "Serving size",
     "Calories",
     "The brand",
     "The color"
    ],
    "a": 0,
    "why": "All the numbers are per serving, and a package often holds several."
   },
   {
    "q": "A sign you need more water is:",
    "options": [
     "Dark urine",
     "Clear urine",
     "Feeling cold",
     "Eating slowly"
    ],
    "a": 0,
    "why": "Dark urine, thirst and fatigue signal dehydration."
   },
   {
    "q": "Compared to chips and soda, whole foods usually have:",
    "options": [
     "More nutrients and fiber",
     "Fewer nutrients",
     "More added sugar",
     "No calories"
    ],
    "a": 0,
    "why": "Whole foods carry more nutrients and fiber per calorie."
   },
   {
    "q": "On an ingredient list, items are ordered by:",
    "options": [
     "Weight (most first)",
     "Alphabet",
     "Price",
     "Random"
    ],
    "a": 0,
    "why": "Ingredients are listed from most to least by weight."
   }
  ]
 },
 "cooking-food-safety": {
  "title": "Food Safety",
  "subject": "Cooking & Nutrition",
  "level": "All levels",
  "intro": "Most food poisoning is preventable with a few habits. Keeping food out of the temperature range where bacteria thrive, and keeping raw and ready-to-eat food apart, covers the vast majority of risk.",
  "cards": [
   {
    "h": "The danger zone",
    "body": "Bacteria multiply fastest between 40°F and 140°F — the 'danger zone.' Keep cold food cold (below 40°F / in the fridge) and hot food hot (above 140°F). Don't let perishable food sit in that range more than 2 hours (1 hour if it's above 90°F out)."
   },
   {
    "h": "Clean, separate, cook, chill",
    "body": "The four core rules: Clean hands and surfaces often; Separate raw meat from other foods; Cook to safe temperatures; Chill leftovers promptly. These four cover most of food safety."
   },
   {
    "h": "Safe internal temperatures",
    "body": "Use a thermometer, not guesswork: poultry 165°F, ground beef 160°F, whole cuts of beef/pork 145°F (with a short rest), fish 145°F. Color isn't a reliable sign — temperature is."
   },
   {
    "h": "Thawing safely",
    "body": "Thaw frozen food in the fridge, in cold water (changed every 30 min), or in the microwave — never on the counter, where the outside enters the danger zone while the middle is still frozen. Cook food thawed in water or microwave right away."
   },
   {
    "h": "Leftovers",
    "body": "Refrigerate leftovers within 2 hours in shallow containers so they cool fast. Eat them within 3–4 days, and reheat to 165°F. When in doubt, throw it out — you can't always smell or see the bacteria that make you sick."
   }
  ],
  "flash": [
   [
    "Danger zone",
    "40°F–140°F, where bacteria multiply fastest."
   ],
   [
    "2-hour rule",
    "Don't leave perishable food out longer than 2 hours."
   ],
   [
    "Cross-contamination",
    "Spreading germs from raw food to ready-to-eat food."
   ],
   [
    "Safe poultry temp",
    "165°F internal."
   ],
   [
    "Safe ground beef temp",
    "160°F internal."
   ],
   [
    "Clean/Separate/Cook/Chill",
    "The four core food-safety rules."
   ],
   [
    "Safe thawing",
    "In the fridge, cold water, or microwave — never on the counter."
   ],
   [
    "Leftover limit",
    "Eat refrigerated leftovers within 3–4 days."
   ]
  ],
  "quiz": [
   {
    "q": "Bacteria grow fastest between:",
    "options": [
     "40°F and 140°F",
     "0°F and 32°F",
     "140°F and 212°F",
     "Below freezing"
    ],
    "a": 0,
    "why": "That range is the 'danger zone' for rapid bacterial growth."
   },
   {
    "q": "The safest way to thaw meat is:",
    "options": [
     "In the fridge",
     "On the counter",
     "In a sunny window",
     "Next to the stove"
    ],
    "a": 0,
    "why": "Counter thawing lets the outside enter the danger zone; the fridge is safe."
   },
   {
    "q": "Ground beef is safe at an internal temperature of:",
    "options": [
     "160°F",
     "120°F",
     "140°F",
     "100°F"
    ],
    "a": 0,
    "why": "Ground beef must reach 160°F."
   },
   {
    "q": "The four core food-safety rules are clean, separate, cook, and:",
    "options": [
     "Chill",
     "Freeze",
     "Fry",
     "Salt"
    ],
    "a": 0,
    "why": "Clean, Separate, Cook, Chill."
   },
   {
    "q": "Refrigerated leftovers should be eaten within about:",
    "options": [
     "3–4 days",
     "2 weeks",
     "1 month",
     "1 hour"
    ],
    "a": 0,
    "why": "After 3–4 days, toss them to be safe."
   },
   {
    "q": "To tell if meat is cooked safely, rely on:",
    "options": [
     "A thermometer",
     "Color",
     "Smell",
     "Cooking time only"
    ],
    "a": 0,
    "why": "Color and smell are unreliable; internal temperature is the real test."
   }
  ]
 },
 "coding-web-development-html-css-js": {
  "title": "Web Development (HTML/CSS/JS)",
  "subject": "Computer Science & Coding",
  "level": "Grades 9-12",
  "intro": "Every website is built from three languages working together. Learn what each one does and you can build and understand web pages — the most visible, shareable kind of code there is.",
  "cards": [
   {
    "h": "Three languages, three jobs",
    "body": "HTML is the structure (the content and its skeleton), CSS is the style (colors, layout, fonts), and JavaScript is the behavior (things that respond and change). A good way to remember: HTML = nouns, CSS = adjectives, JS = verbs."
   },
   {
    "h": "HTML: tags and elements",
    "body": "HTML marks up content with tags in angle brackets. Most come in pairs: <p>Hello</p> is a paragraph element. Common tags: <h1> heading, <p> paragraph, <a> link, <img> image, <div> a generic container."
   },
   {
    "h": "CSS: selectors and rules",
    "body": "CSS styles HTML by selecting elements and setting properties: p { color: blue; font-size: 16px; } makes all paragraphs blue. You can select by tag, by class (.button), or by id (#header)."
   },
   {
    "h": "JavaScript on a page",
    "body": "JavaScript makes pages interactive — responding to clicks, changing content, validating forms. It can find elements and change them: document.getElementById('msg').textContent = 'Hi'. It runs right in the browser."
   },
   {
    "h": "How a browser builds a page",
    "body": "When you open a page, the browser reads the HTML top to bottom, applies the CSS to style it, and runs the JavaScript to make it interactive. Together they turn text files into the page you see and use."
   }
  ],
  "flash": [
   [
    "HTML",
    "The language for a web page's structure and content."
   ],
   [
    "CSS",
    "The language for a web page's style (color, layout, fonts)."
   ],
   [
    "JavaScript",
    "The language for a web page's behavior and interactivity."
   ],
   [
    "Tag",
    "HTML markup in angle brackets, like <p> or <h1>."
   ],
   [
    "Element",
    "An HTML tag plus its content, like <p>Hi</p>."
   ],
   [
    "Selector",
    "The part of a CSS rule that picks which elements to style."
   ],
   [
    "Class",
    "A reusable label on elements, selected in CSS with a dot (.button)."
   ],
   [
    "Browser",
    "The program that reads HTML/CSS/JS and shows the page."
   ]
  ],
  "quiz": [
   {
    "q": "Which language controls a web page's structure?",
    "options": [
     "HTML",
     "CSS",
     "JavaScript",
     "Python"
    ],
    "a": 0,
    "why": "HTML provides the content and skeleton of the page."
   },
   {
    "q": "Which language styles colors and layout?",
    "options": [
     "CSS",
     "HTML",
     "JavaScript",
     "SQL"
    ],
    "a": 0,
    "why": "CSS handles the look — colors, fonts, spacing, layout."
   },
   {
    "q": "Which makes a page interactive (respond to clicks)?",
    "options": [
     "JavaScript",
     "HTML",
     "CSS",
     "JSON"
    ],
    "a": 0,
    "why": "JavaScript adds behavior and interactivity."
   },
   {
    "q": "<p>Hello</p> is an example of a(n):",
    "options": [
     "HTML element",
     "CSS rule",
     "JS function",
     "Image file"
    ],
    "a": 0,
    "why": "A tag pair plus its content is an HTML element."
   },
   {
    "q": "In CSS, '.button' selects elements by their:",
    "options": [
     "Class",
     "Tag",
     "Id",
     "Color"
    ],
    "a": 0,
    "why": "A leading dot selects by class name."
   },
   {
    "q": "A browser reads the languages in roughly this order:",
    "options": [
     "HTML, then CSS, then JavaScript",
     "JavaScript first",
     "CSS first",
     "Random order"
    ],
    "a": 0,
    "why": "It builds structure (HTML), styles it (CSS), then runs behavior (JS)."
   }
  ]
 },
 "english-writing-composition": {
  "title": "Writing & Composition",
  "subject": "English & Language Arts",
  "level": "Grades 6-12",
  "intro": "Good writing is clear thinking on paper. It's less about talent and more about process — getting ideas down, then shaping them so a reader follows you easily.",
  "cards": [
   {
    "h": "The writing process",
    "body": "Strong writing happens in stages: prewrite (brainstorm and plan), draft (get it all down without judging), revise (reshape ideas and structure), and edit (fix grammar and wording). Trying to do all at once is why writing feels hard — separate the stages."
   },
   {
    "h": "Paragraph structure",
    "body": "A paragraph covers one main idea. It usually opens with a topic sentence that states that idea, follows with sentences that explain or give evidence, and the next paragraph starts when the idea changes."
   },
   {
    "h": "The thesis statement",
    "body": "In an essay, the thesis is one sentence stating your main point or argument, usually near the end of the introduction. Everything after it should support that one claim. A clear thesis keeps the whole piece focused."
   },
   {
    "h": "Show, don't just tell",
    "body": "Instead of stating a conclusion flatly ('the room was messy'), give the detail that proves it ('clothes covered the floor and dishes crusted on the desk'). Specific, concrete details make writing vivid and believable."
   },
   {
    "h": "Revising and proofreading",
    "body": "Revising is big-picture (Is it clear? Organized? Does each part support the point?). Proofreading is last — catching spelling, grammar, and typos. Reading your work aloud catches awkward sentences your eyes skip over."
   }
  ],
  "flash": [
   [
    "Prewriting",
    "Brainstorming and planning before you draft."
   ],
   [
    "Draft",
    "A first full version, written without stopping to perfect it."
   ],
   [
    "Revising",
    "Reworking ideas, organization, and clarity (big picture)."
   ],
   [
    "Proofreading",
    "The final check for spelling, grammar, and typos."
   ],
   [
    "Topic sentence",
    "The sentence stating a paragraph's main idea."
   ],
   [
    "Thesis statement",
    "One sentence stating an essay's main point."
   ],
   [
    "Show, don't tell",
    "Use concrete detail instead of flat statements."
   ],
   [
    "Audience",
    "Who you're writing for — it shapes word choice and tone."
   ]
  ],
  "quiz": [
   {
    "q": "Which is the correct order of the writing process?",
    "options": [
     "Prewrite, draft, revise, edit",
     "Edit, draft, prewrite, revise",
     "Draft, edit, prewrite",
     "Revise, prewrite, draft"
    ],
    "a": 0,
    "why": "Plan, get it down, reshape, then polish."
   },
   {
    "q": "A topic sentence states:",
    "options": [
     "A paragraph's main idea",
     "The essay's title",
     "A grammar rule",
     "The conclusion only"
    ],
    "a": 0,
    "why": "It tells the reader what the paragraph is about."
   },
   {
    "q": "A thesis statement is:",
    "options": [
     "One sentence giving the essay's main point",
     "The first word",
     "A list of sources",
     "A random fact"
    ],
    "a": 0,
    "why": "It states the central claim the essay supports."
   },
   {
    "q": "'Clothes covered the floor' instead of 'the room was messy' is an example of:",
    "options": [
     "Show, don't tell",
     "A thesis",
     "Proofreading",
     "A topic sentence"
    ],
    "a": 0,
    "why": "Concrete detail shows the point rather than just stating it."
   },
   {
    "q": "Proofreading mainly catches:",
    "options": [
     "Spelling and grammar errors",
     "Weak organization",
     "A missing thesis",
     "Unclear ideas"
    ],
    "a": 0,
    "why": "Proofreading is the final surface-level polish; revising handles the big picture."
   },
   {
    "q": "A good trick for catching awkward sentences is to:",
    "options": [
     "Read it aloud",
     "Write faster",
     "Skip editing",
     "Use longer words"
    ],
    "a": 0,
    "why": "Reading aloud reveals clunky phrasing your eyes skim past."
   }
  ]
 },
 "social-civics-government": {
  "title": "Civics & Government",
  "subject": "Social Studies",
  "level": "Grades 9-12",
  "intro": "Civics is how your government works and what your role in it is. Understanding the basics — the branches, your rights, and how decisions get made — lets you take part instead of just being affected.",
  "cards": [
   {
    "h": "The three branches",
    "body": "The U.S. federal government has three branches: the Legislative (Congress) makes laws, the Executive (the President) carries them out, and the Judicial (the courts) interprets them. Splitting power keeps any one part from controlling everything."
   },
   {
    "h": "Checks and balances",
    "body": "Each branch can limit the others. Congress passes laws, but the President can veto them, and the courts can rule them unconstitutional. This balance is designed to prevent abuse of power."
   },
   {
    "h": "Federal vs. state",
    "body": "Power is also split between the national (federal) government and the states. The federal government handles things like the military and money; states handle things like driver's licenses, most schools, and local laws. Some powers they share."
   },
   {
    "h": "Your rights",
    "body": "The Bill of Rights (the first 10 amendments to the Constitution) protects key freedoms — speech, religion, press, assembly, the right to a fair trial, and protection from unreasonable searches. Knowing them is the first step to using them."
   },
   {
    "h": "How a bill becomes law",
    "body": "A bill is proposed in Congress, debated and voted on in both the House and the Senate, and if both pass it, it goes to the President to sign into law (or veto). Citizens influence this by voting and contacting representatives."
   }
  ],
  "flash": [
   [
    "Legislative branch",
    "Congress — makes the laws."
   ],
   [
    "Executive branch",
    "The President — carries out the laws."
   ],
   [
    "Judicial branch",
    "The courts — interpret the laws."
   ],
   [
    "Checks and balances",
    "Each branch can limit the powers of the others."
   ],
   [
    "Veto",
    "The President's power to reject a bill from Congress."
   ],
   [
    "Federalism",
    "Division of power between national and state governments."
   ],
   [
    "Bill of Rights",
    "The first 10 amendments protecting basic freedoms."
   ],
   [
    "Amendment",
    "A formal change or addition to the Constitution."
   ]
  ],
  "quiz": [
   {
    "q": "Which branch makes laws?",
    "options": [
     "Legislative (Congress)",
     "Executive",
     "Judicial",
     "State"
    ],
    "a": 0,
    "why": "Congress, the legislative branch, writes and passes laws."
   },
   {
    "q": "The President's power to reject a bill is called a:",
    "options": [
     "Veto",
     "Filibuster",
     "Ruling",
     "Pardon"
    ],
    "a": 0,
    "why": "A veto rejects a bill passed by Congress."
   },
   {
    "q": "The first 10 amendments to the Constitution are the:",
    "options": [
     "Bill of Rights",
     "Articles",
     "Preamble",
     "Declaration"
    ],
    "a": 0,
    "why": "They protect fundamental freedoms and are called the Bill of Rights."
   },
   {
    "q": "Which is usually a STATE responsibility?",
    "options": [
     "Driver's licenses",
     "The military",
     "Printing money",
     "Foreign treaties"
    ],
    "a": 0,
    "why": "States handle licenses, most schools, and local matters; the federal government handles the military and currency."
   },
   {
    "q": "Checks and balances exist to:",
    "options": [
     "Prevent any one branch from gaining too much power",
     "Speed up laws",
     "Give the President full control",
     "Remove the courts"
    ],
    "a": 0,
    "why": "They let each branch limit the others to prevent abuse."
   },
   {
    "q": "After both houses of Congress pass a bill, it goes to the:",
    "options": [
     "President",
     "Supreme Court",
     "Governor",
     "Voters"
    ],
    "a": 0,
    "why": "The President signs it into law or vetoes it."
   }
  ]
 },
 "survival-water-food": {
  "title": "Water & Food",
  "subject": "Survival & Preparedness",
  "level": "All levels",
  "disclaimer": "General outdoor-safety information. When in doubt about water or wild food, don't risk it.",
  "intro": "After shelter and warmth, water is your next priority — you can only last a few days without it. Food matters far less in the short term. Knowing how to find water and make it safe is a core survival skill.",
  "cards": [
   {
    "h": "Water is the priority after shelter",
    "body": "You can survive weeks without food but only about 3 days without water, less in heat. Once you're sheltered and warm, finding and treating water is the next job — long before you worry about food."
   },
   {
    "h": "Finding water",
    "body": "Look downhill and in low spots, toward green vegetation, and listen for running water. Rainwater and morning dew are cleaner sources. Avoid stagnant water with algae or a bad smell if you have a choice."
   },
   {
    "h": "Making water safe",
    "body": "Clear-looking water can still carry germs that make you very sick. Make it safe by boiling (a rolling boil for 1 minute is the most reliable), using a water filter, or chemical purification (tablets or a few drops of unscented bleach). Boiling is the gold standard."
   },
   {
    "h": "Signs of dehydration",
    "body": "Watch for thirst, dark urine, headache, dizziness, and fatigue. Sip steadily rather than gulping, and don't wait until you feel terrible. Ration sweat, not water — rest in the heat of the day instead of drinking too little."
   },
   {
    "h": "Food: caution first",
    "body": "Food is a low short-term priority, and the biggest danger is eating something poisonous. Never eat a wild plant or mushroom you can't identify with certainty — a mistake can be deadly. Focus energy on water, shelter, and signaling instead."
   }
  ],
  "flash": [
   [
    "Water priority",
    "After shelter, water is the next survival need (~3 days without)."
   ],
   [
    "Potable water",
    "Water that is safe to drink."
   ],
   [
    "Boiling",
    "The most reliable way to make water safe (1-minute rolling boil)."
   ],
   [
    "Water filter",
    "A device that removes germs/particles from water."
   ],
   [
    "Purification",
    "Making water safe with chemicals (tablets or bleach)."
   ],
   [
    "Dehydration",
    "Harmful loss of body water; signs include dark urine and dizziness."
   ],
   [
    "'Ration sweat, not water'",
    "Avoid overexertion/heat rather than drinking too little."
   ],
   [
    "Wild food caution",
    "Never eat a plant or mushroom you can't identify for sure."
   ]
  ],
  "quiz": [
   {
    "q": "After shelter and warmth, your next priority is usually:",
    "options": [
     "Water",
     "Food",
     "A signal fire",
     "A weapon"
    ],
    "a": 0,
    "why": "You can last weeks without food but only days without water."
   },
   {
    "q": "The most reliable way to make water safe is to:",
    "options": [
     "Boil it (1-minute rolling boil)",
     "Let it sit",
     "Add sugar",
     "Freeze it"
    ],
    "a": 0,
    "why": "Boiling kills germs reliably; filtering and purification tablets also work."
   },
   {
    "q": "A sign of dehydration is:",
    "options": [
     "Dark urine and dizziness",
     "Clear urine",
     "Feeling full",
     "Sweating less on purpose being safe"
    ],
    "a": 0,
    "why": "Dark urine, headache, and dizziness signal you need water."
   },
   {
    "q": "Clear-looking stream water:",
    "options": [
     "Can still carry germs — treat it",
     "Is always safe",
     "Never needs boiling",
     "Is safe if cold"
    ],
    "a": 0,
    "why": "Clear water can still contain harmful microbes; always treat it."
   },
   {
    "q": "With wild plants and mushrooms, the rule is:",
    "options": [
     "Never eat what you can't identify for sure",
     "Taste a little first",
     "If it smells fine, eat it",
     "Berries are always safe"
    ],
    "a": 0,
    "why": "Misidentifying wild food can be fatal; when unsure, don't eat it."
   },
   {
    "q": "Roughly how long can a person survive without water?",
    "options": [
     "About 3 days",
     "About 3 weeks",
     "About 3 hours",
     "About 3 months"
    ],
    "a": 0,
    "why": "Around 3 days (less in heat) — far shorter than without food."
   }
  ]
 }
};
