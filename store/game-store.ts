import { create } from "zustand";
import type { Checkpoint, Destination, GameMetrics, Passenger, StreetEvent, WeatherType } from "../types/game";
import { cngAudio } from "../lib/cng-audio";

export const DESTINATIONS: Destination[] = [
  {
    id: "farmgate",
    nameBn: "ফার্মগেট (Farmgate Cinema Hall)",
    distanceMeters: 650,
    baseFare: 15,
    zoneType: "commercial",
  },
  {
    id: "motijheel",
    nameBn: "মতিঝিল দিলকুশা (DILKUSHA Commercial Area)",
    distanceMeters: 850,
    baseFare: 20,
    zoneType: "commercial",
  },
  {
    id: "new_market",
    nameBn: "নিউ মার্কেট তোরণ (New Market)",
    distanceMeters: 750,
    baseFare: 18,
    zoneType: "market",
  },
  {
    id: "sadarghat",
    nameBn: "সদরঘাট লঞ্চ টার্মিনাল (Sadarghat)",
    distanceMeters: 950,
    baseFare: 25,
    zoneType: "market",
  },
  {
    id: "baitul_mukarram",
    nameBn: "বায়তুল মোকাররম চত্বর (Baitul Mukarram)",
    distanceMeters: 700,
    baseFare: 16,
    zoneType: "commercial",
  },
  {
    id: "shahbag",
    nameBn: "শাহবাগ মোড় ও পিজি হাসপাতাল (Shahbag)",
    distanceMeters: 600,
    baseFare: 14,
    zoneType: "cultural",
  },
  {
    id: "dhaka_university",
    nameBn: "ঢাকা বিশ্ববিদ্যালয় কার্জন হল (Curzon Hall)",
    distanceMeters: 800,
    baseFare: 18,
    zoneType: "cultural",
  },
  {
    id: "gulistan",
    nameBn: "গুলিস্তান সিনেমা হল (Gulistan Cinema)",
    distanceMeters: 900,
    baseFare: 22,
    zoneType: "commercial",
  },
];

// 🌧️ 80s Monsoon Rainy Passengers
export const RAIN_PASSENGER_PRESETS: Array<Omit<Passenger, "id" | "pickupDistance" | "dropDistance">> = [
  {
    nameBn: "কালো ছাতাওয়ালা শিক্ষক নুরুল ইসলাম",
    avatar: "👨‍🏫",
    dialogueBn: "ড্রাইভার সাব! নিউ মার্কেট যাবেন? বৃষ্টিতে জরুরি বই ভিজে যাচ্ছে।",
    driverReplyBn: "উস্তাদ ওঠেন! হুড টেনে দিচ্ছি, বৃষ্টি এক ফোঁটাও লাগবে না।",
    topicTag: "বৃষ্টির ঢাকা",
    destination: DESTINATIONS[2],
    fareOffer: 25,
    isUrgent: true,
    patienceSec: 35,
    isRainOnly: true,
  },
  {
    nameBn: "অফিসকর্মী সালেহ আহমেদ",
    avatar: "💼",
    dialogueBn: "ভাই মতিঝিল ব্যাংক পাড়া যাবেন? রাস্তায় পানি জমে গেছে, সময়মতো পৌঁছাতে হবে।",
    driverReplyBn: "চলেন ভাইজান, ইঞ্জিনে পানি ঢোকার আগেই মতিঝিল নামিয়ে দিচ্ছি।",
    topicTag: "বৃষ্টির ঢাকা",
    destination: DESTINATIONS[1],
    fareOffer: 30,
    isUrgent: true,
    patienceSec: 30,
    isRainOnly: true,
  },
  {
    nameBn: "লঞ্চযাত্রী মাজেদা বেগম",
    avatar: "🧕",
    dialogueBn: "বাবা সদরঘাট যাবা? বরিশালের শেষ স্টিমার ছেড়ে দেবে সন্ধ্যার আগে!",
    driverReplyBn: "খালাম্মা সাবধানে ওঠেন, লঞ্চঘাটের আগেই আপনাকে পৌঁছে দেব।",
    topicTag: "সদরঘাট ঘাট",
    destination: DESTINATIONS[3],
    fareOffer: 35,
    isUrgent: true,
    patienceSec: 32,
    isRainOnly: true,
  },
];

// ☀️ 80s Classic Dhaka Passenger Stories
export const PASSENGER_PRESETS: Array<Omit<Passenger, "id" | "pickupDistance" | "dropDistance">> = [
  {
    nameBn: "বেতার শিল্পী নাজমুন নাহার",
    avatar: "📻",
    dialogueBn: "শাহবাগ বেতার ভবনে লাইভ নাটকের রেকর্ডিং আছে। একটু দ্রুত টানবেন?",
    driverReplyBn: "বেতার ভবনের অনুষ্ঠান আমিও রেডিওতে শুনি আপা! সময়মতো পৌঁছে দেব।",
    topicTag: "ঢাকা বেতার",
    destination: DESTINATIONS[5],
    fareOffer: 22,
    isUrgent: true,
    patienceSec: 30,
  },
  {
    nameBn: "মধু কান্টিনের ছাত্রনেতা রফিক",
    avatar: "🎓",
    dialogueBn: "উস্তাদ! কার্জন হল চলেন। ডিপার্টমেন্টে সেমিনার শুরু হবে।",
    driverReplyBn: "ছাত্র ভাইদের জন্য সবসময় পথ খোলা! ওঠেন ভাইজান!",
    topicTag: "বিশ্ববিদ্যালয়",
    destination: DESTINATIONS[6],
    fareOffer: 18,
    isUrgent: false,
    patienceSec: 40,
  },
  {
    nameBn: "গুলিস্তান সিনেমা হলগামী মোস্তফা",
    avatar: "🎬",
    dialogueBn: "গুলিস্তান হলে রাজ্জাক-কবরীর নতুন সিনেমার ম্যাটিনি শো! দেরি হলে টিকিট পাব না!",
    driverReplyBn: "সিনেমার শো মিস হতে দেব না ভাই! সিট বেল্ট নাই, শক্ত করে ধরেন!",
    topicTag: "ম্যাটিনি শো",
    destination: DESTINATIONS[7],
    fareOffer: 25,
    isUrgent: true,
    patienceSec: 25,
  },
  {
    nameBn: "দিলকুশার হিসাবরক্ষক মনসুর আলী",
    avatar: "👓",
    dialogueBn: "মতিঝিল বাংলাদেশ ব্যাংক চত্বর যাবেন? মাসের শেষ দিন, হিসাব মেলাতে হবে।",
    driverReplyBn: "মতিঝিলের চত্বর তো আমার চেনা পথ! ওঠেন সাহেব।",
    topicTag: "মতিঝিল পাড়া",
    destination: DESTINATIONS[1],
    fareOffer: 24,
    isUrgent: false,
    patienceSec: 45,
  },
  {
    nameBn: "পুরান ঢাকার বাকরখানি কারিগর করিম",
    avatar: "🥐",
    dialogueBn: "সদরঘাট যাব ভাই, তাজা বাকরখানির খামির আর মসলা আনতে হবে।",
    driverReplyBn: "সুস্বাদু বাকরখানির গন্ধ পেয়ে মনটা ভালো হয়ে গেল! চলেন দ্রুত নামিয়ে দেই।",
    topicTag: "পুরান ঢাকা",
    destination: DESTINATIONS[3],
    fareOffer: 28,
    isUrgent: false,
    patienceSec: 38,
  },
  {
    nameBn: "নিউ মার্কেটের বইপ্রেমী সামিরা",
    avatar: "📚",
    dialogueBn: "নিউ মার্কেটের বুক স্টলে নতুন উপন্যাসের কপি এসেছে। ফার্মগেট থেকে নিয়ে চলুন।",
    driverReplyBn: "বইয়ের চেয়ে মূল্যবান কিছু নাই আপা, গাড়ি এখনই স্টার্ট দিচ্ছি।",
    topicTag: "নিউ মার্কেট",
    destination: DESTINATIONS[2],
    fareOffer: 20,
    isUrgent: false,
    patienceSec: 45,
  },
  {
    nameBn: "বায়তুল মোকাররমের আতর ব্যবসায়ী শওকত",
    avatar: "🕌",
    dialogueBn: "বায়তুল মোকাররম গেটে চলেন ভাই, আসরের নামাজের পর মুসল্লিদের ভিড় হবে।",
    driverReplyBn: "আজানের আগেই পৌঁছে দেব ইনশাল্লাহ, বসেন আরাম করে।",
    topicTag: "বায়তুল মোকাররম",
    destination: DESTINATIONS[4],
    fareOffer: 22,
    isUrgent: true,
    patienceSec: 30,
  },
  {
    nameBn: "ফার্মগেটের সাপ্তাহিক পত্রিকার রিপোর্টার তারেক",
    avatar: "📰",
    dialogueBn: "ফার্মগেট মোড়ে চলেন! বিচিত্রা পত্রিকার শেষ প্রুফ প্রেসে জমা দিতে হবে।",
    driverReplyBn: "প্রেসের ডেডলাইন ভাঙা যাবে না ভাই! এখনই টান দিচ্ছি।",
    topicTag: "সংবাদপত্র",
    destination: DESTINATIONS[0],
    fareOffer: 26,
    isUrgent: true,
    patienceSec: 24,
  },
  {
    nameBn: "স্টেডিয়ামগামী ফুটবলপ্রেমী বাবুল",
    avatar: "⚽",
    dialogueBn: "মতিঝিল ঢাকা স্টেডিয়াম চলেন ভাই! আজ আবাহনী-মোহামেডান খেলা, সালাউদ্দিন ভাইয়ের শেষ ম্যাচ দেখতে হবে!",
    driverReplyBn: "আজকের ডার্বি ম্যাচ তো মিস করা যাবে না! চলুন স্টেডিয়াম গেটে নামিয়ে দিচ্ছি!",
    topicTag: "স্টেডিয়াম ডার্বি",
    destination: DESTINATIONS[1],
    fareOffer: 26,
    isUrgent: true,
    patienceSec: 28,
  },
  {
    nameBn: "ক্যাসেট ও ভিনাইল রেকর্ড সংগ্রাহক শফিক",
    avatar: "🎵",
    dialogueBn: "নিউ মার্কেটের সুরবিতান দোকানে চলেন, রুনা লায়লা ও সুবীর নন্দীর নতুন ক্যাসেট এসেছে!",
    driverReplyBn: "আমাদের বেবিট্যাক্সির রেডিওতেও বাজছে গান! ওঠেন ভাই, মন ভালো করা গান শুনে আসি।",
    topicTag: "গ্রামোফোন ও ক্যাসেট",
    destination: DESTINATIONS[2],
    fareOffer: 22,
    isUrgent: false,
    patienceSec: 42,
  },
  {
    nameBn: "মধুমিতা সিনেমা হলগামী জোবায়দা বেগম",
    avatar: "🎞️",
    dialogueBn: "মতিঝিল মধুমিতা হলে চলেন ভাই, নতুন রঙিন ছায়াছবি 'নয়নমণি' শুরু হয়ে যাবে!",
    driverReplyBn: "রঙিন পর্দার রাজ্জাক সাহেবের ছবি তো সারা শহরে তোলপাড়! সময়মতো পৌঁছাবেন ইনশাল্লাহ।",
    topicTag: "মধুমিতা সিনেমা",
    destination: DESTINATIONS[1],
    fareOffer: 25,
    isUrgent: true,
    patienceSec: 28,
  },
  {
    nameBn: "ডাক বিভাগের রানার হরিপদ",
    avatar: "✉️",
    dialogueBn: "গুলিস্তান জিপিও মোড়ে জরুরি মানিঅর্ডার ও চিঠির বস্তা পৌঁছাতে হবে। তাড়াতাড়ি যাবেন?",
    driverReplyBn: "চিঠির ব্যাগে মানুষের কত মায়ার বার্তা থাকে! ওঠেন হরিপদ কাকা, দ্রুত পৌঁছে দেব।",
    topicTag: "ঢাকা জিপিও",
    destination: DESTINATIONS[7],
    fareOffer: 24,
    isUrgent: true,
    patienceSec: 25,
  },
  {
    nameBn: "শাঁখারীবাজারের মিষ্টি কারিগর গৌরাঙ্গ",
    avatar: "🍯",
    dialogueBn: "সদরঘাট টার্মিনাল চলেন দাদা, বিক্রমপুর থেকে ছানা ও খাঁটি গাওয়া ঘি নিয়ে ফিরতে হবে।",
    driverReplyBn: "পুরান ঢাকার খাঁটি মিষ্টির কথা শুনলেই মুখে জল আসে দাদা! আসুন গাড়িতে উঠুন।",
    topicTag: "শাঁখারীবাজার",
    destination: DESTINATIONS[3],
    fareOffer: 27,
    isUrgent: false,
    patienceSec: 40,
  },
  {
    nameBn: "কার্জন হলের রসায়ন গবেষক ড. কায়কোবাদ",
    avatar: "🔬",
    dialogueBn: "কার্জন হলের সায়েন্স ল্যাবরেটরিতে জরুরি বৈজ্ঞানিক জার্নাল নিয়ে পৌঁছাতে হবে।",
    driverReplyBn: "আমাদের দেশের বিজ্ঞানীদের দেখলে বুক ভরে যায় স্যার! গাড়ি এখনই চালু করছি।",
    topicTag: "বিজ্ঞান ভবন",
    destination: DESTINATIONS[6],
    fareOffer: 20,
    isUrgent: false,
    patienceSec: 45,
  },
  {
    nameBn: "ফার্মগেটের সাপ্তাহিক সিনেমা ম্যাগাজিন বিক্রেতা",
    avatar: "🗞️",
    dialogueBn: "ফার্মগেট ওভারব্রিজের নিচে চলেন, চিত্রালী ম্যাগাজিন নেওয়ার জন্য ভিড় জমে গেছে!",
    driverReplyBn: "শাবানা আপা আর আলমগীরের সাক্ষাৎকার নিশ্চয়ই আছে এই সংখ্যায়! চলেন ভাই।",
    topicTag: "চিত্রালী পত্রিকা",
    destination: DESTINATIONS[0],
    fareOffer: 20,
    isUrgent: false,
    patienceSec: 35,
  },
];

// 📻 80s Dhaka Radio (বাংলাদেশ বেতার ঢাকা ক কেন্দ্র)
export const RADIO_LINES: string[] = [
  "বাংলাদেশ বেতার, ঢাকা: সুরের বাঁধনে গান শুনছেন প্রতিদিনের মতো।",
  "বেতার খবর: মতিঝিল বাণিজ্যিক এলাকায় যান চলাচল স্বাভাবিক ও শান্তিপূর্ণ।",
  "সিনেমা সংবাদ: গুলিস্তান ও মধুমিতা সিনেমা হলে চলছে রাজ্জাক-শাবানার জনপ্রিয় ছায়াছবি।",
  "ঢাকা শহরের আবহাওয়া: হালকা মেঘলা আকাশ, নদী অববাহিকায় কুয়াশা পড়তে পারে।",
  "যানবাহন পরামর্শ: বেবিট্যাক্সি ও রিকশাচালক ভাইয়েরা ট্রাফিক সংকেত মেনে চলুন।",
  "কৃষি বার্তা: চলতি মৌসুমে ফসলের বাম্পার ফলনের আশা করছে কৃষি অধিদপ্তর।",
  "খেলাধুলা: ঢাকা স্টেডিয়ামে আজ আবাহনী বনাম মোহামেডান মহারণ!",
  "ঘড়ির কাঁটায় এখন বিকেল পাঁচটা বেজে তিরিশ মিনিট। শুনছেন সান্ধ্যকালীন অধিবেশন।",
];

export const TRIP_COMPLETE_PHRASES = [
  { emoji: "🤝", text: "ধন্যবাদ ভাই! পথ নিরাপদ হোক।" },
  { emoji: "📻", text: "বেতারের গান শুনতে শুনতে বেশ ভালোই পৌঁছালাম!" },
  { emoji: "🪙", text: "ভাড়ার সাথে খুচরো পয়সাটা রেখে দিন, ভালো লাগলে আবার ডাকবেন।" },
  { emoji: "☕", text: "পথের ক্লান্তি কাটাতে মোড়ের দোকানে এক কাপ লাল চা খেয়ে নিন।" },
  { emoji: "🎬", text: "চলচ্চিত্রের শুরুতেই পৌঁছে গেলাম, অনেক ধন্যবাদ ড্রাইভার ভাই!" },
];

export const REJECT_BUTTON_TEXTS = [
  "আজ অন্য রুটে যাচ্ছি (বাদ দিন)",
  "তেল নিতে পাম্পে যাব (পরেরবার)",
  "গাড়ি গ্যারেজে নেওয়ার সময় হয়েছে",
  "মাফ করবেন ভাই, ওদিকে ভিড়",
];

export const ACCEPT_BUTTON_TEXTS = [
  "বিসমিল্লাহ বলে গাড়িতে উঠুন",
  "আসুন ভাই, সময়মতো পৌঁছে দেব",
  "চলুন, সুন্দরভাবে নামিয়ে দিচ্ছি",
  "চুক্তি ঠিক আছে, রওনা দিই",
];

export const STREET_EVENTS: Omit<StreetEvent, "id">[] = [
  { emoji: "📻", textBn: "বেতার খবরে বাজছে দেশাত্মবোধক গান ও সান্ধ্যকালীন সুর", durationSec: 6 },
  { emoji: "⚽", textBn: "ঢাকা স্টেডিয়ামে আজ আবাহনী-মোহামেডান ফুটবল খেলা!", durationSec: 6 },
  { emoji: "🚖", textBn: "সামনে ধীরগতির কাঠের বডির রিকশা ও টেম্পো চলছে", durationSec: 5 },
  { emoji: "🚂", textBn: "দূর থেকে ভেসে আসছে তেজগাঁও রেল ক্রসিংয়ের ঘণ্টার শব্দ", durationSec: 5 },
  { emoji: "📰", textBn: "ফার্মগেটে পত্রিকার সান্ধ্য সংস্করণ বিক্রি হচ্ছে", durationSec: 5 },
];

interface GameState {
  gameState: "menu" | "driving" | "garage" | "game_over";
  weather: WeatherType;
  cash: number;
  gasPressureBar: number; // Represents fuel / engine power (0 to 100)
  speedKmh: number;
  distanceTraveledMeters: number;
  currentPassenger: Passenger | null;
  pendingPassengerHail: Passenger | null;
  activeCheckpoint: Checkpoint | null;
  isChased: boolean;
  chaseTimerSec: number;
  passengerProgressRatio: number;
  isNitroActive: boolean;
  nitroReady: boolean;
  crashAlert: string | null;
  activeStreetEvent: StreetEvent | null;
  tripCompleteToast: { emoji: string; text: string } | null;
  metrics: GameMetrics;

  startShift: () => void;
  advanceDistance: (dtSec: number) => void;
  setSpeed: (speed: number) => void;
  hailPassenger: (passenger: Passenger) => void;
  acceptPassenger: () => void;
  rejectPassenger: () => void;
  completeTrip: () => void;
  setCheckpoint: (cp: Checkpoint) => void;
  payCheckpoint: () => void;
  bargainCheckpoint: () => { success: boolean; discountAmount: number };
  escapeCheckpoint: () => void;
  triggerNitro: () => void;
  recordCrash: (penalty: number, msg: string) => void;
  checkChaseTick: (dtSec: number) => void;
  refillGas: () => void;
  toggleWeather: () => void;
  dismissTripToast: () => void;
  openGarage: () => void;
  closeGarage: () => void;
  endShift: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  gameState: "menu",
  weather: "sunny",
  cash: 150,
  gasPressureBar: 100,
  speedKmh: 0,
  distanceTraveledMeters: 0,
  currentPassenger: null,
  pendingPassengerHail: null,
  activeCheckpoint: null,
  isChased: false,
  chaseTimerSec: 0,
  passengerProgressRatio: 0,
  isNitroActive: false,
  nitroReady: true,
  crashAlert: null,
  activeStreetEvent: null,
  tripCompleteToast: null,
  metrics: {
    cash: 150,
    totalChandaPaid: 0,
    totalBribesPaid: 0,
    totalFaresEarned: 0,
    tripsCompleted: 0,
    chasesEscaped: 0,
    distanceTraveledMeters: 0,
  },

  startShift: () => {
    cngAudio.ensureStarted();
    set({
      gameState: "driving",
      gasPressureBar: 100,
      crashAlert: null,
    });
  },

  toggleWeather: () => {
    const next = get().weather === "sunny" ? "rainy" : "sunny";
    cngAudio.setRain(next === "rainy");
    set({ weather: next });
  },

  dismissTripToast: () => set({ tripCompleteToast: null }),

  advanceDistance: (dtSec: number) => {
    const { speedKmh, distanceTraveledMeters, currentPassenger, gasPressureBar } = get();
    if (speedKmh <= 0) return;

    const metersAdvanced = (speedKmh * 1000 * dtSec) / 3600;
    const newDist = distanceTraveledMeters + metersAdvanced;
    const newFuel = Math.max(0, gasPressureBar - dtSec * 0.08);

    let progress = 0;
    if (currentPassenger) {
      const tripTotal = currentPassenger.dropDistance - currentPassenger.pickupDistance;
      const tripDone = newDist - currentPassenger.pickupDistance;
      progress = Math.min(1, Math.max(0, tripDone / Math.max(tripTotal, 1)));
      if (progress >= 1) {
        get().completeTrip();
        return;
      }
    }

    set({
      distanceTraveledMeters: newDist,
      gasPressureBar: newFuel,
      passengerProgressRatio: progress,
    });
  },

  setSpeed: (speed: number) => set({ speedKmh: Math.max(0, speed) }),

  hailPassenger: (passenger: Passenger) => {
    cngAudio.honk();
    set({ pendingPassengerHail: passenger });
  },

  acceptPassenger: () => {
    const { pendingPassengerHail } = get();
    if (!pendingPassengerHail) return;
    cngAudio.cash();
    set({
      currentPassenger: pendingPassengerHail,
      pendingPassengerHail: null,
      passengerProgressRatio: 0,
    });
  },

  rejectPassenger: () => {
    set({ pendingPassengerHail: null });
  },

  completeTrip: () => {
    const { currentPassenger, cash, metrics } = get();
    if (!currentPassenger) return;

    const fare = currentPassenger.fareOffer;
    cngAudio.cash();

    const randomFarewell =
      TRIP_COMPLETE_PHRASES[Math.floor(Math.random() * TRIP_COMPLETE_PHRASES.length)];

    set({
      cash: cash + fare,
      currentPassenger: null,
      passengerProgressRatio: 0,
      tripCompleteToast: randomFarewell,
      metrics: {
        ...metrics,
        cash: cash + fare,
        totalFaresEarned: metrics.totalFaresEarned + fare,
        tripsCompleted: metrics.tripsCompleted + 1,
      },
    });

    // Auto-dismiss trip complete toast after 2.8 seconds so it doesn't block the road
    setTimeout(() => {
      set({ tripCompleteToast: null });
    }, 2800);
  },

  setCheckpoint: (cp: Checkpoint) => {
    set({ activeCheckpoint: cp });
  },

  payCheckpoint: () => {
    const { activeCheckpoint, cash, metrics } = get();
    if (!activeCheckpoint) return;

    cngAudio.cash();
    const cost = activeCheckpoint.demandAmount;
    const newCash = Math.max(0, cash - cost);

    set({
      cash: newCash,
      activeCheckpoint: null,
      metrics: {
        ...metrics,
        cash: newCash,
        totalBribesPaid:
          activeCheckpoint.type === "traffic_police"
            ? metrics.totalBribesPaid + cost
            : metrics.totalBribesPaid,
        totalChandaPaid:
          activeCheckpoint.type !== "traffic_police"
            ? metrics.totalChandaPaid + cost
            : metrics.totalChandaPaid,
      },
    });
  },

  bargainCheckpoint: () => {
    const { activeCheckpoint, cash, metrics } = get();
    if (!activeCheckpoint) return { success: false, discountAmount: 0 };

    const success = Math.random() > 0.45;
    const discount = success ? Math.floor(activeCheckpoint.demandAmount * 0.4) : 0;
    const finalAmount = activeCheckpoint.demandAmount - discount;
    const newCash = Math.max(0, cash - finalAmount);

    cngAudio.cash();
    set({
      cash: newCash,
      activeCheckpoint: null,
      metrics: {
        ...metrics,
        cash: newCash,
        totalBribesPaid:
          activeCheckpoint.type === "traffic_police"
            ? metrics.totalBribesPaid + finalAmount
            : metrics.totalBribesPaid,
        totalChandaPaid:
          activeCheckpoint.type !== "traffic_police"
            ? metrics.totalChandaPaid + finalAmount
            : metrics.totalChandaPaid,
      },
    });

    return { success, discountAmount: discount };
  },

  escapeCheckpoint: () => {
    const { activeCheckpoint } = get();
    if (!activeCheckpoint) return;

    cngAudio.honk();
    set({
      activeCheckpoint: null,
      isChased: true,
      chaseTimerSec: 15,
    });
    get().triggerNitro();
  },

  triggerNitro: () => {
    const { nitroReady } = get();
    if (!nitroReady) return;

    cngAudio.nitro();
    set({ isNitroActive: true, nitroReady: false });

    setTimeout(() => {
      set({ isNitroActive: false });
    }, 4500);

    setTimeout(() => {
      set({ nitroReady: true });
    }, 12000);
  },

  recordCrash: (penalty: number, msg: string) => {
    const { cash, metrics } = get();
    const newCash = Math.max(0, cash - penalty);
    set({
      cash: newCash,
      crashAlert: msg,
      metrics: {
        ...metrics,
        cash: newCash,
      },
    });

    setTimeout(() => {
      set({ crashAlert: null });
    }, 4000);
  },

  checkChaseTick: (dtSec: number) => {
    const { isChased, chaseTimerSec, speedKmh, metrics } = get();
    if (!isChased) return;

    if (speedKmh > 28) {
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
    const cost = 25;
    const { cash } = get();
    if (cash < cost) return;
    cngAudio.cash();
    set({
      cash: cash - cost,
      gasPressureBar: 100,
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
      cash: 150,
      gasPressureBar: 100,
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