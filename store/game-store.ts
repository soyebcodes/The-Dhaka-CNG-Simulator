import { create } from "zustand";
import type { Checkpoint, Destination, GameMetrics, Passenger } from "../types/game";
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
];

export const PASSENGER_PRESETS: Array<Omit<Passenger, "id" | "pickupDistance" | "dropDistance">> = [
  {
    nameBn: "অফিস ফেরত সজল সাহেব",
    avatar: "👨‍💼",
    dialogueBn: "মামা, ফার্মগেট যান? জ্যামের আগে পৌঁছাতে পারলে ৩০ টাকা বখশিশ দিমু!",
    destination: DESTINATIONS[0],
    fareOffer: 190,
    isUrgent: true,
    patienceSec: 35,
  },
  {
    nameBn: "ঢাকা ভার্সিটির রিয়া",
    avatar: "👩‍🎓",
    dialogueBn: "মামা ধানমন্ডি ২৭ যাবেন? কিন্তু মিটারে যাবেন তো? মিটারের চেয়ে বেশি নাই!",
    destination: DESTINATIONS[2],
    fareOffer: 180,
    isUrgent: false,
    patienceSec: 45,
  },
  {
    nameBn: "বিরিয়ানি শিকারি রাকিব",
    avatar: "🧑‍🍳",
    dialogueBn: "মামা সোজা পুরান ঢাকা টানেন! কাচ্চির ক্ষুধা লাগছে, ডানে-বামে কাটবেন না!",
    destination: DESTINATIONS[4],
    fareOffer: 250,
    isUrgent: false,
    patienceSec: 40,
  },
  {
    nameBn: "করপোরেট বস্‌ আসিফ",
    avatar: "🕶️",
    dialogueBn: "গুলশান ১ আর্জেন্ট মিটিং! ভিআইপি ফ্লাইওভার দিয়া টানেন, যত টাকা লাগে দিমু!",
    destination: DESTINATIONS[3],
    fareOffer: 350,
    isUrgent: true,
    patienceSec: 30,
  },
  {
    nameBn: "ব্যাগভর্তি খালাম্মা",
    avatar: "🧕",
    dialogueBn: "মিরপুর যাব বাবা। সাবধানে চালাবা, ঝাঁকি দিও না, ডিমের খাঁচি আছে!",
    destination: DESTINATIONS[1],
    fareOffer: 230,
    isUrgent: false,
    patienceSec: 50,
  },
];

interface GameState {
  gameState: "menu" | "driving" | "passenger_modal" | "checkpoint_modal" | "game_over" | "garage";
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

  // Actions
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

  metrics: {
    cash: 1200,
    totalChandaPaid: 0,
    totalBribesPaid: 0,
    totalFaresEarned: 0,
    tripsCompleted: 0,
    chasesEscaped: 0,
    distanceTraveledMeters: 0,
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
    const { speedKmh, distanceTraveledMeters, gasPressureBar, currentPassenger } = get();
    const distanceDelta = (speedKmh * 1000 * dtSec) / 3600;
    const newDist = distanceTraveledMeters + distanceDelta;
    const newGas = Math.max(0, gasPressureBar - distanceDelta * 0.0035);

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
    set({
      cash: cash + fare,
      currentPassenger: null,
      passengerProgressRatio: 0,
      metrics: {
        ...metrics,
        cash: cash + fare,
        totalFaresEarned: metrics.totalFaresEarned + fare,
        tripsCompleted: metrics.tripsCompleted + 1,
      },
    });
  },

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

    // Must maintain high speed (> 45 km/h) to escape
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
      // Slowing down resets the escape meter!
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
    set({
      gameState: "menu",
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
    });
  },
}));
