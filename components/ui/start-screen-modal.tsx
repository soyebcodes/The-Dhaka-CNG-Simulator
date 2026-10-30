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
        className="w-full max-w-xl rounded-3xl border-2 border-amber-600/50 bg-gradient-to-b from-[#2a1e12] via-[#1a130b] to-black p-6 md:p-8 text-amber-50 shadow-2xl shadow-amber-950/70"
      >
        {/* Header Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-600 text-4xl shadow-lg shadow-amber-900/60 border border-amber-400/50">
            🚖
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-300 border border-amber-500/40">
                ১৯৮০-এর দশক • আশির দশকের ঢাকা
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-amber-100 mt-1">
              ঢাকা বেবিট্যাক্সি ১৯৮৫
            </h1>
            <p className="mt-1 text-xs md:text-sm font-medium text-amber-200/80">
              রেডিওতে বাংলা গান, ফার্মগেট থেকে মতিঝিল দিলকুশা—আশির দশকের ঢাকার নস্টালজিক যাত্রা!
            </p>
          </div>
        </div>

        {/* Gameplay Guide */}
        <div className="mt-6 rounded-2xl bg-black/60 p-4 border border-amber-900/40 space-y-2.5 text-xs text-amber-100/90">
          <p className="font-bold text-amber-300 text-sm mb-1">কীভাবে খেলবেন:</p>
          <div className="flex items-start gap-2.5">
            <span className="text-base">🚖</span>
            <p><strong>যাত্রী তুলুন:</strong> ফার্মগেট সিনেমা হল, নিউ মার্কেট, কার্জন হল, মতিঝিল ও সদরঘাটের সম্মানিত যাত্রীদের সঠিক সময়ে নামিয়ে দিন।</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-base">🚌</span>
            <p><strong>আশির দশকের ট্রাফিক:</strong> ভিন্টেজ কাঠের বডির বাস, ঐতিহ্যবাহী রিকশা ও টেম্পোর ভিড় সামলে সতর্কভাবে ড্রাইভ করুন।</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-base">👮</span>
            <p><strong>ট্রাফিক পুলিশ ও রেল ক্রসিং:</strong> ট্রাফিক পুলিশ হাত দেখালে সংকেত মানুন বা অনুরোধ করে পথ পরিষ্কার করুন।</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-base">📻</span>
            <p><strong>বাংলাদেশ বেতার:</strong> ঢাকা ক কেন্দ্রের সান্ধ্যকালীন সংগীত ও দেশাত্মবোধক গান উপভোগ করতে করতে গাড়ি চালান।</p>
          </div>
        </div>

        {/* Controls Hint */}
        <div className="mt-4 rounded-xl bg-amber-950/30 p-3 text-[11px] text-amber-200/70 flex flex-wrap justify-between gap-2 border border-amber-500/20">
          <span>⌨️ W / ↑ এক্সিলারেটর • S / ↓ ব্রেক • A / D স্টিয়ারিং</span>
          <span>Space ব্রেক/স্লাইড • H ক্লাসিক হর্ন • Shift টার্বো টান</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={startShift}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 py-4 text-base font-black text-stone-950 shadow-xl shadow-amber-950/80 transition-all active:scale-95 hover:brightness-110 border border-yellow-300/50 flex items-center justify-center gap-2"
        >
          <span>বিসমিল্লাহ বলে বেবিট্যাক্সি স্টার্ট দিন</span>
          <span>🚖</span>
        </button>
      </motion.div>
    </div>
  );
}