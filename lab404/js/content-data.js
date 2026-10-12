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
 },
 "languages-spanish": {
  "title": "Spanish",
  "subject": "World Languages",
  "level": "All levels",
  "intro": "Spanish is one of the most useful languages to learn — spoken by over 400 million people and especially handy in the U.S. The good news: it's spelled how it sounds, so once you learn the sounds, you can read almost anything.",
  "cards": [
   {
    "h": "Spanish is phonetic",
    "body": "Unlike English, Spanish letters almost always make the same sound. Learn the five vowel sounds (a = ah, e = eh, i = ee, o = oh, u = oo) and you can pronounce most words on sight. They're short and crisp, not drawn out."
   },
   {
    "h": "Greetings and courtesy",
    "body": "Hola (hello), Buenos días (good morning), Buenas tardes (good afternoon), Gracias (thank you), Por favor (please), De nada (you're welcome). ¿Cómo estás? asks 'How are you?'"
   },
   {
    "h": "Nouns have gender",
    "body": "Every noun is masculine or feminine. Most ending in -o are masculine (el libro, the book); most ending in -a are feminine (la casa, the house). 'The' is el (masc.) or la (fem.); 'a/an' is un or una."
   },
   {
    "h": "Simple sentences",
    "body": "Spanish word order is usually like English: subject + verb + rest. Yo como pan = I eat bread. You can often drop the subject because the verb ending shows who: Como pan also means 'I eat bread.'"
   },
   {
    "h": "Question words",
    "body": "¿Qué? (what), ¿Quién? (who), ¿Dónde? (where), ¿Cuándo? (when), ¿Por qué? (why), ¿Cómo? (how). Note the upside-down ¿ that opens every Spanish question."
   }
  ],
  "flash": [
   [
    "Hola",
    "Hello"
   ],
   [
    "Gracias",
    "Thank you"
   ],
   [
    "Por favor",
    "Please"
   ],
   [
    "Sí / No",
    "Yes / No"
   ],
   [
    "el / la",
    "'the' (masculine / feminine)"
   ],
   [
    "Buenos días",
    "Good morning"
   ],
   [
    "¿Dónde?",
    "Where?"
   ],
   [
    "Phonetic",
    "Spelled the way it sounds — true of Spanish."
   ]
  ],
  "quiz": [
   {
    "q": "How do you say 'thank you' in Spanish?",
    "options": [
     "Gracias",
     "Hola",
     "Por favor",
     "Adiós"
    ],
    "a": 0,
    "why": "Gracias means thank you."
   },
   {
    "q": "The Spanish vowel 'i' sounds like:",
    "options": [
     "ee (as in 'see')",
     "eye",
     "ih",
     "ay"
    ],
    "a": 0,
    "why": "In Spanish, i = 'ee.'"
   },
   {
    "q": "Which article is feminine?",
    "options": [
     "la",
     "el",
     "un",
     "los"
    ],
    "a": 0,
    "why": "'la' is the feminine 'the'; 'el' is masculine."
   },
   {
    "q": "A noun ending in -o is usually:",
    "options": [
     "Masculine",
     "Feminine",
     "Plural",
     "A verb"
    ],
    "a": 0,
    "why": "Most -o nouns are masculine (el libro)."
   },
   {
    "q": "What does ¿Dónde? mean?",
    "options": [
     "Where?",
     "Who?",
     "What?",
     "When?"
    ],
    "a": 0,
    "why": "¿Dónde? asks 'where?'"
   },
   {
    "q": "Spanish questions open with:",
    "options": [
     "An upside-down ¿",
     "A capital letter only",
     "A dash",
     "Nothing special"
    ],
    "a": 0,
    "why": "An inverted question mark ¿ begins Spanish questions."
   }
  ]
 },
 "lifeskills-career-job-skills": {
  "title": "Career & Job Skills",
  "subject": "Life Skills & Finance",
  "level": "Grades 9 - adult",
  "intro": "Getting and keeping a good job is a skill set you can learn, not luck. A clear resume, solid interview habits, and basic workplace professionalism will put you ahead of most applicants.",
  "cards": [
   {
    "h": "The resume's one job",
    "body": "A resume exists to get you an interview, not to list your life story. Keep it to one page, lead with your most relevant experience and skills, use action verbs ('managed,' 'built,' 'fixed'), and tailor it to each job by mirroring the posting's key words."
   },
   {
    "h": "Where jobs actually come from",
    "body": "Most jobs are filled through connections and referrals, not just online applications. Tell people you're looking, show up to hiring events, and follow up — a quick, polite message after applying sets you apart."
   },
   {
    "h": "Interview basics",
    "body": "Research the company first, arrive early, dress a step above the role, and have 2–3 short stories ready that show how you solved a problem. Answer with specifics, not generalities, and always prepare a question or two to ask them."
   },
   {
    "h": "The STAR answer",
    "body": "For 'tell me about a time…' questions, use STAR: Situation (set the scene), Task (your job), Action (what you did), Result (how it turned out). It keeps your answer focused and shows real impact."
   },
   {
    "h": "Keeping the job",
    "body": "Show up on time, do what you say you'll do, communicate early when there's a problem, and be easy to work with. Reliability and a good attitude get you further than raw talent in most jobs."
   }
  ],
  "flash": [
   [
    "Resume",
    "A one-page summary of your skills and experience to land an interview."
   ],
   [
    "Action verb",
    "A strong verb describing what you did (built, managed, fixed)."
   ],
   [
    "Cover letter",
    "A short note tailoring your application to a specific job."
   ],
   [
    "Referral",
    "A recommendation from someone that helps you get hired."
   ],
   [
    "STAR method",
    "Situation, Task, Action, Result — a way to answer interview questions."
   ],
   [
    "Reference",
    "Someone who can vouch for your work to an employer."
   ],
   [
    "Follow-up",
    "A polite message sent after applying or interviewing."
   ],
   [
    "Soft skills",
    "Reliability, communication, teamwork — how you work with others."
   ]
  ],
  "quiz": [
   {
    "q": "The main purpose of a resume is to:",
    "options": [
     "Get you an interview",
     "List your whole life",
     "Replace the interview",
     "Impress friends"
    ],
    "a": 0,
    "why": "A resume's job is to earn an interview, so keep it focused."
   },
   {
    "q": "Most jobs are filled through:",
    "options": [
     "Connections and referrals",
     "Online forms only",
     "Luck",
     "Cold walk-ins only"
    ],
    "a": 0,
    "why": "Networking and referrals fill more jobs than blind applications."
   },
   {
    "q": "STAR stands for Situation, Task, Action, and:",
    "options": [
     "Result",
     "Reason",
     "Reference",
     "Review"
    ],
    "a": 0,
    "why": "Result — how it turned out — completes the STAR answer."
   },
   {
    "q": "On a resume you should use:",
    "options": [
     "Action verbs",
     "Long paragraphs",
     "As many pages as possible",
     "Only hobbies"
    ],
    "a": 0,
    "why": "Action verbs (built, managed) show impact concisely."
   },
   {
    "q": "A good way to stand out after applying is to:",
    "options": [
     "Send a polite follow-up",
     "Apply 10 more times",
     "Do nothing",
     "Call every hour"
    ],
    "a": 0,
    "why": "A brief, polite follow-up shows initiative without being pushy."
   },
   {
    "q": "What usually keeps a job long-term?",
    "options": [
     "Reliability and attitude",
     "Raw talent only",
     "Working in silence",
     "Never asking questions"
    ],
    "a": 0,
    "why": "Showing up, following through, and being easy to work with matter most."
   }
  ]
 },
 "arts-drawing": {
  "title": "Drawing",
  "subject": "Arts & Music",
  "level": "All levels",
  "intro": "Drawing is a skill, not a gift — it's really about learning to see accurately and practicing. Anyone can improve dramatically with a few fundamentals and regular practice.",
  "cards": [
   {
    "h": "Drawing is seeing",
    "body": "Most 'bad' drawing comes from drawing what you think something looks like (a symbol) instead of what's actually there. Slow down and really look at shapes, angles and proportions. Draw what you see, not what you know."
   },
   {
    "h": "Start with basic shapes",
    "body": "Almost anything can be broken into simple shapes — circles, boxes, cylinders. Block in the big shapes first (a head is a ball, a body a series of cylinders), then refine. This keeps proportions right before you add detail."
   },
   {
    "h": "Line and proportion",
    "body": "Use light, loose lines to sketch first, then darken the ones you keep. Compare sizes to judge proportion ('the head fits about seven times into the body'), and hold your pencil at arm's length to measure lengths."
   },
   {
    "h": "Value and shading",
    "body": "Value is how light or dark something is. Shading with a range of values — from bright highlight to dark shadow — is what makes a flat drawing look three-dimensional. Squint at your subject to see the big light and dark shapes."
   },
   {
    "h": "Practice beats talent",
    "body": "Improvement comes from drawing regularly, even badly. Draw from life, copy drawings you admire to learn, and keep old sketches to see progress. Twenty minutes a day beats one long session a month."
   }
  ],
  "flash": [
   [
    "Proportion",
    "The size relationship between parts of a drawing."
   ],
   [
    "Gesture",
    "A quick, loose sketch capturing a pose or motion."
   ],
   [
    "Value",
    "How light or dark an area is."
   ],
   [
    "Shading",
    "Adding value to create the look of light and form."
   ],
   [
    "Highlight",
    "The brightest spot where light hits."
   ],
   [
    "Blocking in",
    "Sketching the big basic shapes before detail."
   ],
   [
    "Contour line",
    "A line following the edge of a form."
   ],
   [
    "Perspective",
    "How objects appear smaller and converge with distance."
   ]
  ],
  "quiz": [
   {
    "q": "The biggest key to realistic drawing is:",
    "options": [
     "Drawing what you actually see",
     "Drawing from memory",
     "Expensive pencils",
     "Drawing fast"
    ],
    "a": 0,
    "why": "Accurate observation beats drawing the symbol in your head."
   },
   {
    "q": "A good way to start a complex drawing is to:",
    "options": [
     "Block in basic shapes",
     "Start with tiny details",
     "Darken everything first",
     "Trace it"
    ],
    "a": 0,
    "why": "Big shapes first keep proportions right before detail."
   },
   {
    "q": "'Value' in drawing refers to:",
    "options": [
     "How light or dark an area is",
     "The cost of materials",
     "The subject's price",
     "Line thickness only"
    ],
    "a": 0,
    "why": "Value is lightness/darkness; shading with it creates form."
   },
   {
    "q": "Shading makes a drawing look:",
    "options": [
     "Three-dimensional",
     "Flatter",
     "Smaller",
     "Blurry"
    ],
    "a": 0,
    "why": "A range of values gives the illusion of light and depth."
   },
   {
    "q": "The fastest way to improve at drawing is to:",
    "options": [
     "Practice regularly",
     "Wait for talent",
     "Only watch videos",
     "One big monthly session"
    ],
    "a": 0,
    "why": "Frequent practice, even short sessions, drives improvement."
   },
   {
    "q": "To compare proportions, artists often:",
    "options": [
     "Hold a pencil at arm's length",
     "Guess",
     "Use a ruler on the subject",
     "Close both eyes"
    ],
    "a": 0,
    "why": "Measuring with a pencil at arm's length checks relative sizes."
   }
  ]
 },
 "mind-critical-thinking": {
  "title": "Critical Thinking",
  "subject": "Psychology & Philosophy",
  "level": "All levels",
  "intro": "Critical thinking is the skill of judging information carefully instead of just accepting it. In a world full of ads, headlines and strong opinions, it's one of the most protective skills you can build.",
  "cards": [
   {
    "h": "Claims need evidence",
    "body": "A claim is just an assertion until there's evidence for it. Ask: How do they know? What's the source? Could it be wrong? Strong claims — especially surprising or convenient ones — need strong evidence."
   },
   {
    "h": "Correlation isn't causation",
    "body": "Two things happening together doesn't mean one caused the other. Ice cream sales and drowning both rise in summer — but ice cream doesn't cause drowning; hot weather drives both. Always ask if something else explains the link."
   },
   {
    "h": "Spotting bad arguments",
    "body": "Common traps (fallacies): attacking the person instead of their point (ad hominem), claiming something's true because many believe it (bandwagon), or presenting only two options when more exist (false dilemma). Name the move and it loses its power."
   },
   {
    "h": "Check the source and your bias",
    "body": "Consider who's telling you something and what they gain. Also watch your own confirmation bias — the pull to believe things that fit what you already think. Seek out the strongest version of the other side."
   },
   {
    "h": "Suspend judgment when unsure",
    "body": "It's okay to say 'I don't know yet.' Jumping to a conclusion feels good but leads to mistakes. Gather enough evidence, consider alternatives, then decide — and stay open to changing your mind with new facts."
   }
  ],
  "flash": [
   [
    "Critical thinking",
    "Carefully judging information instead of accepting it."
   ],
   [
    "Evidence",
    "Facts or data that support a claim."
   ],
   [
    "Correlation",
    "Two things occurring together (not necessarily causing each other)."
   ],
   [
    "Causation",
    "One thing actually causing another."
   ],
   [
    "Logical fallacy",
    "A flaw in reasoning that weakens an argument."
   ],
   [
    "Ad hominem",
    "Attacking the person instead of their argument."
   ],
   [
    "Confirmation bias",
    "Favoring information that fits what you already believe."
   ],
   [
    "Source credibility",
    "How trustworthy the origin of information is."
   ]
  ],
  "quiz": [
   {
    "q": "'Correlation is not causation' means:",
    "options": [
     "Things linked may not cause each other",
     "All links are false",
     "Causes don't exist",
     "Data is useless"
    ],
    "a": 0,
    "why": "A link between two things doesn't prove one caused the other."
   },
   {
    "q": "Attacking the person instead of their argument is:",
    "options": [
     "Ad hominem",
     "Bandwagon",
     "A strong point",
     "Evidence"
    ],
    "a": 0,
    "why": "Ad hominem dodges the argument by targeting the person."
   },
   {
    "q": "Confirmation bias is the tendency to:",
    "options": [
     "Favor info that fits your beliefs",
     "Reject all new info",
     "Be perfectly objective",
     "Forget facts"
    ],
    "a": 0,
    "why": "We lean toward evidence that confirms what we already think."
   },
   {
    "q": "A surprising claim should be met with:",
    "options": [
     "A request for strong evidence",
     "Instant belief",
     "Instant rejection",
     "Silence"
    ],
    "a": 0,
    "why": "Extraordinary claims need solid evidence before you accept them."
   },
   {
    "q": "Presenting only two options when more exist is a:",
    "options": [
     "False dilemma",
     "Correlation",
     "Fact",
     "Hypothesis"
    ],
    "a": 0,
    "why": "A false dilemma hides the other possibilities."
   },
   {
    "q": "When you lack enough evidence, the best move is to:",
    "options": [
     "Suspend judgment",
     "Pick a side anyway",
     "Trust the loudest voice",
     "Guess randomly"
    ],
    "a": 0,
    "why": "It's fine to withhold judgment until you know more."
   }
  ]
 },
 "fitness-strength-training": {
  "title": "Strength Training",
  "subject": "Fitness & Wellness",
  "level": "All levels",
  "disclaimer": "General fitness information, not medical advice. Check with a doctor before starting a new exercise program.",
  "intro": "Strength training makes you stronger, protects your joints and bones, and helps with everything from daily tasks to long-term health. You don't need a gym full of machines — a few basic movements done consistently do the job.",
  "cards": [
   {
    "h": "Why strength matters",
    "body": "Lifting (or using your body weight) builds muscle, strengthens bones, boosts metabolism, and keeps you capable as you age. It helps nearly everyone, whatever the goal — fat loss, health, or athletics."
   },
   {
    "h": "The basic movement patterns",
    "body": "Most of strength training is a handful of patterns: push (push-ups, overhead press), pull (rows, pull-ups), squat, hinge (deadlift), and carry. Train these and you cover the whole body."
   },
   {
    "h": "Progressive overload",
    "body": "Muscles grow when you gradually ask more of them — a little more weight, another rep, or better form over time. Doing the exact same workout forever stops producing results. Push a bit past comfortable, safely."
   },
   {
    "h": "Form before weight",
    "body": "Good form prevents injury and works the right muscles. Learn a movement light, keep your core braced, control the lowering part, and never sacrifice form to lift heavier. Ego lifting is how people get hurt."
   },
   {
    "h": "Recovery is where you grow",
    "body": "Muscles rebuild stronger during rest, not during the workout. Train a muscle group 2–3 times a week, sleep well, eat enough protein, and give sore muscles a day or two. More isn't always better."
   }
  ],
  "flash": [
   [
    "Strength training",
    "Exercise that builds muscle and strength against resistance."
   ],
   [
    "Rep",
    "One complete repetition of an exercise."
   ],
   [
    "Set",
    "A group of consecutive reps."
   ],
   [
    "Progressive overload",
    "Gradually increasing demand to keep gaining strength."
   ],
   [
    "Compound exercise",
    "A move using multiple joints/muscles (squat, push-up)."
   ],
   [
    "Form",
    "Correct technique that targets muscles and prevents injury."
   ],
   [
    "Recovery",
    "Rest that lets muscles rebuild stronger."
   ],
   [
    "Bodyweight training",
    "Strength work using your own body as resistance."
   ]
  ],
  "quiz": [
   {
    "q": "Muscles grow stronger mainly during:",
    "options": [
     "Rest and recovery",
     "The workout itself",
     "Cardio only",
     "Stretching only"
    ],
    "a": 0,
    "why": "Muscles rebuild during rest, so recovery matters as much as training."
   },
   {
    "q": "'Progressive overload' means:",
    "options": [
     "Gradually doing a bit more over time",
     "Max weight every day",
     "Never changing routine",
     "Only using machines"
    ],
    "a": 0,
    "why": "Steadily increasing demand keeps you getting stronger."
   },
   {
    "q": "When learning a new lift, prioritize:",
    "options": [
     "Good form",
     "Max weight",
     "Speed",
     "Looking strong"
    ],
    "a": 0,
    "why": "Form first prevents injury and trains the right muscles."
   },
   {
    "q": "Which is a compound (multi-joint) exercise?",
    "options": [
     "Squat",
     "Bicep curl only",
     "Wrist curl",
     "Calf raise only"
    ],
    "a": 0,
    "why": "A squat uses many muscles/joints; isolation moves use one."
   },
   {
    "q": "A reasonable frequency to train a muscle group is:",
    "options": [
     "2–3 times a week",
     "Once a month",
     "Every hour",
     "Never twice"
    ],
    "a": 0,
    "why": "2–3 times weekly with recovery works for most people."
   },
   {
    "q": "You can build real strength at home with:",
    "options": [
     "Bodyweight exercises",
     "Nothing without machines",
     "Only running",
     "Only stretching"
    ],
    "a": 0,
    "why": "Push-ups, squats and the like build strength with no equipment."
   }
  ]
 },
 "business-starting-a-business": {
  "title": "Starting a Business",
  "subject": "Business & Entrepreneurship",
  "level": "Grades 9 - adult",
  "intro": "Starting a business is really about solving a problem people will pay you to solve. You don't need a big idea or a lot of money to start — you need a real customer, a simple offer, and the willingness to learn as you go.",
  "cards": [
   {
    "h": "Start with a problem, not an idea",
    "body": "Good businesses solve a real problem for a specific group of people. Before building anything, get clear on who your customer is and what pain you're removing. 'A thing I think is cool' fails; 'a thing people already pay to fix' works."
   },
   {
    "h": "Validate before you invest",
    "body": "Talk to potential customers and try to make a few sales before spending big. If people won't pay for a simple version, a fancy version won't save it. Real money from real customers is the only proof that counts."
   },
   {
    "h": "Know your numbers",
    "body": "You profit when revenue (money in) beats costs (money out). Know your price, your cost per sale, and your fixed monthly costs. Many businesses fail not from no sales but from not watching the money."
   },
   {
    "h": "Keep it legal and separate",
    "body": "Pick a simple structure (many start as a sole proprietor or LLC), get any required licenses, and keep business money separate from personal from day one. It makes taxes and tracking vastly easier."
   },
   {
    "h": "Start small and improve",
    "body": "You don't need everything perfect to begin. Launch a simple version, get real feedback, and improve. Most successful businesses look very different from their first version — the key is to start and adapt."
   }
  ],
  "flash": [
   [
    "Customer",
    "The specific person who has the problem you solve."
   ],
   [
    "Validation",
    "Proving people will actually pay before investing big."
   ],
   [
    "Revenue",
    "Total money coming in from sales."
   ],
   [
    "Profit",
    "What's left after costs are subtracted from revenue."
   ],
   [
    "Fixed costs",
    "Expenses that stay the same regardless of sales."
   ],
   [
    "LLC",
    "Limited Liability Company — a common simple business structure."
   ],
   [
    "Margin",
    "The profit left on each sale after its costs."
   ],
   [
    "MVP",
    "Minimum viable product — the simplest version you can launch."
   ]
  ],
  "quiz": [
   {
    "q": "A business should start with:",
    "options": [
     "A real problem to solve",
     "A cool logo",
     "A big loan",
     "A fancy office"
    ],
    "a": 0,
    "why": "Solving a real problem for real people is the foundation."
   },
   {
    "q": "The best proof that an idea works is:",
    "options": [
     "Real customers paying",
     "Friends liking it",
     "A nice website",
     "A plan alone"
    ],
    "a": 0,
    "why": "Actual sales validate demand; opinions don't."
   },
   {
    "q": "Profit is:",
    "options": [
     "Revenue minus costs",
     "All money coming in",
     "The price of one item",
     "Your fixed costs"
    ],
    "a": 0,
    "why": "Profit is what's left after you subtract costs from revenue."
   },
   {
    "q": "You should keep business and personal money:",
    "options": [
     "Separate",
     "In one account",
     "Only in cash",
     "Untracked"
    ],
    "a": 0,
    "why": "Separating them simplifies taxes and tracking from day one."
   },
   {
    "q": "An MVP is:",
    "options": [
     "The simplest version you can launch",
     "A finished perfect product",
     "A marketing plan",
     "A tax form"
    ],
    "a": 0,
    "why": "A minimum viable product lets you test with real users fast."
   },
   {
    "q": "Many small businesses fail because they:",
    "options": [
     "Don't watch their numbers",
     "Have too many sales",
     "Start too small",
     "Talk to customers too much"
    ],
    "a": 0,
    "why": "Losing track of money sinks businesses even with sales."
   }
  ]
 },
 "repair-basic-tools": {
  "title": "Basic Tools",
  "subject": "Home & Auto Repair",
  "level": "All levels",
  "intro": "A small set of tools and the confidence to use them will save you money for the rest of your life. Most common home and car fixes need only basic hand tools and a willingness to try.",
  "cards": [
   {
    "h": "The starter toolkit",
    "body": "A handful covers most jobs: a claw hammer, screwdrivers (Phillips and flathead), an adjustable wrench, pliers (regular and needle-nose), a tape measure, a utility knife, a level, and a cordless drill. Add specialized tools as needs come up."
   },
   {
    "h": "Righty-tighty, lefty-loosey",
    "body": "Almost all screws, bolts, and lids tighten clockwise and loosen counterclockwise. Facing the fastener, turn right to tighten, left to loosen. This simple rule covers the vast majority of fasteners you'll meet."
   },
   {
    "h": "Use the right size and type",
    "body": "A screwdriver or wrench that doesn't fit snugly will strip the screw or round the bolt, turning an easy job into a hard one. Match Phillips to Phillips, use the correct socket size, and seat the tool fully before turning."
   },
   {
    "h": "Measure twice, cut once",
    "body": "Mistakes are cheaper to prevent than to fix. Measure carefully (and again) before cutting or drilling, mark your spot, and check for wires or pipes behind a wall before you make a hole."
   },
   {
    "h": "Safety basics",
    "body": "Turn off the power at the breaker before electrical work, and shut off the water before plumbing work. Wear eye protection when cutting or hammering, and unplug power tools before changing bits. When a job feels unsafe or over your head, call a pro."
   }
  ],
  "flash": [
   [
    "Phillips screwdriver",
    "A screwdriver with a cross/plus-shaped tip."
   ],
   [
    "Flathead screwdriver",
    "A screwdriver with a single flat blade tip."
   ],
   [
    "Adjustable wrench",
    "A wrench whose jaw width you can change to fit bolts."
   ],
   [
    "Righty-tighty",
    "Turn clockwise to tighten, counterclockwise to loosen."
   ],
   [
    "Stripped screw",
    "A screw head damaged so a driver can't grip it."
   ],
   [
    "Level",
    "A tool that shows if something is perfectly horizontal/vertical."
   ],
   [
    "Stud finder",
    "A tool that locates framing behind a wall."
   ],
   [
    "Breaker",
    "The switch that cuts power to a circuit for safe electrical work."
   ]
  ],
  "quiz": [
   {
    "q": "To loosen most screws and bolts you turn them:",
    "options": [
     "Counterclockwise (left)",
     "Clockwise (right)",
     "Straight out",
     "It doesn't matter"
    ],
    "a": 0,
    "why": "Lefty-loosey: counterclockwise loosens most fasteners."
   },
   {
    "q": "Using a screwdriver that doesn't fit well risks:",
    "options": [
     "Stripping the screw",
     "Nothing",
     "Faster work",
     "Tightening it more"
    ],
    "a": 0,
    "why": "A poor fit rounds out the head, making it hard to turn."
   },
   {
    "q": "Before electrical work you should:",
    "options": [
     "Turn off power at the breaker",
     "Just be careful",
     "Wear gloves only",
     "Work faster"
    ],
    "a": 0,
    "why": "Cutting power at the breaker prevents shock."
   },
   {
    "q": "'Measure twice, cut once' means:",
    "options": [
     "Check measurements before cutting",
     "Cut quickly",
     "Measure after cutting",
     "Guess the size"
    ],
    "a": 0,
    "why": "Verifying first avoids wasted material and mistakes."
   },
   {
    "q": "Which belongs in a basic toolkit?",
    "options": [
     "Adjustable wrench",
     "Welding torch",
     "Table saw",
     "Backhoe"
    ],
    "a": 0,
    "why": "Basic hand tools like an adjustable wrench cover most small jobs."
   },
   {
    "q": "Before plumbing work you should:",
    "options": [
     "Shut off the water",
     "Turn up the heat",
     "Open all faucets first",
     "Nothing"
    ],
    "a": 0,
    "why": "Shutting off the water prevents floods while you work."
   }
  ]
 },
 "law-know-your-rights": {
  "title": "Know Your Rights",
  "subject": "Law & Your Rights",
  "level": "Grades 9 - adult",
  "disclaimer": "General legal information, NOT legal advice. For a real legal issue, consult a licensed attorney or legal aid. Specifics vary by state.",
  "intro": "Knowing your basic rights helps you stay calm and protected in stressful situations. These are general principles in the U.S.; a lawyer is the right call for a real legal problem.",
  "cards": [
   {
    "h": "The right to remain silent",
    "body": "If questioned by police, you have the right not to answer questions beyond identifying yourself (where required). You can calmly say 'I am going to remain silent, and I want a lawyer.' Anything you say can be used against you — staying silent is often wise."
   },
   {
    "h": "Searches and consent",
    "body": "Generally, police need a warrant, your consent, or a specific legal reason to search you, your home, or your car. You can clearly and politely say 'I do not consent to a search.' Refusing doesn't make you guilty — it protects your rights."
   },
   {
    "h": "The right to a lawyer",
    "body": "If you're arrested, you have the right to an attorney, and one is provided if you can't afford it. Ask for a lawyer and then stop talking. Don't try to 'explain your way out' — that's what the lawyer is for."
   },
   {
    "h": "Stay calm, don't resist",
    "body": "Even if you believe your rights are being violated, the moment to fight it is later, in court — not on the street. Keep your hands visible, stay polite, don't physically resist, and remember details for afterward."
   },
   {
    "h": "Everyday rights",
    "body": "You also have rights as a tenant, a worker, and a consumer — against unsafe housing, unpaid wages, and fraud. Many are enforced free through legal aid, labor boards, or small claims court. Knowing a right exists is the first step to using it."
   }
  ],
  "flash": [
   [
    "Right to remain silent",
    "You don't have to answer questions that could incriminate you."
   ],
   [
    "Miranda rights",
    "The rights (silence, attorney) police must read on arrest."
   ],
   [
    "Consent to search",
    "You can refuse a search without a warrant or legal cause."
   ],
   [
    "Warrant",
    "A judge's authorization for a search or arrest."
   ],
   [
    "Right to an attorney",
    "You're entitled to a lawyer; one is provided if you can't afford it."
   ],
   [
    "Legal aid",
    "Free or low-cost legal help for those who qualify."
   ],
   [
    "Due process",
    "The right to fair legal procedures."
   ],
   [
    "Small claims court",
    "A simple court for disputes over small amounts of money."
   ]
  ],
  "quiz": [
   {
    "q": "If police question you, you have the right to:",
    "options": [
     "Remain silent",
     "Lie freely",
     "Leave any arrest",
     "Ignore all ID requests always"
    ],
    "a": 0,
    "why": "You can decline to answer and ask for a lawyer."
   },
   {
    "q": "If asked to search your car without a warrant, you can:",
    "options": [
     "Clearly decline consent",
     "Never say no",
     "Only consent",
     "Must always allow it"
    ],
    "a": 0,
    "why": "You may politely refuse a consent search; it's your right."
   },
   {
    "q": "If you can't afford a lawyer after arrest:",
    "options": [
     "One is provided for you",
     "You get none",
     "You must self-defend",
     "You wait a year"
    ],
    "a": 0,
    "why": "The right to an attorney includes a provided one if you can't afford it."
   },
   {
    "q": "If you think your rights are violated during a stop, you should:",
    "options": [
     "Stay calm and contest it later in court",
     "Physically resist",
     "Run",
     "Argue aggressively"
    ],
    "a": 0,
    "why": "Resisting makes it worse; the place to fight it is in court."
   },
   {
    "q": "A simple court for small money disputes is:",
    "options": [
     "Small claims court",
     "Supreme Court",
     "Traffic school",
     "The DMV"
    ],
    "a": 0,
    "why": "Small claims court handles minor disputes simply and cheaply."
   },
   {
    "q": "This lesson is:",
    "options": [
     "General info, not legal advice",
     "A substitute for a lawyer",
     "Identical in every state",
     "A court ruling"
    ],
    "a": 0,
    "why": "Laws vary by state; consult an attorney for a real issue."
   }
  ]
 },
 "writing-creative-writing": {
  "title": "Creative Writing",
  "subject": "Writing & Journalism",
  "level": "All levels",
  "intro": "Creative writing is making something up and telling it well — stories, characters, worlds. The craft behind it can be learned: strong characters, real conflict, scenes that show rather than tell.",
  "cards": [
   {
    "h": "Story = character + want + obstacle",
    "body": "At its core, a story is a character who wants something and faces obstacles getting it. No want, no story. The want can be big (survive) or small (ask someone out); the obstacles create the tension that keeps readers turning pages."
   },
   {
    "h": "Show, don't tell",
    "body": "Instead of telling the reader an emotion ('she was nervous'), show it through action and detail ('she checked the door three times and couldn't finish her coffee'). Showing pulls readers into the scene; telling keeps them at arm's length."
   },
   {
    "h": "Scenes and conflict",
    "body": "Build your story in scenes — a character doing something in a place, in real time. Every scene should have a bit of conflict or change, or it's just filler. If nothing shifts in a scene, cut it or combine it."
   },
   {
    "h": "Dialogue that works",
    "body": "Good dialogue sounds natural but is tighter than real speech — cut the 'ums' and small talk. It should reveal character and move the story, not just relay information. Read it aloud; if it sounds stiff, loosen it."
   },
   {
    "h": "Write badly first, then revise",
    "body": "First drafts are supposed to be rough — the goal is to get the story down. The real writing happens in revision: cutting the dull parts, sharpening scenes, fixing what's confusing. Give yourself permission to write a messy first draft."
   }
  ],
  "flash": [
   [
    "Protagonist",
    "The main character whose want drives the story."
   ],
   [
    "Conflict",
    "The obstacle between a character and what they want."
   ],
   [
    "Show, don't tell",
    "Convey through action and detail, not flat statements."
   ],
   [
    "Scene",
    "A unit of story: a character acting in a place, in real time."
   ],
   [
    "Dialogue",
    "Characters' spoken words — tighter than real speech."
   ],
   [
    "Plot",
    "The sequence of events, driven by cause and effect."
   ],
   [
    "Theme",
    "The underlying idea a story explores."
   ],
   [
    "Revision",
    "Reworking a draft — where most real writing happens."
   ]
  ],
  "quiz": [
   {
    "q": "At its core, a story needs a character who:",
    "options": [
     "Wants something and faces obstacles",
     "Is perfectly happy",
     "Does nothing",
     "Only narrates"
    ],
    "a": 0,
    "why": "Want + obstacle creates the conflict that makes a story."
   },
   {
    "q": "'She checked the door three times' instead of 'she was nervous' is:",
    "options": [
     "Showing, not telling",
     "Telling",
     "A theme",
     "Dialogue"
    ],
    "a": 0,
    "why": "Concrete action shows the emotion rather than stating it."
   },
   {
    "q": "Every scene should contain:",
    "options": [
     "Some conflict or change",
     "Only description",
     "No characters",
     "A summary"
    ],
    "a": 0,
    "why": "A scene without change or tension is filler."
   },
   {
    "q": "Good dialogue is:",
    "options": [
     "Tighter than real speech",
     "Exactly like real speech",
     "Only small talk",
     "All description"
    ],
    "a": 0,
    "why": "Trim the filler; dialogue should reveal character and move the story."
   },
   {
    "q": "A first draft should be:",
    "options": [
     "Rough — just get it down",
     "Perfect",
     "Never revised",
     "Only an outline"
    ],
    "a": 0,
    "why": "Get the story down first; the craft comes in revision."
   },
   {
    "q": "Most real writing happens during:",
    "options": [
     "Revision",
     "The first sentence",
     "Brainstorming only",
     "Reading"
    ],
    "a": 0,
    "why": "Revising — cutting and sharpening — is where drafts become good."
   }
  ]
 },
 "gardening-garden-basics": {
  "title": "Garden Basics",
  "subject": "Gardening & Homesteading",
  "level": "All levels",
  "intro": "Growing some of your own food is satisfying, cheap, and easier than it looks. With sun, soil, water and a little patience, almost anyone can grow vegetables — even in pots on a balcony.",
  "cards": [
   {
    "h": "The four things plants need",
    "body": "Sunlight, water, soil (nutrients), and air. Most vegetables want 6+ hours of direct sun a day, consistent moisture, and loose, rich soil. Get those right and plants mostly take care of themselves."
   },
   {
    "h": "Start with easy crops",
    "body": "Beginners do best with forgiving plants: lettuce, radishes, beans, zucchini, tomatoes, and herbs like basil and mint. They grow fast and reward you quickly, which keeps you going. Skip the fussy stuff at first."
   },
   {
    "h": "Soil is everything",
    "body": "Plants are only as healthy as their soil. Loose soil rich in organic matter (compost) holds water and feeds roots. If your ground soil is poor, raised beds or pots with bought potting mix are a great shortcut."
   },
   {
    "h": "Water deeply, not often",
    "body": "Frequent shallow watering grows weak, shallow roots. Water deeply so moisture reaches down, then let the top inch dry before watering again. Morning is best; wet leaves overnight invite disease."
   },
   {
    "h": "Spacing and timing",
    "body": "Give plants the spacing on the seed packet — crowded plants compete and get sick. Plant warm crops (tomatoes, peppers) after your area's last frost, and cool crops (lettuce, peas) in early spring or fall."
   }
  ],
  "flash": [
   [
    "Full sun",
    "6+ hours of direct sunlight a day."
   ],
   [
    "Compost",
    "Decomposed organic matter that enriches soil."
   ],
   [
    "Raised bed",
    "A contained garden bed filled with good soil."
   ],
   [
    "Potting mix",
    "Bagged soil blend made for containers."
   ],
   [
    "Last frost date",
    "The point after which it's safe to plant warm crops."
   ],
   [
    "Deep watering",
    "Watering thoroughly so roots grow down, not often and shallow."
   ],
   [
    "Cool crop",
    "A plant that prefers cooler weather (lettuce, peas)."
   ],
   [
    "Organic matter",
    "Decayed plant material that feeds and loosens soil."
   ]
  ],
  "quiz": [
   {
    "q": "Most vegetables need how much direct sun daily?",
    "options": [
     "6+ hours",
     "1 hour",
     "None",
     "24 hours"
    ],
    "a": 0,
    "why": "Six or more hours of direct sun suits most vegetables."
   },
   {
    "q": "A good crop for beginners is:",
    "options": [
     "Lettuce",
     "A rare orchid",
     "A fruit tree from seed",
     "Saffron"
    ],
    "a": 0,
    "why": "Lettuce (and beans, zucchini, herbs) grow fast and forgive mistakes."
   },
   {
    "q": "Healthy plants start with:",
    "options": [
     "Good soil",
     "Expensive seeds",
     "Daily fertilizer",
     "Plastic flowers"
    ],
    "a": 0,
    "why": "Loose, compost-rich soil is the foundation of healthy plants."
   },
   {
    "q": "The best watering approach is:",
    "options": [
     "Deeply, then let the top dry",
     "A little every hour",
     "Soaking leaves at night",
     "Never"
    ],
    "a": 0,
    "why": "Deep, less-frequent watering grows strong, deep roots."
   },
   {
    "q": "No garden space? A good option is:",
    "options": [
     "Pots or raised beds",
     "Give up",
     "Only indoor cactus",
     "Wait for land"
    ],
    "a": 0,
    "why": "Containers and raised beds let you grow almost anywhere with sun."
   },
   {
    "q": "Warm crops like tomatoes should be planted:",
    "options": [
     "After the last frost",
     "In midwinter",
     "Before any thaw",
     "Only indoors forever"
    ],
    "a": 0,
    "why": "Plant warm crops once frost danger has passed."
   }
  ]
 },
 "math-pre-algebra": {
  "title": "Pre-Algebra",
  "subject": "Mathematics",
  "level": "Grades 6-8",
  "intro": "Pre-algebra is the bridge between arithmetic and algebra. It takes the numbers you already know and adds the tools you'll need next: negative numbers, ratios, and your first use of variables.",
  "cards": [
   {
    "h": "Integers and negative numbers",
    "body": "Integers are the whole numbers, their negatives, and zero (…, −2, −1, 0, 1, 2, …). On a number line, negatives sit to the left of zero. Adding a negative moves left; subtracting a negative moves right: 5 − (−3) = 5 + 3 = 8."
   },
   {
    "h": "Rules of signs",
    "body": "Multiplying or dividing two numbers with the SAME sign gives a positive; DIFFERENT signs give a negative. So (−4)(−2) = 8, but (−4)(2) = −8. The same rule works for division."
   },
   {
    "h": "Fractions, decimals, percents",
    "body": "These are three ways to write the same value: 1/2 = 0.5 = 50%. To turn a fraction into a decimal, divide top by bottom; into a percent, multiply the decimal by 100. Switching between the three fluently is a core pre-algebra skill."
   },
   {
    "h": "Ratios and proportions",
    "body": "A ratio compares two quantities (3 cups flour to 2 cups sugar, or 3:2). A proportion sets two ratios equal and lets you solve for an unknown by cross-multiplying: if 3/2 = x/6, then 2x = 18, so x = 9. It's how you scale recipes, maps, and rates."
   },
   {
    "h": "From numbers to variables",
    "body": "Pre-algebra introduces letters for unknowns and 'expressions' like 2n + 5. You evaluate an expression by substituting a value (if n = 4, 2n + 5 = 13), and solve simple equations by undoing operations — the gateway to algebra."
   }
  ],
  "flash": [
   [
    "Integer",
    "A whole number, its negative, or zero (…, −1, 0, 1, …)."
   ],
   [
    "Absolute value",
    "A number's distance from zero, always positive (|−5| = 5)."
   ],
   [
    "Ratio",
    "A comparison of two quantities (3:2)."
   ],
   [
    "Proportion",
    "An equation saying two ratios are equal."
   ],
   [
    "Cross-multiply",
    "Multiply across an equal pair of fractions to solve."
   ],
   [
    "Reciprocal",
    "A fraction flipped upside down (reciprocal of 3/4 is 4/3)."
   ],
   [
    "Sign rule",
    "Same signs multiply to positive; different signs to negative."
   ],
   [
    "Expression",
    "Numbers and variables combined with operations, no equals sign."
   ]
  ],
  "quiz": [
   {
    "q": "What is −4 × −3?",
    "options": [
     "12",
     "−12",
     "−7",
     "7"
    ],
    "a": 0,
    "why": "Two negatives multiply to a positive: 4×3 = 12."
   },
   {
    "q": "5 − (−2) =",
    "options": [
     "7",
     "3",
     "−7",
     "−3"
    ],
    "a": 0,
    "why": "Subtracting a negative is adding: 5 + 2 = 7."
   },
   {
    "q": "Write 3/4 as a percent.",
    "options": [
     "75%",
     "34%",
     "43%",
     "7.5%"
    ],
    "a": 0,
    "why": "3 ÷ 4 = 0.75 = 75%."
   },
   {
    "q": "If 2/3 = x/9, then x =",
    "options": [
     "6",
     "3",
     "9",
     "4"
    ],
    "a": 0,
    "why": "Cross-multiply: 3x = 18, so x = 6."
   },
   {
    "q": "The absolute value |−8| is:",
    "options": [
     "8",
     "−8",
     "0",
     "16"
    ],
    "a": 0,
    "why": "Absolute value is distance from zero, always non-negative."
   },
   {
    "q": "What is −10 ÷ 2?",
    "options": [
     "−5",
     "5",
     "−20",
     "−8"
    ],
    "a": 0,
    "why": "Different signs give a negative: 10÷2 = 5, so −5."
   }
  ]
 },
 "math-geometry": {
  "title": "Geometry",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "intro": "Geometry is the math of shapes, space, and measurement. It's where math gets visual — and where you learn to reason step by step from what you know to what you want to find.",
  "cards": [
   {
    "h": "Points, lines, and angles",
    "body": "A point marks a location; a line runs forever both ways; a ray starts at a point and goes one way; a segment has two ends. Two rays from a point form an angle, measured in degrees. A right angle is 90°, and a straight line is 180°."
   },
   {
    "h": "Angles that go together",
    "body": "Complementary angles add to 90°; supplementary angles add to 180°. When two lines cross, the opposite (vertical) angles are equal. These rules let you find unknown angles from ones you already know."
   },
   {
    "h": "Triangles and the angle sum",
    "body": "The three angles of any triangle always add to 180°. Triangles are named by sides (equilateral = all equal, isosceles = two equal, scalene = none) or by angles (a right triangle has one 90° angle). Know two angles and you know the third."
   },
   {
    "h": "Area and perimeter",
    "body": "Perimeter is the distance around a shape; area is the space inside. Rectangle area = length × width; triangle area = ½ × base × height; circle area = πr². A circle's perimeter (circumference) = 2πr. Keep your units consistent."
   },
   {
    "h": "The Pythagorean theorem",
    "body": "In a right triangle, a² + b² = c², where c is the longest side (the hypotenuse, opposite the right angle). A 3-4-5 triangle works: 3² + 4² = 9 + 16 = 25 = 5². It lets you find a missing side length."
   }
  ],
  "flash": [
   [
    "Right angle",
    "A 90° angle (a square corner)."
   ],
   [
    "Complementary angles",
    "Two angles that add to 90°."
   ],
   [
    "Supplementary angles",
    "Two angles that add to 180°."
   ],
   [
    "Triangle angle sum",
    "The three angles of a triangle add to 180°."
   ],
   [
    "Hypotenuse",
    "The longest side of a right triangle, opposite the right angle."
   ],
   [
    "Pythagorean theorem",
    "a² + b² = c² for a right triangle."
   ],
   [
    "Perimeter",
    "The distance around a shape."
   ],
   [
    "Area of a circle",
    "πr² (pi times radius squared)."
   ]
  ],
  "quiz": [
   {
    "q": "The angles of any triangle add up to:",
    "options": [
     "180°",
     "90°",
     "360°",
     "100°"
    ],
    "a": 0,
    "why": "Every triangle's three angles sum to 180°."
   },
   {
    "q": "Two angles that add to 90° are:",
    "options": [
     "Complementary",
     "Supplementary",
     "Vertical",
     "Right"
    ],
    "a": 0,
    "why": "Complementary angles total 90°; supplementary total 180°."
   },
   {
    "q": "In a right triangle with legs 3 and 4, the hypotenuse is:",
    "options": [
     "5",
     "7",
     "6",
     "12"
    ],
    "a": 0,
    "why": "3² + 4² = 25, and √25 = 5."
   },
   {
    "q": "The area of a rectangle is:",
    "options": [
     "length × width",
     "2(l + w)",
     "½ base × height",
     "πr²"
    ],
    "a": 0,
    "why": "Area = length × width; 2(l+w) is its perimeter."
   },
   {
    "q": "The hypotenuse of a right triangle is:",
    "options": [
     "The longest side, opposite the right angle",
     "Any short side",
     "The right angle itself",
     "Always 90"
    ],
    "a": 0,
    "why": "It's the side opposite the 90° angle and the longest."
   },
   {
    "q": "A triangle with all three sides equal is:",
    "options": [
     "Equilateral",
     "Scalene",
     "Right",
     "Isosceles"
    ],
    "a": 0,
    "why": "Equilateral = all sides (and angles) equal."
   }
  ]
 },
 "math-trigonometry": {
  "title": "Trigonometry",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "intro": "Trigonometry studies the relationship between a triangle's angles and sides. With just three ratios — sine, cosine, and tangent — you can find distances and angles you can't measure directly, which is why it powers navigation, engineering, and physics.",
  "cards": [
   {
    "h": "The three ratios: SOH CAH TOA",
    "body": "In a right triangle, for a chosen angle: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. The mnemonic SOH-CAH-TOA keeps them straight. 'Opposite' and 'adjacent' are relative to the angle you pick."
   },
   {
    "h": "Finding a missing side",
    "body": "If you know an angle and one side, you can find another. To get the opposite side from the hypotenuse and the angle, use sine: opposite = hypotenuse × sin(angle). Pick the ratio that links the side you have to the side you want."
   },
   {
    "h": "Finding a missing angle",
    "body": "If you know two sides, find the angle with the inverse functions (sin⁻¹, cos⁻¹, tan⁻¹). When the opposite and adjacent sides are known, angle = tan⁻¹(opposite/adjacent)."
   },
   {
    "h": "Degrees and radians",
    "body": "Angles can be measured in degrees (a full circle = 360°) or radians (a full circle = 2π). Radians are the 'natural' unit in higher math. Half a circle = 180° = π radians. Convert by multiplying by π/180 or 180/π."
   },
   {
    "h": "Beyond the triangle: the unit circle",
    "body": "Sine and cosine also describe a point moving around a circle of radius 1 — cosine is the x-coordinate, sine the y-coordinate. That's why trig functions repeat (they're periodic) and why they model waves, sound, and anything that cycles."
   }
  ],
  "flash": [
   [
    "Sine (sin)",
    "Opposite over hypotenuse (SOH)."
   ],
   [
    "Cosine (cos)",
    "Adjacent over hypotenuse (CAH)."
   ],
   [
    "Tangent (tan)",
    "Opposite over adjacent (TOA)."
   ],
   [
    "SOH CAH TOA",
    "Mnemonic for the three trig ratios."
   ],
   [
    "Hypotenuse",
    "The longest side of a right triangle (opposite the right angle)."
   ],
   [
    "Radian",
    "An angle unit; a full circle is 2π radians."
   ],
   [
    "Inverse trig",
    "sin⁻¹, cos⁻¹, tan⁻¹ — find an angle from a ratio."
   ],
   [
    "Unit circle",
    "A circle of radius 1 used to define sine and cosine."
   ]
  ],
  "quiz": [
   {
    "q": "SOH CAH TOA: sine equals",
    "options": [
     "Opposite / Hypotenuse",
     "Adjacent / Hypotenuse",
     "Opposite / Adjacent",
     "Hypotenuse / Opposite"
    ],
    "a": 0,
    "why": "SOH: Sine = Opposite / Hypotenuse."
   },
   {
    "q": "Tangent of an angle equals:",
    "options": [
     "Opposite / Adjacent",
     "Opposite / Hypotenuse",
     "Adjacent / Opposite",
     "Adjacent / Hypotenuse"
    ],
    "a": 0,
    "why": "TOA: Tangent = Opposite / Adjacent."
   },
   {
    "q": "A full circle in radians is:",
    "options": [
     "2π",
     "π",
     "360",
     "180"
    ],
    "a": 0,
    "why": "A full circle is 360° = 2π radians."
   },
   {
    "q": "To find an angle from two known sides you use:",
    "options": [
     "Inverse trig functions",
     "Only sine",
     "The Pythagorean theorem only",
     "Addition"
    ],
    "a": 0,
    "why": "sin⁻¹, cos⁻¹, or tan⁻¹ return the angle from a ratio."
   },
   {
    "q": "180° equals how many radians?",
    "options": [
     "π",
     "2π",
     "90",
     "π/2"
    ],
    "a": 0,
    "why": "Half a circle is 180° = π radians."
   },
   {
    "q": "On the unit circle, the y-coordinate of a point is:",
    "options": [
     "sine of the angle",
     "cosine of the angle",
     "the radius",
     "the tangent"
    ],
    "a": 0,
    "why": "Sine gives the y-coordinate; cosine gives x."
   }
  ]
 },
 "math-pre-calculus": {
  "title": "Pre-Calculus",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "intro": "Pre-calculus pulls algebra and trig together and sharpens the big idea you'll need for calculus: the function. You'll get comfortable with how functions behave, how they graph, and the kinds that model growth, decay, and change.",
  "cards": [
   {
    "h": "What a function is",
    "body": "A function is a rule that takes an input and gives exactly one output. We write f(x) ('f of x'), where x is the input. f(x) = 2x + 1 means 'double the input and add one,' so f(3) = 7. Each input has one and only one output."
   },
   {
    "h": "Reading a graph",
    "body": "A function's graph pairs every input (x, horizontal) with its output (y = f(x), vertical). The x-intercepts are where it crosses the x-axis (output 0); the y-intercept is where x = 0. The slope shows how fast the output changes."
   },
   {
    "h": "Families of functions",
    "body": "Linear functions (f(x) = mx + b) graph as straight lines. Quadratics (f(x) = ax² + bx + c) graph as parabolas (U-shapes). Each family has a signature shape, so recognizing the form lets you predict the behavior."
   },
   {
    "h": "Exponential and logarithmic functions",
    "body": "Exponential functions (f(x) = a·bˣ) model fast growth or decay — populations, interest, radioactivity. Logarithms are their inverse: they answer 'what power gives this number?' log₂(8) = 3 because 2³ = 8. They turn multiplication into addition, which is why they're everywhere in science."
   },
   {
    "h": "The idea of a limit",
    "body": "A limit asks: what value does a function approach as the input gets closer and closer to some number? It's the central idea calculus is built on — it lets us talk precisely about instantaneous change and behavior right at a point, even where the function isn't defined."
   }
  ],
  "flash": [
   [
    "Function",
    "A rule giving exactly one output for each input."
   ],
   [
    "f(x)",
    "Function notation: the output of function f at input x."
   ],
   [
    "Domain",
    "All the allowed inputs of a function."
   ],
   [
    "Range",
    "All the possible outputs of a function."
   ],
   [
    "Linear function",
    "f(x) = mx + b; graphs as a straight line."
   ],
   [
    "Quadratic function",
    "f(x) = ax² + bx + c; graphs as a parabola."
   ],
   [
    "Exponential function",
    "f(x) = a·bˣ; models rapid growth or decay."
   ],
   [
    "Limit",
    "The value a function approaches as the input nears a point."
   ]
  ],
  "quiz": [
   {
    "q": "A function gives each input:",
    "options": [
     "Exactly one output",
     "Many outputs",
     "No output",
     "Two outputs"
    ],
    "a": 0,
    "why": "By definition, one input maps to exactly one output."
   },
   {
    "q": "If f(x) = 2x + 1, then f(3) =",
    "options": [
     "7",
     "6",
     "5",
     "9"
    ],
    "a": 0,
    "why": "2(3) + 1 = 7."
   },
   {
    "q": "A quadratic function graphs as a:",
    "options": [
     "Parabola",
     "Straight line",
     "Circle",
     "Single point"
    ],
    "a": 0,
    "why": "f(x)=ax²+bx+c makes a U-shaped parabola."
   },
   {
    "q": "log₂(8) =",
    "options": [
     "3",
     "2",
     "4",
     "8"
    ],
    "a": 0,
    "why": "2³ = 8, so log base 2 of 8 is 3."
   },
   {
    "q": "The domain of a function is:",
    "options": [
     "Its allowed inputs",
     "Its outputs",
     "Its slope",
     "Its graph"
    ],
    "a": 0,
    "why": "Domain = the set of valid inputs; range = the outputs."
   },
   {
    "q": "A limit describes the value a function:",
    "options": [
     "Approaches as the input nears a point",
     "Equals everywhere",
     "Starts at",
     "Can never reach"
    ],
    "a": 0,
    "why": "It's the value approached as x gets close to a number."
   }
  ]
 },
 "math-calculus": {
  "title": "Calculus",
  "subject": "Mathematics",
  "level": "College",
  "intro": "Calculus is the math of change. Where algebra handles fixed quantities, calculus handles things that move and vary — speed at an instant, the area under a curve, how fast anything grows. Its two big ideas are the derivative and the integral.",
  "cards": [
   {
    "h": "The derivative: instantaneous rate of change",
    "body": "The derivative measures how fast a function is changing at a single instant — the slope of the curve at a point. If position is a function of time, its derivative is velocity. It answers 'how fast, right now?' rather than 'how fast on average?'"
   },
   {
    "h": "Slope of a curve",
    "body": "For a straight line, slope is constant and easy (rise over run). For a curve, the slope changes everywhere. The derivative uses limits to find the slope of the line that just touches the curve at one point — the tangent line."
   },
   {
    "h": "A basic derivative rule",
    "body": "For power functions, the derivative of xⁿ is n·xⁿ⁻¹. So the derivative of x² is 2x, and of x³ is 3x². This 'power rule' is one of the first tools you learn for computing derivatives quickly."
   },
   {
    "h": "The integral: accumulation and area",
    "body": "The integral is the derivative's opposite. It adds up tiny pieces to find a total — most visibly, the area under a curve. If the derivative breaks change into instants, the integral builds a total back up from them."
   },
   {
    "h": "The two are inverses",
    "body": "The Fundamental Theorem of Calculus says differentiation and integration undo each other — finding the rate of change and finding the accumulated total are two sides of the same coin. That link is what makes calculus so powerful across science and engineering."
   }
  ],
  "flash": [
   [
    "Calculus",
    "The mathematics of change and accumulation."
   ],
   [
    "Derivative",
    "The instantaneous rate of change (slope at a point)."
   ],
   [
    "Tangent line",
    "The line that just touches a curve at one point."
   ],
   [
    "Power rule",
    "The derivative of xⁿ is n·xⁿ⁻¹."
   ],
   [
    "Integral",
    "Accumulation; the area under a curve."
   ],
   [
    "Velocity",
    "The derivative of position with respect to time."
   ],
   [
    "Fundamental Theorem",
    "Differentiation and integration are inverse operations."
   ],
   [
    "Limit",
    "The idea calculus is built on — approaching a value."
   ]
  ],
  "quiz": [
   {
    "q": "The derivative measures:",
    "options": [
     "Instantaneous rate of change",
     "Total area",
     "The average only",
     "A fixed number"
    ],
    "a": 0,
    "why": "It's the rate of change at a single instant — the slope at a point."
   },
   {
    "q": "The derivative of x² is:",
    "options": [
     "2x",
     "x",
     "x³",
     "2"
    ],
    "a": 0,
    "why": "Power rule: n·xⁿ⁻¹ = 2·x¹ = 2x."
   },
   {
    "q": "The integral is most visibly used to find:",
    "options": [
     "Area under a curve",
     "The slope at a point",
     "A single input",
     "The y-intercept"
    ],
    "a": 0,
    "why": "Integration accumulates pieces — classically, the area under a curve."
   },
   {
    "q": "If position is a function of time, its derivative is:",
    "options": [
     "Velocity",
     "Area",
     "Acceleration only",
     "Total distance"
    ],
    "a": 0,
    "why": "The rate of change of position is velocity."
   },
   {
    "q": "Differentiation and integration are:",
    "options": [
     "Inverse operations",
     "The same operation",
     "Unrelated",
     "Both just addition"
    ],
    "a": 0,
    "why": "The Fundamental Theorem says they undo each other."
   },
   {
    "q": "The derivative of x³ is:",
    "options": [
     "3x²",
     "x²",
     "3x",
     "x⁴"
    ],
    "a": 0,
    "why": "Power rule: 3·x² = 3x²."
   }
  ]
 },
 "math-statistics": {
  "title": "Statistics",
  "subject": "Mathematics",
  "level": "College",
  "intro": "Statistics is the science of collecting, summarizing, and drawing conclusions from data. In a world drowning in numbers and claims, it's the toolkit for telling what the data actually says from what someone wants you to think it says.",
  "cards": [
   {
    "h": "Center: mean, median, mode",
    "body": "Three ways to describe a 'typical' value. The mean is the average (add them up, divide by how many). The median is the middle value when sorted. The mode is the most common value. The median resists being thrown off by extreme outliers; the mean does not."
   },
   {
    "h": "Spread: range and standard deviation",
    "body": "Center alone isn't enough — you also need how spread out the data is. The range is max minus min. Standard deviation measures how far values typically sit from the mean: small means tightly clustered, large means scattered. Two data sets can share a mean yet differ wildly in spread."
   },
   {
    "h": "Probability basics",
    "body": "Probability measures how likely something is, from 0 (impossible) to 1 (certain). For equally likely outcomes, it's favorable outcomes divided by total outcomes — rolling a 4 on a die is 1/6. The probabilities of all possible outcomes add up to 1."
   },
   {
    "h": "The normal distribution",
    "body": "Many things (heights, test scores, measurement errors) follow a bell-shaped 'normal' curve — most values cluster near the mean, with fewer far out. In a normal distribution about 68% of values fall within one standard deviation of the mean. It underlies a huge amount of statistics."
   },
   {
    "h": "Correlation vs. causation",
    "body": "Statistics can show that two things move together (correlation), but that alone never proves one causes the other. Mistaking correlation for causation is the most common way numbers mislead — always ask whether something else could explain the link."
   }
  ],
  "flash": [
   [
    "Mean",
    "The average: the sum of values divided by their count."
   ],
   [
    "Median",
    "The middle value when data is sorted."
   ],
   [
    "Mode",
    "The most frequently occurring value."
   ],
   [
    "Range",
    "The difference between the largest and smallest value."
   ],
   [
    "Standard deviation",
    "A measure of how spread out data is from the mean."
   ],
   [
    "Probability",
    "How likely an event is, from 0 (impossible) to 1 (certain)."
   ],
   [
    "Normal distribution",
    "The bell-shaped curve many data sets follow."
   ],
   [
    "Outlier",
    "A value far from the rest of the data."
   ]
  ],
  "quiz": [
   {
    "q": "The mean is:",
    "options": [
     "The average",
     "The middle value",
     "The most common value",
     "The largest value"
    ],
    "a": 0,
    "why": "Mean = sum of values ÷ how many there are."
   },
   {
    "q": "Which measure of center is least affected by an extreme outlier?",
    "options": [
     "Median",
     "Mean",
     "Range",
     "Sum"
    ],
    "a": 0,
    "why": "The median is the middle value, so one extreme doesn't drag it."
   },
   {
    "q": "The probability of rolling a 4 on a fair six-sided die is:",
    "options": [
     "1/6",
     "1/4",
     "4/6",
     "1/2"
    ],
    "a": 0,
    "why": "One favorable outcome out of six equally likely ones."
   },
   {
    "q": "Standard deviation measures:",
    "options": [
     "How spread out data is",
     "The average",
     "The middle value",
     "The most common value"
    ],
    "a": 0,
    "why": "It captures the typical distance of values from the mean."
   },
   {
    "q": "In a normal distribution, about 68% of values fall within:",
    "options": [
     "One standard deviation of the mean",
     "The exact mean",
     "Three standard deviations",
     "The range"
    ],
    "a": 0,
    "why": "The 68-95-99.7 rule: ~68% within 1 SD of the mean."
   },
   {
    "q": "Two things moving together proves:",
    "options": [
     "Correlation, not necessarily causation",
     "One causes the other",
     "Nothing at all",
     "They are identical"
    ],
    "a": 0,
    "why": "Correlation alone doesn't establish that one causes the other."
   }
  ]
 }
};
