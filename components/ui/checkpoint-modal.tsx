"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useGameStore } from "../../store/game-store";

export default function CheckpointModal() {
  const { activeCheckpoint, cash, payCheckpoint, bargainCheckpoint, escapeCheckpoint } = useGameStore();
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!activeCheckpoint) return null;

  const isPolice = activeCheckpoint.type === "police_sergeant";

  const handleBargain = () => {
    const res = bargainCheckpoint();
    if (res.success) {
      setFeedback(`মামা খাতির সফল! ৳ ${res.discountAmount} মাফ করে দিছে!`);
    } else {
      setFeedback("কোনো ছাড় নাই! পুরো টাকাই দিতে হলো!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className={`w-full max-w-lg rounded-3xl border-2 p-6 text-white shadow-2xl backdrop-blur-xl ${
          isPolice
            ? "border-blue-500/50 bg-gradient-to-b from-blue-950/90 to-black/95 shadow-blue-950/50"
            : "border-amber-500/50 bg-gradient-to-b from-amber-950/90 to-black/95 shadow-amber-950/50"
        }`}
      >
        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-inner ${
              isPolice ? "bg-blue-600 text-white" : "bg-amber-600 text-white"
            }`}
          >
            {isPolice ? "👮" : "✋"}
          </div>
          <div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                isPolice ? "bg-blue-500/30 text-blue-300" : "bg-amber-500/30 text-amber-300"
              }`}
            >
              ব্যারিকেড মুখোমুখি
            </span>
            <h2 className="text-xl font-black text-white">{activeCheckpoint.titleBn}</h2>
          </div>
        </div>

        {/* Dialogue Bubble */}
        <div className="mt-4 rounded-2xl bg-black/50 p-4 border border-white/10">
          <p className="text-xs text-white/60 mb-1 font-semibold">{activeCheckpoint.subBn}</p>
          <p className="text-base font-bold italic text-yellow-200">
            &ldquo;{activeCheckpoint.dialogueBn}&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
            <span className="text-xs text-white/70">দাবিকৃত চাঁদা / ফি:</span>
            <span className="text-lg font-black text-rose-400">৳ {activeCheckpoint.demandAmount}</span>
          </div>
        </div>

        {/* Feedback Message */}
        {feedback && (
          <p className="mt-3 text-center text-xs font-bold text-emerald-300 animate-pulse">{feedback}</p>
        )}

        {/* Action Choices */}
        <div className="mt-6 flex flex-col gap-2.5">
          {/* Option 1: Pay */}
          <button
            onClick={payCheckpoint}
            disabled={cash < activeCheckpoint.demandAmount}
            className={`flex items-center justify-between rounded-2xl p-3.5 font-bold transition-all active:scale-95 ${
              cash >= activeCheckpoint.demandAmount
                ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-950/40"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">💸</span>
              <div className="text-left">
                <p className="text-sm">টাকা দিয়ে পার হন</p>
                <p className="text-[10px] text-emerald-200">ঝামেলা ছাড়াই নিরাপদে বেরিয়ে যান</p>
              </div>
            </div>
            <span className="text-sm font-black">-৳ {activeCheckpoint.demandAmount}</span>
          </button>

          {/* Option 2: Bargain / Sweet Talk */}
          <button
            onClick={handleBargain}
            className="flex items-center justify-between rounded-2xl bg-amber-600/90 p-3.5 font-bold text-white transition-all active:scale-95 hover:bg-amber-500 shadow-lg shadow-amber-950/40"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🤝</span>
              <div className="text-left">
                <p className="text-sm">তেল মর্দন / খাতির জমান</p>
                <p className="text-[10px] text-amber-200">৫০% ডিসকাউন্টের সুযোগ নিন</p>
              </div>
            </div>
            <span className="text-xs font-black">দরদাম</span>
          </button>

          {/* Option 3: Escape & Punch Throttle */}
          <button
            onClick={escapeCheckpoint}
            className="flex items-center justify-between rounded-2xl bg-rose-600 p-3.5 font-bold text-white transition-all active:scale-95 hover:bg-rose-500 shadow-lg shadow-rose-950/40"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🏎️💨</span>
              <div className="text-left">
                <p className="text-sm">গ্যাস চেপে পালিয়ে যান!</p>
                <p className="text-[10px] text-rose-200">ধাওয়ার ঝুঁকি নিয়ে ১ পয়সাও না দিয়ে পালান</p>
              </div>
            </div>
            <span className="text-xs font-black uppercase text-yellow-300">ধাওয়া মোড</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
