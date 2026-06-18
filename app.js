// SWITCH ACTIVE TABS
function switchTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');
  
  contents.forEach(c => c.classList.remove('active'));
  buttons.forEach(b => b.classList.remove('active'));
  
  document.getElementById(`${tabId}-tab`).classList.add('active');
  event.currentTarget.classList.add('active');
}

// ── WEALTH CALCULATORS ──────────────────────────────────────

// SIP Calculator
function calculateSIP() {
  const monthly = parseFloat(document.getElementById("sip-monthly").value);
  const rate = parseFloat(document.getElementById("sip-rate").value);
  const years = parseFloat(document.getElementById("sip-years").value);

  if (isNaN(monthly) || isNaN(rate) || isNaN(years) || monthly <= 0 || rate <= 0 || years <= 0) {
    alert("Please enter valid positive values.");
    return;
  }

  const months = years * 12;
  const monthlyRate = (rate / 100) / 12;

  // Formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
  const invested = monthly * months;
  const total = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const returns = total - invested;

  document.getElementById("res-sip-invested").textContent = `₹${Math.round(invested).toLocaleString('en-IN')}`;
  document.getElementById("res-sip-returns").textContent = `₹${Math.round(returns).toLocaleString('en-IN')}`;
  document.getElementById("res-sip-total").textContent = `₹${Math.round(total).toLocaleString('en-IN')}`;
  
  document.getElementById("sip-results").style.display = "flex";
}

// Compound Interest Calculator
function calculateCI() {
  const principal = parseFloat(document.getElementById("ci-principal").value);
  const rate = parseFloat(document.getElementById("ci-rate").value);
  const years = parseFloat(document.getElementById("ci-years").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
    alert("Please enter valid positive values.");
    return;
  }

  // Formula: A = P * (1 + r/100)^t
  const total = principal * Math.pow(1 + (rate / 100), years);
  const earned = total - principal;

  document.getElementById("res-ci-principal").textContent = `₹${Math.round(principal).toLocaleString('en-IN')}`;
  document.getElementById("res-ci-earned").textContent = `₹${Math.round(earned).toLocaleString('en-IN')}`;
  document.getElementById("res-ci-total").textContent = `₹${Math.round(total).toLocaleString('en-IN')}`;

  document.getElementById("ci-results").style.display = "flex";
}

// ── AI CREATOR TOOLS ────────────────────────────────────────

const VIRAL_TEMPLATES = {
  titles: [
    "How [Topic] Fooled Everyone (And Why It Failed)",
    "The Dark Secret Behind [Topic] You Weren't Supposed to Know",
    "How This [Topic] Mistake Cost $100 Million",
    "I Tested [Topic] for 24 Hours (Insane Results!)",
    "The Tragic Downfall of [Topic] Explained"
  ],
  hooks: [
    "Most people think [Topic] is simple, but they are completely wrong.",
    "This one shocking mistake about [Topic] cost a company billions.",
    "If you think [Topic] is safe, look at this..."
  ]
};

function generateTitles() {
  const topic = document.getElementById("creator-topic").value.trim() || "Nokia";
  
  const titleBox = document.getElementById("title-output");
  const titleList = document.getElementById("generated-titles-list");
  const hookList = document.getElementById("generated-hooks-list");
  
  titleList.innerHTML = "";
  hookList.innerHTML = "";
  
  VIRAL_TEMPLATES.titles.forEach(tpl => {
    const titleText = tpl.replace("[Topic]", topic);
    const li = document.createElement("li");
    li.textContent = titleText;
    li.onclick = () => copyText(titleText, li);
    titleList.appendChild(li);
  });

  VIRAL_TEMPLATES.hooks.forEach(tpl => {
    const hookText = tpl.replace("[Topic]", topic);
    const li = document.createElement("li");
    li.textContent = hookText;
    li.onclick = () => copyText(hookText, li);
    hookList.appendChild(li);
  });
  
  titleBox.style.display = "flex";
}

const SEO_TAGS = {
  business: {
    hashtags: ["#BusinessFailures", "#CaseStudy", "#StartupTips", "#BusinessHistory", "#Finance101"],
    tags: ["business failures", "why companies fail", "case study", "corporate failure", "startup lessons", "kodak failure", "blockbuster bankruptcy"]
  },
  football: {
    hashtags: ["#FootballFacts", "#MessiRonaldo", "#WorldCupControversy", "#FootballHistory", "#SoccerShorts"],
    tags: ["football records", "messi 91 goals", "cristiano ronaldo vertical jump", "football controversies", "world cup history", "football legends"]
  },
  space: {
    hashtags: ["#SpaceMysteries", "#ParallelUniverse", "#BlackHoleSecrets", "#AstronomyFacts", "#CosmicShorts"],
    tags: ["space mysteries", "parallel universe glitch", "nasa secrets", "astronomical discoveries", "multiverse theory", "physics facts"]
  },
  conspiracy: {
    hashtags: ["#SecretHistory", "#ConspiracyTheory", "#GlitchInTheMatrix", "#HistoryMysteries", "#UntoldStories"],
    tags: ["secret history", "matrix glitch real life", "conspiracy theories", "historical mysteries", "unexplained occurrences", "untold legends"]
  }
};

function generateTags() {
  const niche = document.getElementById("creator-niche").value;
  const data = SEO_TAGS[niche];
  
  const tagsBox = document.getElementById("tags-output");
  const hashContainer = document.getElementById("hashtags-list");
  const seoContainer = document.getElementById("seotags-list");
  
  hashContainer.innerHTML = "";
  seoContainer.innerHTML = "";
  
  data.hashtags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag-badge";
    span.textContent = tag;
    span.onclick = () => copyText(tag, span);
    hashContainer.appendChild(span);
  });

  data.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag-badge";
    span.textContent = tag;
    span.onclick = () => copyText(tag, span);
    seoContainer.appendChild(span);
  });
  
  tagsBox.style.display = "flex";
}

function copyAllTags() {
  const niche = document.getElementById("creator-niche").value;
  const data = SEO_TAGS[niche];
  const allText = `Hashtags: ${data.hashtags.join(" ")}\nTags: ${data.tags.join(", ")}`;
  
  navigator.clipboard.writeText(allText).then(() => {
    alert("All hashtags and search tags copied to clipboard!");
  });
}

function copyText(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = element.style.borderColor;
    element.style.borderColor = "#00b4d8";
    setTimeout(() => {
      element.style.borderColor = orig;
    }, 1000);
  });
}

// ── TRIVIA QUIZ ENGINE ──────────────────────────────────────

const QUIZ_DATA = {
  business: [
    {
      question: "Which company famously rejected buying Netflix for $50 Million and later went bankrupt?",
      choices: ["Yahoo", "Blockbuster", "Kodak", "Toys R Us"],
      correct: 1
    },
    {
      question: "In what year did Yahoo reject buying Google for just $1 Million?",
      choices: ["1998", "2002", "1995", "2005"],
      correct: 0
    },
    {
      question: "Which blood-testing startup was founded by Elizabeth Holmes and exposed as a massive fraud?",
      choices: ["Theranos", "Webvan", "WeWork", "Solyndra"],
      correct: 0
    }
  ],
  football: [
    {
      question: "How many goals did Lionel Messi score in his record-breaking calendar year of 2012?",
      choices: ["85 Goals", "91 Goals", "79 Goals", "95 Goals"],
      correct: 1
    },
    {
      question: "Which player famously executed a headbutt in the 2006 FIFA World Cup Final?",
      choices: ["Zinedine Zidane", "Thierry Henry", "Marco Materazzi", "Fabio Cannavaro"],
      correct: 0
    },
    {
      question: "At what age did Pele win his first World Cup in 1958?",
      choices: ["19 Years Old", "21 Years Old", "17 Years Old", "18 Years Old"],
      correct: 2
    }
  ],
  space: [
    {
      question: "Which astronomical body's discovery in 2006 led to Pluto losing its status as a planet?",
      choices: ["Ceres", "Eris", "Makemake", "Haumea"],
      correct: 1
    },
    {
      question: "What is the name of the boundary around a black hole from which nothing can escape?",
      choices: ["Singularity", "Accretion Disk", "Event Horizon", "Schwarzschild Radius"],
      correct: 2
    }
  ]
};

let activeQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz(category) {
  activeQuestions = QUIZ_DATA[category];
  currentQuestionIndex = 0;
  currentScore = 0;
  
  document.getElementById("quiz-title").innerHTML = `<i class="fa-solid fa-gamepad"></i> ${category.toUpperCase()} Trivia Quiz`;
  document.getElementById("quiz-current-score").textContent = currentScore;
  
  loadQuestion();
  
  document.getElementById("quiz-modal").style.display = "flex";
}

function loadQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  document.getElementById("quiz-question-box").textContent = q.question;
  
  const choicesBox = document.getElementById("quiz-choices-box");
  choicesBox.innerHTML = "";
  
  document.getElementById("quiz-next-btn").style.display = "none";
  
  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-choice-btn";
    btn.textContent = choice;
    btn.onclick = () => selectChoice(idx, btn);
    choicesBox.appendChild(btn);
  });
}

function selectChoice(index, button) {
  const q = activeQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".quiz-choice-btn");
  
  // Disable all choice buttons after selection
  buttons.forEach(btn => btn.disabled = true);
  button.classList.add("selected");
  
  if (index === q.correct) {
    button.classList.add("correct");
    currentScore += 10;
    document.getElementById("quiz-current-score").textContent = currentScore;
  } else {
    button.classList.add("wrong");
    // Show correct answer too
    buttons[q.correct].classList.add("correct");
  }
  
  document.getElementById("quiz-next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < activeQuestions.length) {
    loadQuestion();
  } else {
    // End of quiz
    document.getElementById("quiz-question-box").textContent = `Quiz Over! You scored a total of ${currentScore} points.`;
    document.getElementById("quiz-choices-box").innerHTML = "";
    document.getElementById("quiz-next-btn").style.display = "none";
  }
}

function closeQuizModal() {
  document.getElementById("quiz-modal").style.display = "none";
}
