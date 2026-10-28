"use client";

import { motion } from "framer-motion";
import { useGameStore, REJECT_BUTTON_TEXTS, ACCEPT_BUTTON_TEXTS } from "../../store/game-store";

export default function PassengerModal() {
  const { pendingPassengerHail, acceptPassenger, rejectPassenger } = useGameStore();

  if (!pendingPassengerHail) return null;

  // Pure deterministic selection based on hail ID
  const hash = pendingPassengerHail.id
    ? pendingPassengerHail.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
    : 0;
  const rejectText = REJECT_BUTTON_TEXTS[hash % REJECT_BUTTON_TEXTS.length];
  const acceptText = ACCEPT_BUTTON_TEXTS[hash % ACCEPT_BUTTON_TEXTS.length];

  const getTopicBadge = () => {
    switch (pendingPassengerHail.roastTopic) {
      case "rain":
        return { label: "🌧️ মুষলধারে বৃষ্টি", color: "bg-blue-500/20 text-blue-300 border-blue-400/40" };
      case "waterlog":
        return { label: "🌊 জলজট ও পানি", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40" };
      case "meter":
        return { label: "⏱️ মিটার বিতর্ক", color: "bg-rose-500/20 text-rose-300 border-rose-400/40" };
      case "garage":
        return { label: "🔧 গ্যারেজ টাইম", color: "bg-amber-500/20 text-amber-300 border-amber-400/40" };
      case "theft":
        return { label: "🏃 ছিনতাই সতর্কতা", color: "bg-red-500/20 text-red-300 border-red-400/40" };
      case "accident":
        return { label: "💥 দুর্ঘটনার পর", color: "bg-orange-500/20 text-orange-300 border-orange-400/40" };
      case "tesla":
        return { label: "🛺 ঢাকা Tesla", color: "bg-pink-500/20 text-pink-300 border-pink-400/40" };
      case "vip":
        return { label: "🎩 VIP এলাকা", color: "bg-purple-500/20 text-purple-300 border-purple-400/40" };
      case "traffic":
      default:
        return { label: "🚗 জ্যামের শহর", color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" };
    }
  };

  const topic = getTopicBadge();
  const isUrgent = pendingPassengerHail.isUrgent;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 20, stiffness: 280 }}
        className={`w-full max-w-lg rounded-3xl border-2 ${isUrgent ? "border-amber-400/60" : "border-emerald-500/40"} bg-gradient-to-b from-[#0e1713] via-[#09100d] to-black p-5 text-white shadow-2xl backdrop-blur-2xl`}
      >
        {/* Urgent badge */}
        {isUrgent && (
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="mb-3 flex items-center justify-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 py-1 text-[11px] font-black text-amber-300 tracking-wide"
          >
            🚨 জরুরি যাত্রী! পেশেন্স কম আছে!
          </motion.div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={isUrgent ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-800/50 text-3xl shadow-inner border border-emerald-400/30"
            >
              {pendingPassengerHail.avatar}
            </motion.div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-black text-white">{pendingPassengerHail.nameBn}</h2>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${topic.color}`}>
                  {topic.label}
                </span>
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                📍 {pendingPassengerHail.destination.nameBn}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0 ml-2">
            <span className="text-[10px] uppercase font-bold text-emerald-400/80">ভাড়া প্রস্তাব</span>
            <p className="text-2xl font-black text-emerald-400 leading-tight">+৳{pendingPassengerHail.fareOffer}</p>
          </div>
        </div>

        {/* Dialogue bubbles */}
        <div className="mt-4 space-y-2.5">
          {/* Passenger */}
          <div className="flex items-start gap-2.5 rounded-2xl bg-white/5 p-3 border border-white/10">
            <span className="text-lg shrink-0">{pendingPassengerHail.avatar}</span>
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase text-white/50">যাত্রী বলছেন:</span>
              <p className="text-sm font-medium italic text-amber-200 mt-0.5 leading-snug">
                &ldquo;{pendingPassengerHail.dialogueBn}&rdquo;
              </p>
            </div>
          </div>

          {/* Driver mama reply */}
          <div className="flex items-start gap-2.5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-black/80 p-3 border border-amber-500/30">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/25 text-lg border border-amber-400/30">
              🛺
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-wide text-amber-400">
                ড্রাইভার মামা:
              </span>
              <p className="text-sm font-bold text-yellow-100 mt-0.5 leading-snug">
                &ldquo;{pendingPassengerHail.driverRoastBn}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2.5">
          <button
            onClick={rejectPassenger}
            className="flex-1 rounded-2xl bg-white/8 p-3 text-xs font-bold text-white/80 transition-all active:scale-95 hover:bg-white/15 border border-white/10"
          >
            {rejectText}
          </button>
          <button
            onClick={acceptPassenger}
            className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 text-xs font-black text-white shadow-lg shadow-emerald-950/60 transition-all active:scale-95 hover:brightness-110 border border-emerald-400/30"
          >
            {acceptText}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
