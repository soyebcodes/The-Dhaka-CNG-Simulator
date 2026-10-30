"use client";

import { motion } from "framer-motion";
import { useGameStore } from "../../store/game-store";

export default function GameOverModal() {
  const { gameState, metrics, resetGame, startShift } = useGameStore();

  if (gameState !== "game_over") return null;

  const netIncome =
    metrics.totalFaresEarned - (metrics.totalChandaPaid + metrics.totalBribesPaid);

  let title = "দিনের সমাপ্তি হিসাব!";
  let badgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/30";
  if (netIncome > 80) {
    title = "সফল দিন! পকেটে বেশ ভালো আয় জমা হয়েছে!";
    badgeColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
  } else if (netIncome >= 0) {
    title = "দিনের খরচ ও চালের টাকা উঠে এসেছে!";
    badgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/30";
  }

  const handlePlayAgain = () => {
    resetGame();
    startShift();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-3xl border-2 border-amber-600/50 bg-gradient-to-b from-[#24190f] via-[#150f08] to-black p-6 md:p-8 text-amber-50 shadow-2xl"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
            <span>🚖</span>
            <span>ঢাকা বেবিট্যাক্সি ১৯৮৫ • সমাপ্তি হিসাব</span>
          </div>
          <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold border ${badgeColor}`}>
            দিনের ট্রিপ বিবরণ
          </span>
          <h2 className="mt-2 text-2xl font-bold text-amber-100">{title}</h2>
          <p className="mt-1 text-xs text-amber-200/70">
            আশির দশকের পুরান ঢাকা ও দিলকুশার পথে আজকের আয় ও খরচের খতিয়ান
          </p>
        </div>

        {/* Ledger Breakdown Card */}
        <div className="mt-6 rounded-2xl bg-black/60 p-4 border border-amber-900/40 space-y-3 text-sm">
          <div className="flex justify-between items-center text-amber-100">
            <span>যাত্রীদের ভাড়া বাবদ মোট আয়:</span>
            <span className="font-extrabold text-emerald-400">+৳ {metrics.totalFaresEarned.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center text-amber-200/80">
            <span>রাস্তার টোল ও ক্লাবের ফি:</span>
            <span className="font-extrabold text-amber-400">-৳ {metrics.totalChandaPaid.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center text-amber-200/80">
            <span>ট্রাফিক জরিমানা ও ফি:</span>
            <span className="font-extrabold text-amber-400">-৳ {metrics.totalBribesPaid.toLocaleString()}</span>
          </div>

          <div className="h-[1px] bg-amber-500/20 my-1" />

          <div className="flex justify-between items-center text-base font-black">
            <span>দিনশেষে অর্জিত সঞ্চয়:</span>
            <span className={netIncome >= 0 ? "text-emerald-400" : "text-rose-400"}>
              ৳ {netIncome.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
          <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
            <p className="text-[10px] text-white/50">সম্পন্ন ট্রিপ</p>
            <p className="text-base font-bold text-emerald-300">{metrics.tripsCompleted}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
            <p className="text-[10px] text-white/50">মোট অতিক্রান্ত দূরত্ব</p>
            <p className="text-base font-bold text-amber-300">
              {(metrics.distanceTraveledMeters / 1000).toFixed(1)} কিমি
            </p>
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={handlePlayAgain}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-600 py-3.5 text-sm font-bold text-stone-950 shadow-lg shadow-amber-950/70 transition-all hover:brightness-110 active:scale-95"
        >
          নতুন ট্রিপ শুরু করুন 🚖
        </button>
      </motion.div>
    </div>
  );
}