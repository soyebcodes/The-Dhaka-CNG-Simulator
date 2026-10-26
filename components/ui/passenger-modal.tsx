"use client";

import { motion } from "framer-motion";
import { useGameStore } from "../../store/game-store";

export default function PassengerModal() {
  const { pendingPassengerHail, acceptPassenger, rejectPassenger } = useGameStore();

  if (!pendingPassengerHail) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-b from-emerald-950/90 to-black/95 p-6 text-white shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700/60 text-3xl shadow-inner border border-emerald-400/30">
            {pendingPassengerHail.avatar}
          </div>
          <div>
            <span className="rounded-full bg-emerald-500/30 px-2.5 py-0.5 text-[10px] font-black uppercase text-emerald-300">
              যাত্রীর ডাক
            </span>
            <h2 className="text-lg font-black text-white">{pendingPassengerHail.nameBn}</h2>
            <p className="text-xs text-white/70">গন্তব্য: {pendingPassengerHail.destination.nameBn}</p>
          </div>
        </div>

        {/* Dialogue */}
        <div className="mt-4 rounded-2xl bg-black/60 p-4 border border-white/10">
          <p className="text-sm font-bold italic text-amber-200">
            &ldquo;{pendingPassengerHail.dialogueBn}&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
            <span className="text-white/70">ভাড়ার প্রস্তাব:</span>
            <span className="text-lg font-black text-emerald-400">+৳ {pendingPassengerHail.fareOffer}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={rejectPassenger}
            className="flex-1 rounded-2xl bg-white/10 p-3.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
          >
            যাবো না মামা
          </button>
          <button
            onClick={acceptPassenger}
            className="flex-1 rounded-2xl bg-emerald-600 p-3.5 text-xs font-black text-white shadow-lg shadow-emerald-950/50 transition-all active:scale-95 hover:bg-emerald-500"
          >
            তুলে নিন (ভাড়া শুরু)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
