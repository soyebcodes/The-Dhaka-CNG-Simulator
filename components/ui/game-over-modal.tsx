"use client";

import { motion } from "framer-motion";
import { useGameStore } from "../../store/game-store";

export default function GameOverModal() {
  const { gameState, metrics, resetGame, startShift } = useGameStore();

  if (gameState !== "game_over") return null;

  const netIncome =
    metrics.totalFaresEarned - (metrics.totalChandaPaid + metrics.totalBribesPaid);

  let title = "পকেট খালি ড্রাইভার!";
  let badgeColor = "bg-rose-500/20 text-rose-300 border-rose-500/30";
  if (netIncome > 500) {
    title = "উস্তাদ সিএনজি ড্রাইভার! পকেট গরম!";
    badgeColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
  } else if (netIncome >= 0) {
    title = "মোটামুটি দিন কাটল! ডাল-ভাত বেঁচে গেল!";
    badgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/30";
  }

  const handlePlayAgain = () => {
    resetGame();
    startShift();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#17201b] via-[#0c1410] to-black p-6 md:p-8 text-white shadow-2xl"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-black text-emerald-400 mb-1">
            <span>🛺</span>
            <span>যামু না মামা! • The Dhaka CNG Simulator</span>
          </div>
          <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold border ${badgeColor}`}>
            শিফট সমাপ্তি হিসাব-নিকাশ
          </span>
          <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
          <p className="mt-1 text-xs text-white/60">
            আজকে ঢাকা শহরে কত আয় হলো আর কত গেল চাঁদায় — দেখে নিন!
          </p>
        </div>

        {/* Ledger Breakdown Card */}
        <div className="mt-6 rounded-2xl bg-black/60 p-4 border border-white/10 space-y-3 text-sm">
          <div className="flex justify-between items-center text-white/90">
            <span>যাত্রীদের থেকে মোট ভাড়া আয়:</span>
            <span className="font-extrabold text-emerald-400">+৳ {metrics.totalFaresEarned.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center text-white/80">
            <span>এলাকার বড় ভাইদের চাঁদা:</span>
            <span className="font-extrabold text-rose-400">-৳ {metrics.totalChandaPaid.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center text-white/80">
            <span>ট্রাফিক সার্জেন্টের চা-পানি:</span>
            <span className="font-extrabold text-rose-400">-৳ {metrics.totalBribesPaid.toLocaleString()}</span>
          </div>

          <div className="h-[1px] bg-white/20 my-1" />

          <div className="flex justify-between items-center text-base font-black">
            <span>দিনশেষে পকেটে খাঁটি লাভ:</span>
            <span className={netIncome >= 0 ? "text-emerald-400" : "text-rose-400"}>
              ৳ {netIncome.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
            <p className="text-[10px] text-white/50">সম্পন্ন ট্রিপ</p>
            <p className="text-base font-black text-emerald-300">{metrics.tripsCompleted}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
            <p className="text-[10px] text-white/50">ধাওয়া এড়ানো</p>
            <p className="text-base font-black text-cyan-300">{metrics.chasesEscaped}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
            <p className="text-[10px] text-white/50">মোট দূরত্ব</p>
            <p className="text-base font-black text-amber-300">
              {Math.round(metrics.distanceTraveledMeters)} মি.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={resetGame}
            className="flex-1 rounded-2xl bg-white/10 p-3.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
          >
            মূল মেন্যু
          </button>
          <button
            onClick={handlePlayAgain}
            className="flex-1 rounded-2xl bg-emerald-600 p-3.5 text-xs font-black text-white shadow-lg shadow-emerald-950/60 transition-all active:scale-95 hover:bg-emerald-500"
          >
            আবার চালান (PLAY AGAIN)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
