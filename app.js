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

// EMI Calculator
function calculateEMI() {
  const amount = parseFloat(document.getElementById("emi-amount").value);
  const rate = parseFloat(document.getElementById("emi-rate").value);
  const years = parseFloat(document.getElementById("emi-tenure").value);

  if (isNaN(amount) || isNaN(rate) || isNaN(years) || amount <= 0 || rate <= 0 || years <= 0) {
    alert("Please enter valid positive values.");
    return;
  }

  const months = years * 12;
  const monthlyRate = (rate / 100) / 12;
  const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  document.getElementById("res-emi-monthly").textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
  document.getElementById("res-emi-interest").textContent = `₹${Math.round(totalInterest).toLocaleString('en-IN')}`;
  document.getElementById("res-emi-total").textContent = `₹${Math.round(totalPayment).toLocaleString('en-IN')}`;
  document.getElementById("emi-results").style.display = "flex";
}

// Gold Investment Calculator
function calculateGold() {
  const grams = parseFloat(document.getElementById("gold-grams").value);
  const buyPrice = parseFloat(document.getElementById("gold-buy-price").value);
  const years = parseFloat(document.getElementById("gold-years").value);

  if (isNaN(grams) || isNaN(buyPrice) || isNaN(years) || grams <= 0 || buyPrice <= 0) {
    alert("Please enter valid positive values.");
    return;
  }

  const CURRENT_GOLD_RATE = 7200; // INR per gram (approx live rate)
  const GOLD_ANNUAL_GROWTH = 10; // historical ~10% p.a.
  const invested = grams * buyPrice;
  const currentValue = grams * CURRENT_GOLD_RATE;
  const futureValue = grams * CURRENT_GOLD_RATE * Math.pow(1 + (GOLD_ANNUAL_GROWTH / 100), years);

  document.getElementById("res-gold-invested").textContent = `₹${Math.round(invested).toLocaleString('en-IN')}`;
  document.getElementById("res-gold-current").textContent = `₹${Math.round(currentValue).toLocaleString('en-IN')}`;
  document.getElementById("res-gold-future").textContent = `₹${Math.round(futureValue).toLocaleString('en-IN')}`;
  document.getElementById("gold-results").style.display = "flex";
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
  ],
  cricket: [
    {
      question: "Sachin Tendulkar scored his 100th international century against which country?",
      choices: ["Pakistan", "Bangladesh", "Sri Lanka", "Australia"],
      correct: 1
    },
    {
      question: "MS Dhoni captained India to victory in which ICC World Cup in 2011?",
      choices: ["T20 World Cup", "Champions Trophy", "ODI World Cup", "Test Championship"],
      correct: 2
    },
    {
      question: "Which Indian batsman is nicknamed 'The Wall' for his defensive batting style?",
      choices: ["VVS Laxman", "Sourav Ganguly", "Rahul Dravid", "Anil Kumble"],
      correct: 2
    },
    {
      question: "Who scored the first-ever double century in ODI cricket history?",
      choices: ["Rohit Sharma", "Sachin Tendulkar", "Brian Lara", "Chris Gayle"],
      correct: 1
    },
    {
      question: "How many World Cups has India won (combined T20 + ODI)?",
      choices: ["2", "3", "4", "1"],
      correct: 1
    }
  ],
  bollywood: [
    {
      question: "Which Bollywood film holds the record for the highest all-time box office collection in India?",
      choices: ["Bahubali 2", "Dangal", "KGF 2", "Jawan"],
      correct: 0
    },
    {
      question: "Who directed the iconic Bollywood film 'Dilwale Dulhania Le Jayenge' (DDLJ)?",
      choices: ["Karan Johar", "Aditya Chopra", "Sanjay Leela Bhansali", "Raj Kumar Hirani"],
      correct: 1
    },
    {
      question: "Which actress starred alongside Aamir Khan in the blockbuster 'Dangal' (2016)?",
      choices: ["Deepika Padukone", "Katrina Kaif", "Fatima Sana Shaikh", "Priyanka Chopra"],
      correct: 2
    },
    {
      question: "In which film did Shah Rukh Khan first play a negative lead role?",
      choices: ["Anjaam", "Darr", "Baazigar", "Don"],
      correct: 2
    },
    {
      question: "What is the name of AR Rahman's iconic song from the movie 'Jai Ho'?",
      choices: ["Vande Mataram", "Jai Ho", "Dil Se", "Roja"],
      correct: 1
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

// ── FAQ ACCORDION LOGIC ─────────────────────────────────────
function toggleFaq(button) {
  const item = button.parentElement;
  const content = item.querySelector('.faq-content');
  const icon = button.querySelector('i');
  
  // Toggle active class on item
  item.classList.toggle('active');
  
  if (item.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingTop = "1rem";
    icon.style.transform = "rotate(180deg)";
  } else {
    content.style.maxHeight = null;
    content.style.paddingTop = "0";
    icon.style.transform = "rotate(0deg)";
  }
}

// ── CHANNEL NAME GENERATOR ───────────────────────────────────
const CHANNEL_NAMES = {
  motivation: ["Rise & Shine Daily", "MindShift Pro", "Unstoppable You", "Victory Mindset", "ZenPeak Studios"],
  tech: ["TechUnboxed", "ByteBlast India", "GadgetGuru Pro", "PixelPunch Tech", "CoreCraft Labs"],
  finance: ["WealthWave India", "StockSense Daily", "MoneyMind Pro", "PaisaPlanner", "BullRun Analytics"],
  gaming: ["ProGamerZone", "EpicPixelGames", "NightOwl Gaming", "LevelUpGaming", "XtremePlayz India"],
  cricket: ["CricketCraze24", "Boundary Kings", "SixerNation", "PitchPerfect India", "WicketWorld Pro"],
  cooking: ["SpiceRoute Kitchen", "DesiEats Daily", "TastyTales India", "FlavorFusion Pro", "MasalaChef"],
  travel: ["WanderIndia Pro", "ViralVoyage", "ExploreUnchained", "RoamFree Diaries", "SoloTrekker"],
  devotional: ["SpiritPath Daily", "SanatanDham Live", "BhaktiVibes", "MantraMinds", "DivineJyoti Channel"]
};

function generateChannelNames() {
  const niche = document.getElementById("channel-niche").value;
  const names = CHANNEL_NAMES[niche];
  const list = document.getElementById("channel-names-list");
  list.innerHTML = "";
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.onclick = () => copyText(name, li);
    list.appendChild(li);
  });
  document.getElementById("channel-output").style.display = "flex";
}

// ── BIO GENERATOR ────────────────────────────────────────────
const BIO_TEMPLATES = {
  youtuber: [
    "[NAME] | Sharing viral content & untold stories 🎬 | Subscribe for weekly uploads 🔔 | DM for collabs 📩",
    "🎥 [NAME] — Creating epic content that breaks the internet | 📌 New videos every week | Collab: [NAME]@gmail.com",
    "[NAME] 🚀 | Storyteller • Creator • Visionary | Making India proud with quality content 🇮🇳"
  ],
  influencer: [
    "[NAME] ✨ | Lifestyle • Fashion • Travel | Living life on my own terms 🌍 | DM for brand deals 📩",
    "Hi, I'm [NAME]! 💫 Spreading positivity and style every day | Collab inquiries: [NAME]@gmail.com",
    "[NAME] 🦋 | Authentic creator from India 🇮🇳 | Fashion • Culture • Life | 📩 DM for partnerships"
  ],
  trader: [
    "[NAME] 📈 | Stock Market Trader & Investor | Sharing market insights daily | Not SEBI registered — DYOR ⚠️",
    "🔥 [NAME] | Equity Trader • Options Expert • Wealth Builder | Daily market analysis on my channel 📊",
    "[NAME] 💹 | Full-time trader & market educator | Teaching smart investing to 1 Lakh+ students 🎓"
  ],
  motivator: [
    "[NAME] 🔥 | Motivational Speaker • Life Coach | Helping you unlock your true potential 🚀 | 1M+ inspired!",
    "I'm [NAME] 💪 | Turning pain into power and dreams into reality | Daily motivation on my channel ✨",
    "[NAME] ✊ | Success Coach • Author • Speaker | 'Your mindset is your greatest weapon.' | DM: Always open"
  ],
  cricketer: [
    "[NAME] 🏏 | Die-hard cricket fan | Ball-by-ball analysis & match reviews | Join the cricket family 🇮🇳",
    "🏆 [NAME] | Cricket Stats • Match Predictions • Highlights | Covering every major tournament live!",
    "[NAME] 🎙️ | Cricket Commentator & Analyst | From gully cricket to international stage — we cover it all!"
  ]
};

function generateBio() {
  const name = document.getElementById("bio-name").value.trim() || "YourName";
  const type = document.getElementById("bio-type").value;
  const templates = BIO_TEMPLATES[type];
  const list = document.getElementById("bio-list");
  list.innerHTML = "";
  templates.forEach(tpl => {
    const bio = tpl.replaceAll("[NAME]", name);
    const li = document.createElement("li");
    li.textContent = bio;
    li.onclick = () => copyText(bio, li);
    list.appendChild(li);
  });
  document.getElementById("bio-output").style.display = "flex";
}

// ── FIFA PLAYER COMPARATOR ───────────────────────────────────
const PLAYER_STATS = {
  messi: {
    name: "Lionel Messi 🐐",
    nationality: "Argentina 🇦🇷",
    goals: "838+",
    assists: "380+",
    ballon_dor: "8",
    world_cups: "1 (2022)",
    speed: "32.5 km/h",
    dribbles: "World #1",
    trophies: "43+"
  },
  ronaldo: {
    name: "Cristiano Ronaldo",
    nationality: "Portugal 🇵🇹",
    goals: "890+",
    assists: "255+",
    ballon_dor: "5",
    world_cups: "0",
    speed: "34 km/h",
    dribbles: "Top 5 Ever",
    trophies: "34+"
  },
  mbappe: {
    name: "Kylian Mbappe ⚡",
    nationality: "France 🇫🇷",
    goals: "380+",
    assists: "180+",
    ballon_dor: "0",
    world_cups: "1 (2018)",
    speed: "38 km/h",
    dribbles: "World Top 3",
    trophies: "25+"
  },
  neymar: {
    name: "Neymar Jr",
    nationality: "Brazil 🇧🇷",
    goals: "315+",
    assists: "220+",
    ballon_dor: "0",
    world_cups: "0",
    speed: "36 km/h",
    dribbles: "World Top 5",
    trophies: "30+"
  },
  pele: {
    name: "Pelé 🏆",
    nationality: "Brazil 🇧🇷",
    goals: "1281 (official 767)",
    assists: "N/A (era)",
    ballon_dor: "0 (era)",
    world_cups: "3 (1958,62,70)",
    speed: "N/A",
    dribbles: "All-Time Legend",
    trophies: "50+"
  },
  maradona: {
    name: "Diego Maradona",
    nationality: "Argentina 🇦🇷",
    goals: "345+",
    assists: "230+",
    ballon_dor: "1 (era)",
    world_cups: "1 (1986)",
    speed: "N/A (era)",
    dribbles: "All-Time Legend",
    trophies: "20+"
  }
};

function compareFootballPlayers() {
  const p1 = PLAYER_STATS[document.getElementById("player1-select").value];
  const p2 = PLAYER_STATS[document.getElementById("player2-select").value];
  const grid = document.getElementById("player-stats-grid");
  grid.innerHTML = `
    ${renderPlayerCard(p1, "#ffb703")}
    ${renderPlayerCard(p2, "#00b4d8")}
  `;
  document.getElementById("player-comparison-results").style.display = "block";
}

function renderPlayerCard(p, color) {
  return `
    <div style="background: rgba(255,255,255,0.02); border: 1px solid ${color}33; border-radius: 12px; padding: 1.25rem;">
      <h3 style="color: ${color}; margin-bottom: 1rem; font-size: 1.15rem;">${p.name}</h3>
      ${Object.entries({
        '🌍 Country': p.nationality,
        '⚽ Goals': p.goals,
        '🎯 Assists': p.assists,
        '🏆 Ballon d\'Or': p.ballon_dor,
        '🌎 World Cups': p.world_cups,
        '💨 Top Speed': p.speed,
        '🪄 Dribbling': p.dribbles,
        '🥇 Trophies': p.trophies
      }).map(([k,v]) => `
        <div style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.05); font-size:0.9rem;">
          <span style="color:#a0a5c0;">${k}</span>
          <span style="font-weight:600;">${v}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── MATCH SCORE PREDICTOR ────────────────────────────────────
const TEAM_STRENGTH = {
  Brazil: 92, Argentina: 91, France: 90, Germany: 87,
  England: 85, Spain: 88, Portugal: 86, Italy: 84, India: 55
};

function predictMatchScore() {
  const t1 = document.getElementById("team1-select").value;
  const t2 = document.getElementById("team2-select").value;
  if (t1 === t2) {
    alert("Please select two different teams!");
    return;
  }
  const s1 = TEAM_STRENGTH[t1] || 75;
  const s2 = TEAM_STRENGTH[t2] || 75;
  const diff = s1 - s2;
  let g1 = Math.floor(Math.random() * 3);
  let g2 = Math.floor(Math.random() * 3);
  if (diff > 5) g1 += 1;
  if (diff < -5) g2 += 1;

  let analysis = "";
  if (g1 > g2) analysis = `🔥 ${t1} dominate the match with strong pressing and clinical finishing! The home advantage played a key role.`;
  else if (g2 > g1) analysis = `⚡ ${t2} pulled off a surprising away win with fast counter-attacks and solid defense!`;
  else analysis = `🤝 A thrilling draw! Both teams showed equal determination and neither could break the deadlock.`;

  document.getElementById("score-display").textContent = `${t1} ${g1} — ${g2} ${t2}`;
  document.getElementById("score-analysis").textContent = analysis;
  document.getElementById("score-predictor-results").style.display = "flex";
}

// ── LEGAL MODAL LOGIC ───────────────────────────────────────
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modals when clicking outside the modal content box
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Auto open Quizzes tab & start Football Quiz on page load
window.addEventListener('DOMContentLoaded', () => {
  // Wait a small bit to ensure DOM elements are ready
  setTimeout(() => {
    // Select the quizzes tab button and click it programmatically
    const buttons = document.querySelectorAll('.tab-btn');
    let quizzesBtn = null;
    buttons.forEach(btn => {
      if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('quizzes')) {
        quizzesBtn = btn;
      }
    });

    if (quizzesBtn) {
      // Deactivate other tabs
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach(c => c.classList.remove('active'));
      buttons.forEach(b => b.classList.remove('active'));
      
      // Activate Quizzes Tab
      document.getElementById('quizzes-tab').classList.add('active');
      quizzesBtn.classList.add('active');
    }
    
    // Auto-start the football quiz
    startQuiz('football');
  }, 100);
});

// ── LUCKY SPIN WHEEL LOGIC ──────────────────────────────────
const WHEEL_SECTORS = [
  { label: "$1 Bonus", color: "#ff007f", isOffer: true },
  { label: "Creator Pack", color: "#ffb703", isOffer: true },
  { label: "$5 Reward", color: "#00b4d8", isOffer: true },
  { label: "Try Again", color: "#33354a", isOffer: false },
  { label: "Viral Hook Guide", color: "#ff6f00", isOffer: true },
  { label: "Better Luck", color: "#1e2030", isOffer: false },
];

let wheelHasSpun = false;

function openSpinWheel() {
  openModal('spin-modal');
  setTimeout(drawWheel, 50);
}

function drawWheel() {
  const canvas = document.getElementById("wheel-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const radius = width / 2;
  const numSectors = WHEEL_SECTORS.length;
  const arcSize = (2 * Math.PI) / numSectors;

  ctx.clearRect(0, 0, width, height);

  WHEEL_SECTORS.forEach((sec, idx) => {
    const angle = idx * arcSize;
    ctx.beginPath();
    ctx.fillStyle = sec.color;
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius - 10, angle, angle + arcSize);
    ctx.lineTo(radius, radius);
    ctx.fill();

    // Draw segment text
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle + arcSize / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 12px 'Outfit', sans-serif";
    ctx.fillText(sec.label, radius - 25, 5);
    ctx.restore();
  });

  // Center hub circle decoration
  ctx.beginPath();
  ctx.fillStyle = "#050508";
  ctx.arc(radius, radius, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = "#ff007f";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function spinTheWheel() {
  if (wheelHasSpun) {
    alert("You have already used your free spin today! Redirecting to claim portal...");
    window.open('https://www.effectivecpmnetwork.com/dncnmwuvv9?key=79d5ea5398e33b6b94e27617606a170c', '_blank');
    return;
  }

  const canvas = document.getElementById("wheel-canvas");
  const spinBtn = document.getElementById("spin-btn");
  const resultBox = document.getElementById("spin-result-box");
  if (!canvas || !spinBtn) return;

  wheelHasSpun = true;
  spinBtn.disabled = true;
  spinBtn.textContent = "SPINNING...";
  resultBox.style.display = "none";

  // Force landing on sector 1 ($5 Reward) or sector 4 (Creator Pack) for optimal conversion
  const winningIndices = [1, 2, 4];
  const chosenIdx = winningIndices[Math.floor(Math.random() * winningIndices.length)];
  const numSectors = WHEEL_SECTORS.length;
  const arcSize = 360 / numSectors;

  // Calculate target rotation to make pointer align with sector
  // Pointer is at the top (270 degrees). Segment 0 starts at 0 rad.
  const targetDeg = (360 * 5) - (chosenIdx * arcSize) - (arcSize / 2) - 90;

  canvas.style.transform = `rotate(${targetDeg}deg)`;

  setTimeout(() => {
    const winItem = WHEEL_SECTORS[chosenIdx];
    resultBox.innerHTML = `🎉 Congratulations! You won: <span style="color:var(--accent-pink)">${winItem.label}</span>!`;
    resultBox.style.display = "flex";
    spinBtn.disabled = false;
    spinBtn.textContent = "CLAIM REWARD";
    
    // Change onclick event to redirect to dynamic high-cpm Smartlink
    spinBtn.onclick = () => {
      window.open('https://www.effectivecpmnetwork.com/dncnmwuvv9?key=79d5ea5398e33b6b94e27617606a170c', '_blank');
      closeModal('spin-modal');
    };
  }, 6100);
}
