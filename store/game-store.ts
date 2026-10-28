import { create } from "zustand";
import type { Checkpoint, Destination, GameMetrics, Passenger, StreetEvent } from "../types/game";
import { cngAudio } from "../lib/cng-audio";

export const DESTINATIONS: Destination[] = [
  {
    id: "farmgate",
    nameBn: "ফার্মগেট (Farmgate)",
    distanceMeters: 650,
    baseFare: 160,
    zoneType: "congested",
  },
  {
    id: "mirpur10",
    nameBn: "মিরপুর ১০ গোলচত্বর (Mirpur 10)",
    distanceMeters: 900,
    baseFare: 240,
    zoneType: "market",
  },
  {
    id: "dhanmondi27",
    nameBn: "ধানমন্ডি ২৭ (Dhanmondi 27)",
    distanceMeters: 750,
    baseFare: 200,
    zoneType: "residential",
  },
  {
    id: "gulshan1",
    nameBn: "গুলশান ১ চত্বর (Gulshan 1)",
    distanceMeters: 1100,
    baseFare: 320,
    zoneType: "vip",
  },
  {
    id: "old_dhaka",
    nameBn: "পুরান ঢাকা ভিক্টোরিয়া পার্ক (Old Dhaka)",
    distanceMeters: 850,
    baseFare: 220,
    zoneType: "market",
  },
  {
    id: "motijheel",
    nameBn: "মতিঝিল শাপলা চত্বর (Motijheel)",
    distanceMeters: 780,
    baseFare: 210,
    zoneType: "congested",
  },
  {
    id: "banani",
    nameBn: "বনানী ১১ (Banani 11)",
    distanceMeters: 1050,
    baseFare: 290,
    zoneType: "vip",
  },
];

// 🌧️ RAIN-ONLY presets
export const RAIN_PASSENGER_PRESETS: Array<Omit<Passenger, "id" | "pickupDistance" | "dropDistance">> = [
  {
    nameBn: "ভিজে জবজবে শামীম",
    avatar: "🌧️",
    dialogueBn: "মামা ফার্মগেট যাইবেন? বৃষ্টিতে ভিজে একাকার! তাড়াতাড়ি টানেন!",
    driverRoastBn: "বৃষ্টির দিনে সিএনজির চাকা ঘুরলেই ৭ কোটি ট্যাক্স মামা! ইঞ্জিন পানিতে ডুবলে সরকার কি কিস্তিতে নতুন সিএনজি দিব? ৭০০ টাকা দেন, নাইলে সাঁতার কাইটা যান!",
    roastTopic: "rain",
    destination: DESTINATIONS[0],
    fareOffer: 700,
    isUrgent: true,
    patienceSec: 28,
    isRainOnly: true,
    streetAlert: "🌧️ বৃষ্টি শুরু! সিএনজি ভাড়া এখন বিমানের সমান!",
  },
  {
    nameBn: "ছাতাওয়ালা জামিল সাহেব",
    avatar: "☔",
    dialogueBn: "মামা মিরপুর ১০ যাবেন? একটু পানি জমছে রাস্তায়, যাবেন?",
    driverRoastBn: "একটু পানি?! কাজীপাড়ায় তো এখন বঙ্গোপসাগর মামা! সিএনজি এখন সাবমেরিন! সাবমেরিন ট্যাক্স আর লাইফ জ্যাকেট ফি সহ ১ হাজার টাকা!",
    roastTopic: "waterlog",
    destination: DESTINATIONS[1],
    fareOffer: 1000,
    isUrgent: true,
    patienceSec: 30,
    isRainOnly: true,
    streetAlert: "🌊 জলাবদ্ধতা! সিএনজি এখন সাবমেরিন সার্ভিসে!",
  },
  {
    nameBn: "ভিজে অফিস-ফেরতা রফিক",
    avatar: "🌦️",
    dialogueBn: "মামা বনানী যাবেন? পুরো ভিজে গেছি, শার্ট নষ্ট হয়া গেল!",
    driverRoastBn: "শার্ট নষ্ট হইছে? আমার পুরা সিএনজির বডি নষ্ট হইব মামা বৃষ্টিতে! বৃষ্টি-সারচার্জ ৩০০ টাকা আলাদা। মোট ৮৫০ না হইলে কোনো কথা নাই!",
    roastTopic: "rain",
    destination: DESTINATIONS[6],
    fareOffer: 850,
    isUrgent: false,
    patienceSec: 35,
    isRainOnly: true,
    streetAlert: "⛈️ ঝড়-বৃষ্টিতে ঢাকার রাস্তা ডুবছে!",
  },
];

// ☀️ ALL-WEATHER presets (the main 25+ stories)
export const PASSENGER_PRESETS: Array<Omit<Passenger, "id" | "pickupDistance" | "dropDistance">> = [
  // ---- METER / PRICE WAR ----
  {
    nameBn: "ঢাকা ভার্সিটির রিয়া",
    avatar: "👩‍🎓",
    dialogueBn: "মামা ধানমন্ডি ২৭ যাবেন? কিন্তু মিটারে যাবেন তো? মিটারের চেয়ে এক টাকাও বেশি নিব না!",
    driverRoastBn: "মিটার তো সরকারের শোপিস মামা! মিটারে গেলে বউরে খাওয়ামু কী? নিজের পকেট থিকা তেল ভইরা ধানমন্ডি নিমু না! ২২০ ফ্ল্যাট।",
    roastTopic: "meter",
    destination: DESTINATIONS[2],
    fareOffer: 220,
    isUrgent: false,
    patienceSec: 45,
  },
  {
    nameBn: "দরদামওয়ালা নাহিদ ভাই",
    avatar: "🤝",
    dialogueBn: "মামা ফার্মগেট! ১০০ টাকায় যাবেন? মিটারে যায় তো মাত্র ৮০-৯০ টাকা!",
    driverRoastBn: "১০০ টাকা দিয়া তো আমি চা-বিস্কুট কিনুম, গ্যাস ভরুম কেমনে? মিটার কইলে ভাই কাচের মিটার নাকি পাথরের? ২০০ বলেন নাইলে বাসে যান!",
    roastTopic: "meter",
    destination: DESTINATIONS[0],
    fareOffer: 180,
    isUrgent: false,
    patienceSec: 30,
  },

  // ---- GARAGE / REFUSAL ----
  {
    nameBn: "অফিস ফেরত সজল সাহেব",
    avatar: "👨‍💼",
    dialogueBn: "মামা ফার্মগেট চলেন! জরুরি মিটিং আছে, ৫০ টাকা বখশিশ দিমু!",
    driverRoastBn: "যামু না মামা, উল্টা পথ! পেটে গ্যাস হইছে, মেজাজ নষ্ট, আমি এখন গ্যারেজে ঘুমামু! হাঁইটা যান!",
    roastTopic: "garage",
    destination: DESTINATIONS[0],
    fareOffer: 260,
    isUrgent: false,
    patienceSec: 35,
  },
  {
    nameBn: "মতিঝিলের ব্যাংকার সালেহ",
    avatar: "🏦",
    dialogueBn: "মামা মতিঝিল যাবেন? অফিস টাইম শেষ হইয়া যাইতেছে!",
    driverRoastBn: "ওই দিকে গেলে আর ফেরত আসা যায় না মামা — মতিঝিলের জ্যামে ২ ঘণ্টা আটকায়া থাকব আর বউ ফোন কইরা ঘর ভাঙব! গ্যারেজে যামু!",
    roastTopic: "garage",
    destination: DESTINATIONS[5],
    fareOffer: 290,
    isUrgent: true,
    patienceSec: 30,
  },

  // ---- TRAFFIC / JAM ----
  {
    nameBn: "করপোরেট বস্ আসিফ",
    avatar: "🕶️",
    dialogueBn: "গুলশান ১ চত্বরে আর্জেন্ট মিটিং! ফ্লাইওভার দিয়া টানেন!",
    driverRoastBn: "গুলশানের জ্যামে ঢুকলে আজকা আর ফেরা নাই মামা! নাতি-পুতি আইসা উদ্ধার করা লাগব! জ্যাম-ঝুঁকি ভাতা সহ ৫০০ টাকা ফিক্সড!",
    roastTopic: "traffic",
    destination: DESTINATIONS[3],
    fareOffer: 500,
    isUrgent: true,
    patienceSec: 28,
  },
  {
    nameBn: "বিরিয়ানি শিকারি রাকিব",
    avatar: "🍖",
    dialogueBn: "মামা পুরান ঢাকা টানেন! কাচ্চির ক্ষিধা লাগছে, ডানে-বামে কাটবেন না!",
    driverRoastBn: "৩ ঘণ্টা গ্যাসের লাইনে দাঁড়ায়ে মেজাজ গরম! আপনার কাচ্চির গন্ধ শোনার আগে সিলিন্ডার খালি হইব! ৩২০ টাকার নিচে এক ইঞ্চিও না!",
    roastTopic: "traffic",
    destination: DESTINATIONS[4],
    fareOffer: 320,
    isUrgent: false,
    patienceSec: 40,
  },
  {
    nameBn: "ডিমের খাঁচিওয়ালা খালাম্মা",
    avatar: "🧕",
    dialogueBn: "মিরপুর যাব বাবা। সাবধানে চালাইবা, ঝাঁকি দিও না — খাঁচিতে খাঁটি ডিম আছে!",
    driverRoastBn: "খালাম্মা, ঢাকার ভাঙা রাস্তায় পাইলটও ঝাঁকি খাইব! ডিম ফুটলে অমলেট বানায়া নিয়েন। ঝাঁকি ছাড়া চাইলে হেলিকপ্টার ডাকেন!",
    roastTopic: "traffic",
    destination: DESTINATIONS[1],
    fareOffer: 250,
    isUrgent: false,
    patienceSec: 50,
  },

  // ---- TESLA / RICKSHAW SCENES ----
  {
    nameBn: "Tesla-র পাশে দাঁড়ানো রুমান",
    avatar: "🚗",
    dialogueBn: "মামা! সামনে রিকশা Tesla-র সাথে ধাক্কা খাইছে! পুলিশ আসার আগে বনানী নিয়া যান!",
    driverRoastBn: "রিকশা আর Tesla ধাক্কা?! ঢাকার রাস্তায় Tesla আইছে কোন সাহসে?! ঢাকার Tesla হইল রিকশা মামা — ইলেক্ট্রিক টানে, কিন্তু টানা পেশি দিয়া! ৪৫০ দেন!",
    roastTopic: "tesla",
    destination: DESTINATIONS[6],
    fareOffer: 450,
    isUrgent: true,
    patienceSec: 25,
    streetAlert: "🚨 রিকশা vs Tesla ধাক্কা! ছাইড়া দেন মামা, গরীব মানুষ!",
  },
  {
    nameBn: "গোলাপী রিকশার রাকিব ভাই",
    avatar: "🛺",
    dialogueBn: "মামা, রিকশা ভাংচুর হইয়া গেছে! আমারে মিরপুর পৌঁছায়া দেন, পরে দোয়া করুম!",
    driverRoastBn: "ভাই রিকশাওয়ালা মিরপুর যাইব সিএনজিতে?! ঢাকার ইতিহাসে এই প্রথম! পরের যুগে রিকশাওয়ালা BMW চালাইব আর সিএনজি-ওয়ালা পায়ে হাঁটব। যান ভাই ৩০০!",
    roastTopic: "tesla",
    destination: DESTINATIONS[1],
    fareOffer: 300,
    isUrgent: false,
    patienceSec: 40,
    streetAlert: "🛺 রিকশা ভাংচুর! ঢাকার Tesla এখন পথে বসেছে!",
  },
  {
    nameBn: "Mercedes-এ বসা VIP টিটু",
    avatar: "🎩",
    dialogueBn: "আরে মামা, রিকশা গায়ে লাগাইলো আমার Mercedes-এ! জরিমানা করেন তো!",
    driverRoastBn: "কী জরিমানা মামা! রিকশার জমিদারি আছে কিনা জিগান! পুলিশ আসলে সবাই বলব 'ছাইড়া দেন মামা গরীব মানুষ!' Mercedes-ও বাঁচব না! এই দেশে গরীব সবসময় জেতে! ৬০০ টাকা লাগব!",
    roastTopic: "accident",
    destination: DESTINATIONS[3],
    fareOffer: 600,
    isUrgent: true,
    patienceSec: 20,
    streetAlert: "💥 রিকশা vs Mercedes! জনগণ: ছাইড়া দেন মামা, গরীব মানুষ!",
  },
  {
    nameBn: "ক্ষুব্ধ Mercedes মালিক রাজেক",
    avatar: "😤",
    dialogueBn: "রিকশার সাহস কত বড়! আমার BMW-এ আঁচড় দিছে! পুলিশ ডাকি?",
    driverRoastBn: "BMW রাখছেন গরীবের দেশে — রিকশার কী দোষ! পুলিশ আসলে সবাই বলব 'ওদের জমিদারি, রিকশারে কী বলবেন!' এই দেশ গরীবের, বড়লোকের না! ৭০০ টাকায় গুলশান?",
    roastTopic: "accident",
    destination: DESTINATIONS[3],
    fareOffer: 700,
    isUrgent: true,
    patienceSec: 22,
    streetAlert: "🚨 BMW vs রিকশা দুর্ঘটনা! জনতার রায়: ছাইড়া দেন!",
  },

  // ---- THEFT / PICKPOCKET ----
  {
    nameBn: "ছিনতাইয়ের শিকার নাসরিন",
    avatar: "😱",
    dialogueBn: "মামা! ব্যাগ ছিনতাই হইয়া গেছে! ফোন, পার্স সব নিয়া গেছে! ধানমন্ডি নিয়া যান, বাসায় পৌঁছাই আপনারে দিমু!",
    driverRoastBn: "আপা, ছিনতাই হইলে আমার কী করার আছে! টাকা নাই আর সিএনজি চালামু? তবে ছাইড়াও দিতে পারতেছি না — মানুষ মানুষের জন্য। চলেন, পরে দিয়েন!",
    roastTopic: "theft",
    destination: DESTINATIONS[2],
    fareOffer: 200,
    isUrgent: true,
    patienceSec: 20,
    streetAlert: "🚨 ছিনতাই সতর্কতা! ধানমন্ডিতে পার্স ছিনতাই হয়েছে!",
  },
  {
    nameBn: "দৌড়ানো ছিনতাইকারী দেখে আরিফ",
    avatar: "🏃",
    dialogueBn: "মামা! ওই লোকটা দৌড়ায়া যাইতেছে ব্যাগ নিয়া! ধরা পড়ব না — তাড়াতাড়ি ফার্মগেট নিয়া যান, আমারও ফোন গেছে!",
    driverRoastBn: "মামা, আমি পুলিশ না — সিএনজি! ছিনতাইকারী ধরলে আমারে মামলা দিব! চলেন ফার্মগেট, তবে ফোন নাই বইলা UPI-ও নাই — ক্যাশ ২৫০ লাগব!",
    roastTopic: "theft",
    destination: DESTINATIONS[0],
    fareOffer: 250,
    isUrgent: true,
    patienceSec: 18,
    streetAlert: "🏃 ছিনতাইকারী পালাচ্ছে! ব্যাগ নিয়ে দৌড়!",
  },
  {
    nameBn: "পকেটমার শিকার হওয়া সুমন",
    avatar: "👜",
    dialogueBn: "মামা বাসে পকেটমার হইয়া গেছে! ওয়ালেট গেছে। বাসায় টাকা আছে — মিরপুর নিয়া চলেন!",
    driverRoastBn: "ভাই পকেটমার হইলে কি আমার পকেটও মারল? ঠিক আছে, বাসায় গিয়া দিয়েন — কিন্তু না দিলে পরেরবার দ্বিগুণ নিমু! চলেন মিরপুর!",
    roastTopic: "theft",
    destination: DESTINATIONS[1],
    fareOffer: 230,
    isUrgent: false,
    patienceSec: 40,
    streetAlert: "👜 বাসে পকেটমারের দল সক্রিয়! সাবধান!",
  },

  // ---- VIP / PROTOCOL ----
  {
    nameBn: "মন্ত্রীর গাড়ির আটকা রহিম",
    avatar: "🚔",
    dialogueBn: "মামা! VIP মুভমেন্টে রাস্তা বন্ধ! আধা ঘণ্টা ধইরা আটকায়া আছি — গুলশান নিয়া যান!",
    driverRoastBn: "VIP মুভমেন্ট মানে আমার ৩ ঘণ্টার ভাড়া মাটি! ওই মন্ত্রী সাহেব কি আমার গ্যাসের টাকা দিব? VIP প্রোটোকল ট্যাক্স ৫০ টাকা এক্সট্রা! মোট ৫৫০!",
    roastTopic: "vip",
    destination: DESTINATIONS[3],
    fareOffer: 550,
    isUrgent: true,
    patienceSec: 22,
    streetAlert: "🚔 VIP প্রোটোকল! রাস্তা বন্ধ, জনগণ আটকা!",
  },

  // ---- ACCIDENT AFTERMATH ----
  {
    nameBn: "দুর্ঘটনার প্রত্যক্ষদর্শী করিম",
    avatar: "😮",
    dialogueBn: "মামা! সামনে বাস উল্টায়া গেছে! রাস্তা পুরা বন্ধ। পিছন দিক দিয়া মতিঝিল নিয়া চলেন!",
    driverRoastBn: "বাস উল্টাইলো মানে সব রিকশা, সিএনজি, বাস সব পিছনে! আমি কি উড়া দিয়া যামু? যদি যাই তো ৪০০ টাকা — ডিটোর চার্জ আলাদা!",
    roastTopic: "accident",
    destination: DESTINATIONS[5],
    fareOffer: 400,
    isUrgent: true,
    patienceSec: 25,
    streetAlert: "🚌 বাস উল্টে দুর্ঘটনা! রাস্তা সম্পূর্ণ বন্ধ!",
  },
  {
    nameBn: "ঝগড়ার মাঝে পড়া জলিল সাহেব",
    avatar: "🤼",
    dialogueBn: "মামা! সামনে দুই ট্রাকের মাঝে বাস আটকে গিয়া ড্রাইভারে ড্রাইভারে ঝগড়া! বনানী চলেন!",
    driverRoastBn: "ঝগড়া দেখতে থাকেন মামা — এই শহরে ঝগড়া না দেখলে দিন পার হয় না! ঝগড়ার জন্য গেলে আরেক ঘণ্টা যাব না। বনানী ৪০০, চলেন!",
    roastTopic: "accident",
    destination: DESTINATIONS[6],
    fareOffer: 400,
    isUrgent: false,
    patienceSec: 35,
    streetAlert: "🤼 ট্রাক ড্রাইভারদের মারামারি! ট্র্যাফিক বন্ধ!",
  },

  // ---- EVERYDAY DHAKA COMEDY ----
  {
    nameBn: "গরম চায়ের কাপ হাতে নাইম",
    avatar: "☕",
    dialogueBn: "মামা! পুরান ঢাকা চলেন। কিন্তু এই চায়ের কাপটা ঢালতে পারব না — ধীরে চালাইবেন!",
    driverRoastBn: "চা হাতে নিয়া সিএনজিতে উঠছেন?! ঢাকার রাস্তায় ধীরে গেলে ঘণ্টা লাগব! চা ঢালবেন নাকি পুরান ঢাকা পৌঁছাবেন — দুইটা একসাথে হয় না!",
    roastTopic: "traffic",
    destination: DESTINATIONS[4],
    fareOffer: 280,
    isUrgent: false,
    patienceSec: 45,
  },
  {
    nameBn: "ঘুমন্ত ফকির ভাই",
    avatar: "😴",
    dialogueBn: "মামা... মিরপুর... যামু... একটু... আস্তে...",
    driverRoastBn: "ভাই এইখানে ঘুমাইবেন না! এটা বেড-টাইম সার্ভিস না — সিএনজি! ঘুমাইলে মিরপুরের বদলে গ্যারেজে পৌঁছাইব। জেগে থাকলে ২৫০ টাকা, নাইলে জেগে নিজেই যান!",
    roastTopic: "traffic",
    destination: DESTINATIONS[1],
    fareOffer: 250,
    isUrgent: false,
    patienceSec: 55,
  },
  {
    nameBn: "মাছের বাজারফেরতা সাদিয়া",
    avatar: "🐟",
    dialogueBn: "মামা মিরপুর নিয়া যাইবেন? মাছ নিয়া আছি, তাজা রুই!",
    driverRoastBn: "মাছ?! সিএনজিতে মাছ নিয়া উঠছেন?! পুরা গাড়ি গন্ধে ভইরা যাইব! মাছ-সার্চার্জ ১০০ টাকা আলাদা — মোট ৩৫০ না হইলে নামেন!",
    roastTopic: "traffic",
    destination: DESTINATIONS[1],
    fareOffer: 350,
    isUrgent: false,
    patienceSec: 38,
    streetAlert: "🐟 সতর্কতা: সিএনজিতে তাজা মাছ!",
  },
  {
    nameBn: "পরীক্ষার্থী কামরুল",
    avatar: "📚",
    dialogueBn: "মামা! পরীক্ষা ৩০ মিনিট পরে শুরু। ধানমন্ডি নিয়া যান — জীবন-মরণ প্রশ্ন!",
    driverRoastBn: "জীবন-মরণ?! আমার গ্যাসও জীবন-মরণ সমস্যা মামা! পরীক্ষায় পাস করলে পরে অনেক উপকার করবেন — এখন ৩০০ দেন, দ্রুত যাই!",
    roastTopic: "traffic",
    destination: DESTINATIONS[2],
    fareOffer: 300,
    isUrgent: true,
    patienceSec: 20,
    streetAlert: "📚 পরীক্ষার দিনে জ্যামে পড়েছে শিক্ষার্থীরা!",
  },
  {
    nameBn: "হাসপাতালফেরতা তারেক ভাই",
    avatar: "🏥",
    dialogueBn: "মামা! জরুরি — হাসপাতালে পেশেন্ট আছে! ফার্মগেট যান! রক্তের জন্য যাইতেছি!",
    driverRoastBn: "রক্তের কথা শুনলে মন নরম হয়ে যায় মামা! যান চলেন — তবে রাস্তায় আটকায়া থাকলে কিচ্ছু করার নাই। ২০০ টাকা, দ্রুত!",
    roastTopic: "traffic",
    destination: DESTINATIONS[0],
    fareOffer: 200,
    isUrgent: true,
    patienceSec: 18,
    streetAlert: "🏥 জরুরি: রক্তের দরকার! ফার্মগেট যাচ্ছেন!",
  },
  {
    nameBn: "বিয়ের কনে বরণকারী পলি",
    avatar: "👰",
    dialogueBn: "মামা! বিয়ে বাড়ি দেরি হয়ে যাচ্ছে! গুলশান নিয়া যান তাড়াতাড়ি!",
    driverRoastBn: "বিয়ে বাড়িতে কনে অপেক্ষা করছে আর আমি জ্যামে! বিয়ে ভাইঙ্গা গেলে দোষ কি আমার?! বিয়ে-ইমার্জেন্সি রেট ৬৫০ টাকা ফ্ল্যাট!",
    roastTopic: "vip",
    destination: DESTINATIONS[3],
    fareOffer: 650,
    isUrgent: true,
    patienceSec: 15,
    streetAlert: "💒 বিয়ের বরযাত্রী জ্যামে আটকা!",
  },
  {
    nameBn: "ইউটিউবার সিফাত ভাই",
    avatar: "📹",
    dialogueBn: "মামা ফার্মগেট যাবেন? আপনার কথা ইউটিউবে দিব! আপনি ভাইরাল হইবেন!",
    driverRoastBn: "ভাইরাল হইলে কি গ্যাসের দাম কমব? ইউটিউব-সার্চার্জ ৫০ টাকা আলাদা! ক্যামেরা দেখালে আমি আরও সুন্দর করে কথা বলব — ২৫০ টাকা!",
    roastTopic: "traffic",
    destination: DESTINATIONS[0],
    fareOffer: 250,
    isUrgent: false,
    patienceSec: 40,
    streetAlert: "📹 সাবধান: ইউটিউবার সক্রিয়! ভাইরাল হওয়ার সুযোগ!",
  },
  {
    nameBn: "অ্যাপে সিএনজি না পাওয়া শান্তা",
    avatar: "📱",
    dialogueBn: "মামা Pathao-তে কেউ আসে না এই বৃষ্টিতে! আপনি কি মিরপুর যাবেন?",
    driverRoastBn: "Pathao-তে ১০ টাকা কমিশন কাটে মামা! সেটা তো আমারই ক্ষতি। বৃষ্টি-সার্চার্জ আলাদা। মোট ৪৫০ দেন, Pathao বাদ!",
    roastTopic: "rain",
    destination: DESTINATIONS[1],
    fareOffer: 450,
    isUrgent: true,
    patienceSec: 30,
    isRainOnly: true,
    streetAlert: "📱 রাইডশেয়ার বন্ধ! সিএনজিই ভরসা!",
  },
  {
    nameBn: "রাগী বস-ফেরতা মনিরুল",
    avatar: "😠",
    dialogueBn: "মামা! বস চাকরি থেকে বের করে দিছে! বাসায় যামু। ধানমন্ডি চলেন — আর কোনো কথা না!",
    driverRoastBn: "বস-এর সমস্যা আমার না মামা! আমার বস হইল গ্যাসের দাম! আপনার মেজাজ গরম, আমার ইঞ্জিন গরম — দুইটাই সমান। ২৮০ দেন, চুপ থাইকা যান!",
    roastTopic: "traffic",
    destination: DESTINATIONS[2],
    fareOffer: 280,
    isUrgent: false,
    patienceSec: 42,
  },
  {
    nameBn: "শেয়ারবাজার-ধসের ভুক্তভোগী তানভীর",
    avatar: "📉",
    dialogueBn: "মামা মতিঝিল! আজকে শেয়ার মার্কেট ধস! সব শেষ হইয়া গেছে জীবনের!",
    driverRoastBn: "শেয়ার মার্কেট গেছে মামা, কিন্তু আমার ভাড়া তো ধস খায়নি! ৩০০ টাকা ফিক্সড — শেয়ার উঠলে পরে বেশি দিয়েন!",
    roastTopic: "traffic",
    destination: DESTINATIONS[5],
    fareOffer: 300,
    isUrgent: true,
    patienceSec: 30,
    streetAlert: "📉 শেয়ার মার্কেটে ধস! মতিঝিলে ধাক্কা!",
  },
  {
    nameBn: "বৃদ্ধ দাদুভাই",
    avatar: "👴",
    dialogueBn: "বাবা, পুরান ঢাকা চিনস? ওখানে যাইতে চাই... শরীরটা ভালো না...",
    driverRoastBn: "দাদু, পুরান ঢাকা চিনি মানে ওইখানে আটকায়া মরার ভয় আছে! তবে আপনার জন্য যামু — ২০০ টাকা, আস্তে যামু, কোনো তাড়াহুড়া না!",
    roastTopic: "traffic",
    destination: DESTINATIONS[4],
    fareOffer: 200,
    isUrgent: false,
    patienceSec: 60,
  },
  {
    nameBn: "প্রেমিক জুটি সুহান-তিশা",
    avatar: "💑",
    dialogueBn: "মামা! বনানী নিয়া যান — ডেট আছে! তাড়াতাড়ি যাওয়া দরকার!",
    driverRoastBn: "ডেটের তাড়া মানে ভাড়াও বেশি মামা! প্রেমিকা অপেক্ষায় থাকলে রেট ডাবল হয়। ৫০০ টাকা — প্রেমের মূল্য বলেন কত?",
    roastTopic: "vip",
    destination: DESTINATIONS[6],
    fareOffer: 500,
    isUrgent: true,
    patienceSec: 22,
    streetAlert: "💑 প্রেমিক জুটির জরুরি সিএনজি প্রয়োজন!",
  },
  {
    nameBn: "হারিয়ে যাওয়া ট্যুরিস্ট জেনিফার",
    avatar: "🗺️",
    dialogueBn: "Excuse me... Puran Dhaka? Victoria Park? Please?",
    driverRoastBn: "বিদেশি মামা! ঢাকার ট্যুরিস্ট মানে ট্যুরিস্ট-ট্যাক্স! পুরান ঢাকা $10 বা ৫০০ টাকা! আন্তর্জাতিক রেট মামা!",
    roastTopic: "vip",
    destination: DESTINATIONS[4],
    fareOffer: 500,
    isUrgent: false,
    patienceSec: 45,
    streetAlert: "🗺️ বিদেশি ট্যুরিস্ট ঢাকায় হারিয়ে গেছে!",
  },
  {
    nameBn: "ডেলিভারি ম্যান মাসুদ",
    avatar: "📦",
    dialogueBn: "মামা! ফার্মগেট ডেলিভারি দিতে হবে। পার্সেল মিস হইলে চাকরি যাইব!",
    driverRoastBn: "পার্সেল নিয়া সিএনজি?! আমি কি ডেলিভারি সার্ভিস নাকি? পার্সেল-সারচার্জ ৫০ টাকা এক্সট্রা — মোট ২৮০, না হইলে Pathao ডাকেন!",
    roastTopic: "traffic",
    destination: DESTINATIONS[0],
    fareOffer: 280,
    isUrgent: true,
    patienceSec: 25,
    streetAlert: "📦 ডেলিভারি সংকট! সময়মতো পৌঁছাবে কি?",
  },
  {
    nameBn: "ক্ষুধার্ত সিয়াম ভাই",
    avatar: "🍛",
    dialogueBn: "মামা! সকাল থেকে কিছু খাই নাই, ধানমন্ডিতে বাসায় রান্না হইছে! তাড়াতাড়ি!",
    driverRoastBn: "ক্ষুধার্ত মানুষ দেখলে মায়া লাগে মামা — কিন্তু আমার গ্যাসও ক্ষুধার্ত! ২৫০ টাকা দেন, একসাথে যাই — আমিও পরে খামু!",
    roastTopic: "traffic",
    destination: DESTINATIONS[2],
    fareOffer: 250,
    isUrgent: true,
    patienceSec: 28,
  },
];

// 📻 ঢাকা FM Radio Commentary — always-on bottom ticker
export const RADIO_LINES: string[] = [
  "আজকের ট্রাফিক আপডেট: শাহবাগে জ্যাম, তেজগাঁওয়ে জ্যাম, সর্বত্র জ্যাম। ভালো দিন কাটান।",
  "বিশেষজ্ঞ বলছেন: ঢাকার জ্যাম কমাতে ৫০ বছর লাগবে। নাগরিকরা বলছেন: ৫০ বছর? এত কম?",
  "CNG চালক সমিতির দাবি: বৃষ্টিতে ভাড়া ৩ গুণ — কারণ 'মানসিক চাপ ও ইঞ্জিনের কষ্ট'।",
  "সতর্কতা: রাস্তায় গরু দেখলে হর্ন দেবেন না, ওটা সরকারি সম্পত্তি হতে পারে।",
  "ব্রেকিং: Uber-এ বাংলাদেশে সার্জ প্রাইস ৫০০%। CNG ড্রাইভাররা বলছেন: 'এটা কম হইছে'।",
  "মিরপুর থেকে মতিঝিল: মেট্রোরেলে ২০ মিনিট, বাসে ২ ঘণ্টা, CNG-তে: নির্ভর করে মামার মেজাজের উপর।",
  "আবহাওয়া বিভাগ: ঢাকায় বৃষ্টি হবে। CNG ভাড়া: স্বয়ংক্রিয়ভাবে ৩ গুণ হবে।",
  "নতুন সংসদ ভবনের পাশের রাস্তায় রিকশা নিষিদ্ধ। রিকশাওয়ালারা বলছেন: 'আমরা কিন্তু ভোট দিছিলাম!'",
  "ফার্মগেট সিগন্যালে আজ ১৪ মিনিট আটকা ছিলেন এক অফিসার। বাড়ি ফিরতে সময় লেগেছে ৩ ঘণ্টা।",
  "ঢাকার রাস্তার নিয়ম: যে সবচেয়ে জোরে হর্ন দেয়, সে সবচেয়ে আগে যায়।",
  "ইলেকট্রিক রিকশা (ঢাকার Tesla) এখন সবচেয়ে বেশি বিক্রি হওয়া গাড়ি। Elon Musk সংবাদ শুনে কান্না করছেন।",
  "রাস্তা সংস্কার প্রকল্প শুরু: ৩ মাসের কাজ শেষ হবে ৩ বছরে। বাজেট শেষ হবে ১ মাসে।",
  "পুলিশ ঘোষণা: হেলমেট না পরলে জরিমানা। রিকশাওয়ালারা জিজ্ঞেস করছেন: রিকশার হেলমেট কোথায় পাব?",
  "আজ ঢাকায় ৪৭টি দুর্ঘটনা। সবার দাবি: আমার দোষ নাই।",
  "সিএনজি পিতামহ-পিতামহী দিবস: মামাদের সম্মান জানান, তাহলে ভাড়া কম নেবেন। হয়তো।",
  "গরমে সিএনজির AC নষ্ট। ড্রাইভার বলছেন: 'জানালা খুলে দিন, প্রাকৃতিক AC আছে।'",
  "CNG গ্যাস সিলিন্ডার লাইনে ৪ ঘণ্টা অপেক্ষা। সিএনজি মামা বলছেন: তাই ভাড়া বেশি নিই।",
  "নতুন অ্যাপ: 'জ্যামে আছি' — GPS দিয়ে দেখায় আপনি কত গভীর জ্যামে আছেন। রেটিং: ৫ তারা।",
  "ঢাকার পাবলিক টয়লেট খোঁজে পাওয়া গেছে। সংখ্যা: ৩টি। জনসংখ্যা: ২ কোটি।",
  "বিশেষ বার্তা: মামা, মিটার চালু করলে সংসার চলে না। বাংলাদেশ সরকার এই বিষয়ে নীরব।",
  "রিকশা চালক সমিতির বার্তা: আমরা গরীব, তাই ট্রাফিক আইন আমাদের জন্য না।",
  "শেয়ার মার্কেট ধস — মতিঝিলের চায়ের দোকানে আজ ভিড় দ্বিগুণ।",
  "ব্রেকিং: বনানীতে রিকশা-BMW সংঘর্ষ। BMW-ওয়ালা ক্ষতিপূরণ চেয়েছেন। রিকশাওয়ালা বলছেন: 'ছাইড়া দেন মামা।'",
  "পুরান ঢাকার গলিতে আজ CNG ঢুকেছে। চালক এখনও বের হতে পারেননি। উদ্ধার দল পাঠানো হয়েছে।",
  "ঢাকা মেট্রোরেলে আজ ২ লাখ যাত্রী। বাকি ১ কোটি ৯৮ লাখ জ্যামে।",
  "রাস্তায় গর্তের সংখ্যা: ১০,০০০+। DNCC-র মন্তব্য: 'উন্নয়ন চলছে।'",
  "CNG মামার দৈনিক রুটিন: ৬টায় গ্যাস লাইন, ৪ ঘণ্টা অপেক্ষা, তারপর ভাড়া ডাবল।",
];

// ✅ Trip complete — driver's random farewell comments
export const TRIP_COMPLETE_PHRASES = [
  { emoji: "🤑", text: "আসেন আবার মামা! পরেরবার একটু বেশি দিয়েন!" },
  { emoji: "😒", text: "টাকাটা কম দিলেন কিন্তু। আল্লাহ বিচার করব।" },
  { emoji: "😤", text: "বখশিশটা কই? মামা ভুইলা গেলেন?" },
  { emoji: "🙏", text: "আল্লাহ হায়াত দিলে আবার আসবেন মামা!" },
  { emoji: "😂", text: "পৌঁছায়া দিলাম! এবার ৩ ঘণ্টা জ্যামে থাইকা ফিরব!" },
  { emoji: "💸", text: "টাকা পাইলাম, গ্যাস কিনব। জীবন চলছে মামা!" },
  { emoji: "🫡", text: "মামা সালাম, আবার দেখা হবে ইনশাল্লাহ!" },
];

// 🎓 Reject button random texts
export const REJECT_BUTTON_TEXTS = [
  "মামা উল্টা পথ! (বাদ দিন)",
  "গ্যারেজে যামু! (না যামু না)",
  "এই রাস্তায় যাই না! (অস্বীকার)",
  "মেজাজ নাই মামা! (পরেরবার)",
  "সিলিন্ডার খালি! (ছেড়ে দিন)",
  "আজকে শেষ ট্রিপ! (নাহ!)",
];

// ✅ Accept button random texts
export const ACCEPT_BUTTON_TEXTS = [
  "আল্লাহর নামে উঠেন! (রাজি)",
  "চলেন মামা, টানি! (নিলাম)",
  "বেশি কথা না, উঠেন! (ওকে)",
  "চুক্তি হইল! গাড়িতে উঠেন!",
  "ঠিক আছে, যামু! (রাজি আছি)",
  "হয়া গেছে মামা! উঠেন!",
];

// Street event ticker pool — random incidents shown while driving
export const STREET_EVENTS: Omit<StreetEvent, "id">[] = [
  { emoji: "🛺", textBn: "রিকশা vs Tesla দুর্ঘটনা! জনতা: ছাইড়া দেন মামা, গরীব মানুষ!", durationSec: 6 },
  { emoji: "💥", textBn: "কাকরাইলে বাস-রিকশা সংঘর্ষ! ড্রাইভার বলছে — আমার দোষ নাই!", durationSec: 6 },
  { emoji: "🌊", textBn: "মিরপুর রাস্তায় হাঁটু পানি! সিএনজি এখন সাবমেরিন!", durationSec: 5 },
  { emoji: "🚔", textBn: "VIP প্রোটোকলে ৩ ঘণ্টা জ্যাম! সাধারণ মানুষ আটকা!", durationSec: 5 },
  { emoji: "👜", textBn: "বাসে পকেটমারের দল ধরা পড়েছে! ওয়ালেট উদ্ধার!", durationSec: 5 },
  { emoji: "📉", textBn: "শেয়ার মার্কেটে ধস! মতিঝিলে কান্নার রোল!", durationSec: 5 },
  { emoji: "🐓", textBn: "কারওয়ান বাজারে মুরগি পালিয়েছে! রাস্তা অবরোধ!", durationSec: 6 },
  { emoji: "🚌", textBn: "বনানীতে বাস উল্টে গেছে! চালক পালিয়েছে!", durationSec: 6 },
  { emoji: "🍌", textBn: "ট্রাক থেকে কলা পড়ে কাকরাইল বন্ধ! মানুষ কুড়াচ্ছে!", durationSec: 6 },
  { emoji: "🎊", textBn: "গুলশানে ধনীর বিয়ে! গরীবের রাস্তা বন্ধ ৪ ঘণ্টা!", durationSec: 5 },
  { emoji: "🛺", textBn: "রিকশাওয়ালার দাবি: BMW মালিক ছাইড়া দেন, গরীব মানুষ আমি!", durationSec: 6 },
  { emoji: "📢", textBn: "নতুন নিয়ম: সিএনজিতে গান বাজানো নিষেধ! ড্রাইভাররা প্রতিবাদে!", durationSec: 6 },
  { emoji: "⚡", textBn: "হঠাৎ বিদ্যুৎ বিভ্রাট! ট্রাফিক লাইট বন্ধ, চারদিকে হর্ন!", durationSec: 5 },
  { emoji: "🐄", textBn: "ফার্মগেটে গরু পালিয়েছে! পুলিশ ধাওয়া করছে!", durationSec: 6 },
  { emoji: "🚧", textBn: "DNCC রাস্তা খোঁড়াখুঁড়ি শুরু! জ্যামের নতুন রেকর্ড!", durationSec: 5 },
];

interface GameState {
  gameState: "menu" | "driving" | "passenger_modal" | "checkpoint_modal" | "game_over" | "garage";
  weather: "sunny" | "rainy";
  cash: number;
  gasPressureBar: number;
  speedKmh: number;
  distanceTraveledMeters: number;
  nitroReady: boolean;
  isNitroActive: boolean;

  // Passenger
  currentPassenger: Passenger | null;
  pendingPassengerHail: Passenger | null;
  passengerProgressRatio: number;

  // Chanda / Checkpoint
  activeCheckpoint: Checkpoint | null;
  isChased: boolean;
  chaseTimerSec: number;

  // Stats & Alerts
  metrics: GameMetrics;
  crashAlert: string | null;
  activeStreetEvent: StreetEvent | null;
  tripCompleteToast: { fare: number; phrase: { emoji: string; text: string } } | null;

  // Actions
  setWeather: (weather: "sunny" | "rainy") => void;
  toggleWeather: () => void;
  triggerStreetEvent: () => void;
  recordCrash: (penalty: number, message: string) => void;
  clearCrashAlert: () => void;
  startShift: () => void;
  setSpeed: (speed: number) => void;
  advanceDistance: (dtSec: number) => void;
  triggerNitro: () => void;
  hailPassenger: (p: Passenger) => void;
  acceptPassenger: () => void;
  rejectPassenger: () => void;
  arrivePassenger: () => void;
  dismissTripToast: () => void;
  setCheckpoint: (cp: Checkpoint) => void;
  payCheckpoint: () => void;
  bargainCheckpoint: () => { success: boolean; discountAmount: number };
  escapeCheckpoint: () => void;
  checkChaseTick: (dtSec: number) => void;
  refillGas: () => void;
  openGarage: () => void;
  closeGarage: () => void;
  endShift: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  gameState: "menu",
  weather: "sunny",
  cash: 1200,
  gasPressureBar: 180,
  speedKmh: 0,
  distanceTraveledMeters: 0,
  nitroReady: true,
  isNitroActive: false,

  currentPassenger: null,
  pendingPassengerHail: null,
  passengerProgressRatio: 0,

  activeCheckpoint: null,
  isChased: false,
  chaseTimerSec: 0,
  crashAlert: null,
  activeStreetEvent: null,
  tripCompleteToast: null,

  metrics: {
    cash: 1200,
    totalChandaPaid: 0,
    totalBribesPaid: 0,
    totalFaresEarned: 0,
    tripsCompleted: 0,
    chasesEscaped: 0,
    distanceTraveledMeters: 0,
  },

  setWeather: (weather: "sunny" | "rainy") => {
    cngAudio.setRain(weather === "rainy");
    if (weather === "rainy") {
      cngAudio.thunder();
    }
    set({ weather });
  },

  toggleWeather: () => {
    const next = get().weather === "sunny" ? "rainy" : "sunny";
    get().setWeather(next);
  },

  triggerStreetEvent: () => {
    const pool = STREET_EVENTS;
    const raw = pool[Math.floor(Math.random() * pool.length)];
    const event: StreetEvent = { ...raw, id: `se-${Date.now()}` };
    set({ activeStreetEvent: event });
    setTimeout(() => set({ activeStreetEvent: null }), event.durationSec * 1000);
  },

  recordCrash: (penalty: number, message: string) => {
    const { cash } = get();
    set({
      cash: Math.max(0, cash - penalty),
      crashAlert: message,
    });
    setTimeout(() => {
      set({ crashAlert: null });
    }, 2800);
  },

  clearCrashAlert: () => set({ crashAlert: null }),

  startShift: () => {
    cngAudio.ensureStarted();
    set({
      gameState: "driving",
      speedKmh: 10,
    });
  },

  setSpeed: (speed: number) => set({ speedKmh: Math.max(0, speed) }),

  advanceDistance: (dtSec: number) => {
    const { speedKmh, distanceTraveledMeters, gasPressureBar, currentPassenger, weather } = get();
    const distanceDelta = (speedKmh * 1000 * dtSec) / 3600;
    const newDist = distanceTraveledMeters + distanceDelta;
    const newGas = Math.max(0, gasPressureBar - distanceDelta * 0.0035);

    // Natural weather shifts every ~450m
    const distModulo = Math.floor(newDist / 450);
    const oldModulo = Math.floor(distanceTraveledMeters / 450);
    if (distModulo !== oldModulo) {
      if (weather === "sunny" && Math.random() > 0.55) {
        get().setWeather("rainy");
      } else if (weather === "rainy" && Math.random() > 0.45) {
        get().setWeather("sunny");
      }
      // Random street event ticker every weather cycle
      if (Math.random() > 0.4) {
        get().triggerStreetEvent();
      }
    }

    let newRatio = 0;
    if (currentPassenger) {
      const tripTotal = currentPassenger.dropDistance - currentPassenger.pickupDistance;
      const tripPassed = newDist - currentPassenger.pickupDistance;
      newRatio = Math.min(1, Math.max(0, tripPassed / tripTotal));
    }

    set({
      distanceTraveledMeters: newDist,
      gasPressureBar: newGas,
      passengerProgressRatio: newRatio,
    });

    if (currentPassenger && newRatio >= 1) {
      get().arrivePassenger();
    }
  },

  triggerNitro: () => {
    const { nitroReady, isNitroActive } = get();
    if (!nitroReady || isNitroActive) return;

    cngAudio.nitro();
    set({ isNitroActive: true, nitroReady: false });

    setTimeout(() => {
      set({ isNitroActive: false });
    }, 3500);

    setTimeout(() => {
      set({ nitroReady: true });
    }, 12000);
  },

  hailPassenger: (p: Passenger) => {
    if (get().currentPassenger || get().activeCheckpoint) return;
    set({ pendingPassengerHail: p, gameState: "passenger_modal" });
    // Show street alert if passenger has one
    if (p.streetAlert) {
      const event: StreetEvent = {
        id: `pse-${Date.now()}`,
        emoji: p.avatar,
        textBn: p.streetAlert,
        durationSec: 5,
      };
      set({ activeStreetEvent: event });
      setTimeout(() => set({ activeStreetEvent: null }), 5000);
    }
  },

  acceptPassenger: () => {
    const { pendingPassengerHail, distanceTraveledMeters } = get();
    if (!pendingPassengerHail) return;
    cngAudio.cash();
    set({
      currentPassenger: {
        ...pendingPassengerHail,
        pickupDistance: distanceTraveledMeters,
        dropDistance: distanceTraveledMeters + pendingPassengerHail.destination.distanceMeters,
      },
      pendingPassengerHail: null,
      passengerProgressRatio: 0,
      gameState: "driving",
    });
  },

  rejectPassenger: () => {
    set({ pendingPassengerHail: null, gameState: "driving" });
  },

  arrivePassenger: () => {
    const { currentPassenger, cash, metrics } = get();
    if (!currentPassenger) return;

    cngAudio.cash();
    const fare = currentPassenger.fareOffer;
    const phrase = TRIP_COMPLETE_PHRASES[Math.floor(Math.random() * TRIP_COMPLETE_PHRASES.length)];
    set({
      cash: cash + fare,
      currentPassenger: null,
      passengerProgressRatio: 0,
      tripCompleteToast: { fare, phrase },
      metrics: {
        ...metrics,
        cash: cash + fare,
        totalFaresEarned: metrics.totalFaresEarned + fare,
        tripsCompleted: metrics.tripsCompleted + 1,
      },
    });
    setTimeout(() => set({ tripCompleteToast: null }), 3200);
  },

  dismissTripToast: () => set({ tripCompleteToast: null }),

  setCheckpoint: (cp: Checkpoint) => {
    if (get().activeCheckpoint) return;
    cngAudio.whistle();
    set({
      activeCheckpoint: cp,
      gameState: "checkpoint_modal",
      speedKmh: Math.min(get().speedKmh, 20),
    });
  },

  payCheckpoint: () => {
    const { activeCheckpoint, cash, metrics } = get();
    if (!activeCheckpoint) return;

    cngAudio.cash();
    const amount = activeCheckpoint.demandAmount;
    const isPolice = activeCheckpoint.type === "police_sergeant";

    set({
      cash: Math.max(0, cash - amount),
      activeCheckpoint: null,
      gameState: "driving",
      metrics: {
        ...metrics,
        cash: Math.max(0, cash - amount),
        totalChandaPaid: isPolice ? metrics.totalChandaPaid : metrics.totalChandaPaid + amount,
        totalBribesPaid: isPolice ? metrics.totalBribesPaid + amount : metrics.totalBribesPaid,
      },
    });
  },

  bargainCheckpoint: () => {
    const { activeCheckpoint, cash, metrics } = get();
    if (!activeCheckpoint) return { success: false, discountAmount: 0 };

    const success = Math.random() > 0.4;
    const discount = success ? Math.round(activeCheckpoint.demandAmount * 0.5) : 0;
    const finalAmount = activeCheckpoint.demandAmount - discount;
    const isPolice = activeCheckpoint.type === "police_sergeant";

    cngAudio.cash();
    set({
      cash: Math.max(0, cash - finalAmount),
      activeCheckpoint: null,
      gameState: "driving",
      metrics: {
        ...metrics,
        cash: Math.max(0, cash - finalAmount),
        totalChandaPaid: isPolice ? metrics.totalChandaPaid : metrics.totalChandaPaid + finalAmount,
        totalBribesPaid: isPolice ? metrics.totalBribesPaid + finalAmount : metrics.totalBribesPaid,
      },
    });

    return { success, discountAmount: discount };
  },

  escapeCheckpoint: () => {
    cngAudio.siren(true);
    set({
      activeCheckpoint: null,
      isChased: true,
      chaseTimerSec: 15,
      gameState: "driving",
    });
    get().triggerNitro();
  },

  checkChaseTick: (dtSec: number) => {
    const { isChased, chaseTimerSec, speedKmh, metrics } = get();
    if (!isChased) return;

    if (speedKmh > 45) {
      const remaining = chaseTimerSec - dtSec;
      if (remaining <= 0) {
        cngAudio.cash();
        set({
          isChased: false,
          chaseTimerSec: 0,
          metrics: {
            ...metrics,
            chasesEscaped: metrics.chasesEscaped + 1,
          },
        });
      } else {
        set({ chaseTimerSec: remaining });
      }
    } else {
      set({ chaseTimerSec: Math.min(15, chaseTimerSec + dtSec * 0.5) });
    }
  },

  refillGas: () => {
    const cost = 250;
    const { cash } = get();
    if (cash < cost) return;
    cngAudio.cash();
    set({
      cash: cash - cost,
      gasPressureBar: 200,
    });
  },

  openGarage: () => set({ gameState: "garage" }),
  closeGarage: () => set({ gameState: "driving" }),

  endShift: () => set({ gameState: "game_over" }),

  resetGame: () => {
    cngAudio.setRain(false);
    set({
      gameState: "menu",
      weather: "sunny",
      cash: 1200,
      gasPressureBar: 180,
      speedKmh: 0,
      distanceTraveledMeters: 0,
      currentPassenger: null,
      pendingPassengerHail: null,
      activeCheckpoint: null,
      isChased: false,
      chaseTimerSec: 0,
      passengerProgressRatio: 0,
      activeStreetEvent: null,
      tripCompleteToast: null,
    });
  },
}));
