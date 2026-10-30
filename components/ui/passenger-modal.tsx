"use client";

import { motion } from "framer-motion";
import { useGameStore, REJECT_BUTTON_TEXTS, ACCEPT_BUTTON_TEXTS } from "../../store/game-store";

export default function PassengerModal() {
  const { pendingPassengerHail, acceptPassenger, rejectPassenger } = useGameStore();

  if (!pendingPassengerHail) return null;

  const hash = pendingPassengerHail.id
    ? pendingPassengerHail.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
    : 0;
  const rejectText = REJECT_BUTTON_TEXTS[hash % REJECT_BUTTON_TEXTS.length];
  const acceptText = ACCEPT_BUTTON_TEXTS[hash % ACCEPT_BUTTON_TEXTS.length];
  const isUrgent = pendingPassengerHail.isUrgent;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 20, stiffness: 280 }}
        className={`w-full max-w-lg rounded-3xl border-2 ${
          isUrgent ? "border-amber-400/70" : "border-emerald-600/50"
        } bg-gradient-to-b from-[#1b221a] via-[#121711] to-black p-5 text-amber-50 shadow-2xl backdrop-blur-2xl`}
      >
        {/* Urgent header */}
        {isUrgent && (
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="mb-3 flex items-center justify-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 py-1 text-[11px] font-bold text-amber-300 tracking-wide"
          >
            ⏱️ তাড়ার যাত্রী! সময়মতো পৌঁছাতে হবে!
          </motion.div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900/60 text-3xl shadow-inner border border-emerald-500/30">
              {pendingPassengerHail.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-bold text-amber-100">{pendingPassengerHail.nameBn}</h2>
                <span className="rounded-full border px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  {pendingPassengerHail.topicTag}
                </span>
              </div>
              <p className="text-xs text-amber-200/70 mt-0.5">
                গন্তব্য: {pendingPassengerHail.destination.nameBn}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0 ml-2">
            <span className="text-[10px] uppercase font-bold text-amber-400/80">ভাড়ার প্রস্তাব</span>
            <p className="text-2xl font-black text-amber-400 leading-tight">৳ {pendingPassengerHail.fareOffer}</p>
          </div>
        </div>

        {/* Dialogues */}
        <div className="mt-4 space-y-2.5">
          <div className="flex items-start gap-2.5 rounded-2xl bg-white/5 p-3 border border-white/10">
            <span className="text-lg shrink-0">{pendingPassengerHail.avatar}</span>
            <div className="flex-1">
              <span className="text-[10px] font-semibold uppercase text-amber-300/60">যাত্রী বললেন:</span>
              <p className="text-sm font-medium text-amber-100 mt-0.5">
                &ldquo;{pendingPassengerHail.dialogueBn}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded-2xl bg-emerald-950/40 p-3 border border-emerald-500/20">
            <span className="text-lg shrink-0">🚖</span>
            <div className="flex-1">
              <span className="text-[10px] font-semibold uppercase text-emerald-400/80">চালকের উত্তর:</span>
              <p className="text-sm font-medium text-emerald-200 mt-0.5">
                &ldquo;{pendingPassengerHail.driverReplyBn}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={rejectPassenger}
            className="rounded-2xl border border-white/15 bg-white/5 py-3 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 active:scale-95"
          >
            {rejectText}
          </button>
          <button
            onClick={acceptPassenger}
            className="rounded-2xl border border-emerald-400/40 bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-950/60 transition-all hover:brightness-110 active:scale-95"
          >
            {acceptText}
          </button>
        </div>
      </motion.div>
    </div>
  );
}