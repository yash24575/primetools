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


// ── NUMEROLOGY ENGINE ────────────────────────────────────────
const NUMEROLOGY_DATA = {
  1: {
    personality: "You are a natural-born leader with strong willpower and independence. Known for your courage and ambition, you inspire others with your bold vision and determined spirit. You are creative, self-reliant, and a pioneer in whatever you pursue.",
    lucky_day: "Sunday ☀️",
    lucky_stone: "Ruby (Manikya) 💎"
  },
  2: {
    personality: "You are sensitive, empathetic, and deeply intuitive. Your diplomatic nature makes you an excellent peacemaker. You thrive in partnerships and bring harmony, balance, and compassion to every relationship and situation.",
    lucky_day: "Monday 🌙",
    lucky_stone: "Pearl (Moti) 🤍"
  },
  3: {
    personality: "You are creative, joyful, and highly communicative. Naturally talented in arts, writing, and speaking, you radiate positive energy wherever you go. Your optimism and humor attract opportunities and people effortlessly.",
    lucky_day: "Thursday 🪐",
    lucky_stone: "Yellow Sapphire (Pukhraj) 💛"
  },
  4: {
    personality: "You are hardworking, methodical, and deeply reliable. You build everything on solid foundations through discipline and dedication. Trustworthy and practical, you are the bedrock upon which others depend.",
    lucky_day: "Saturday 🪐",
    lucky_stone: "Blue Sapphire (Neelam) 💙"
  },
  5: {
    personality: "You are adventurous, versatile, and freedom-loving. Naturally curious and adaptable, you thrive on change and new experiences. Your charm and wit make you magnetic, and your sharp mind allows you to excel in many fields.",
    lucky_day: "Wednesday ☿",
    lucky_stone: "Emerald (Panna) 💚"
  },
  6: {
    personality: "You are nurturing, loving, and highly responsible. Your sense of duty to family and community is unmatched. You have a deep love for beauty, harmony, and comfort, making your home and relationships feel like sanctuaries.",
    lucky_day: "Friday ♀",
    lucky_stone: "Diamond (Heera) / Opal 💍"
  },
  7: {
    personality: "You are the seeker — deeply analytical, spiritual, and introspective. You crave knowledge, wisdom, and truth. Your inner world is rich and complex, and you often possess psychic or intuitive gifts that guide you in life.",
    lucky_day: "Monday 🌙",
    lucky_stone: "Cat's Eye (Lehsunia) 🟡"
  },
  8: {
    personality: "You are ambitious, authoritative, and built for success. You possess immense inner strength and business acumen. Challenges only make you stronger. You are destined for material achievement, wealth, and great influence.",
    lucky_day: "Saturday ♄",
    lucky_stone: "Blue Sapphire (Neelam) / Amethyst 🔵"
  },
  9: {
    personality: "You are compassionate, idealistic, and universally oriented. A true humanitarian at heart, you want to improve the world around you. Deeply spiritual, creative, and emotionally rich — you inspire others through your selfless love and wisdom.",
    lucky_day: "Tuesday ♂️",
    lucky_stone: "Red Coral (Moonga) 🔴"
  }
};

function calculateNumerology() {
  const name = document.getElementById("num-name").value.trim();
  if (!name) {
    alert("कृपया अपना नाम दर्ज करें (Please enter your name).");
    return;
  }

  // Pythagorean system: A-Z → 1-9
  const letterValues = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  let sum = 0;
  name.toUpperCase().replace(/[^A-Z]/g, "").split("").forEach(ch => {
    sum += letterValues[ch] || 0;
  });

  // Reduce to single digit (except master numbers 11, 22)
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = sum.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  const finalNum = sum > 9 ? 9 : sum; // fallback for master numbers
  const data = NUMEROLOGY_DATA[finalNum];

  document.getElementById("num-life-number").textContent = sum;
  document.getElementById("num-personality").textContent = data.personality;
  document.getElementById("num-lucky-day").textContent = data.lucky_day;
  document.getElementById("num-lucky-stone").textContent = data.lucky_stone;
  document.getElementById("numerology-results").style.display = "flex";
}

// ── PANCHANG ENGINE ─────────────────────────────────────────
const TITHIS = ["Pratipada (प्रतिपदा)", "Dwitiya (द्वितीया)", "Tritiya (तृतीया)", "Chaturthi (चतुर्थी)", "Panchami (पंचमी)", "Shashthi (षष्ठी)", "Saptami (सप्तमी)", "Ashtami (अष्टमी)", "Navami (नवमी)", "Dashami (दशमी)", "Ekadashi (एकादशी)", "Dwadashi (द्वादशी)", "Trayodashi (त्रयोदशी)", "Chaturdashi (चतुर्दशी)", "Purnima (पूर्णिमा)"];
const NAKSHATRAS = ["Ashwini (अश्विनी)", "Bharani (भरणी)", "Krittika (कृत्तिका)", "Rohini (रोहिणी)", "Mrigashira (मृगशिरा)", "Ardra (आर्द्रा)", "Punarvasu (पुनर्वसु)", "Pushya (पुष्य)", "Ashlesha (आश्लेषा)", "Magha (मघा)", "Purva Phalguni (पूर्व फाल्गुनी)", "Uttara Phalguni (उत्तर फाल्गुनी)", "Hasta (हस्त)", "Chitra (चित्रा)", "Swati (स्वाति)", "Vishakha (विशाखा)", "Anuradha (अनुराधा)", "Jyeshtha (ज्येष्ठा)", "Moola (मूल)", "Purva Ashadha (पूर्वाषाढा)", "Uttara Ashadha (उत्तराषाढा)", "Shravana (श्रावण)", "Dhanishtha (धनिष्ठा)", "Shatabhisha (शतभिषा)", "Purva Bhadrapada (पूर्व भाद्रपद)", "Uttara Bhadrapada (उत्तर भाद्रपद)", "Revati (रेवती)"];
const YOGAS = ["Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Sukla", "Brahma", "Indra", "Vaidhriti"];
const KARANAS = ["Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti"];

function showPanchang() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const tithi = TITHIS[dayOfYear % 15];
  const nakshatra = NAKSHATRAS[dayOfYear % 27];
  const yoga = YOGAS[dayOfYear % 27];
  const karana = KARANAS[dayOfYear % 7];

  document.getElementById("panchang-date").textContent = now.toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const grid = document.getElementById("panchang-grid");
  grid.innerHTML = [
    { label: "🌑 Tithi (तिथि)", value: tithi },
    { label: "⭐ Nakshatra (नक्षत्र)", value: nakshatra },
    { label: "🔱 Yoga (योग)", value: yoga },
    { label: "📿 Karana (करण)", value: karana }
  ].map(item => `
    <div style="background: rgba(255,111,0,0.06); border: 1px solid rgba(255,111,0,0.15); border-radius: 8px; padding: 0.75rem; text-align: center;">
      <span style="font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">${item.label}</span>
      <span style="font-weight: 700; font-size: 0.9rem;">${item.value}</span>
    </div>
  `).join('');

  const muhurtas = ["Brahma Muhurta (4:24 AM - 5:12 AM) — सर्वोत्तम मुहूर्त, ध्यान और पूजा के लिए", "Abhijit Muhurta (11:52 AM - 12:48 PM) — दिन का सबसे शुभ समय, नए काम शुरू करें", "Godhuli Muhurta (6:00 PM - 6:24 PM) — संध्या आरती और घर लौटने का शुभ समय"];
  document.getElementById("panchang-muhurta").innerHTML = `<strong style="color: var(--accent-saffron);">✨ Aaj ke Shubh Muhurta:</strong><br><small>${muhurtas[dayOfYear % 3]}</small>`;

  document.getElementById("panchang-results").style.display = "flex";
}

// ── GEMSTONE RECOMMENDER ─────────────────────────────────────
const GEMSTONE_DATA = {
  mesh: { icon: "🔴", name: "Red Coral (लाल मूंगा)", hindi: "मंगल ग्रह रत्न", benefits: "साहस, ऊर्जा, शक्ति और आत्मविश्वास में वृद्धि। रक्त विकार, कमजोरी और मानसिक तनाव दूर करता है। करियर और व्यापार में उन्नति मिलती है।", planet: "Mars (मंगल) ♂️", day: "Tuesday (मंगलवार)" },
  vrishabh: { icon: "💎", name: "Diamond (हीरा) / Opal", hindi: "शुक्र ग्रह रत्न", benefits: "सौंदर्य, प्रेम, विलासिता और आर्थिक समृद्धि लाता है। व्यापार में वृद्धि, जीवनसाथी से प्रेम और कलात्मक प्रतिभा को उजागर करता है।", planet: "Venus (शुक्र) ♀", day: "Friday (शुक्रवार)" },
  mithun: { icon: "💚", name: "Emerald (पन्ना)", hindi: "बुध ग्रह रत्न", benefits: "बुद्धि, वाणी, व्यापार और संचार शक्ति बढ़ाता है। स्मरण शक्ति तेज होती है। मानसिक शांति, विद्यार्थियों और व्यापारियों के लिए विशेष लाभकारी।", planet: "Mercury (बुध) ☿", day: "Wednesday (बुधवार)" },
  kark: { icon: "🤍", name: "Pearl (मोती)", hindi: "चंद्रमा रत्न", benefits: "मन को शांत करता है, भावनात्मक स्थिरता देता है। माँ और परिवार से संबंध मजबूत होते हैं। नींद की समस्या दूर होती है और सौभाग्य में वृद्धि होती है।", planet: "Moon (चंद्र) 🌙", day: "Monday (सोमवार)" },
  sinh: { icon: "🔶", name: "Ruby (माणिक)", hindi: "सूर्य ग्रह रत्न", benefits: "नेतृत्व, सम्मान और प्रतिष्ठा में वृद्धि। सरकारी कार्यों में सफलता। आत्मशक्ति बढ़ती है और जीवन में तेज और वैभव आता है।", planet: "Sun (सूर्य) ☀️", day: "Sunday (रविवार)" },
  kanya: { icon: "💚", name: "Emerald (पन्ना)", hindi: "बुध ग्रह रत्न", benefits: "विश्लेषण शक्ति, स्वास्थ्य और व्यवसाय में सुधार। लेखन, शिक्षा और चिकित्सा क्षेत्र में सफलता। मस्तिष्क की क्षमता और एकाग्रता बढ़ती है।", planet: "Mercury (बुध) ☿", day: "Wednesday (बुधवार)" },
  tula: { icon: "💎", name: "Diamond (हीरा)", hindi: "शुक्र ग्रह रत्न", benefits: "वैवाहिक जीवन में सुख, सौंदर्य और कला में सफलता। व्यापार में समृद्धि। मित्रता और प्रेम संबंध मजबूत होते हैं। आर्थिक स्थिति बेहतर होती है।", planet: "Venus (शुक्र) ♀", day: "Friday (शुक्रवार)" },
  vrishchik: { icon: "🔴", name: "Red Coral (लाल मूंगा)", hindi: "मंगल ग्रह रत्न", benefits: "शत्रुओं पर विजय, रोगों से मुक्ति और साहस में वृद्धि। कर्ज से छुटकारा मिलता है। जासूसी, सेना, पुलिस और शोध कार्यों में सफलता देता है।", planet: "Mars (मंगल) ♂️", day: "Tuesday (मंगलवार)" },
  dhanu: { icon: "💛", name: "Yellow Sapphire (पुखराज)", hindi: "बृहस्पति रत्न", benefits: "धन, ज्ञान, उच्च शिक्षा और आध्यात्मिकता में वृद्धि। विवाह के योग बनते हैं। न्याय, धर्म और गुरु की कृपा प्राप्त होती है।", planet: "Jupiter (बृहस्पति) ♃", day: "Thursday (गुरुवार)" },
  makar: { icon: "🔵", name: "Blue Sapphire (नीलम)", hindi: "शनि ग्रह रत्न", benefits: "करियर में तरक्की, अनुशासन और धैर्य में वृद्धि। दीर्घकालिक सफलता और स्थायित्व मिलता है। न्याय और शनि देव की कृपा प्राप्त होती है।", planet: "Saturn (शनि) ♄", day: "Saturday (शनिवार)" },
  kumbh: { icon: "🔵", name: "Blue Sapphire (नीलम) / Amethyst", hindi: "शनि ग्रह रत्न", benefits: "अद्भुत मानसिक स्पष्टता, नवाचार और वैज्ञानिक सोच में वृद्धि। सामाजिक कार्यों में सफलता। कुंभ राशि की अनूठी बुद्धि को और तेज करता है।", planet: "Saturn (शनि) ♄", day: "Saturday (शनिवार)" },
  meen: { icon: "💛", name: "Yellow Sapphire (पुखराज)", hindi: "बृहस्पति रत्न", benefits: "आध्यात्मिक ज्ञान, कलात्मक प्रतिभा और मानसिक शांति में वृद्धि। धन और सुख-समृद्धि आती है। जीवन में दिव्य मार्गदर्शन प्राप्त होता है।", planet: "Jupiter (बृहस्पति) ♃", day: "Thursday (गुरुवार)" }
};

function getGemstone() {
  const sign = document.getElementById("gem-sign").value;
  const data = GEMSTONE_DATA[sign];
  document.getElementById("gem-icon").textContent = data.icon;
  document.getElementById("gem-name").textContent = data.name;
  document.getElementById("gem-hindi").textContent = data.hindi;
  document.getElementById("gem-benefits").textContent = data.benefits;
  document.getElementById("gem-planet").textContent = data.planet;
  document.getElementById("gem-day").textContent = data.day;
  document.getElementById("gemstone-results").style.display = "flex";
}

// ── VRAT CALENDAR ───────────────────────────────────────────
const UPCOMING_VRATS = [
  { name: "🌙 Somvati Amavasya (सोमवती अमावस्या)", date: "July 14, 2025", info: "Pitra tarpan aur Shiva puja ke liye ati shubh din." },
  { name: "⚡ Hariyali Teej (हरियाली तीज)", date: "July 27, 2025", info: "Suhagan mahilaon ka prasiddh vrat. Bhagwan Shiva aur Parvati ki puja." },
  { name: "🐘 Ganesh Chaturthi (गणेश चतुर्थी)", date: "August 27, 2025", info: "Vighnharta Ganesha ka janmotsav. 10 din ka mahotsav — sabse bada festival!" },
  { name: "🌸 Navratri (शारदीय नवरात्रि)", date: "September 22, 2025", info: "Maa Durga ke 9 swarupon ki 9 din tak special puja aur vrat." },
  { name: "💥 Dussehra (दशहरा)", date: "October 2, 2025", info: "Burai par achhai ki jeet ka utsav — Ravan dahan. Vijaya Dashami ka shubh din." },
  { name: "🪔 Diwali (दीपावली)", date: "October 20, 2025", info: "Maa Lakshmi ka swaagat! Diye jalao, puja karo aur khushiyan bato." },
  { name: "🐄 Govardhan Puja (गोवर्धन पूजा)", date: "October 21, 2025", info: "Bhagwan Krishna ne Govardhan parvat uthakar sab ki raksha ki — yeh din celebrate karo." },
  { name: "💜 Chhath Puja (छठ पूजा)", date: "October 28, 2025", info: "Surya Dev aur Chhathi Maiya ki aradhanaa. 36 ghante ka nirjal vrat." }
];

function loadVratCalendar() {
  const list = document.getElementById("vrat-list");
  if (!list) return;
  list.innerHTML = UPCOMING_VRATS.map(v => `
    <div style="display: flex; gap: 1rem; background: rgba(255,183,3,0.04); border: 1px solid rgba(255,183,3,0.1); border-radius: 10px; padding: 0.8rem; align-items: flex-start;">
      <div style="min-width: 90px; font-size: 0.75rem; font-weight: 700; color: var(--accent-gold); white-space: nowrap;">${v.date}</div>
      <div>
        <div style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.2rem;">${v.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary);">${v.info}</div>
      </div>
    </div>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  loadVratCalendar();
});

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
