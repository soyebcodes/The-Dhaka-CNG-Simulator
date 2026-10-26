"use client";

import { motion } from "framer-motion";
import { useGameStore } from "../../store/game-store";

export default function StartScreenModal() {
  const { startShift, gameState } = useGameStore();

  if (gameState !== "menu") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-xl rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#14231b] via-[#0c1511] to-black p-6 md:p-8 text-white shadow-2xl shadow-emerald-950/60"
      >
        {/* Header Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-4xl shadow-lg shadow-emerald-900/60 border border-emerald-400/40">
            🛺
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              সিএনজি হ্যাসেল
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/40">
                ঢাকা ক্রনিকলস
              </span>
            </h1>
            <p className="mt-1 text-xs md:text-sm font-medium text-emerald-300">
              &ldquo;মিটার চলে না মামা!&rdquo; — চাঁদাবাজি আর সার্জেন্টের প্যাঁচ ঠেলে ঢাকা কাঁপান!
            </p>
          </div>
        </div>

        {/* Gameplay Guide */}
        <div className="mt-6 rounded-2xl bg-black/50 p-4 border border-white/10 space-y-2.5 text-xs text-white/85">
          <p className="font-bold text-amber-300 text-sm mb-1">কীভাবে খেলবেন:</p>
          <div className="flex items-start gap-2.5">
            <span className="text-base">🚖</span>
            <p><strong>যাত্রী তুলুন:</strong> ফার্মগেট, ধানমন্ডি, গুলশানের যাত্রীদের তুলে ভাড়ার টাকা আয় করুন।</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-base">✋</span>
            <p><strong>চাঁদাবাজ ও সার্জেন্ট:</strong> রাস্তায় বড় ভাই আর সার্জেন্ট আটকালে টাকা দিয়ে মিটমাট করুন, খাতির করে ছাড় নিন, অথবা গ্যাস চেপে পালান!</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-base">🚨</span>
            <p><strong>ধাওয়া মোড:</strong> চাঁদা ফাঁকি দিলে টানা ১৫ সেকেন্ড ৪৫+ গতিতে টানুন—স্পিড কমলে কিন্তু ধরা!</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-base">📢</span>
            <p><strong>হর্ন (H) ও নাইট্রো (Shift):</strong> ঢাকার জ্যামে হর্ন দিলে সামনের গাড়ি সরে যায়। জরুরি মুহূর্তে নাইট্রো বুস্ট চাপুন!</p>
          </div>
        </div>

        {/* Controls Hint */}
        <div className="mt-4 rounded-xl bg-white/5 p-3 text-[11px] text-white/60 flex flex-wrap justify-between gap-2 border border-white/5">
          <span>⌨️ W/↑ গ্যাস • S/↓ ব্রেক • A/D স্টিয়ারিং</span>
          <span>Space ড্রিফট • H হর্ন • Shift নাইট্রো</span>
        </div>

        {/* Start Button */}
        <button
          onClick={startShift}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-base font-black text-white shadow-xl shadow-emerald-950/60 transition-all active:scale-98 hover:brightness-110 flex items-center justify-center gap-2"
        >
          <span>শিফট শুরু করুন (START DRIVING)</span>
          <span className="text-lg">▶</span>
        </button>

        {/* Disclaimer */}
        <p className="mt-3 text-center text-[10px] text-white/40">
          এটি একটি ব্যঙ্গাত্মক বিনোদনমূলক গেম। সকল চরিত্র ও ঘটনা কাল্পনিক।
        </p>
      </motion.div>
    </div>
  );
}
