/* ──────────────────────────────────────────────────────────────────────────
   Lab404 Study Hub — subject catalog (framework for all major subjects).

   Single source of truth for the universal hub's subjects. desktop.js reads
   window.LAB404_SUBJECTS to build the desktop folders, their windows, and the
   coming-soon topic icons inside each. Content for a topic is added later by
   giving it its own concept cards / flashcards / glossary / practice (same
   engine the CompTIA cores use); until then a topic opens to a "coming soon"
   window. CompTIA is handled specially in desktop.js (its children are the
   existing certification folders).

   To add a subject: append to ACADEMIC. To add a topic: append to its topics[].
   Each topic: { t: label, band: "K-5"|"6-8"|"9-12"|"college", grades: ["K".."12","C"] }.
   `grades` = the grade spine (Massachusetts Curriculum Frameworks floor; provisional, refined per-objective later).
   ────────────────────────────────────────────────────────────────────────── */
window.LAB404_SUBJECTS = {
  /* The CompTIA folder, shown on the desktop. Its contents are the cert folders
     already defined in desktop.js (A+ -> Core 1 / Core 2, Security+, etc.). */
  comptia: {
    key: "comptia", title: "CompTIA", short: "CompTIA", icon: "🎓",
    desc: "IT certifications · A+, Security+ and more",
    certs: ["folder-aplus", "folder-secplus", "folder-netplus", "folder-linuxplus",
            "folder-cloudplus", "folder-serverplus", "folder-cysa", "folder-pentest",
            "folder-securityx", "folder-dataplus"]
  },

  /* Grouping folders — a desktop folder that holds several subject folders, to
     declutter the desktop. `members` are subject keys (academic keys, or "comptia").
     A grouped subject no longer shows as its own top-level desktop icon; it lives
     inside its group folder instead. desktop.js builds these from the catalog.
     (Group key must NOT collide with a subject key — e.g. the group is "life", the
     subject is "lifeskills".) */
  groups: [
    {
      key: "tech", title: "Technology", short: "Tech", icon: "🖥️",
      desc: "Computing & IT — coding plus the CompTIA certification tracks",
      members: ["coding", "comptia"]
    },
    {
      key: "life", title: "Life Skills", short: "Life Skills", icon: "🧰",
      desc: "Real-world living — cooking, survival, repair, home, money, health & more",
      members: ["cooking", "survival", "repair", "gardening", "lifeskills",
                "medicine", "fitness", "money", "business", "law"]
    }
  ],

  /* Academic subjects — K-12 through college. Topics start "coming soon". */
  academic: [
    {
      key: "math", title: "Mathematics", short: "Math", icon: "🔢",
      desc: "From counting to calculus — arithmetic, algebra, geometry & statistics",
      topics: [
        { t: "Arithmetic", band: "K-5", grades: ["K", "1", "2", "3", "4", "5"] },
        { t: "Pre-Algebra", band: "6-8", grades: ["6", "7", "8"] },
        { t: "Algebra", band: "9-12", grades: ["8", "9"] },
        { t: "Geometry", band: "9-12", grades: ["9", "10"] },
        { t: "Trigonometry", band: "9-12", grades: ["10", "11", "12"] },
        { t: "Pre-Calculus", band: "9-12", grades: ["11", "12"] },
        { t: "Calculus", band: "college", grades: ["12", "C"] },
        { t: "Statistics", band: "college", grades: ["11", "12", "C"] }
      ]
    },
    {
      key: "science", title: "Science", short: "Science", icon: "🔬",
      desc: "How the world works — biology, chemistry, physics & earth science",
      adopt: ["mind"],  /* nest the Psychology & Philosophy folder inside Science */
      topics: [
        { t: "Life Science", band: "K-8", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8"] },
        { t: "Biology", band: "9-12", grades: ["9", "10"] },
        { t: "Chemistry", band: "9-12", grades: ["10", "11"] },
        { t: "Physics", band: "9-12", grades: ["11", "12"] },
        { t: "Earth & Space", band: "6-12", grades: ["6", "7", "8", "9"] },
        { t: "Environmental Science", band: "college", grades: ["11", "12", "C"] }
      ]
    },
    {
      key: "english", title: "English & Language Arts", short: "English", icon: "📖",
      desc: "Read, write and think clearly — grammar, vocabulary & literature",
      adopt: ["writing"],  /* nest Writing & Journalism inside English */
      topics: [
        { t: "Reading & Phonics", band: "K-5", grades: ["K", "1", "2", "3", "4", "5"] },
        { t: "Grammar & Mechanics", band: "6-12", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Vocabulary", band: "6-12", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Writing & Composition", band: "9-12", grades: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Literature", band: "9-12", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "social", title: "Social Studies", short: "Social Studies", icon: "🏛️",
      desc: "People, places and systems — history, civics, geography & economics",
      topics: [
        { t: "US History", band: "6-12", grades: ["5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "World History", band: "6-12", grades: ["6", "7", "8", "9", "10"] },
        { t: "Civics & Government", band: "9-12", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Geography", band: "6-12", grades: ["3", "4", "5", "6", "7"] },
        { t: "Economics", band: "9-12", grades: ["9", "10", "11", "12"] }
      ]
    },
    {
      key: "coding", title: "Computer Science & Coding", short: "Coding", icon: "💻",
      desc: "How computers think and how to build with them — CS, Python & the web",
      topics: [
        { t: "Computer Science Foundations", band: "6-12", grades: ["3", "4", "5", "6", "7", "8"] },
        { t: "Python", band: "9-12", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Web Development (HTML/CSS/JS)", band: "9-12", grades: ["8", "9", "10", "11", "12"] },
        { t: "Data & Databases", band: "college", grades: ["11", "12", "C"] },
        { t: "Intro to AI", band: "college", grades: ["11", "12", "C"] }
      ]
    },
    {
      key: "languages", title: "World Languages", short: "Languages", icon: "🌍",
      adopt: ["english"],  /* nest English & Language Arts inside World Languages */
      desc: "Learn to speak, read and understand another language",
      topics: [
        { t: "Spanish", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "French", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "German", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "American Sign Language", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "lifeskills", title: "Life Skills & Finance", short: "Life Skills", icon: "🧭",
      desc: "The practical stuff school skips — money, work and everyday know-how",
      topics: [
        { t: "Personal Finance", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Budgeting & Credit", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Career & Job Skills", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Digital Literacy", band: "all", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "medicine", title: "Health & Medicine", short: "Medicine", icon: "🩺",
      desc: "Understand your body and health — first aid, anatomy, nutrition & more",
      topics: [
        { t: "First Aid & CPR", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "Human Anatomy", band: "9-college", grades: ["9", "10", "11", "12", "C"] },
        { t: "Nutrition", band: "6-adult", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Mental Health", band: "9-adult", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "Common Illnesses", band: "all", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Medical Terminology", band: "college", grades: ["11", "12", "C"] }
      ]
    },
    {
      key: "survival", title: "Survival & Preparedness", short: "Survival", icon: "🏕️",
      desc: "Skills for the outdoors and emergencies — be ready for anything",
      topics: [
        { t: "Emergency First Aid", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Wilderness Skills", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Navigation & Maps", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Water & Food", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Shelter & Fire", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Disaster Preparedness", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "cooking", title: "Cooking & Nutrition", short: "Cooking", icon: "🍳",
      desc: "Feed yourself well — techniques, recipes, baking & food safety",
      topics: [
        { t: "Kitchen Basics", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Knife Skills", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Cooking Techniques", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Baking", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Meal Planning", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Food Safety", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "arts", title: "Arts & Music", short: "Arts", icon: "🎨",
      desc: "Make and appreciate art — drawing, painting, music & photography",
      topics: [
        { t: "Drawing", band: "all", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Painting", band: "all", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Music Theory", band: "all", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Playing an Instrument", band: "all", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Photography", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "mind", title: "Psychology & Philosophy", short: "Psychology", icon: "🧠",
      desc: "How people think and reason — psychology, logic, ethics & big questions",
      topics: [
        { t: "Intro to Psychology", band: "9-college", grades: ["11", "12", "C"] },
        { t: "Critical Thinking", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "Logic", band: "9-college", grades: ["9", "10", "11", "12", "C"] },
        { t: "Ethics", band: "9-college", grades: ["9", "10", "11", "12", "C"] },
        { t: "Philosophy", band: "college", grades: ["11", "12", "C"] }
      ]
    },
    {
      key: "fitness", title: "Fitness & Wellness", short: "Fitness", icon: "💪",
      desc: "Take care of your body and mind — training, recovery & stress",
      topics: [
        { t: "Strength Training", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "Cardio", band: "all", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Flexibility & Mobility", band: "all", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Sleep & Recovery", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Stress Management", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "business", title: "Business & Entrepreneurship", short: "Business", icon: "📈",
      desc: "Build and run a business — marketing, money, management & sales",
      topics: [
        { t: "Starting a Business", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Marketing", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Accounting Basics", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Management", band: "college", grades: ["11", "12", "C"] },
        { t: "Sales", band: "9-adult", grades: ["9", "10", "11", "12", "C"] }
      ]
    },
    {
      key: "repair", title: "Home & Auto Repair", short: "Repair", icon: "🔧",
      desc: "Fix things yourself — home repairs, tools, plumbing, electrical & cars",
      topics: [
        { t: "Basic Tools", band: "all", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Home Repairs", band: "all", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Plumbing Basics", band: "all", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Electrical Basics", band: "all", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Car Maintenance", band: "all", grades: ["7", "8", "9", "10", "11", "12"] }
      ]
    },
    {
      key: "money", title: "Money & Investing", short: "Money", icon: "💵",
      desc: "Take control of your money — budgeting, debt, banking, investing & taxes",
      topics: [
        { t: "Budgeting", band: "9-adult", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Saving & Emergency Fund", band: "9-adult", grades: ["7", "8", "9", "10", "11", "12"] },
        { t: "Credit & Debt Payoff", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Banking & Accounts", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "Investing Basics", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Retirement & 401(k)", band: "adult", grades: ["11", "12", "C"] },
        { t: "Taxes", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Insurance", band: "9-adult", grades: ["9", "10", "11", "12", "C"] }
      ]
    },
    {
      key: "law", title: "Law & Your Rights", short: "Law", icon: "⚖️",
      desc: "Know your rights — contracts, tenant & consumer law, small claims & IDs",
      topics: [
        { t: "Know Your Rights", band: "all", grades: ["6", "7", "8", "9", "10", "11", "12"] },
        { t: "Contracts", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Tenant & Housing Rights", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Consumer Protection", band: "9-adult", grades: ["9", "10", "11", "12", "C"] },
        { t: "Small Claims Court", band: "adult", grades: ["11", "12", "C"] },
        { t: "Traffic & ID Law", band: "9-adult", grades: ["9", "10", "11", "12", "C"] }
      ]
    },
    {
      key: "writing", title: "Writing & Journalism", short: "Writing", icon: "✍️",
      desc: "Write well for any purpose — stories, essays, journalism & copy",
      topics: [
        { t: "Creative Writing", band: "all", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Essays & Reports", band: "6-college", grades: ["6", "7", "8", "9", "10", "11", "12", "C"] },
        { t: "Grammar & Style", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Storytelling", band: "all", grades: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Journalism", band: "9-college", grades: ["9", "10", "11", "12", "C"] },
        { t: "Blogging & Copywriting", band: "9-adult", grades: ["9", "10", "11", "12", "C"] }
      ]
    },
    {
      key: "gardening", title: "Gardening & Homesteading", short: "Gardening", icon: "🌱",
      desc: "Grow your own food — gardens, vegetables, herbs, compost & preserving",
      topics: [
        { t: "Garden Basics", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Vegetables", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Herbs", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Container Gardening", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Composting", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { t: "Food Preservation", band: "all", grades: ["4", "5", "6", "7", "8", "9", "10", "11", "12"] }
      ]
    }
  ]
};
