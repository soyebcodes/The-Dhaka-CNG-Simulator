"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useGameStore } from "../../store/game-store";

export default function CheckpointModal() {
  const { activeCheckpoint, cash, payCheckpoint, bargainCheckpoint, escapeCheckpoint } = useGameStore();
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!activeCheckpoint) return null;

  const isPolice = activeCheckpoint.type === "traffic_police";

  const handleBargain = () => {
    const res = bargainCheckpoint();
    if (res.success) {
      setFeedback(`অনুরোধ রক্ষা হয়েছে! ৳ ${res.discountAmount} ছাড় পেয়ে গেছেন!`);
    } else {
      setFeedback("অনুরোধ মানা হয়নি! নির্ধারিত ফি প্রদান করতে হলো।");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className={`w-full max-w-lg rounded-3xl border-2 p-6 text-amber-50 shadow-2xl backdrop-blur-xl ${
          isPolice
            ? "border-blue-500/60 bg-gradient-to-b from-blue-950/90 to-black/95 shadow-blue-950/50"
            : "border-amber-600/60 bg-gradient-to-b from-[#2a1c0e]/95 to-black/95 shadow-amber-950/50"
        }`}
      >
        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-inner ${
              isPolice ? "bg-blue-600 text-white" : "bg-amber-600 text-stone-900"
            }`}
          >
            {isPolice ? "👮" : "🚦"}
          </div>
          <div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                isPolice ? "bg-blue-500/30 text-blue-200" : "bg-amber-500/30 text-amber-200"
              }`}
            >
              সড়ক সংকেত ও চেকপোস্ট
            </span>
            <h2 className="text-xl font-bold text-amber-100">{activeCheckpoint.titleBn}</h2>
          </div>
        </div>

        {/* Dialogue Bubble */}
        <div className="mt-4 rounded-2xl bg-black/60 p-4 border border-white/10">
          <p className="text-xs text-amber-200/70 mb-1 font-medium">{activeCheckpoint.subBn}</p>
          <p className="text-base font-semibold italic text-amber-200">
            &ldquo;{activeCheckpoint.dialogueBn}&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
            <span className="text-xs text-white/70">প্রদেয় চাঁদা / ফি:</span>
            <span className="text-lg font-black text-amber-400">৳ {activeCheckpoint.demandAmount}</span>
          </div>
        </div>

        {feedback && (
          <p className="mt-3 text-center text-xs font-bold text-emerald-300 animate-pulse">{feedback}</p>
        )}

        {/* Action Choices */}
        <div className="mt-5 flex flex-col gap-2.5">
          <button
            onClick={payCheckpoint}
            disabled={cash < activeCheckpoint.demandAmount}
            className="w-full rounded-2xl bg-emerald-600 py-3 text-xs font-bold text-white transition-all hover:bg-emerald-500 disabled:opacity-50"
          >
            ফি প্রদান করে যান (৳ {activeCheckpoint.demandAmount})
          </button>

          <button
            onClick={handleBargain}
            className="w-full rounded-2xl border border-amber-500/40 bg-amber-500/10 py-3 text-xs font-semibold text-amber-200 transition-all hover:bg-amber-500/20"
          >
            বিনীত অনুরোধ জানান (ছাড়ের সম্ভাবনা)
          </button>

          <button
            onClick={escapeCheckpoint}
            className="w-full rounded-2xl border border-rose-500/30 bg-rose-950/40 py-2.5 text-xs font-semibold text-rose-300 transition-all hover:bg-rose-900/40"
          >
            সংকেত এড়িয়ে দ্রুত টান দিন
          </button>
        </div>
      </motion.div>
    </div>
  );
}