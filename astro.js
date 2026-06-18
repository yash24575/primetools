// CLIENT-SIDE ASTROLOGY ENGINE

const HOROSCOPE_TRAITS = {
  mesh: {
    name: "मेष (Aries)",
    career: "आज करियर में कोई बड़ा बदलाव आ सकता है। नई व्यापारिक योजनाएं सफल होंगी। धन प्राप्ति के शुभ योग हैं, निवेश में लाभ होगा।",
    love: "साथी के साथ संबंध मधुर रहेंगे। यदि आप सिंगल हैं, तो किसी खास व्यक्ति से मुलाकात हो सकती है। विवादों से दूर रहें।",
    health: "ऊर्जा का स्तर ऊंचा रहेगा। हालांकि, सिरदर्द या थकान महसूस हो सकती है। योग और प्राणायाम करना आज विशेष रूप से लाभदायक रहेगा।",
    remedy: "तांबे के लोटे में जल भरकर सूर्य देव को अर्घ्य दें और 'ॐ सूर्याय नमः' का जाप करें।",
    number: "9",
    color: "लाल (Red)"
  },
  vrishabh: {
    name: "वृषभ (Taurus)",
    career: "कार्यक्षेत्र में आपके काम की सराहना होगी। अटके हुए काम आज पूरे हो सकते हैं। आर्थिक स्थिति में सुधार होगा।",
    love: "प्रेम जीवन में आपसी विश्वास बढ़ेगा। साथी की राय को महत्व दें। पुराने मित्रों से मिलकर मन प्रसन्न होगा।",
    health: "गले और सांस से संबंधित परेशानियां हो सकती हैं। ठंडा पानी पीने से बचें और हल्का भोजन ग्रहण करें।",
    remedy: "मां लक्ष्मी को सफेद फूल चढ़ाएं और खीर का भोग लगाएं।",
    number: "6",
    color: "सफेद (White)"
  },
  mithun: {
    name: "मिथुन (Gemini)",
    career: "अपनी बातचीत की कला से आप कोई बड़ी डील फाइनल कर सकते हैं। व्यापार में नए अवसर मिलेंगे। फिजूलखर्ची पर नियंत्रण रखें।",
    love: "दांपत्य जीवन में मधुरता बनी रहेगी। किसी प्रियजन के साथ लंबी यात्रा का योग बन सकता है।",
    health: "मानसिक रूप से आज आप थोड़ा तनाव महसूस कर सकते हैं। ध्यान लगाने से शांति मिलेगी।",
    remedy: "गाय को हरी घास या पालक खिलाएं और गणेश चालीसा का पाठ करें।",
    number: "5",
    color: "हरा (Green)"
  },
  kark: {
    name: "कर्क (Cancer)",
    career: "आज ऑफिस में काम का दबाव अधिक रह सकता है। धैर्य से काम लें। पार्टनरशिप के बिजनेस में सावधानी बरतें।",
    love: "पारिवारिक मामलों को लेकर साथी के साथ हल्की नोकझोंक हो सकती है। शांत दिमाग से बात सुलझाएं।",
    health: "पेट से जुड़ी समस्याएं परेशान कर सकती हैं। मसालेदार भोजन से परहेज करें।",
    remedy: "शिवलिंग पर जल चढ़ाएं और 'ॐ नमः शिवाय' का 108 बार जाप करें।",
    number: "2",
    color: "चमकदार सफेद (Pearl White)"
  },
  sinh: {
    name: "सिंह (Leo)",
    career: "नेतृत्व क्षमता के कारण आज आपको बड़ी जिम्मेदारी मिल सकती है। आर्थिक लाभ के नए मार्ग खुलेंगे।",
    love: "प्रेम संबंध मजबूत होंगे। लाइफ पार्टनर का पूरा सहयोग मिलेगा। शाम को परिवार के साथ अच्छा समय बिताएंगे।",
    health: "पीठ दर्द की समस्या हो सकती है। बैठने के तरीके (posture) पर ध्यान दें।",
    remedy: "गायत्री मंत्र का जाप करें और मंदिर में लाल मसूर का दान करें।",
    number: "1",
    color: "केसरिया (Saffron)"
  },
  kanya: {
    name: "कन्या (Virgo)",
    career: "आज मेहनत का फल मिलेगा। विद्यार्थियों के लिए आज का दिन बेहतरीन रहने वाला है। पुराना कर्ज चुकाने में सफल होंगे।",
    love: "साथी के साथ संवादहीनता न होने दें। खुलकर बातें करने से गलतफहमियां दूर होंगी।",
    health: "स्वास्थ्य सामान्य रहेगा। अपनी दिनचर्या में थोड़ा बदलाव करें और सैर पर जाएं।",
    remedy: "बुध देव के मंत्र 'ॐ बुं बुधाय नमः' का जाप करें और हरी वस्तुओं का दान करें।",
    number: "5",
    color: "हल्का हरा (Light Green)"
  },
  tula: {
    name: "तुला (Libra)",
    career: "कैरियर में तरक्की होगी और कार्य क्षेत्र में आपकी मान-प्रतिष्ठा बढ़ेगी। साझेदारी के कामों से अच्छा मुनाफा मिलेगा।",
    love: "रिश्तों में रोमांस बढ़ेगा। साथी को कोई उपहार दे सकते हैं जिससे प्रेम और प्रगाढ़ होगा।",
    health: "आंखों में जलन या थकान हो सकती है। कंप्यूटर या फोन स्क्रीन का उपयोग सीमित करें।",
    remedy: "सफेद चंदन का तिलक लगाएं और किसी जरूरतमंद को चावल का दान करें।",
    number: "6",
    color: "आसमानी (Sky Blue)"
  },
  vrishchik: {
    name: "वृश्चिक (Scorpio)",
    career: "गुप्त शत्रुओं से सावधान रहें। ऑफिस की राजनीति से दूर रहना ही आपके लिए हितकर होगा। वित्तीय फैसले सोच-समझकर लें।",
    love: "साथी के साथ विश्वास बढ़ेगा। मुश्किल समय में आपको उनका पूरा भावनात्मक सहयोग मिलेगा।",
    health: "त्वचा संबंधी समस्या या एलर्जी हो सकती है। भरपूर पानी पिएं।",
    remedy: "हनुमान चालीसा का पाठ करें और बंदरों को गुड़-चना खिलाएं।",
    number: "9",
    color: "गहरा लाल (Deep Red)"
  },
  dhanu: {
    name: "धनु (Sagittarius)",
    career: "नए प्रोजेक्ट्स शुरू करने के लिए दिन बहुत अनुकूल है। भाग्य का पूरा साथ मिलेगा और अचानक धन लाभ होने के योग हैं।",
    love: "लव लाइफ में रोमांचक मोड़ आ सकता है। शादी की बात आगे बढ़ सकती है।",
    health: "आज आप ऊर्जावान महसूस करेंगे। पुरानी बीमारियों से राहत मिलेगी।",
    remedy: "पीला तिलक लगाएं और केले के वृक्ष में जल अर्पित कर हल्दी चढ़ाएं।",
    number: "3",
    color: "पीला (Yellow)"
  },
  makar: {
    name: "मकर (Capricorn)",
    career: "मेहनत अधिक करनी पड़ सकती है, लेकिन परिणाम सकारात्मक होंगे। सहकर्मियों के साथ तालमेल अच्छा रहेगा।",
    love: "पारिवारिक जिम्मेदारियां बढ़ सकती हैं। साथी के साथ वक्त बिताने की कोशिश करें।",
    health: "जोड़ों के दर्द की समस्या परेशान कर सकती है। भारी सामान उठाने से बचें।",
    remedy: "शनि चालीसा का पाठ करें और सरसों के तेल का दीया पीपल के वृक्ष के नीचे जलाएं।",
    number: "8",
    color: "काला/नीला (Dark Blue)"
  },
  kumbh: {
    name: "कुंभ (Aquarius)",
    career: "आज कोई बड़ा व्यावसायिक निर्णय ले सकते हैं जो भविष्य में लाभ देगा। आर्थिक योजनाएं सफल होंगी।",
    love: "रिश्तों में गहराई आएगी। साथी के साथ चल रहा पुराना विवाद आज सुलझ जाएगा।",
    health: "मानसिक थकान महसूस हो सकती है। संगीत सुनें या किताब पढ़ें जिससे मानसिक शांति मिले।",
    remedy: "गरीबों को कंबल या चप्पल का दान करें और शिवलिंग पर काले तिल चढ़ाएं।",
    number: "8",
    color: "नीला (Electric Blue)"
  },
  meen: {
    name: "मीन (Pisces)",
    career: "अपनी रचनात्मकता से आप कार्यक्षेत्र में सफलता पाएंगे। कोई नई डील साइन हो सकती है जिससे आर्थिक लाभ होगा।",
    love: "प्रेम संबंधों में नयापन महसूस होगा। जीवनसाथी के साथ धार्मिक यात्रा पर जाने का प्लान बन सकता है।",
    health: "स्वास्थ्य अच्छा रहेगा। सुबह जल्दी उठकर टहलने की आदत डालें।",
    remedy: "विष्णु सहस्रनाम का पाठ करें और माथे पर केसर का तिलक लगाएं।",
    number: "3",
    color: "सुनहरा (Golden)"
  }
};

// Check Horoscope Reading
function checkHoroscope() {
  const sign = document.getElementById("astro-sign").value;
  const data = HOROSCOPE_TRAITS[sign];
  
  if (!data) return;
  
  document.getElementById("res-astro-career").textContent = data.career;
  document.getElementById("res-astro-love").textContent = data.love;
  document.getElementById("res-astro-health").textContent = data.health;
  document.getElementById("res-astro-remedy").textContent = data.remedy;
  document.getElementById("res-astro-number").textContent = data.number;
  document.getElementById("res-astro-color").textContent = data.color;
  
  document.getElementById("horoscope-results").style.display = "flex";
}

// Match Kundli Compatibility
function matchKundli() {
  const name1 = document.getElementById("match-name-1").value.trim();
  const name2 = document.getElementById("match-name-2").value.trim();
  const sign1 = document.getElementById("match-sign-1").value;
  const sign2 = document.getElementById("match-sign-2").value;

  if (!name1 || !name2) {
    alert("कृपया दोनों नाम दर्ज करें (Please enter both names).");
    return;
  }

  // Consistent pseudo-random percentage based on strings
  const hashString = (name1 + sign1 + name2 + sign2).toLowerCase();
  let hash = 0;
  for (let i = 0; i < hashString.length; i++) {
    hash = hashString.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Calculate percentage between 55% and 99% for exciting user conversion
  const percent = 55 + Math.abs(hash % 45);
  
  let status = "अति उत्तम (Excellent)";
  let desc = "";

  if (percent >= 85) {
    status = "🎉 अष्टकूट मिलान: अति उत्तम (Perfect Match)";
    desc = `${name1} और ${name2} की कुंडलियों में ग्रहों की स्थिति बहुत ही शुभ है। आपके विचार, जीवन के प्रति दृष्टिकोण और आपसी समझ अत्यंत मजबूत हैं। यह संबंध दीर्घकालिक समृद्धि, गहरी आत्मीयता और अटूट प्रेम को दर्शाता है। एक-दूसरे का भाग्य बढ़ाने वाले हैं।`;
  } else if (percent >= 70) {
    status = "💖 गुण मिलान: उत्तम (Very Good Match)";
    desc = `${name1} और ${name2} का स्वभाव एक-दूसरे के अनुकूल है। आपके विचार आपस में बहुत मिलते हैं। कुछ छोटे-मोटे मतभेद हो सकते हैं, लेकिन आपसी बातचीत और गहरे स्नेह से आप हर कठिनाई को आसानी से पार कर लेंगे। पारिवारिक जीवन सुखी रहेगा।`;
  } else {
    status = "⚖️ मिलान: सामान्य (Good Match)";
    desc = `${name1} और ${name2} का मिलान सामान्य श्रेणी में आता है। कुछ मामलों में दोनों के दृष्टिकोण अलग हो सकते हैं। एक-दूसरे को थोड़ा समय दें और आपसी समझदारी से काम लें। शनिवार को शनि देव को सरसों का तेल चढ़ाना रिश्ते को और मजबूत बनाएगा।`;
  }

  document.getElementById("compatibility-percent").textContent = `${percent}%`;
  document.getElementById("match-title-status").textContent = status;
  document.getElementById("match-description").textContent = desc;
  
  document.getElementById("match-results").style.display = "flex";
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

// Close modals when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// FAQ Accordion
function toggleFaq(button) {
  const item = button.parentElement;
  const content = item.querySelector('.faq-content');
  const icon = button.querySelector('i');
  
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

    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle + arcSize / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 12px 'Outfit', sans-serif";
    ctx.fillText(sec.label, radius - 25, 5);
    ctx.restore();
  });

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

  const winningIndices = [1, 2, 4];
  const chosenIdx = winningIndices[Math.floor(Math.random() * winningIndices.length)];
  const numSectors = WHEEL_SECTORS.length;
  const arcSize = 360 / numSectors;

  const targetDeg = (360 * 5) - (chosenIdx * arcSize) - (arcSize / 2) - 90;

  canvas.style.transform = `rotate(${targetDeg}deg)`;

  setTimeout(() => {
    const winItem = WHEEL_SECTORS[chosenIdx];
    resultBox.innerHTML = `🎉 Congratulations! You won: <span style="color:var(--accent-pink)">${winItem.label}</span>!`;
    resultBox.style.display = "flex";
    spinBtn.disabled = false;
    spinBtn.textContent = "CLAIM REWARD";
    
    spinBtn.onclick = () => {
      window.open('https://www.effectivecpmnetwork.com/dncnmwuvv9?key=79d5ea5398e33b6b94e27617606a170c', '_blank');
      closeModal('spin-modal');
    };
  }, 6100);
}
