/* ──────────────────────────────────────────────────────────────────────────
   Lab404 Study Zone — subject catalog (framework for all major subjects).

   Single source of truth for the universal hub's subjects. desktop.js reads
   window.LAB404_SUBJECTS to build the desktop folders, their windows, and the
   coming-soon topic icons inside each. Content for a topic is added later by
   giving it its own concept cards / flashcards / glossary / practice (same
   engine the CompTIA cores use); until then a topic opens to a "coming soon"
   window. CompTIA is handled specially in desktop.js (its children are the
   existing certification folders).

   To add a subject: append to ACADEMIC. To add a topic: append to its topics[].
   Each topic: { t: label, band: "K-5"|"6-8"|"9-12"|"college" }.
   ────────────────────────────────────────────────────────────────────────── */
window.LAB404_SUBJECTS = {
  /* The CompTIA folder, shown on the desktop. Its contents are the cert folders
     already defined in desktop.js (A+ -> Core 1 / Core 2, Security+, etc.). */
  comptia: {
    key: "comptia", title: "CompTIA", icon: "🎓",
    desc: "IT certifications · A+, Security+ and more",
    certs: ["folder-aplus", "folder-secplus", "folder-netplus", "folder-linuxplus",
            "folder-cloudplus", "folder-serverplus", "folder-cysa", "folder-pentest",
            "folder-securityx", "folder-dataplus"]
  },

  /* Academic subjects — K-12 through college. Topics start "coming soon". */
  academic: [
    {
      key: "math", title: "Mathematics", icon: "🔢",
      desc: "From counting to calculus — arithmetic, algebra, geometry & statistics",
      topics: [
        { t: "Arithmetic", band: "K-5" },
        { t: "Pre-Algebra", band: "6-8" },
        { t: "Algebra", band: "9-12" },
        { t: "Geometry", band: "9-12" },
        { t: "Trigonometry", band: "9-12" },
        { t: "Pre-Calculus", band: "9-12" },
        { t: "Calculus", band: "college" },
        { t: "Statistics", band: "college" }
      ]
    },
    {
      key: "science", title: "Science", icon: "🔬",
      desc: "How the world works — biology, chemistry, physics & earth science",
      topics: [
        { t: "Life Science", band: "K-8" },
        { t: "Biology", band: "9-12" },
        { t: "Chemistry", band: "9-12" },
        { t: "Physics", band: "9-12" },
        { t: "Earth & Space", band: "6-12" },
        { t: "Environmental Science", band: "college" }
      ]
    },
    {
      key: "english", title: "English & Language Arts", icon: "📖",
      desc: "Read, write and think clearly — grammar, vocabulary & literature",
      topics: [
        { t: "Reading & Phonics", band: "K-5" },
        { t: "Grammar & Mechanics", band: "6-12" },
        { t: "Vocabulary", band: "6-12" },
        { t: "Writing & Composition", band: "9-12" },
        { t: "Literature", band: "9-12" }
      ]
    },
    {
      key: "social", title: "Social Studies", icon: "🏛️",
      desc: "People, places and systems — history, civics, geography & economics",
      topics: [
        { t: "US History", band: "6-12" },
        { t: "World History", band: "6-12" },
        { t: "Civics & Government", band: "9-12" },
        { t: "Geography", band: "6-12" },
        { t: "Economics", band: "9-12" }
      ]
    },
    {
      key: "coding", title: "Computer Science & Coding", icon: "💻",
      desc: "How computers think and how to build with them — CS, Python & the web",
      topics: [
        { t: "Computer Science Foundations", band: "6-12" },
        { t: "Python", band: "9-12" },
        { t: "Web Development (HTML/CSS/JS)", band: "9-12" },
        { t: "Data & Databases", band: "college" },
        { t: "Intro to AI", band: "college" }
      ]
    },
    {
      key: "languages", title: "World Languages", icon: "🌍",
      desc: "Learn to speak, read and understand another language",
      topics: [
        { t: "Spanish", band: "all" },
        { t: "French", band: "all" },
        { t: "German", band: "all" },
        { t: "American Sign Language", band: "all" }
      ]
    },
    {
      key: "lifeskills", title: "Life Skills & Finance", icon: "🧭",
      desc: "The practical stuff school skips — money, work and everyday know-how",
      topics: [
        { t: "Personal Finance", band: "9-adult" },
        { t: "Budgeting & Credit", band: "9-adult" },
        { t: "Career & Job Skills", band: "9-adult" },
        { t: "Digital Literacy", band: "all" }
      ]
    }
  ]
};
