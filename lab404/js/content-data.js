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
  "objectives": [
   "Explain what variables, terms, coefficients, and expressions are, and evaluate an expression for a given value",
   "Simplify expressions by combining like terms and applying the distributive property",
   "Solve one-step, two-step, and multi-step linear equations, including ones with variables on both sides",
   "Translate real-world word problems into equations and solve them",
   "Check a solution and recognize the most common algebra mistakes"
  ],
  "intro": "Algebra is where math grows up. Arithmetic asks 'what is 7 + 5?'; algebra asks the far more powerful question 'what number, when I do something to it, gives this result?' To answer that, it introduces the variable — a letter standing for an unknown — and turns math from calculating fixed answers into describing relationships and solving for the unknown. This lesson takes you from the vocabulary, through simplifying and solving equations, to turning real-world problems into equations you can crack, with worked examples at every step.",
  "sections": [
   {
    "h": "What algebra is, and why it matters",
    "body": "Arithmetic answers questions with specific numbers. Algebra answers a more powerful kind of question: what number, when I operate on it, produces a given result? To do that it introduces the variable — a letter that stands in for a number we don't yet know or that can change. That single move turns math from calculating fixed answers into describing relationships and solving for unknowns.\n\nThis is why algebra appears everywhere. A phone plan's monthly cost, the time a road trip takes, the interest a savings account earns, the path of a thrown ball — each is a relationship between quantities, and algebra is the language for writing it down and working with it. Nearly every field that uses math at all — science, engineering, finance, medicine, computing — runs on algebra.\n\nThe reassuring part is that algebra is built from a small set of rules applied patiently. If you can do arithmetic and you're willing to work one careful step at a time, you can do algebra. Everything that follows is those few rules, used over and over.",
    "tip": "Don't rush to 'the answer.' Algebra rewards doing one small, legal step at a time and writing each step down."
   },
   {
    "h": "The building blocks: variables, terms, and expressions",
    "body": "A variable is a letter — most often x — that represents a number whose value we don't yet know or that can vary. A constant is a plain fixed number, like 7. A coefficient is the number multiplied by a variable; in the term 3x, the 3 is the coefficient and x is the variable.\n\nA term is a single building block: a constant, a variable, or a product of numbers and variables (3x, 5, and −2xy are all terms). An expression is one or more terms joined by + and −, such as 3x + 5 or 2x² − 4x + 1. An expression has no equals sign, so there's nothing to 'solve.' With an expression you can only simplify it (write it more compactly) or evaluate it (find its value) by substituting a number for the variable.\n\nEvaluating is careful substitution followed by arithmetic: replace every variable with its given value — using parentheses to protect signs and exponents — then follow the order of operations.",
    "example": "Evaluate 2x² − 4x + 1 when x = 3:\n  2(3)² − 4(3) + 1\n= 2(9) − 12 + 1\n= 18 − 12 + 1\n= 7",
    "tip": "Always substitute with parentheses, e.g., 2(3)², so you don't lose a sign or an exponent."
   },
   {
    "h": "Simplifying: like terms and the distributive property",
    "body": "Before solving, you usually simplify, and two tools do most of the work.\n\nFirst, combining like terms. Like terms have the exact same variable raised to the exact same power. 3x and 5x are like terms and add to 8x; 4x² and x² add to 5x²; but 3x and 3x² are NOT like terms, because the powers differ, so they stay separate. Plain numbers are like terms with each other. To combine, add or subtract the coefficients and keep the variable part unchanged.\n\nSecond, the distributive property: a(b + c) = ab + ac. When a number — or a negative sign — sits in front of parentheses, it multiplies every term inside. This is where many mistakes happen: a minus sign in front flips the sign of each term inside, so treat a leading minus as ×(−1). After distributing, you can usually combine like terms to finish.",
    "example": "Simplify 3(2x + 4) − (x − 5):\n= 6x + 12 − x + 5      (distribute; the minus flips both signs)\n= (6x − x) + (12 + 5)  (group like terms)\n= 5x + 17",
    "tip": "A minus sign in front of parentheses changes the sign of everything inside — the most common slip in all of algebra."
   },
   {
    "h": "Solving equations: the balance rule",
    "body": "An equation sets two expressions equal, like 2x + 3 = 11. Picture a scale that must stay balanced: the left side weighs exactly as much as the right. The one rule that solves any linear equation is this — whatever operation you perform, perform it on BOTH sides, so the balance is preserved.\n\nSolving means isolating the variable: getting it alone on one side. You do that by undoing the operations around it, in reverse of the order of operations — first undo addition and subtraction, then undo multiplication and division. Each undo uses the inverse operation (subtraction undoes addition; division undoes multiplication).\n\nA one-step equation needs a single undo; a two-step equation needs two. The structure never changes — you just peel the operations away one at a time.",
    "example": "Solve 2x + 3 = 11:\n2x + 3 = 11      (subtract 3 from both sides)\n2x = 8           (divide both sides by 2)\nx = 4",
    "visual": "<svg viewBox=\"0 0 360 150\" width=\"340\" role=\"img\" aria-label=\"A balanced scale with 2x plus 3 on the left pan equal to 11 on the right pan\">\n<line x1=\"180\" y1=\"46\" x2=\"180\" y2=\"112\" stroke=\"#4f9cf0\" stroke-width=\"3\"/>\n<polygon points=\"160,144 200,144 180,112\" fill=\"#1d2840\" stroke=\"#4f9cf0\" stroke-width=\"2\"/>\n<line x1=\"150\" y1=\"144\" x2=\"210\" y2=\"144\" stroke=\"#4f9cf0\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<line x1=\"55\" y1=\"46\" x2=\"305\" y2=\"46\" stroke=\"#39e3c8\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<circle cx=\"180\" cy=\"46\" r=\"5\" fill=\"#39e3c8\"/>\n<line x1=\"70\" y1=\"46\" x2=\"70\" y2=\"74\" stroke=\"#6b7a98\" stroke-width=\"1.5\"/>\n<line x1=\"290\" y1=\"46\" x2=\"290\" y2=\"74\" stroke=\"#6b7a98\" stroke-width=\"1.5\"/>\n<rect x=\"30\" y=\"74\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#16304a\" stroke=\"#39e3c8\" stroke-width=\"2\"/>\n<rect x=\"250\" y=\"74\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#16304a\" stroke=\"#39e3c8\" stroke-width=\"2\"/>\n<text x=\"70\" y=\"96\" text-anchor=\"middle\" fill=\"#e7edf7\" font-size=\"16\" font-family=\"monospace\">2x + 3</text>\n<text x=\"290\" y=\"96\" text-anchor=\"middle\" fill=\"#e7edf7\" font-size=\"16\" font-family=\"monospace\">11</text>\n<text x=\"180\" y=\"97\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"22\" font-weight=\"700\">=</text>\n</svg>",
    "caption": "The two sides must weigh the same. Do the same operation to both and the scale stays balanced."
   },
   {
    "h": "Multi-step equations and variables on both sides",
    "body": "Real equations are often longer, but the plan stays the same, done in order: (1) simplify each side on its own — distribute and combine like terms; (2) collect all the variable terms on one side and all the constants on the other, using the balance rule; (3) divide to isolate the variable.\n\nWhen the variable appears on both sides, pick a side to keep it on and subtract the variable term from the other. It doesn't matter which side you choose — the answer is the same — but moving the smaller variable term usually keeps the numbers positive and easier.\n\nTaken one legal step at a time, even the longest equation becomes a short sequence of simple moves.",
    "example": "Solve 3(x + 2) = 5x − 4:\n3x + 6 = 5x − 4      (distribute on the left)\n6 = 2x − 4           (subtract 3x from both sides)\n10 = 2x              (add 4 to both sides)\n5 = x                (divide both sides by 2)",
    "tip": "If you end up with an always-true statement like 7 = 7, the equation has infinitely many solutions; a false one like 3 = 8 means it has no solution."
   },
   {
    "h": "From words to equations — and checking your work",
    "body": "Algebra earns its keep by modeling real situations, and the skill is translation. Name the unknown with a variable, then convert the sentence into symbols piece by piece: 'is'/'equals' becomes =, 'sum'/'more than' becomes +, 'difference'/'less than' becomes −, 'product'/'times'/'of' becomes ×, and 'twice'/'tripled' become ×2 and ×3. Once the sentence is an equation, you solve it with the tools you already have.\n\nFinally, build the habit of checking every answer. Substitute your solution back into the ORIGINAL equation — not a later step, in case that step held an error — and confirm both sides come out equal. If they match, trust your answer; if not, you know to go back and find the slip. This one habit catches the large majority of mistakes.",
    "example": "'The sum of a number and twice the number is 21. Find the number.'\nLet the number be n:\nn + 2n = 21\n3n = 21\nn = 7\nCheck: 7 + 2(7) = 7 + 14 = 21  ✓",
    "tip": "Checking isn't busywork — it's a free, built-in way to know whether you're right."
   }
  ],
  "cards": [
   {
    "h": "Vocabulary",
    "body": "A variable stands for an unknown; a coefficient multiplies it; a term is one building block; an expression (no = sign) is terms joined by + and −."
   },
   {
    "h": "Simplify before you solve",
    "body": "Combine like terms (same variable and power) and distribute across parentheses first."
   },
   {
    "h": "The balance rule",
    "body": "Do the same operation to both sides to keep an equation equal, undoing operations in reverse order to isolate the variable."
   },
   {
    "h": "Watch the signs",
    "body": "A minus sign in front of parentheses flips the sign of every term inside."
   },
   {
    "h": "Model and check",
    "body": "Translate words into an equation, solve it, then substitute the answer back into the original equation to verify."
   }
  ],
  "flash": [
   [
    "Variable",
    "A letter standing for an unknown or changing number."
   ],
   [
    "Constant",
    "A fixed number with no variable."
   ],
   [
    "Coefficient",
    "The number multiplying a variable (the 3 in 3x)."
   ],
   [
    "Term",
    "A number, a variable, or a product of them (3x, 5, −2xy)."
   ],
   [
    "Expression",
    "Terms joined by + and −, with no equals sign."
   ],
   [
    "Equation",
    "A statement that two expressions are equal."
   ],
   [
    "Like terms",
    "Terms with the same variable to the same power; they combine."
   ],
   [
    "Balance rule",
    "Do the same operation to both sides of an equation."
   ],
   [
    "Distributive property",
    "a(b + c) = ab + ac."
   ],
   [
    "Isolate the variable",
    "Get the variable alone on one side to solve."
   ],
   [
    "Inverse operation",
    "The operation that undoes another (− undoes +)."
   ],
   [
    "Evaluate",
    "Find an expression's value by substituting for the variable."
   ]
  ],
  "quiz": [
   {
    "q": "Evaluate 2x² − 4x + 1 when x = 3.",
    "options": [
     "7",
     "19",
     "1",
     "13"
    ],
    "a": 0,
    "why": "2(9) − 12 + 1 = 18 − 12 + 1 = 7."
   },
   {
    "q": "Which are like terms?",
    "options": [
     "4x² and x²",
     "4x and 4x²",
     "4x and 4",
     "4 and 4y"
    ],
    "a": 0,
    "why": "Like terms share the same variable AND the same power."
   },
   {
    "q": "Simplify 7x − 2 + 3x + 9.",
    "options": [
     "10x + 7",
     "10x + 11",
     "4x + 7",
     "21x"
    ],
    "a": 0,
    "why": "(7x + 3x) + (−2 + 9) = 10x + 7."
   },
   {
    "q": "Expand 3(2x + 4) − (x − 5).",
    "options": [
     "5x + 17",
     "5x + 7",
     "7x + 7",
     "5x + 11"
    ],
    "a": 0,
    "why": "6x + 12 − x + 5 = 5x + 17."
   },
   {
    "q": "Solve x − 8 = −3.",
    "options": [
     "x = 5",
     "x = −11",
     "x = 11",
     "x = −5"
    ],
    "a": 0,
    "why": "Add 8 to both sides: x = −3 + 8 = 5."
   },
   {
    "q": "Solve 2x + 3 = 11.",
    "options": [
     "x = 4",
     "x = 7",
     "x = 5.5",
     "x = 8"
    ],
    "a": 0,
    "why": "2x = 8, then x = 4."
   },
   {
    "q": "Solve 5x − 2 = 3x + 8.",
    "options": [
     "x = 5",
     "x = 3",
     "x = 10",
     "x = 1"
    ],
    "a": 0,
    "why": "Subtract 3x (2x − 2 = 8), add 2 (2x = 10), divide by 2: x = 5."
   },
   {
    "q": "Solve 3(x + 2) = 5x − 4.",
    "options": [
     "x = 5",
     "x = 1",
     "x = −5",
     "x = 2"
    ],
    "a": 0,
    "why": "3x + 6 = 5x − 4 → 10 = 2x → x = 5."
   },
   {
    "q": "A minus sign directly in front of parentheses:",
    "options": [
     "Flips the sign of every term inside",
     "Only affects the first term",
     "Does nothing",
     "Doubles each term"
    ],
    "a": 0,
    "why": "A leading minus is ×(−1), so every inside term changes sign."
   },
   {
    "q": "To isolate a variable, you undo operations in what order?",
    "options": [
     "Reverse of the order of operations",
     "Same as the order of operations",
     "Alphabetical order",
     "Random order"
    ],
    "a": 0,
    "why": "Undo +/− first, then ×/÷ — the reverse of PEMDAS."
   },
   {
    "q": "'Twice a number, decreased by 5, is 9.' Which equation fits?",
    "options": [
     "2n − 5 = 9",
     "5 − 2n = 9",
     "2(n − 5) = 9",
     "n/2 − 5 = 9"
    ],
    "a": 0,
    "why": "Twice a number is 2n; decreased by 5 is − 5; 'is' means =."
   },
   {
    "q": "How should you check that x = 4 solves 2x + 3 = 11?",
    "options": [
     "Substitute 4 into the original equation",
     "Re-read the problem",
     "Guess again",
     "Solve a different equation"
    ],
    "a": 0,
    "why": "Plug it in: 2(4) + 3 = 11 ✓."
   },
   {
    "q": "If solving an equation leads to 7 = 7, the equation has:",
    "options": [
     "Infinitely many solutions",
     "No solution",
     "Exactly one solution",
     "A negative solution"
    ],
    "a": 0,
    "why": "An always-true statement means every value works."
   },
   {
    "q": "If solving an equation leads to 3 = 8, the equation has:",
    "options": [
     "No solution",
     "Infinitely many",
     "One solution",
     "Two solutions"
    ],
    "a": 0,
    "why": "A false statement means nothing satisfies the equation."
   },
   {
    "q": "Evaluate 3x + 5 when x = −2.",
    "options": [
     "−1",
     "11",
     "1",
     "−11"
    ],
    "a": 0,
    "why": "3(−2) + 5 = −6 + 5 = −1."
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
  "subject": "Coding",
  "level": "Grades 7-12",
  "objectives": [
   "Explain what Python is and why it's a great first language",
   "Use variables and the basic data types",
   "Use input, output, and operators",
   "Control flow with if-statements and loops",
   "Organize code with functions and lists"
  ],
  "intro": "Python is one of the world's most popular programming languages — readable, beginner-friendly, and powerful enough for websites, data science, and AI. It's an ideal first language. This lesson teaches the core building blocks of Python, enough to start writing real programs that make decisions and repeat work.",
  "sections": [
   {
    "h": "Why Python, and your first program",
    "body": "Python is prized for reading almost like plain English, which lets you focus on solving problems instead of fighting the language. It's used everywhere — from small scripts to major companies and NASA — and it's free. You write Python as plain text and run it; the result appears immediately.\n\nThe traditional first program just prints a message to the screen. In Python, that's a single line: print(\"Hello, world!\"). The print() function displays whatever you put inside its parentheses. That simplicity — one readable line to see a result — is a big part of why Python is the most recommended first language.",
    "example": "print(\"Hello, world!\")\n# Output:  Hello, world!",
    "tip": "Python reads almost like English. print(...) displays text; a # starts a comment Python ignores."
   },
   {
    "h": "Variables and data types",
    "body": "A variable is a named box that stores a value so you can use it later. You create one by giving it a name and a value with the = sign: age = 16. After that, 'age' holds 16 until you change it. Variables make programs flexible — the same code can work with different values.\n\nPython values come in types. An integer (int) is a whole number (5); a float is a decimal (3.14); a string (str) is text in quotes (\"hello\"); and a boolean (bool) is True or False. Python figures out the type automatically. Knowing types matters because you can do math with numbers but not, directly, with text.",
    "example": "name = \"Sam\"      # a string\nage = 16          # an integer\nheight = 5.4      # a float\nis_student = True  # a boolean",
    "tip": "A variable stores a value with =. Core types: int (5), float (3.14), str (\"text\"), bool (True/False)."
   },
   {
    "h": "Input, output, and operators",
    "body": "Programs become interactive when they take input. Python's input() function pauses and waits for the user to type something, then hands back what they typed as a string. You usually store it in a variable: name = input(\"What's your name? \"). To show results, you use print(), often combined with variables.\n\nOperators let you compute. The arithmetic operators are + - * / (add, subtract, multiply, divide). Comparison operators like == (equal to), >, and < compare values and give a True/False result. One common gotcha: input() always gives text, so to do math on a typed number you must convert it with int() or float() first.",
    "example": "age = int(input(\"Your age? \"))\nnext_year = age + 1\nprint(\"Next year you will be\", next_year)",
    "tip": "input() returns text — wrap it in int() or float() before math. == checks equality; = assigns."
   },
   {
    "h": "Making decisions and repeating work",
    "body": "Real programs make choices. An if statement runs a block of code only when a condition is True; else gives an alternative, and elif ('else if') checks more conditions. Python uses indentation (spaces at the start of a line) to show which code belongs inside the if — a defining feature of the language.\n\nTo repeat work, you use loops. A for loop repeats a set number of times or over a collection of items; a while loop repeats as long as a condition stays True. Loops are what let a program do thousands of repetitions without you writing thousands of lines. Decisions and loops together give programs their real power.",
    "visual": "<svg viewBox=\"0 0 240 150\" width=\"230\" role=\"img\" aria-label=\"A flowchart: if score is 60 or more, print Pass, otherwise print Fail\"><polygon points=\"120,12 180,45 120,78 60,45\" fill=\"rgba(232,184,75,.14)\" stroke=\"#e8b84b\" stroke-width=\"1.6\"/><text x=\"120\" y=\"48\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">score &gt;= 60 ?</text><polyline points=\"180,45 184,45 184,100\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"1.6\"/><polygon points=\"180,94 188,94 184,101\" fill=\"#39e3c8\"/><polyline points=\"60,45 56,45 56,100\" fill=\"none\" stroke=\"#f05a5a\" stroke-width=\"1.6\"/><polygon points=\"52,94 60,94 56,101\" fill=\"#f05a5a\"/><text x=\"193\" y=\"72\" fill=\"#39e3c8\" font-size=\"9\">Yes</text><text x=\"40\" y=\"72\" fill=\"#f05a5a\" font-size=\"9\">No</text><rect x=\"153\" y=\"100\" width=\"62\" height=\"30\" rx=\"6\" fill=\"rgba(57,227,200,.14)\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"184\" y=\"119\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Pass</text><rect x=\"25\" y=\"100\" width=\"62\" height=\"30\" rx=\"6\" fill=\"rgba(240,90,90,.16)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><text x=\"56\" y=\"119\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Fail</text></svg>",
    "caption": "An if/else decision: the condition is tested, and the program branches one way or the other.",
    "example": "score = 72\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\n\nfor i in range(3):\n    print(\"Hello\")",
    "tip": "if/elif/else make decisions; for and while loops repeat. Indentation (not braces) marks a block in Python."
   },
   {
    "h": "Functions and lists",
    "body": "As programs grow, you organize code into functions — named, reusable blocks that do one job. You define a function with def and call it by name whenever you need it. Functions can take inputs (parameters) and give back a result (return). They keep code from repeating and make it easier to read and fix.\n\nTo store many values together, Python uses a list — an ordered collection written in square brackets: scores = [90, 85, 72]. You can access items by position (starting at 0), add to a list, and loop over it. Functions and lists are where beginner programs start to become genuinely useful, handling many values and tasks cleanly.",
    "example": "def greet(name):\n    return \"Hi, \" + name\n\nprint(greet(\"Sam\"))   # Hi, Sam\n\nscores = [90, 85, 72]\nprint(scores[0])      # 90",
    "tip": "def defines a reusable function; a list [ .. ] stores many values, indexed from 0."
   }
  ],
  "cards": [
   {
    "h": "First program",
    "body": "Python reads like English; print(\"Hello, world!\") shows text. A # begins a comment."
   },
   {
    "h": "Variables & types",
    "body": "name = value stores it. Types: int (5), float (3.14), str (\"text\"), bool (True/False)."
   },
   {
    "h": "Input & operators",
    "body": "input() reads text (convert with int()/float() for math); + - * / compute; == compares."
   },
   {
    "h": "Decisions & loops",
    "body": "if/elif/else choose; for and while repeat; indentation marks the block."
   },
   {
    "h": "Functions & lists",
    "body": "def makes a reusable function (parameters, return); a list [..] holds many values, indexed from 0."
   }
  ],
  "flash": [
   [
    "Variable",
    "A named box that stores a value."
   ],
   [
    "String",
    "Text data, written in quotes."
   ],
   [
    "Integer",
    "A whole number value (int)."
   ],
   [
    "Float",
    "A decimal number value."
   ],
   [
    "Boolean",
    "A True or False value."
   ],
   [
    "print()",
    "A function that displays output on screen."
   ],
   [
    "input()",
    "A function that reads text typed by the user."
   ],
   [
    "if statement",
    "Code that runs only when a condition is True."
   ],
   [
    "Loop",
    "Code that repeats (for or while)."
   ],
   [
    "Function",
    "A named, reusable block of code (defined with def)."
   ],
   [
    "List",
    "An ordered collection of values in square brackets."
   ],
   [
    "Comment",
    "A # note in code that Python ignores."
   ]
  ],
  "quiz": [
   {
    "q": "Which line prints text in Python?",
    "options": [
     "print(\"Hello\")",
     "say Hello",
     "echo Hello",
     "write(Hello)"
    ],
    "a": 0,
    "why": "print() displays whatever is in its parentheses."
   },
   {
    "q": "What symbol starts a comment Python ignores?",
    "options": [
     "#",
     "//",
     "<!--",
     ";"
    ],
    "a": 0,
    "why": "A # begins a Python comment."
   },
   {
    "q": "Which creates a variable?",
    "options": [
     "age = 16",
     "16 = age",
     "var age",
     "age := 16"
    ],
    "a": 0,
    "why": "name = value assigns a variable."
   },
   {
    "q": "\"hello\" is which data type?",
    "options": [
     "String",
     "Integer",
     "Boolean",
     "Float"
    ],
    "a": 0,
    "why": "Text in quotes is a string."
   },
   {
    "q": "3.14 is which data type?",
    "options": [
     "Float",
     "Integer",
     "String",
     "Boolean"
    ],
    "a": 0,
    "why": "A decimal number is a float."
   },
   {
    "q": "True and False are which type?",
    "options": [
     "Boolean",
     "String",
     "Integer",
     "List"
    ],
    "a": 0,
    "why": "Boolean values are True or False."
   },
   {
    "q": "input() always returns a:",
    "options": [
     "String",
     "Integer",
     "Float",
     "Boolean"
    ],
    "a": 0,
    "why": "Typed input comes back as text until you convert it."
   },
   {
    "q": "To do math on a typed number, you first:",
    "options": [
     "Convert it with int() or float()",
     "Print it",
     "Delete it",
     "Capitalize it"
    ],
    "a": 0,
    "why": "input() gives text; convert before math."
   },
   {
    "q": "Which operator checks if two values are equal?",
    "options": [
     "==",
     "=",
     "=>",
     "!"
    ],
    "a": 0,
    "why": "== compares; a single = assigns."
   },
   {
    "q": "An if statement runs its block when the condition is:",
    "options": [
     "True",
     "False",
     "A string",
     "Empty"
    ],
    "a": 0,
    "why": "The block runs only when the condition is True."
   },
   {
    "q": "Which repeats code a set number of times?",
    "options": [
     "A for loop",
     "An if statement",
     "print()",
     "A comment"
    ],
    "a": 0,
    "why": "A for loop repeats over a range or collection."
   },
   {
    "q": "In Python, what marks which code is inside an if or loop?",
    "options": [
     "Indentation",
     "Curly braces {}",
     "Semicolons",
     "Parentheses"
    ],
    "a": 0,
    "why": "Python uses indentation to define blocks."
   },
   {
    "q": "A reusable named block of code is a:",
    "options": [
     "Function",
     "Variable",
     "String",
     "List"
    ],
    "a": 0,
    "why": "Functions (def) group reusable code."
   },
   {
    "q": "Which stores many values in order?",
    "options": [
     "A list",
     "A single int",
     "A boolean",
     "A comment"
    ],
    "a": 0,
    "why": "A list [..] holds an ordered collection."
   },
   {
    "q": "In scores = [90, 85, 72], scores[0] is:",
    "options": [
     "90",
     "85",
     "72",
     "0"
    ],
    "a": 0,
    "why": "Lists are indexed from 0, so [0] is the first item, 90."
   }
  ]
 },
 "english-grammar-mechanics": {
  "title": "Grammar & Mechanics",
  "subject": "English",
  "level": "Grades 4-9",
  "objectives": [
   "Identify the main parts of speech",
   "Build complete sentences with a subject and a predicate",
   "Use punctuation and capitalization correctly",
   "Recognize and fix fragments, run-ons, and agreement errors",
   "Understand how grammar makes writing clear"
  ],
  "intro": "Grammar is the set of rules that holds language together — it's what lets words combine into clear, meaningful sentences others can understand. Good grammar isn't about being fancy; it's about being clear. This lesson covers the parts of speech, sentence structure, punctuation, and the common mistakes to watch for.",
  "sections": [
   {
    "h": "The parts of speech",
    "body": "Every word in English does a job, and those jobs are the parts of speech. Nouns name people, places, things, or ideas (dog, city, freedom). Verbs show action or a state of being (run, is, think). Adjectives describe nouns (red, quick); adverbs describe verbs, adjectives, or other adverbs (quickly, very).\n\nThe rest round out the system: pronouns replace nouns (he, she, it, they); prepositions show relationships (in, on, under); conjunctions join words or ideas (and, but, because); and interjections express emotion (wow!). Knowing each word's job is the first step to building sentences that work.",
    "visual": "<svg viewBox=\"0 0 268 76\" width=\"255\" role=\"img\" aria-label=\"The sentence The happy dog ran quickly with each word labeled by its part of speech\"><rect x=\"6\" y=\"10\" width=\"34\" height=\"28\" rx=\"5\" fill=\"rgba(107,122,152,.18)\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"23\" y=\"29\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"11\">The</text><rect x=\"44\" y=\"10\" width=\"50\" height=\"28\" rx=\"5\" fill=\"rgba(232,184,75,.18)\" stroke=\"#e8b84b\" stroke-width=\"1.3\"/><text x=\"69\" y=\"29\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"11\">happy</text><rect x=\"98\" y=\"10\" width=\"40\" height=\"28\" rx=\"5\" fill=\"rgba(79,156,240,.18)\" stroke=\"#4f9cf0\" stroke-width=\"1.3\"/><text x=\"118\" y=\"29\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"11\">dog</text><rect x=\"142\" y=\"10\" width=\"36\" height=\"28\" rx=\"5\" fill=\"rgba(240,90,90,.18)\" stroke=\"#f05a5a\" stroke-width=\"1.3\"/><text x=\"160\" y=\"29\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"11\">ran</text><rect x=\"182\" y=\"10\" width=\"68\" height=\"28\" rx=\"5\" fill=\"rgba(57,227,200,.15)\" stroke=\"#39e3c8\" stroke-width=\"1.3\"/><text x=\"216\" y=\"29\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"11\">quickly</text><text x=\"23\" y=\"54\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">article</text><text x=\"69\" y=\"54\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"8\">adjective</text><text x=\"118\" y=\"54\" text-anchor=\"middle\" fill=\"#4f9cf0\" font-size=\"8\">noun</text><text x=\"160\" y=\"54\" text-anchor=\"middle\" fill=\"#f05a5a\" font-size=\"8\">verb</text><text x=\"216\" y=\"54\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"8\">adverb</text></svg>",
    "caption": "Each word in a sentence does a job — its part of speech.",
    "example": "In 'The happy dog ran quickly': happy = adjective, dog = noun, ran = verb, quickly = adverb.",
    "tip": "Nouns name, verbs do, adjectives describe nouns, adverbs describe verbs — the four you'll use most."
   },
   {
    "h": "Building a sentence",
    "body": "A complete sentence needs two things: a subject (who or what the sentence is about) and a predicate (what the subject does or is). In 'The dog barked,' 'the dog' is the subject and 'barked' is the predicate. Without both, you don't have a complete thought.\n\nSentences come in types: a statement declares something (She left.), a question asks (Did she leave?), a command tells (Leave now.), and an exclamation shows strong feeling (She left!). A sentence always starts with a capital letter and ends with a punctuation mark — that's how a reader knows where one thought stops and the next begins.",
    "tip": "A complete sentence = a subject + a predicate = one complete thought."
   },
   {
    "h": "Punctuation and capitalization",
    "body": "Punctuation marks are the traffic signals of writing. A period ends a statement. A question mark ends a question; an exclamation point shows strong emotion. A comma signals a short pause — it separates items in a list, joins clauses with a conjunction, and sets off extra information.\n\nOther marks have specific jobs: apostrophes show possession (Sara's book) or contractions (don't); quotation marks mark someone's exact words. Capitalization also carries meaning: the first word of a sentence, the pronoun 'I,' and all proper nouns (names, places, days) are capitalized. These small marks prevent big confusion.",
    "example": "Compare: 'Let's eat, Grandma.' vs. 'Let's eat Grandma.' One comma changes everything.",
    "tip": "Commas and capitals aren't decoration — they tell the reader how to read your sentence."
   },
   {
    "h": "Common errors to fix",
    "body": "A few mistakes trip up most writers. A fragment is an incomplete sentence missing a subject or predicate ('Because I was late.'). A run-on jams two sentences together with no proper break ('I was late I missed the bus.'). Both confuse readers; fix a fragment by completing it, and a run-on by splitting it or joining it correctly.\n\nAgreement errors are another: the subject and verb must match in number ('She runs,' not 'She run'), and pronouns must match what they replace. Reading your writing aloud is the best way to catch these — your ear often hears what your eye misses.",
    "tip": "Read your writing aloud. Fragments, run-ons, and agreement slips usually sound wrong before they look wrong."
   },
   {
    "h": "Why grammar matters",
    "body": "Grammar can feel like a pile of rules, but its real purpose is simple: to make your meaning clear. When you follow the shared rules of grammar, your reader understands you without having to work at it. When you break them, even a smart reader can get lost or get the wrong idea.\n\nGood grammar also builds credibility. Whether it's an essay, an email, or a job application, clean writing signals care and competence. You don't need to sound formal or complicated — you need to be clear and correct. Master the basics, and your writing will carry your ideas instead of getting in their way."
   }
  ],
  "cards": [
   {
    "h": "Parts of speech",
    "body": "Noun (names), verb (action/being), adjective (describes nouns), adverb (describes verbs), plus pronouns, prepositions, conjunctions, interjections."
   },
   {
    "h": "Sentence",
    "body": "A complete sentence has a subject + a predicate = one complete thought."
   },
   {
    "h": "Punctuation",
    "body": "Periods, question marks, commas, apostrophes, and quotes guide the reader; capitalize sentence starts, 'I,' and proper nouns."
   },
   {
    "h": "Common errors",
    "body": "Fragments (incomplete), run-ons (jammed together), and subject-verb agreement slips."
   },
   {
    "h": "Clarity",
    "body": "Grammar's purpose is to make meaning clear and build credibility — be clear and correct, not fancy."
   }
  ],
  "flash": [
   [
    "Noun",
    "A word naming a person, place, thing, or idea."
   ],
   [
    "Verb",
    "A word showing action or a state of being."
   ],
   [
    "Adjective",
    "A word that describes a noun."
   ],
   [
    "Adverb",
    "A word that describes a verb, adjective, or adverb."
   ],
   [
    "Pronoun",
    "A word that replaces a noun (he, she, it, they)."
   ],
   [
    "Subject",
    "Who or what a sentence is about."
   ],
   [
    "Predicate",
    "What the subject does or is."
   ],
   [
    "Fragment",
    "An incomplete sentence missing a subject or predicate."
   ],
   [
    "Run-on",
    "Two sentences joined with no proper break."
   ],
   [
    "Comma",
    "A mark showing a short pause; separates list items and clauses."
   ],
   [
    "Apostrophe",
    "A mark showing possession or a contraction."
   ],
   [
    "Subject-verb agreement",
    "The subject and verb matching in number."
   ]
  ],
  "quiz": [
   {
    "q": "A word that names a person, place, or thing is a:",
    "options": [
     "Noun",
     "Verb",
     "Adverb",
     "Preposition"
    ],
    "a": 0,
    "why": "Nouns name people, places, things, and ideas."
   },
   {
    "q": "In 'She ran fast,' the verb is:",
    "options": [
     "ran",
     "She",
     "fast",
     "None"
    ],
    "a": 0,
    "why": "'Ran' shows the action."
   },
   {
    "q": "An adjective describes a:",
    "options": [
     "Noun",
     "Verb",
     "Adverb",
     "Sentence"
    ],
    "a": 0,
    "why": "Adjectives describe nouns (red, quick)."
   },
   {
    "q": "'Quickly' in 'ran quickly' is a(n):",
    "options": [
     "Adverb",
     "Noun",
     "Adjective",
     "Pronoun"
    ],
    "a": 0,
    "why": "Adverbs describe verbs — how the running was done."
   },
   {
    "q": "A complete sentence must have a subject and a:",
    "options": [
     "Predicate",
     "Adjective",
     "Comma",
     "Title"
    ],
    "a": 0,
    "why": "Subject + predicate = a complete thought."
   },
   {
    "q": "In 'The dog barked,' the subject is:",
    "options": [
     "The dog",
     "barked",
     "The",
     "dog barked"
    ],
    "a": 0,
    "why": "The subject is who/what the sentence is about."
   },
   {
    "q": "Which ends a question?",
    "options": [
     "Question mark",
     "Period",
     "Comma",
     "Apostrophe"
    ],
    "a": 0,
    "why": "A question mark ends a question."
   },
   {
    "q": "'Because I was late.' on its own is a:",
    "options": [
     "Fragment",
     "Run-on",
     "Complete sentence",
     "Question"
    ],
    "a": 0,
    "why": "It's incomplete — a dependent clause with no main thought."
   },
   {
    "q": "'I was late I missed the bus.' is a:",
    "options": [
     "Run-on",
     "Fragment",
     "Correct sentence",
     "Command"
    ],
    "a": 0,
    "why": "Two sentences are jammed together with no proper break."
   },
   {
    "q": "Which shows correct subject-verb agreement?",
    "options": [
     "She runs",
     "She run",
     "They runs",
     "He run"
    ],
    "a": 0,
    "why": "A singular subject takes the matching verb form 'runs.'"
   },
   {
    "q": "An apostrophe in 'don't' shows a:",
    "options": [
     "Contraction",
     "List",
     "Question",
     "Plural"
    ],
    "a": 0,
    "why": "It marks the missing letters in a contraction."
   },
   {
    "q": "Which word should always be capitalized?",
    "options": [
     "The pronoun 'I'",
     "every noun",
     "the word 'and'",
     "verbs"
    ],
    "a": 0,
    "why": "'I,' sentence starts, and proper nouns are capitalized."
   },
   {
    "q": "A comma in a list is used to:",
    "options": [
     "Separate the items",
     "End the sentence",
     "Show possession",
     "Ask a question"
    ],
    "a": 0,
    "why": "Commas separate items in a series."
   },
   {
    "q": "The real purpose of grammar is to:",
    "options": [
     "Make meaning clear",
     "Sound fancy",
     "Add length",
     "Confuse readers"
    ],
    "a": 0,
    "why": "Grammar exists to make writing clear and understood."
   },
   {
    "q": "The best way to catch fragments and run-ons is to:",
    "options": [
     "Read your writing aloud",
     "Write faster",
     "Ignore them",
     "Use longer words"
    ],
    "a": 0,
    "why": "Your ear hears errors the eye skips over."
   }
  ]
 },
 "science-biology": {
  "title": "Biology",
  "subject": "Science",
  "level": "Grades 9-12",
  "objectives": [
   "State the cell theory and explain that all life is made of cells",
   "Distinguish prokaryotic from eukaryotic cells and name key organelles",
   "Describe how cells capture and release energy (photosynthesis and respiration)",
   "Explain how DNA stores and passes on genetic information",
   "Explain evolution by natural selection as the unifying theme of biology"
  ],
  "intro": "Biology is the study of life — from a single bacterium to the entire web of living things on Earth. Despite life's staggering variety, a few big ideas tie it all together: every living thing is made of cells, runs on energy it captures and converts, carries instructions in DNA, and has been shaped by evolution. This lesson builds those core ideas, which underlie everything else in biology and medicine.",
  "sections": [
   {
    "h": "The cell theory",
    "body": "The foundation of biology is the cell theory, one of science's great unifying ideas. It states three things: all living things are made of one or more cells; the cell is the basic unit of life; and all cells come from pre-existing cells.\n\nA cell is the smallest thing that counts as alive — it can take in nutrients, use energy, respond to its surroundings, and reproduce. Some organisms, like bacteria, are a single cell; others, like you, are made of trillions working together. Whatever the organism, life happens at the level of the cell.",
    "tip": "If something isn't made of cells, it isn't alive — which is why viruses are a gray area, since they aren't cells."
   },
   {
    "h": "Two kinds of cells",
    "body": "All cells fall into two broad types. Prokaryotic cells are small and simple, with their DNA floating freely — bacteria are the main example. Eukaryotic cells are larger and more complex, keeping their DNA inside a membrane-bound nucleus, and they build the bodies of plants, animals, fungi, and protists.\n\nEukaryotic cells also contain organelles — specialized internal compartments, each with a job. The nucleus holds the DNA; mitochondria release energy; in plants, chloroplasts capture sunlight; the cell membrane controls what enters and leaves. Think of organelles as the organs of the cell.",
    "visual": "<svg viewBox=\"0 0 250 190\" width=\"235\" role=\"img\" aria-label=\"A eukaryotic cell showing the cell membrane, nucleus, mitochondria and cytoplasm\"><ellipse cx=\"125\" cy=\"92\" rx=\"112\" ry=\"78\" fill=\"rgba(57,227,200,.06)\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><circle cx=\"110\" cy=\"88\" r=\"33\" fill=\"rgba(79,156,240,.18)\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"88\" r=\"9\" fill=\"#4f9cf0\" opacity=\"0.5\"/><ellipse cx=\"190\" cy=\"66\" rx=\"21\" ry=\"11\" fill=\"rgba(240,90,90,.18)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><ellipse cx=\"66\" cy=\"140\" rx=\"19\" ry=\"10\" fill=\"rgba(240,90,90,.18)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><text x=\"110\" y=\"91\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">nucleus</text><text x=\"190\" y=\"69\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">mitochondria</text><text x=\"125\" y=\"180\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10\">cell membrane surrounds the cytoplasm</text></svg>",
    "caption": "A eukaryotic cell: DNA sits in the nucleus; mitochondria release energy; the membrane controls what enters.",
    "example": "Prokaryote: a bacterium (no nucleus)\nEukaryote: a human skin cell, a plant leaf cell, a yeast cell (all have a nucleus)"
   },
   {
    "h": "How cells get energy",
    "body": "Life runs on energy, and cells capture and release it through two complementary processes. In photosynthesis, plants (and some microbes) use sunlight to build sugar from carbon dioxide and water, releasing oxygen. This is how energy from the sun enters the living world.\n\nIn cellular respiration, cells — including plant cells — break that sugar back down to release usable energy, consuming oxygen and giving off carbon dioxide. The two form a cycle: photosynthesis stores the sun's energy in sugar; respiration spends it. The products of one are the raw materials of the other.",
    "tip": "Photosynthesis makes food and releases oxygen; respiration burns food and releases carbon dioxide — mirror images."
   },
   {
    "h": "DNA and inheritance",
    "body": "Every cell carries a set of instructions in a molecule called DNA, shaped like a twisted ladder (the double helix). A gene is a segment of DNA that codes for a particular trait or protein, and your full set of genes is your genome.\n\nWhen a cell divides, it first copies its DNA so each new cell gets a complete set. When organisms reproduce, they pass DNA to their offspring — which is why you resemble your parents. Occasional copying errors (mutations) create the genetic variation that makes each individual unique and gives evolution something to act on.",
    "visual": "<svg viewBox=\"0 0 110 190\" width=\"78\" role=\"img\" aria-label=\"A DNA double helix with two strands and base-pair rungs\"><line x1=\"70.3\" y1=\"25.7\" x2=\"39.7\" y2=\"25.7\" stroke=\"#e8b84b\" stroke-width=\"2\"/><line x1=\"79.7\" y1=\"41.1\" x2=\"30.3\" y2=\"41.1\" stroke=\"#39e3c8\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"56.5\" x2=\"55.0\" y2=\"56.5\" stroke=\"#e8b84b\" stroke-width=\"2\"/><line x1=\"30.3\" y1=\"71.9\" x2=\"79.7\" y2=\"71.9\" stroke=\"#39e3c8\" stroke-width=\"2\"/><line x1=\"39.7\" y1=\"87.3\" x2=\"70.3\" y2=\"87.3\" stroke=\"#e8b84b\" stroke-width=\"2\"/><line x1=\"70.3\" y1=\"102.7\" x2=\"39.7\" y2=\"102.7\" stroke=\"#39e3c8\" stroke-width=\"2\"/><line x1=\"79.7\" y1=\"118.1\" x2=\"30.3\" y2=\"118.1\" stroke=\"#e8b84b\" stroke-width=\"2\"/><line x1=\"55.0\" y1=\"133.5\" x2=\"55.0\" y2=\"133.5\" stroke=\"#39e3c8\" stroke-width=\"2\"/><line x1=\"30.3\" y1=\"148.9\" x2=\"79.7\" y2=\"148.9\" stroke=\"#e8b84b\" stroke-width=\"2\"/><line x1=\"39.7\" y1=\"164.3\" x2=\"70.3\" y2=\"164.3\" stroke=\"#39e3c8\" stroke-width=\"2\"/><path d=\"M55.0 18.0 L63.0 21.9 L70.3 25.7 L76.0 29.6 L79.7 33.4 L81.0 37.2 L79.7 41.1 L76.0 45.0 L70.3 48.8 L63.0 52.6 L55.0 56.5 L47.0 60.4 L39.7 64.2 L34.0 68.0 L30.3 71.9 L29.0 75.8 L30.3 79.6 L34.0 83.5 L39.7 87.3 L47.0 91.2 L55.0 95.0 L63.0 98.8 L70.3 102.7 L76.0 106.5 L79.7 110.4 L81.0 114.2 L79.7 118.1 L76.0 122.0 L70.3 125.8 L63.0 129.7 L55.0 133.5 L47.0 137.3 L39.7 141.2 L34.0 145.1 L30.3 148.9 L29.0 152.8 L30.3 156.6 L34.0 160.4 L39.7 164.3 L47.0 168.2 L55.0 172.0\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><path d=\"M55.0 18.0 L47.0 21.9 L39.7 25.7 L34.0 29.6 L30.3 33.4 L29.0 37.2 L30.3 41.1 L34.0 45.0 L39.7 48.8 L47.0 52.6 L55.0 56.5 L63.0 60.4 L70.3 64.2 L76.0 68.0 L79.7 71.9 L81.0 75.8 L79.7 79.6 L76.0 83.5 L70.3 87.3 L63.0 91.2 L55.0 95.0 L47.0 98.8 L39.7 102.7 L34.0 106.5 L30.3 110.4 L29.0 114.2 L30.3 118.1 L34.0 122.0 L39.7 125.8 L47.0 129.7 L55.0 133.5 L63.0 137.3 L70.3 141.2 L76.0 145.1 L79.7 148.9 L81.0 152.8 L79.7 156.6 L76.0 160.4 L70.3 164.3 L63.0 168.2 L55.0 172.0\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/></svg>",
    "caption": "DNA's double-helix structure: two strands joined by rungs of base pairs that store the genetic code.",
    "example": "DNA → genes → traits. A gene for eye color is one stretch of the DNA you inherited from your parents."
   },
   {
    "h": "Evolution by natural selection",
    "body": "The single idea that ties all of biology together is evolution by natural selection, Darwin's great insight. It works like this: individuals in a population vary (thanks to genetic differences); some variations help an individual survive and reproduce in its environment; those individuals pass on more of their genes; so, over many generations, helpful traits become more common.\n\nThis slow change is evolution. It explains the staggering diversity of life, why organisms are so well-suited to their environments, and why all living things share deep similarities — we're all descended from common ancestors. Nothing in biology makes full sense except in the light of evolution.",
    "tip": "Natural selection isn't random: the variation is random, but which traits survive is shaped by the environment."
   },
   {
    "h": "Levels of life",
    "body": "Biology studies life at many scales, each building on the one below. Molecules (like DNA and proteins) make up cells; cells form tissues; tissues form organs; organs form organ systems; and systems form a whole organism.\n\nZooming out, organisms of one kind form a population; different populations living together form a community; the community plus its physical environment is an ecosystem; and all ecosystems together make the biosphere — all life on Earth. Understanding biology means moving between these levels, from a single molecule to the living planet."
   }
  ],
  "cards": [
   {
    "h": "Cell theory",
    "body": "All living things are made of cells; the cell is life's basic unit; cells come from other cells."
   },
   {
    "h": "Two cell types",
    "body": "Prokaryotic (no nucleus, e.g. bacteria) vs. eukaryotic (nucleus + organelles, e.g. plants/animals)."
   },
   {
    "h": "Energy",
    "body": "Photosynthesis stores the sun's energy in sugar (releasing O₂); respiration releases it (using O₂, giving off CO₂)."
   },
   {
    "h": "DNA & genes",
    "body": "DNA (a double helix) holds the instructions; a gene codes for a trait; mutations create variation."
   },
   {
    "h": "Evolution",
    "body": "Helpful traits become more common over generations because they aid survival and reproduction."
   }
  ],
  "flash": [
   [
    "Cell",
    "The smallest unit of life; all living things are made of cells."
   ],
   [
    "Cell theory",
    "All life is cells; the cell is life's basic unit; cells come from cells."
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
    "Nucleus",
    "The organelle that holds a eukaryotic cell's DNA."
   ],
   [
    "Organelle",
    "A specialized compartment inside a cell with a specific job."
   ],
   [
    "Photosynthesis",
    "Plants making sugar from sunlight, water, and CO₂, releasing O₂."
   ],
   [
    "Cellular respiration",
    "Breaking sugar down for energy, using O₂, releasing CO₂."
   ],
   [
    "DNA",
    "The double-helix molecule carrying genetic instructions."
   ],
   [
    "Gene",
    "A segment of DNA that codes for a trait."
   ],
   [
    "Mutation",
    "A change in DNA that creates genetic variation."
   ],
   [
    "Natural selection",
    "Helpful traits spreading because they aid survival and reproduction."
   ]
  ],
  "quiz": [
   {
    "q": "The cell theory says the basic unit of life is the:",
    "options": [
     "Cell",
     "Atom",
     "Organ",
     "Molecule"
    ],
    "a": 0,
    "why": "All living things are made of cells, the basic unit of life."
   },
   {
    "q": "Which cell type has a nucleus?",
    "options": [
     "Eukaryotic",
     "Prokaryotic",
     "Bacterial",
     "None"
    ],
    "a": 0,
    "why": "Eukaryotes (plants, animals, fungi) have a nucleus; prokaryotes don't."
   },
   {
    "q": "A bacterium is an example of a:",
    "options": [
     "Prokaryote",
     "Eukaryote",
     "Plant cell",
     "Fungus cell"
    ],
    "a": 0,
    "why": "Bacteria are prokaryotes — no nucleus."
   },
   {
    "q": "The organelle that holds a cell's DNA is the:",
    "options": [
     "Nucleus",
     "Mitochondrion",
     "Membrane",
     "Chloroplast"
    ],
    "a": 0,
    "why": "The nucleus stores the DNA in eukaryotic cells."
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
    "why": "Plants take in CO₂ and release O₂ during photosynthesis."
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
    "why": "Respiration breaks sugar down to release usable energy."
   },
   {
    "q": "Photosynthesis and respiration are:",
    "options": [
     "Complementary (one stores energy, one releases it)",
     "Identical",
     "Unrelated",
     "Both random"
    ],
    "a": 0,
    "why": "One stores the sun's energy in sugar; the other spends it."
   },
   {
    "q": "DNA is shaped like a:",
    "options": [
     "Double helix (twisted ladder)",
     "Flat square",
     "Single line",
     "Sphere"
    ],
    "a": 0,
    "why": "Two strands twist around each other with base-pair rungs."
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
    "q": "You resemble your parents because they passed on their:",
    "options": [
     "DNA",
     "Cells only",
     "Energy",
     "Mitochondria only"
    ],
    "a": 0,
    "why": "DNA (genes) is inherited from parents."
   },
   {
    "q": "A mutation is:",
    "options": [
     "A change in DNA creating variation",
     "A dead cell",
     "A type of organ",
     "An energy source"
    ],
    "a": 0,
    "why": "Mutations are DNA changes that produce genetic variation."
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
    "why": "Helpful traits get passed on more often over generations."
   },
   {
    "q": "What provides the raw variation that natural selection acts on?",
    "options": [
     "Random genetic differences/mutations",
     "The environment choosing",
     "Learning",
     "Practice"
    ],
    "a": 0,
    "why": "Variation is random; the environment decides which traits survive."
   },
   {
    "q": "From smallest to largest, the order is:",
    "options": [
     "Cell → tissue → organ → organism",
     "Organ → cell → tissue",
     "Organism → cell",
     "Tissue → cell → organ"
    ],
    "a": 0,
    "why": "Cells form tissues, tissues form organs, organs form organisms."
   },
   {
    "q": "All ecosystems on Earth together make the:",
    "options": [
     "Biosphere",
     "Nucleus",
     "Population",
     "Community"
    ],
    "a": 0,
    "why": "The biosphere is all life on Earth, the broadest level."
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
  "objectives": [
   "Read, write, and compare numbers using place value",
   "Add, subtract, multiply, and divide whole numbers confidently",
   "Understand fractions and convert among fractions, decimals, and percents",
   "Apply the order of operations (PEMDAS) to multi-step calculations",
   "Estimate and check answers for reasonableness"
  ],
  "intro": "Arithmetic is the foundation of all mathematics — the everyday skill of working with numbers. Long before algebra or geometry, you need to count, compare, and calculate fluently. This lesson covers place value, the four operations, fractions and how they connect to decimals and percents, the order of operations, and the habit of estimating to check your work. Master these and every later math topic becomes far easier.",
  "sections": [
   {
    "h": "Place value: what numbers mean",
    "body": "Our number system is built on place value: a digit's position tells you how much it's worth. In 3,472, the 3 means 3 thousands, the 4 means 4 hundreds, the 7 means 7 tens, and the 2 means 2 ones. Each place to the left is worth ten times the one to its right.\n\nPlace value is why 50 and 500 are so different despite sharing a 5, and it makes comparing numbers easy: line them up and compare digits from the left. The same idea extends to the right of the decimal point into tenths, hundredths, and thousandths.",
    "visual": "<svg viewBox=\"0 0 320 112\" width=\"300\" role=\"img\" aria-label=\"The number 3,472 split into thousands, hundreds, tens and ones\"><rect x=\"20\" y=\"14\" width=\"62\" height=\"44\" rx=\"4\" fill=\"rgba(79,156,240,.08)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"51\" y=\"46\" text-anchor=\"middle\" fill=\"#e7edf7\" font-size=\"25\" font-weight=\"700\" font-family=\"monospace\">3</text><text x=\"51\" y=\"75\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10.5\">thousands</text><text x=\"51\" y=\"92\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"11\">3000</text><rect x=\"92\" y=\"14\" width=\"62\" height=\"44\" rx=\"4\" fill=\"rgba(79,156,240,.08)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"123\" y=\"46\" text-anchor=\"middle\" fill=\"#e7edf7\" font-size=\"25\" font-weight=\"700\" font-family=\"monospace\">4</text><text x=\"123\" y=\"75\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10.5\">hundreds</text><text x=\"123\" y=\"92\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"11\">400</text><rect x=\"164\" y=\"14\" width=\"62\" height=\"44\" rx=\"4\" fill=\"rgba(79,156,240,.08)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"195\" y=\"46\" text-anchor=\"middle\" fill=\"#e7edf7\" font-size=\"25\" font-weight=\"700\" font-family=\"monospace\">7</text><text x=\"195\" y=\"75\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10.5\">tens</text><text x=\"195\" y=\"92\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"11\">70</text><rect x=\"236\" y=\"14\" width=\"62\" height=\"44\" rx=\"4\" fill=\"rgba(79,156,240,.08)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"267\" y=\"46\" text-anchor=\"middle\" fill=\"#e7edf7\" font-size=\"25\" font-weight=\"700\" font-family=\"monospace\">2</text><text x=\"267\" y=\"75\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10.5\">ones</text><text x=\"267\" y=\"92\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"11\">2</text></svg>",
    "caption": "Each digit's value depends on its place — each column is worth ten times the one to its right.",
    "tip": "Reading a number out loud ('three thousand, four hundred seventy-two') is really just reading its place values."
   },
   {
    "h": "The four operations",
    "body": "Four operations do most of arithmetic. Addition (+) combines amounts. Subtraction (−) takes away or finds a difference. Multiplication (×) is repeated addition — 4 × 3 means four groups of three — and is the key to working efficiently with larger numbers. Division (÷) splits into equal groups or asks 'how many times does this fit?'\n\nThese pair up as opposites: subtraction undoes addition, and division undoes multiplication. Knowing your addition facts and times tables by heart is the single best investment in math speed — everything builds on them.",
    "example": "Multiplication as repeated addition:\n4 × 3 = 3 + 3 + 3 + 3 = 12\nDivision as its reverse:\n12 ÷ 4 = 3"
   },
   {
    "h": "Fractions, decimals, and percents",
    "body": "A fraction represents part of a whole. In 3/4, the bottom number (denominator) says the whole is split into 4 equal parts, and the top (numerator) says you have 3 of them. The same amount can be written three ways — as a fraction (3/4), a decimal (0.75), or a percent (75%) — and switching between them is a core skill.\n\nTo turn a fraction into a decimal, divide the top by the bottom (3 ÷ 4 = 0.75). To turn a decimal into a percent, multiply by 100 (0.75 → 75%). Equivalent fractions like 1/2, 2/4, and 4/8 all represent the same value.",
    "example": "Convert 3/5 to a decimal and a percent:\n3 ÷ 5 = 0.6\n0.6 × 100 = 60%",
    "tip": "Percent means 'per hundred,' so 25% is just 25 out of 100 — the fraction 25/100 = 1/4."
   },
   {
    "h": "The order of operations (PEMDAS)",
    "body": "When a calculation mixes operations, the order matters — 2 + 3 × 4 is 14, not 20. Mathematicians agree on one order, remembered as PEMDAS: Parentheses first, then Exponents, then Multiplication and Division (left to right), then Addition and Subtraction (left to right).\n\nMultiplication and division share a step (do them left to right as they appear), and so do addition and subtraction. Following this order guarantees everyone gets the same answer from the same expression.",
    "example": "Evaluate 2 + 3 × 4:\n= 2 + 12     (multiply first)\n= 14\n\nEvaluate (2 + 3) × 4:\n= 5 × 4      (parentheses first)\n= 20"
   },
   {
    "h": "Estimating and checking",
    "body": "A powerful habit is to estimate before and check after you calculate. Rounding numbers for a quick approximate answer tells you roughly what to expect, so a wildly wrong result jumps out. If 48 × 21 should be about 50 × 20 = 1000, then an answer of 108 or 10,080 is obviously a mistake.\n\nChecking is often built in: verify a subtraction by adding back (if 15 − 7 = 8, then 8 + 7 should equal 15), and a division by multiplying. These quick checks catch the small slips that cause most arithmetic errors.",
    "tip": "Rounding to estimate first means you'll instantly notice if your final answer is off by a factor of ten."
   }
  ],
  "cards": [
   {
    "h": "Place value",
    "body": "A digit's worth depends on its position; each place left is 10× the one to its right."
   },
   {
    "h": "Four operations",
    "body": "Add, subtract, multiply, divide. Subtraction undoes addition; division undoes multiplication."
   },
   {
    "h": "Three forms of a part",
    "body": "Fractions, decimals, and percents are interchangeable (3/4 = 0.75 = 75%)."
   },
   {
    "h": "PEMDAS",
    "body": "Parentheses, Exponents, Multiply/Divide (L→R), Add/Subtract (L→R)."
   },
   {
    "h": "Estimate and check",
    "body": "Round to predict the size of the answer, then verify with the inverse operation."
   }
  ],
  "flash": [
   [
    "Place value",
    "The value of a digit based on its position."
   ],
   [
    "Sum",
    "The result of addition."
   ],
   [
    "Difference",
    "The result of subtraction."
   ],
   [
    "Product",
    "The result of multiplication."
   ],
   [
    "Quotient",
    "The result of division."
   ],
   [
    "Numerator",
    "The top of a fraction — how many parts you have."
   ],
   [
    "Denominator",
    "The bottom of a fraction — how many parts make a whole."
   ],
   [
    "Equivalent fractions",
    "Different fractions equal to the same value (1/2 = 2/4)."
   ],
   [
    "Percent",
    "A number out of 100 (25% = 25/100)."
   ],
   [
    "PEMDAS",
    "The order of operations."
   ],
   [
    "Estimate",
    "A quick approximate answer from rounding."
   ],
   [
    "Decimal",
    "A number written with a decimal point (0.75)."
   ]
  ],
  "quiz": [
   {
    "q": "In 507, the digit 5 is in the:",
    "options": [
     "Hundreds place",
     "Tens place",
     "Ones place",
     "Thousands place"
    ],
    "a": 0,
    "why": "Right to left: 7 ones, 0 tens, 5 hundreds."
   },
   {
    "q": "What is 4 × 3?",
    "options": [
     "12",
     "7",
     "43",
     "1"
    ],
    "a": 0,
    "why": "4 × 3 = 3 + 3 + 3 + 3 = 12."
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
   },
   {
    "q": "Write 3/4 as a decimal.",
    "options": [
     "0.75",
     "0.34",
     "0.43",
     "3.4"
    ],
    "a": 0,
    "why": "3 ÷ 4 = 0.75."
   },
   {
    "q": "Write 0.6 as a percent.",
    "options": [
     "60%",
     "6%",
     "0.6%",
     "600%"
    ],
    "a": 0,
    "why": "0.6 × 100 = 60%."
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
    "why": "2/4 simplifies to 1/2 — the same amount."
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
    "why": "Multiply first (12), then add 2 → 14."
   },
   {
    "q": "Using PEMDAS, (2 + 3) × 4 =",
    "options": [
     "20",
     "14",
     "9",
     "24"
    ],
    "a": 0,
    "why": "Parentheses first (5), then × 4 → 20."
   },
   {
    "q": "The answer to a multiplication problem is the:",
    "options": [
     "Product",
     "Sum",
     "Quotient",
     "Difference"
    ],
    "a": 0,
    "why": "Product = result of multiplying; quotient = of dividing."
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
    "q": "The bottom number of a fraction is the:",
    "options": [
     "Denominator",
     "Numerator",
     "Product",
     "Decimal"
    ],
    "a": 0,
    "why": "The denominator says how many equal parts make the whole."
   },
   {
    "q": "A quick way to catch a wrong answer is to:",
    "options": [
     "Estimate by rounding first",
     "Never check",
     "Always round down",
     "Skip it"
    ],
    "a": 0,
    "why": "An estimate tells you the expected size of the answer."
   },
   {
    "q": "To check that 15 − 7 = 8, you can:",
    "options": [
     "Add 8 + 7 and see if it's 15",
     "Subtract again",
     "Multiply",
     "Guess"
    ],
    "a": 0,
    "why": "Addition undoes subtraction: 8 + 7 = 15."
   },
   {
    "q": "Each place value to the left is worth how many times the one to its right?",
    "options": [
     "10 times",
     "2 times",
     "100 times",
     "The same"
    ],
    "a": 0,
    "why": "Our base-ten system multiplies by 10 each place left."
   },
   {
    "q": "'Percent' means:",
    "options": [
     "Per hundred",
     "Per ten",
     "Per thousand",
     "Per one"
    ],
    "a": 0,
    "why": "Percent = out of 100."
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
  "subject": "Coding",
  "level": "Grades 7-12",
  "objectives": [
   "Explain how the web works (client, server, request/response)",
   "Structure a page with HTML",
   "Style a page with CSS",
   "Add interactivity with JavaScript",
   "Understand how the three languages work together"
  ],
  "intro": "Every website you visit is built from three core technologies working together: HTML for structure, CSS for style, and JavaScript for behavior. Learning them lets you build anything from a personal page to a web app. This lesson explains how the web works and introduces each of the three languages.",
  "sections": [
   {
    "h": "How the web works",
    "body": "The web is a huge collection of pages stored on computers called servers. When you type an address or click a link, your browser (the client) sends a request over the internet to the server that holds that page. The server sends back the page's files, and your browser renders them into what you see.\n\nA web address (URL) points to a specific resource. The files that come back are mostly three kinds: HTML, CSS, and JavaScript. The browser's job is to take those text files and turn them into a living, interactive page. Understanding this request-and-response cycle is the foundation of all web development.",
    "visual": "<svg viewBox=\"0 0 252 116\" width=\"245\" role=\"img\" aria-label=\"A browser sending a request to a server and the server responding with HTML, CSS and JavaScript\"><rect x=\"12\" y=\"28\" width=\"74\" height=\"46\" rx=\"6\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"49\" y=\"55\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Browser</text><rect x=\"166\" y=\"28\" width=\"74\" height=\"46\" rx=\"6\" fill=\"rgba(107,122,152,.2)\" stroke=\"#6b7a98\" stroke-width=\"1.5\"/><text x=\"203\" y=\"55\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Server</text><text x=\"49\" y=\"86\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">(client)</text><line x1=\"88\" y1=\"46\" x2=\"159\" y2=\"46\" stroke=\"#39e3c8\" stroke-width=\"2\"/><polygon points=\"159,42 164,46 159,50\" fill=\"#39e3c8\"/><text x=\"126\" y=\"40\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">request (URL)</text><line x1=\"164\" y1=\"66\" x2=\"93\" y2=\"66\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><polygon points=\"93,62 88,66 93,70\" fill=\"#4f9cf0\"/><text x=\"126\" y=\"84\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">HTML / CSS / JS</text></svg>",
    "caption": "The browser requests a page; the server responds with HTML, CSS, and JavaScript, which the browser renders.",
    "tip": "Browser (client) requests a page → server sends HTML/CSS/JS → browser renders it. That's the web."
   },
   {
    "h": "HTML: structure",
    "body": "HTML (HyperText Markup Language) provides the structure and content of a page — its skeleton. You write HTML using tags, keywords in angle brackets that usually come in pairs wrapping content: <h1>Title</h1> makes a big heading, <p>text</p> makes a paragraph. The tags tell the browser what each piece of content is.\n\nCommon elements include headings (<h1> through <h6>), paragraphs (<p>), links (<a>), images (<img>), lists (<ul>, <li>), and containers (<div>). HTML alone produces a plain but complete page — all the content and structure, with no styling yet. It answers the question: what's on the page?",
    "example": "<h1>My Page</h1>\n<p>Welcome to my <a href=\"about.html\">site</a>.</p>",
    "tip": "HTML = structure. Tags like <h1>, <p>, <a>, <img> label what each piece of content is."
   },
   {
    "h": "CSS: style",
    "body": "CSS (Cascading Style Sheets) controls how the page looks — its appearance. If HTML is the skeleton, CSS is the skin and clothes: colors, fonts, sizes, spacing, and layout. You write CSS as rules that select elements and set properties: p { color: blue; font-size: 16px; } makes all paragraphs blue and 16 pixels.\n\nA rule has a selector (what to style) and declarations (property: value pairs). CSS is what makes the web beautiful and lets pages adapt to phones and desktops. Separating style (CSS) from structure (HTML) is a core principle — it lets you restyle an entire site by changing one stylesheet.",
    "example": "h1 { color: navy; text-align: center; }\np  { font-size: 16px; line-height: 1.5; }",
    "tip": "CSS = style. A rule is selector { property: value; } — it controls color, fonts, spacing, and layout."
   },
   {
    "h": "JavaScript: behavior",
    "body": "JavaScript makes pages interactive — it's the behavior. While HTML structures and CSS styles, JavaScript responds to what the user does and changes the page on the fly. It can react to clicks, validate a form, fetch new data, animate elements, and build full applications right in the browser.\n\nJavaScript is a full programming language with variables, conditions, loops, and functions (much like Python, with different syntax). A typical use: when a user clicks a button, JavaScript runs a function that updates the page without reloading it. It's what turns a static document into a dynamic app — the reason the modern web feels alive.",
    "example": "const btn = document.querySelector(\"button\");\nbtn.addEventListener(\"click\", () => {\n  btn.textContent = \"Clicked!\";\n});",
    "tip": "JavaScript = behavior. It reacts to user actions (like clicks) and changes the page without reloading."
   },
   {
    "h": "Putting it together",
    "body": "A real web page uses all three languages at once, each doing its own job. HTML lays out the content and structure. CSS, usually in a separate .css file, styles it. JavaScript, often in a separate .js file, adds the interactivity. The browser combines them into the final experience.\n\nThis separation of concerns — structure, style, and behavior kept apart — is a hallmark of good web development. It makes pages easier to build, read, and maintain: a designer can tweak the CSS without touching the logic, and a programmer can change the JavaScript without breaking the layout. Master the three and how they cooperate, and you can build for the entire web.",
    "tip": "HTML (structure) + CSS (style) + JavaScript (behavior), kept separate, combine into every modern web page."
   }
  ],
  "cards": [
   {
    "h": "How the web works",
    "body": "Browser (client) requests a URL; the server responds with HTML/CSS/JS; the browser renders the page."
   },
   {
    "h": "HTML",
    "body": "Structure and content via tags: <h1>, <p>, <a>, <img>, <ul>. Answers 'what's on the page?'"
   },
   {
    "h": "CSS",
    "body": "Style: colors, fonts, spacing, layout. Rules are selector { property: value; }."
   },
   {
    "h": "JavaScript",
    "body": "Behavior: reacts to user actions (clicks, input) and changes the page without reloading."
   },
   {
    "h": "Together",
    "body": "HTML + CSS + JS each do one job, kept separate — structure, style, behavior."
   }
  ],
  "flash": [
   [
    "HTML",
    "The language for a page's structure and content."
   ],
   [
    "CSS",
    "The language for a page's style and appearance."
   ],
   [
    "JavaScript",
    "The language for a page's behavior and interactivity."
   ],
   [
    "Tag",
    "A keyword in angle brackets, like <p>, that marks content."
   ],
   [
    "Element",
    "A piece of a page defined by tags (e.g., a paragraph)."
   ],
   [
    "Server",
    "A computer that stores and sends web pages."
   ],
   [
    "Client",
    "The browser that requests and displays pages."
   ],
   [
    "Browser",
    "Software that renders web pages (Chrome, Firefox)."
   ],
   [
    "URL",
    "A web address pointing to a resource."
   ],
   [
    "Selector",
    "The part of a CSS rule that chooses what to style."
   ],
   [
    "Event",
    "A user action (like a click) that JavaScript can respond to."
   ],
   [
    "Attribute",
    "Extra info on an HTML tag, like href on a link."
   ]
  ],
  "quiz": [
   {
    "q": "The three core web languages are:",
    "options": [
     "HTML, CSS, JavaScript",
     "Python, Java, C++",
     "Word, Excel, PDF",
     "HTTP, FTP, SSH"
    ],
    "a": 0,
    "why": "Structure, style, and behavior."
   },
   {
    "q": "When you open a page, your browser sends a:",
    "options": [
     "Request to a server",
     "Virus",
     "Payment",
     "Photo"
    ],
    "a": 0,
    "why": "The client requests; the server responds."
   },
   {
    "q": "A computer that stores and sends web pages is a:",
    "options": [
     "Server",
     "Printer",
     "Router cable",
     "Keyboard"
    ],
    "a": 0,
    "why": "Servers host and send pages."
   },
   {
    "q": "HTML is responsible for a page's:",
    "options": [
     "Structure and content",
     "Colors only",
     "Click behavior",
     "Server location"
    ],
    "a": 0,
    "why": "HTML is the skeleton — structure and content."
   },
   {
    "q": "Which is an HTML tag for a paragraph?",
    "options": [
     "<p>",
     "{p}",
     "(p)",
     "[p]"
    ],
    "a": 0,
    "why": "Tags use angle brackets, like <p>."
   },
   {
    "q": "CSS is responsible for a page's:",
    "options": [
     "Style and appearance",
     "Content",
     "Server",
     "Database"
    ],
    "a": 0,
    "why": "CSS controls colors, fonts, spacing, and layout."
   },
   {
    "q": "A CSS rule is written as:",
    "options": [
     "selector { property: value; }",
     "if (x) then y",
     "print(x)",
     "<style=blue>"
    ],
    "a": 0,
    "why": "Selector plus property:value declarations."
   },
   {
    "q": "Which CSS makes paragraphs blue?",
    "options": [
     "p { color: blue; }",
     "<p blue>",
     "color.p = blue",
     "p = blue"
    ],
    "a": 0,
    "why": "Select p, set the color property to blue."
   },
   {
    "q": "JavaScript is responsible for a page's:",
    "options": [
     "Behavior and interactivity",
     "Structure",
     "Colors only",
     "Hosting"
    ],
    "a": 0,
    "why": "JS reacts to actions and changes the page."
   },
   {
    "q": "A user clicking a button is an example of a(n):",
    "options": [
     "Event",
     "Tag",
     "Selector",
     "Server"
    ],
    "a": 0,
    "why": "Events are user actions JavaScript can respond to."
   },
   {
    "q": "JavaScript can change the page:",
    "options": [
     "Without reloading it",
     "Only by reloading",
     "Never",
     "Only on the server"
    ],
    "a": 0,
    "why": "JS updates the page dynamically in the browser."
   },
   {
    "q": "In <a href=\"about.html\">, href is a(n):",
    "options": [
     "Attribute",
     "Tag",
     "Selector",
     "Loop"
    ],
    "a": 0,
    "why": "Attributes add info to a tag, like a link's destination."
   },
   {
    "q": "A web address pointing to a resource is a:",
    "options": [
     "URL",
     "CPU",
     "RAM",
     "GIF"
    ],
    "a": 0,
    "why": "URL = the address of a web resource."
   },
   {
    "q": "Keeping structure, style, and behavior in separate files is called:",
    "options": [
     "Separation of concerns",
     "A syntax error",
     "Compiling",
     "Hosting"
    ],
    "a": 0,
    "why": "It makes pages easier to build and maintain."
   },
   {
    "q": "The software that renders web pages is the:",
    "options": [
     "Browser",
     "Server",
     "Database",
     "Compiler"
    ],
    "a": 0,
    "why": "The browser turns HTML/CSS/JS into what you see."
   }
  ]
 },
 "english-writing-composition": {
  "title": "Writing & Composition",
  "subject": "English",
  "level": "Grades 5-12",
  "objectives": [
   "Explain the writing process: prewrite, draft, revise, edit, publish",
   "Structure a paragraph with a topic sentence, support, and a close",
   "Organize an essay with an introduction, body, and conclusion",
   "Write for different purposes: narrative, informative, persuasive",
   "Revise and edit to make writing clear and strong"
  ],
  "intro": "Writing is how you turn thoughts into words others can understand — a skill you'll use in school, work, and life. Good writing isn't a gift reserved for a few; it's a process anyone can learn, with clear steps and structures. This lesson walks through the writing process, how to build paragraphs and essays, and how to write for different purposes.",
  "sections": [
   {
    "h": "The writing process",
    "body": "Good writing almost never happens in one pass. Writers follow a process with five stages. First, prewriting: brainstorming ideas, choosing a topic, and planning. Second, drafting: getting your ideas down without worrying about perfection. Third, revising: reshaping the content — adding, cutting, and reordering so it says what you mean.\n\nFourth, editing: fixing grammar, spelling, and punctuation. Fifth, publishing: sharing the finished piece. The key insight is that these stages are separate jobs — trying to write perfectly on the first try usually freezes you. Get your ideas down first; fix them later.",
    "visual": "<svg viewBox=\"0 0 262 64\" width=\"250\" role=\"img\" aria-label=\"The writing process: prewrite, draft, revise, edit, publish\"><rect x=\"4\" y=\"16\" width=\"44\" height=\"32\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.4\"/><text x=\"26\" y=\"36\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Prewrite</text><rect x=\"54\" y=\"16\" width=\"44\" height=\"32\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.4\"/><text x=\"76\" y=\"36\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Draft</text><rect x=\"104\" y=\"16\" width=\"44\" height=\"32\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.4\"/><text x=\"126\" y=\"36\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Revise</text><rect x=\"154\" y=\"16\" width=\"44\" height=\"32\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.4\"/><text x=\"176\" y=\"36\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Edit</text><rect x=\"204\" y=\"16\" width=\"44\" height=\"32\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.4\"/><text x=\"226\" y=\"36\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Publish</text><line x1=\"48\" y1=\"32\" x2=\"53\" y2=\"32\" stroke=\"#39e3c8\" stroke-width=\"1.8\"/><polygon points=\"53,29 58,32 53,35\" fill=\"#39e3c8\"/><line x1=\"98\" y1=\"32\" x2=\"103\" y2=\"32\" stroke=\"#39e3c8\" stroke-width=\"1.8\"/><polygon points=\"103,29 108,32 103,35\" fill=\"#39e3c8\"/><line x1=\"148\" y1=\"32\" x2=\"153\" y2=\"32\" stroke=\"#39e3c8\" stroke-width=\"1.8\"/><polygon points=\"153,29 158,32 153,35\" fill=\"#39e3c8\"/><line x1=\"198\" y1=\"32\" x2=\"203\" y2=\"32\" stroke=\"#39e3c8\" stroke-width=\"1.8\"/><polygon points=\"203,29 208,32 203,35\" fill=\"#39e3c8\"/></svg>",
    "caption": "The five stages of writing — each a separate job, done in order.",
    "tip": "Don't try to write and edit at once. Draft messily first, then revise and edit — they're different jobs."
   },
   {
    "h": "Building a paragraph",
    "body": "The paragraph is the basic building block of writing. A strong paragraph focuses on one main idea, stated in a topic sentence (usually first). The sentences that follow are supporting details — facts, examples, or reasons that back up or explain that main idea.\n\nA good paragraph often ends with a concluding or transition sentence that wraps up the point or leads into the next. Think of it as a mini-essay: one clear idea, developed with support, tied together. If a paragraph wanders into a second big idea, that's a sign it should be split in two.",
    "example": "Topic sentence: 'Dogs make great pets.' Support: loyal, easy to train, good company. Close: 'That's why dogs are so popular.'",
    "tip": "One paragraph = one main idea, stated in a topic sentence and backed by details."
   },
   {
    "h": "Structuring an essay",
    "body": "An essay scales the paragraph up. It has three parts. The introduction opens with a hook to grab attention and states the main point in a thesis — the one sentence that says what the whole essay will argue or explain. The body is several paragraphs, each developing one supporting point with details and examples.\n\nThe conclusion restates the main point in fresh words and leaves the reader with a final thought. A classic structure is the five-paragraph essay: one intro, three body paragraphs, one conclusion. It's a reliable frame for beginners — and the same logic (tell them, show them, remind them) scales up to any length.",
    "tip": "Essay = introduction (with a thesis) + body paragraphs (one point each) + conclusion."
   },
   {
    "h": "Writing for different purposes",
    "body": "Why you're writing shapes how you write. Narrative writing tells a story, real or imagined, usually in time order with characters and a plot. Informative (or expository) writing explains or teaches — reports, how-tos, explanations — and aims to be clear and organized, not dramatic.\n\nPersuasive (or argumentative) writing tries to convince the reader of a position, using reasons and evidence to support a claim. Knowing your purpose, and your audience, guides every choice: a text to a friend, a school essay, and a job cover letter call for very different tones even when the topic is the same.",
    "example": "Narrative: 'The day I got lost...' Informative: 'How volcanoes form.' Persuasive: 'Our school should start later.'",
    "tip": "Decide your purpose (tell a story, explain, or persuade) and audience first — they shape everything else."
   },
   {
    "h": "Revising and editing",
    "body": "First drafts are supposed to be rough; the magic is in revision. When revising, read for the big things: Is the main idea clear? Is every paragraph on topic? Does it flow in a logical order? Is anything missing or repeated? Don't be afraid to cut — removing weak parts almost always makes writing stronger.\n\nEditing comes last and is about correctness: spelling, grammar, punctuation, and word choice. Reading aloud catches awkward sentences and errors your eye skips. Good writers also seek feedback — a fresh reader spots confusion the writer can't see. Writing is rewriting; the willingness to revise is what separates strong writing from weak.",
    "tip": "Revise for meaning and flow first; edit for correctness last. Cutting weak parts makes writing stronger."
   }
  ],
  "cards": [
   {
    "h": "Writing process",
    "body": "Prewrite → draft → revise → edit → publish. Separate jobs — don't do them all at once."
   },
   {
    "h": "Paragraph",
    "body": "One main idea: topic sentence + supporting details + a closing/transition."
   },
   {
    "h": "Essay",
    "body": "Introduction (hook + thesis) + body paragraphs (one point each) + conclusion."
   },
   {
    "h": "Purposes",
    "body": "Narrative (story), informative (explain), persuasive (convince) — plus knowing your audience."
   },
   {
    "h": "Revise & edit",
    "body": "Revise for meaning and flow first; edit for correctness last; seek feedback."
   }
  ],
  "flash": [
   [
    "Prewriting",
    "Brainstorming and planning before you draft."
   ],
   [
    "Draft",
    "A first, rough version getting ideas down."
   ],
   [
    "Revise",
    "Reshaping content — adding, cutting, reordering."
   ],
   [
    "Edit",
    "Fixing grammar, spelling, and punctuation."
   ],
   [
    "Topic sentence",
    "The sentence stating a paragraph's main idea."
   ],
   [
    "Supporting detail",
    "A fact, example, or reason that backs the main idea."
   ],
   [
    "Thesis",
    "The one sentence stating an essay's main point."
   ],
   [
    "Introduction",
    "The opening that hooks the reader and gives the thesis."
   ],
   [
    "Conclusion",
    "The closing that restates the point and ends the piece."
   ],
   [
    "Narrative writing",
    "Writing that tells a story."
   ],
   [
    "Persuasive writing",
    "Writing that argues a position with reasons."
   ],
   [
    "Audience",
    "The readers you are writing for."
   ]
  ],
  "quiz": [
   {
    "q": "The five stages of writing, in order, are:",
    "options": [
     "Prewrite, draft, revise, edit, publish",
     "Edit, draft, prewrite",
     "Publish, revise, draft",
     "Draft, publish, prewrite"
    ],
    "a": 0,
    "why": "Plan, draft, reshape, correct, then share."
   },
   {
    "q": "Why keep drafting and editing separate?",
    "options": [
     "Trying to perfect a first draft freezes you",
     "Editing is unimportant",
     "Drafts must be perfect",
     "They're the same step"
    ],
    "a": 0,
    "why": "Get ideas down first; fix them later."
   },
   {
    "q": "A paragraph's main idea is stated in its:",
    "options": [
     "Topic sentence",
     "Last word",
     "Title",
     "Thesis"
    ],
    "a": 0,
    "why": "The topic sentence states the paragraph's one main idea."
   },
   {
    "q": "Facts and examples that back the main idea are:",
    "options": [
     "Supporting details",
     "Topic sentences",
     "Theses",
     "Hooks"
    ],
    "a": 0,
    "why": "Supporting details develop the main idea."
   },
   {
    "q": "A paragraph should focus on:",
    "options": [
     "One main idea",
     "As many ideas as possible",
     "No clear idea",
     "Only questions"
    ],
    "a": 0,
    "why": "One idea per paragraph; split it if a second big idea appears."
   },
   {
    "q": "The one sentence stating an essay's main point is the:",
    "options": [
     "Thesis",
     "Topic sentence",
     "Conclusion",
     "Hook"
    ],
    "a": 0,
    "why": "The thesis is the essay's central claim."
   },
   {
    "q": "A classic essay has an introduction, a body, and a:",
    "options": [
     "Conclusion",
     "Second thesis",
     "Title page",
     "Quiz"
    ],
    "a": 0,
    "why": "Intro + body + conclusion is the standard frame."
   },
   {
    "q": "Writing that tells a story is:",
    "options": [
     "Narrative",
     "Persuasive",
     "Informative",
     "A thesis"
    ],
    "a": 0,
    "why": "Narrative writing tells a story with characters and plot."
   },
   {
    "q": "Writing that explains or teaches is:",
    "options": [
     "Informative",
     "Narrative",
     "Persuasive",
     "Poetry"
    ],
    "a": 0,
    "why": "Informative (expository) writing explains clearly."
   },
   {
    "q": "Writing that tries to convince you of a position is:",
    "options": [
     "Persuasive",
     "Narrative",
     "Informative",
     "A summary"
    ],
    "a": 0,
    "why": "Persuasive writing argues a claim with reasons and evidence."
   },
   {
    "q": "Besides purpose, what else shapes every writing choice?",
    "options": [
     "The audience",
     "The paper size",
     "The font only",
     "The weather"
    ],
    "a": 0,
    "why": "Who will read it shapes tone and word choice."
   },
   {
    "q": "Revising mainly fixes:",
    "options": [
     "Meaning, flow, and content",
     "Only commas",
     "Only spelling",
     "The title"
    ],
    "a": 0,
    "why": "Revision reshapes content; editing handles correctness."
   },
   {
    "q": "Editing mainly fixes:",
    "options": [
     "Grammar, spelling, punctuation",
     "Big ideas",
     "The thesis",
     "The audience"
    ],
    "a": 0,
    "why": "Editing is about correctness at the end."
   },
   {
    "q": "Cutting weak parts usually makes writing:",
    "options": [
     "Stronger",
     "Longer",
     "Worse",
     "Unreadable"
    ],
    "a": 0,
    "why": "Removing filler sharpens writing."
   },
   {
    "q": "A simple trick to catch awkward sentences is to:",
    "options": [
     "Read it aloud",
     "Write faster",
     "Add more words",
     "Ignore it"
    ],
    "a": 0,
    "why": "Your ear catches what your eye skips."
   }
  ]
 },
 "social-civics-government": {
  "title": "Civics & Government",
  "subject": "Social Studies",
  "level": "Grades 6-12",
  "objectives": [
   "Explain what government is and why societies have it",
   "Describe the US system: Constitution, federalism, three branches",
   "Explain the separation of powers and checks and balances",
   "Describe citizens' rights and responsibilities",
   "Explain how citizens participate in a democracy"
  ],
  "intro": "Civics is the study of how government works and what it means to be a citizen. In a democracy, the government answers to the people — which means understanding it is part of your power. This lesson covers why we have government, how the US system is built, and how you take part in it.",
  "sections": [
   {
    "h": "Why we have government",
    "body": "A government is the system a society uses to make and enforce rules, provide services, and settle disputes. Without one, there would be no laws, no courts, no roads or schools funded in common, and no protection of rights — just whoever is strongest. Government exists to bring order, security, and shared services to a community.\n\nGovernments come in different forms. In a democracy, power ultimately rests with the people, who govern through elected representatives. In an autocracy, one person or small group holds power. The United States is a democratic republic — the people elect leaders to represent them and govern according to a constitution.",
    "tip": "Government makes and enforces rules; in a democracy, its power comes from the people."
   },
   {
    "h": "The Constitution and federalism",
    "body": "The US Constitution is the supreme law of the land — the framework for the entire government, written in 1787. It can be changed only by amendment, and all other laws must agree with it. Its first ten amendments, the Bill of Rights, guarantee freedoms like speech, religion, and a fair trial.\n\nThe Constitution also sets up federalism: power is divided between the national (federal) government and the state governments. Some powers belong to the federal government (like printing money and national defense), some to the states (like running schools and local police), and some are shared. This division keeps any single level of government from holding all the power.",
    "tip": "The Constitution is the supreme law; federalism splits power between the national and state governments."
   },
   {
    "h": "The three branches",
    "body": "To prevent any one person or group from gaining too much power, the Constitution divides the federal government into three branches. The legislative branch (Congress — the House and Senate) makes the laws. The executive branch (the President and agencies) carries out and enforces the laws. The judicial branch (the courts, topped by the Supreme Court) interprets the laws and decides if they follow the Constitution.\n\nEach branch has its own role, but they overlap enough to watch one another. This separation of powers is a cornerstone of American government, designed by founders who feared putting too much power in any single set of hands.",
    "visual": "<svg viewBox=\"0 0 252 124\" width=\"245\" role=\"img\" aria-label=\"The three branches of the US government: legislative, executive, and judicial\"><rect x=\"86\" y=\"6\" width=\"80\" height=\"26\" rx=\"6\" fill=\"rgba(107,122,152,.2)\" stroke=\"#6b7a98\" stroke-width=\"1.5\"/><text x=\"126\" y=\"23\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9.5\">U.S. Government</text><line x1=\"100\" y1=\"32\" x2=\"43\" y2=\"56\" stroke=\"#6b7a98\" stroke-width=\"1.2\"/><line x1=\"126\" y1=\"32\" x2=\"126\" y2=\"56\" stroke=\"#6b7a98\" stroke-width=\"1.2\"/><line x1=\"152\" y1=\"32\" x2=\"209\" y2=\"56\" stroke=\"#6b7a98\" stroke-width=\"1.2\"/><rect x=\"6\" y=\"58\" width=\"74\" height=\"54\" rx=\"6\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"43\" y=\"74\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Legislative</text><text x=\"43\" y=\"87\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">(Congress)</text><text x=\"43\" y=\"100\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">MAKES laws</text><rect x=\"89\" y=\"58\" width=\"74\" height=\"54\" rx=\"6\" fill=\"rgba(240,90,90,.16)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><text x=\"126\" y=\"74\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Executive</text><text x=\"126\" y=\"87\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">(President)</text><text x=\"126\" y=\"100\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">ENFORCES laws</text><rect x=\"172\" y=\"58\" width=\"74\" height=\"54\" rx=\"6\" fill=\"rgba(57,227,200,.14)\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"209\" y=\"74\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">Judicial</text><text x=\"209\" y=\"87\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">(Courts)</text><text x=\"209\" y=\"100\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\">INTERPRETS laws</text></svg>",
    "caption": "The three branches: Congress makes laws, the President enforces them, the courts interpret them.",
    "example": "Legislative (Congress) makes laws → Executive (President) enforces them → Judicial (courts) interprets them.",
    "tip": "Legislative makes laws, Executive enforces them, Judicial interprets them — three separate branches."
   },
   {
    "h": "Checks and balances",
    "body": "The three branches don't just have separate jobs — they also check each other's power, a system called checks and balances. Congress passes a law, but the President can veto it; Congress can override that veto with enough votes. The President appoints judges, but the Senate must approve them. The courts can strike down a law or action that violates the Constitution.\n\nThis constant tug-of-war is intentional. It makes government slower, but it guards against tyranny by ensuring no branch can act entirely on its own. Each branch has tools to limit the others, keeping power balanced among all three.",
    "tip": "Checks and balances = each branch can limit the others (veto, override, approve, strike down)."
   },
   {
    "h": "Citizenship: rights and responsibilities",
    "body": "Citizens have both rights and responsibilities. Rights are freedoms the government protects — speech, religion, assembly, a fair trial, and equal protection under the law. These are guaranteed mainly by the Bill of Rights and later amendments that expanded them to more people.\n\nWith rights come responsibilities: obeying the law, paying taxes, serving on juries, and staying informed. Voting is the most powerful one — it's how citizens choose their leaders and shape policy. A healthy democracy depends on citizens who know their rights, meet their responsibilities, and actually take part rather than leaving decisions to others.",
    "tip": "Rights (speech, fair trial, voting) come with responsibilities (obey laws, pay taxes, serve, stay informed, vote)."
   },
   {
    "h": "Taking part in democracy",
    "body": "Democracy only works when people participate. The clearest way is voting — in national, state, and local elections, where your vote helps pick who makes decisions that affect your daily life. But participation goes further: contacting elected officials, peaceful protest, volunteering, serving on juries, and simply staying informed about the issues.\n\nEven young people who can't yet vote can take part — by learning the issues, joining community efforts, and making their voices heard. The founders built a government meant to answer to its citizens; it stays that way only when citizens show up. Your participation, however small it feels, is how a democracy holds its shape."
   }
  ],
  "cards": [
   {
    "h": "Why government",
    "body": "It makes and enforces rules and provides shared services; a democracy's power comes from the people."
   },
   {
    "h": "Constitution & federalism",
    "body": "The Constitution is the supreme law; federalism splits power between national and state governments."
   },
   {
    "h": "Three branches",
    "body": "Legislative makes laws, Executive enforces them, Judicial interprets them (separation of powers)."
   },
   {
    "h": "Checks & balances",
    "body": "Each branch limits the others — veto, override, approval of appointments, striking down laws."
   },
   {
    "h": "Citizenship",
    "body": "Rights (speech, fair trial) + responsibilities (obey laws, pay taxes, serve, vote, stay informed)."
   }
  ],
  "flash": [
   [
    "Government",
    "The system a society uses to make and enforce rules and provide services."
   ],
   [
    "Democracy",
    "A system where power rests with the people."
   ],
   [
    "Republic",
    "A system where people elect representatives to govern."
   ],
   [
    "Constitution",
    "The supreme law framing the US government."
   ],
   [
    "Bill of Rights",
    "The first 10 amendments guaranteeing freedoms."
   ],
   [
    "Federalism",
    "Dividing power between national and state governments."
   ],
   [
    "Legislative branch",
    "Congress — makes the laws."
   ],
   [
    "Executive branch",
    "The President and agencies — enforce the laws."
   ],
   [
    "Judicial branch",
    "The courts — interpret the laws."
   ],
   [
    "Separation of powers",
    "Splitting government into branches with distinct roles."
   ],
   [
    "Checks and balances",
    "Each branch's power to limit the others."
   ],
   [
    "Citizen",
    "A member of a nation with rights and responsibilities."
   ]
  ],
  "quiz": [
   {
    "q": "A government exists mainly to:",
    "options": [
     "Make and enforce rules and provide services",
     "Win elections only",
     "Entertain people",
     "Print books"
    ],
    "a": 0,
    "why": "It brings order, services, and protection to a society."
   },
   {
    "q": "In a democracy, power ultimately rests with:",
    "options": [
     "The people",
     "One king",
     "The army",
     "Corporations"
    ],
    "a": 0,
    "why": "Democratic power comes from the people, usually via elected reps."
   },
   {
    "q": "The supreme law of the United States is the:",
    "options": [
     "Constitution",
     "Declaration of Independence",
     "Mayflower Compact",
     "Gettysburg Address"
    ],
    "a": 0,
    "why": "All other laws must agree with the Constitution."
   },
   {
    "q": "Dividing power between national and state governments is:",
    "options": [
     "Federalism",
     "A veto",
     "A monarchy",
     "Impeachment"
    ],
    "a": 0,
    "why": "Federalism splits power across levels of government."
   },
   {
    "q": "Which branch makes the laws?",
    "options": [
     "Legislative (Congress)",
     "Executive",
     "Judicial",
     "Military"
    ],
    "a": 0,
    "why": "Congress — the House and Senate — makes laws."
   },
   {
    "q": "Which branch enforces the laws?",
    "options": [
     "Executive (President)",
     "Legislative",
     "Judicial",
     "State"
    ],
    "a": 0,
    "why": "The President and agencies carry out and enforce laws."
   },
   {
    "q": "Which branch interprets the laws?",
    "options": [
     "Judicial (courts)",
     "Legislative",
     "Executive",
     "Press"
    ],
    "a": 0,
    "why": "The courts, topped by the Supreme Court, interpret laws."
   },
   {
    "q": "Dividing government into three branches is called:",
    "options": [
     "Separation of powers",
     "A monopoly",
     "A dictatorship",
     "Federal aid"
    ],
    "a": 0,
    "why": "Separate branches prevent any one from gaining too much power."
   },
   {
    "q": "When the President rejects a bill from Congress, it's a:",
    "options": [
     "Veto",
     "Vote",
     "Trial",
     "Tax"
    ],
    "a": 0,
    "why": "A veto is the executive check on new laws."
   },
   {
    "q": "The system where each branch limits the others is:",
    "options": [
     "Checks and balances",
     "Federalism",
     "Citizenship",
     "The census"
    ],
    "a": 0,
    "why": "Checks and balances keep power among the three branches balanced."
   },
   {
    "q": "Which is a right protected by the Bill of Rights?",
    "options": [
     "Freedom of speech",
     "Free cars",
     "Guaranteed wealth",
     "Unlimited power"
    ],
    "a": 0,
    "why": "Speech, religion, assembly, and a fair trial are protected rights."
   },
   {
    "q": "Which is a responsibility of citizens?",
    "options": [
     "Obeying laws and paying taxes",
     "Ignoring all rules",
     "Never voting",
     "Avoiding juries"
    ],
    "a": 0,
    "why": "Responsibilities include obeying laws, taxes, juries, and staying informed."
   },
   {
    "q": "The most powerful way most citizens shape government is by:",
    "options": [
     "Voting",
     "Watching TV",
     "Staying silent",
     "Moving away"
    ],
    "a": 0,
    "why": "Voting chooses leaders and shapes policy."
   },
   {
    "q": "Checks and balances make government:",
    "options": [
     "Slower but safer from tyranny",
     "Faster and unlimited",
     "Run by one branch",
     "Powerless"
    ],
    "a": 0,
    "why": "The tug-of-war guards against any branch acting alone."
   },
   {
    "q": "A democracy stays healthy when citizens:",
    "options": [
     "Participate and stay informed",
     "Leave all decisions to others",
     "Never vote",
     "Ignore the issues"
    ],
    "a": 0,
    "why": "Participation keeps the government answering to the people."
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
  "objectives": [
   "Work with integers (negative numbers) and apply the rules of signs",
   "Convert fluently among fractions, decimals, and percents, and find a percent of a number",
   "Set up and solve ratios and proportions",
   "Evaluate expressions and solve one- and two-step equations",
   "Plot and read points on the coordinate plane"
  ],
  "intro": "Pre-algebra is the bridge from arithmetic to algebra. It keeps the numbers you know but adds the tools algebra depends on: negative numbers, ratios and proportions, variables and expressions, and the coordinate plane. Get comfortable here and the jump to algebra feels natural instead of sudden. This lesson covers integers and signs, converting between number forms, proportional reasoning, your first equations, and graphing points.",
  "sections": [
   {
    "h": "Integers and negative numbers",
    "body": "Arithmetic mostly deals with positive numbers, but the real world needs negatives too — temperatures below zero, debts, elevations below sea level. Integers are the whole numbers together with their negatives and zero: …, −2, −1, 0, 1, 2, …\n\nOn a number line, negatives sit to the left of zero and get smaller as you go left (−5 is less than −2). Adding a positive moves right; adding a negative moves left. Subtracting a negative is the surprising one — it moves right, because 'taking away a debt' is like adding: 5 − (−3) = 5 + 3 = 8.",
    "visual": "<svg viewBox=\"0 0 320 64\" width=\"300\" role=\"img\" aria-label=\"A number line from negative 5 to positive 5 with zero in the middle\"><line x1=\"18\" y1=\"30\" x2=\"302\" y2=\"30\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><polygon points=\"302,30 293,25 293,35\" fill=\"#4f9cf0\"/><polygon points=\"18,30 27,25 27,35\" fill=\"#4f9cf0\"/><line x1=\"30\" y1=\"24\" x2=\"30\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"30\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">-5</text><line x1=\"56\" y1=\"24\" x2=\"56\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"56\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">-4</text><line x1=\"82\" y1=\"24\" x2=\"82\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"82\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">-3</text><line x1=\"108\" y1=\"24\" x2=\"108\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"108\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">-2</text><line x1=\"134\" y1=\"24\" x2=\"134\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"134\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">-1</text><line x1=\"160\" y1=\"24\" x2=\"160\" y2=\"36\" stroke=\"#39e3c8\" stroke-width=\"2.2\"/><text x=\"160\" y=\"54\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"11\" font-family=\"monospace\">0</text><line x1=\"186\" y1=\"24\" x2=\"186\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"186\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">1</text><line x1=\"212\" y1=\"24\" x2=\"212\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"212\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">2</text><line x1=\"238\" y1=\"24\" x2=\"238\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"238\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">3</text><line x1=\"264\" y1=\"24\" x2=\"264\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"264\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">4</text><line x1=\"290\" y1=\"24\" x2=\"290\" y2=\"36\" stroke=\"#6b7a98\" stroke-width=\"1.3\"/><text x=\"290\" y=\"54\" text-anchor=\"middle\" fill=\"#6b7a98\" font-size=\"11\" font-family=\"monospace\">5</text></svg>",
    "caption": "On the number line, negatives are left of zero; moving right increases, moving left decreases.",
    "tip": "Subtracting a negative is the same as adding a positive: a − (−b) = a + b."
   },
   {
    "h": "The rules of signs",
    "body": "Multiplying and dividing with negatives follows two simple rules. When the two numbers have the SAME sign, the result is positive. When they have DIFFERENT signs, the result is negative. So (−4)(−2) = 8, but (−4)(2) = −8, and the same holds for division.\n\nA helpful way to remember: a negative 'flips' direction, so two negatives flip twice — back to positive. Keeping signs straight is one of the main things that makes pre-algebra feel different from basic arithmetic, so practice it until it's automatic.",
    "example": "(−6) × (−3) = 18   (same signs → positive)\n(−6) × 3 = −18      (different signs → negative)\n(−20) ÷ 5 = −4      (different signs → negative)"
   },
   {
    "h": "Fractions, decimals, and percents",
    "body": "Pre-algebra leans heavily on moving between the three ways of writing a part: fractions, decimals, and percents. 1/2 = 0.5 = 50% are all the same value, and fluency here is essential because algebra and everyday life (sales, tips, interest) use all three interchangeably.\n\nConvert a fraction to a decimal by dividing top by bottom; a decimal to a percent by multiplying by 100; and a percent to a fraction by writing it over 100 and simplifying. Finding a percent of a number is just multiplication: 20% of 80 is 0.20 × 80 = 16.",
    "example": "What is 15% of 60?\n15% = 0.15\n0.15 × 60 = 9"
   },
   {
    "h": "Ratios and proportions",
    "body": "A ratio compares two quantities — 2 cups of flour to 3 cups of sugar is the ratio 2:3. A proportion states that two ratios are equal, and it's one of the most useful tools in all of math because it lets you scale recipes, read maps, convert units, and solve 'if this, then how much of that' problems.\n\nYou solve a proportion by cross-multiplying: if 2/3 = x/12, multiply across to get 3x = 24, so x = 8. Set up the ratio carefully so matching quantities sit in the same positions.",
    "example": "A recipe uses 2 eggs for 6 pancakes. How many eggs for 15 pancakes?\n2/6 = x/15\n6x = 30\nx = 5 eggs",
    "tip": "Keep the same kind of quantity in the same spot (eggs over pancakes on both sides) when you set up a proportion."
   },
   {
    "h": "Variables, expressions, and first equations",
    "body": "Pre-algebra introduces the star of algebra: the variable, a letter standing for an unknown number. An expression like 2n + 5 combines variables, numbers, and operations. You evaluate it by substituting a value (if n = 4, 2n + 5 = 13).\n\nAn equation sets two expressions equal and can be solved. Using the balance rule — do the same to both sides — you undo operations to isolate the variable. This is the doorway to algebra: once you can solve 2n + 5 = 13, you're doing algebra.",
    "example": "Solve 2n + 5 = 13:\n2n = 8      (subtract 5 from both sides)\nn = 4       (divide both sides by 2)"
   },
   {
    "h": "The coordinate plane",
    "body": "Many ideas in algebra are visual, and the coordinate plane is where you see them. It's formed by a horizontal number line (the x-axis) and a vertical one (the y-axis) crossing at the origin, (0, 0). Any point is named by an ordered pair (x, y): x tells how far right or left, y how far up or down.\n\nTo plot (3, 2), start at the origin, go 3 right, then 2 up. To plot (−2, 1), go 2 left and 1 up. This grid is how equations become graphs, turning algebra into pictures you can reason about.",
    "visual": "<svg viewBox=\"0 0 210 210\" width=\"200\" role=\"img\" aria-label=\"A coordinate plane with the point 3 comma 2 plotted\"><line x1=\"35\" y1=\"15\" x2=\"35\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"35\" x2=\"195\" y2=\"35\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"55\" y1=\"15\" x2=\"55\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"55\" x2=\"195\" y2=\"55\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"75\" y1=\"15\" x2=\"75\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"75\" x2=\"195\" y2=\"75\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"95\" y1=\"15\" x2=\"95\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"95\" x2=\"195\" y2=\"95\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"115\" y1=\"15\" x2=\"115\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"115\" x2=\"195\" y2=\"115\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"135\" y1=\"15\" x2=\"135\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"135\" x2=\"195\" y2=\"135\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"155\" y1=\"15\" x2=\"155\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"155\" x2=\"195\" y2=\"155\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"175\" y1=\"15\" x2=\"175\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"175\" x2=\"195\" y2=\"175\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"195\" y1=\"15\" x2=\"195\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"195\" x2=\"195\" y2=\"195\" stroke=\"#1f2a40\" stroke-width=\"1\"/><line x1=\"15\" y1=\"105\" x2=\"195\" y2=\"105\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"105\" y1=\"195\" x2=\"105\" y2=\"15\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><polygon points=\"195,105 187,101 187,109\" fill=\"#4f9cf0\"/><polygon points=\"105,15 101,23 109,23\" fill=\"#4f9cf0\"/><line x1=\"105\" y1=\"65\" x2=\"165\" y2=\"65\" stroke=\"#e8b84b\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"165\" y1=\"105\" x2=\"165\" y2=\"65\" stroke=\"#e8b84b\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><circle cx=\"165\" cy=\"65\" r=\"4.5\" fill=\"#e8b84b\"/><text x=\"172\" y=\"59\" fill=\"#e7edf7\" font-size=\"12\" font-family=\"monospace\">(3, 2)</text><text x=\"199\" y=\"109\" fill=\"#9aa6c0\" font-size=\"11\">x</text><text x=\"99\" y=\"14\" fill=\"#9aa6c0\" font-size=\"11\">y</text></svg>",
    "caption": "A point (x, y): go x right/left from the origin, then y up/down. Here, (3, 2).",
    "tip": "Order matters: (3, 2) and (2, 3) are different points. Always x first, then y."
   }
  ],
  "cards": [
   {
    "h": "Integers & signs",
    "body": "Integers include negatives. Same signs multiply/divide to positive; different signs to negative."
   },
   {
    "h": "Three forms",
    "body": "Fractions, decimals, percents convert freely; a percent of a number is multiplication."
   },
   {
    "h": "Proportions",
    "body": "Set two ratios equal and cross-multiply to solve for the unknown."
   },
   {
    "h": "Variables & equations",
    "body": "Evaluate expressions by substituting; solve equations with the balance rule."
   },
   {
    "h": "Coordinate plane",
    "body": "Plot (x, y): x across, y up/down, from the origin (0, 0)."
   }
  ],
  "flash": [
   [
    "Integer",
    "A whole number, its negative, or zero."
   ],
   [
    "Absolute value",
    "A number's distance from zero, always positive (|−5| = 5)."
   ],
   [
    "Sign rule",
    "Same signs → positive; different signs → negative (× and ÷)."
   ],
   [
    "Ratio",
    "A comparison of two quantities (2:3)."
   ],
   [
    "Proportion",
    "A statement that two ratios are equal."
   ],
   [
    "Cross-multiply",
    "Multiply across an equal pair of fractions to solve."
   ],
   [
    "Variable",
    "A letter standing for an unknown number."
   ],
   [
    "Expression",
    "Numbers and variables with operations, no equals sign."
   ],
   [
    "Equation",
    "A statement that two expressions are equal."
   ],
   [
    "Coordinate plane",
    "The grid of x- and y-axes for plotting points."
   ],
   [
    "Origin",
    "The point (0, 0) where the axes cross."
   ],
   [
    "Ordered pair",
    "(x, y) — a point's location, x first then y."
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
    "why": "Same signs multiply to a positive: 4 × 3 = 12."
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
    "q": "(−20) ÷ 5 =",
    "options": [
     "−4",
     "4",
     "−100",
     "−15"
    ],
    "a": 0,
    "why": "Different signs → negative: 20 ÷ 5 = 4, so −4."
   },
   {
    "q": "On a number line, −5 is:",
    "options": [
     "Less than −2",
     "Greater than −2",
     "Equal to 5",
     "To the right of 0"
    ],
    "a": 0,
    "why": "Farther left means smaller; −5 < −2."
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
    "why": "Distance from zero is always non-negative."
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
    "q": "What is 15% of 60?",
    "options": [
     "9",
     "15",
     "45",
     "90"
    ],
    "a": 0,
    "why": "0.15 × 60 = 9."
   },
   {
    "q": "Solve the proportion 2/3 = x/12.",
    "options": [
     "x = 8",
     "x = 6",
     "x = 18",
     "x = 4"
    ],
    "a": 0,
    "why": "Cross-multiply: 3x = 24, so x = 8."
   },
   {
    "q": "A recipe uses 2 eggs per 6 pancakes. For 15 pancakes you need:",
    "options": [
     "5 eggs",
     "3 eggs",
     "10 eggs",
     "7 eggs"
    ],
    "a": 0,
    "why": "2/6 = x/15 → 6x = 30 → x = 5."
   },
   {
    "q": "Evaluate 2n + 5 when n = 4.",
    "options": [
     "13",
     "11",
     "9",
     "26"
    ],
    "a": 0,
    "why": "2(4) + 5 = 8 + 5 = 13."
   },
   {
    "q": "Solve 2n + 5 = 13.",
    "options": [
     "n = 4",
     "n = 9",
     "n = 6",
     "n = 3"
    ],
    "a": 0,
    "why": "2n = 8, then n = 4."
   },
   {
    "q": "To plot the point (3, 2), from the origin you go:",
    "options": [
     "3 right, then 2 up",
     "2 right, then 3 up",
     "3 up, then 2 right",
     "3 left, then 2 down"
    ],
    "a": 0,
    "why": "Ordered pair is (x, y): x across first, then y up."
   },
   {
    "q": "The point where the x- and y-axes cross is the:",
    "options": [
     "Origin",
     "Vertex",
     "Midpoint",
     "Quadrant"
    ],
    "a": 0,
    "why": "The origin is (0, 0)."
   },
   {
    "q": "Are (3, 2) and (2, 3) the same point?",
    "options": [
     "No — order matters",
     "Yes",
     "Only on graphs",
     "Sometimes"
    ],
    "a": 0,
    "why": "(x, y) order matters, so they're different points."
   },
   {
    "q": "A ratio of 2 cups flour to 3 cups sugar is written:",
    "options": [
     "2:3",
     "3:2",
     "2+3",
     "5"
    ],
    "a": 0,
    "why": "A ratio compares the two quantities in order, 2 to 3."
   }
  ]
 },
 "math-geometry": {
  "title": "Geometry",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "objectives": [
   "Identify points, lines, rays, segments, and angles, and classify angles as acute, right, or obtuse",
   "Use complementary, supplementary, and vertical angle relationships to find unknown angles",
   "Classify triangles and use the triangle angle-sum rule (180°) to find a missing angle",
   "Calculate perimeter and area of rectangles and triangles, and circumference and area of circles",
   "Apply the Pythagorean theorem (a² + b² = c²) to find a missing side of a right triangle"
  ],
  "intro": "Geometry is the mathematics of shape, size, and space — the branch where math becomes visual. Beyond measuring the world around you (How much paint? How long a ramp?), geometry trains a powerful habit: reasoning step by step from what you know to what you want to find. This lesson covers the language of points and angles, the rules of triangles, area and perimeter, circles, and the famous Pythagorean theorem, with diagrams throughout.",
  "sections": [
   {
    "h": "Points, lines, rays, and angles",
    "body": "Geometry is built from a few simple basics. A point is a single location with no size, marked by a dot. A line is perfectly straight and extends forever in both directions; a ray starts at one point and goes forever in one direction; a line segment is a piece of a line with two endpoints.\n\nWhen two rays share an endpoint (the vertex), they form an angle, measured in degrees from 0° to 360°. The key reference angles are the right angle (exactly 90°, a square corner), the straight angle (180°, a straight line), acute angles (less than 90°), and obtuse angles (between 90° and 180°). Recognizing these on sight is the first step in geometry.",
    "tip": "An angle's size doesn't depend on how long you draw the rays — only on how far apart they open."
   },
   {
    "h": "Angle relationships",
    "body": "Angles that occur together follow reliable rules that let you find unknown angles from known ones. Complementary angles are two angles that add up to 90°; supplementary angles add up to 180°. When two straight lines cross, they form two pairs of equal 'vertical' angles (directly opposite each other), and adjacent angles along a straight line are supplementary.\n\nThese relationships turn geometry into a puzzle you can solve. If one angle is 110°, the angle beside it on a straight line must be 70° (supplementary), and the angle across from it must also be 110° (vertical).",
    "visual": "<svg viewBox=\"0 0 240 150\" width=\"220\" role=\"img\" aria-label=\"Two crossing lines forming equal vertical angles and supplementary adjacent angles\"><line x1=\"20\" y1=\"120\" x2=\"220\" y2=\"30\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><line x1=\"20\" y1=\"30\" x2=\"220\" y2=\"120\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><text x=\"120\" y=\"35\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"13\">x</text><text x=\"120\" y=\"122\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"13\">x</text><text x=\"42\" y=\"78\" fill=\"#39e3c8\" font-size=\"13\">y</text><text x=\"188\" y=\"78\" fill=\"#39e3c8\" font-size=\"13\">y</text><text x=\"120\" y=\"145\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"11\">vertical angles are equal; x + y = 180°</text></svg>",
    "caption": "When two lines cross, opposite (vertical) angles are equal, and angles on a straight line add to 180°.",
    "example": "Two angles are complementary and one is 35°. Find the other:\n90° − 35° = 55°"
   },
   {
    "h": "Triangles and the angle-sum rule",
    "body": "The triangle is geometry's most important shape. No matter its size or form, the three interior angles of ANY triangle always add up to exactly 180°. This single fact lets you find a missing angle whenever you know the other two.\n\nTriangles are classified two ways. By their sides: equilateral (all three sides equal), isosceles (two sides equal), and scalene (no sides equal). By their angles: acute (all angles under 90°), right (one 90° angle), and obtuse (one angle over 90°). The right triangle is especially important, as the last section shows.",
    "visual": "<svg viewBox=\"0 0 300 180\" width=\"280\" role=\"img\" aria-label=\"A triangle with interior angles A, B and C that sum to 180 degrees\"><polygon points=\"40,150 260,150 120,45\" fill=\"rgba(57,227,200,.08)\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><text x=\"58\" y=\"143\" fill=\"#e8b84b\" font-size=\"15\" font-weight=\"700\">A</text><text x=\"236\" y=\"143\" fill=\"#e8b84b\" font-size=\"15\" font-weight=\"700\">B</text><text x=\"114\" y=\"66\" fill=\"#e8b84b\" font-size=\"15\" font-weight=\"700\">C</text><text x=\"150\" y=\"172\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"13\">A + B + C = 180°</text></svg>",
    "caption": "The three interior angles of any triangle always sum to 180°.",
    "example": "A triangle has angles of 90° and 55°. Find the third:\n180° − 90° − 55° = 35°"
   },
   {
    "h": "Perimeter and area",
    "body": "Two measurements describe how big a shape is. Perimeter is the total distance around the outside — just add up all the side lengths. Area is the amount of flat space inside, measured in square units.\n\nThe formulas worth memorizing: a rectangle's area is length × width; a triangle's area is ½ × base × height; a square's area is side × side. Keep your units consistent, and remember that area is in square units (cm², ft²) while perimeter is in plain units.",
    "example": "A rectangle is 8 cm by 5 cm:\nPerimeter = 8 + 5 + 8 + 5 = 26 cm\nArea = 8 × 5 = 40 cm²",
    "tip": "A triangle's height must be perpendicular (straight up) from the base — not the length of a slanted side."
   },
   {
    "h": "Circles",
    "body": "A circle is the set of all points the same distance from a center. That distance is the radius (r); the full distance across through the center is the diameter (d = 2r). Circles use the special number π (pi ≈ 3.14), which is the ratio of any circle's circumference to its diameter.\n\nTwo formulas cover circles: the circumference (the distance around) is C = 2πr, and the area is A = πr². So a circle with radius 3 has a circumference of about 2 × 3.14 × 3 ≈ 18.8 units and an area of about 3.14 × 9 ≈ 28.3 square units.",
    "visual": "<svg viewBox=\"0 0 240 180\" width=\"220\" role=\"img\" aria-label=\"A circle showing its center, a radius r, and the diameter\"><line x1=\"50\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#4f9cf0\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"120\" cy=\"90\" r=\"70\" fill=\"rgba(79,156,240,.07)\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><line x1=\"120\" y1=\"90\" x2=\"169\" y2=\"41\" stroke=\"#39e3c8\" stroke-width=\"2\"/><circle cx=\"120\" cy=\"90\" r=\"3.5\" fill=\"#39e3c8\"/><text x=\"150\" y=\"60\" fill=\"#39e3c8\" font-size=\"15\" font-style=\"italic\">r</text><text x=\"120\" y=\"24\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"12\">diameter = 2r</text><text x=\"120\" y=\"108\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"11\">center</text></svg>",
    "caption": "The radius (r) runs from the center to the edge; the diameter is twice the radius.",
    "example": "A circle has radius 5:\nCircumference = 2π(5) = 10π ≈ 31.4\nArea = π(5)² = 25π ≈ 78.5"
   },
   {
    "h": "The Pythagorean theorem",
    "body": "In a right triangle, the three sides are linked by one of the most useful rules in all of math: a² + b² = c². Here a and b are the two shorter sides (the legs, which form the right angle) and c is the longest side (the hypotenuse), always opposite the right angle.\n\nThis lets you find any missing side when you know the other two. If the legs are 3 and 4, then c² = 3² + 4² = 9 + 16 = 25, so c = 5 — the famous 3-4-5 triangle. The theorem powers everything from construction and navigation to computer graphics.",
    "visual": "<svg viewBox=\"0 0 260 195\" width=\"250\" role=\"img\" aria-label=\"A right triangle with legs a and b and hypotenuse c, illustrating a squared plus b squared equals c squared\"><polygon points=\"50,165 215,165 50,50\" fill=\"rgba(57,227,200,.08)\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><rect x=\"50\" y=\"150\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"130\" y=\"183\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"15\" font-weight=\"700\">b</text><text x=\"34\" y=\"112\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"15\" font-weight=\"700\">a</text><text x=\"142\" y=\"100\" fill=\"#e8b84b\" font-size=\"15\" font-weight=\"700\">c</text><text x=\"135\" y=\"32\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"13\">a² + b² = c²</text></svg>",
    "caption": "The hypotenuse (c) is opposite the right angle; the legs a and b form it.",
    "example": "A right triangle has legs 6 and 8. Find the hypotenuse:\nc² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10",
    "tip": "The hypotenuse (c) is always the longest side and always sits opposite the right angle — never a leg."
   }
  ],
  "cards": [
   {
    "h": "Angle basics",
    "body": "Right = 90°, straight = 180°, acute < 90°, obtuse is between 90° and 180°."
   },
   {
    "h": "Angle pairs",
    "body": "Complementary angles add to 90°; supplementary add to 180°; vertical angles (across a crossing) are equal."
   },
   {
    "h": "Triangle rule",
    "body": "The three interior angles of any triangle always sum to 180°."
   },
   {
    "h": "Area formulas",
    "body": "Rectangle = length × width; triangle = ½ × base × height; circle area = πr²."
   },
   {
    "h": "Circle & right triangle",
    "body": "Circumference = 2πr. In a right triangle, a² + b² = c² (c is the hypotenuse)."
   }
  ],
  "flash": [
   [
    "Point",
    "A single location with no size."
   ],
   [
    "Line segment",
    "A straight piece of a line with two endpoints."
   ],
   [
    "Vertex",
    "The common endpoint where two rays meet to form an angle."
   ],
   [
    "Right angle",
    "An angle of exactly 90° (a square corner)."
   ],
   [
    "Acute / obtuse",
    "Less than 90° / between 90° and 180°."
   ],
   [
    "Complementary angles",
    "Two angles that add up to 90°."
   ],
   [
    "Supplementary angles",
    "Two angles that add up to 180°."
   ],
   [
    "Vertical angles",
    "Opposite, equal angles formed when two lines cross."
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
    "Circumference",
    "The distance around a circle: C = 2πr."
   ]
  ],
  "quiz": [
   {
    "q": "An angle of exactly 90° is called:",
    "options": [
     "A right angle",
     "An acute angle",
     "An obtuse angle",
     "A straight angle"
    ],
    "a": 0,
    "why": "90° is a right angle; 180° is a straight angle."
   },
   {
    "q": "Two angles that add up to 180° are:",
    "options": [
     "Supplementary",
     "Complementary",
     "Vertical",
     "Right"
    ],
    "a": 0,
    "why": "Supplementary = 180°; complementary = 90°."
   },
   {
    "q": "One of two complementary angles is 20°. The other is:",
    "options": [
     "70°",
     "160°",
     "20°",
     "90°"
    ],
    "a": 0,
    "why": "Complementary angles add to 90°: 90 − 20 = 70°."
   },
   {
    "q": "When two lines cross, the angles opposite each other are:",
    "options": [
     "Equal (vertical angles)",
     "Always 90°",
     "Complementary",
     "Always different"
    ],
    "a": 0,
    "why": "Vertical angles, directly opposite, are always equal."
   },
   {
    "q": "The three angles of any triangle add up to:",
    "options": [
     "180°",
     "360°",
     "90°",
     "100°"
    ],
    "a": 0,
    "why": "Every triangle's interior angles sum to 180°."
   },
   {
    "q": "A triangle has angles 40° and 75°. The third angle is:",
    "options": [
     "65°",
     "75°",
     "115°",
     "45°"
    ],
    "a": 0,
    "why": "180 − 40 − 75 = 65°."
   },
   {
    "q": "A triangle with all three sides equal is:",
    "options": [
     "Equilateral",
     "Isosceles",
     "Scalene",
     "Right"
    ],
    "a": 0,
    "why": "Equilateral = all sides (and angles) equal."
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
    "why": "Area = length × width; 2(l + w) is the perimeter."
   },
   {
    "q": "The area of a triangle is:",
    "options": [
     "½ × base × height",
     "base × height",
     "length × width",
     "πr²"
    ],
    "a": 0,
    "why": "A triangle's area is half the base times the height."
   },
   {
    "q": "The distance around a circle (its circumference) is:",
    "options": [
     "2πr",
     "πr²",
     "2r",
     "πd²"
    ],
    "a": 0,
    "why": "Circumference = 2πr; πr² is the area."
   },
   {
    "q": "The area of a circle is:",
    "options": [
     "πr²",
     "2πr",
     "πd",
     "r²"
    ],
    "a": 0,
    "why": "Area = π times the radius squared."
   },
   {
    "q": "In a right triangle, the Pythagorean theorem states:",
    "options": [
     "a² + b² = c²",
     "a + b = c",
     "a² − b² = c²",
     "abc = 180"
    ],
    "a": 0,
    "why": "The squares of the legs add to the square of the hypotenuse."
   },
   {
    "q": "A right triangle has legs 6 and 8. The hypotenuse is:",
    "options": [
     "10",
     "12",
     "14",
     "48"
    ],
    "a": 0,
    "why": "6² + 8² = 36 + 64 = 100, and √100 = 10."
   },
   {
    "q": "The hypotenuse of a right triangle is:",
    "options": [
     "The longest side, opposite the right angle",
     "Either short side",
     "The right angle itself",
     "Always 90"
    ],
    "a": 0,
    "why": "It's the side opposite the 90° angle and the longest side."
   },
   {
    "q": "The diameter of a circle is:",
    "options": [
     "Twice the radius",
     "Half the radius",
     "The same as π",
     "The area"
    ],
    "a": 0,
    "why": "Diameter = 2r — straight across through the center."
   }
  ]
 },
 "math-trigonometry": {
  "title": "Trigonometry",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "objectives": [
   "Define sine, cosine, and tangent as ratios of a right triangle's sides (SOH CAH TOA)",
   "Use a trig ratio to find a missing side when an angle and one side are known",
   "Use inverse trig functions to find a missing angle when two sides are known",
   "Convert between degrees and radians and describe the unit circle",
   "Explain why trig functions are periodic and where they model real-world cycles"
  ],
  "intro": "Trigonometry — literally 'triangle measurement' — studies the relationships between the angles and sides of triangles, and from that small idea comes a tool for measuring distances and angles you could never reach with a ruler. It's how surveyors find the height of a mountain, how GPS locates you, and how physics describes waves. This lesson builds the three core ratios, uses them to find unknown sides and angles, and then extends them to the circle that lets them model anything that cycles.",
  "sections": [
   {
    "h": "Right triangles and the three ratios (SOH CAH TOA)",
    "body": "Trigonometry begins with the right triangle. Pick one of its two non-right angles to focus on. Relative to that angle, the three sides get names: the hypotenuse is the longest side (opposite the right angle), the opposite side is directly across from your angle, and the adjacent side is beside it.\n\nFor that angle, three ratios are defined, memorized by SOH-CAH-TOA: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. These ratios depend ONLY on the angle, not on the triangle's size — every right triangle with a 30° angle has the same sine of 30°. That's what makes them so powerful.",
    "visual": "<svg viewBox=\"0 0 280 200\" width=\"260\" role=\"img\" aria-label=\"A right triangle with angle theta, showing the opposite, adjacent and hypotenuse sides\"><polygon points=\"40,170 240,170 240,45\" fill=\"rgba(57,227,200,.08)\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><rect x=\"225\" y=\"155\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><path d=\"M72 170 A32 32 0 0 0 61 147\" fill=\"none\" stroke=\"#e8b84b\" stroke-width=\"2\"/><text x=\"78\" y=\"163\" fill=\"#e8b84b\" font-size=\"15\">θ</text><text x=\"248\" y=\"112\" fill=\"#9aa6c0\" font-size=\"12\">opposite</text><text x=\"140\" y=\"188\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"12\">adjacent</text><text x=\"95\" y=\"98\" fill=\"#9aa6c0\" font-size=\"12\" transform=\"rotate(-32 95 98)\">hypotenuse</text></svg>",
    "caption": "SOH: sin = Opp/Hyp · CAH: cos = Adj/Hyp · TOA: tan = Opp/Adj (relative to angle θ).",
    "tip": "'Opposite' and 'adjacent' are defined relative to the angle you choose — switch angles and they swap."
   },
   {
    "h": "Finding a missing side",
    "body": "If you know one angle and one side of a right triangle, you can find any other side. The method: pick the ratio (sin, cos, or tan) that connects the side you know to the side you want, then solve for the unknown.\n\nFor example, to find the side opposite a 30° angle when the hypotenuse is 10, use sine (opposite over hypotenuse): sin(30°) = opposite/10, so opposite = 10 × sin(30°) = 10 × 0.5 = 5. A calculator gives you the sine, cosine, or tangent of any angle.",
    "example": "Find the side opposite a 40° angle when the hypotenuse is 12:\nsin(40°) = opposite / 12\nopposite = 12 × sin(40°) ≈ 12 × 0.643 ≈ 7.7"
   },
   {
    "h": "Finding a missing angle",
    "body": "The reverse question — given two sides, what is the angle? — is answered by the inverse trig functions, written sin⁻¹, cos⁻¹, and tan⁻¹ (also called arcsin, arccos, arctan). They take a ratio and give back the angle that produces it.\n\nIf the opposite side is 3 and the adjacent side is 4, then tan(angle) = 3/4 = 0.75, so angle = tan⁻¹(0.75) ≈ 36.9°. Choose the inverse function that matches the two sides you know.",
    "example": "Opposite = 5, adjacent = 12. Find the angle:\ntan(angle) = 5/12 ≈ 0.417\nangle = tan⁻¹(0.417) ≈ 22.6°",
    "tip": "Use an inverse function (sin⁻¹, cos⁻¹, tan⁻¹) whenever you have the sides and want the angle."
   },
   {
    "h": "Degrees and radians",
    "body": "Angles can be measured two ways. Degrees divide a full circle into 360 parts — familiar and intuitive. Radians measure angle by arc length and divide a full circle into 2π (about 6.28) parts; they're the natural unit in higher math and physics.\n\nThe key conversions all follow from 'half a circle = 180° = π radians.' To go from degrees to radians, multiply by π/180; to go the other way, multiply by 180/π. So 90° = π/2 radians and 360° = 2π radians.",
    "example": "Convert 60° to radians:\n60 × π/180 = π/3 ≈ 1.05 radians"
   },
   {
    "h": "The unit circle and periodicity",
    "body": "The ratios extend far beyond triangles using the unit circle — a circle of radius 1 centered at the origin. For an angle measured from the positive x-axis, the point on the circle has coordinates (cos θ, sin θ): cosine is the x-coordinate and sine is the y-coordinate. This definition works for any angle, even past 90° or negative.\n\nBecause going all the way around returns you to the start, the values repeat every 360° (2π) — the functions are periodic. That repetition is exactly why sine and cosine model anything that cycles: sound waves, light, alternating current, tides, and seasons.",
    "visual": "<svg viewBox=\"0 0 220 220\" width=\"200\" role=\"img\" aria-label=\"A unit circle with a point at angle theta where cosine is the x-coordinate and sine is the y-coordinate\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><circle cx=\"110\" cy=\"110\" r=\"80\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"167\" y1=\"53\" x2=\"167\" y2=\"110\" stroke=\"#e8b84b\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"/><line x1=\"110\" y1=\"110\" x2=\"167\" y2=\"53\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><circle cx=\"167\" cy=\"53\" r=\"4\" fill=\"#e8b84b\"/><path d=\"M142 110 A32 32 0 0 0 132 88\" fill=\"none\" stroke=\"#e8b84b\" stroke-width=\"2\"/><text x=\"146\" y=\"104\" fill=\"#e8b84b\" font-size=\"13\">θ</text><text x=\"124\" y=\"127\" fill=\"#9aa6c0\" font-size=\"11\">cos θ</text><text x=\"172\" y=\"86\" fill=\"#9aa6c0\" font-size=\"11\">sin θ</text></svg>",
    "caption": "On the unit circle, cosine is the x-coordinate of the point and sine is the y-coordinate.",
    "tip": "The y-axis value of a unit-circle point is its sine; the x-axis value is its cosine."
   },
   {
    "h": "Where trigonometry is used",
    "body": "Trig turns 'unreachable' measurements into simple calculations. Surveyors and builders use it to find heights and distances they can't measure directly — sight the angle to the top of a tree, measure your distance to its base, and tangent gives the height. Navigation and GPS triangulate position from angles.\n\nIn science and engineering, the periodic nature of sine and cosine describes every kind of wave and oscillation — from music and radio signals to the orbits of planets. Learn the three ratios well and you hold a tool used across nearly every technical field."
   }
  ],
  "cards": [
   {
    "h": "The three ratios",
    "body": "SOH CAH TOA: sin = Opp/Hyp, cos = Adj/Hyp, tan = Opp/Adj — they depend only on the angle."
   },
   {
    "h": "Missing side",
    "body": "Know an angle and a side? Pick the ratio linking known to unknown, then solve (e.g., opposite = hyp × sinθ)."
   },
   {
    "h": "Missing angle",
    "body": "Know two sides? Use the inverse functions sin⁻¹, cos⁻¹, tan⁻¹ to get the angle."
   },
   {
    "h": "Degrees and radians",
    "body": "180° = π radians. Degrees → radians: ×π/180. Radians → degrees: ×180/π."
   },
   {
    "h": "Unit circle",
    "body": "Point = (cosθ, sinθ); the functions repeat every 360°, which is why they model waves."
   }
  ],
  "flash": [
   [
    "Sine (sin)",
    "Opposite ÷ hypotenuse (SOH)."
   ],
   [
    "Cosine (cos)",
    "Adjacent ÷ hypotenuse (CAH)."
   ],
   [
    "Tangent (tan)",
    "Opposite ÷ adjacent (TOA)."
   ],
   [
    "Hypotenuse",
    "The longest side of a right triangle (opposite the right angle)."
   ],
   [
    "Opposite side",
    "The side directly across from the chosen angle."
   ],
   [
    "Adjacent side",
    "The side beside the chosen angle (not the hypotenuse)."
   ],
   [
    "Inverse trig",
    "sin⁻¹, cos⁻¹, tan⁻¹ — find an angle from a ratio."
   ],
   [
    "Radian",
    "An angle unit; a full circle is 2π radians."
   ],
   [
    "Degree–radian",
    "180° = π radians."
   ],
   [
    "Unit circle",
    "A radius-1 circle where a point is (cosθ, sinθ)."
   ],
   [
    "Periodic",
    "Repeating at regular intervals — why trig models cycles."
   ],
   [
    "SOH CAH TOA",
    "Mnemonic for the three trig ratios."
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
    "q": "Tangent equals",
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
    "q": "The trig ratios of an angle depend on:",
    "options": [
     "The angle only, not the triangle's size",
     "The triangle's size",
     "The longest side only",
     "Nothing"
    ],
    "a": 0,
    "why": "Same angle → same ratios, at any scale."
   },
   {
    "q": "To find the side opposite a 30° angle given the hypotenuse, use:",
    "options": [
     "sine",
     "cosine (adjacent)",
     "the Pythagorean theorem only",
     "addition"
    ],
    "a": 0,
    "why": "Opposite and hypotenuse → sine (SOH)."
   },
   {
    "q": "sin(30°) = 0.5 and the hypotenuse is 10. The opposite side is:",
    "options": [
     "5",
     "20",
     "0.05",
     "15"
    ],
    "a": 0,
    "why": "opposite = 10 × sin(30°) = 10 × 0.5 = 5."
   },
   {
    "q": "To find an angle from two known sides, you use:",
    "options": [
     "Inverse trig functions",
     "Only sine",
     "The Pythagorean theorem only",
     "Multiplication"
    ],
    "a": 0,
    "why": "sin⁻¹, cos⁻¹, or tan⁻¹ return the angle."
   },
   {
    "q": "If opposite = 3 and adjacent = 4, the angle is about:",
    "options": [
     "tan⁻¹(0.75) ≈ 36.9°",
     "0.75°",
     "90°",
     "12°"
    ],
    "a": 0,
    "why": "tan(angle) = 3/4; angle = tan⁻¹(0.75) ≈ 36.9°."
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
    "why": "360° = 2π radians."
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
    "q": "To convert 60° to radians you multiply by:",
    "options": [
     "π/180",
     "180/π",
     "60",
     "π"
    ],
    "a": 0,
    "why": "Degrees → radians: multiply by π/180 (giving π/3)."
   },
   {
    "q": "On the unit circle, a point's y-coordinate is its:",
    "options": [
     "sine",
     "cosine",
     "tangent",
     "radius"
    ],
    "a": 0,
    "why": "(cosθ, sinθ): sine is the y-coordinate, cosine the x."
   },
   {
    "q": "Trig functions are periodic, which means they:",
    "options": [
     "Repeat at regular intervals",
     "Never repeat",
     "Only work below 90°",
     "Are random"
    ],
    "a": 0,
    "why": "Values repeat every 360°, so they model cycles/waves."
   },
   {
    "q": "The adjacent side is:",
    "options": [
     "Beside the chosen angle (not the hypotenuse)",
     "Always the longest",
     "Across from the angle",
     "The right angle"
    ],
    "a": 0,
    "why": "Adjacent is next to the angle; opposite is across from it."
   },
   {
    "q": "Cosine equals",
    "options": [
     "Adjacent / Hypotenuse",
     "Opposite / Hypotenuse",
     "Opposite / Adjacent",
     "Hypotenuse / Adjacent"
    ],
    "a": 0,
    "why": "CAH: Cosine = Adjacent / Hypotenuse."
   },
   {
    "q": "Why can sine and cosine describe sound and light waves?",
    "options": [
     "They are periodic (repeat)",
     "They are triangles",
     "They only use degrees",
     "They never change"
    ],
    "a": 0,
    "why": "Their repeating (periodic) nature matches anything that cycles."
   }
  ]
 },
 "math-pre-calculus": {
  "title": "Pre-Calculus",
  "subject": "Mathematics",
  "level": "Grades 9-12",
  "objectives": [
   "Define a function and use function notation f(x), including domain and range",
   "Recognize and graph the linear, quadratic, and exponential function families",
   "Read a graph: intercepts, slope, and increasing/decreasing behavior",
   "Relate exponential and logarithmic functions as inverses",
   "Understand the idea of a limit as the bridge to calculus"
  ],
  "intro": "Pre-calculus gathers everything from algebra and trigonometry and focuses it on the most important object in higher math: the function. You'll sharpen how functions are written, graphed, and combined, meet the main families that model the world, and glimpse the limit — the idea calculus is built on. Think of this as basic training for calculus.",
  "sections": [
   {
    "h": "Functions and function notation",
    "body": "A function is a rule that assigns exactly one output to each input. We write it as f(x) ('f of x'), where x is the input and f(x) is the output. For f(x) = 2x + 1, feeding in 3 gives f(3) = 2(3) + 1 = 7. The defining feature is 'exactly one output per input' — no input maps to two different outputs.\n\nTwo sets describe a function's reach. The domain is all the allowed inputs (sometimes everything, sometimes restricted — you can't divide by zero or take the square root of a negative). The range is all the possible outputs. Function notation makes it easy to talk about specific values and to chain functions together.",
    "example": "For f(x) = x² − 1:\nf(3) = 3² − 1 = 8\nf(0) = 0² − 1 = −1\nf(−2) = (−2)² − 1 = 3",
    "tip": "The 'one output per input' rule is why the vertical-line test works: if a vertical line hits a graph twice, it's not a function."
   },
   {
    "h": "Reading a graph",
    "body": "A function's graph plots every input on the horizontal x-axis against its output on the vertical y-axis (y = f(x)). Reading a graph tells you a lot at a glance. The x-intercepts are where the graph crosses the x-axis — the inputs that give an output of zero. The y-intercept is where it crosses the y-axis, the output when x = 0.\n\nYou can also see behavior: where the graph rises (increasing) or falls (decreasing), where it peaks or bottoms out, and how steep it is (slope). Learning to translate between an equation and its picture is a central pre-calculus skill.",
    "tip": "A positive slope rises left to right; a negative slope falls; a zero slope is flat."
   },
   {
    "h": "Families of functions",
    "body": "A few families of functions model most situations, and each has a signature shape. Linear functions, f(x) = mx + b, graph as straight lines; m is the slope (steepness) and b is the y-intercept. Quadratic functions, f(x) = ax² + bx + c, graph as parabolas — symmetric U-shapes that open up or down.\n\nExponential functions, f(x) = a·bˣ, grow (or decay) by multiplying by a constant each step, producing the dramatic curves of population growth, compound interest, and radioactive decay. Recognizing the family from the equation lets you predict the graph's shape instantly.",
    "visual": "<svg viewBox=\"0 0 230 180\" width=\"220\" role=\"img\" aria-label=\"A graph with a straight line and a U-shaped parabola on x and y axes\"><line x1=\"15\" y1=\"95\" x2=\"215\" y2=\"95\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><line x1=\"115\" y1=\"15\" x2=\"115\" y2=\"165\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><path d=\"M60 42 Q 115 172 170 42\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><line x1=\"32\" y1=\"150\" x2=\"200\" y2=\"35\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><text x=\"118\" y=\"160\" fill=\"#39e3c8\" font-size=\"11\">parabola (quadratic)</text><text x=\"150\" y=\"52\" fill=\"#4f9cf0\" font-size=\"11\">line (linear)</text></svg>",
    "caption": "Linear functions graph as straight lines; quadratics as U-shaped parabolas.",
    "example": "f(x) = 2x + 1  →  a line, slope 2, crossing y at 1\nf(x) = x²       →  a parabola opening up, vertex at (0, 0)"
   },
   {
    "h": "Exponentials and logarithms",
    "body": "Exponential functions describe repeated multiplication — doubling, tripling, halving. Logarithms are their inverse: a logarithm answers 'what power produces this number?' Since 2³ = 8, we write log₂(8) = 3.\n\nLogarithms turn multiplication into addition and compress huge ranges into manageable numbers, which is why they appear throughout science — the Richter scale for earthquakes, decibels for sound, and pH for acidity are all logarithmic. Exponentials and logs are two views of the same relationship, each undoing the other.",
    "example": "Because 10² = 100, log₁₀(100) = 2.\nBecause 2⁴ = 16, log₂(16) = 4."
   },
   {
    "h": "The idea of a limit",
    "body": "The limit is the single idea that separates pre-calculus from calculus. A limit asks: as the input gets closer and closer to some value, what value does the output approach? It's about approaching, not necessarily reaching — a function can have a limit at a point even where it isn't defined.\n\nFor example, as x gets close to 2, the function f(x) = x + 3 approaches 5. That seems obvious here, but the power of limits is that they let us talk rigorously about instantaneous rates of change and the exact behavior at a single point — the two questions all of calculus is built to answer.",
    "tip": "A limit is about where a function is headed as you approach a point, not necessarily the value it has there."
   }
  ],
  "cards": [
   {
    "h": "Functions",
    "body": "A rule giving exactly one output per input, written f(x); domain = inputs, range = outputs."
   },
   {
    "h": "Reading graphs",
    "body": "x-intercepts (output 0), y-intercept (x = 0), slope, and where it rises or falls."
   },
   {
    "h": "Three families",
    "body": "Linear (line), quadratic (parabola), exponential (rapid growth/decay)."
   },
   {
    "h": "Exp & log",
    "body": "Logarithms invert exponentials: 2³ = 8 means log₂(8) = 3."
   },
   {
    "h": "Limits",
    "body": "The value a function approaches as the input nears a point — the gateway to calculus."
   }
  ],
  "flash": [
   [
    "Function",
    "A rule giving exactly one output for each input."
   ],
   [
    "f(x)",
    "Function notation: the output of f at input x."
   ],
   [
    "Domain",
    "All allowed inputs of a function."
   ],
   [
    "Range",
    "All possible outputs of a function."
   ],
   [
    "x-intercept",
    "Where a graph crosses the x-axis (output = 0)."
   ],
   [
    "y-intercept",
    "Where a graph crosses the y-axis (x = 0)."
   ],
   [
    "Slope",
    "How steep a line is; rise over run."
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
    "f(x) = a·bˣ; rapid growth or decay."
   ],
   [
    "Logarithm",
    "The inverse of an exponential; 'what power gives this number?'"
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
    "why": "One input maps to exactly one output — the defining rule."
   },
   {
    "q": "If f(x) = x² − 1, then f(3) =",
    "options": [
     "8",
     "5",
     "9",
     "−1"
    ],
    "a": 0,
    "why": "3² − 1 = 9 − 1 = 8."
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
    "why": "Domain = valid inputs; range = outputs."
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
    "why": "ax² + bx + c makes a U-shaped parabola."
   },
   {
    "q": "A linear function graphs as a:",
    "options": [
     "Straight line",
     "Parabola",
     "Wave",
     "Circle"
    ],
    "a": 0,
    "why": "f(x) = mx + b is a straight line."
   },
   {
    "q": "The y-intercept is the output when:",
    "options": [
     "x = 0",
     "y = 0",
     "x = 1",
     "the slope is 0"
    ],
    "a": 0,
    "why": "It's where the graph crosses the y-axis, at x = 0."
   },
   {
    "q": "A positive slope means the line:",
    "options": [
     "Rises left to right",
     "Falls left to right",
     "Is flat",
     "Is vertical"
    ],
    "a": 0,
    "why": "Positive slope goes up as x increases."
   },
   {
    "q": "Exponential functions model:",
    "options": [
     "Rapid growth or decay",
     "Straight-line change",
     "No change",
     "Only negatives"
    ],
    "a": 0,
    "why": "They multiply by a constant each step — growth or decay."
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
    "q": "log₁₀(100) =",
    "options": [
     "2",
     "10",
     "100",
     "1"
    ],
    "a": 0,
    "why": "10² = 100, so the log is 2."
   },
   {
    "q": "A logarithm is the inverse of a(n):",
    "options": [
     "Exponential",
     "Line",
     "Parabola",
     "Circle"
    ],
    "a": 0,
    "why": "Logs undo exponentials and vice versa."
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
    "why": "It's about where the output is headed near a point."
   },
   {
    "q": "The vertical-line test checks whether a graph is a:",
    "options": [
     "Function",
     "Line",
     "Parabola",
     "Circle"
    ],
    "a": 0,
    "why": "If a vertical line hits it twice, an input has two outputs — not a function."
   },
   {
    "q": "In f(x) = mx + b, m is the:",
    "options": [
     "Slope",
     "y-intercept",
     "Input",
     "Output"
    ],
    "a": 0,
    "why": "m is the slope; b is the y-intercept."
   },
   {
    "q": "Why is the limit important?",
    "options": [
     "It's the foundation of calculus",
     "It's only for graphing",
     "It replaces algebra",
     "It has no use"
    ],
    "a": 0,
    "why": "Limits let calculus define instantaneous rates and exact accumulation."
   }
  ]
 },
 "math-calculus": {
  "title": "Calculus",
  "subject": "Mathematics",
  "level": "College",
  "objectives": [
   "Explain what the derivative measures (instantaneous rate of change / slope of a curve)",
   "Use the power rule to differentiate simple functions",
   "Explain what the integral measures (accumulation / area under a curve)",
   "State how derivatives and integrals relate (the Fundamental Theorem)",
   "Recognize real-world uses of calculus"
  ],
  "intro": "Calculus is the mathematics of change and accumulation — the tool for handling things that vary continuously rather than staying fixed. Its two great ideas, the derivative and the integral, answer two ancient questions: how fast is something changing at this exact instant, and how much has accumulated in total? This lesson explains both, how they connect, and why calculus underpins modern science and engineering.",
  "sections": [
   {
    "h": "The problem calculus solves",
    "body": "Algebra handles fixed quantities and average rates — the average speed over a whole trip. But the real world changes moment to moment: a car's speedometer shows speed right now, not the average. How do you find a rate of change at a single instant, when 'rate' normally needs an interval of time?\n\nCalculus answers this using limits: it looks at the change over smaller and smaller intervals and sees what value that approaches. That limiting value is the instantaneous rate of change. The same limit idea, run the other direction, lets you add up infinitely many tiny pieces to find an exact total. These two moves are the derivative and the integral."
   },
   {
    "h": "The derivative: slope of a curve",
    "body": "The derivative measures how fast a function is changing at a single point — geometrically, it's the slope of the curve there, the slope of the straight line that just touches the curve (the tangent line) at that point. For a straight line the slope is constant and easy; for a curve it changes from point to point, and the derivative gives it anywhere.\n\nA concrete meaning: if a function gives position over time, its derivative gives velocity (how fast position is changing). The derivative of velocity, in turn, is acceleration. The derivative is the 'rate-of-change' machine.",
    "visual": "<svg viewBox=\"0 0 220 170\" width=\"210\" role=\"img\" aria-label=\"A curve with a straight tangent line touching it at one point, whose slope is the derivative\"><line x1=\"20\" y1=\"150\" x2=\"205\" y2=\"150\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><line x1=\"35\" y1=\"15\" x2=\"35\" y2=\"160\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><path d=\"M38 140 Q 120 138 198 28\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><line x1=\"85\" y1=\"125\" x2=\"195\" y2=\"50\" stroke=\"#e8b84b\" stroke-width=\"2\"/><circle cx=\"140\" cy=\"88\" r=\"4.5\" fill=\"#e8b84b\"/><text x=\"88\" y=\"46\" fill=\"#e8b84b\" font-size=\"11\">tangent line</text><text x=\"44\" y=\"32\" fill=\"#39e3c8\" font-size=\"11\">curve</text><text x=\"120\" y=\"108\" fill=\"#9aa6c0\" font-size=\"10\">slope = derivative</text></svg>",
    "caption": "The derivative at a point is the slope of the tangent line that just touches the curve there.",
    "tip": "Derivative = slope of the tangent line = instantaneous rate of change — three names for the same thing."
   },
   {
    "h": "Computing derivatives: the power rule",
    "body": "While the definition uses limits, in practice you compute derivatives with rules. The most basic is the power rule: the derivative of xⁿ is n·xⁿ⁻¹ — bring the exponent down as a multiplier, and reduce the exponent by one.\n\nSo the derivative of x² is 2x, the derivative of x³ is 3x², and the derivative of x (which is x¹) is 1. The derivative of a constant is 0, because a constant doesn't change. With a handful of rules like this, you can differentiate most functions quickly.",
    "example": "d/dx of x² = 2x\nd/dx of x³ = 3x²\nd/dx of 5x = 5\nd/dx of 7 = 0"
   },
   {
    "h": "The integral: area and accumulation",
    "body": "The integral is the derivative's opposite. Where the derivative breaks change into instants, the integral builds a total back up by adding infinitely many tiny pieces. Its most visible meaning is the area under a curve: slice the region into countless thin rectangles, add their areas, and take the limit.\n\nAccumulation shows up everywhere: integrate a velocity over time to get total distance traveled; integrate a flow rate to get total volume. Whenever you need a 'total amount' from a continuously varying quantity, you're integrating.",
    "visual": "<svg viewBox=\"0 0 230 170\" width=\"215\" role=\"img\" aria-label=\"Thin rectangles filling the area under a curve, illustrating the integral as accumulated area\"><line x1=\"30\" y1=\"150\" x2=\"215\" y2=\"150\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"160\" stroke=\"#2a3650\" stroke-width=\"1.2\"/><rect x=\"48\" y=\"135\" width=\"20\" height=\"15\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><rect x=\"70\" y=\"122\" width=\"20\" height=\"28\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><rect x=\"92\" y=\"110\" width=\"20\" height=\"40\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><rect x=\"114\" y=\"98\" width=\"20\" height=\"52\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><rect x=\"136\" y=\"85\" width=\"20\" height=\"65\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><rect x=\"158\" y=\"73\" width=\"20\" height=\"77\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><rect x=\"180\" y=\"61\" width=\"20\" height=\"89\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"0.8\"/><line x1=\"45\" y1=\"142\" x2=\"200\" y2=\"55\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><text x=\"120\" y=\"135\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10\">area = integral (sum of thin slices)</text></svg>",
    "caption": "The integral adds up infinitely many thin slices — the area under the curve."
   },
   {
    "h": "How derivatives and integrals connect",
    "body": "The crowning result of calculus is the Fundamental Theorem of Calculus, which says differentiation and integration are inverse operations — they undo each other. Finding the rate of change and finding the accumulated total are two sides of the same coin.\n\nThis is both profound and practical: it means you can compute an otherwise impossible 'sum of infinitely many pieces' (an integral) by reversing a derivative. That connection is what turned calculus from a collection of clever tricks into a single, powerful theory."
   },
   {
    "h": "Why calculus matters",
    "body": "Calculus is the language of change, so it appears anywhere things move, grow, or accumulate. Physics uses it for motion, forces, and energy; engineering for designing everything from bridges to circuits; economics for marginal cost and optimization; biology for population and disease models; and computer graphics and machine learning rely on derivatives to optimize.\n\nYou don't need calculus for daily life, but it's the gateway to nearly every quantitative field. Understanding its two ideas — rate of change and accumulation — is understanding how modern science describes a changing world."
   }
  ],
  "cards": [
   {
    "h": "The core problem",
    "body": "Find a rate of change at a single instant, and a total from continuous change — solved with limits."
   },
   {
    "h": "Derivative",
    "body": "The instantaneous rate of change = slope of the tangent line at a point."
   },
   {
    "h": "Power rule",
    "body": "The derivative of xⁿ is n·xⁿ⁻¹; the derivative of a constant is 0."
   },
   {
    "h": "Integral",
    "body": "Accumulation — the area under a curve, built from infinitely many thin slices."
   },
   {
    "h": "Fundamental Theorem",
    "body": "Differentiation and integration are inverse operations; they undo each other."
   }
  ],
  "flash": [
   [
    "Calculus",
    "The mathematics of change and accumulation."
   ],
   [
    "Derivative",
    "Instantaneous rate of change; slope of a curve at a point."
   ],
   [
    "Tangent line",
    "The straight line that just touches a curve at one point."
   ],
   [
    "Instantaneous rate",
    "A rate at a single moment, not an average."
   ],
   [
    "Power rule",
    "The derivative of xⁿ is n·xⁿ⁻¹."
   ],
   [
    "Velocity",
    "The derivative of position with respect to time."
   ],
   [
    "Integral",
    "Accumulation; the area under a curve."
   ],
   [
    "Accumulation",
    "Adding up infinitely many tiny pieces to a total."
   ],
   [
    "Fundamental Theorem",
    "Differentiation and integration are inverses."
   ],
   [
    "Differentiation",
    "The process of finding a derivative."
   ],
   [
    "Limit",
    "The value a function approaches — calculus's foundation."
   ],
   [
    "Constant rule",
    "The derivative of a constant is 0."
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
    "q": "Geometrically, the derivative at a point is the:",
    "options": [
     "Slope of the tangent line",
     "Area under the curve",
     "y-intercept",
     "Length of the curve"
    ],
    "a": 0,
    "why": "The tangent line's slope is the derivative there."
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
    "q": "The derivative of x³ is:",
    "options": [
     "3x²",
     "x²",
     "3x",
     "x⁴"
    ],
    "a": 0,
    "why": "Power rule: 3·x² = 3x²."
   },
   {
    "q": "The derivative of a constant (like 7) is:",
    "options": [
     "0",
     "7",
     "1",
     "−7"
    ],
    "a": 0,
    "why": "A constant doesn't change, so its rate of change is 0."
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
    "q": "The integral is most visibly used to find:",
    "options": [
     "Area under a curve",
     "The slope at a point",
     "A single input",
     "The y-intercept"
    ],
    "a": 0,
    "why": "Integration accumulates thin slices — the area under a curve."
   },
   {
    "q": "Integration builds a total by adding:",
    "options": [
     "Infinitely many tiny pieces",
     "Two numbers",
     "A single rectangle",
     "Nothing"
    ],
    "a": 0,
    "why": "It sums countless thin slices and takes the limit."
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
    "q": "The idea that makes both derivatives and integrals rigorous is the:",
    "options": [
     "Limit",
     "Fraction",
     "Equation",
     "Percentage"
    ],
    "a": 0,
    "why": "Both are defined using limits."
   },
   {
    "q": "The derivative of velocity is:",
    "options": [
     "Acceleration",
     "Position",
     "Distance",
     "Area"
    ],
    "a": 0,
    "why": "Acceleration is the rate of change of velocity."
   },
   {
    "q": "'Tangent line' and 'slope at a point' both describe the:",
    "options": [
     "Derivative",
     "Integral",
     "Limit",
     "Domain"
    ],
    "a": 0,
    "why": "They're two names for what the derivative gives."
   },
   {
    "q": "To get total distance from a velocity that changes, you:",
    "options": [
     "Integrate the velocity",
     "Differentiate it",
     "Average two values",
     "Square it"
    ],
    "a": 0,
    "why": "Integrating a rate over time accumulates the total amount."
   },
   {
    "q": "Calculus is mainly the study of:",
    "options": [
     "Change and accumulation",
     "Fixed shapes only",
     "Whole numbers",
     "Spelling"
    ],
    "a": 0,
    "why": "Its two ideas handle how things change and how they add up."
   },
   {
    "q": "The power rule says the derivative of xⁿ is:",
    "options": [
     "n·xⁿ⁻¹",
     "xⁿ⁺¹",
     "n·x",
     "x / n"
    ],
    "a": 0,
    "why": "Bring the exponent down and reduce it by one."
   }
  ]
 },
 "math-statistics": {
  "title": "Statistics",
  "subject": "Mathematics",
  "level": "College",
  "objectives": [
   "Calculate and interpret the mean, median, and mode, and choose the best one for a data set",
   "Describe the spread of data using range and standard deviation",
   "Compute basic probabilities and know that all outcomes sum to 1",
   "Describe the normal distribution and the 68-95-99.7 rule",
   "Distinguish correlation from causation and spot misleading statistics"
  ],
  "intro": "Statistics is the science of turning data into understanding — collecting it, summarizing it, and drawing careful conclusions from it. In a world flooded with numbers, polls, and claims, it's the toolkit for separating what the data actually shows from what someone wants you to believe. This lesson covers how to describe a data set's center and spread, the basics of probability, the famous bell curve, and the single most common way numbers mislead.",
  "sections": [
   {
    "h": "Measures of center: mean, median, mode",
    "body": "The first job of statistics is to summarize a pile of numbers with a single 'typical' value, and there are three. The mean (average) is the sum of all values divided by how many there are. The median is the middle value when the data is sorted (or the average of the two middle values). The mode is the value that appears most often.\n\nEach has its use. The mean uses every value but gets dragged by extreme outliers — one billionaire in a room makes the 'average' wealth meaningless. The median ignores how far out the extremes are, so it better represents 'typical' for skewed data like incomes or home prices.",
    "example": "Data: 2, 3, 3, 8, 24\nMean = (2+3+3+8+24) / 5 = 40 / 5 = 8\nMedian = 3 (the middle value)\nMode = 3 (most frequent)\nThe outlier 24 pulls the mean well above the median.",
    "tip": "For skewed data (incomes, house prices), the median is usually the more honest 'typical' value."
   },
   {
    "h": "Measures of spread: range and standard deviation",
    "body": "Knowing the center isn't enough — you also need how spread out the data is. Two data sets can share the same average yet be wildly different: test scores all clustered near 80 tell a very different story than scores scattered from 40 to 100.\n\nThe simplest measure of spread is the range: the largest value minus the smallest. A richer measure is the standard deviation, which captures how far values typically sit from the mean. A small standard deviation means the data is tightly clustered; a large one means it's widely scattered.",
    "example": "Set A: 49, 50, 51   (mean 50, tightly clustered → tiny spread)\nSet B: 10, 50, 90   (mean 50, widely scattered → large spread)\nSame mean, very different standard deviation."
   },
   {
    "h": "The basics of probability",
    "body": "Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain), often written as a fraction, decimal, or percent. For outcomes that are equally likely, probability is simply the number of favorable outcomes divided by the total number of outcomes.\n\nRolling a 4 on a fair six-sided die has probability 1/6, because there's one favorable outcome out of six. A key rule: the probabilities of all possible outcomes always add up to 1 — something must happen.",
    "example": "A bag has 3 red and 2 blue marbles (5 total):\nP(red) = 3/5 = 0.6\nP(blue) = 2/5 = 0.4\nThey sum to 1."
   },
   {
    "h": "The normal distribution (the bell curve)",
    "body": "Many things in nature and society — heights, test scores, measurement errors — follow a bell-shaped pattern called the normal distribution. Most values cluster near the mean in the middle, and fewer and fewer appear as you move toward the extremes on either side.\n\nThe normal distribution follows the 68-95-99.7 rule: about 68% of values fall within one standard deviation of the mean, about 95% within two, and about 99.7% within three. This predictable shape is the backbone of a huge amount of statistics, from quality control to standardized testing.",
    "visual": "<svg viewBox=\"0 0 300 175\" width=\"280\" role=\"img\" aria-label=\"A normal distribution bell curve with the mean at the center and about 68 percent of values within one standard deviation\"><path d=\"M20 150 C 80 150, 110 45, 150 42 C 190 45, 220 150, 280 150\" fill=\"rgba(79,156,240,.1)\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><line x1=\"150\" y1=\"42\" x2=\"150\" y2=\"152\" stroke=\"#39e3c8\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"/><line x1=\"110\" y1=\"152\" x2=\"110\" y2=\"92\" stroke=\"#6b7a98\" stroke-width=\"1\"/><line x1=\"190\" y1=\"152\" x2=\"190\" y2=\"92\" stroke=\"#6b7a98\" stroke-width=\"1\"/><text x=\"150\" y=\"168\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"12\">mean</text><text x=\"150\" y=\"108\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"11\">~68% within 1 SD</text></svg>",
    "caption": "In a normal distribution, ~68% of values lie within one standard deviation of the mean.",
    "tip": "Score two standard deviations above the mean on a normal test and you're in roughly the top 2.5%."
   },
   {
    "h": "Correlation is not causation",
    "body": "The most important — and most abused — idea in statistics is the difference between correlation and causation. Correlation means two things tend to change together. Causation means one actually causes the other. Correlation does NOT prove causation.\n\nIce cream sales and drowning deaths both rise in summer, so they're correlated — but ice cream doesn't cause drowning; hot weather drives both. Whenever you see 'studies show X is linked to Y,' ask whether a third factor could explain it, or whether it's just coincidence. This one habit makes you far harder to fool with numbers.",
    "example": "Observation: towns with more firefighters have more fire damage.\nWrong conclusion: firefighters cause damage.\nReality: bigger fires cause BOTH more firefighters sent AND more damage."
   },
   {
    "h": "How statistics mislead",
    "body": "Numbers can be technically true yet deeply misleading. Watch for a few classic tricks: a misleading graph (a y-axis that doesn't start at zero exaggerates tiny differences); a biased or tiny sample (a survey of your friends isn't the whole country); cherry-picked data (showing only the years that support a point); and confusing correlation with causation.\n\nBeing statistically literate doesn't mean distrusting all numbers — it means asking good questions: Who collected this, and how? Compared to what? Is the sample representative? Good statistics illuminate; bad statistics manipulate, and now you can tell them apart."
   }
  ],
  "cards": [
   {
    "h": "Center",
    "body": "Mean = average (sensitive to outliers); median = middle (best for skewed data); mode = most frequent."
   },
   {
    "h": "Spread",
    "body": "Range = max − min. Standard deviation = typical distance from the mean (small = clustered, large = scattered)."
   },
   {
    "h": "Probability",
    "body": "From 0 (impossible) to 1 (certain) = favorable ÷ total outcomes; all outcomes sum to 1."
   },
   {
    "h": "Normal curve",
    "body": "Bell-shaped; 68-95-99.7 rule — ~68% within 1 SD, 95% within 2, 99.7% within 3 of the mean."
   },
   {
    "h": "Correlation ≠ causation",
    "body": "Two things moving together doesn't prove one causes the other — look for a hidden third factor."
   }
  ],
  "flash": [
   [
    "Mean",
    "The average: sum of values ÷ how many there are."
   ],
   [
    "Median",
    "The middle value when the data is sorted."
   ],
   [
    "Mode",
    "The most frequently occurring value."
   ],
   [
    "Outlier",
    "A value far from the rest of the data."
   ],
   [
    "Range",
    "The largest value minus the smallest."
   ],
   [
    "Standard deviation",
    "A measure of how spread out data is from the mean."
   ],
   [
    "Probability",
    "How likely an event is, from 0 to 1."
   ],
   [
    "Normal distribution",
    "The bell-shaped curve many data sets follow."
   ],
   [
    "68-95-99.7 rule",
    "% of values within 1, 2, and 3 standard deviations."
   ],
   [
    "Correlation",
    "Two things tending to change together."
   ],
   [
    "Causation",
    "One thing actually causing another."
   ],
   [
    "Sample",
    "The portion of a population actually measured."
   ]
  ],
  "quiz": [
   {
    "q": "The mean of 2, 3, 3, 8, 24 is:",
    "options": [
     "8",
     "3",
     "24",
     "5"
    ],
    "a": 0,
    "why": "(2+3+3+8+24)/5 = 40/5 = 8."
   },
   {
    "q": "The median of 2, 3, 3, 8, 24 is:",
    "options": [
     "3",
     "8",
     "24",
     "5"
    ],
    "a": 0,
    "why": "The middle value of the sorted list is 3."
   },
   {
    "q": "Which measure of center is LEAST affected by an outlier?",
    "options": [
     "Median",
     "Mean",
     "Range",
     "Sum"
    ],
    "a": 0,
    "why": "The median is the middle value, so one extreme can't drag it."
   },
   {
    "q": "For skewed data like incomes, the better 'typical' value is usually the:",
    "options": [
     "Median",
     "Mean",
     "Mode",
     "Range"
    ],
    "a": 0,
    "why": "The mean gets pulled by extremes; the median resists them."
   },
   {
    "q": "The range of a data set is:",
    "options": [
     "Largest value minus smallest",
     "The average",
     "The middle value",
     "The most common value"
    ],
    "a": 0,
    "why": "Range = max − min."
   },
   {
    "q": "A large standard deviation means the data is:",
    "options": [
     "Widely scattered",
     "Tightly clustered",
     "All the same",
     "Always normal"
    ],
    "a": 0,
    "why": "Bigger standard deviation = values typically farther from the mean."
   },
   {
    "q": "Probability ranges from:",
    "options": [
     "0 to 1",
     "1 to 100",
     "−1 to 1",
     "0 to 10"
    ],
    "a": 0,
    "why": "0 = impossible, 1 = certain."
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
    "q": "The probabilities of all possible outcomes always add up to:",
    "options": [
     "1",
     "0",
     "100",
     "Depends"
    ],
    "a": 0,
    "why": "Something must happen, so they total 1 (100%)."
   },
   {
    "q": "In a normal distribution, about 68% of values fall within:",
    "options": [
     "1 standard deviation of the mean",
     "The mean exactly",
     "3 standard deviations",
     "The range"
    ],
    "a": 0,
    "why": "The 68-95-99.7 rule: ~68% within 1 SD."
   },
   {
    "q": "The normal distribution is shaped like a:",
    "options": [
     "Bell",
     "Straight line",
     "Square",
     "U"
    ],
    "a": 0,
    "why": "It's the symmetric bell curve, peaking at the mean."
   },
   {
    "q": "Ice cream sales and drownings both rise in summer. This shows:",
    "options": [
     "Correlation, not causation",
     "Ice cream causes drowning",
     "Drowning causes ice cream sales",
     "Nothing"
    ],
    "a": 0,
    "why": "A third factor (hot weather) drives both — correlation isn't causation."
   },
   {
    "q": "A graph whose y-axis doesn't start at zero can:",
    "options": [
     "Exaggerate small differences",
     "Never mislead",
     "Only help",
     "Fix bias"
    ],
    "a": 0,
    "why": "A truncated axis makes tiny gaps look huge — a classic trick."
   },
   {
    "q": "A survey of only your friends is a problem because the sample is:",
    "options": [
     "Not representative",
     "Too large",
     "Perfectly random",
     "Too expensive"
    ],
    "a": 0,
    "why": "A biased, unrepresentative sample can't speak for everyone."
   },
   {
    "q": "Being statistically literate mainly means:",
    "options": [
     "Asking good questions about the data",
     "Distrusting all numbers",
     "Memorizing formulas only",
     "Avoiding math"
    ],
    "a": 0,
    "why": "Ask who collected it, how, compared to what, and whether the sample fits."
   }
  ]
 },
 "money-saving-emergency-fund": {
  "title": "Saving & Emergency Fund",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "intro": "Saving is the habit that gives you options and a cushion against life's surprises. The two pillars are an emergency fund for emergencies and savings goals for the things you're working toward.",
  "cards": [
   {
    "h": "Why save at all",
    "body": "Savings turn emergencies into inconveniences and dreams into plans. Without it, a surprise expense becomes debt and goals stay out of reach. Even small, regular amounts add up through consistency."
   },
   {
    "h": "The emergency fund comes first",
    "body": "Before investing or extra debt payoff, build a starter emergency fund — a common first goal is $500–$1,000, then work toward 3–6 months of expenses. Keep it in a separate, easy-to-reach account so you're not tempted to spend it."
   },
   {
    "h": "Pay yourself first, automatically",
    "body": "Savers who succeed don't rely on willpower — they automate it. Set up an automatic transfer to savings the day you're paid. You adjust to what's left, and the savings grow without a monthly decision."
   },
   {
    "h": "Short-term vs. long-term goals",
    "body": "Match the account to the timeline. Money you'll need within a few years (emergency fund, a car, a deposit) belongs somewhere safe and liquid like a high-yield savings account — not the stock market, which can drop right when you need it."
   },
   {
    "h": "High-yield savings accounts",
    "body": "A high-yield savings account (often online) pays far more interest than a regular bank savings account, with the same safety (FDIC insured). It's the right home for your emergency fund and short-term savings — earning a little while staying safe and available."
   }
  ],
  "flash": [
   [
    "Emergency fund",
    "Cash set aside only for true, unexpected expenses."
   ],
   [
    "Pay yourself first",
    "Automatically save when paid, before spending."
   ],
   [
    "Liquid",
    "Easily and quickly turned into cash without loss."
   ],
   [
    "High-yield savings",
    "A savings account paying much higher interest, still safe."
   ],
   [
    "FDIC insured",
    "Bank deposits protected by the government up to a limit."
   ],
   [
    "Sinking fund",
    "Money saved up gradually for a specific planned expense."
   ],
   [
    "3–6 months",
    "A common full emergency-fund goal (months of expenses)."
   ],
   [
    "Automation",
    "Setting transfers to happen without a monthly decision."
   ]
  ],
  "quiz": [
   {
    "q": "Before investing, your first savings priority should usually be:",
    "options": [
     "An emergency fund",
     "Buying stocks",
     "A new car",
     "Crypto"
    ],
    "a": 0,
    "why": "A cushion for surprises comes before investing or extra risk."
   },
   {
    "q": "The most reliable way to save consistently is to:",
    "options": [
     "Automate transfers when paid",
     "Save whatever's left",
     "Use willpower each month",
     "Wait for a raise"
    ],
    "a": 0,
    "why": "Automation removes the monthly decision and builds the habit."
   },
   {
    "q": "Money you'll need in a year or two should be kept:",
    "options": [
     "Somewhere safe and liquid",
     "In the stock market",
     "In a locked retirement account",
     "As cash under a mattress"
    ],
    "a": 0,
    "why": "Short-term money shouldn't risk a market drop right when you need it."
   },
   {
    "q": "A high-yield savings account offers:",
    "options": [
     "More interest, same safety",
     "High risk",
     "No FDIC insurance",
     "Money locked up for years"
    ],
    "a": 0,
    "why": "It pays more than a regular savings account and is still FDIC insured."
   },
   {
    "q": "'Liquid' means money that is:",
    "options": [
     "Easy to access quickly",
     "Tied up for years",
     "Already spent",
     "Invested in stocks"
    ],
    "a": 0,
    "why": "Liquid assets can be turned to cash fast without losing value."
   },
   {
    "q": "A common full emergency-fund target is:",
    "options": [
     "3–6 months of expenses",
     "One day of pay",
     "$50",
     "10 years of income"
    ],
    "a": 0,
    "why": "After a starter fund, aim for 3–6 months of living expenses."
   }
  ]
 },
 "money-banking-accounts": {
  "title": "Banking & Accounts",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "intro": "Knowing how bank accounts work — and how to dodge their fees and traps — keeps more of your money in your pocket. The basics are simple once you learn the terms.",
  "cards": [
   {
    "h": "Checking vs. savings",
    "body": "A checking account is for everyday spending — it comes with a debit card and is built for frequent transactions. A savings account is for setting money aside; it usually pays a little interest and may limit withdrawals. Most people need both."
   },
   {
    "h": "Avoiding fees",
    "body": "Banks make money on fees — overdraft, monthly maintenance, ATM, minimum-balance. Many are avoidable: pick a free account (credit unions and online banks often charge none), set up direct deposit, keep any required minimum, and turn OFF overdraft 'coverage' so a card simply declines instead of charging $35."
   },
   {
    "h": "Overdraft: the trap to avoid",
    "body": "An overdraft is spending more than you have. With overdraft 'protection' on, the bank covers it but charges a big fee (often ~$35) per transaction. Opting out means the purchase is simply declined — far cheaper than a fee that can snowball."
   },
   {
    "h": "Debit vs. credit cards",
    "body": "A debit card spends your own money directly from checking. A credit card borrows the bank's money to repay later. Debit avoids debt; a credit card paid in full each month builds credit history and offers better fraud protection. Know which you're using."
   },
   {
    "h": "Banks vs. credit unions",
    "body": "Credit unions are member-owned not-for-profits — they often have lower fees, better rates, and friendlier terms than big banks, while offering the same basics (accounts, cards, loans). Both should be FDIC- or NCUA-insured, which protects your deposits."
   }
  ],
  "flash": [
   [
    "Checking account",
    "An everyday account for spending, with a debit card."
   ],
   [
    "Savings account",
    "An account for setting money aside, usually earning interest."
   ],
   [
    "Overdraft",
    "Spending more than your balance; often triggers a big fee."
   ],
   [
    "Debit card",
    "Spends your own money directly from checking."
   ],
   [
    "Credit union",
    "A member-owned, not-for-profit bank alternative, often cheaper."
   ],
   [
    "Direct deposit",
    "Pay sent straight to your account; often waives fees."
   ],
   [
    "Minimum balance",
    "An amount some accounts require to avoid a fee."
   ],
   [
    "NCUA",
    "Insurance protecting credit-union deposits (like FDIC for banks)."
   ]
  ],
  "quiz": [
   {
    "q": "An account built for everyday spending with a debit card is a:",
    "options": [
     "Checking account",
     "Savings account",
     "Retirement account",
     "Loan"
    ],
    "a": 0,
    "why": "Checking is for frequent, everyday transactions."
   },
   {
    "q": "To avoid a ~$35 charge when you spend more than your balance, you should:",
    "options": [
     "Turn off overdraft coverage",
     "Keep overdraft on",
     "Use a bigger bank",
     "Spend faster"
    ],
    "a": 0,
    "why": "Opting out means the card is declined instead of charging an overdraft fee."
   },
   {
    "q": "A debit card:",
    "options": [
     "Spends your own money",
     "Borrows the bank's money",
     "Builds credit history",
     "Is a loan"
    ],
    "a": 0,
    "why": "Debit draws directly from your checking balance."
   },
   {
    "q": "Credit unions are:",
    "options": [
     "Member-owned not-for-profits",
     "The same as payday lenders",
     "Uninsured",
     "Only for businesses"
    ],
    "a": 0,
    "why": "They're member-owned and often cheaper than big banks."
   },
   {
    "q": "A common way to get monthly bank fees waived is:",
    "options": [
     "Set up direct deposit",
     "Withdraw often",
     "Keep a zero balance",
     "Use lots of ATMs"
    ],
    "a": 0,
    "why": "Direct deposit (or a minimum balance) waives many maintenance fees."
   },
   {
    "q": "Which protects your bank deposits?",
    "options": [
     "FDIC insurance",
     "The stock market",
     "Overdraft coverage",
     "A credit score"
    ],
    "a": 0,
    "why": "FDIC (banks) / NCUA (credit unions) insure deposits up to a limit."
   }
  ]
 },
 "money-investing-basics": {
  "title": "Investing Basics",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "disclaimer": "General education, NOT investment advice. Investing involves risk, including possible loss of money. Do your own research or consult a licensed advisor.",
  "intro": "Investing is putting money to work so it can grow over time and outpace inflation. It's how ordinary people build wealth slowly — not by picking hot stocks, but by owning a broad slice of the market and staying patient.",
  "cards": [
   {
    "h": "Why invest: growth and inflation",
    "body": "Money in a savings account barely keeps up with inflation (rising prices). Investing aims for higher long-term growth so your money gains real value. The trade-off is risk: investments can fall in the short term, which is why investing is for money you won't need for years."
   },
   {
    "h": "Compound growth and time",
    "body": "Compounding means your earnings start earning too. Over decades it's powerful — which is why starting early matters far more than starting big. A small amount invested in your twenties can outgrow a large amount invested in your forties."
   },
   {
    "h": "Stocks, bonds, and funds",
    "body": "A stock is a share of ownership in a company. A bond is a loan to a government or company that pays interest. A fund — especially an index fund or ETF — bundles many stocks or bonds into one purchase, giving instant diversification in a single, low-cost investment."
   },
   {
    "h": "Diversify with index funds",
    "body": "Don't bet on one company — spread your money across many so one failure doesn't sink you. A low-cost index fund that tracks the whole market (like an S&P 500 fund) does this automatically and has historically beaten most stock-pickers over the long run."
   },
   {
    "h": "The boring strategy that works",
    "body": "For most people: invest regularly (a fixed amount each month — 'dollar-cost averaging'), in low-cost diversified index funds, and leave it alone for the long term. Don't try to time the market, and don't panic-sell in a downturn. Time in the market beats timing the market."
   }
  ],
  "flash": [
   [
    "Investing",
    "Putting money to work to grow over the long term."
   ],
   [
    "Inflation",
    "The general rise in prices that erodes money's value."
   ],
   [
    "Compounding",
    "Earnings that themselves earn, snowballing over time."
   ],
   [
    "Stock",
    "A share of ownership in a company."
   ],
   [
    "Bond",
    "A loan to a government or company that pays interest."
   ],
   [
    "Index fund",
    "A low-cost fund tracking a whole market (e.g., S&P 500)."
   ],
   [
    "Diversification",
    "Spreading money across many investments to reduce risk."
   ],
   [
    "Dollar-cost averaging",
    "Investing a fixed amount on a regular schedule."
   ]
  ],
  "quiz": [
   {
    "q": "The main reason to invest rather than only save is to:",
    "options": [
     "Grow money and beat inflation",
     "Avoid all risk",
     "Spend it faster",
     "Get rich overnight"
    ],
    "a": 0,
    "why": "Investing aims for long-term growth that outpaces rising prices."
   },
   {
    "q": "Compounding is powerful mainly because of:",
    "options": [
     "Time",
     "Luck",
     "Picking one stock",
     "High fees"
    ],
    "a": 0,
    "why": "Earnings earning more over many years is why starting early wins."
   },
   {
    "q": "An index fund gives you:",
    "options": [
     "Instant diversification at low cost",
     "One single stock",
     "Guaranteed profit",
     "A government loan"
    ],
    "a": 0,
    "why": "It bundles many holdings into one low-cost, diversified investment."
   },
   {
    "q": "A stock represents:",
    "options": [
     "Ownership in a company",
     "A loan to a company",
     "Cash in a vault",
     "A savings account"
    ],
    "a": 0,
    "why": "A share of stock is partial ownership; a bond is a loan."
   },
   {
    "q": "A sound long-term strategy for most people is to:",
    "options": [
     "Invest regularly in low-cost index funds and hold",
     "Time the market",
     "Panic-sell in downturns",
     "Chase hot tips"
    ],
    "a": 0,
    "why": "Consistent, diversified, patient investing beats trying to time the market."
   },
   {
    "q": "Investing money you might need next month is:",
    "options": [
     "Risky — it could drop right then",
     "Always safe",
     "Required",
     "The same as saving"
    ],
    "a": 0,
    "why": "Short-term money shouldn't be exposed to market swings."
   }
  ]
 },
 "money-retirement-401-k": {
  "title": "Retirement & 401(k)",
  "subject": "Money & Investing",
  "level": "Adult",
  "disclaimer": "General education, not financial advice. Account rules and contribution limits change — check current IRS limits and your plan's details.",
  "intro": "Retirement saving is investing with a long runway and big tax advantages. Starting early and capturing the 'free money' from an employer match can be the difference between a comfortable retirement and working forever.",
  "cards": [
   {
    "h": "Why retirement accounts are special",
    "body": "Accounts like a 401(k) and IRA give you tax breaks to encourage long-term saving. In exchange, the money is meant to stay until retirement (early withdrawals usually bring taxes and a penalty). The tax advantage plus decades of compounding is what makes them so powerful."
   },
   {
    "h": "The employer match is free money",
    "body": "Many jobs offer a 401(k) match — they add money when you contribute, often up to a few percent of your pay. If your employer matches, contributing at least enough to get the full match is one of the best financial moves there is; skipping it leaves free money on the table."
   },
   {
    "h": "401(k) vs. IRA",
    "body": "A 401(k) is offered through your job (contributions come straight from your paycheck, sometimes matched). An IRA (Individual Retirement Account) you open yourself at a brokerage. Many people use both — the 401(k) for the match, an IRA for more control over investments."
   },
   {
    "h": "Traditional vs. Roth",
    "body": "Traditional accounts give a tax break now (you pay tax later, in retirement). Roth accounts take after-tax money now so qualified withdrawals in retirement are tax-free. Roth is often great when you're young and in a lower tax bracket — decades of growth come out tax-free."
   },
   {
    "h": "Start early, keep it simple",
    "body": "Time is your biggest advantage, so start as soon as you can, even small. Inside the account, a low-cost target-date fund or broad index fund is a simple, solid choice. Then contribute steadily and leave it alone until retirement."
   }
  ],
  "flash": [
   [
    "401(k)",
    "An employer retirement account funded from your paycheck."
   ],
   [
    "IRA",
    "An Individual Retirement Account you open yourself."
   ],
   [
    "Employer match",
    "Money your job adds to your 401(k) when you contribute."
   ],
   [
    "Traditional account",
    "Tax break now; you pay tax on withdrawals later."
   ],
   [
    "Roth account",
    "After-tax money now; tax-free withdrawals in retirement."
   ],
   [
    "Vesting",
    "How long you must stay to keep employer-contributed money."
   ],
   [
    "Target-date fund",
    "A simple fund that adjusts its mix as retirement nears."
   ],
   [
    "Early-withdrawal penalty",
    "Extra tax for taking retirement money out too soon."
   ]
  ],
  "quiz": [
   {
    "q": "An employer 401(k) match is best thought of as:",
    "options": [
     "Free money",
     "A loan",
     "A tax",
     "Optional and skippable"
    ],
    "a": 0,
    "why": "It's extra pay you only get by contributing — capture the full match."
   },
   {
    "q": "A Roth account's main benefit is:",
    "options": [
     "Tax-free withdrawals in retirement",
     "No risk",
     "Instant cash",
     "A bigger paycheck now"
    ],
    "a": 0,
    "why": "You pay tax now so qualified withdrawals later are tax-free."
   },
   {
    "q": "A 401(k) is:",
    "options": [
     "Offered through your employer",
     "Opened by you at any bank",
     "A checking account",
     "A type of loan"
    ],
    "a": 0,
    "why": "It's an employer plan; an IRA is the one you open yourself."
   },
   {
    "q": "The biggest advantage a young saver has is:",
    "options": [
     "Time for compounding",
     "A high salary",
     "Picking hot stocks",
     "Luck"
    ],
    "a": 0,
    "why": "Decades of compounding make early contributions grow the most."
   },
   {
    "q": "A simple investment choice inside a retirement account is:",
    "options": [
     "A low-cost target-date or index fund",
     "A single risky stock",
     "Leaving it in cash forever",
     "Day trading"
    ],
    "a": 0,
    "why": "Broad, low-cost funds are a solid, hands-off choice."
   },
   {
    "q": "Taking money out of a retirement account early usually causes:",
    "options": [
     "Taxes and a penalty",
     "A bonus",
     "Nothing",
     "A higher match"
    ],
    "a": 0,
    "why": "Early withdrawals typically trigger income tax plus a penalty."
   }
  ]
 },
 "money-taxes": {
  "title": "Taxes",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "disclaimer": "General education, not tax advice. Rules change yearly — check IRS.gov or a tax professional for your situation.",
  "intro": "Taxes feel confusing, but the basics are learnable — and understanding them helps you keep more of your money and avoid costly mistakes. For most people, a simple return is very doable.",
  "cards": [
   {
    "h": "How income tax works (brackets)",
    "body": "The U.S. uses a progressive system: higher income is taxed at higher rates, but only the income within each bracket is taxed at that bracket's rate. A common myth is that earning more can lower your take-home 'because of taxes' — moving into a higher bracket only taxes the extra dollars at the higher rate, never your whole income."
   },
   {
    "h": "Withholding, refunds, and owing",
    "body": "Your employer withholds estimated tax from each paycheck based on your W-4. At tax time you reconcile: if too much was withheld you get a refund; too little and you owe. A big refund isn't a win — it means you loaned the government your money interest-free all year."
   },
   {
    "h": "Key tax forms",
    "body": "A W-2 reports your wages from an employer. A 1099 reports other income (freelance, gig work, interest). You file a 1040 — your annual tax return — using those forms. Keep them; you need them to file."
   },
   {
    "h": "Deductions and credits",
    "body": "A deduction lowers the income you're taxed on; a credit lowers your tax bill directly (dollar for dollar), so credits are more valuable. Most people take the standard deduction (a flat amount) rather than itemizing. Credits like the Earned Income Tax Credit can mean real money back for lower earners."
   },
   {
    "h": "Filing without overpaying for it",
    "body": "Many people can file for free. If your income is modest, the IRS Free File program and volunteer programs like VITA handle simple returns at no cost. You rarely need to pay a big fee for a straightforward W-2 return."
   }
  ],
  "flash": [
   [
    "Progressive tax",
    "Higher income is taxed at higher rates (by bracket)."
   ],
   [
    "Tax bracket",
    "An income range taxed at a particular rate."
   ],
   [
    "Withholding",
    "Tax taken from each paycheck toward your yearly bill."
   ],
   [
    "W-2",
    "A form reporting wages from an employer."
   ],
   [
    "1099",
    "A form reporting non-employee income (freelance, interest)."
   ],
   [
    "1040",
    "The main individual federal income tax return."
   ],
   [
    "Deduction",
    "Reduces the income you're taxed on."
   ],
   [
    "Tax credit",
    "Reduces your tax bill directly, dollar for dollar."
   ]
  ],
  "quiz": [
   {
    "q": "In a progressive tax system, a raise into a higher bracket:",
    "options": [
     "Only taxes the extra income at the higher rate",
     "Taxes all your income higher",
     "Lowers your take-home overall",
     "Is tax-free"
    ],
    "a": 0,
    "why": "Only the dollars in the higher bracket are taxed at that rate."
   },
   {
    "q": "A big tax refund actually means:",
    "options": [
     "You over-withheld and loaned the government money",
     "You earned extra",
     "You paid no tax",
     "You made a profit"
    ],
    "a": 0,
    "why": "A refund returns your own over-withheld money — interest-free to them all year."
   },
   {
    "q": "Which is more valuable, dollar for dollar?",
    "options": [
     "A tax credit",
     "A tax deduction",
     "A W-2",
     "Withholding"
    ],
    "a": 0,
    "why": "A credit cuts your tax bill directly; a deduction only reduces taxable income."
   },
   {
    "q": "Wages from a job are reported on a:",
    "options": [
     "W-2",
     "1099",
     "1040 only",
     "W-4"
    ],
    "a": 0,
    "why": "Employers report your wages on a W-2."
   },
   {
    "q": "The main annual federal tax return is the:",
    "options": [
     "Form 1040",
     "Form W-2",
     "Form 1099",
     "Form W-4"
    ],
    "a": 0,
    "why": "The 1040 is where you file your yearly return."
   },
   {
    "q": "Someone with a simple W-2 return and modest income can often file:",
    "options": [
     "For free (Free File / VITA)",
     "Only by paying a big fee",
     "Only with a lawyer",
     "Never on their own"
    ],
    "a": 0,
    "why": "Free File and VITA handle simple returns at no cost."
   }
  ]
 },
 "money-insurance": {
  "title": "Insurance",
  "subject": "Money & Investing",
  "level": "Grades 9 - adult",
  "disclaimer": "General education, not insurance advice. Coverage needs vary — compare policies for your situation.",
  "intro": "Insurance trades a small, predictable cost (the premium) for protection against a rare but financially devastating event. Used right, it keeps one bad day from wiping you out — and skipping the important kinds is a gamble that can cost everything.",
  "cards": [
   {
    "h": "What insurance is for",
    "body": "Insurance isn't an investment — it's protection against catastrophe. You pay a premium so that if something expensive and unlikely happens (a wreck, a fire, a hospital stay), the insurer covers most of the cost. Insure what you can't afford to replace; skip coverage on things you could just pay for."
   },
   {
    "h": "Premium, deductible, out-of-pocket",
    "body": "The premium is what you pay regularly to have coverage. The deductible is what you pay yourself before insurance kicks in. A higher deductible usually means a lower premium — a reasonable trade if you have an emergency fund to cover that deductible."
   },
   {
    "h": "Health insurance",
    "body": "Medical bills are a leading cause of debt and bankruptcy in the U.S., so health coverage matters even when you feel fine. Learn your deductible, copays, and what's 'in-network.' If money is tight, look into Medicaid, ACA marketplace subsidies, and community health centers — coverage may be free or low-cost based on income."
   },
   {
    "h": "Auto and renters insurance",
    "body": "Most states require at least liability auto insurance (it covers damage you cause to others). Renters insurance is cheap (often around $15/month) and covers your belongings and liability in a rented home — a small price for real protection that most renters skip."
   },
   {
    "h": "Don't over- or under-insure",
    "body": "Carry the coverage that protects you from ruin (health, liability, your home or car), and don't waste money insuring small, affordable risks (extended warranties on cheap gadgets, flight insurance). Shop around and re-check rates periodically — loyalty rarely saves money."
   }
  ],
  "flash": [
   [
    "Premium",
    "The amount you pay regularly to keep insurance coverage."
   ],
   [
    "Deductible",
    "What you pay yourself before insurance starts covering."
   ],
   [
    "Liability coverage",
    "Pays for harm or damage you cause to others."
   ],
   [
    "Copay",
    "A fixed fee you pay for a covered medical service."
   ],
   [
    "In-network",
    "Providers your health plan has agreed rates with (cheaper)."
   ],
   [
    "Renters insurance",
    "Cheap coverage for your belongings and liability as a renter."
   ],
   [
    "Claim",
    "A request to your insurer to pay for a covered loss."
   ],
   [
    "Premium vs. deductible",
    "A higher deductible usually means a lower premium."
   ]
  ],
  "quiz": [
   {
    "q": "The main purpose of insurance is to:",
    "options": [
     "Protect against costly, unlikely disasters",
     "Grow your money",
     "Avoid all small costs",
     "Replace saving"
    ],
    "a": 0,
    "why": "It's protection against catastrophe, not an investment."
   },
   {
    "q": "The amount you pay yourself before insurance pays is the:",
    "options": [
     "Deductible",
     "Premium",
     "Copay",
     "Claim"
    ],
    "a": 0,
    "why": "The deductible is your share before coverage kicks in."
   },
   {
    "q": "Choosing a higher deductible usually:",
    "options": [
     "Lowers your premium",
     "Raises your premium",
     "Removes coverage",
     "Pays you money"
    ],
    "a": 0,
    "why": "You take on more upfront risk in exchange for a cheaper premium."
   },
   {
    "q": "Renters insurance is:",
    "options": [
     "Cheap coverage for your belongings and liability",
     "Only for homeowners",
     "Required to drive",
     "A type of savings"
    ],
    "a": 0,
    "why": "It's inexpensive protection most renters overlook."
   },
   {
    "q": "You should insure:",
    "options": [
     "Things you can't afford to replace",
     "Everything, big and small",
     "Only cheap items",
     "Nothing"
    ],
    "a": 0,
    "why": "Insure against ruin; self-cover small, affordable risks."
   },
   {
    "q": "If money is tight, low-cost health coverage may come from:",
    "options": [
     "Medicaid or ACA subsidies",
     "Only full-price plans",
     "Renters insurance",
     "A 401(k)"
    ],
    "a": 0,
    "why": "Income-based programs (Medicaid, marketplace subsidies) can be free or cheap."
   }
  ]
 },
 "science-life-science": {
  "title": "Life Science",
  "subject": "Science",
  "level": "Grades 6-10",
  "objectives": [
   "List the characteristics all living things share",
   "Classify living things into major groups down to the species",
   "Describe how energy flows through food chains and food webs",
   "Name the major human body systems and their jobs",
   "Explain how living things reproduce and grow"
  ],
  "intro": "Life science is the branch of science that studies living things — what makes something alive, how living things are organized, how they get energy, and how their bodies work. It's the gateway to biology, ecology, and medicine. This lesson covers the traits of life, how we classify organisms, food chains, the human body's systems, and how life reproduces.",
  "sections": [
   {
    "h": "What makes something alive",
    "body": "Living things, however different, share a set of characteristics. They are made of cells; they grow and develop; they use energy through metabolism; they respond to their environment; they reproduce, making more of their kind; and they keep stable internal conditions (homeostasis). A rock does none of these; a mouse does all of them.\n\nThese traits are how scientists decide what counts as alive. A candle flame uses energy and grows, but it can't reproduce or respond the way a living thing does, so it isn't alive. Life is defined not by any single trait but by the whole package together.",
    "tip": "Living things share: made of cells, grow, use energy, respond, reproduce, and keep stable internal conditions."
   },
   {
    "h": "Classifying living things",
    "body": "Life is astonishingly diverse, so scientists organize it. The broadest groupings are kingdoms — including animals, plants, fungi, and several groups of microorganisms. Within each kingdom, organisms are sorted into ever-finer groups down to the species, the basic unit (one kind of organism that can breed with its own kind).\n\nThis classification groups organisms by shared traits and shared ancestry. Animals eat other organisms and usually move; plants make their own food from sunlight; fungi, like mushrooms, absorb nutrients from their surroundings. Classification helps us see the relationships that tie all life together.",
    "example": "A house cat belongs to Kingdom Animalia, is grouped with other mammals, then cats, down to its own species."
   },
   {
    "h": "Energy and food chains",
    "body": "Every living thing needs energy, and it flows through an ecosystem in a food chain. It starts with producers — plants and algae that make their own food from sunlight. Next come consumers that eat others: herbivores eat plants, carnivores eat animals, and omnivores eat both. Finally, decomposers like fungi and bacteria break down dead material, returning nutrients to the soil.\n\nEnergy passes up the chain as one organism eats another, but most of it is lost as heat at each step — which is why there are far more plants than predators. Real ecosystems link many chains into a food web, since most animals eat, and are eaten by, more than one thing.",
    "visual": "<svg viewBox=\"0 0 250 150\" width=\"240\" role=\"img\" aria-label=\"A food chain: the Sun feeds grass, grass feeds a rabbit, the rabbit feeds a fox, and decomposers recycle nutrients back to the grass\"><circle cx=\"39\" cy=\"18\" r=\"10\" fill=\"rgba(232,184,75,.45)\" stroke=\"#e8b84b\" stroke-width=\"1.5\"/><line x1=\"39\" y1=\"28\" x2=\"39\" y2=\"40\" stroke=\"#e8b84b\" stroke-width=\"2\"/><polygon points=\"35,36 43,36 39,42\" fill=\"#e8b84b\"/><rect x=\"8\" y=\"42\" width=\"62\" height=\"34\" rx=\"6\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"39\" y=\"63\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">grass</text><line x1=\"70\" y1=\"59\" x2=\"88\" y2=\"59\" stroke=\"#39e3c8\" stroke-width=\"2\"/><polygon points=\"88,55 94,59 88,63\" fill=\"#39e3c8\"/><rect x=\"94\" y=\"42\" width=\"62\" height=\"34\" rx=\"6\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"125\" y=\"63\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">rabbit</text><line x1=\"156\" y1=\"59\" x2=\"174\" y2=\"59\" stroke=\"#39e3c8\" stroke-width=\"2\"/><polygon points=\"174,55 180,59 174,63\" fill=\"#39e3c8\"/><rect x=\"180\" y=\"42\" width=\"62\" height=\"34\" rx=\"6\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"211\" y=\"63\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">fox</text><rect x=\"78\" y=\"106\" width=\"96\" height=\"30\" rx=\"6\" fill=\"rgba(57,227,200,.14)\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"126\" y=\"125\" text-anchor=\"middle\" fill=\"#9adbcf\" font-size=\"9.5\">decomposers</text><path d=\"M78 120 Q40 120 39 78\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polygon points=\"35,82 43,82 39,74\" fill=\"#39e3c8\"/><text x=\"200\" y=\"100\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">nutrients recycled</text></svg>",
    "caption": "A food chain: the Sun powers the grass, which feeds the rabbit, which feeds the fox; decomposers recycle nutrients back.",
    "tip": "Producers make food; consumers eat; decomposers recycle. Energy flows one way and shrinks at each step."
   },
   {
    "h": "The human body's systems",
    "body": "Your body is a team of organ systems, each with a job, all working together. The skeletal and muscular systems give structure and movement. The digestive system breaks food into nutrients; the respiratory system takes in oxygen and expels carbon dioxide; the circulatory system pumps blood to carry both around the body.\n\nThe nervous system (brain, spinal cord, nerves) senses and controls; the immune system defends against disease. No system works alone — when you run, your muscles move bones, your lungs pull in more air, your heart beats faster, and your nerves coordinate it all at once.",
    "example": "Eating an apple: the digestive system breaks it down → the circulatory system delivers the nutrients → cells use them for energy.",
    "tip": "Body systems work as a team — a single action like running calls on muscles, lungs, heart, and nerves together."
   },
   {
    "h": "Reproduction and growth",
    "body": "A defining trait of life is reproduction — making new individuals. Some simple organisms reproduce asexually, where one parent produces offspring that are copies of itself (bacteria splitting in two). Most familiar organisms reproduce sexually, combining genetic material from two parents, producing offspring with a mix of traits.\n\nAfter reproduction comes growth and development. A seed becomes a plant; a fertilized egg becomes an animal through many cell divisions. Genes inherited from the parents guide this growth, which is why offspring resemble their parents without being identical to them — except in asexual reproduction, where they are copies.",
    "tip": "Asexual = one parent, identical copies; sexual = two parents, mixed traits and more variety."
   },
   {
    "h": "Living things and their environment",
    "body": "No organism lives alone; each is part of an ecosystem — a community of living things interacting with their nonliving surroundings of water, soil, air, and sunlight. Organisms are adapted to their environment: a cactus stores water for the desert; a polar bear has thick fur for the cold.\n\nThese adaptations are the result of evolution over long stretches of time. When the environment changes, organisms that happen to be well-suited survive and reproduce, slowly shifting the whole population. Understanding life means understanding not just the organism but the web of relationships it lives within."
   }
  ],
  "cards": [
   {
    "h": "Traits of life",
    "body": "Cells, growth, energy use, response, reproduction, and homeostasis — together, not alone."
   },
   {
    "h": "Classification",
    "body": "Kingdoms (animals, plants, fungi, microbes) down to the species, grouped by shared traits and ancestry."
   },
   {
    "h": "Food chains",
    "body": "Producers → consumers (herbivore/carnivore/omnivore) → decomposers. Energy flows up and shrinks."
   },
   {
    "h": "Body systems",
    "body": "Skeletal, muscular, digestive, respiratory, circulatory, nervous, immune — all working as a team."
   },
   {
    "h": "Reproduction",
    "body": "Asexual (one parent, copies) or sexual (two parents, mixed traits); genes guide growth."
   }
  ],
  "flash": [
   [
    "Organism",
    "An individual living thing."
   ],
   [
    "Cell",
    "The basic unit all living things are made of."
   ],
   [
    "Homeostasis",
    "Keeping stable internal conditions."
   ],
   [
    "Species",
    "One kind of organism that can breed with its own kind."
   ],
   [
    "Kingdom",
    "A broad group of living things (animals, plants, fungi...)."
   ],
   [
    "Producer",
    "An organism that makes its own food, like a plant."
   ],
   [
    "Consumer",
    "An organism that eats other organisms for energy."
   ],
   [
    "Decomposer",
    "An organism that breaks down dead material and recycles nutrients."
   ],
   [
    "Food web",
    "The connected network of food chains in an ecosystem."
   ],
   [
    "Organ system",
    "A group of organs working together for one function."
   ],
   [
    "Asexual reproduction",
    "One parent producing identical offspring."
   ],
   [
    "Sexual reproduction",
    "Two parents combining genes, producing varied offspring."
   ]
  ],
  "quiz": [
   {
    "q": "Which is a characteristic of all living things?",
    "options": [
     "Made of cells",
     "Made of metal",
     "Never changes",
     "Cannot move"
    ],
    "a": 0,
    "why": "All living things are made of cells (plus growth, energy use, etc.)."
   },
   {
    "q": "Keeping stable internal conditions is called:",
    "options": [
     "Homeostasis",
     "Reproduction",
     "Classification",
     "Digestion"
    ],
    "a": 0,
    "why": "Homeostasis is maintaining a stable internal state."
   },
   {
    "q": "A candle flame isn't alive because it can't:",
    "options": [
     "Reproduce and respond like living things",
     "Give off heat",
     "Grow at all",
     "Use energy"
    ],
    "a": 0,
    "why": "It lacks the full set of life traits — notably reproduction."
   },
   {
    "q": "The basic unit of classification is the:",
    "options": [
     "Species",
     "Kingdom",
     "Planet",
     "Cell"
    ],
    "a": 0,
    "why": "Species is the most specific grouping of organisms."
   },
   {
    "q": "Plants, which make their own food, are:",
    "options": [
     "Producers",
     "Consumers",
     "Decomposers",
     "Predators"
    ],
    "a": 0,
    "why": "Producers make food from sunlight."
   },
   {
    "q": "An animal that eats only plants is a:",
    "options": [
     "Herbivore",
     "Carnivore",
     "Decomposer",
     "Producer"
    ],
    "a": 0,
    "why": "Herbivores eat plants; carnivores eat animals; omnivores eat both."
   },
   {
    "q": "Fungi and bacteria that break down dead matter are:",
    "options": [
     "Decomposers",
     "Producers",
     "Herbivores",
     "Predators"
    ],
    "a": 0,
    "why": "Decomposers recycle nutrients back to the soil."
   },
   {
    "q": "Why are there far more plants than top predators?",
    "options": [
     "Energy is lost at each step up the chain",
     "Plants reproduce once",
     "Predators don't eat",
     "Plants are bigger"
    ],
    "a": 0,
    "why": "Most energy is lost as heat at each level, so less supports higher levels."
   },
   {
    "q": "Which system takes in oxygen and expels carbon dioxide?",
    "options": [
     "Respiratory",
     "Digestive",
     "Skeletal",
     "Immune"
    ],
    "a": 0,
    "why": "The respiratory system handles gas exchange."
   },
   {
    "q": "Which system pumps blood around the body?",
    "options": [
     "Circulatory",
     "Nervous",
     "Muscular",
     "Digestive"
    ],
    "a": 0,
    "why": "The circulatory system moves blood, oxygen, and nutrients."
   },
   {
    "q": "The brain, spinal cord, and nerves make up the:",
    "options": [
     "Nervous system",
     "Immune system",
     "Skeletal system",
     "Digestive system"
    ],
    "a": 0,
    "why": "The nervous system senses and controls the body."
   },
   {
    "q": "Bacteria splitting into two is an example of:",
    "options": [
     "Asexual reproduction",
     "Sexual reproduction",
     "Digestion",
     "Homeostasis"
    ],
    "a": 0,
    "why": "One parent making copies of itself is asexual reproduction."
   },
   {
    "q": "Sexual reproduction produces offspring that are:",
    "options": [
     "A mix of two parents' traits",
     "Identical to one parent",
     "Not living",
     "Always male"
    ],
    "a": 0,
    "why": "Combining two parents' genes gives varied traits."
   },
   {
    "q": "A cactus storing water for the desert is an example of:",
    "options": [
     "Adaptation",
     "Reproduction",
     "Classification",
     "Digestion"
    ],
    "a": 0,
    "why": "Adaptations are traits that suit an organism to its environment."
   },
   {
    "q": "A community of living things plus their nonliving surroundings is a(n):",
    "options": [
     "Ecosystem",
     "Species",
     "Cell",
     "Kingdom"
    ],
    "a": 0,
    "why": "An ecosystem includes organisms and their physical environment."
   }
  ]
 },
 "science-chemistry": {
  "title": "Chemistry",
  "subject": "Science",
  "level": "Grades 9-12",
  "objectives": [
   "Define matter and describe its states and physical changes",
   "Explain atomic structure (protons, neutrons, electrons) and what an element is",
   "Read basic information from the periodic table",
   "Describe how atoms bond to form molecules and compounds",
   "Explain chemical reactions and the conservation of mass"
  ],
  "intro": "Chemistry is the science of matter — what everything is made of and how it transforms. Every material thing, from the air you breathe to the food that fuels you, is chemistry in action, built from tiny particles called atoms. This lesson covers states of matter, the structure of the atom, the periodic table, how atoms combine, and the reactions that rearrange them.",
  "sections": [
   {
    "h": "Matter and its states",
    "body": "Matter is anything that has mass and takes up space — nearly everything physical. It commonly exists in three states: solid (a fixed shape and volume, particles locked in place), liquid (a fixed volume but takes its container's shape, particles sliding past each other), and gas (no fixed shape or volume, particles flying freely and filling any space).\n\nAdding or removing energy, usually heat, moves matter between states: ice melts to water, water boils to steam, and the reverse on cooling. These are physical changes — the substance is still water (H₂O) throughout; only its form changes.",
    "tip": "Melting, boiling, and freezing are physical changes — the substance stays the same, only its state changes."
   },
   {
    "h": "Inside the atom",
    "body": "Atoms are the tiny building blocks of all matter, and they have structure. At the center sits a dense nucleus containing positively charged protons and neutral neutrons. Whirling around the nucleus are negatively charged electrons, far lighter, occupying most of the atom's volume.\n\nThe number of protons — the atomic number — defines what element an atom is: every atom with 6 protons is carbon, every atom with 8 is oxygen. Electrons, especially the outermost ones, determine how an atom bonds and reacts. Atoms are mostly empty space, with a tiny heavy nucleus and a cloud of electrons.",
    "visual": "<svg viewBox=\"0 0 210 180\" width=\"200\" role=\"img\" aria-label=\"An atom with a nucleus of protons and neutrons and electrons orbiting\"><ellipse cx=\"105\" cy=\"90\" rx=\"88\" ry=\"38\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"1.4\"/><ellipse cx=\"105\" cy=\"90\" rx=\"88\" ry=\"38\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"1.4\" transform=\"rotate(60 105 90)\"/><ellipse cx=\"105\" cy=\"90\" rx=\"88\" ry=\"38\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"1.4\" transform=\"rotate(120 105 90)\"/><circle cx=\"99\" cy=\"85\" r=\"7\" fill=\"#f05a5a\"/><circle cx=\"111\" cy=\"86\" r=\"7\" fill=\"#6b7a98\"/><circle cx=\"104\" cy=\"96\" r=\"7\" fill=\"#f05a5a\"/><circle cx=\"113\" cy=\"95\" r=\"7\" fill=\"#6b7a98\"/><circle cx=\"193\" cy=\"90\" r=\"4.5\" fill=\"#39e3c8\"/><circle cx=\"61\" cy=\"56\" r=\"4.5\" fill=\"#39e3c8\"/><circle cx=\"61\" cy=\"124\" r=\"4.5\" fill=\"#39e3c8\"/><text x=\"105\" y=\"145\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"10\">nucleus (protons + neutrons), electrons orbit</text></svg>",
    "caption": "An atom: protons (+) and neutrons sit in the nucleus; electrons (−) orbit around it.",
    "example": "Carbon: 6 protons, 6 neutrons, 6 electrons (atomic number 6)\nOxygen: 8 protons, 8 electrons (atomic number 8)"
   },
   {
    "h": "Elements and the periodic table",
    "body": "An element is a pure substance made of just one kind of atom, and there are about 118 of them. The periodic table organizes all the elements in a grid by atomic number, arranged so that elements with similar properties line up in columns (called groups).\n\nEach element has a one- or two-letter symbol — O for oxygen, Na for sodium, Fe for iron. The arrangement isn't arbitrary: an element's position predicts how it behaves, whether it's a reactive metal, an inert gas, or something in between. It's chemistry's single most important reference tool.",
    "tip": "Elements in the same column (group) of the periodic table have similar chemical behavior."
   },
   {
    "h": "Molecules, compounds, and bonding",
    "body": "Atoms rarely sit alone — they bond together to form molecules. When different elements bond, they make a compound, a new substance with properties all its own. Two hydrogen atoms bonded to one oxygen make water (H₂O), which behaves nothing like hydrogen gas or oxygen gas.\n\nAtoms bond by sharing or transferring electrons to reach a stable arrangement. In a covalent bond, atoms share electrons (as in water); in an ionic bond, one atom gives electrons to another and the resulting opposite charges attract (as in table salt, NaCl). Bonding is why about a hundred elements combine into millions of substances.",
    "example": "H₂O (water) = 2 hydrogen + 1 oxygen\nNaCl (table salt) = sodium + chlorine\nCO₂ (carbon dioxide) = 1 carbon + 2 oxygen"
   },
   {
    "h": "Chemical reactions",
    "body": "In a chemical reaction, substances transform into new substances as their atoms break apart and recombine. The starting materials are the reactants; what you end with are the products. Iron plus oxygen becomes rust; wood plus oxygen becomes ash, smoke, and gases when it burns.\n\nA fundamental rule governs every reaction: the conservation of mass. Atoms are never created or destroyed — only rearranged — so the total mass of the products equals the total mass of the reactants. This is why chemical equations must be 'balanced,' with the same number of each atom on both sides.",
    "tip": "In any reaction, atoms are rearranged but never created or destroyed — so mass is conserved."
   },
   {
    "h": "Physical vs. chemical changes",
    "body": "It's worth distinguishing two kinds of change. A physical change alters a substance's form but not its identity — melting ice, dissolving sugar, tearing paper. The substance is still the same chemically, and the change can often be reversed.\n\nA chemical change creates new substances with new properties — burning, rusting, baking, digesting. Signs of a chemical change include a color change, gas bubbles, heat or light released, or a new smell. Learning to tell them apart is a basic chemistry skill: has the substance merely changed shape, or become something new?"
   }
  ],
  "cards": [
   {
    "h": "Matter & states",
    "body": "Matter has mass and takes up space; solid, liquid, gas — heat moves it between states (physical changes)."
   },
   {
    "h": "The atom",
    "body": "Nucleus of protons (+) and neutrons; electrons (−) orbit. Protons (atomic number) define the element."
   },
   {
    "h": "Periodic table",
    "body": "Organizes ~118 elements by atomic number; columns (groups) share properties."
   },
   {
    "h": "Bonding",
    "body": "Atoms share (covalent) or transfer (ionic) electrons to form molecules and compounds (H₂O, NaCl)."
   },
   {
    "h": "Reactions",
    "body": "Reactants → products by rearranging atoms; mass is conserved (equations must balance)."
   }
  ],
  "flash": [
   [
    "Matter",
    "Anything that has mass and takes up space."
   ],
   [
    "Atom",
    "The basic building block of all matter."
   ],
   [
    "Proton",
    "A positively charged particle in the nucleus; its count = the element."
   ],
   [
    "Neutron",
    "A neutral particle in the nucleus."
   ],
   [
    "Electron",
    "A negatively charged particle orbiting the nucleus."
   ],
   [
    "Atomic number",
    "The number of protons, which defines the element."
   ],
   [
    "Element",
    "A pure substance of only one kind of atom."
   ],
   [
    "Compound",
    "A substance of different elements chemically combined (H₂O)."
   ],
   [
    "Molecule",
    "Two or more atoms bonded together."
   ],
   [
    "Covalent bond",
    "Atoms sharing electrons."
   ],
   [
    "Ionic bond",
    "One atom transferring electrons to another; charges attract."
   ],
   [
    "Conservation of mass",
    "Matter is not created or destroyed in a reaction."
   ]
  ],
  "quiz": [
   {
    "q": "Matter is anything that:",
    "options": [
     "Has mass and takes up space",
     "Is alive",
     "Is a solid only",
     "Can be seen"
    ],
    "a": 0,
    "why": "That's the definition of matter."
   },
   {
    "q": "The three common states of matter are:",
    "options": [
     "Solid, liquid, gas",
     "Hot, warm, cold",
     "Big, medium, small",
     "Hard, soft, wet"
    ],
    "a": 0,
    "why": "Matter commonly exists as solid, liquid, or gas."
   },
   {
    "q": "Melting ice is an example of a:",
    "options": [
     "Physical change",
     "Chemical change",
     "New element",
     "Reaction"
    ],
    "a": 0,
    "why": "It's still H₂O — only the state changed."
   },
   {
    "q": "The particles in the nucleus are:",
    "options": [
     "Protons and neutrons",
     "Electrons only",
     "Protons only",
     "Molecules"
    ],
    "a": 0,
    "why": "The nucleus holds protons (+) and neutrons; electrons orbit."
   },
   {
    "q": "What defines which element an atom is?",
    "options": [
     "Its number of protons",
     "Its number of electrons' colors",
     "Its size",
     "Its temperature"
    ],
    "a": 0,
    "why": "The atomic number (protons) defines the element."
   },
   {
    "q": "A substance made of only one kind of atom is a(n):",
    "options": [
     "Element",
     "Compound",
     "Mixture",
     "Molecule"
    ],
    "a": 0,
    "why": "An element has just one type of atom."
   },
   {
    "q": "The periodic table organizes elements by:",
    "options": [
     "Atomic number and properties",
     "Price",
     "Color",
     "Discovery date"
    ],
    "a": 0,
    "why": "It's arranged by atomic number so similar elements line up in groups."
   },
   {
    "q": "Water (H₂O) is a:",
    "options": [
     "Compound",
     "Element",
     "Single atom",
     "Mixture of gases"
    ],
    "a": 0,
    "why": "Different elements chemically combined form a new compound."
   },
   {
    "q": "In a covalent bond, atoms:",
    "options": [
     "Share electrons",
     "Transfer electrons fully",
     "Lose their nucleus",
     "Never interact"
    ],
    "a": 0,
    "why": "Covalent = sharing; ionic = transferring electrons."
   },
   {
    "q": "In table salt (NaCl), sodium gives an electron to chlorine. This is a(n):",
    "options": [
     "Ionic bond",
     "Covalent bond",
     "Physical change",
     "Element"
    ],
    "a": 0,
    "why": "Transferring electrons so opposite charges attract is an ionic bond."
   },
   {
    "q": "In a chemical reaction, the starting materials are the:",
    "options": [
     "Reactants",
     "Products",
     "Elements only",
     "Ions"
    ],
    "a": 0,
    "why": "Reactants → products."
   },
   {
    "q": "Conservation of mass means atoms are:",
    "options": [
     "Rearranged, not created or destroyed",
     "Created from nothing",
     "Destroyed",
     "Turned into energy only"
    ],
    "a": 0,
    "why": "Mass is conserved; atoms only recombine."
   },
   {
    "q": "Which is a sign of a CHEMICAL change?",
    "options": [
     "A color change or gas produced",
     "Melting",
     "Dissolving",
     "Tearing"
    ],
    "a": 0,
    "why": "New substances (color change, bubbling) signal a chemical change."
   },
   {
    "q": "Electrons carry what charge?",
    "options": [
     "Negative",
     "Positive",
     "Neutral",
     "It varies"
    ],
    "a": 0,
    "why": "Electrons are negative; protons positive; neutrons neutral."
   },
   {
    "q": "Carbon has 6 protons. Its atomic number is:",
    "options": [
     "6",
     "12",
     "3",
     "8"
    ],
    "a": 0,
    "why": "The atomic number equals the number of protons."
   }
  ]
 },
 "science-physics": {
  "title": "Physics",
  "subject": "Science",
  "level": "Grades 9-12",
  "objectives": [
   "Describe motion using speed, velocity, and acceleration",
   "State Newton's three laws of motion and apply them",
   "Explain forces including gravity and friction",
   "Describe energy, its forms, and the conservation of energy",
   "Explain waves and the basic properties of light and sound"
  ],
  "intro": "Physics is the study of matter, energy, motion, and force — the fundamental rules that govern how everything in the universe behaves, from a falling apple to a distant galaxy. Its power is in its reach: the same handful of laws explain a rolling ball, a rocket launch, and the orbit of the Moon. This lesson covers motion, Newton's laws, forces, energy, and waves.",
  "sections": [
   {
    "h": "Describing motion",
    "body": "Physics starts by describing how things move. Speed is how fast something moves — distance covered per unit of time, like 60 miles per hour. Velocity is speed plus direction (60 mph north); direction matters because physics treats a car turning as 'changing velocity' even at constant speed.\n\nAcceleration is any change in velocity over time — speeding up, slowing down, or changing direction. A car pressing the gas accelerates; hitting the brakes is negative acceleration. These three ideas — speed, velocity, acceleration — are the vocabulary for everything that moves.",
    "example": "A car travels 120 miles in 2 hours. Speed = 120 ÷ 2 = 60 mph.",
    "tip": "Velocity includes direction; speed doesn't. Changing direction changes velocity even if speed stays the same."
   },
   {
    "h": "Newton's three laws of motion",
    "body": "Isaac Newton captured motion in three laws. The first law (inertia): an object at rest stays at rest, and an object in motion stays in motion in a straight line, unless a force acts on it. This is why you lurch forward when a car stops suddenly — your body 'wants' to keep moving.\n\nThe second law: force equals mass times acceleration (F = ma). A bigger force produces more acceleration; a heavier object needs more force for the same acceleration. The third law: for every action there is an equal and opposite reaction. A rocket pushes gas down, and the gas pushes the rocket up — that's how it flies.",
    "visual": "<svg viewBox=\"0 0 240 180\" width=\"230\" role=\"img\" aria-label=\"A block on a surface with four force arrows: applied force right, friction left, gravity down, and the normal force up\"><line x1=\"12\" y1=\"122\" x2=\"228\" y2=\"122\" stroke=\"#6b7a98\" stroke-width=\"2\"/><rect x=\"92\" y=\"90\" width=\"56\" height=\"32\" fill=\"rgba(79,156,240,.2)\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"148\" y1=\"106\" x2=\"200\" y2=\"106\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><polygon points=\"200,101 211,106 200,111\" fill=\"#39e3c8\"/><line x1=\"92\" y1=\"106\" x2=\"44\" y2=\"106\" stroke=\"#f05a5a\" stroke-width=\"2.5\"/><polygon points=\"44,101 33,106 44,111\" fill=\"#f05a5a\"/><line x1=\"120\" y1=\"122\" x2=\"120\" y2=\"156\" stroke=\"#e8b84b\" stroke-width=\"2.5\"/><polygon points=\"115,156 125,156 120,167\" fill=\"#e8b84b\"/><line x1=\"120\" y1=\"90\" x2=\"120\" y2=\"56\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><polygon points=\"115,56 125,56 120,45\" fill=\"#4f9cf0\"/><text x=\"214\" y=\"100\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"9\">push</text><text x=\"30\" y=\"100\" text-anchor=\"middle\" fill=\"#f05a5a\" font-size=\"9\">friction</text><text x=\"120\" y=\"178\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"9\">gravity</text><text x=\"120\" y=\"40\" text-anchor=\"middle\" fill=\"#4f9cf0\" font-size=\"9\">normal</text></svg>",
    "caption": "Forces on a block: the push (applied force) competes with friction; gravity pulls down, the surface pushes back up (normal force).",
    "example": "F = ma. To accelerate a 10 kg cart at 2 m/s²: force = 10 × 2 = 20 newtons.",
    "tip": "First law = inertia; second law = F = ma; third law = equal-and-opposite action/reaction pairs."
   },
   {
    "h": "Forces: gravity and friction",
    "body": "A force is a push or a pull. Two forces shape everyday life. Gravity is the attraction between masses; Earth's gravity pulls everything toward its center, giving objects weight and making dropped things fall. It's also what keeps the Moon orbiting Earth and the planets orbiting the Sun.\n\nFriction is a force that resists motion between surfaces in contact. It's why a sliding book eventually stops and why your shoes grip the floor. Friction can be a nuisance (wasted energy as heat) or essential (brakes, walking). Most motion you see is a tug-of-war between a driving force and friction.",
    "tip": "Gravity pulls masses together; friction opposes motion between surfaces. Both are everywhere."
   },
   {
    "h": "Energy and its conservation",
    "body": "Energy is the capacity to do work, and it comes in many forms: kinetic energy (energy of motion), potential energy (stored energy, like a ball held up high), thermal energy (heat), chemical energy (in food and fuel), and electrical energy, among others.\n\nThe great rule is the conservation of energy: energy is never created or destroyed, only transformed from one form to another. A roller coaster at the top has potential energy; as it drops, that converts to kinetic energy; friction turns some into heat. Add it all up, and the total never changes.",
    "example": "A ball held at the top of a hill has potential energy; rolling down, it becomes kinetic energy of motion.",
    "tip": "Energy changes form but is never lost — track where it goes (often into heat via friction)."
   },
   {
    "h": "Waves, light, and sound",
    "body": "A wave is a disturbance that carries energy from place to place without carrying matter along with it. Waves have a wavelength (distance between peaks), a frequency (how many pass per second), and an amplitude (height, tied to intensity or loudness).\n\nSound is a wave of vibrating air or another medium — which is why there's no sound in the vacuum of space. Light is an electromagnetic wave that needs no medium and travels incredibly fast (about 300,000 km per second). Different wavelengths of light are different colors; beyond the visible range lie infrared, ultraviolet, X-rays, and radio waves.",
    "tip": "Sound needs a medium (air); light does not — light crosses empty space to reach us from the Sun and stars."
   },
   {
    "h": "Why physics is the base of science",
    "body": "Physics is often called the most fundamental science because its laws underlie all the others. Chemistry is, at bottom, physics applied to atoms and their electrons; biology runs on the chemistry of living cells; astronomy applies physics to stars and galaxies.\n\nThe same laws of motion and gravity that describe a thrown ball describe a spacecraft's trajectory to Mars. This universality is what makes physics so powerful: learn the core principles, and you hold a key that unlocks phenomena across every scale of the universe."
   }
  ],
  "cards": [
   {
    "h": "Motion",
    "body": "Speed = distance/time; velocity adds direction; acceleration = any change in velocity."
   },
   {
    "h": "Newton's laws",
    "body": "1) inertia; 2) F = ma; 3) every action has an equal and opposite reaction."
   },
   {
    "h": "Forces",
    "body": "Gravity pulls masses together (weight, orbits); friction resists motion between surfaces."
   },
   {
    "h": "Energy",
    "body": "Kinetic, potential, thermal, chemical, electrical — never created or destroyed, only transformed."
   },
   {
    "h": "Waves",
    "body": "Carry energy, not matter. Sound needs a medium; light is electromagnetic and needs none."
   }
  ],
  "flash": [
   [
    "Speed",
    "How fast something moves: distance per unit time."
   ],
   [
    "Velocity",
    "Speed plus direction."
   ],
   [
    "Acceleration",
    "Any change in velocity over time."
   ],
   [
    "Force",
    "A push or a pull."
   ],
   [
    "Newton's 1st law",
    "Objects keep doing what they're doing unless a force acts (inertia)."
   ],
   [
    "Newton's 2nd law",
    "Force equals mass times acceleration (F = ma)."
   ],
   [
    "Newton's 3rd law",
    "Every action has an equal and opposite reaction."
   ],
   [
    "Gravity",
    "The attractive force between masses."
   ],
   [
    "Friction",
    "A force that resists motion between surfaces in contact."
   ],
   [
    "Kinetic energy",
    "The energy of motion."
   ],
   [
    "Potential energy",
    "Stored energy due to position or state."
   ],
   [
    "Conservation of energy",
    "Energy is never created or destroyed, only transformed."
   ]
  ],
  "quiz": [
   {
    "q": "Speed is:",
    "options": [
     "Distance divided by time",
     "Direction only",
     "Mass times acceleration",
     "Stored energy"
    ],
    "a": 0,
    "why": "Speed = distance / time."
   },
   {
    "q": "What does velocity include that speed does not?",
    "options": [
     "Direction",
     "Weight",
     "Color",
     "Temperature"
    ],
    "a": 0,
    "why": "Velocity is speed plus direction."
   },
   {
    "q": "A car slowing to a stop is undergoing:",
    "options": [
     "Acceleration (negative)",
     "No change",
     "Constant velocity",
     "Zero force"
    ],
    "a": 0,
    "why": "Any change in velocity — including slowing — is acceleration."
   },
   {
    "q": "Newton's first law is also called the law of:",
    "options": [
     "Inertia",
     "Gravity",
     "Energy",
     "Friction"
    ],
    "a": 0,
    "why": "Objects keep their state of motion unless a force acts — inertia."
   },
   {
    "q": "Newton's second law is written as:",
    "options": [
     "F = ma",
     "E = mc²",
     "v = d/t",
     "F = 0"
    ],
    "a": 0,
    "why": "Force equals mass times acceleration."
   },
   {
    "q": "A rocket flies because the gas it pushes down pushes it up. This is Newton's:",
    "options": [
     "Third law",
     "First law",
     "Second law",
     "Law of gravity"
    ],
    "a": 0,
    "why": "Every action has an equal and opposite reaction."
   },
   {
    "q": "To accelerate a 5 kg cart at 2 m/s², the force needed is:",
    "options": [
     "10 newtons",
     "7 newtons",
     "2.5 newtons",
     "3 newtons"
    ],
    "a": 0,
    "why": "F = ma = 5 × 2 = 10 N."
   },
   {
    "q": "What force keeps the Moon orbiting Earth?",
    "options": [
     "Gravity",
     "Friction",
     "Magnetism",
     "Sound"
    ],
    "a": 0,
    "why": "Gravity, the attraction between masses, holds orbits."
   },
   {
    "q": "A sliding book stops because of:",
    "options": [
     "Friction",
     "Gravity alone",
     "Inertia",
     "Electricity"
    ],
    "a": 0,
    "why": "Friction resists motion between the book and the surface."
   },
   {
    "q": "A ball held high has mostly which energy?",
    "options": [
     "Potential",
     "Kinetic",
     "Thermal",
     "Electrical"
    ],
    "a": 0,
    "why": "Stored energy from its height is potential energy."
   },
   {
    "q": "As that ball falls, potential energy converts to:",
    "options": [
     "Kinetic energy",
     "More potential energy",
     "Nothing",
     "Sound only"
    ],
    "a": 0,
    "why": "Energy of position becomes energy of motion."
   },
   {
    "q": "The conservation of energy says energy is:",
    "options": [
     "Never created or destroyed, only transformed",
     "Always increasing",
     "Always lost",
     "Created from nothing"
    ],
    "a": 0,
    "why": "Total energy stays constant; it just changes form."
   },
   {
    "q": "Why is there no sound in the vacuum of space?",
    "options": [
     "Sound needs a medium like air",
     "Space is too cold",
     "Light blocks it",
     "Space has no gravity"
    ],
    "a": 0,
    "why": "Sound is a vibration that needs a medium to travel through."
   },
   {
    "q": "Light is a type of:",
    "options": [
     "Electromagnetic wave",
     "Sound wave",
     "Chemical",
     "Metal"
    ],
    "a": 0,
    "why": "Light is an electromagnetic wave needing no medium."
   },
   {
    "q": "Different wavelengths of visible light appear as different:",
    "options": [
     "Colors",
     "Sounds",
     "Weights",
     "Temperatures"
    ],
    "a": 0,
    "why": "Wavelength determines color across the visible spectrum."
   }
  ]
 },
 "science-earth-space": {
  "title": "Earth & Space Science",
  "subject": "Science",
  "level": "Grades 9-12",
  "objectives": [
   "Describe Earth's internal layers and the theory of plate tectonics",
   "Explain the rock cycle and how the three rock types form",
   "Describe the water cycle and its role on Earth",
   "Explain the structure of the solar system and Earth's place in it",
   "Describe stars, galaxies, and the scale of the universe"
  ],
  "intro": "Earth and space science studies our planet and the cosmos it sits within — the ground beneath your feet, the water and air that sustain life, and the vast universe beyond. It connects the very large (galaxies) to the very close (the rock in your hand), all governed by the same physical laws. This lesson covers Earth's structure, its cycles, the solar system, and the universe.",
  "sections": [
   {
    "h": "Inside the Earth",
    "body": "Earth is layered like an onion. At the center is the core — a solid inner core and a molten outer core of iron and nickel, incredibly hot, whose motion generates Earth's magnetic field. Surrounding it is the mantle, a thick layer of hot, slowly flowing rock that makes up most of Earth's volume.\n\nOn the outside is the crust, a thin, rigid shell of rock — the ground we live on, thinner than an eggshell by comparison. The crust and the uppermost mantle are broken into huge slabs called tectonic plates that drift on the hotter mantle below.",
    "visual": "<svg viewBox=\"0 0 200 206\" width=\"185\" role=\"img\" aria-label=\"Earth's interior as concentric layers: inner core, outer core, mantle, and thin crust\"><circle cx=\"100\" cy=\"100\" r=\"90\" fill=\"rgba(230,150,70,.16)\" stroke=\"#8a5a2b\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"100\" r=\"52\" fill=\"rgba(240,90,90,.22)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"100\" r=\"24\" fill=\"rgba(232,184,75,.4)\" stroke=\"#e8b84b\" stroke-width=\"1.5\"/><text x=\"100\" y=\"103\" text-anchor=\"middle\" fill=\"#1a2233\" font-size=\"9\">inner core</text><text x=\"100\" y=\"62\" text-anchor=\"middle\" fill=\"#2a1f14\" font-size=\"9\">outer core</text><text x=\"100\" y=\"26\" text-anchor=\"middle\" fill=\"#2a1f14\" font-size=\"9\">mantle</text><text x=\"100\" y=\"202\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8.5\">outer ring = crust (very thin in reality)</text></svg>",
    "caption": "Earth's layers from the center out: a solid inner core, molten outer core, thick mantle, and thin crust.",
    "tip": "From center out: inner core, outer core, mantle, crust. The crust is surprisingly thin."
   },
   {
    "h": "Plate tectonics",
    "body": "Earth's crust is broken into about a dozen major tectonic plates that move slowly — only centimeters a year, but over millions of years, enough to rearrange whole continents. This movement, driven by heat in the mantle, is the theory of plate tectonics, one of the great unifying ideas in Earth science.\n\nWhere plates meet, dramatic things happen. Plates colliding push up mountains; plates pulling apart let magma rise and form new crust; plates grinding past each other cause earthquakes. Volcanoes, earthquakes, mountain ranges, and the very shape of the continents are all products of moving plates.",
    "example": "The Himalayas rose where India's plate collided with Asia; California's quakes come from plates grinding along the San Andreas fault."
   },
   {
    "h": "The rock cycle",
    "body": "Rocks aren't permanent — they're constantly recycled through the rock cycle, and there are three main types. Igneous rock forms when molten rock (magma or lava) cools and hardens, like granite or basalt. Sedimentary rock forms when bits of rock and shell are pressed and cemented together over time, like sandstone or limestone.\n\nMetamorphic rock forms when existing rock is changed by intense heat and pressure deep underground, like marble (from limestone). Over vast time, any rock can become any other type: mountains erode into sediment, sediment buries and heats into metamorphic rock, which can melt and cool into igneous rock again.",
    "tip": "Igneous = cooled from melt; sedimentary = pressed layers; metamorphic = changed by heat and pressure."
   },
   {
    "h": "The water cycle",
    "body": "Water constantly circulates between the oceans, air, and land in the water cycle, powered by the Sun. The Sun's heat drives evaporation, turning liquid water from oceans and lakes into water vapor that rises into the air. High up, the vapor cools and undergoes condensation, forming clouds.\n\nWhen the droplets grow heavy enough, they fall as precipitation — rain or snow. That water flows across the land as runoff into rivers and back to the sea, or soaks into the ground, and the cycle repeats. This endless loop distributes fresh water across the planet and shapes weather and climate.",
    "visual": "<svg viewBox=\"0 0 250 185\" width=\"240\" role=\"img\" aria-label=\"The water cycle: evaporation from the ocean, condensation into a cloud, precipitation as rain, and runoff back to the ocean\"><rect x=\"0\" y=\"142\" width=\"250\" height=\"43\" fill=\"rgba(79,156,240,.22)\"/><circle cx=\"28\" cy=\"28\" r=\"15\" fill=\"rgba(232,184,75,.4)\" stroke=\"#e8b84b\" stroke-width=\"1.5\"/><ellipse cx=\"178\" cy=\"42\" rx=\"40\" ry=\"17\" fill=\"rgba(205,217,236,.22)\" stroke=\"#cdd9ec\" stroke-width=\"1.5\"/><path d=\"M72 142 Q58 85 120 55\" fill=\"none\" stroke=\"#39e3c8\" stroke-width=\"2.5\"/><polygon points=\"114,50 123,53 117,62\" fill=\"#39e3c8\"/><line x1=\"158\" y1=\"60\" x2=\"152\" y2=\"82\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"178\" y1=\"60\" x2=\"172\" y2=\"84\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"198\" y1=\"60\" x2=\"192\" y2=\"82\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><path d=\"M190 100 Q215 130 225 150\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><text x=\"70\" y=\"108\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"9\">evaporation</text><text x=\"178\" y=\"20\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">condensation</text><text x=\"178\" y=\"104\" text-anchor=\"middle\" fill=\"#4f9cf0\" font-size=\"9\">precipitation</text><text x=\"125\" y=\"170\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"9\">ocean</text></svg>",
    "caption": "The water cycle: the Sun evaporates ocean water, it condenses into clouds, falls as precipitation, and runs back to the sea.",
    "tip": "Evaporation (up) → condensation (clouds) → precipitation (rain/snow) → runoff (back to sea) → repeat."
   },
   {
    "h": "The solar system",
    "body": "Earth is the third of eight planets orbiting the Sun, a medium-sized star. The four inner planets — Mercury, Venus, Earth, Mars — are small and rocky. The four outer planets — Jupiter, Saturn, Uranus, Neptune — are giant balls of gas and ice. Moons orbit many planets, and asteroids and comets fill the gaps.\n\nGravity holds it all together: the Sun's immense gravity keeps the planets in their orbits, and each planet's gravity holds its moons. Earth's particular distance from the Sun — not too hot, not too cold — is a big part of why it can hold liquid water and life.",
    "example": "Order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
   },
   {
    "h": "Stars, galaxies, and the universe",
    "body": "The Sun is just one of hundreds of billions of stars in our galaxy, the Milky Way — a vast spinning disk of stars, gas, and dust. A star is a giant ball of gas that shines by fusing hydrogen into helium in its core, releasing enormous energy; our Sun does this every second.\n\nGalaxies themselves number in the hundreds of billions across the observable universe. The distances are staggering: light from the Sun takes 8 minutes to reach us, but light from other stars takes years, and from other galaxies, millions of years. When you look at the night sky, you're looking back in time.",
    "tip": "The Sun is one star in one galaxy (the Milky Way); there are billions of galaxies, each with billions of stars."
   }
  ],
  "cards": [
   {
    "h": "Earth's layers",
    "body": "Inner core (solid) → outer core (molten) → mantle (thick, flowing) → crust (thin, rigid)."
   },
   {
    "h": "Plate tectonics",
    "body": "The crust is broken into drifting plates; their collisions and grinding make mountains, quakes, and volcanoes."
   },
   {
    "h": "Rock cycle",
    "body": "Igneous (cooled melt), sedimentary (pressed layers), metamorphic (heat + pressure) — endlessly recycled."
   },
   {
    "h": "Water cycle",
    "body": "Evaporation → condensation → precipitation → runoff, powered by the Sun."
   },
   {
    "h": "Solar system & universe",
    "body": "8 planets orbit the Sun; the Sun is one star in the Milky Way, one of billions of galaxies."
   }
  ],
  "flash": [
   [
    "Crust",
    "Earth's thin, rigid outer rock shell."
   ],
   [
    "Mantle",
    "The thick layer of hot, slowly flowing rock below the crust."
   ],
   [
    "Core",
    "Earth's center: a solid inner and molten outer core of iron and nickel."
   ],
   [
    "Tectonic plate",
    "A large slab of crust that slowly drifts on the mantle."
   ],
   [
    "Igneous rock",
    "Rock formed when molten magma or lava cools and hardens."
   ],
   [
    "Sedimentary rock",
    "Rock formed from pressed and cemented layers of sediment."
   ],
   [
    "Metamorphic rock",
    "Rock changed by intense heat and pressure."
   ],
   [
    "Evaporation",
    "Liquid water turning into vapor (driven by heat)."
   ],
   [
    "Condensation",
    "Water vapor cooling into droplets, forming clouds."
   ],
   [
    "Precipitation",
    "Water falling from clouds as rain or snow."
   ],
   [
    "Solar system",
    "The Sun and everything orbiting it — 8 planets, moons, asteroids, comets."
   ],
   [
    "Galaxy",
    "A huge system of billions of stars, like our Milky Way."
   ]
  ],
  "quiz": [
   {
    "q": "From the center outward, Earth's layers are:",
    "options": [
     "Inner core, outer core, mantle, crust",
     "Crust, mantle, core",
     "Mantle, crust, core",
     "Core, crust, mantle"
    ],
    "a": 0,
    "why": "Solid inner core, molten outer core, mantle, then thin crust."
   },
   {
    "q": "Earth's magnetic field is generated by motion in the:",
    "options": [
     "Molten outer core",
     "Crust",
     "Atmosphere",
     "Oceans"
    ],
    "a": 0,
    "why": "The churning molten outer core generates the magnetic field."
   },
   {
    "q": "The crust is broken into drifting slabs called:",
    "options": [
     "Tectonic plates",
     "Rock cycles",
     "Continents only",
     "Fault lines"
    ],
    "a": 0,
    "why": "Tectonic plates move slowly on the mantle."
   },
   {
    "q": "Mountains like the Himalayas form mainly where plates:",
    "options": [
     "Collide",
     "Stand still",
     "Melt entirely",
     "Disappear"
    ],
    "a": 0,
    "why": "Colliding plates push crust upward into mountains."
   },
   {
    "q": "Granite, which cooled from molten rock, is which type?",
    "options": [
     "Igneous",
     "Sedimentary",
     "Metamorphic",
     "Mineral only"
    ],
    "a": 0,
    "why": "Igneous rock forms from cooled magma or lava."
   },
   {
    "q": "Sandstone, formed from pressed layers, is which type?",
    "options": [
     "Sedimentary",
     "Igneous",
     "Metamorphic",
     "Volcanic"
    ],
    "a": 0,
    "why": "Sedimentary rock forms from cemented sediment layers."
   },
   {
    "q": "Marble, changed from limestone by heat and pressure, is:",
    "options": [
     "Metamorphic",
     "Igneous",
     "Sedimentary",
     "Liquid"
    ],
    "a": 0,
    "why": "Metamorphic rock is existing rock changed by heat and pressure."
   },
   {
    "q": "In the water cycle, the Sun's heat drives:",
    "options": [
     "Evaporation",
     "Condensation",
     "Precipitation",
     "Runoff"
    ],
    "a": 0,
    "why": "Heat evaporates liquid water into vapor."
   },
   {
    "q": "Clouds form when water vapor undergoes:",
    "options": [
     "Condensation",
     "Evaporation",
     "Melting",
     "Runoff"
    ],
    "a": 0,
    "why": "Cooling vapor condenses into droplets that form clouds."
   },
   {
    "q": "Rain and snow are examples of:",
    "options": [
     "Precipitation",
     "Evaporation",
     "Condensation",
     "Erosion"
    ],
    "a": 0,
    "why": "Precipitation is water falling from clouds."
   },
   {
    "q": "How many planets orbit the Sun?",
    "options": [
     "8",
     "9",
     "7",
     "12"
    ],
    "a": 0,
    "why": "Eight planets, from Mercury to Neptune."
   },
   {
    "q": "Which is the correct order from the Sun?",
    "options": [
     "Mercury, Venus, Earth, Mars",
     "Earth, Venus, Mercury, Mars",
     "Mars, Earth, Venus, Mercury",
     "Venus, Mercury, Earth, Mars"
    ],
    "a": 0,
    "why": "Mercury is closest, then Venus, Earth, Mars."
   },
   {
    "q": "What holds the planets in their orbits?",
    "options": [
     "The Sun's gravity",
     "Friction",
     "Magnetism",
     "Air pressure"
    ],
    "a": 0,
    "why": "The Sun's immense gravity keeps planets orbiting."
   },
   {
    "q": "Our galaxy is called the:",
    "options": [
     "Milky Way",
     "Solar System",
     "Andromeda",
     "Universe"
    ],
    "a": 0,
    "why": "We live in the Milky Way galaxy."
   },
   {
    "q": "A star shines by:",
    "options": [
     "Fusing hydrogen into helium",
     "Burning wood",
     "Reflecting light",
     "Spinning fast"
    ],
    "a": 0,
    "why": "Stars release energy by nuclear fusion of hydrogen into helium."
   }
  ]
 },
 "science-environmental-science": {
  "title": "Environmental Science",
  "subject": "Science",
  "level": "Grades 9-12",
  "objectives": [
   "Describe ecosystems and how energy and matter move through them",
   "Explain the energy pyramid and the 10% rule",
   "Describe key natural cycles (water and carbon)",
   "Explain human impacts: pollution, habitat loss, and climate change",
   "Describe conservation, sustainability, and biodiversity"
  ],
  "intro": "Environmental science studies how living things interact with each other and with their physical surroundings — and how human activity affects those systems. It draws on biology, chemistry, and earth science to understand ecosystems, natural cycles, and the challenge of keeping the planet livable. This lesson covers ecosystems, energy flow, natural cycles, human impact, and conservation.",
  "sections": [
   {
    "h": "Ecosystems",
    "body": "An ecosystem is all the living things in an area together with their nonliving environment — the plants, animals, and microbes plus the soil, water, air, and sunlight they depend on. Ecosystems range from a single pond to an entire rainforest, and every part is connected.\n\nWithin an ecosystem, each species occupies a niche — its particular role and way of making a living. A healthy ecosystem has many species in balance; remove or add one (a top predator, an invasive weed) and the effects ripple through the whole system. This interconnectedness is the central idea of ecology.",
    "tip": "An ecosystem = living things + their nonliving environment, all interconnected."
   },
   {
    "h": "Energy flow and the energy pyramid",
    "body": "Energy enters almost every ecosystem as sunlight, which producers (plants) capture through photosynthesis. It then flows to consumers that eat them, and on to predators. But at each step, most of the energy is lost as heat — only about 10% passes to the next level.\n\nThis is why ecologists picture an energy pyramid: a broad base of many plants, fewer herbivores above, and only a few top predators at the peak. It takes an enormous amount of grass to support one lion. The 10% rule also explains why food chains are rarely more than four or five links long — there simply isn't enough energy left.",
    "visual": "<svg viewBox=\"0 0 230 180\" width=\"220\" role=\"img\" aria-label=\"An energy pyramid: a wide base of producers, fewer herbivores, fewer carnivores, and few top predators at the peak\"><polygon points=\"115,30 15,160 215,160\" fill=\"rgba(79,156,240,.12)\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"84\" y1=\"70\" x2=\"146\" y2=\"70\" stroke=\"#4f9cf0\" stroke-width=\"1.2\"/><line x1=\"61\" y1=\"100\" x2=\"169\" y2=\"100\" stroke=\"#4f9cf0\" stroke-width=\"1.2\"/><line x1=\"38\" y1=\"130\" x2=\"192\" y2=\"130\" stroke=\"#4f9cf0\" stroke-width=\"1.2\"/><text x=\"115\" y=\"58\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">top predators</text><text x=\"115\" y=\"90\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">carnivores</text><text x=\"115\" y=\"119\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">herbivores</text><text x=\"115\" y=\"150\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">producers (plants)</text><text x=\"115\" y=\"176\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8.5\">only ~10% of energy passes up each level</text></svg>",
    "caption": "The energy pyramid: a wide base of producers narrows to few top predators, because only ~10% of energy passes up each level.",
    "example": "1,000 units of plant energy → ~100 reach herbivores → ~10 reach carnivores → ~1 reaches top predators.",
    "tip": "Only about 10% of energy passes up each level — that's why top predators are rare."
   },
   {
    "h": "Natural cycles",
    "body": "While energy flows through and out of ecosystems, matter cycles around and around. In the water cycle, water evaporates, condenses, and falls as rain again and again. In the carbon cycle, carbon moves between the air (as carbon dioxide), living things, and the ground: plants take in CO₂, animals breathe it out, and decay and burning return it to the air.\n\nThese cycles keep ecosystems supplied with the materials life needs — water, carbon, nitrogen — without running out. They're also where human activity has outsized effects: burning fossil fuels, for example, adds extra carbon to the air faster than the natural cycle can remove it.",
    "tip": "Energy flows through an ecosystem and is lost; matter (water, carbon) cycles and is reused."
   },
   {
    "h": "Human impact on the environment",
    "body": "Humans change ecosystems on a vast scale. Pollution puts harmful substances into air, water, and soil — from factory smoke to plastic in the oceans. Habitat destruction, such as clearing forests for farms and cities, removes the homes species need and is a leading cause of extinction.\n\nClimate change is a global impact: burning fossil fuels releases carbon dioxide and other greenhouse gases that trap heat, warming the planet and shifting weather patterns. These impacts are connected — and because ecosystems are interconnected, a change in one place (a warming ocean, a cleared forest) can affect species and people far away.",
    "tip": "The big three human impacts: pollution, habitat destruction, and climate change from greenhouse gases."
   },
   {
    "h": "Conservation and sustainability",
    "body": "The response to these challenges is conservation — protecting ecosystems and using natural resources wisely so they last. This includes setting aside protected lands, restoring damaged habitats, and protecting endangered species before they vanish.\n\nA key idea is sustainability: meeting today's needs without using up the resources future generations will need. Renewable energy (solar, wind), recycling, reducing waste, and protecting biodiversity all serve sustainability. The goal isn't to stop using nature but to use it at a rate it can keep up with — living off the interest, not the principal.",
    "tip": "Sustainability = using resources at a rate nature can replace, so they're still there tomorrow."
   },
   {
    "h": "Biodiversity and why it matters",
    "body": "Biodiversity is the variety of life in an ecosystem — the number and range of different species. High biodiversity makes ecosystems more stable and resilient: when many species fill different roles, the system can absorb shocks like disease or drought without collapsing.\n\nBiodiversity also directly benefits people. Different plants give us food and medicines; healthy, varied ecosystems clean our water, pollinate crops, and build soil. Protecting biodiversity isn't only about saving individual species — it's about keeping the whole web of life, which we depend on, intact and working."
   }
  ],
  "cards": [
   {
    "h": "Ecosystems",
    "body": "Living things + their nonliving environment, interconnected; each species has a niche."
   },
   {
    "h": "Energy pyramid",
    "body": "Only ~10% of energy passes up each level, so predators are few and chains are short."
   },
   {
    "h": "Natural cycles",
    "body": "Energy flows through and is lost; matter (water, carbon) cycles and is reused."
   },
   {
    "h": "Human impact",
    "body": "Pollution, habitat destruction, and climate change from greenhouse gases."
   },
   {
    "h": "Conservation",
    "body": "Protect and restore ecosystems; use resources sustainably; safeguard biodiversity."
   }
  ],
  "flash": [
   [
    "Ecosystem",
    "All living things in an area plus their nonliving environment."
   ],
   [
    "Niche",
    "A species' particular role and way of life in an ecosystem."
   ],
   [
    "Producer",
    "An organism (plant) that makes its own food from sunlight."
   ],
   [
    "Consumer",
    "An organism that eats others for energy."
   ],
   [
    "Energy pyramid",
    "A model showing energy shrinking at each higher feeding level."
   ],
   [
    "Carbon cycle",
    "The movement of carbon among air, living things, and the ground."
   ],
   [
    "Pollution",
    "Harmful substances released into air, water, or soil."
   ],
   [
    "Habitat destruction",
    "Removing the environments species need to live."
   ],
   [
    "Climate change",
    "Long-term warming and weather shifts from greenhouse gases."
   ],
   [
    "Greenhouse gas",
    "A gas (like CO₂) that traps heat in the atmosphere."
   ],
   [
    "Conservation",
    "Protecting ecosystems and using resources wisely."
   ],
   [
    "Biodiversity",
    "The variety of different species in an ecosystem."
   ]
  ],
  "quiz": [
   {
    "q": "An ecosystem includes:",
    "options": [
     "Living things and their nonliving environment",
     "Only animals",
     "Only plants",
     "Only water"
    ],
    "a": 0,
    "why": "It's organisms plus their physical surroundings, interconnected."
   },
   {
    "q": "A species' particular role in an ecosystem is its:",
    "options": [
     "Niche",
     "Kingdom",
     "Pyramid",
     "Cycle"
    ],
    "a": 0,
    "why": "A niche is how a species makes its living."
   },
   {
    "q": "Energy enters most ecosystems as:",
    "options": [
     "Sunlight",
     "Soil",
     "Rock",
     "Wind only"
    ],
    "a": 0,
    "why": "Producers capture sunlight through photosynthesis."
   },
   {
    "q": "About how much energy passes to the next feeding level?",
    "options": [
     "10%",
     "90%",
     "100%",
     "50%"
    ],
    "a": 0,
    "why": "Roughly 10%; the rest is lost as heat."
   },
   {
    "q": "The energy pyramid is widest at the:",
    "options": [
     "Base (producers)",
     "Peak (predators)",
     "Middle",
     "It's even"
    ],
    "a": 0,
    "why": "Many producers support progressively fewer consumers above."
   },
   {
    "q": "Which CYCLES through an ecosystem rather than flowing out?",
    "options": [
     "Matter like carbon and water",
     "Energy",
     "Sunlight",
     "Heat"
    ],
    "a": 0,
    "why": "Matter cycles and is reused; energy flows through and is lost."
   },
   {
    "q": "In the carbon cycle, plants take in:",
    "options": [
     "Carbon dioxide",
     "Oxygen only",
     "Nitrogen only",
     "Salt"
    ],
    "a": 0,
    "why": "Plants absorb CO₂; animals breathe it out; burning returns it."
   },
   {
    "q": "Clearing forests for farmland is an example of:",
    "options": [
     "Habitat destruction",
     "Conservation",
     "Recycling",
     "Sustainability"
    ],
    "a": 0,
    "why": "Removing habitat is a leading cause of extinction."
   },
   {
    "q": "Climate change is driven mainly by:",
    "options": [
     "Greenhouse gases from burning fossil fuels",
     "Too many trees",
     "Ocean salt",
     "Volcano smell"
    ],
    "a": 0,
    "why": "CO₂ and other greenhouse gases trap heat and warm the planet."
   },
   {
    "q": "Which is a greenhouse gas?",
    "options": [
     "Carbon dioxide",
     "Helium",
     "Argon",
     "Neon"
    ],
    "a": 0,
    "why": "CO₂ traps heat in the atmosphere."
   },
   {
    "q": "Protecting ecosystems and using resources wisely is called:",
    "options": [
     "Conservation",
     "Pollution",
     "Extinction",
     "Erosion"
    ],
    "a": 0,
    "why": "Conservation protects nature for the long term."
   },
   {
    "q": "Sustainability means using resources:",
    "options": [
     "At a rate nature can replace",
     "As fast as possible",
     "Only once",
     "Never"
    ],
    "a": 0,
    "why": "Meeting today's needs without using up tomorrow's resources."
   },
   {
    "q": "Which is a renewable energy source?",
    "options": [
     "Solar",
     "Coal",
     "Oil",
     "Natural gas"
    ],
    "a": 0,
    "why": "Solar (and wind) renew naturally; fossil fuels don't."
   },
   {
    "q": "Biodiversity is the:",
    "options": [
     "Variety of different species",
     "Number of rocks",
     "Amount of sunlight",
     "Temperature"
    ],
    "a": 0,
    "why": "Biodiversity is the range of life in an ecosystem."
   },
   {
    "q": "High biodiversity tends to make an ecosystem more:",
    "options": [
     "Stable and resilient",
     "Fragile",
     "Empty",
     "Polluted"
    ],
    "a": 0,
    "why": "Many species filling different roles help absorb shocks."
   }
  ]
 },
 "english-reading-phonics": {
  "title": "Reading & Phonics",
  "subject": "English",
  "level": "Grades K-5",
  "objectives": [
   "Explain how letters connect to sounds to decode words (phonics)",
   "Blend sounds to read words and segment words into sounds to spell",
   "Build fluency: reading smoothly, accurately, and with expression",
   "Use strategies to understand what you read (comprehension)",
   "Grow into an independent, confident reader"
  ],
  "intro": "Reading is the foundation of all learning — once you can read, you can teach yourself almost anything. This lesson covers how reading works, starting with phonics (matching letters to sounds), then blending those sounds into words, building up to smooth, fluent reading, and finally understanding and thinking about what you read.",
  "sections": [
   {
    "h": "Letters and their sounds (phonics)",
    "body": "Reading begins with a simple but powerful idea: letters stand for sounds. The English alphabet has 26 letters, but they make about 44 distinct sounds, called phonemes. The letter 'b' makes the /b/ sound; 's' makes /s/. This letter-to-sound connection is phonics, and it's the key that unlocks reading.\n\nSome sounds are made by letter teams: 'sh' makes one sound (/sh/), 'ch' makes /ch/, and two vowels often work together (as in 'rain'). Learning these letter-sound patterns lets a reader sound out words they've never seen before — the single most important skill a beginning reader builds.",
    "tip": "Phonics = matching letters to the sounds they make. It lets you 'sound out' brand-new words."
   },
   {
    "h": "Blending and segmenting",
    "body": "Once you know letter sounds, you combine them. Blending means pushing sounds together to read a word: /k/ /a/ /t/ blends into 'cat.' At first this is slow and deliberate, sound by sound; with practice it becomes instant.\n\nThe reverse skill is segmenting — breaking a spoken word back into its sounds, which is the foundation of spelling. If you can hear that 'dog' is /d/ /o/ /g/, you can write it. Blending (for reading) and segmenting (for spelling) are two sides of the same coin, and strong readers do both automatically.",
    "visual": "<svg viewBox=\"0 0 250 68\" width=\"230\" role=\"img\" aria-label=\"Blending the sounds k, a, t into the word cat\"><rect x=\"8\" y=\"14\" width=\"38\" height=\"36\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"27\" y=\"38\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"13\">/k/</text><text x=\"54\" y=\"38\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"14\">+</text><rect x=\"62\" y=\"14\" width=\"38\" height=\"36\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"81\" y=\"38\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"13\">/a/</text><text x=\"108\" y=\"38\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"14\">+</text><rect x=\"116\" y=\"14\" width=\"38\" height=\"36\" rx=\"6\" fill=\"rgba(79,156,240,.15)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"135\" y=\"38\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"13\">/t/</text><line x1=\"160\" y1=\"32\" x2=\"188\" y2=\"32\" stroke=\"#39e3c8\" stroke-width=\"2\"/><polygon points=\"188,28 196,32 188,36\" fill=\"#39e3c8\"/><text x=\"222\" y=\"39\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"17\">cat</text></svg>",
    "caption": "Blending: push the separate sounds together to read the whole word.",
    "example": "Blend to read: /s/ + /u/ + /n/ → 'sun.' Segment to spell: 'map' → /m/ /a/ /p/ → m-a-p.",
    "tip": "Blend sounds together to READ a word; break a word into sounds to SPELL it."
   },
   {
    "h": "Sight words and fluency",
    "body": "Some common words don't follow regular phonics rules — words like 'the,' 'said,' 'was,' and 'of.' These are sight words, and because they appear so often, readers learn to recognize them instantly rather than sounding them out every time.\n\nAs sounding-out and sight-word recognition become automatic, a reader gains fluency: the ability to read smoothly, accurately, and at a good pace, with natural expression. Fluency matters because a reader who no longer struggles with individual words can finally focus their attention on what the words mean.",
    "tip": "Fluency is reading smoothly and with expression — it frees your mind to think about the meaning."
   },
   {
    "h": "Understanding what you read",
    "body": "The whole point of reading is comprehension — understanding and thinking about the text. Good readers do this actively. They ask questions as they go ('Why did she do that?'), make predictions, and picture what's happening in their minds.\n\nThey also connect what they read to what they already know, and check themselves when something doesn't make sense, rereading if needed. After reading, they can summarize the main idea and recall key details. Comprehension turns reading from just saying words aloud into actually learning from them.",
    "tip": "Active readers ask questions, predict, picture the scene, and summarize — reading is thinking, not just decoding."
   },
   {
    "h": "Becoming a strong reader",
    "body": "Reading is a skill that grows with practice, like a muscle. The single best way to improve is to read a lot — a little every day, across many kinds of texts: stories, facts, poems, instructions. The more you read, the more words you recognize and the easier it becomes.\n\nChoosing books at the right level helps: not so easy they're boring, not so hard they're frustrating — a comfortable stretch. And reading should be enjoyable; a reader who finds books they love will read more, and a reader who reads more becomes a strong reader. Confidence and curiosity carry the rest.",
    "tip": "Read a little every day. The right book is a comfortable stretch — and one you actually enjoy."
   }
  ],
  "cards": [
   {
    "h": "Phonics",
    "body": "Letters stand for sounds (phonemes); matching them lets you sound out new words."
   },
   {
    "h": "Blending & segmenting",
    "body": "Blend sounds together to read; break words into sounds to spell."
   },
   {
    "h": "Sight words & fluency",
    "body": "Learn common irregular words by sight; fluency = smooth, expressive reading."
   },
   {
    "h": "Comprehension",
    "body": "Ask questions, predict, picture it, and summarize — reading is active thinking."
   },
   {
    "h": "Practice",
    "body": "Read a little daily at a comfortable level; enjoyment builds strong readers."
   }
  ],
  "flash": [
   [
    "Phonics",
    "Matching letters to the sounds they make."
   ],
   [
    "Phoneme",
    "A single distinct sound in a word."
   ],
   [
    "Blending",
    "Pushing sounds together to read a word."
   ],
   [
    "Segmenting",
    "Breaking a word into its separate sounds (for spelling)."
   ],
   [
    "Sight word",
    "A common word recognized instantly, not sounded out."
   ],
   [
    "Fluency",
    "Reading smoothly, accurately, and with expression."
   ],
   [
    "Comprehension",
    "Understanding and thinking about what you read."
   ],
   [
    "Prediction",
    "Guessing what will happen next in a text."
   ],
   [
    "Summary",
    "A short retelling of the main idea and key points."
   ],
   [
    "Decode",
    "To sound out and read an unfamiliar word."
   ],
   [
    "Vowel",
    "The letters a, e, i, o, u (and sometimes y)."
   ],
   [
    "Consonant",
    "Any letter that is not a vowel."
   ]
  ],
  "quiz": [
   {
    "q": "Phonics is:",
    "options": [
     "Matching letters to sounds",
     "Memorizing whole books",
     "Writing in cursive",
     "Reading silently"
    ],
    "a": 0,
    "why": "Phonics connects letters to the sounds they represent."
   },
   {
    "q": "About how many distinct sounds (phonemes) does English have?",
    "options": [
     "About 44",
     "Exactly 26",
     "About 100",
     "About 10"
    ],
    "a": 0,
    "why": "26 letters make roughly 44 sounds."
   },
   {
    "q": "Pushing /k/ /a/ /t/ together to say 'cat' is:",
    "options": [
     "Blending",
     "Segmenting",
     "Spelling aloud",
     "Predicting"
    ],
    "a": 0,
    "why": "Blending combines sounds to read a word."
   },
   {
    "q": "Breaking 'dog' into /d/ /o/ /g/ is:",
    "options": [
     "Segmenting",
     "Blending",
     "Skimming",
     "Summarizing"
    ],
    "a": 0,
    "why": "Segmenting splits a word into sounds — the basis of spelling."
   },
   {
    "q": "Words like 'the' and 'said' that don't follow normal rules are:",
    "options": [
     "Sight words",
     "Phonemes",
     "Vowels",
     "Prefixes"
    ],
    "a": 0,
    "why": "Sight words are learned by instant recognition."
   },
   {
    "q": "Reading smoothly, accurately, and with expression is:",
    "options": [
     "Fluency",
     "Phonics",
     "Segmenting",
     "Decoding"
    ],
    "a": 0,
    "why": "Fluency is smooth, expressive reading."
   },
   {
    "q": "Why does fluency matter?",
    "options": [
     "It frees your mind to focus on meaning",
     "It makes you read louder",
     "It replaces comprehension",
     "It avoids reading"
    ],
    "a": 0,
    "why": "Not struggling with words lets you think about what they mean."
   },
   {
    "q": "Understanding and thinking about what you read is:",
    "options": [
     "Comprehension",
     "Blending",
     "Capitalization",
     "Fluency"
    ],
    "a": 0,
    "why": "Comprehension is the real goal of reading."
   },
   {
    "q": "A good reader, when confused, should:",
    "options": [
     "Reread the part that didn't make sense",
     "Skip the whole book",
     "Read faster",
     "Stop reading forever"
    ],
    "a": 0,
    "why": "Rereading is a key self-monitoring strategy."
   },
   {
    "q": "The best single way to improve reading is to:",
    "options": [
     "Read a lot, a little every day",
     "Only watch videos",
     "Memorize the dictionary",
     "Read once a year"
    ],
    "a": 0,
    "why": "Regular reading builds word recognition and comprehension."
   },
   {
    "q": "The 'right' book for practice is:",
    "options": [
     "A comfortable stretch you enjoy",
     "As hard as possible",
     "As easy as possible",
     "Any textbook"
    ],
    "a": 0,
    "why": "Not too easy, not too hard, and enjoyable keeps you reading."
   },
   {
    "q": "To decode a word means to:",
    "options": [
     "Sound it out and read it",
     "Translate it to Spanish",
     "Erase it",
     "Count its letters"
    ],
    "a": 0,
    "why": "Decoding is sounding out an unfamiliar word."
   },
   {
    "q": "Which are vowels?",
    "options": [
     "a, e, i, o, u",
     "b, c, d",
     "s, t, r",
     "x, y, z only"
    ],
    "a": 0,
    "why": "a, e, i, o, u (and sometimes y) are the vowels."
   },
   {
    "q": "Picturing the scene in your mind while reading helps with:",
    "options": [
     "Comprehension",
     "Spelling only",
     "Handwriting",
     "Nothing"
    ],
    "a": 0,
    "why": "Visualizing is an active comprehension strategy."
   },
   {
    "q": "After reading, a strong reader can:",
    "options": [
     "Summarize the main idea",
     "Forget it immediately",
     "Only recall the last word",
     "Do nothing"
    ],
    "a": 0,
    "why": "Summarizing shows real understanding."
   }
  ]
 },
 "english-vocabulary": {
  "title": "Vocabulary",
  "subject": "English",
  "level": "Grades 4-10",
  "objectives": [
   "Understand what vocabulary is and why it matters",
   "Use context clues to figure out unknown words",
   "Break words into roots, prefixes, and suffixes to find meaning",
   "Tell apart synonyms, antonyms, and shades of meaning",
   "Build a lifelong habit of growing your vocabulary"
  ],
  "intro": "Your vocabulary is the set of words you know and use — and it shapes how well you read, write, speak, and understand the world. A bigger vocabulary lets you grasp more of what you read and express yourself more precisely. This lesson shows how to figure out new words and keep growing your word power for life.",
  "sections": [
   {
    "h": "What vocabulary is and why it matters",
    "body": "Vocabulary is simply the collection of words you know. You actually have two: your recognition vocabulary (words you understand when you hear or read them) and your usage vocabulary (words you actively use). The first is always larger, and both grow throughout life.\n\nVocabulary matters more than almost any other language skill. Research consistently links a strong vocabulary to better reading comprehension, school success, and clearer communication. Simply put, you can only understand ideas you have words for — so the more words you own, the more of the world you can think and talk about.",
    "tip": "You know more words than you use. Both grow for life — and a bigger vocabulary means understanding more of everything you read."
   },
   {
    "h": "Context clues",
    "body": "You don't need a dictionary for every unfamiliar word. Often the surrounding sentence gives you clues to the meaning — this is using context clues. A sentence may define the word directly, give an example, offer a contrast, or let you infer the meaning from the overall situation.\n\nFor instance, in 'The arid desert hadn't seen rain in years,' you can tell 'arid' means dry even without knowing the word. Skilled readers do this constantly, almost without noticing. When you meet a new word, pause and ask: what does the rest of the sentence tell me it must mean?",
    "example": "'He was gregarious, always surrounded by friends and talking to everyone.' → gregarious means sociable/outgoing.",
    "tip": "Before reaching for a dictionary, read the whole sentence — the context often reveals the meaning."
   },
   {
    "h": "Word parts: roots, prefixes, suffixes",
    "body": "Many English words are built from smaller parts, and knowing them lets you decode thousands of words. A root is the core meaning (the root 'port' means carry). A prefix attaches to the front to change meaning ('re-' means again, 'un-' means not). A suffix attaches to the end, often changing the word's job ('-able' means able to be).\n\nCombine them and the meaning emerges: 'transport' = trans (across) + port (carry) = carry across; 'unbreakable' = un (not) + break + able = not able to be broken. Learning common word parts is like getting a master key — one root can unlock a whole family of related words.",
    "visual": "<svg viewBox=\"0 0 260 88\" width=\"245\" role=\"img\" aria-label=\"The word unbreakable broken into prefix un, root break, and suffix able\"><rect x=\"8\" y=\"8\" width=\"48\" height=\"30\" rx=\"6\" fill=\"rgba(232,184,75,.18)\" stroke=\"#e8b84b\" stroke-width=\"1.5\"/><text x=\"32\" y=\"28\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"12\">un-</text><rect x=\"64\" y=\"8\" width=\"60\" height=\"30\" rx=\"6\" fill=\"rgba(79,156,240,.18)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"94\" y=\"28\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"12\">break</text><rect x=\"132\" y=\"8\" width=\"56\" height=\"30\" rx=\"6\" fill=\"rgba(57,227,200,.15)\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"28\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"12\">-able</text><text x=\"32\" y=\"52\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"8\">prefix (not)</text><text x=\"94\" y=\"52\" text-anchor=\"middle\" fill=\"#4f9cf0\" font-size=\"8\">root</text><text x=\"160\" y=\"52\" text-anchor=\"middle\" fill=\"#39e3c8\" font-size=\"8\">suffix (able to be)</text><text x=\"130\" y=\"78\" text-anchor=\"middle\" fill=\"#9adbcf\" font-size=\"10\">unbreakable = not able to be broken</text></svg>",
    "caption": "Break a long word into its parts — prefix, root, suffix — and the meaning often appears.",
    "example": "'Unbelievable' = un (not) + believe + able (able to be) = not able to be believed.",
    "tip": "Learn common roots and prefixes once, and you can decode hundreds of words you've never seen."
   },
   {
    "h": "Synonyms, antonyms, and shades of meaning",
    "body": "Words relate to each other. Synonyms have similar meanings (big, large, huge); antonyms have opposite meanings (hot/cold, happy/sad). Knowing synonyms gives you variety and precision; knowing antonyms sharpens contrast.\n\nBut synonyms are rarely identical — they carry different shades of meaning, or connotations. 'Slim,' 'thin,' and 'skinny' all describe a narrow build, but 'slim' sounds positive while 'skinny' can sound negative. A strong vocabulary isn't just knowing many words; it's choosing the one whose exact shade fits what you mean.",
    "tip": "Synonyms aren't identical — 'confident' and 'arrogant' are close in meaning but opposite in tone. Pick the right shade."
   },
   {
    "h": "Growing your vocabulary for life",
    "body": "Vocabulary grows mostly through exposure, and the number-one source is reading. Readers constantly meet new words in context and absorb them naturally; it's why avid readers tend to have large vocabularies. Reading widely — not just one kind of book — exposes you to the most words.\n\nYou can speed it up deliberately: keep a list of new words you encounter, look up ones context can't crack, and actually use a new word a few times until it sticks. Pay attention to words in conversation, podcasts, and shows too. A growing vocabulary is a lifelong project that quietly makes everything else — reading, writing, thinking — easier.",
    "tip": "Read widely, note new words, and use each one a few times until it's yours. Vocabulary grows for life."
   }
  ],
  "cards": [
   {
    "h": "What & why",
    "body": "Vocabulary is the words you know; a bigger one means better comprehension and clearer expression."
   },
   {
    "h": "Context clues",
    "body": "The surrounding sentence often reveals a new word's meaning — read it before reaching for a dictionary."
   },
   {
    "h": "Word parts",
    "body": "Root (core meaning) + prefix (front) + suffix (end). Learn them to decode whole word families."
   },
   {
    "h": "Synonyms & antonyms",
    "body": "Similar vs. opposite meanings; synonyms carry different shades (connotations)."
   },
   {
    "h": "Growing it",
    "body": "Read widely, note new words, and use them until they stick — a lifelong habit."
   }
  ],
  "flash": [
   [
    "Vocabulary",
    "The set of words a person knows and uses."
   ],
   [
    "Context clue",
    "A hint to a word's meaning from the surrounding text."
   ],
   [
    "Root",
    "The core part of a word that carries its main meaning."
   ],
   [
    "Prefix",
    "A word part added to the front to change meaning."
   ],
   [
    "Suffix",
    "A word part added to the end, often changing the word's job."
   ],
   [
    "Synonym",
    "A word with a similar meaning to another."
   ],
   [
    "Antonym",
    "A word with the opposite meaning."
   ],
   [
    "Connotation",
    "The feeling or tone a word carries beyond its definition."
   ],
   [
    "Denotation",
    "A word's plain dictionary definition."
   ],
   [
    "Infer",
    "To work out a meaning from clues."
   ],
   [
    "Define",
    "To state exactly what a word means."
   ],
   [
    "Exposure",
    "Meeting new words through reading and listening."
   ]
  ],
  "quiz": [
   {
    "q": "Your vocabulary is:",
    "options": [
     "The words you know and use",
     "Your handwriting",
     "Your reading speed",
     "Your grammar only"
    ],
    "a": 0,
    "why": "Vocabulary is the collection of words you know."
   },
   {
    "q": "A strong vocabulary is most linked to better:",
    "options": [
     "Reading comprehension",
     "Running speed",
     "Memory of faces",
     "Math alone"
    ],
    "a": 0,
    "why": "More words means understanding more of what you read."
   },
   {
    "q": "Using the surrounding sentence to guess a word's meaning is using:",
    "options": [
     "Context clues",
     "A thesaurus",
     "A prefix",
     "A synonym"
    ],
    "a": 0,
    "why": "Context clues come from the words around the unknown word."
   },
   {
    "q": "In 'The arid desert hadn't seen rain in years,' 'arid' means:",
    "options": [
     "Dry",
     "Wet",
     "Cold",
     "Loud"
    ],
    "a": 0,
    "why": "The context (desert, no rain) signals 'dry.'"
   },
   {
    "q": "The core part of a word that carries its meaning is the:",
    "options": [
     "Root",
     "Prefix",
     "Suffix",
     "Synonym"
    ],
    "a": 0,
    "why": "The root holds the main meaning."
   },
   {
    "q": "In 'rewrite,' the part 're-' is a:",
    "options": [
     "Prefix",
     "Suffix",
     "Root",
     "Antonym"
    ],
    "a": 0,
    "why": "A prefix attaches to the front; 're-' means again."
   },
   {
    "q": "In 'breakable,' the part '-able' is a:",
    "options": [
     "Suffix",
     "Prefix",
     "Root",
     "Synonym"
    ],
    "a": 0,
    "why": "A suffix attaches to the end; '-able' means able to be."
   },
   {
    "q": "'Transport' = trans (across) + port. 'Port' means:",
    "options": [
     "Carry",
     "Stop",
     "Water",
     "Door"
    ],
    "a": 0,
    "why": "The root 'port' means carry; transport = carry across."
   },
   {
    "q": "'Big' and 'huge' are:",
    "options": [
     "Synonyms",
     "Antonyms",
     "Prefixes",
     "Roots"
    ],
    "a": 0,
    "why": "They have similar meanings."
   },
   {
    "q": "'Hot' and 'cold' are:",
    "options": [
     "Antonyms",
     "Synonyms",
     "Suffixes",
     "Context clues"
    ],
    "a": 0,
    "why": "They have opposite meanings."
   },
   {
    "q": "The tone or feeling a word carries beyond its definition is its:",
    "options": [
     "Connotation",
     "Denotation",
     "Prefix",
     "Root"
    ],
    "a": 0,
    "why": "Connotation is a word's emotional shade."
   },
   {
    "q": "'Skinny' vs. 'slim' differ mainly in:",
    "options": [
     "Connotation (tone)",
     "Spelling only",
     "Number of letters",
     "Nothing"
    ],
    "a": 0,
    "why": "Both mean thin, but 'slim' sounds positive, 'skinny' negative."
   },
   {
    "q": "The number-one way to grow vocabulary is to:",
    "options": [
     "Read widely",
     "Watch TV with no sound",
     "Avoid new words",
     "Only use short words"
    ],
    "a": 0,
    "why": "Reading exposes you to the most new words in context."
   },
   {
    "q": "To make a new word stick, you should:",
    "options": [
     "Use it a few times",
     "Write it once and forget it",
     "Never say it",
     "Only read it"
    ],
    "a": 0,
    "why": "Actively using a word cements it in memory."
   },
   {
    "q": "A word's plain dictionary meaning is its:",
    "options": [
     "Denotation",
     "Connotation",
     "Prefix",
     "Antonym"
    ],
    "a": 0,
    "why": "Denotation is the literal definition; connotation is the tone."
   }
  ]
 },
 "english-literature": {
  "title": "Literature",
  "subject": "English",
  "level": "Grades 6-12",
  "objectives": [
   "Identify the main genres of literature",
   "Analyze the elements of a story: plot, character, setting, theme",
   "Recognize point of view and how it shapes a story",
   "Understand figurative language and literary devices",
   "Read actively to interpret meaning, not just plot"
  ],
  "intro": "Literature is writing valued as art — stories, poems, and plays that entertain, move us, and help us understand ourselves and others. Reading literature closely teaches you to see how writers create meaning and feeling with words. This lesson covers genres, the elements of a story, point of view, figurative language, and how to read like an analyst.",
  "sections": [
   {
    "h": "Genres of literature",
    "body": "Literature divides into broad genres. Fiction tells invented stories — novels and short stories. Nonfiction is based on fact — biographies, essays, memoirs. Poetry uses compressed, often rhythmic language to create images and feeling. Drama is written to be performed, told mostly through dialogue and action on a stage.\n\nWithin fiction are sub-genres like mystery, fantasy, science fiction, and realistic fiction, each with its own conventions. Knowing the genre sets your expectations: you read a poem differently than a news report, and a play differently than a novel. Genre is the first lens through which you approach any text.",
    "tip": "The four big genres: fiction (invented), nonfiction (fact), poetry (compressed language), drama (to be performed)."
   },
   {
    "h": "The elements of a story",
    "body": "Most stories are built from a few key elements. The plot is the sequence of events — what happens. The characters are the people (or beings) the story is about, driven by their traits and motivations. The setting is when and where the story takes place, which shapes its mood and possibilities.\n\nAt the heart is usually a conflict — a struggle the characters face, whether against another person, nature, society, or themselves. The conflict drives the plot forward. And underneath it all is the theme: the deeper message or insight about life the story explores. Plot is what happens; theme is what it means.",
    "visual": "<svg viewBox=\"0 0 250 150\" width=\"240\" role=\"img\" aria-label=\"A plot pyramid showing exposition, rising action, climax, falling action, and resolution\"><polyline points=\"15,126 115,28 235,126\" fill=\"none\" stroke=\"#4f9cf0\" stroke-width=\"2.5\"/><circle cx=\"115\" cy=\"28\" r=\"4\" fill=\"#f05a5a\"/><circle cx=\"15\" cy=\"126\" r=\"3\" fill=\"#39e3c8\"/><circle cx=\"235\" cy=\"126\" r=\"3\" fill=\"#39e3c8\"/><text x=\"12\" y=\"140\" text-anchor=\"start\" fill=\"#9aa6c0\" font-size=\"8.5\">exposition</text><text x=\"52\" y=\"76\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\" transform=\"rotate(-44 52 76)\">rising action</text><text x=\"115\" y=\"20\" text-anchor=\"middle\" fill=\"#f05a5a\" font-size=\"9\">climax</text><text x=\"178\" y=\"76\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"8.5\" transform=\"rotate(44 178 76)\">falling action</text><text x=\"238\" y=\"140\" text-anchor=\"end\" fill=\"#9aa6c0\" font-size=\"8.5\">resolution</text></svg>",
    "caption": "A classic plot rises through conflict to a climax, then falls to a resolution.",
    "example": "In many stories the conflict rises to a climax (the turning point), then falls to a resolution.",
    "tip": "Plot = what happens; theme = what it means. Conflict is the engine that drives the plot."
   },
   {
    "h": "The shape of a plot",
    "body": "Classic plots follow a recognizable shape, often drawn as a pyramid. It opens with exposition — introducing the characters, setting, and situation. Then rising action builds tension as the conflict develops and complications pile up. These lead to the climax, the turning point of highest tension where the outcome is decided.\n\nAfter the climax comes the falling action, as events wind down, and finally the resolution, where the conflict is settled and loose ends are tied. Not every story follows this exactly, but recognizing the pattern helps you track where you are in a story and feel its rising and falling tension.",
    "tip": "Exposition → rising action → climax → falling action → resolution. The climax is the peak."
   },
   {
    "h": "Point of view and voice",
    "body": "Who tells the story changes everything. In first person, a character narrates using 'I,' giving us their direct thoughts but limiting us to what they know. In third person, an outside narrator uses 'he,' 'she,' 'they'; a third-person omniscient narrator knows everyone's thoughts, while a limited one follows just one character.\n\nPoint of view controls what information the reader gets and how we feel about events. An unreliable narrator — one we can't fully trust — adds another layer. Alongside point of view is voice: the distinctive style and personality of the writing. Noticing who's telling the story, and how, is central to understanding it.",
    "example": "First person: 'I opened the door.' Third person: 'She opened the door.'",
    "tip": "First person = 'I' (inside one head); third person = 'he/she/they' (outside). POV shapes what you know."
   },
   {
    "h": "Figurative language and devices",
    "body": "Writers use figurative language — words that mean more than their literal sense — to create vivid images and deeper meaning. A simile compares using 'like' or 'as' ('brave as a lion'); a metaphor compares directly ('the classroom was a zoo'). Personification gives human traits to non-human things ('the wind whispered').\n\nOther devices add layers: symbolism uses an object to stand for a bigger idea (a dove for peace); imagery appeals to the senses; irony means the opposite of what's expected. These tools are why literature rewards close reading — the meaning often lives beneath the surface, in how things are said as much as what is said.",
    "tip": "Simile uses 'like'/'as'; metaphor says one thing IS another; personification gives things human traits."
   },
   {
    "h": "Reading like an analyst",
    "body": "Reading literature deeply means going beyond 'what happened' to 'what does it mean and how does the writer do it.' Analytical readers ask questions: Why did the character make that choice? What does this setting or object represent? What is the author really saying about life?\n\nThey notice patterns, pay attention to word choice, and support their interpretations with evidence from the text. There's rarely one 'right' answer, but good interpretations are grounded in the words on the page. This is the real reward of literature: it trains you to read carefully, think deeply, and understand experiences far beyond your own."
   }
  ],
  "cards": [
   {
    "h": "Genres",
    "body": "Fiction (invented), nonfiction (fact), poetry (compressed language), drama (performed)."
   },
   {
    "h": "Story elements",
    "body": "Plot, character, setting, conflict, and theme. Plot = what happens; theme = what it means."
   },
   {
    "h": "Plot shape",
    "body": "Exposition → rising action → climax (peak) → falling action → resolution."
   },
   {
    "h": "Point of view",
    "body": "First person ('I') vs. third person ('he/she/they'); POV controls what the reader knows."
   },
   {
    "h": "Figurative language",
    "body": "Simile (like/as), metaphor (is), personification, symbolism, imagery, irony."
   }
  ],
  "flash": [
   [
    "Fiction",
    "Invented stories, such as novels and short stories."
   ],
   [
    "Nonfiction",
    "Writing based on fact, such as memoirs and essays."
   ],
   [
    "Plot",
    "The sequence of events in a story."
   ],
   [
    "Character",
    "A person or being the story is about."
   ],
   [
    "Setting",
    "When and where a story takes place."
   ],
   [
    "Conflict",
    "The central struggle that drives the plot."
   ],
   [
    "Theme",
    "The deeper message or insight about life."
   ],
   [
    "Climax",
    "The turning point of highest tension in a plot."
   ],
   [
    "First person",
    "A story narrated by a character using 'I.'"
   ],
   [
    "Third person",
    "A story told by an outside narrator ('he/she/they')."
   ],
   [
    "Simile",
    "A comparison using 'like' or 'as.'"
   ],
   [
    "Metaphor",
    "A direct comparison saying one thing is another."
   ]
  ],
  "quiz": [
   {
    "q": "Invented stories like novels belong to which genre?",
    "options": [
     "Fiction",
     "Nonfiction",
     "Poetry",
     "Drama"
    ],
    "a": 0,
    "why": "Fiction is invented narrative."
   },
   {
    "q": "Writing meant to be performed on a stage is:",
    "options": [
     "Drama",
     "Poetry",
     "Nonfiction",
     "A novel"
    ],
    "a": 0,
    "why": "Drama is written for performance."
   },
   {
    "q": "The sequence of events in a story is the:",
    "options": [
     "Plot",
     "Theme",
     "Setting",
     "Narrator"
    ],
    "a": 0,
    "why": "Plot is what happens."
   },
   {
    "q": "When and where a story takes place is the:",
    "options": [
     "Setting",
     "Plot",
     "Climax",
     "Voice"
    ],
    "a": 0,
    "why": "The setting is the time and place."
   },
   {
    "q": "The central struggle that drives a story is the:",
    "options": [
     "Conflict",
     "Resolution",
     "Genre",
     "Simile"
    ],
    "a": 0,
    "why": "Conflict is the engine of the plot."
   },
   {
    "q": "The deeper message about life a story explores is its:",
    "options": [
     "Theme",
     "Plot",
     "Setting",
     "Exposition"
    ],
    "a": 0,
    "why": "Theme = what the story means."
   },
   {
    "q": "The turning point of highest tension is the:",
    "options": [
     "Climax",
     "Exposition",
     "Resolution",
     "Hook"
    ],
    "a": 0,
    "why": "The climax is the peak of the plot pyramid."
   },
   {
    "q": "What comes right after the climax?",
    "options": [
     "Falling action",
     "Exposition",
     "Rising action",
     "Title"
    ],
    "a": 0,
    "why": "Events wind down in the falling action."
   },
   {
    "q": "A story told with 'I' is in:",
    "options": [
     "First person",
     "Third person",
     "Second person only",
     "No point of view"
    ],
    "a": 0,
    "why": "First-person narrators use 'I.'"
   },
   {
    "q": "A narrator who knows every character's thoughts is:",
    "options": [
     "Third-person omniscient",
     "First person",
     "Unreliable",
     "Limited to one"
    ],
    "a": 0,
    "why": "Omniscient means all-knowing."
   },
   {
    "q": "'Brave as a lion' is a:",
    "options": [
     "Simile",
     "Metaphor",
     "Personification",
     "Symbol"
    ],
    "a": 0,
    "why": "It compares using 'as' — a simile."
   },
   {
    "q": "'The classroom was a zoo' is a:",
    "options": [
     "Metaphor",
     "Simile",
     "Irony",
     "Setting"
    ],
    "a": 0,
    "why": "It says one thing IS another — a metaphor."
   },
   {
    "q": "'The wind whispered' gives the wind a human trait. This is:",
    "options": [
     "Personification",
     "Simile",
     "Plot",
     "Genre"
    ],
    "a": 0,
    "why": "Personification gives human traits to non-human things."
   },
   {
    "q": "A dove standing for peace is an example of:",
    "options": [
     "Symbolism",
     "A simile",
     "A fragment",
     "Exposition"
    ],
    "a": 0,
    "why": "Symbolism uses an object to represent a bigger idea."
   },
   {
    "q": "Analytical reading means focusing on:",
    "options": [
     "What it means and how the writer does it",
     "Only what happened",
     "Only the last page",
     "The cover art"
    ],
    "a": 0,
    "why": "Analysis goes beyond plot to meaning and craft, backed by evidence."
   }
  ]
 },
 "social-us-history": {
  "title": "US History",
  "subject": "Social Studies",
  "level": "Grades 5-12",
  "objectives": [
   "Trace the major eras of US history from founding to today",
   "Explain the founding: colonization, revolution, and the Constitution",
   "Describe westward expansion, the divide over slavery, and the Civil War",
   "Explain industrialization, reform, and America's rise as a world power",
   "Connect historical events to the present"
  ],
  "intro": "US history is the story of how the United States came to be — its founding ideals, its conflicts, and its ongoing struggle to live up to the promise that all people are created equal. Understanding it helps you make sense of the country today. This lesson traces the major eras from the first colonies to modern America.",
  "sections": [
   {
    "h": "Founding: colonies to a new nation",
    "body": "The United States began as thirteen British colonies along the Atlantic coast. By the 1770s, many colonists resented being taxed by a Parliament they had no vote in — 'no taxation without representation.' Tensions erupted into the American Revolution (1775–1783), and in 1776 the colonies declared independence, asserting that people have rights to 'life, liberty, and the pursuit of happiness.'\n\nAfter winning the war, the new nation wrote the Constitution (1787), creating a federal government with checks and balances, soon followed by the Bill of Rights protecting individual freedoms. These founding documents, and the ideals behind them, still shape American government and life today.",
    "visual": "<svg viewBox=\"0 0 250 92\" width=\"240\" role=\"img\" aria-label=\"Timeline of major eras in US history\"><line x1=\"14\" y1=\"50\" x2=\"236\" y2=\"50\" stroke=\"#6b7a98\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"25\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">1776</text><text x=\"25\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">founding</text><circle cx=\"76\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"76\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">1865</text><text x=\"76\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">Civil War</text><circle cx=\"128\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"128\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">1900</text><text x=\"128\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">industry</text><circle cx=\"180\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"180\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">1945</text><text x=\"180\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">superpower</text><circle cx=\"231\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"231\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">today</text></svg>",
    "caption": "Major eras of US history, from the 1776 founding to the present.",
    "example": "1776 Declaration of Independence; 1787 Constitution; 1791 Bill of Rights (first 10 amendments).",
    "tip": "The founding era set the ideals — liberty, rights, self-government — the US has worked toward ever since."
   },
   {
    "h": "Expansion and a divided nation",
    "body": "Through the 1800s, the United States expanded westward across the continent — through purchases, treaties, war, and the forced removal of Native American peoples from their lands, a tragic cost of that growth. The country grew rapidly in size and population.\n\nBut expansion exposed a deep divide: slavery. The Southern economy relied on enslaved people, while the North increasingly opposed slavery. The conflict exploded into the Civil War (1861–1865), the deadliest war in American history. The North's victory preserved the Union and ended slavery — but the struggle for true equality was far from over.",
    "tip": "The 1800s = westward expansion (at great cost to Native peoples) and a nation torn apart over slavery."
   },
   {
    "h": "Reconstruction, industry, and reform",
    "body": "After the Civil War, Reconstruction tried to rebuild the South and secure rights for formerly enslaved people, but its gains were rolled back, and segregation took hold for generations. Meanwhile, the late 1800s saw explosive industrialization: factories, railroads, and cities grew, powered by waves of immigrants.\n\nThis rapid growth brought wealth but also harsh working conditions and inequality, sparking the Progressive reform movement of the early 1900s — pushing for labor laws, women's right to vote (won in 1920), and curbs on corporate power. America was becoming a modern industrial nation, wrestling with the problems that came with it.",
    "tip": "Late 1800s–early 1900s: factories and immigration transformed America; reformers fought the resulting abuses."
   },
   {
    "h": "America and the modern world",
    "body": "The 20th century pulled the United States onto the world stage. It fought in two World Wars, with World War II (1941–1945) ending its isolation for good and leaving it a global superpower. The decades after brought the Cold War rivalry with the Soviet Union, the Civil Rights Movement that dismantled legal segregation, and vast social and technological change.\n\nFrom the fall of the Soviet Union to the digital age, the US became the world's leading economic and military power while continuing to debate its direction at home. The nation's history is one of constant change, driven by both its founding ideals and its unresolved conflicts.",
    "example": "Key 20th-century markers: WWII (1941–45), the Civil Rights Movement (1950s–60s), the Cold War (ended 1991).",
    "tip": "The 1900s turned the US into a global superpower, while movements at home expanded rights and equality."
   },
   {
    "h": "Why history matters",
    "body": "History isn't just memorizing dates — it's understanding cause and effect, and how the past shapes the present. The Constitution written in 1787 still governs you; debates about rights, equality, and government power that began centuries ago continue today.\n\nStudying history teaches you to weigh evidence, understand different perspectives, and see that the present wasn't inevitable — people's choices made it. It also reveals patterns: how nations rise and struggle, how rights are won and defended. A citizen who knows history is far harder to mislead and far better equipped to shape what comes next."
   }
  ],
  "cards": [
   {
    "h": "Founding",
    "body": "13 colonies → Revolution (1775–83) → Declaration (1776) → Constitution (1787) + Bill of Rights."
   },
   {
    "h": "Expansion & Civil War",
    "body": "1800s westward growth (at Native peoples' expense); slavery split the nation; Civil War (1861–65) ended it."
   },
   {
    "h": "Industry & reform",
    "body": "Factories, railroads, and immigration reshaped America; Progressives fought abuses; women won the vote in 1920."
   },
   {
    "h": "Modern superpower",
    "body": "Two World Wars, the Cold War, and the Civil Rights Movement made the US a global power still debating its path."
   },
   {
    "h": "Why it matters",
    "body": "History explains the present, teaches you to weigh evidence, and makes you a harder-to-mislead citizen."
   }
  ],
  "flash": [
   [
    "Colony",
    "A territory settled and controlled by a distant country."
   ],
   [
    "American Revolution",
    "The 1775–83 war that won US independence from Britain."
   ],
   [
    "Declaration of Independence",
    "The 1776 document declaring the colonies free and stating their ideals."
   ],
   [
    "Constitution",
    "The 1787 supreme law setting up the US government."
   ],
   [
    "Bill of Rights",
    "The first 10 amendments guaranteeing individual freedoms."
   ],
   [
    "Civil War",
    "The 1861–65 war over slavery and union; the North won."
   ],
   [
    "Reconstruction",
    "The post-Civil War effort to rebuild the South and secure rights."
   ],
   [
    "Industrialization",
    "The shift to factories, railroads, and cities in the late 1800s."
   ],
   [
    "Progressive movement",
    "Early-1900s reforms for labor, voting, and curbing corporate power."
   ],
   [
    "Cold War",
    "The US–Soviet rivalry from after WWII to 1991."
   ],
   [
    "Civil Rights Movement",
    "The 1950s–60s struggle that ended legal segregation."
   ],
   [
    "Superpower",
    "A nation with dominant global economic and military power."
   ]
  ],
  "quiz": [
   {
    "q": "The US began as how many British colonies?",
    "options": [
     "Thirteen",
     "Fifty",
     "Seven",
     "One"
    ],
    "a": 0,
    "why": "The thirteen Atlantic-coast colonies formed the original US."
   },
   {
    "q": "The colonists' complaint 'no taxation without representation' was aimed at:",
    "options": [
     "Being taxed with no vote in Parliament",
     "Having too many votes",
     "Paying no taxes",
     "The Constitution"
    ],
    "a": 0,
    "why": "They objected to taxes imposed without any representation."
   },
   {
    "q": "The Declaration of Independence was signed in:",
    "options": [
     "1776",
     "1865",
     "1941",
     "1620"
    ],
    "a": 0,
    "why": "1776 declared the colonies independent."
   },
   {
    "q": "The supreme law setting up the US government is the:",
    "options": [
     "Constitution",
     "Declaration",
     "Bill of Sale",
     "Magna Carta"
    ],
    "a": 0,
    "why": "The 1787 Constitution frames the government."
   },
   {
    "q": "The first ten amendments are called the:",
    "options": [
     "Bill of Rights",
     "Articles",
     "Preamble",
     "Cabinet"
    ],
    "a": 0,
    "why": "The Bill of Rights guarantees individual freedoms."
   },
   {
    "q": "The Civil War (1861–65) was fought mainly over:",
    "options": [
     "Slavery and union",
     "Taxes on tea",
     "Foreign trade",
     "Religion"
    ],
    "a": 0,
    "why": "The divide over slavery split North and South."
   },
   {
    "q": "The Civil War ended with:",
    "options": [
     "The Union preserved and slavery abolished",
     "The South winning",
     "A foreign takeover",
     "No change"
    ],
    "a": 0,
    "why": "The North's victory preserved the Union and ended slavery."
   },
   {
    "q": "The effort to rebuild the South after the war was:",
    "options": [
     "Reconstruction",
     "Revolution",
     "Reformation",
     "Reconciliation"
    ],
    "a": 0,
    "why": "Reconstruction aimed to rebuild and secure rights, with mixed results."
   },
   {
    "q": "The late 1800s were defined by:",
    "options": [
     "Industrialization and immigration",
     "Only farming",
     "No growth",
     "Isolation"
    ],
    "a": 0,
    "why": "Factories, railroads, cities, and immigrants transformed America."
   },
   {
    "q": "American women won the right to vote in:",
    "options": [
     "1920",
     "1776",
     "1865",
     "2000"
    ],
    "a": 0,
    "why": "The 19th Amendment (1920) gave women the vote."
   },
   {
    "q": "World War II left the United States as a:",
    "options": [
     "Global superpower",
     "British colony",
     "Neutral farm nation",
     "Small kingdom"
    ],
    "a": 0,
    "why": "WWII (1941–45) ended US isolation and made it a superpower."
   },
   {
    "q": "The US–Soviet rivalry after WWII was the:",
    "options": [
     "Cold War",
     "Civil War",
     "World War I",
     "Revolution"
    ],
    "a": 0,
    "why": "The Cold War lasted until the Soviet Union fell in 1991."
   },
   {
    "q": "The movement that ended legal segregation was the:",
    "options": [
     "Civil Rights Movement",
     "Progressive movement",
     "Cold War",
     "Reconstruction"
    ],
    "a": 0,
    "why": "The 1950s–60s Civil Rights Movement dismantled legal segregation."
   },
   {
    "q": "Studying history helps a citizen mainly by:",
    "options": [
     "Understanding the present and weighing evidence",
     "Memorizing only dates",
     "Predicting lottery numbers",
     "Avoiding all news"
    ],
    "a": 0,
    "why": "History explains the present and builds critical judgment."
   },
   {
    "q": "A key lesson of US history is that the present was:",
    "options": [
     "Shaped by people's choices, not inevitable",
     "Always going to happen",
     "Decided by one person",
     "Unchangeable"
    ],
    "a": 0,
    "why": "Human choices made history — and can shape what comes next."
   }
  ]
 },
 "social-world-history": {
  "title": "World History",
  "subject": "Social Studies",
  "level": "Grades 6-12",
  "objectives": [
   "Trace major eras of world history from early civilizations to today",
   "Describe the first civilizations and the classical empires",
   "Explain the spread of religions, trade, and ideas across regions",
   "Describe exploration, revolutions, and industrialization",
   "Understand the modern globalized world and its roots"
  ],
  "intro": "World history is the story of all humanity — how people everywhere built civilizations, exchanged ideas, clashed, and connected into the interconnected world of today. It gives you the big picture: where human societies came from and how they shaped one another. This lesson traces the major eras across the globe.",
  "sections": [
   {
    "h": "The first civilizations",
    "body": "For most of human existence, people lived as nomadic hunter-gatherers. The great turning point was the Agricultural Revolution, around 10,000 years ago, when people learned to farm. Farming produced surplus food, which let people settle in one place, grow in number, and specialize in crafts and trades.\n\nThis gave rise to the first civilizations, in river valleys where farming thrived: Mesopotamia (between the Tigris and Euphrates), ancient Egypt (the Nile), the Indus Valley, and China (the Yellow River). These early societies invented writing, cities, laws, and government — the foundations of everything that followed.",
    "visual": "<svg viewBox=\"0 0 250 92\" width=\"240\" role=\"img\" aria-label=\"Timeline of major eras in world history\"><line x1=\"14\" y1=\"50\" x2=\"236\" y2=\"50\" stroke=\"#6b7a98\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"25\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">3000 BCE</text><text x=\"25\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">first cities</text><circle cx=\"76\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"76\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">500 BCE</text><text x=\"76\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">classical</text><circle cx=\"128\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"128\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">1500 CE</text><text x=\"128\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">exploration</text><circle cx=\"180\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"180\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">1800</text><text x=\"180\" y=\"68\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"7.5\">industrial</text><circle cx=\"231\" cy=\"50\" r=\"4\" fill=\"#4f9cf0\"/><text x=\"231\" y=\"33\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"9\">today</text></svg>",
    "caption": "Major eras of world history, from the first river-valley cities to the present.",
    "example": "The first civilizations arose in river valleys: Mesopotamia, Egypt (Nile), the Indus Valley, and China (Yellow River).",
    "tip": "Farming (~10,000 years ago) let people settle, grow, and build the first cities and civilizations."
   },
   {
    "h": "Classical empires and world religions",
    "body": "From these roots grew the great classical empires — Greece and Rome in the West, the Persian and later Islamic empires in the Middle East, the dynasties of China, and the Maurya and Gupta empires of India. They built road networks, legal systems, and ideas (like Greek democracy and philosophy) still with us today.\n\nThis era also saw the rise of the major world religions and belief systems — Hinduism, Buddhism, Judaism, Christianity, and later Islam — which spread across continents and shaped cultures, laws, and daily life for billions. Trade routes like the Silk Road carried not just goods but these religions and ideas between distant civilizations.",
    "tip": "Classical empires (Greece, Rome, China, Persia, India) and the major world religions spread ideas across continents."
   },
   {
    "h": "The medieval and early modern world",
    "body": "After the classical empires declined, regions developed along their own paths. In Europe, the Middle Ages brought feudal kingdoms and the powerful Catholic Church. The Islamic world experienced a golden age of science and learning. China, India, and African kingdoms like Mali were centers of wealth and culture, and the Americas held great civilizations like the Maya, Aztec, and Inca.\n\nThen came the Age of Exploration (1400s–1500s), when European ships reached the Americas, Africa, and Asia. This connected the hemispheres for the first time — exchanging crops, goods, and people, but also bringing conquest, colonization, and the brutal transatlantic slave trade.",
    "tip": "Around 1500, European exploration connected the world's hemispheres — bringing exchange, but also conquest and slavery."
   },
   {
    "h": "Revolutions and the modern age",
    "body": "From the 1600s on, waves of revolution reshaped the world. The Scientific Revolution and the Enlightenment championed reason and human rights, inspiring political revolutions in America and France that spread ideas of democracy and equality. The Industrial Revolution (starting in the late 1700s) transformed how people lived and worked, moving societies from farms to factories and cities.\n\nThe 1900s brought two devastating World Wars, the end of European colonial empires as colonized nations won independence, and the Cold War division of the world. Technology, trade, and communication accelerated until, by today, people and economies across the planet are tied together as never before — a globalized world.",
    "example": "Key modern turning points: the Enlightenment, the American and French Revolutions, the Industrial Revolution, two World Wars.",
    "tip": "Enlightenment ideas + the Industrial Revolution + the World Wars built the modern, interconnected world."
   },
   {
    "h": "Learning from world history",
    "body": "World history reveals that no society developed in isolation — civilizations constantly borrowed, traded, and learned from one another. The numbers you use are called Arabic numerals but came from India; paper and gunpowder came from China; democracy's roots are in Greece. Human progress has always been a shared, global effort.\n\nIt also shows recurring patterns: empires rise and fall, ideas spread and transform, and contact between cultures drives change. Understanding this big picture helps you see today's global issues — migration, trade, conflict, cooperation — not as brand new, but as the latest chapter in a very long human story."
   }
  ],
  "cards": [
   {
    "h": "First civilizations",
    "body": "Farming (~10,000 yrs ago) enabled cities in river valleys: Mesopotamia, Egypt, Indus, China."
   },
   {
    "h": "Classical era",
    "body": "Empires (Greece, Rome, Persia, China, India) and major world religions spread ideas via trade routes."
   },
   {
    "h": "Exploration",
    "body": "Around 1500, European voyages connected the hemispheres — exchange plus conquest and slavery."
   },
   {
    "h": "Modern age",
    "body": "Enlightenment + Industrial Revolution + two World Wars + decolonization built today's world."
   },
   {
    "h": "Big picture",
    "body": "No society grew alone; ideas and goods always crossed cultures. Today's issues are the latest chapter."
   }
  ],
  "flash": [
   [
    "Agricultural Revolution",
    "The shift to farming (~10,000 years ago) that enabled settled life."
   ],
   [
    "Civilization",
    "A complex society with cities, writing, and government."
   ],
   [
    "Mesopotamia",
    "An early river-valley civilization between the Tigris and Euphrates."
   ],
   [
    "Empire",
    "A large state ruling many peoples and territories."
   ],
   [
    "Silk Road",
    "Trade routes carrying goods and ideas across Asia."
   ],
   [
    "Middle Ages",
    "The medieval era of feudal kingdoms in Europe."
   ],
   [
    "Age of Exploration",
    "The 1400s–1500s European voyages that linked the hemispheres."
   ],
   [
    "Enlightenment",
    "A movement championing reason and human rights."
   ],
   [
    "Industrial Revolution",
    "The shift to factory production starting in the late 1700s."
   ],
   [
    "Colonization",
    "One nation settling and controlling another's land."
   ],
   [
    "World Wars",
    "The two global wars of 1914–18 and 1939–45."
   ],
   [
    "Globalization",
    "The growing interconnection of the world's economies and cultures."
   ]
  ],
  "quiz": [
   {
    "q": "The turning point that let people settle and build cities was the:",
    "options": [
     "Agricultural Revolution",
     "Industrial Revolution",
     "Cold War",
     "Space Age"
    ],
    "a": 0,
    "why": "Farming produced surplus food, enabling settled civilizations."
   },
   {
    "q": "The first civilizations arose mostly in:",
    "options": [
     "River valleys",
     "Deserts",
     "Mountaintops",
     "The open ocean"
    ],
    "a": 0,
    "why": "Fertile river valleys supported farming and cities."
   },
   {
    "q": "Which was an early river-valley civilization?",
    "options": [
     "Mesopotamia",
     "The United States",
     "The Roman Empire",
     "The Soviet Union"
    ],
    "a": 0,
    "why": "Mesopotamia sat between the Tigris and Euphrates rivers."
   },
   {
    "q": "Democracy and philosophy are especially associated with classical:",
    "options": [
     "Greece",
     "Antarctica",
     "Australia",
     "Canada"
    ],
    "a": 0,
    "why": "Greek city-states developed early democracy and philosophy."
   },
   {
    "q": "The Silk Road carried:",
    "options": [
     "Goods and ideas across Asia",
     "Only soldiers",
     "Nothing of value",
     "Water"
    ],
    "a": 0,
    "why": "Trade routes spread goods, religions, and ideas between civilizations."
   },
   {
    "q": "Which spread across continents during the classical and later eras?",
    "options": [
     "Major world religions",
     "Televisions",
     "Automobiles",
     "The internet"
    ],
    "a": 0,
    "why": "Hinduism, Buddhism, Judaism, Christianity, and Islam spread widely."
   },
   {
    "q": "Great civilizations of the Americas included the:",
    "options": [
     "Maya, Aztec, and Inca",
     "Greeks and Romans",
     "Mesopotamians",
     "Vikings only"
    ],
    "a": 0,
    "why": "The Maya, Aztec, and Inca built major American civilizations."
   },
   {
    "q": "The Age of Exploration (1400s–1500s) first connected:",
    "options": [
     "The world's hemispheres",
     "Two cities",
     "The planets",
     "Only Europe"
    ],
    "a": 0,
    "why": "European voyages linked the Americas, Africa, Asia, and Europe."
   },
   {
    "q": "A tragic result of exploration and colonization was the:",
    "options": [
     "Transatlantic slave trade",
     "End of all war",
     "Instant democracy",
     "Loss of farming"
    ],
    "a": 0,
    "why": "Conquest brought colonization and the brutal slave trade."
   },
   {
    "q": "The Enlightenment championed:",
    "options": [
     "Reason and human rights",
     "Feudal kings",
     "Isolation",
     "Silence"
    ],
    "a": 0,
    "why": "It promoted reason, rights, and inspired democratic revolutions."
   },
   {
    "q": "The Industrial Revolution moved societies from farms to:",
    "options": [
     "Factories and cities",
     "Deserts",
     "The sea",
     "Caves"
    ],
    "a": 0,
    "why": "Factory production reshaped where and how people lived and worked."
   },
   {
    "q": "The 1900s included two:",
    "options": [
     "World Wars",
     "Ice Ages",
     "Stone Ages",
     "Renaissances"
    ],
    "a": 0,
    "why": "World War I and World War II were global conflicts of the century."
   },
   {
    "q": "Arabic numerals actually originated in:",
    "options": [
     "India",
     "Rome",
     "England",
     "Egypt"
    ],
    "a": 0,
    "why": "The numbers spread from India — progress is a shared global effort."
   },
   {
    "q": "A key lesson of world history is that societies:",
    "options": [
     "Borrowed and learned from one another",
     "Grew in total isolation",
     "Never traded",
     "Stayed unchanged"
    ],
    "a": 0,
    "why": "Contact between cultures constantly drove change."
   },
   {
    "q": "Today's interconnected world economy is called:",
    "options": [
     "Globalization",
     "Isolationism",
     "Feudalism",
     "The Stone Age"
    ],
    "a": 0,
    "why": "Globalization is the growing interconnection of economies and cultures."
   }
  ]
 },
 "social-geography": {
  "title": "Geography",
  "subject": "Social Studies",
  "level": "Grades 5-12",
  "objectives": [
   "Explain the five themes of geography",
   "Read maps and use latitude and longitude",
   "Describe Earth's continents, oceans, and major physical features",
   "Explain climate, biomes, and how physical geography shapes life",
   "Describe how humans interact with and change their environment"
  ],
  "intro": "Geography is the study of Earth's places, people, and the connections between them — not just where things are, but why they're there and how they relate. It helps you understand everything from climate to culture to global events. This lesson covers how geographers think, how to read maps, and how physical and human geography shape the world.",
  "sections": [
   {
    "h": "The five themes of geography",
    "body": "Geographers organize their thinking around five themes. Location answers 'where is it?' — either absolute (exact coordinates) or relative (near something else). Place describes what a location is like, its physical and human features. Region groups areas that share common traits, like the Middle East or the Corn Belt.\n\nMovement looks at how people, goods, and ideas travel between places. And human-environment interaction examines how people adapt to, depend on, and change their surroundings. Together, these five themes are a toolkit for asking smart questions about any place on Earth.",
    "tip": "The five themes: Location, Place, Region, Movement, and Human-Environment Interaction."
   },
   {
    "h": "Maps and how to read them",
    "body": "Maps are geography's main tool — flat representations of places. To read one, you use a few features. The compass rose shows direction (north, south, east, west). The scale tells you how map distance relates to real distance. The legend (or key) explains what the symbols and colors mean. The title says what the map shows.\n\nDifferent maps serve different purposes: physical maps show landforms, political maps show borders and cities, and thematic maps show data like population or climate. No flat map can perfectly represent the round Earth, so every map involves some distortion — something to keep in mind when you read one.",
    "example": "On a map, a legend might show blue = water, green = forest, and a star = a capital city.",
    "tip": "Every map has a title, legend, scale, and compass rose — check them before reading it."
   },
   {
    "h": "Latitude and longitude",
    "body": "To pinpoint any spot on Earth, geographers use a grid of imaginary lines. Lines of latitude run east-west, measuring distance north or south of the Equator (0° latitude). Lines of longitude run north-south, measuring distance east or west of the Prime Meridian (0° longitude).\n\nTogether, a latitude and a longitude give an exact address for any point on the globe. Latitude also tells you a lot about climate: places near the Equator (low latitude) are generally warm, while places near the poles (high latitude) are cold. This simple grid lets us locate anything, anywhere, precisely.",
    "visual": "<svg viewBox=\"0 0 200 208\" width=\"185\" role=\"img\" aria-label=\"A globe grid of latitude and longitude lines with the Equator and Prime Meridian highlighted\"><circle cx=\"100\" cy=\"100\" r=\"86\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"2\"/><line x1=\"26.7\" y1=\"55\" x2=\"173.3\" y2=\"55\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"16.9\" y1=\"78\" x2=\"183.1\" y2=\"78\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"14.0\" y1=\"100\" x2=\"186.0\" y2=\"100\" stroke=\"#e8b84b\" stroke-width=\"2\" opacity=\"1.00\"/><line x1=\"16.9\" y1=\"122\" x2=\"183.1\" y2=\"122\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"26.7\" y1=\"145\" x2=\"173.3\" y2=\"145\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"55\" y1=\"26.7\" x2=\"55\" y2=\"173.3\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"78\" y1=\"16.9\" x2=\"78\" y2=\"183.1\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"100\" y1=\"14.0\" x2=\"100\" y2=\"186.0\" stroke=\"#e8b84b\" stroke-width=\"2\" opacity=\"1.00\"/><line x1=\"122\" y1=\"16.9\" x2=\"122\" y2=\"183.1\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><line x1=\"145\" y1=\"26.7\" x2=\"145\" y2=\"173.3\" stroke=\"#4f9cf0\" stroke-width=\"1\" opacity=\"0.50\"/><text x=\"100\" y=\"203\" text-anchor=\"middle\" fill=\"#e8b84b\" font-size=\"8\">gold = Equator (0° lat) &amp; Prime Meridian (0° long)</text></svg>",
    "caption": "Latitude lines run east-west; longitude lines run north-south. The Equator and Prime Meridian are the 0° reference lines.",
    "example": "The Equator is 0° latitude; the Prime Meridian is 0° longitude. A pair of coordinates locates any point exactly.",
    "tip": "Latitude = north/south (from the Equator); longitude = east/west (from the Prime Meridian)."
   },
   {
    "h": "Continents, oceans, and physical features",
    "body": "Earth's land is divided into seven continents — Asia, Africa, North America, South America, Antarctica, Europe, and Australia — and its water into five oceans, the largest being the Pacific. These are the biggest features of physical geography.\n\nWithin the continents are landforms shaped over millions of years: mountains, plains, plateaus, valleys, and deserts, along with rivers and lakes. These features aren't just scenery — they shape where people live (near water, on fertile plains), how they travel (mountains and rivers as barriers or routes), and what they can grow. Physical geography sets the stage for human life.",
    "tip": "7 continents, 5 oceans (the Pacific is biggest). Landforms shape where and how people live."
   },
   {
    "h": "Climate, biomes, and human geography",
    "body": "Climate is the long-term pattern of temperature and precipitation in a place, driven largely by latitude, altitude, and nearness to water. Climate creates biomes — large regions with characteristic plants and animals, like rainforests, deserts, grasslands, and tundra.\n\nHuman geography studies people: where they live, their cultures, cities, and economies. Most people cluster where the physical geography is favorable — mild climate, water, good soil. Human-environment interaction ties it together: people farm, build cities, and extract resources, reshaping the land and, increasingly, the climate itself. Geography is where the physical and human worlds meet."
   }
  ],
  "cards": [
   {
    "h": "Five themes",
    "body": "Location, Place, Region, Movement, Human-Environment Interaction — a toolkit for any place."
   },
   {
    "h": "Maps",
    "body": "Read the title, legend, scale, and compass rose; physical, political, and thematic maps serve different purposes."
   },
   {
    "h": "Latitude & longitude",
    "body": "Latitude = N/S from the Equator; longitude = E/W from the Prime Meridian. Together they locate any point."
   },
   {
    "h": "Continents & features",
    "body": "7 continents, 5 oceans (Pacific biggest); landforms shape where people live and farm."
   },
   {
    "h": "Climate & people",
    "body": "Climate drives biomes; people cluster where geography is favorable and reshape the land."
   }
  ],
  "flash": [
   [
    "Geography",
    "The study of Earth's places, people, and their connections."
   ],
   [
    "Location",
    "Where a place is, absolute (coordinates) or relative (near something)."
   ],
   [
    "Region",
    "An area grouped by shared traits."
   ],
   [
    "Map legend",
    "The key explaining a map's symbols and colors."
   ],
   [
    "Scale",
    "How map distance relates to real distance."
   ],
   [
    "Latitude",
    "Lines measuring distance north or south of the Equator."
   ],
   [
    "Longitude",
    "Lines measuring distance east or west of the Prime Meridian."
   ],
   [
    "Equator",
    "The 0° line of latitude circling the Earth's middle."
   ],
   [
    "Prime Meridian",
    "The 0° line of longitude."
   ],
   [
    "Continent",
    "One of Earth's seven great landmasses."
   ],
   [
    "Climate",
    "The long-term pattern of temperature and precipitation."
   ],
   [
    "Biome",
    "A large region with characteristic plants and animals."
   ]
  ],
  "quiz": [
   {
    "q": "Which is one of the five themes of geography?",
    "options": [
     "Location",
     "Multiplication",
     "Grammar",
     "Photosynthesis"
    ],
    "a": 0,
    "why": "Location, Place, Region, Movement, and Human-Environment Interaction are the five themes."
   },
   {
    "q": "A map's key, explaining its symbols, is the:",
    "options": [
     "Legend",
     "Scale",
     "Title",
     "Equator"
    ],
    "a": 0,
    "why": "The legend (key) explains symbols and colors."
   },
   {
    "q": "Which map feature shows direction?",
    "options": [
     "Compass rose",
     "Legend",
     "Title",
     "Scale"
    ],
    "a": 0,
    "why": "The compass rose shows north, south, east, and west."
   },
   {
    "q": "Lines of latitude measure distance:",
    "options": [
     "North or south of the Equator",
     "East or west only",
     "Up and down hills",
     "Across oceans only"
    ],
    "a": 0,
    "why": "Latitude is north/south of the Equator."
   },
   {
    "q": "Lines of longitude measure distance from the:",
    "options": [
     "Prime Meridian",
     "Equator",
     "North Pole only",
     "Nearest city"
    ],
    "a": 0,
    "why": "Longitude is east/west of the Prime Meridian."
   },
   {
    "q": "The Equator is at what latitude?",
    "options": [
     "0°",
     "90°",
     "45°",
     "180°"
    ],
    "a": 0,
    "why": "The Equator is 0° latitude."
   },
   {
    "q": "Places near the Equator tend to be:",
    "options": [
     "Warm",
     "Cold",
     "Frozen",
     "Dark"
    ],
    "a": 0,
    "why": "Low latitude generally means a warm climate."
   },
   {
    "q": "How many continents are there?",
    "options": [
     "Seven",
     "Five",
     "Ten",
     "Three"
    ],
    "a": 0,
    "why": "Asia, Africa, North America, South America, Antarctica, Europe, Australia."
   },
   {
    "q": "The largest ocean is the:",
    "options": [
     "Pacific",
     "Atlantic",
     "Arctic",
     "Indian"
    ],
    "a": 0,
    "why": "The Pacific is Earth's largest ocean."
   },
   {
    "q": "Mountains, plains, and valleys are examples of:",
    "options": [
     "Landforms",
     "Oceans",
     "Climates",
     "Legends"
    ],
    "a": 0,
    "why": "Landforms are physical features of the land."
   },
   {
    "q": "Why can't a flat map perfectly show Earth?",
    "options": [
     "Earth is round, so flat maps distort it",
     "Maps are too small",
     "Paper is flat only sometimes",
     "Earth is flat"
    ],
    "a": 0,
    "why": "Flattening a sphere always introduces some distortion."
   },
   {
    "q": "The long-term pattern of temperature and rainfall is:",
    "options": [
     "Climate",
     "Weather of one day",
     "A biome's animals",
     "A legend"
    ],
    "a": 0,
    "why": "Climate is the long-term pattern; weather is day-to-day."
   },
   {
    "q": "A large region with characteristic plants and animals is a:",
    "options": [
     "Biome",
     "City",
     "Continent",
     "Legend"
    ],
    "a": 0,
    "why": "Rainforests, deserts, and tundra are biomes."
   },
   {
    "q": "People tend to cluster where the geography offers:",
    "options": [
     "Mild climate, water, and good soil",
     "Only mountains",
     "No water",
     "Extreme cold"
    ],
    "a": 0,
    "why": "Favorable physical geography attracts settlement."
   },
   {
    "q": "Human-environment interaction studies how people:",
    "options": [
     "Adapt to and change their surroundings",
     "Only read maps",
     "Ignore nature",
     "Measure latitude"
    ],
    "a": 0,
    "why": "It examines how humans depend on and reshape the environment."
   }
  ]
 },
 "social-economics": {
  "title": "Economics",
  "subject": "Social Studies",
  "level": "Grades 8-12",
  "objectives": [
   "Explain scarcity and opportunity cost",
   "Describe supply and demand and how they set prices",
   "Distinguish microeconomics from macroeconomics",
   "Explain money, markets, and the role of government",
   "Apply basic economics to personal and public decisions"
  ],
  "intro": "Economics is the study of how people, businesses, and nations use limited resources to meet unlimited wants. Every choice — what to buy, what to produce, how to spend a budget — is economics in action. This lesson covers scarcity, supply and demand, the big picture of a national economy, and how it all applies to your life.",
  "sections": [
   {
    "h": "Scarcity and opportunity cost",
    "body": "Economics begins with one hard fact: scarcity. Resources — time, money, materials, labor — are limited, but people's wants are unlimited. Because you can't have everything, you must choose. Scarcity is the fundamental economic problem that every person and society faces.\n\nEvery choice has an opportunity cost: the value of the next-best thing you gave up. If you spend $20 on a game, the opportunity cost is whatever else that $20 (and the time playing) could have done. Thinking in terms of trade-offs and opportunity cost is the heart of economic reasoning — there's no such thing as a free lunch.",
    "example": "Spend Saturday working a shift (earn $80) or studying. If you study, the opportunity cost is the $80 you didn't earn.",
    "tip": "Scarcity forces choices; a choice's opportunity cost is the best thing you gave up."
   },
   {
    "h": "Supply and demand",
    "body": "In a market, prices are set by the interplay of supply and demand. Demand is how much of something buyers want at various prices; generally, the lower the price, the more people want to buy. Supply is how much sellers will offer at various prices; generally, the higher the price, the more they'll produce.\n\nThe two meet at the equilibrium price — the price where the amount buyers want equals the amount sellers offer. If something becomes scarce or popular, demand outpaces supply and the price rises; if there's a glut, the price falls. This dance of supply and demand sets prices for nearly everything in a market economy.",
    "visual": "<svg viewBox=\"0 0 222 182\" width=\"215\" role=\"img\" aria-label=\"A supply and demand graph: a downward demand line and an upward supply line crossing at the equilibrium price\"><line x1=\"32\" y1=\"150\" x2=\"205\" y2=\"150\" stroke=\"#6b7a98\" stroke-width=\"1.5\"/><line x1=\"32\" y1=\"150\" x2=\"32\" y2=\"20\" stroke=\"#6b7a98\" stroke-width=\"1.5\"/><line x1=\"45\" y1=\"45\" x2=\"185\" y2=\"135\" stroke=\"#f05a5a\" stroke-width=\"2.2\"/><line x1=\"45\" y1=\"140\" x2=\"185\" y2=\"45\" stroke=\"#39e3c8\" stroke-width=\"2.2\"/><line x1=\"117\" y1=\"91\" x2=\"117\" y2=\"150\" stroke=\"#9aa6c0\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><line x1=\"32\" y1=\"91\" x2=\"117\" y2=\"91\" stroke=\"#9aa6c0\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><circle cx=\"117\" cy=\"91\" r=\"4\" fill=\"#e8b84b\"/><text x=\"190\" y=\"138\" fill=\"#f05a5a\" font-size=\"11\">D</text><text x=\"190\" y=\"48\" fill=\"#39e3c8\" font-size=\"11\">S</text><text x=\"122\" y=\"86\" fill=\"#e8b84b\" font-size=\"8\">equilibrium</text><text x=\"20\" y=\"90\" fill=\"#9aa6c0\" font-size=\"8.5\" transform=\"rotate(-90 20 90)\">Price</text><text x=\"118\" y=\"166\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8.5\">Quantity</text></svg>",
    "caption": "Demand slopes down, supply slopes up; they cross at the equilibrium price where buyers and sellers agree.",
    "example": "If a drought shrinks the coffee supply, less coffee is available, so its price rises.",
    "tip": "Price rises when demand outpaces supply; price falls when supply outpaces demand. They meet at equilibrium."
   },
   {
    "h": "Micro and macro",
    "body": "Economics works at two scales. Microeconomics zooms in on individual pieces: how a single household budgets, how one business prices its product, how one market for one good behaves. It's the economics of specific decisions.\n\nMacroeconomics zooms out to the whole economy of a nation or the world. It studies big-picture measures like gross domestic product (GDP, the total value of what a country produces), unemployment, inflation (rising prices overall), and economic growth. Both scales matter: your personal budget is micro, but the national inflation rate that changes your grocery bill is macro.",
    "tip": "Micro = individual choices (a household, a business); Macro = the whole economy (GDP, unemployment, inflation)."
   },
   {
    "h": "Money, markets, and government",
    "body": "Money is what makes modern economies work — a medium of exchange everyone accepts, so you don't have to barter. It also stores value and measures prices. Markets are where buyers and sellers meet, in person or online, to trade, guided by supply and demand.\n\nMost modern economies are mixed economies: mostly free markets, but with government playing key roles. Governments provide things markets won't (roads, defense, schools), enforce rules and contracts, and try to steady the economy — adjusting taxes, spending, and interest rates to fight recessions or cool inflation. The debate over how large that role should be is central to economic politics.",
    "tip": "Money replaces barter; markets run on supply and demand; most economies are 'mixed' (markets + government)."
   },
   {
    "h": "Economics in your life",
    "body": "Economics isn't abstract — it's the logic behind every money decision you make. Budgeting is managing scarce income against wants and needs. Understanding opportunity cost helps you weigh choices. Knowing supply and demand helps you see why prices move and when to buy.\n\nOn a bigger level, understanding inflation, interest, and the economy helps you plan — saving, borrowing wisely, and voting on policies that affect jobs and prices. Good economic thinking won't make choices for you, but it gives you a clear framework: identify the trade-offs, weigh the costs and benefits, and choose on purpose instead of by accident."
   }
  ],
  "cards": [
   {
    "h": "Scarcity",
    "body": "Limited resources vs. unlimited wants force choices; every choice has an opportunity cost."
   },
   {
    "h": "Supply & demand",
    "body": "Demand falls as price rises; supply rises as price rises; they meet at the equilibrium price."
   },
   {
    "h": "Micro vs. macro",
    "body": "Micro = individual households/businesses; macro = the whole economy (GDP, inflation, unemployment)."
   },
   {
    "h": "Money & markets",
    "body": "Money replaces barter; markets run on supply and demand; most economies are mixed (markets + government)."
   },
   {
    "h": "Your life",
    "body": "Budget against scarcity, weigh opportunity cost, and plan around inflation and interest."
   }
  ],
  "flash": [
   [
    "Scarcity",
    "Limited resources against unlimited wants — the basic economic problem."
   ],
   [
    "Opportunity cost",
    "The value of the next-best option you gave up."
   ],
   [
    "Demand",
    "How much buyers want at various prices."
   ],
   [
    "Supply",
    "How much sellers will offer at various prices."
   ],
   [
    "Equilibrium price",
    "The price where supply equals demand."
   ],
   [
    "Microeconomics",
    "The study of individual households, firms, and markets."
   ],
   [
    "Macroeconomics",
    "The study of the whole economy (GDP, inflation, jobs)."
   ],
   [
    "GDP",
    "Gross domestic product — the total value a country produces."
   ],
   [
    "Inflation",
    "A general rise in prices over time."
   ],
   [
    "Money",
    "A widely accepted medium of exchange and store of value."
   ],
   [
    "Market",
    "Where buyers and sellers meet to trade."
   ],
   [
    "Mixed economy",
    "Mostly free markets plus a government role."
   ]
  ],
  "quiz": [
   {
    "q": "The basic economic problem is:",
    "options": [
     "Scarcity",
     "Too much money",
     "Too few people",
     "No markets"
    ],
    "a": 0,
    "why": "Limited resources vs. unlimited wants forces choices."
   },
   {
    "q": "The value of the next-best option you gave up is the:",
    "options": [
     "Opportunity cost",
     "Supply",
     "Inflation",
     "GDP"
    ],
    "a": 0,
    "why": "Every choice has an opportunity cost."
   },
   {
    "q": "Generally, as a price falls, the quantity buyers want:",
    "options": [
     "Rises",
     "Falls",
     "Stays the same",
     "Disappears"
    ],
    "a": 0,
    "why": "Lower prices increase quantity demanded."
   },
   {
    "q": "Generally, as a price rises, the quantity sellers offer:",
    "options": [
     "Rises",
     "Falls",
     "Vanishes",
     "Stays flat"
    ],
    "a": 0,
    "why": "Higher prices encourage more supply."
   },
   {
    "q": "The price where supply equals demand is the:",
    "options": [
     "Equilibrium price",
     "GDP",
     "Inflation rate",
     "Opportunity cost"
    ],
    "a": 0,
    "why": "Supply and demand meet at equilibrium."
   },
   {
    "q": "If a drought shrinks the coffee supply, the price will likely:",
    "options": [
     "Rise",
     "Fall",
     "Stay exactly the same",
     "Become zero"
    ],
    "a": 0,
    "why": "Less supply with steady demand pushes prices up."
   },
   {
    "q": "Studying one household's budget is:",
    "options": [
     "Microeconomics",
     "Macroeconomics",
     "Inflation",
     "Trade policy"
    ],
    "a": 0,
    "why": "Micro looks at individual decisions."
   },
   {
    "q": "Studying national unemployment and GDP is:",
    "options": [
     "Macroeconomics",
     "Microeconomics",
     "Budgeting",
     "A market"
    ],
    "a": 0,
    "why": "Macro looks at the whole economy."
   },
   {
    "q": "GDP measures a country's:",
    "options": [
     "Total value of production",
     "Population only",
     "Land area",
     "Number of banks"
    ],
    "a": 0,
    "why": "GDP is the total value of goods and services produced."
   },
   {
    "q": "A general rise in prices over time is:",
    "options": [
     "Inflation",
     "Scarcity",
     "Supply",
     "A surplus"
    ],
    "a": 0,
    "why": "Inflation is rising prices across the economy."
   },
   {
    "q": "Money's main job is to:",
    "options": [
     "Serve as a medium of exchange",
     "Be eaten",
     "Replace all laws",
     "Measure distance"
    ],
    "a": 0,
    "why": "Money is a widely accepted medium of exchange that beats barter."
   },
   {
    "q": "Most modern economies are:",
    "options": [
     "Mixed (markets + government)",
     "Pure barter",
     "Fully government-run",
     "Without money"
    ],
    "a": 0,
    "why": "They combine free markets with a government role."
   },
   {
    "q": "Which is something markets usually won't provide, so governments do?",
    "options": [
     "Roads and national defense",
     "Candy bars",
     "Phones",
     "Movies"
    ],
    "a": 0,
    "why": "Public goods like roads and defense are government-provided."
   },
   {
    "q": "Budgeting is essentially managing:",
    "options": [
     "Scarce income against wants and needs",
     "Unlimited money",
     "Only taxes",
     "The weather"
    ],
    "a": 0,
    "why": "A budget allocates limited income — scarcity in action."
   },
   {
    "q": "Good economic thinking helps you:",
    "options": [
     "Weigh trade-offs and choose on purpose",
     "Avoid all decisions",
     "Get free money",
     "Ignore prices"
    ],
    "a": 0,
    "why": "It gives a framework of costs, benefits, and trade-offs."
   }
  ]
 },
 "coding-computer-science-foundations": {
  "title": "Computer Science Foundations",
  "subject": "Coding",
  "level": "Grades 6-12",
  "objectives": [
   "Explain what a computer does with the input-process-output-storage model",
   "Describe how computers represent data in binary (bits and bytes)",
   "Explain what an algorithm is and how programs run",
   "Distinguish hardware from software and how they interact",
   "Understand the core problem-solving ideas of computer science"
  ],
  "intro": "Computer science is the study of computation — how we represent information and solve problems step by step so a machine can carry them out. Before any programming language, these foundations explain what a computer really does. This lesson covers how computers work, binary, algorithms, hardware and software, and the thinking behind it all.",
  "sections": [
   {
    "h": "What a computer does",
    "body": "At its core, a computer is a machine that follows instructions to process information. Everything it does fits a simple model with four parts: input (data comes in — keyboard, mouse, sensors), processing (the CPU performs calculations and logic on that data), output (results come out — screen, speakers, printer), and storage (data is saved for later — drives and memory).\n\nThis input-process-output model describes everything from a calculator to a supercomputer. The computer itself doesn't 'understand' anything; it blindly and very quickly follows the precise instructions it's given. Its power comes from doing simple operations billions of times per second, reliably.",
    "visual": "<svg viewBox=\"0 0 252 148\" width=\"245\" role=\"img\" aria-label=\"The input, process, output, storage model of a computer\"><rect x=\"6\" y=\"24\" width=\"64\" height=\"38\" rx=\"6\" fill=\"rgba(79,156,240,.16)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><text x=\"38\" y=\"47\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Input</text><line x1=\"70\" y1=\"43\" x2=\"89\" y2=\"43\" stroke=\"#39e3c8\" stroke-width=\"2\"/><polygon points=\"89,39 94,43 89,47\" fill=\"#39e3c8\"/><rect x=\"94\" y=\"24\" width=\"64\" height=\"38\" rx=\"6\" fill=\"rgba(240,90,90,.16)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><text x=\"126\" y=\"47\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Process</text><line x1=\"158\" y1=\"43\" x2=\"177\" y2=\"43\" stroke=\"#39e3c8\" stroke-width=\"2\"/><polygon points=\"177,39 182,43 177,47\" fill=\"#39e3c8\"/><rect x=\"182\" y=\"24\" width=\"64\" height=\"38\" rx=\"6\" fill=\"rgba(57,227,200,.14)\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"214\" y=\"47\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Output</text><line x1=\"126\" y1=\"62\" x2=\"126\" y2=\"96\" stroke=\"#e8b84b\" stroke-width=\"2\"/><polygon points=\"122,69 130,69 126,62\" fill=\"#e8b84b\"/><polygon points=\"122,89 130,89 126,96\" fill=\"#e8b84b\"/><rect x=\"94\" y=\"96\" width=\"64\" height=\"38\" rx=\"6\" fill=\"rgba(232,184,75,.16)\" stroke=\"#e8b84b\" stroke-width=\"1.5\"/><text x=\"126\" y=\"119\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Storage</text><text x=\"126\" y=\"18\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">the CPU processes; storage holds data for later</text></svg>",
    "caption": "Every computer follows the same model: data comes in, the CPU processes it, results go out, and storage keeps data for later.",
    "tip": "Every computer follows the same model: Input → Process → Output, with Storage holding data for later."
   },
   {
    "h": "Binary: how computers store data",
    "body": "Computers are electronic, and at the lowest level they understand only two states: on and off, represented as 1 and 0. Each 1 or 0 is a bit, the smallest piece of data. Group eight bits together and you get a byte, enough to represent a single character like the letter 'A.'\n\nEverything a computer handles — numbers, text, images, sound, video — is ultimately stored as patterns of these bits. Text uses codes (like ASCII) that map each character to a number; images store the color of each pixel as numbers; and so on. This binary system is simple, but with enough bits it can represent anything digital.",
    "example": "The letter 'A' = 01000001 in binary (one byte). The number 5 = 101.",
    "tip": "A bit is one 1 or 0; 8 bits make a byte. All data — text, images, sound — is stored as binary patterns."
   },
   {
    "h": "Algorithms: step-by-step solutions",
    "body": "An algorithm is a precise, step-by-step set of instructions for solving a problem or completing a task. A recipe is an everyday algorithm; so are the directions to a friend's house. In computer science, algorithms are the heart of everything — a program is really just one or more algorithms written in a language a computer can run.\n\nGood algorithms are clear, correct, and efficient. The same problem can often be solved many ways, and computer scientists compare algorithms by how fast they run and how much memory they use. Learning to break a problem into clear, ordered steps — before writing any code — is the single most important skill in programming.",
    "example": "Find the biggest number in a list: start with the first, compare each next one, keep the larger, repeat to the end.",
    "tip": "An algorithm is a clear step-by-step solution. Solve the problem in steps first, then turn it into code."
   },
   {
    "h": "Hardware and software",
    "body": "A computer has two halves that work together. Hardware is the physical parts you can touch: the CPU (the 'brain' that processes), memory (RAM, fast temporary workspace), storage (drives that keep data permanently), and input/output devices. Software is the set of instructions — the programs — that tell the hardware what to do.\n\nNeither is useful alone: hardware without software is an inert box, and software needs hardware to run on. The operating system (like Windows or Linux) is special software that manages the hardware and lets other programs run. Understanding this split helps you see what's actually happening when you use any device.",
    "tip": "Hardware = the physical parts; software = the instructions. The OS is the software that manages the hardware."
   },
   {
    "h": "Thinking like a computer scientist",
    "body": "Computer science is less about memorizing and more about a way of thinking, often called computational thinking. It has a few key moves. Decomposition means breaking a big problem into smaller, manageable parts. Pattern recognition means spotting similarities you can reuse. Abstraction means focusing on the essentials and ignoring irrelevant detail.\n\nTogether with algorithm design — laying out clear steps — these let you tackle problems far too complex to hold in your head at once. This way of thinking is useful far beyond computers: it's a general method for solving hard problems in any field, which is why computer science has become a foundational skill."
   }
  ],
  "cards": [
   {
    "h": "IPOS model",
    "body": "A computer takes Input, does Processing (CPU), gives Output, and uses Storage to keep data."
   },
   {
    "h": "Binary",
    "body": "Everything is 1s and 0s. A bit = one 1/0; a byte = 8 bits (one character)."
   },
   {
    "h": "Algorithms",
    "body": "A clear, step-by-step solution to a problem; a program is algorithms a computer can run."
   },
   {
    "h": "Hardware vs software",
    "body": "Hardware = physical parts (CPU, RAM, drives); software = the programs. The OS manages the hardware."
   },
   {
    "h": "Computational thinking",
    "body": "Decomposition, pattern recognition, abstraction, and algorithm design — a method for any hard problem."
   }
  ],
  "flash": [
   [
    "Computer",
    "A machine that follows instructions to process information."
   ],
   [
    "Input",
    "Data going into a computer (keyboard, mouse, sensors)."
   ],
   [
    "Output",
    "Results coming out (screen, speakers, printer)."
   ],
   [
    "CPU",
    "The processor — the 'brain' that performs calculations and logic."
   ],
   [
    "Bit",
    "The smallest unit of data: a single 1 or 0."
   ],
   [
    "Byte",
    "Eight bits grouped together (enough for one character)."
   ],
   [
    "Binary",
    "The base-2 system of 1s and 0s computers use."
   ],
   [
    "Algorithm",
    "A precise step-by-step set of instructions to solve a problem."
   ],
   [
    "Hardware",
    "The physical parts of a computer."
   ],
   [
    "Software",
    "The programs (instructions) that tell hardware what to do."
   ],
   [
    "Operating system",
    "Software that manages the hardware and runs other programs."
   ],
   [
    "Decomposition",
    "Breaking a big problem into smaller parts."
   ]
  ],
  "quiz": [
   {
    "q": "The four parts of the basic computer model are:",
    "options": [
     "Input, process, output, storage",
     "Read, write, delete, copy",
     "Add, subtract, multiply, divide",
     "Open, close, save, print"
    ],
    "a": 0,
    "why": "Input → process → output, with storage for later."
   },
   {
    "q": "The part that performs calculations and logic is the:",
    "options": [
     "CPU",
     "Monitor",
     "Keyboard",
     "Printer"
    ],
    "a": 0,
    "why": "The CPU is the processor."
   },
   {
    "q": "Computers represent data at the lowest level using:",
    "options": [
     "1s and 0s (binary)",
     "Letters only",
     "Decimals only",
     "Colors"
    ],
    "a": 0,
    "why": "Electronic on/off states become binary 1s and 0s."
   },
   {
    "q": "A single 1 or 0 is a:",
    "options": [
     "Bit",
     "Byte",
     "Pixel",
     "File"
    ],
    "a": 0,
    "why": "A bit is the smallest unit of data."
   },
   {
    "q": "Eight bits grouped together make a:",
    "options": [
     "Byte",
     "Kilobyte",
     "Bit",
     "Megabyte"
    ],
    "a": 0,
    "why": "8 bits = 1 byte, enough for one character."
   },
   {
    "q": "A precise step-by-step set of instructions to solve a problem is an:",
    "options": [
     "Algorithm",
     "Operating system",
     "Byte",
     "Error"
    ],
    "a": 0,
    "why": "Algorithms are step-by-step solutions."
   },
   {
    "q": "A program is best described as:",
    "options": [
     "Algorithms written in a language a computer runs",
     "A physical chip",
     "A type of monitor",
     "Random data"
    ],
    "a": 0,
    "why": "Programs are algorithms expressed in code."
   },
   {
    "q": "Computer scientists compare algorithms mainly by:",
    "options": [
     "Speed and memory used",
     "Color",
     "Price",
     "Length of the file name"
    ],
    "a": 0,
    "why": "Efficiency (time and memory) matters."
   },
   {
    "q": "The physical parts of a computer are the:",
    "options": [
     "Hardware",
     "Software",
     "Algorithms",
     "Internet"
    ],
    "a": 0,
    "why": "Hardware is the physical components."
   },
   {
    "q": "The programs that tell the hardware what to do are the:",
    "options": [
     "Software",
     "Hardware",
     "Pixels",
     "Cables"
    ],
    "a": 0,
    "why": "Software is the instructions."
   },
   {
    "q": "Windows and Linux are examples of a(n):",
    "options": [
     "Operating system",
     "CPU",
     "Algorithm",
     "Bit"
    ],
    "a": 0,
    "why": "The OS manages hardware and runs other programs."
   },
   {
    "q": "Breaking a big problem into smaller parts is:",
    "options": [
     "Decomposition",
     "Abstraction",
     "Output",
     "Storage"
    ],
    "a": 0,
    "why": "Decomposition splits a problem into manageable pieces."
   },
   {
    "q": "Ignoring irrelevant detail to focus on essentials is:",
    "options": [
     "Abstraction",
     "Decomposition",
     "Binary",
     "Input"
    ],
    "a": 0,
    "why": "Abstraction keeps only what matters."
   },
   {
    "q": "A computer's power comes mainly from:",
    "options": [
     "Doing simple operations extremely fast",
     "Truly understanding tasks",
     "Guessing answers",
     "Having feelings"
    ],
    "a": 0,
    "why": "It follows instructions billions of times per second."
   },
   {
    "q": "The best first step in programming is to:",
    "options": [
     "Break the problem into clear steps",
     "Write code immediately",
     "Buy new hardware",
     "Memorize binary"
    ],
    "a": 0,
    "why": "Design the algorithm before coding."
   }
  ]
 },
 "coding-data-databases": {
  "title": "Data & Databases",
  "subject": "Coding",
  "level": "Grades 8-12",
  "objectives": [
   "Explain what data is and why organizing it matters",
   "Describe tables, records, and fields",
   "Explain relational databases and keys",
   "Introduce querying data with SQL",
   "Describe data in the real world and why privacy matters"
  ],
  "intro": "Data is the raw material of the digital world — every app, website, and business runs on it. A database is an organized system for storing data so it can be found, updated, and analyzed quickly. This lesson covers what data is, how databases organize it into tables, how tables relate, and how we ask them questions.",
  "sections": [
   {
    "h": "What is data?",
    "body": "Data is simply recorded facts — names, numbers, dates, measurements, clicks. On its own, a single value ('42') is just data. When data is organized and given context, it becomes information you can use ('42 students passed the exam'). Turning raw data into useful information is much of what computing is about.\n\nModern life produces staggering amounts of data: every purchase, message, and sensor reading. The challenge isn't collecting it but organizing it so you can actually find and use what you need. That's exactly the problem databases were invented to solve — storing huge amounts of data in a structured, searchable way.",
    "tip": "Data = raw recorded facts; organized and in context, it becomes useful information."
   },
   {
    "h": "Tables, records, and fields",
    "body": "The most common way to organize data is in a table, like a grid or spreadsheet. Each row is a record — one complete entry, such as a single student. Each column is a field — one kind of information, such as 'name' or 'grade.' Every record has a value for each field.\n\nFor example, a 'Students' table might have fields for ID, name, and grade, with one record per student. This simple structure — rows of records, columns of fields — is the foundation of most databases. It keeps data consistent (every student has the same fields) and makes it easy to scan, sort, and search.",
    "visual": "<svg viewBox=\"0 0 252 118\" width=\"245\" role=\"img\" aria-label=\"A small Students database table with ID, Name and Grade columns and three student records\"><rect x=\"14\" y=\"10\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.28)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"52\" y=\"26\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">ID</text><rect x=\"92\" y=\"10\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.28)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"130\" y=\"26\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Name</text><rect x=\"170\" y=\"10\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.28)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"208\" y=\"26\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Grade</text><rect x=\"14\" y=\"34\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"52\" y=\"50\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">1</text><rect x=\"92\" y=\"34\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"130\" y=\"50\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Ana</text><rect x=\"170\" y=\"34\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"208\" y=\"50\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">95</text><rect x=\"14\" y=\"58\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"52\" y=\"74\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">2</text><rect x=\"92\" y=\"58\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"130\" y=\"74\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Ben</text><rect x=\"170\" y=\"58\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"208\" y=\"74\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">88</text><rect x=\"14\" y=\"82\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"52\" y=\"98\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">3</text><rect x=\"92\" y=\"82\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"130\" y=\"98\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">Cris</text><rect x=\"170\" y=\"82\" width=\"76\" height=\"24\" fill=\"rgba(79,156,240,.06)\" stroke=\"#4f9cf0\" stroke-width=\"1\"/><text x=\"208\" y=\"98\" text-anchor=\"middle\" fill=\"#cdd9ec\" font-size=\"10\">91</text><text x=\"126\" y=\"112\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8\">each row = a record (one student); each column = a field</text></svg>",
    "caption": "A Students table: each row is a record (one student), and each column is a field (one kind of info).",
    "example": "Students table — columns: ID | Name | Grade. Each row is one student's complete record.",
    "tip": "In a table: each row = a record (one entry), each column = a field (one kind of info)."
   },
   {
    "h": "Relational databases and keys",
    "body": "Most real databases are relational, meaning they store data in multiple tables that connect to one another. Instead of cramming everything into one giant table, you split it: a 'Students' table, a 'Classes' table, an 'Enrollments' table linking them. This avoids repeating data and keeps it tidy.\n\nThe glue is keys. A primary key is a field that uniquely identifies each record (like a student ID — no two the same). A foreign key is a field in one table that refers to the primary key of another, creating the link between tables. Keys are what let a database connect related information across many tables reliably.",
    "tip": "Relational databases split data across linked tables; a primary key uniquely IDs a record, a foreign key links tables."
   },
   {
    "h": "Asking questions: queries and SQL",
    "body": "A database is only useful if you can get answers out of it. You do that with a query — a request for specific data. The standard language for querying relational databases is SQL (Structured Query Language), and its core command is SELECT.\n\nA simple query reads almost like a sentence: SELECT name FROM Students WHERE grade > 90 means 'give me the names of students whose grade is above 90.' You can filter (WHERE), sort (ORDER BY), and combine data from multiple tables. SQL lets you pull exactly the slice of data you need out of millions of records in an instant — which is why it's one of the most valuable skills in tech.",
    "example": "SELECT name FROM Students WHERE grade >= 90 ORDER BY name;",
    "tip": "A query asks a database for data. In SQL, SELECT ... FROM ... WHERE ... pulls exactly the records you want."
   },
   {
    "h": "Data in the real world",
    "body": "Databases power almost everything digital: your bank balance, a store's inventory, a social network's posts, a hospital's records. Small, simple data often lives in a spreadsheet (like Excel), which is fine for a few hundred rows; databases take over when data gets large, shared by many users, or needs strict structure and reliability.\n\nWith great data comes responsibility. Much data is personal and sensitive, so protecting it matters — through security (keeping it from thieves) and privacy (using it only as people expect and consent to). As data grows ever more central, understanding how it's stored, queried, and protected is a skill that touches nearly every career.",
    "tip": "Spreadsheets suit small data; databases scale to large, shared, structured data. Always protect personal data."
   }
  ],
  "cards": [
   {
    "h": "Data vs information",
    "body": "Data is raw facts; organized and in context, it becomes useful information."
   },
   {
    "h": "Table structure",
    "body": "A table holds rows (records = one entry) and columns (fields = one kind of info)."
   },
   {
    "h": "Relational & keys",
    "body": "Data split across linked tables; a primary key uniquely IDs a record, a foreign key links tables."
   },
   {
    "h": "SQL queries",
    "body": "A query asks for data; SQL's SELECT ... FROM ... WHERE ... pulls exactly what you need."
   },
   {
    "h": "Real world",
    "body": "Databases run banks, stores, hospitals; spreadsheets suit small data. Protect personal data."
   }
  ],
  "flash": [
   [
    "Data",
    "Recorded facts — numbers, names, dates, measurements."
   ],
   [
    "Information",
    "Data that has been organized and given context."
   ],
   [
    "Database",
    "An organized system for storing and finding data."
   ],
   [
    "Table",
    "A grid of data with rows and columns."
   ],
   [
    "Record",
    "One complete entry in a table (a row)."
   ],
   [
    "Field",
    "One kind of information in a table (a column)."
   ],
   [
    "Relational database",
    "A database storing data in multiple linked tables."
   ],
   [
    "Primary key",
    "A field that uniquely identifies each record."
   ],
   [
    "Foreign key",
    "A field linking to another table's primary key."
   ],
   [
    "Query",
    "A request to a database for specific data."
   ],
   [
    "SQL",
    "Structured Query Language, used to query databases."
   ],
   [
    "SELECT",
    "The SQL command that retrieves data."
   ]
  ],
  "quiz": [
   {
    "q": "Raw recorded facts, like the value '42', are:",
    "options": [
     "Data",
     "Information",
     "A query",
     "A key"
    ],
    "a": 0,
    "why": "Data is raw facts; context makes it information."
   },
   {
    "q": "'42 students passed the exam' is an example of:",
    "options": [
     "Information",
     "Raw data only",
     "A database",
     "A field"
    ],
    "a": 0,
    "why": "Organized data with context becomes information."
   },
   {
    "q": "An organized system for storing and finding data is a:",
    "options": [
     "Database",
     "Keyboard",
     "Browser",
     "Compiler"
    ],
    "a": 0,
    "why": "Databases store data in a structured, searchable way."
   },
   {
    "q": "In a table, one complete entry (a row) is a:",
    "options": [
     "Record",
     "Field",
     "Query",
     "Key"
    ],
    "a": 0,
    "why": "A row is a record — one entry."
   },
   {
    "q": "In a table, one column (one kind of info) is a:",
    "options": [
     "Field",
     "Record",
     "Database",
     "Query"
    ],
    "a": 0,
    "why": "A column is a field."
   },
   {
    "q": "A database that stores data across multiple linked tables is:",
    "options": [
     "Relational",
     "Flat only",
     "A spreadsheet",
     "A browser"
    ],
    "a": 0,
    "why": "Relational databases connect multiple tables."
   },
   {
    "q": "A field that uniquely identifies each record is a:",
    "options": [
     "Primary key",
     "Foreign key",
     "Query",
     "Record"
    ],
    "a": 0,
    "why": "No two records share the same primary key."
   },
   {
    "q": "A field that links to another table's primary key is a:",
    "options": [
     "Foreign key",
     "Primary key",
     "Record",
     "Field name"
    ],
    "a": 0,
    "why": "Foreign keys create links between tables."
   },
   {
    "q": "A request to a database for specific data is a:",
    "options": [
     "Query",
     "Record",
     "Field",
     "Table"
    ],
    "a": 0,
    "why": "A query asks the database a question."
   },
   {
    "q": "The standard language for querying relational databases is:",
    "options": [
     "SQL",
     "HTML",
     "Python",
     "CSS"
    ],
    "a": 0,
    "why": "SQL (Structured Query Language) queries databases."
   },
   {
    "q": "Which SQL command retrieves data?",
    "options": [
     "SELECT",
     "PRINT",
     "FETCHALL",
     "GET"
    ],
    "a": 0,
    "why": "SELECT retrieves rows from tables."
   },
   {
    "q": "'SELECT name FROM Students WHERE grade > 90' returns:",
    "options": [
     "Names of students scoring above 90",
     "All students",
     "Only grades",
     "Nothing"
    ],
    "a": 0,
    "why": "WHERE filters to grades above 90, SELECT returns names."
   },
   {
    "q": "For just a few hundred rows, a good simple tool is a:",
    "options": [
     "Spreadsheet",
     "Supercomputer",
     "Server farm",
     "Neural network"
    ],
    "a": 0,
    "why": "Spreadsheets suit small data; databases scale up."
   },
   {
    "q": "Databases take over when data is:",
    "options": [
     "Large, shared, and needs structure",
     "Tiny",
     "Printed on paper",
     "Never used"
    ],
    "a": 0,
    "why": "They handle large, shared, structured, reliable data."
   },
   {
    "q": "Why does protecting personal data matter?",
    "options": [
     "It's sensitive; security and privacy are responsibilities",
     "It isn't important",
     "Data can't be stolen",
     "Only companies care"
    ],
    "a": 0,
    "why": "Personal data must be kept secure and used as people consent."
   }
  ]
 },
 "coding-intro-to-ai": {
  "title": "Intro to AI",
  "subject": "Coding",
  "level": "Grades 8-12",
  "objectives": [
   "Explain what artificial intelligence is and isn't",
   "Describe machine learning and how systems learn from data",
   "Explain neural networks and modern AI at a high level",
   "Describe real-world uses of AI",
   "Understand AI's limits and ethical concerns"
  ],
  "intro": "Artificial intelligence (AI) is one of the most important technologies of our time, powering everything from search engines to chatbots to self-driving cars. But what is it really? This lesson explains what AI is, how modern AI learns from data, where it's used, and the serious questions it raises — cutting through the hype.",
  "sections": [
   {
    "h": "What AI is (and isn't)",
    "body": "Artificial intelligence is the field of building computer systems that can do tasks we normally associate with human intelligence — recognizing images, understanding language, making decisions, playing games. An AI isn't conscious or 'alive'; it's software running math on data, often very cleverly.\n\nIt helps to separate two ideas. Narrow AI is built for one specific task (a spam filter, a chess engine, a photo tagger), and this is all the AI that exists today. General AI — a system as broadly capable as a human across any task — does not exist and remains hypothetical. When people say 'AI' in daily life, they almost always mean narrow AI doing one job well.",
    "tip": "All real AI today is 'narrow' — built for one task. It's clever software, not conscious; human-level general AI doesn't exist yet."
   },
   {
    "h": "Machine learning: learning from data",
    "body": "Most modern AI works through machine learning (ML) — instead of a programmer writing explicit rules for every case, the system learns patterns from examples. You show it lots of data, and it adjusts itself to make better predictions. The more good examples it sees, the better it gets.\n\nA classic example: to build a system that recognizes cats in photos, you don't write rules describing a cat. Instead, you show the model thousands of labeled photos ('cat' / 'not cat'), and it learns the patterns on its own. This is why data is so central to AI — the quality and quantity of examples largely determine how well a model performs.",
    "example": "To detect spam, an ML model learns from thousands of emails already labeled 'spam' or 'not spam,' then flags new ones.",
    "tip": "Machine learning finds patterns from examples instead of following hand-written rules. More good data = better results."
   },
   {
    "h": "Neural networks and modern AI",
    "body": "Much of today's most powerful AI uses neural networks — systems loosely inspired by the brain, made of layers of simple connected units ('neurons'). Each connection has a weight the system tunes during training. Data flows in one side, through the layers, and a prediction comes out the other. Networks with many layers are called deep learning, which drove the recent AI boom.\n\nLarge language models (LLMs) like the ones behind modern chatbots are huge neural networks trained on enormous amounts of text. They work by predicting the most likely next word, over and over, which — at massive scale — produces strikingly fluent, useful responses. Powerful as they are, they're pattern-matchers, not thinkers.",
    "visual": "<svg viewBox=\"0 0 244 152\" width=\"235\" role=\"img\" aria-label=\"A simple neural network with an input layer, a hidden layer, and an output node, fully connected\"><line x1=\"40\" y1=\"35\" x2=\"122\" y2=\"35\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"35\" x2=\"122\" y2=\"78\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"35\" x2=\"122\" y2=\"121\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"78\" x2=\"122\" y2=\"35\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"78\" x2=\"122\" y2=\"78\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"78\" x2=\"122\" y2=\"121\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"121\" x2=\"122\" y2=\"35\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"121\" x2=\"122\" y2=\"78\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"40\" y1=\"121\" x2=\"122\" y2=\"121\" stroke=\"#4f9cf0\" stroke-width=\"0.8\" opacity=\"0.45\"/><line x1=\"122\" y1=\"35\" x2=\"204\" y2=\"78\" stroke=\"#39e3c8\" stroke-width=\"0.9\" opacity=\"0.6\"/><line x1=\"122\" y1=\"78\" x2=\"204\" y2=\"78\" stroke=\"#39e3c8\" stroke-width=\"0.9\" opacity=\"0.6\"/><line x1=\"122\" y1=\"121\" x2=\"204\" y2=\"78\" stroke=\"#39e3c8\" stroke-width=\"0.9\" opacity=\"0.6\"/><circle cx=\"40\" cy=\"35\" r=\"9\" fill=\"rgba(79,156,240,.3)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><circle cx=\"40\" cy=\"78\" r=\"9\" fill=\"rgba(79,156,240,.3)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><circle cx=\"40\" cy=\"121\" r=\"9\" fill=\"rgba(79,156,240,.3)\" stroke=\"#4f9cf0\" stroke-width=\"1.5\"/><circle cx=\"122\" cy=\"35\" r=\"9\" fill=\"rgba(240,90,90,.25)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><circle cx=\"122\" cy=\"78\" r=\"9\" fill=\"rgba(240,90,90,.25)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><circle cx=\"122\" cy=\"121\" r=\"9\" fill=\"rgba(240,90,90,.25)\" stroke=\"#f05a5a\" stroke-width=\"1.5\"/><circle cx=\"204\" cy=\"78\" r=\"9\" fill=\"rgba(57,227,200,.25)\" stroke=\"#39e3c8\" stroke-width=\"1.5\"/><text x=\"40\" y=\"146\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8.5\">input</text><text x=\"122\" y=\"146\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8.5\">hidden</text><text x=\"204\" y=\"146\" text-anchor=\"middle\" fill=\"#9aa6c0\" font-size=\"8.5\">output</text></svg>",
    "caption": "A neural network: data enters the input layer, passes through hidden layers of weighted connections, and a prediction comes out.",
    "tip": "Neural networks are layers of simple units with tunable weights; 'deep learning' means many layers. LLMs predict the next word."
   },
   {
    "h": "AI in the real world",
    "body": "AI is already woven into daily life, usually invisibly. It filters your spam, recommends videos and products, powers voice assistants and translation, detects fraud on your bank card, and helps doctors read medical scans. Each is a narrow AI trained for its particular job.\n\nThe pace is rapid: AI now generates text, images, and code, assists in science, and drives experimental vehicles. This brings huge potential benefits — faster medicine, wider access to help, automation of tedious work — alongside real disruption, especially to jobs. Understanding AI is quickly becoming a basic literacy, like reading or using a computer, for taking part in modern life and work.",
    "tip": "You already use AI daily — spam filters, recommendations, voice assistants, fraud detection. It's mostly invisible, task-specific tools."
   },
   {
    "h": "Limits and ethics of AI",
    "body": "AI is powerful but far from perfect, and its flaws matter. Models can be biased: if they learn from biased data, they repeat and amplify those biases (for example, in hiring or lending). They can be confidently wrong, producing false information that sounds convincing. And they don't truly understand — they match patterns, which is why they can fail in strange ways a human never would.\n\nThis raises serious ethical questions: about privacy (AI runs on personal data), fairness, accountability (who's responsible when AI errs?), and the impact on jobs and truth. Using AI wisely means knowing its limits, checking its output, and thinking about its effects on people. The technology is a tool — powerful, but only as good and as fair as the humans who build and use it.",
    "tip": "AI can be biased, confidently wrong, and doesn't truly understand — always check its output and consider its effects on people."
   }
  ],
  "cards": [
   {
    "h": "What AI is",
    "body": "Software doing tasks tied to human intelligence. All real AI is 'narrow' (one task); general AI doesn't exist yet."
   },
   {
    "h": "Machine learning",
    "body": "Systems learn patterns from many examples instead of hand-written rules; more good data = better results."
   },
   {
    "h": "Neural networks",
    "body": "Layers of simple units with tunable weights; many layers = deep learning. LLMs predict the next word."
   },
   {
    "h": "Real world",
    "body": "Spam filters, recommendations, voice assistants, fraud detection, medical scans — mostly invisible, task-specific."
   },
   {
    "h": "Limits & ethics",
    "body": "Can be biased and confidently wrong; doesn't truly understand. Mind privacy, fairness, accountability, jobs."
   }
  ],
  "flash": [
   [
    "Artificial intelligence",
    "Building systems that do tasks tied to human intelligence."
   ],
   [
    "Narrow AI",
    "AI built for one specific task (all real AI today)."
   ],
   [
    "General AI",
    "Hypothetical AI as broadly capable as a human."
   ],
   [
    "Machine learning",
    "AI that learns patterns from examples/data."
   ],
   [
    "Training data",
    "The examples a model learns from."
   ],
   [
    "Model",
    "The trained system that makes predictions."
   ],
   [
    "Neural network",
    "Layers of connected units with tunable weights."
   ],
   [
    "Deep learning",
    "Neural networks with many layers."
   ],
   [
    "Large language model",
    "A huge neural net trained on text that predicts the next word."
   ],
   [
    "Bias",
    "Unfair patterns a model learns from skewed data."
   ],
   [
    "Prediction",
    "The output a model produces from its input."
   ],
   [
    "AI ethics",
    "Questions of fairness, privacy, accountability, and impact."
   ]
  ],
  "quiz": [
   {
    "q": "Artificial intelligence is best described as:",
    "options": [
     "Software doing tasks tied to human intelligence",
     "A conscious living being",
     "A type of hardware chip",
     "Magic"
    ],
    "a": 0,
    "why": "AI is clever software running math on data — not alive."
   },
   {
    "q": "All AI that exists today is:",
    "options": [
     "Narrow (built for one task)",
     "General (human-level)",
     "Conscious",
     "Unlimited"
    ],
    "a": 0,
    "why": "Narrow AI does one job; general AI is still hypothetical."
   },
   {
    "q": "General AI — as broadly capable as a human — currently:",
    "options": [
     "Does not exist",
     "Runs every phone",
     "Is conscious",
     "Controls the internet"
    ],
    "a": 0,
    "why": "General AI remains hypothetical."
   },
   {
    "q": "Most modern AI works by:",
    "options": [
     "Learning patterns from examples (machine learning)",
     "Following only hand-written rules",
     "Random guessing",
     "Copying one answer"
    ],
    "a": 0,
    "why": "ML learns from data rather than explicit rules."
   },
   {
    "q": "To make a cat-detector, you mainly give the model:",
    "options": [
     "Many labeled example photos",
     "One rule about whiskers",
     "A dictionary",
     "Nothing"
    ],
    "a": 0,
    "why": "It learns patterns from thousands of labeled examples."
   },
   {
    "q": "Why is data so central to AI?",
    "options": [
     "Model quality depends on example quality and quantity",
     "Data looks nice",
     "It isn't central",
     "Data replaces the model"
    ],
    "a": 0,
    "why": "More, better examples generally mean better performance."
   },
   {
    "q": "Neural networks are loosely inspired by the:",
    "options": [
     "Brain",
     "Stomach",
     "Internet cables",
     "Sun"
    ],
    "a": 0,
    "why": "They're layers of simple connected 'neurons.'"
   },
   {
    "q": "Neural networks with many layers are called:",
    "options": [
     "Deep learning",
     "Shallow data",
     "Spreadsheets",
     "Queries"
    ],
    "a": 0,
    "why": "Many layers = deep learning."
   },
   {
    "q": "Large language models mainly work by:",
    "options": [
     "Predicting the next word repeatedly",
     "Looking up answers in a table",
     "Thinking like a human",
     "Searching Google live"
    ],
    "a": 0,
    "why": "At scale, next-word prediction produces fluent responses."
   },
   {
    "q": "Which is an everyday use of AI?",
    "options": [
     "Spam filtering and recommendations",
     "Boiling water",
     "Cutting paper",
     "Opening a door"
    ],
    "a": 0,
    "why": "Spam filters, recommendations, and voice assistants are AI."
   },
   {
    "q": "If a model learns from biased data, it will likely:",
    "options": [
     "Repeat and amplify that bias",
     "Fix the bias automatically",
     "Ignore the data",
     "Become conscious"
    ],
    "a": 0,
    "why": "Models reflect the data they learn from."
   },
   {
    "q": "AI models can be 'confidently wrong,' meaning they:",
    "options": [
     "Produce convincing false information",
     "Always admit mistakes",
     "Never make errors",
     "Refuse to answer"
    ],
    "a": 0,
    "why": "They can state false things that sound convincing."
   },
   {
    "q": "A key reason AI fails in strange ways is that it:",
    "options": [
     "Matches patterns without truly understanding",
     "Thinks exactly like people",
     "Gets tired",
     "Has emotions"
    ],
    "a": 0,
    "why": "Pattern-matching isn't real understanding."
   },
   {
    "q": "Using AI wisely means you should:",
    "options": [
     "Check its output and weigh its effects",
     "Trust it blindly",
     "Never use it",
     "Hide its use"
    ],
    "a": 0,
    "why": "Know its limits, verify output, consider impacts."
   },
   {
    "q": "AI is ultimately:",
    "options": [
     "A tool, only as fair as those who build and use it",
     "A neutral god",
     "Always right",
     "Beyond human control today"
    ],
    "a": 0,
    "why": "It reflects the choices and data of the people behind it."
   }
  ]
 },
 "medicine-human-anatomy": {
  "title": "Human Anatomy",
  "subject": "Health & Medicine",
  "level": "Grades 9 - college",
  "intro": "Human anatomy is the study of the body's structure — its systems, organs, and how they fit together. Knowing the basics helps you understand your own health and what doctors are talking about.",
  "cards": [
   {
    "h": "The body's organization",
    "body": "The body is organized in levels: cells form tissues, tissues form organs, and organs work together as systems (like the digestive or nervous system). Each level builds on the one below to keep you alive and functioning."
   },
   {
    "h": "Skeletal and muscular systems",
    "body": "The skeleton (about 206 bones in an adult) gives the body structure, protects organs, and works with muscles to produce movement. Muscles pull on bones across joints; they can only pull, not push, which is why they work in opposing pairs."
   },
   {
    "h": "Circulatory and respiratory systems",
    "body": "The heart pumps blood through vessels, delivering oxygen and nutrients and carrying away waste. The lungs bring in oxygen and release carbon dioxide. Together they keep every cell supplied — which is why CPR, keeping blood and air moving, saves lives."
   },
   {
    "h": "Nervous and digestive systems",
    "body": "The nervous system (brain, spinal cord, nerves) is the control center — sensing, thinking, and sending signals. The digestive system breaks food into nutrients the body can absorb for energy and building material, from mouth to stomach to intestines."
   },
   {
    "h": "Systems work together",
    "body": "No system works alone. When you exercise, muscles need more oxygen, so the heart beats faster and you breathe harder, and the nervous system coordinates it all. A problem in one system often affects others, which is why doctors look at the whole body."
   }
  ],
  "flash": [
   [
    "Cell",
    "The smallest living unit of the body."
   ],
   [
    "Tissue",
    "A group of similar cells working together."
   ],
   [
    "Organ",
    "A structure of tissues doing a specific job (heart, lung)."
   ],
   [
    "Organ system",
    "Organs working together (e.g., the digestive system)."
   ],
   [
    "Skeletal system",
    "The bones that support and protect the body."
   ],
   [
    "Circulatory system",
    "The heart and blood vessels that move blood."
   ],
   [
    "Respiratory system",
    "The lungs and airways that exchange gases."
   ],
   [
    "Nervous system",
    "The brain, spinal cord, and nerves — the control center."
   ]
  ],
  "quiz": [
   {
    "q": "The body's levels of organization go:",
    "options": [
     "Cells → tissues → organs → systems",
     "Organs → cells → systems",
     "Systems → cells",
     "Tissues → cells only"
    ],
    "a": 0,
    "why": "Cells form tissues, tissues form organs, organs form systems."
   },
   {
    "q": "The system that pumps blood through the body is the:",
    "options": [
     "Circulatory system",
     "Respiratory system",
     "Digestive system",
     "Skeletal system"
    ],
    "a": 0,
    "why": "The heart and vessels (circulatory system) move blood."
   },
   {
    "q": "An adult human skeleton has about:",
    "options": [
     "206 bones",
     "50 bones",
     "600 bones",
     "20 bones"
    ],
    "a": 0,
    "why": "An adult has about 206 bones."
   },
   {
    "q": "The control center of the body is the:",
    "options": [
     "Nervous system",
     "Digestive system",
     "Skeletal system",
     "Muscular system"
    ],
    "a": 0,
    "why": "The brain, spinal cord, and nerves sense and coordinate everything."
   },
   {
    "q": "Muscles move bones by:",
    "options": [
     "Pulling (never pushing)",
     "Pushing",
     "Dissolving them",
     "Growing longer only"
    ],
    "a": 0,
    "why": "Muscles can only pull, so they work in opposing pairs."
   },
   {
    "q": "The lungs' main job is to:",
    "options": [
     "Exchange oxygen and carbon dioxide",
     "Pump blood",
     "Digest food",
     "Make bones"
    ],
    "a": 0,
    "why": "They bring in oxygen and release carbon dioxide."
   }
  ]
 },
 "medicine-mental-health": {
  "title": "Mental Health",
  "subject": "Health & Medicine",
  "level": "Grades 9 - adult",
  "disclaimer": "General wellness information, not medical advice. If you're struggling, reach out to a professional or call/text 988 (the U.S. Suicide & Crisis Lifeline).",
  "intro": "Mental health is part of overall health — how you think, feel, and cope with life. Like physical health, it varies, can be cared for, and sometimes needs help. Taking it seriously is a strength, not a weakness.",
  "cards": [
   {
    "h": "Mental health is health",
    "body": "Your mind and body are connected. Mental health affects sleep, energy, relationships, and physical health — and vice versa. Everyone has mental health, and it moves up and down. Caring for it is normal maintenance, not a sign something is 'wrong' with you."
   },
   {
    "h": "Stress and the basics of coping",
    "body": "Some stress is normal, but ongoing stress wears you down. The foundations that protect mental health are unglamorous but powerful: enough sleep, movement, decent food, connection with people, and time outside. When you're struggling, start there before anything fancy."
   },
   {
    "h": "Common conditions",
    "body": "Anxiety (persistent, excessive worry) and depression (lasting low mood, loss of interest, low energy) are the most common mental-health conditions — and among the most treatable. They're medical issues, not character flaws, and help works for most people."
   },
   {
    "h": "Healthy vs. harmful coping",
    "body": "Healthy coping (talking to someone, exercise, rest, problem-solving, breathing) builds you up. Harmful coping (alcohol or drugs, isolating, avoiding everything) feels like relief but makes things worse over time. Noticing which you're reaching for is a useful check."
   },
   {
    "h": "Asking for help",
    "body": "Reaching out — to a friend, a doctor, a counselor, or a crisis line — is a sign of strength. Therapy and sometimes medication genuinely help, and many resources are low-cost or free. In the U.S., you can call or text 988 anytime for the Suicide & Crisis Lifeline."
   }
  ],
  "flash": [
   [
    "Mental health",
    "How you think, feel, and cope — part of overall health."
   ],
   [
    "Stress",
    "The body's response to pressure or demands."
   ],
   [
    "Anxiety",
    "Persistent, excessive worry or fear."
   ],
   [
    "Depression",
    "Lasting low mood, loss of interest, and low energy."
   ],
   [
    "Coping",
    "How you handle stress and difficult emotions."
   ],
   [
    "Self-care",
    "Basic habits (sleep, movement, connection) that support wellbeing."
   ],
   [
    "Therapy",
    "Talking with a trained professional to work through challenges."
   ],
   [
    "988",
    "The U.S. Suicide & Crisis Lifeline (call or text)."
   ]
  ],
  "quiz": [
   {
    "q": "Mental health is:",
    "options": [
     "A normal part of overall health everyone has",
     "Only for a few people",
     "A character flaw",
     "Unrelated to the body"
    ],
    "a": 0,
    "why": "Everyone has mental health; it's part of overall health."
   },
   {
    "q": "A foundation that protects mental health is:",
    "options": [
     "Sleep, movement, and connection",
     "Ignoring problems",
     "Isolating",
     "Skipping meals"
    ],
    "a": 0,
    "why": "Basics like sleep, exercise, and social connection are powerful."
   },
   {
    "q": "Anxiety and depression are:",
    "options": [
     "Common and treatable conditions",
     "Rare and hopeless",
     "Character flaws",
     "Just laziness"
    ],
    "a": 0,
    "why": "They're common, treatable conditions — not personal failings."
   },
   {
    "q": "Which is a HARMFUL coping strategy?",
    "options": [
     "Using alcohol/drugs to numb feelings",
     "Talking to a friend",
     "Exercising",
     "Getting rest"
    ],
    "a": 0,
    "why": "Substances and avoidance feel like relief but worsen things."
   },
   {
    "q": "Asking for help is:",
    "options": [
     "A sign of strength",
     "A weakness",
     "Pointless",
     "Only a last resort"
    ],
    "a": 0,
    "why": "Reaching out is strong, and help genuinely works for most people."
   },
   {
    "q": "In the U.S., the Suicide & Crisis Lifeline is reached at:",
    "options": [
     "988",
     "411",
     "211 only",
     "611"
    ],
    "a": 0,
    "why": "You can call or text 988 anytime."
   }
  ]
 },
 "medicine-common-illnesses": {
  "title": "Common Illnesses",
  "subject": "Health & Medicine",
  "level": "All levels",
  "disclaimer": "General information, not medical advice. See a healthcare provider for diagnosis and treatment, and seek emergency care for severe symptoms.",
  "intro": "Knowing the basics of common illnesses helps you take care of yourself, know when rest is enough, and recognize when to see a doctor. Most everyday illnesses are mild and pass on their own.",
  "cards": [
   {
    "h": "Colds vs. the flu",
    "body": "Both are viruses. A cold comes on gradually with a runny nose and sore throat and is usually mild. The flu hits suddenly with fever, body aches, and exhaustion, and can be more serious. Neither is helped by antibiotics (those fight bacteria, not viruses) — rest and fluids are the main treatment."
   },
   {
    "h": "Bacteria vs. viruses",
    "body": "Bacteria and viruses are different germs. Antibiotics kill bacteria but do nothing to viruses — taking them for a cold doesn't help and can breed resistant bacteria. Many infections are viral and simply need time; a doctor can tell which is which."
   },
   {
    "h": "Fever and when to worry",
    "body": "A fever is the body's defense, raising temperature to fight infection — often a sign the immune system is working. Rest, fluids, and over-the-counter medicine help you feel better. See a doctor for a very high fever, one lasting several days, or fever with trouble breathing, stiff neck, confusion, or severe pain."
   },
   {
    "h": "Prevention basics",
    "body": "The simplest protections work: wash your hands, don't touch your face with dirty hands, cover coughs, stay home when sick, and keep up with recommended vaccines. Sleep, good food, and managing stress keep your immune system strong."
   },
   {
    "h": "When to seek care",
    "body": "Most minor illnesses resolve with rest. Seek care for symptoms that are severe, worsening, or lasting too long — trouble breathing, chest pain, severe dehydration, a high or persistent fever, a wound that looks infected, or anything that worries you. When in doubt, call a nurse line or doctor."
   }
  ],
  "flash": [
   [
    "Virus",
    "A germ causing colds and flu; antibiotics don't work on it."
   ],
   [
    "Bacteria",
    "Germs that antibiotics can treat."
   ],
   [
    "Antibiotic",
    "Medicine that kills bacteria (not viruses)."
   ],
   [
    "Fever",
    "Raised body temperature, usually a sign of fighting infection."
   ],
   [
    "Immune system",
    "The body's defense against germs."
   ],
   [
    "Vaccine",
    "Prepares the immune system to fight a specific disease."
   ],
   [
    "Antibiotic resistance",
    "When bacteria evolve to survive antibiotics (from overuse)."
   ],
   [
    "Over-the-counter",
    "Medicine available without a prescription."
   ]
  ],
  "quiz": [
   {
    "q": "Antibiotics work against:",
    "options": [
     "Bacteria, not viruses",
     "Viruses, not bacteria",
     "Both equally",
     "Neither"
    ],
    "a": 0,
    "why": "Antibiotics kill bacteria; they do nothing for viral colds/flu."
   },
   {
    "q": "A cold and the flu are both caused by:",
    "options": [
     "Viruses",
     "Bacteria",
     "Allergies",
     "Poor diet"
    ],
    "a": 0,
    "why": "Both are viral, so antibiotics don't help either."
   },
   {
    "q": "A fever usually means:",
    "options": [
     "The body is fighting an infection",
     "Something is broken",
     "You need antibiotics",
     "Nothing at all"
    ],
    "a": 0,
    "why": "Raised temperature is part of the immune response."
   },
   {
    "q": "A simple, powerful way to prevent illness is to:",
    "options": [
     "Wash your hands",
     "Take antibiotics daily",
     "Avoid all sleep",
     "Skip vaccines"
    ],
    "a": 0,
    "why": "Handwashing stops a huge amount of germ spread."
   },
   {
    "q": "Taking antibiotics for a virus can:",
    "options": [
     "Breed resistant bacteria",
     "Cure the virus",
     "Prevent all colds",
     "Replace rest"
    ],
    "a": 0,
    "why": "Misuse drives antibiotic resistance and doesn't help viruses."
   },
   {
    "q": "You should seek care for:",
    "options": [
     "Trouble breathing or a high, persistent fever",
     "A mild runny nose",
     "A single sneeze",
     "Feeling slightly tired"
    ],
    "a": 0,
    "why": "Severe or worsening symptoms need medical attention."
   }
  ]
 },
 "medicine-medical-terminology": {
  "title": "Medical Terminology",
  "subject": "Health & Medicine",
  "level": "College",
  "intro": "Medical terms can look like a foreign language, but most are built from a few Greek and Latin word parts. Learn the common parts and you can decode words you've never seen — a big help in healthcare or just understanding your own care.",
  "cards": [
   {
    "h": "Words built from parts",
    "body": "Most medical terms combine a root (the body part or meaning), a prefix (at the front), and a suffix (at the end). Break a word into parts and its meaning appears: 'cardiology' = cardio (heart) + logy (study of) = the study of the heart."
   },
   {
    "h": "Common roots",
    "body": "Roots name body parts or ideas: cardio (heart), derm (skin), neuro (nerve), gastro (stomach), hemo/hema (blood), osteo (bone), pulmo (lung), nephro (kidney). These show up again and again across medicine."
   },
   {
    "h": "Common prefixes",
    "body": "Prefixes modify meaning: hyper- (high/over), hypo- (low/under), a-/an- (without), tachy- (fast), brady- (slow), peri- (around), sub- (under). 'Hypertension' = hyper (high) + tension (pressure) = high blood pressure."
   },
   {
    "h": "Common suffixes",
    "body": "Suffixes often tell what's happening: -itis (inflammation), -ectomy (surgical removal), -ology (study of), -pathy (disease), -emia (blood condition), -oma (tumor). 'Appendicitis' = appendic (appendix) + itis (inflammation)."
   },
   {
    "h": "Putting it together",
    "body": "With the parts, you can decode unfamiliar terms. 'Dermatitis' = derm (skin) + itis (inflammation) = inflamed skin. 'Nephrology' = nephro (kidney) + logy (study) = the study of kidneys. You won't know every term, but you can make a strong, educated guess."
   }
  ],
  "flash": [
   [
    "Root",
    "The core of a medical term (the body part or meaning)."
   ],
   [
    "-itis",
    "Suffix meaning inflammation (e.g., arthritis)."
   ],
   [
    "-ectomy",
    "Suffix meaning surgical removal (e.g., appendectomy)."
   ],
   [
    "-ology",
    "Suffix meaning the study of (e.g., cardiology)."
   ],
   [
    "hyper- / hypo-",
    "Prefixes for high/over and low/under."
   ],
   [
    "cardio-",
    "Root meaning heart."
   ],
   [
    "derm-",
    "Root meaning skin."
   ],
   [
    "neuro-",
    "Root meaning nerve."
   ]
  ],
  "quiz": [
   {
    "q": "The suffix '-itis' means:",
    "options": [
     "Inflammation",
     "Removal",
     "Study of",
     "Tumor"
    ],
    "a": 0,
    "why": "'-itis' = inflammation (e.g., tonsillitis)."
   },
   {
    "q": "'Cardiology' means the study of the:",
    "options": [
     "Heart",
     "Skin",
     "Brain",
     "Kidney"
    ],
    "a": 0,
    "why": "cardio (heart) + logy (study of)."
   },
   {
    "q": "The prefix 'hyper-' means:",
    "options": [
     "High / over",
     "Low / under",
     "Without",
     "Around"
    ],
    "a": 0,
    "why": "Hyper- = high/over (hypertension = high blood pressure)."
   },
   {
    "q": "'-ectomy' refers to:",
    "options": [
     "Surgical removal",
     "Inflammation",
     "Pain",
     "Study"
    ],
    "a": 0,
    "why": "An -ectomy is the removal of something (appendectomy)."
   },
   {
    "q": "'Dermatitis' means:",
    "options": [
     "Inflamed skin",
     "Heart study",
     "Bone removal",
     "Nerve pain"
    ],
    "a": 0,
    "why": "derm (skin) + itis (inflammation)."
   },
   {
    "q": "The root 'neuro-' refers to:",
    "options": [
     "Nerves",
     "Blood",
     "Lungs",
     "Stomach"
    ],
    "a": 0,
    "why": "Neuro- means nerve (neurology = study of the nervous system)."
   }
  ]
 },
 "survival-emergency-first-aid": {
  "title": "Emergency First Aid",
  "subject": "Survival & Preparedness",
  "level": "All levels",
  "disclaimer": "General information, not a substitute for certified first-aid training. Call 911 in an emergency.",
  "intro": "In an emergency far from help, basic first aid can keep someone alive until rescue arrives. You don't need a kit full of gear — calm thinking and a few core skills matter most.",
  "cards": [
   {
    "h": "Stay calm and assess",
    "body": "Panic helps no one. Take a breath, make sure the scene is safe for you, then check the person: Are they responsive? Breathing? Bleeding badly? Handle life threats first — breathing and severe bleeding — before minor injuries."
   },
   {
    "h": "Severe bleeding",
    "body": "Serious bleeding is an immediate threat. Press firmly and directly on the wound with the cleanest cloth available and keep steady pressure. Don't remove soaked cloth — add more on top. For a limb that won't stop bleeding, a tight band (tourniquet) above the wound can be lifesaving."
   },
   {
    "h": "Shock",
    "body": "Shock is a dangerous drop in blood flow that can follow serious injury or blood loss. Signs: pale, cold, clammy skin; a rapid, weak pulse; confusion. Have the person lie down, keep them warm, elevate the legs if no spinal injury is suspected, and get help fast."
   },
   {
    "h": "Breaks, sprains, and burns",
    "body": "For a suspected broken bone, keep it still and supported and don't try to straighten it. For sprains, remember RICE: Rest, Ice, Compression, Elevation. For burns, cool with clean running water for 10–20 minutes — never ice or butter — and cover loosely."
   },
   {
    "h": "A simple first-aid kit",
    "body": "A basic kit goes a long way: adhesive bandages, gauze and tape, an elastic wrap, antiseptic wipes, tweezers, gloves, pain relievers, and any personal medications. Know what's in it before you need it, and keep one where you spend time (home, car, pack)."
   }
  ],
  "flash": [
   [
    "Scene safety",
    "Making sure it's safe for you before helping."
   ],
   [
    "Direct pressure",
    "Pressing on a wound to stop bleeding."
   ],
   [
    "Tourniquet",
    "A tight band above severe limb bleeding, a last resort."
   ],
   [
    "Shock",
    "Dangerous drop in blood flow after serious injury."
   ],
   [
    "RICE",
    "Rest, Ice, Compression, Elevation (for sprains)."
   ],
   [
    "Burn care",
    "Cool with running water 10–20 min; no ice or butter."
   ],
   [
    "Splint",
    "Support that keeps a suspected broken bone still."
   ],
   [
    "First-aid kit",
    "Basic supplies to treat injuries until help arrives."
   ]
  ],
  "quiz": [
   {
    "q": "The first life threats to handle are:",
    "options": [
     "Breathing and severe bleeding",
     "Small cuts",
     "Bruises",
     "Blisters"
    ],
    "a": 0,
    "why": "Airway/breathing and major bleeding are immediate threats."
   },
   {
    "q": "To stop severe bleeding you should:",
    "options": [
     "Apply firm direct pressure",
     "Rinse and wait",
     "Elevate only",
     "Apply ice only"
    ],
    "a": 0,
    "why": "Direct pressure is the first and main step."
   },
   {
    "q": "RICE for a sprain stands for Rest, Ice, Compression, and:",
    "options": [
     "Elevation",
     "Exercise",
     "Eating",
     "Energy"
    ],
    "a": 0,
    "why": "Elevation reduces swelling along with the others."
   },
   {
    "q": "To treat a burn, you should:",
    "options": [
     "Cool it with running water",
     "Put butter on it",
     "Pack it in ice",
     "Pop any blisters"
    ],
    "a": 0,
    "why": "Cool running water 10–20 min; avoid ice, butter, and popping blisters."
   },
   {
    "q": "Signs of shock include:",
    "options": [
     "Pale, cold, clammy skin and confusion",
     "Warm pink skin",
     "High energy",
     "A normal pulse"
    ],
    "a": 0,
    "why": "Shock shows as pale, clammy skin, a weak rapid pulse, and confusion."
   },
   {
    "q": "For a suspected broken bone, you should:",
    "options": [
     "Keep it still and supported",
     "Straighten it",
     "Have them walk it off",
     "Massage it"
    ],
    "a": 0,
    "why": "Immobilize it; don't try to realign it yourself."
   }
  ]
 },
 "survival-wilderness-skills": {
  "title": "Wilderness Skills",
  "subject": "Survival & Preparedness",
  "level": "All levels",
  "disclaimer": "General outdoor-safety information. Build skills with practice and never take unnecessary risks.",
  "intro": "Wilderness skills are about staying safe and self-reliant in the outdoors. Most trouble comes from poor preparation, so a little knowledge and planning prevents the majority of emergencies.",
  "cards": [
   {
    "h": "Plan and tell someone",
    "body": "The single best survival skill is preparation. Before heading out, check the weather, pack the basics, and tell someone your route and when you'll be back. If you don't return, that person is your rescue. Most survival situations are avoided right here."
   },
   {
    "h": "The ten essentials",
    "body": "Experienced hikers carry a core kit: navigation (map/compass), water and a way to purify it, extra food, extra clothing/rain layer, fire-starting, a knife or tool, a first-aid kit, a headlamp, sun protection, and an emergency shelter. Even a short hike can turn into an overnight."
   },
   {
    "h": "If you get lost: STOP",
    "body": "If you realize you're lost, STOP: Stop (don't panic or wander), Think (how did you get here?), Observe (surroundings, landmarks, weather), Plan (a careful next step). Wandering makes you harder to find; staying put near an open area is often safest."
   },
   {
    "h": "Protect against the elements",
    "body": "Exposure is the top wilderness killer. Stay dry, layer clothing, and shelter from wind and rain. In heat, rest in shade during the hottest hours and drink water. Managing your body temperature matters more than food in the short term."
   },
   {
    "h": "Minimize impact and signal",
    "body": "Respect the outdoors (pack out trash, don't disturb wildlife), and know how to be found if needed. Three of anything (whistle blasts, signal fires, flashes) means distress. Bright colors and open areas make you visible to searchers and aircraft."
   }
  ],
  "flash": [
   [
    "Trip plan",
    "Telling someone your route and return time before you go."
   ],
   [
    "Ten essentials",
    "The core kit experienced hikers always carry."
   ],
   [
    "STOP",
    "Stop, Think, Observe, Plan — when you're lost."
   ],
   [
    "Exposure",
    "Harm from weather (cold, heat, wet) — the top outdoor danger."
   ],
   [
    "Layering",
    "Wearing adjustable clothing layers to manage temperature."
   ],
   [
    "Signal of three",
    "Three whistles/fires/flashes signal distress."
   ],
   [
    "Leave No Trace",
    "Minimizing your impact on the outdoors."
   ],
   [
    "Navigation",
    "Finding your way with a map and compass or known landmarks."
   ]
  ],
  "quiz": [
   {
    "q": "The single best survival skill is:",
    "options": [
     "Preparation (plan + tell someone)",
     "Running fast",
     "Eating a lot",
     "Hiking alone"
    ],
    "a": 0,
    "why": "Good planning prevents most emergencies; a told plan brings rescue."
   },
   {
    "q": "If you realize you're lost, you should:",
    "options": [
     "STOP (don't wander)",
     "Keep walking fast",
     "Split from your group",
     "Panic"
    ],
    "a": 0,
    "why": "Stop, Think, Observe, Plan — wandering makes you harder to find."
   },
   {
    "q": "The top killer in the wilderness is:",
    "options": [
     "Exposure to the elements",
     "Hunger",
     "Boredom",
     "Thirst only"
    ],
    "a": 0,
    "why": "Cold, heat, and wet (exposure) are the biggest short-term dangers."
   },
   {
    "q": "The 'ten essentials' always include:",
    "options": [
     "Navigation, water, fire, shelter, first aid",
     "Only snacks",
     "Just a phone",
     "Nothing special"
    ],
    "a": 0,
    "why": "They're the core safety kit for any trip."
   },
   {
    "q": "To stay warm, you should:",
    "options": [
     "Layer clothing and stay dry",
     "Wear one heavy wet layer",
     "Stay in the wind",
     "Sweat a lot"
    ],
    "a": 0,
    "why": "Layering and staying dry manage body temperature best."
   },
   {
    "q": "Before a hike, you should always:",
    "options": [
     "Tell someone your route and return time",
     "Tell no one",
     "Leave at night unprepared",
     "Skip checking the weather"
    ],
    "a": 0,
    "why": "A told plan means someone will notice if you don't return."
   }
  ]
 },
 "survival-navigation-maps": {
  "title": "Navigation & Maps",
  "subject": "Survival & Preparedness",
  "level": "All levels",
  "disclaimer": "General information. Practice navigation skills in safe areas before relying on them.",
  "intro": "Knowing where you are and how to get where you're going is a core outdoor skill. Phones fail (dead batteries, no signal), so a map, a compass, and basic know-how are worth learning.",
  "cards": [
   {
    "h": "Reading a map",
    "body": "A map is a bird's-eye view drawn to scale. Key features: the legend (explains symbols), the scale (map distance vs. real distance), and direction (usually north is up). Topographic maps add contour lines showing elevation — close lines mean steep terrain."
   },
   {
    "h": "Finding direction",
    "body": "The sun rises in the east and sets in the west, giving you a rough east-west line any clear day. A compass needle always points to magnetic north. Knowing which way is north lets you orient a map and hold a straight heading instead of wandering in circles."
   },
   {
    "h": "Using a compass with a map",
    "body": "Line up ('orient') the map so its north matches the compass's north; now the map matches the land around you. To travel toward a destination, point yourself along the direction (bearing) from your spot to the target and walk it, checking landmarks as you go."
   },
   {
    "h": "Landmarks and handrails",
    "body": "Experienced navigators follow obvious features: a ridge, a stream, a trail, a shoreline. These 'handrails' guide you and are hard to lose. Pick a visible landmark in your direction of travel, walk to it, then pick the next — it keeps you on a straight line."
   },
   {
    "h": "Don't rely only on your phone",
    "body": "GPS and phone maps are great but fragile outdoors — batteries die and signal drops. Carry a paper map and compass as backup, keep your phone charged and conserved, and learn the basics before you need them. Redundancy is what keeps you found."
   }
  ],
  "flash": [
   [
    "Map legend",
    "The key explaining a map's symbols."
   ],
   [
    "Map scale",
    "The ratio of map distance to real distance."
   ],
   [
    "Contour lines",
    "Lines on a topo map showing elevation (close = steep)."
   ],
   [
    "Compass",
    "A tool whose needle points to magnetic north."
   ],
   [
    "Orienting a map",
    "Lining up the map's north with real north."
   ],
   [
    "Bearing",
    "The compass direction from you to a destination."
   ],
   [
    "Handrail",
    "An obvious feature (stream, ridge) you follow to navigate."
   ],
   [
    "Topographic map",
    "A map showing elevation with contour lines."
   ]
  ],
  "quiz": [
   {
    "q": "On most maps, which direction is 'up'?",
    "options": [
     "North",
     "South",
     "East",
     "West"
    ],
    "a": 0,
    "why": "By convention, maps are drawn with north at the top."
   },
   {
    "q": "A compass needle points to:",
    "options": [
     "Magnetic north",
     "The sun",
     "Your destination",
     "Downhill"
    ],
    "a": 0,
    "why": "The needle aligns with magnetic north, letting you orient."
   },
   {
    "q": "The sun rises in the:",
    "options": [
     "East",
     "West",
     "North",
     "South"
    ],
    "a": 0,
    "why": "It rises in the east and sets in the west."
   },
   {
    "q": "Close-together contour lines mean:",
    "options": [
     "Steep terrain",
     "Flat ground",
     "Water",
     "A trail"
    ],
    "a": 0,
    "why": "Tightly spaced contours show a steep slope."
   },
   {
    "q": "A 'handrail' in navigation is:",
    "options": [
     "An obvious feature you follow (stream, ridge)",
     "A metal rail",
     "A compass part",
     "A type of map"
    ],
    "a": 0,
    "why": "Following a clear feature keeps you on course."
   },
   {
    "q": "Why not rely only on your phone outdoors?",
    "options": [
     "Batteries die and signal drops",
     "It's always wrong",
     "Maps are illegal",
     "It's too heavy"
    ],
    "a": 0,
    "why": "Electronics are fragile; carry a paper map and compass as backup."
   }
  ]
 },
 "survival-disaster-preparedness": {
  "title": "Disaster Preparedness",
  "subject": "Survival & Preparedness",
  "level": "All levels",
  "intro": "Disasters — storms, floods, power outages, wildfires — are easier to get through with a little preparation. A basic plan and kit, made before anything happens, turn a crisis into something manageable.",
  "cards": [
   {
    "h": "Make a plan before you need it",
    "body": "Decide in advance: how will your household get emergency alerts, where will you meet if separated, how will you communicate if phones are down, and what's your evacuation route? Write it down and make sure everyone knows it. A plan made calmly beats decisions made in panic."
   },
   {
    "h": "Build an emergency kit",
    "body": "A basic kit covers you for several days without outside help: water (about a gallon per person per day for 3+ days), non-perishable food, a flashlight, batteries, a first-aid kit, medications, a battery or hand-crank radio, a phone charger/power bank, cash, and copies of important documents."
   },
   {
    "h": "Water and food first",
    "body": "In most disasters, utilities and stores go down. Store water (the hardest to go without) and shelf-stable food you can eat without cooking. Keep your car's gas tank at least half full, and have a way to charge your phone when the power's out."
   },
   {
    "h": "Know your local risks",
    "body": "Prepare for what's likely where you live — hurricanes and floods in some areas, wildfires or earthquakes in others, winter storms elsewhere. Sign up for local emergency alerts, know your evacuation zones, and learn the difference between a 'watch' (be ready) and a 'warning' (act now)."
   },
   {
    "h": "Evacuate early, shelter smart",
    "body": "If told to evacuate, go early — roads clog fast and waiting can trap you. If sheltering in place, pick an interior room away from windows for storms, or higher ground for floods. Keep your kit and documents grab-ready in a bag by the door."
   }
  ],
  "flash": [
   [
    "Emergency plan",
    "A household's agreed plan for alerts, meeting, and evacuation."
   ],
   [
    "Go-bag",
    "A grab-ready bag of essentials for a fast evacuation."
   ],
   [
    "Emergency kit",
    "Supplies to last several days without outside help."
   ],
   [
    "Watch vs. warning",
    "A watch means be ready; a warning means act now."
   ],
   [
    "Water storage",
    "About 1 gallon per person per day for 3+ days."
   ],
   [
    "Evacuation route",
    "The planned way out of a danger area."
   ],
   [
    "Shelter in place",
    "Staying put safely indoors during a hazard."
   ],
   [
    "Alerts",
    "Official emergency notifications to sign up for."
   ]
  ],
  "quiz": [
   {
    "q": "The best time to make an emergency plan is:",
    "options": [
     "Before a disaster happens",
     "During the disaster",
     "After it's over",
     "Never"
    ],
    "a": 0,
    "why": "A calm plan beats panicked decisions in the moment."
   },
   {
    "q": "An emergency kit should include water for about:",
    "options": [
     "3+ days (a gallon per person/day)",
     "1 hour",
     "1 month minimum",
     "No water needed"
    ],
    "a": 0,
    "why": "Aim for a gallon per person per day for at least three days."
   },
   {
    "q": "A weather 'warning' means:",
    "options": [
     "Act now",
     "Maybe later",
     "Nothing",
     "The storm passed"
    ],
    "a": 0,
    "why": "A warning means the hazard is imminent — act. A watch means be ready."
   },
   {
    "q": "If told to evacuate, you should:",
    "options": [
     "Leave early",
     "Wait until the last minute",
     "Ignore it",
     "Drive toward the hazard"
    ],
    "a": 0,
    "why": "Leaving early avoids clogged roads and getting trapped."
   },
   {
    "q": "A 'go-bag' is:",
    "options": [
     "A grab-ready bag of essentials",
     "A trash bag",
     "A grocery bag",
     "A sleeping bag only"
    ],
    "a": 0,
    "why": "It's packed ahead so you can evacuate fast."
   },
   {
    "q": "You should prepare mostly for:",
    "options": [
     "The disasters likely in your area",
     "Only rare events",
     "Nothing specific",
     "Events on other continents"
    ],
    "a": 0,
    "why": "Tailor your prep to your local risks (floods, fires, storms, quakes)."
   }
  ]
 },
 "cooking-knife-skills": {
  "title": "Knife Skills",
  "subject": "Cooking & Nutrition",
  "level": "All levels",
  "intro": "Good knife skills make cooking faster, safer, and more enjoyable — it's the first real technique worth learning. A little practice turns the most-used kitchen tool from scary into second nature.",
  "cards": [
   {
    "h": "A sharp knife is a safe knife",
    "body": "A dull knife slips off food and takes more force, which is how cuts happen. A sharp knife bites in and cuts predictably. Keep your knife sharp (a honing steel aligns the edge; occasional sharpening restores it) and it's both safer and easier."
   },
   {
    "h": "The grip and the guiding hand",
    "body": "Hold the knife with a 'pinch grip' — thumb and forefinger on the blade itself, other fingers around the handle — for control. Your other hand forms a 'claw,' fingertips curled under so knuckles guide the blade and fingertips stay clear."
   },
   {
    "h": "The rocking motion",
    "body": "For most chopping, keep the knife tip on the board and rock the blade down and forward through the food, rather than lifting and chopping straight down. It's faster, smoother, and safer once it clicks."
   },
   {
    "h": "Basic cuts",
    "body": "A few cuts cover most recipes: dice (small cubes), slice (thin flat pieces), mince (very fine, for garlic/herbs), and julienne (thin matchsticks). Even sizes matter — pieces the same size cook evenly, so one isn't raw while another's mush."
   },
   {
    "h": "A stable board and clean habits",
    "body": "Put a damp paper towel or cloth under your cutting board so it can't slip. Cut a flat edge on round foods so they don't roll. Keep raw meat on a separate board, and clear cut food into a bowl so your workspace stays clear."
   }
  ],
  "flash": [
   [
    "Pinch grip",
    "Holding the blade with thumb and forefinger for control."
   ],
   [
    "Claw grip",
    "Curling the guiding hand's fingers under to protect them."
   ],
   [
    "Honing",
    "Realigning a knife's edge with a steel (do often)."
   ],
   [
    "Sharpening",
    "Grinding a new edge onto a dull knife (do occasionally)."
   ],
   [
    "Dice",
    "To cut into small cubes."
   ],
   [
    "Mince",
    "To cut very finely (garlic, herbs)."
   ],
   [
    "Julienne",
    "To cut into thin matchsticks."
   ],
   [
    "Even cuts",
    "Same-size pieces so food cooks evenly."
   ]
  ],
  "quiz": [
   {
    "q": "The safest knife is:",
    "options": [
     "A sharp one",
     "A dull one",
     "A small one",
     "A rusty one"
    ],
    "a": 0,
    "why": "Dull knives slip and need more force; sharp knives cut predictably."
   },
   {
    "q": "The guiding hand should form a:",
    "options": [
     "Claw with curled fingers",
     "Flat palm",
     "Fist on the food",
     "Pointed finger"
    ],
    "a": 0,
    "why": "Curled fingertips keep them clear and let knuckles guide the blade."
   },
   {
    "q": "Cutting food into even sizes helps it:",
    "options": [
     "Cook evenly",
     "Taste saltier",
     "Cost less",
     "Look older"
    ],
    "a": 0,
    "why": "Same-size pieces finish cooking at the same time."
   },
   {
    "q": "To keep a cutting board from slipping, put under it a:",
    "options": [
     "Damp cloth or paper towel",
     "Dry plate",
     "Nothing",
     "A knife"
    ],
    "a": 0,
    "why": "A damp towel grips the counter and stabilizes the board."
   },
   {
    "q": "'Mince' means to cut:",
    "options": [
     "Very finely",
     "Into big chunks",
     "In half only",
     "Into cubes"
    ],
    "a": 0,
    "why": "Mincing is cutting very fine, like for garlic."
   },
   {
    "q": "Honing a knife:",
    "options": [
     "Realigns the edge (do it often)",
     "Replaces the knife",
     "Dulls it",
     "Is the same as washing"
    ],
    "a": 0,
    "why": "A honing steel straightens the edge between sharpenings."
   }
  ]
 },
 "cooking-cooking-techniques": {
  "title": "Cooking Techniques",
  "subject": "Cooking & Nutrition",
  "level": "All levels",
  "intro": "A handful of core cooking methods cover almost every recipe. Understand what each one does to food — and when to use it — and you can cook confidently without following a recipe word for word.",
  "cards": [
   {
    "h": "Dry heat: sauté, roast, grill",
    "body": "Dry-heat methods brown food and build flavor. Sautéing cooks small pieces fast in a little fat over medium-high heat; roasting cooks larger food in the oven with dry heat; grilling cooks over direct high heat. Browning (the 'Maillard reaction') is where a lot of flavor comes from."
   },
   {
    "h": "Moist heat: boil, simmer, steam",
    "body": "Moist-heat methods cook with water or steam and are gentler. Boiling is rapid bubbling (pasta, blanching); simmering is gentle bubbling (soups, sauces, tougher cuts); steaming cooks food above boiling water, keeping nutrients and color. These don't brown food."
   },
   {
    "h": "Combination: braising",
    "body": "Braising combines both — brown the food first (dry heat, for flavor), then cook it slowly in a little liquid (moist heat, to tenderize). It's how tough, cheap cuts of meat become fall-apart tender, and it's very forgiving."
   },
   {
    "h": "Match the method to the food",
    "body": "Tender foods (a fish fillet, a steak, quick vegetables) suit fast, high-heat methods. Tough, cheap cuts and dried beans need slow, moist cooking to break down. Picking the right method for the ingredient is most of what separates good results from bad."
   },
   {
    "h": "Heat control and resting",
    "body": "Most mistakes come from heat that's too high (burning) or too low (steaming instead of browning). Preheat your pan, don't crowd it (crowding steams food), and let roasted or grilled meat rest a few minutes after cooking so the juices stay in."
   }
  ],
  "flash": [
   [
    "Sauté",
    "Cook small pieces quickly in a little fat over medium-high heat."
   ],
   [
    "Roast",
    "Cook larger food in the oven with dry heat."
   ],
   [
    "Simmer",
    "Cook gently in liquid just below a boil."
   ],
   [
    "Steam",
    "Cook food above boiling water, keeping nutrients."
   ],
   [
    "Braise",
    "Brown, then cook slowly in a little liquid to tenderize."
   ],
   [
    "Maillard reaction",
    "The browning that builds deep flavor."
   ],
   [
    "Dry vs. moist heat",
    "Dry browns; moist cooks gently without browning."
   ],
   [
    "Resting meat",
    "Letting cooked meat sit so juices redistribute."
   ]
  ],
  "quiz": [
   {
    "q": "Browning food for flavor requires:",
    "options": [
     "Dry heat (sauté, roast, grill)",
     "Boiling",
     "Steaming",
     "Soaking"
    ],
    "a": 0,
    "why": "Moist-heat methods don't brown; dry heat does (Maillard reaction)."
   },
   {
    "q": "Tough, cheap cuts of meat are best cooked:",
    "options": [
     "Slowly with moist heat (braising)",
     "Quickly on high heat",
     "Raw",
     "By boiling for 1 minute"
    ],
    "a": 0,
    "why": "Slow, moist cooking breaks down tough tissue into tenderness."
   },
   {
    "q": "Braising is a combination of:",
    "options": [
     "Browning then slow moist cooking",
     "Only boiling",
     "Only grilling",
     "Freezing then frying"
    ],
    "a": 0,
    "why": "You brown for flavor, then simmer in liquid to tenderize."
   },
   {
    "q": "Crowding a hot pan causes food to:",
    "options": [
     "Steam instead of brown",
     "Brown faster",
     "Cook less",
     "Taste sweeter"
    ],
    "a": 0,
    "why": "Too much food drops the temperature and releases moisture, steaming it."
   },
   {
    "q": "Steaming is good because it:",
    "options": [
     "Keeps nutrients and color",
     "Browns food",
     "Adds fat",
     "Toughens food"
    ],
    "a": 0,
    "why": "Gentle moist heat preserves nutrients and color."
   },
   {
    "q": "After roasting meat, you should:",
    "options": [
     "Let it rest a few minutes",
     "Cut it instantly",
     "Freeze it",
     "Add water"
    ],
    "a": 0,
    "why": "Resting lets juices redistribute so they don't run out."
   }
  ]
 },
 "cooking-baking": {
  "title": "Baking",
  "subject": "Cooking & Nutrition",
  "level": "All levels",
  "intro": "Baking is cooking's precise cousin — more like chemistry than freestyle cooking. Measure carefully and understand what each ingredient does, and you can bake reliably instead of hoping for the best.",
  "cards": [
   {
    "h": "Baking is a measured science",
    "body": "Unlike stovetop cooking, baking relies on exact ratios and reactions, so measuring matters. Too much flour makes it dry; too much liquid, dense. Weighing ingredients (in grams) is more accurate than cups. Follow the recipe closely the first time, then adjust."
   },
   {
    "h": "What the main ingredients do",
    "body": "Flour gives structure (its gluten forms the framework); sugar sweetens, browns, and keeps things moist; fat (butter, oil) adds richness and tenderness; eggs bind and add structure; liquid brings it together. Change one and you change the result."
   },
   {
    "h": "Leavening: what makes it rise",
    "body": "Leaveners make baked goods light. Baking soda and baking powder release gas bubbles through a chemical reaction; yeast is a living organism that ferments and produces gas slowly (for bread). Without leavening, cakes and breads would be flat and dense."
   },
   {
    "h": "Mixing matters",
    "body": "How you mix affects texture. Overmixing batter develops too much gluten and makes muffins and cakes tough; gentle mixing keeps them tender. Creaming butter and sugar adds air for fluffiness. The recipe's mixing instructions aren't optional — they shape the result."
   },
   {
    "h": "Oven and doneness",
    "body": "An accurate, preheated oven is essential — an oven thermometer is cheap insurance, since many ovens run off. Check doneness with the right test: a toothpick comes out clean for cakes, edges pull away, or an internal temperature for bread. Don't open the oven too early or it can sink."
   }
  ],
  "flash": [
   [
    "Gluten",
    "The protein in flour that gives baked goods structure."
   ],
   [
    "Leavening",
    "Agents (baking soda/powder, yeast) that make baking rise."
   ],
   [
    "Baking soda vs. powder",
    "Both leaven chemically; powder has its own acid built in."
   ],
   [
    "Yeast",
    "A living organism that leavens bread by fermenting."
   ],
   [
    "Creaming",
    "Beating butter and sugar together to add air."
   ],
   [
    "Overmixing",
    "Too much mixing that toughens batter."
   ],
   [
    "Measuring by weight",
    "Using grams for accuracy over cups."
   ],
   [
    "Preheating",
    "Bringing the oven to temperature before baking."
   ]
  ],
  "quiz": [
   {
    "q": "Compared to stovetop cooking, baking is:",
    "options": [
     "More precise, like chemistry",
     "More freestyle",
     "Never measured",
     "Always faster"
    ],
    "a": 0,
    "why": "Baking depends on exact ratios and reactions."
   },
   {
    "q": "What gives baked goods their structure?",
    "options": [
     "Flour (gluten)",
     "Sugar",
     "Food coloring",
     "Salt alone"
    ],
    "a": 0,
    "why": "Gluten, the protein in flour, forms the framework."
   },
   {
    "q": "Leavening agents make baked goods:",
    "options": [
     "Rise and become light",
     "Flat",
     "Salty",
     "Cold"
    ],
    "a": 0,
    "why": "Baking soda/powder and yeast create gas bubbles that lift the dough."
   },
   {
    "q": "Overmixing cake or muffin batter makes it:",
    "options": [
     "Tough",
     "Fluffier",
     "Sweeter",
     "Safer"
    ],
    "a": 0,
    "why": "It develops too much gluten, toughening the texture."
   },
   {
    "q": "The most accurate way to measure baking ingredients is:",
    "options": [
     "By weight (grams)",
     "By the handful",
     "By guessing",
     "By eye"
    ],
    "a": 0,
    "why": "Weighing avoids the variability of scooping cups."
   },
   {
    "q": "Yeast leavens bread by:",
    "options": [
     "Fermenting and producing gas",
     "A quick chemical fizz",
     "Melting",
     "Freezing"
    ],
    "a": 0,
    "why": "Yeast is alive; it ferments and slowly produces gas."
   }
  ]
 },
 "cooking-meal-planning": {
  "title": "Meal Planning",
  "subject": "Cooking & Nutrition",
  "level": "All levels",
  "intro": "Meal planning is deciding ahead of time what you'll eat — and it's one of the biggest money-and-time savers in the kitchen. A little planning means less takeout, less waste, and less daily 'what's for dinner?' stress.",
  "cards": [
   {
    "h": "Why plan",
    "body": "Deciding meals in advance saves money (fewer impulse buys and takeout), saves time (one shopping trip, less daily deciding), and cuts waste (you buy what you'll actually use). It also tends to mean healthier eating, since you're not grabbing whatever's fastest when hungry."
   },
   {
    "h": "Plan around what's cheap and on hand",
    "body": "Build meals around what's on sale, in season, and already in your pantry. Check what you have before shopping. Planning a few meals that share ingredients (buy a big bag of rice or a rotisserie chicken and use it several ways) stretches your dollar."
   },
   {
    "h": "Make a list and stick to it",
    "body": "From your plan, write a shopping list organized by the store's sections, and shop it — ideally not hungry. A list is your defense against impulse buys, which are where a lot of food money leaks away."
   },
   {
    "h": "Batch cooking and leftovers",
    "body": "Cooking once and eating several times is a huge time-saver. Make a big batch of something (chili, rice, roasted vegetables), then repurpose it across the week. Plan leftovers on purpose — cook extra dinner to become tomorrow's lunch."
   },
   {
    "h": "Keep it realistic",
    "body": "The best meal plan is one you'll actually follow. Start small — plan just dinners, or just a few days. Keep some easy backup meals (eggs, pasta, canned beans) for busy nights so one skipped plan doesn't send you to takeout. Flexibility keeps the habit going."
   }
  ],
  "flash": [
   [
    "Meal planning",
    "Deciding meals ahead to save money, time, and waste."
   ],
   [
    "Shopping list",
    "A planned list that curbs impulse buying."
   ],
   [
    "Batch cooking",
    "Cooking a large amount to eat over several meals."
   ],
   [
    "Repurposing",
    "Using one cooked ingredient in several different meals."
   ],
   [
    "In season",
    "Produce that's cheapest and best at that time of year."
   ],
   [
    "Pantry staples",
    "Shelf-stable basics (rice, beans, pasta) to build meals on."
   ],
   [
    "Food waste",
    "Food bought but thrown away unused."
   ],
   [
    "Backup meal",
    "An easy fallback for busy nights (eggs, pasta)."
   ]
  ],
  "quiz": [
   {
    "q": "Meal planning mainly helps you:",
    "options": [
     "Save money, time, and waste",
     "Spend more",
     "Eat more takeout",
     "Cook slower"
    ],
    "a": 0,
    "why": "Planning cuts impulse spending, daily deciding, and wasted food."
   },
   {
    "q": "A shopping list helps by:",
    "options": [
     "Curbing impulse buys",
     "Making food cost more",
     "Wasting time",
     "Hiding sales"
    ],
    "a": 0,
    "why": "Sticking to a list prevents costly impulse purchases."
   },
   {
    "q": "Batch cooking means:",
    "options": [
     "Cooking a large amount to reuse",
     "Cooking one tiny portion",
     "Eating out",
     "Never cooking"
    ],
    "a": 0,
    "why": "You cook once and eat it across several meals."
   },
   {
    "q": "You should build meals around:",
    "options": [
     "What's cheap, in season, and on hand",
     "The most expensive items",
     "Only new ingredients",
     "Random cravings"
    ],
    "a": 0,
    "why": "Using sales, seasonal produce, and your pantry stretches your money."
   },
   {
    "q": "The best meal plan is one that:",
    "options": [
     "You'll actually follow",
     "Is the most complicated",
     "Has no leftovers",
     "Ignores your schedule"
    ],
    "a": 0,
    "why": "A realistic, flexible plan beats an ambitious one you abandon."
   },
   {
    "q": "Keeping easy backup meals on hand helps you:",
    "options": [
     "Avoid takeout on busy nights",
     "Spend more",
     "Waste food",
     "Skip meals"
    ],
    "a": 0,
    "why": "A fallback (eggs, pasta) prevents a busy night from derailing the plan."
   }
  ]
 },
 "lifeskills-personal-finance": {
  "title": "Personal Finance",
  "subject": "Life Skills & Finance",
  "level": "Grades 9 - adult",
  "intro": "Personal finance as a life skill is simply managing your money day to day so it works for you, not against you. It ties together earning, spending, saving, and avoiding the traps that keep people stuck.",
  "cards": [
   {
    "h": "Spend less than you earn",
    "body": "The whole foundation of personal finance is one habit: spend less than you make, and put the difference to work (saving, investing, paying off debt). Everything else is detail. If money goes out faster than it comes in, no income is ever 'enough.'"
   },
   {
    "h": "Know where your money goes",
    "body": "You can't manage what you don't measure. For a month, track what you actually spend — most people are surprised. Awareness alone changes behavior; you'll spot the small recurring leaks (subscriptions, fast food, fees) that quietly add up."
   },
   {
    "h": "Separate needs from wants",
    "body": "Needs keep you going (rent, food, transport, basic bills); wants are everything else. In a tight spot, needs come first. This isn't about never enjoying anything — it's about making sure the essentials are covered before the extras."
   },
   {
    "h": "Build a cushion, avoid high-interest debt",
    "body": "A small emergency fund turns disasters into inconveniences, and avoiding high-interest debt (credit cards carried month to month, payday loans) keeps your money yours instead of a lender's. These two moves prevent most money spirals."
   },
   {
    "h": "Small habits, big results",
    "body": "Personal finance isn't about big wins; it's small consistent habits — automating savings, checking your accounts weekly, comparing prices, not spending to impress people. Over years these quiet habits build real stability and freedom."
   }
  ],
  "flash": [
   [
    "Personal finance",
    "Managing your day-to-day money so it works for you."
   ],
   [
    "Spend less than you earn",
    "The core habit of all personal finance."
   ],
   [
    "Tracking spending",
    "Recording what you spend to see where it goes."
   ],
   [
    "Needs vs. wants",
    "Essentials vs. extras — essentials come first."
   ],
   [
    "Living below your means",
    "Spending less than you make on purpose."
   ],
   [
    "Recurring leaks",
    "Small repeated expenses that quietly add up."
   ],
   [
    "Financial cushion",
    "Savings that absorb surprises."
   ],
   [
    "Lifestyle creep",
    "Spending more as you earn more, so you never get ahead."
   ]
  ],
  "quiz": [
   {
    "q": "The foundation of personal finance is to:",
    "options": [
     "Spend less than you earn",
     "Earn a huge salary",
     "Win the lottery",
     "Never spend anything"
    ],
    "a": 0,
    "why": "Spending less than you make, and using the difference, is the core."
   },
   {
    "q": "The first step to managing money is to:",
    "options": [
     "Track where it actually goes",
     "Ignore it",
     "Spend freely",
     "Open more cards"
    ],
    "a": 0,
    "why": "Awareness of your spending is what changes behavior."
   },
   {
    "q": "In a tight budget, you should cover ___ first.",
    "options": [
     "Needs",
     "Wants",
     "Entertainment",
     "Impulse buys"
    ],
    "a": 0,
    "why": "Essentials (rent, food, transport) come before extras."
   },
   {
    "q": "'Lifestyle creep' is when you:",
    "options": [
     "Spend more as you earn more, never getting ahead",
     "Save more automatically",
     "Track your spending",
     "Cut expenses"
    ],
    "a": 0,
    "why": "Letting spending rise with income keeps you from building wealth."
   },
   {
    "q": "Personal finance success comes mostly from:",
    "options": [
     "Small consistent habits",
     "One big windfall",
     "Risky bets",
     "Luck"
    ],
    "a": 0,
    "why": "Quiet, steady habits build stability over time."
   },
   {
    "q": "A small emergency fund turns disasters into:",
    "options": [
     "Inconveniences",
     "Bigger disasters",
     "Debt",
     "Nothing"
    ],
    "a": 0,
    "why": "A cushion absorbs surprises so they don't become debt."
   }
  ]
 },
 "lifeskills-budgeting-credit": {
  "title": "Budgeting & Credit",
  "subject": "Life Skills & Finance",
  "level": "Grades 9 - adult",
  "intro": "Budgeting and credit are two everyday money skills everyone needs. A budget tells your money where to go; good credit habits keep borrowing cheap and doors open. Here's the practical version.",
  "cards": [
   {
    "h": "A budget is a plan, not a punishment",
    "body": "A budget just means deciding ahead where your money goes, so the important things get covered first. It's freeing, not restricting — you spend without guilt because you already know it fits. Income minus planned expenses should be zero or positive."
   },
   {
    "h": "A simple budgeting method",
    "body": "You don't need fancy apps. A simple split like 50/30/20 (half to needs, a third to wants, a fifth to savings/debt) gives a starting frame. Or 'pay the essentials and savings first, then spend the rest freely.' The best method is the one you'll keep using."
   },
   {
    "h": "What credit is and why it matters",
    "body": "Credit is borrowed money, and your history of repaying it becomes your credit score — a number lenders, landlords, and sometimes employers check. Good credit means easier approvals and lower interest; bad credit costs you money and opportunities for years."
   },
   {
    "h": "Building good credit",
    "body": "The main rules are simple: always pay on time (the biggest factor), keep balances low relative to your limit, and don't open or close lots of accounts at once. Time and consistency build a good score; there's no legitimate overnight fix."
   },
   {
    "h": "Using credit cards wisely",
    "body": "A credit card is a tool that helps or hurts depending on use. Paid in full every month, it builds credit and may earn rewards, costing nothing. Carried as a balance, its high interest quietly drains you. The rule: only charge what you can pay off that month."
   }
  ],
  "flash": [
   [
    "Budget",
    "A plan for where your money goes before you spend it."
   ],
   [
    "50/30/20",
    "Needs 50%, wants 30%, savings/debt 20%."
   ],
   [
    "Credit",
    "Borrowed money you repay, usually with interest."
   ],
   [
    "Credit score",
    "A number showing how reliably you repay."
   ],
   [
    "On-time payment",
    "The biggest factor in a good credit score."
   ],
   [
    "Credit utilization",
    "How much of your available credit you're using (keep low)."
   ],
   [
    "Pay in full",
    "Clearing a credit card each month to avoid interest."
   ],
   [
    "Interest",
    "The cost of borrowing, charged as a percentage."
   ]
  ],
  "quiz": [
   {
    "q": "A budget is best thought of as:",
    "options": [
     "A plan telling your money where to go",
     "A punishment",
     "A luxury",
     "A loan"
    ],
    "a": 0,
    "why": "It's a spending plan that covers what matters first."
   },
   {
    "q": "The biggest factor in your credit score is:",
    "options": [
     "Paying on time",
     "Your income",
     "Your age",
     "How much cash you carry"
    ],
    "a": 0,
    "why": "Payment history is the single largest factor."
   },
   {
    "q": "To avoid credit card interest, you should:",
    "options": [
     "Pay the full balance each month",
     "Pay only the minimum",
     "Skip payments",
     "Max it out"
    ],
    "a": 0,
    "why": "Paying in full means no interest is charged."
   },
   {
    "q": "Under 50/30/20, wants get:",
    "options": [
     "30%",
     "50%",
     "20%",
     "0%"
    ],
    "a": 0,
    "why": "50% needs, 30% wants, 20% savings/debt."
   },
   {
    "q": "Good credit is built by:",
    "options": [
     "Time and consistent on-time payments",
     "An overnight trick",
     "Opening many cards fast",
     "Carrying big balances"
    ],
    "a": 0,
    "why": "Consistency over time builds a score; there's no legit instant fix."
   },
   {
    "q": "Keeping your credit utilization low means:",
    "options": [
     "Using only a small part of your limit",
     "Maxing out cards",
     "Closing all accounts",
     "Never paying"
    ],
    "a": 0,
    "why": "Low balances relative to your limit help your score."
   }
  ]
 },
 "lifeskills-digital-literacy": {
  "title": "Digital Literacy",
  "subject": "Life Skills & Finance",
  "level": "All levels",
  "intro": "Digital literacy is being able to use technology effectively and safely — a basic life skill now, whether for work, banking, or just daily life. It also means protecting yourself from the scams and misinformation that come with it.",
  "cards": [
   {
    "h": "Strong, unique passwords",
    "body": "Your accounts are only as safe as your passwords. Use a long, unique password for each important account (reusing one means a single breach exposes them all). A password manager remembers them for you. Turn on two-factor authentication (a code to your phone) for anything important."
   },
   {
    "h": "Spotting scams and phishing",
    "body": "Scammers imitate real companies to steal money or logins. Red flags: urgent pressure ('act now or your account closes'), requests for passwords or payment in gift cards, slightly-wrong web addresses, and unexpected links. When in doubt, don't click — go to the site directly or call the company."
   },
   {
    "h": "Protecting your privacy",
    "body": "What you post and share can be seen and stored far beyond who you intended. Think before posting, check privacy settings, and be stingy with personal info (full birthdate, address, location). Free services often make money from your data, so notice what you're agreeing to."
   },
   {
    "h": "Judging online information",
    "body": "Not everything online is true. Check who's behind a claim, whether other reliable sources agree, and whether a headline is designed to make you angry (a sign to slow down). Misinformation spreads fastest when it's emotional and unverified — pause before sharing."
   },
   {
    "h": "Everyday digital skills",
    "body": "Basic competence opens doors: using email professionally, searching effectively, filling out online forms, doing online banking and job applications, and keeping devices updated (updates patch security holes). These are now as essential as reading and writing for getting by."
   }
  ],
  "flash": [
   [
    "Digital literacy",
    "Using technology effectively and safely."
   ],
   [
    "Strong password",
    "Long, unique, hard to guess — different per account."
   ],
   [
    "Two-factor authentication",
    "A second login step (a code) for extra security."
   ],
   [
    "Phishing",
    "A scam imitating a real company to steal info or money."
   ],
   [
    "Privacy settings",
    "Controls over who sees what you share."
   ],
   [
    "Password manager",
    "An app that stores your unique passwords securely."
   ],
   [
    "Misinformation",
    "False or misleading information spread online."
   ],
   [
    "Software update",
    "A fix that often patches security holes."
   ]
  ],
  "quiz": [
   {
    "q": "A strong password should be:",
    "options": [
     "Long and unique to each account",
     "The same everywhere",
     "Short and simple",
     "Your name"
    ],
    "a": 0,
    "why": "Unique, long passwords limit the damage of any one breach."
   },
   {
    "q": "A common sign of a phishing scam is:",
    "options": [
     "Urgent pressure and a request for passwords/gift cards",
     "A normal greeting",
     "A real company's official site",
     "No links at all"
    ],
    "a": 0,
    "why": "Urgency and requests for credentials or gift cards are red flags."
   },
   {
    "q": "Two-factor authentication adds:",
    "options": [
     "A second login step for security",
     "More spam",
     "A faster login only",
     "A new password daily"
    ],
    "a": 0,
    "why": "A second factor (like a phone code) blocks most account takeovers."
   },
   {
    "q": "Before sharing an emotional, surprising headline you should:",
    "options": [
     "Verify it with reliable sources",
     "Share it immediately",
     "Assume it's true",
     "Get angrier"
    ],
    "a": 0,
    "why": "Misinformation spreads on emotion; pause and check first."
   },
   {
    "q": "Software updates are important because they:",
    "options": [
     "Patch security holes",
     "Slow your device for fun",
     "Waste data",
     "Do nothing"
    ],
    "a": 0,
    "why": "Updates fix vulnerabilities that attackers exploit."
   },
   {
    "q": "A password manager:",
    "options": [
     "Stores unique passwords securely",
     "Shares your passwords",
     "Weakens security",
     "Is a type of virus"
    ],
    "a": 0,
    "why": "It lets you use strong, unique passwords without memorizing them."
   }
  ]
 },
 "languages-french": {
  "title": "French",
  "subject": "World Languages",
  "level": "All levels",
  "intro": "French is spoken across the world — in France, parts of Canada, and much of Africa — and shares a lot of vocabulary with English. Its spelling looks tricky at first, but it follows consistent rules once you learn a few patterns.",
  "cards": [
   {
    "h": "French and English are cousins",
    "body": "Thanks to history, English borrowed thousands of words from French, so you already know many: table, menu, art, nation, important. This shared vocabulary gives English speakers a real head start."
   },
   {
    "h": "Greetings and politeness",
    "body": "Bonjour (hello/good day), Bonsoir (good evening), Salut (hi, casual), Merci (thank you), S'il vous plaît (please), Au revoir (goodbye), Oui / Non (yes / no). Politeness matters in French — saying 'bonjour' before asking something is expected."
   },
   {
    "h": "Pronunciation basics",
    "body": "French often doesn't pronounce final consonants (the 't' in 'et' is silent). Accents change sounds: é sounds like 'ay.' The French 'r' comes from the back of the throat. It takes practice, but the rules are consistent."
   },
   {
    "h": "Nouns and gender",
    "body": "Like Spanish, every French noun is masculine or feminine, with 'the' as le (masc.) or la (fem.), and 'a/an' as un (masc.) or une (fem.). You usually learn the gender along with the word, and adjectives change to match it."
   },
   {
    "h": "Simple sentences",
    "body": "Basic word order is like English: subject + verb + object. Je mange une pomme = I eat an apple. 'Je' (I), 'tu/vous' (you, informal/formal), and 'il/elle' (he/she) are your core subjects to start speaking."
   }
  ],
  "flash": [
   [
    "Bonjour",
    "Hello / good day"
   ],
   [
    "Merci",
    "Thank you"
   ],
   [
    "S'il vous plaît",
    "Please"
   ],
   [
    "Au revoir",
    "Goodbye"
   ],
   [
    "Oui / Non",
    "Yes / No"
   ],
   [
    "le / la",
    "'the' (masculine / feminine)"
   ],
   [
    "Je / tu / vous",
    "I / you (informal) / you (formal)"
   ],
   [
    "Cognate",
    "A word that looks and means the same in both languages (table)."
   ]
  ],
  "quiz": [
   {
    "q": "How do you say 'hello' in French?",
    "options": [
     "Bonjour",
     "Merci",
     "Au revoir",
     "Oui"
    ],
    "a": 0,
    "why": "Bonjour means hello / good day."
   },
   {
    "q": "English and French share many words because:",
    "options": [
     "English borrowed thousands from French",
     "They're unrelated",
     "French copied English only",
     "By accident"
    ],
    "a": 0,
    "why": "Historical borrowing gives English speakers a vocabulary head start."
   },
   {
    "q": "In French, final consonants are often:",
    "options": [
     "Silent",
     "Stressed loudly",
     "Doubled",
     "Rolled"
    ],
    "a": 0,
    "why": "Many final consonants aren't pronounced (e.g., 'et')."
   },
   {
    "q": "'Merci' means:",
    "options": [
     "Thank you",
     "Hello",
     "Goodbye",
     "Please"
    ],
    "a": 0,
    "why": "Merci is thank you."
   },
   {
    "q": "Which is the feminine 'the'?",
    "options": [
     "la",
     "le",
     "un",
     "les"
    ],
    "a": 0,
    "why": "'la' is feminine; 'le' is masculine."
   },
   {
    "q": "A word like 'table' that's the same in both languages is a:",
    "options": [
     "Cognate",
     "Verb",
     "Accent",
     "Prefix"
    ],
    "a": 0,
    "why": "Cognates share form and meaning across languages."
   }
  ]
 },
 "languages-german": {
  "title": "German",
  "subject": "World Languages",
  "level": "All levels",
  "intro": "German is spoken by over 100 million people in the heart of Europe. It's closely related to English — many words are recognizable — and it's famously logical and consistent, so once you learn a rule it usually sticks.",
  "cards": [
   {
    "h": "German and English are closely related",
    "body": "Both come from the same Germanic root, so lots of basic words are similar: Hand (hand), Wasser (water), Haus (house), Freund (friend), gut (good). You'll recognize more than you expect."
   },
   {
    "h": "Greetings and basics",
    "body": "Hallo (hello), Guten Tag (good day), Guten Morgen (good morning), Danke (thank you), Bitte (please / you're welcome), Auf Wiedersehen (goodbye), Ja / Nein (yes / no). 'Bitte' handily covers both 'please' and 'you're welcome.'"
   },
   {
    "h": "Nouns are capitalized and have gender",
    "body": "In German, every noun is capitalized (das Haus, the house) — a unique, helpful rule. Nouns have three genders, with 'the' as der (masc.), die (fem.), or das (neuter). You learn the article with each noun."
   },
   {
    "h": "Pronunciation is consistent",
    "body": "German is pronounced much as it's spelled, with steady rules. 'W' sounds like English 'v' (Wasser = 'vasser'); 'ei' sounds like 'eye'; 'ie' sounds like 'ee.' The ß (eszett) is a sharp 's' sound. Once you learn the sounds, you can read aloud reliably."
   },
   {
    "h": "Building words",
    "body": "German famously builds long words by sticking shorter ones together. Handschuh = Hand + Schuh (hand + shoe) = glove. Once you can break a long word into its parts, the scary-looking ones become readable."
   }
  ],
  "flash": [
   [
    "Hallo",
    "Hello"
   ],
   [
    "Danke",
    "Thank you"
   ],
   [
    "Bitte",
    "Please / you're welcome"
   ],
   [
    "Auf Wiedersehen",
    "Goodbye"
   ],
   [
    "Ja / Nein",
    "Yes / No"
   ],
   [
    "der / die / das",
    "'the' (masculine / feminine / neuter)"
   ],
   [
    "Noun capitalization",
    "All German nouns are capitalized."
   ],
   [
    "Compound word",
    "A long word built from shorter ones (Handschuh)."
   ]
  ],
  "quiz": [
   {
    "q": "How do you say 'thank you' in German?",
    "options": [
     "Danke",
     "Hallo",
     "Bitte",
     "Nein"
    ],
    "a": 0,
    "why": "Danke means thank you."
   },
   {
    "q": "A unique German spelling rule is that:",
    "options": [
     "All nouns are capitalized",
     "There are no vowels",
     "Words never have spaces",
     "Everything is lowercase"
    ],
    "a": 0,
    "why": "Every German noun is capitalized."
   },
   {
    "q": "German 'W' is pronounced like English:",
    "options": [
     "V",
     "W",
     "B",
     "F"
    ],
    "a": 0,
    "why": "W sounds like 'v' (Wasser = 'vasser')."
   },
   {
    "q": "German is closely related to:",
    "options": [
     "English",
     "Chinese",
     "Arabic",
     "Swahili"
    ],
    "a": 0,
    "why": "Both are Germanic languages with shared roots."
   },
   {
    "q": "How many genders do German nouns have?",
    "options": [
     "Three (der, die, das)",
     "One",
     "Two",
     "None"
    ],
    "a": 0,
    "why": "Masculine (der), feminine (die), neuter (das)."
   },
   {
    "q": "'Handschuh' (hand + shoe) means:",
    "options": [
     "Glove",
     "Sock",
     "Hat",
     "Boot"
    ],
    "a": 0,
    "why": "German builds compound words; a 'hand shoe' is a glove."
   }
  ]
 },
 "languages-american-sign-language": {
  "title": "American Sign Language",
  "subject": "World Languages",
  "level": "All levels",
  "intro": "American Sign Language (ASL) is a complete, natural language used by the Deaf community in the U.S. and much of Canada. It isn't English on the hands — it has its own vocabulary and grammar, expressed visually with handshapes, movement, and facial expression.",
  "cards": [
   {
    "h": "ASL is a real, full language",
    "body": "ASL is not 'English with gestures' — it's a distinct language with its own grammar, just as complete as any spoken language. It's the primary language of many Deaf Americans and has its own rich culture and history."
   },
   {
    "h": "How ASL is made",
    "body": "Signs are built from a few building blocks: handshape (the shape your hand makes), location (where you sign, near the face or body), movement, and palm orientation. Change one and you can change the whole meaning, the way changing a sound changes a spoken word."
   },
   {
    "h": "Facial expression is grammar",
    "body": "In ASL, your face and body aren't just emotion — they carry grammar. Raised eyebrows can mark a yes/no question; a furrowed brow marks a different kind of question; a head shake shows negation. Signing without facial expression is like speaking in a flat monotone that loses meaning."
   },
   {
    "h": "Fingerspelling and word order",
    "body": "ASL has a manual alphabet (fingerspelling) used for names and words with no established sign. Its grammar differs from English — it often uses a topic-comment order and drops English's little connecting words, so it's not signed word-for-word from English."
   },
   {
    "h": "Why learn it",
    "body": "ASL opens communication with Deaf people, is one of the most-studied languages in the U.S., and builds awareness of Deaf culture. Like any language, it's learned best through practice with others and, ideally, with Deaf teachers and community."
   }
  ],
  "flash": [
   [
    "ASL",
    "American Sign Language — a complete visual language."
   ],
   [
    "Handshape",
    "The shape of the hand, a building block of a sign."
   ],
   [
    "Fingerspelling",
    "Spelling words letter by letter with the manual alphabet."
   ],
   [
    "Non-manual markers",
    "Facial expressions and body movements that carry grammar."
   ],
   [
    "Deaf culture",
    "The shared community, values, and history of Deaf people."
   ],
   [
    "Topic-comment",
    "A common ASL sentence structure (state the topic, then comment)."
   ],
   [
    "Palm orientation",
    "Which way the palm faces — part of a sign's meaning."
   ],
   [
    "Visual language",
    "A language expressed and received through sight, not sound."
   ]
  ],
  "quiz": [
   {
    "q": "ASL is:",
    "options": [
     "A complete language with its own grammar",
     "English gestures",
     "A code for English",
     "Just miming"
    ],
    "a": 0,
    "why": "It's a full, natural language distinct from English."
   },
   {
    "q": "In ASL, facial expressions:",
    "options": [
     "Carry grammar (like marking questions)",
     "Are just for emotion",
     "Don't matter",
     "Are forbidden"
    ],
    "a": 0,
    "why": "Non-manual markers convey grammatical meaning."
   },
   {
    "q": "Fingerspelling is used for:",
    "options": [
     "Names and words with no set sign",
     "Every single word",
     "Numbers only",
     "Nothing"
    ],
    "a": 0,
    "why": "The manual alphabet spells names and new/uncommon words."
   },
   {
    "q": "A building block of an ASL sign is:",
    "options": [
     "Handshape",
     "Tone of voice",
     "Spelling",
     "Volume"
    ],
    "a": 0,
    "why": "Handshape, location, movement, and palm orientation form signs."
   },
   {
    "q": "ASL grammar is:",
    "options": [
     "Different from English word order",
     "Identical to English",
     "Nonexistent",
     "Based on sound"
    ],
    "a": 0,
    "why": "It uses its own structure, often topic-comment, not word-for-word English."
   },
   {
    "q": "ASL is the primary language of:",
    "options": [
     "Many Deaf Americans",
     "Everyone in the U.S.",
     "Only teachers",
     "No one"
    ],
    "a": 0,
    "why": "It's a primary language of the U.S. Deaf community."
   }
  ]
 }
};
