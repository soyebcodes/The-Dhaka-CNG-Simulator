"use client";

import { motion } from "framer-motion";
import { useGameStore } from "../../store/game-store";

export default function PassengerModal() {
  const { pendingPassengerHail, acceptPassenger, rejectPassenger } = useGameStore();

  if (!pendingPassengerHail) return null;

  const getTopicBadge = () => {
    switch (pendingPassengerHail.roastTopic) {
      case "rain":
        return { label: "🌧️ মুষলধারে বৃষ্টি", color: "bg-blue-500/20 text-blue-300 border-blue-400/40" };
      case "waterlog":
        return { label: "🌊 জলজট ও পানি", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40" };
      case "meter":
        return { label: "⏱️ মিটার", color: "bg-rose-500/20 text-rose-300 border-rose-400/40" };
      case "garage":
        return { label: "🔧 গ্যারেজ টাইম", color: "bg-amber-500/20 text-amber-300 border-amber-400/40" };
      case "traffic":
      default:
        return { label: "🚗 জ্যাম", color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" };
    }
  };

  const topic = getTopicBadge();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#0e1713] via-[#09100d] to-black p-6 text-white shadow-2xl backdrop-blur-2xl"
      >
        {/* Header with Passenger Info */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-800/50 text-3xl shadow-inner border border-emerald-400/30">
              {pendingPassengerHail.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white">{pendingPassengerHail.nameBn}</h2>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                  যাত্রীর ডাক
                </span>
              </div>
              <p className="text-xs text-white/70">গন্তব্য: <span className="font-semibold text-emerald-300">{pendingPassengerHail.destination.nameBn}</span></p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-emerald-400/80">ভাড়ার প্রস্তাব</span>
            <p className="text-xl font-black text-emerald-400">+৳ {pendingPassengerHail.fareOffer}</p>
          </div>
        </div>

        {/* Situation / Topic Tag */}
        <div className="mt-3">
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${topic.color}`}>
            {topic.label}
          </span>
        </div>

        {/* Dialogue: Passenger vs CNG Driver Mama */}
        <div className="mt-4 space-y-3">
          {/* Passenger Speech Bubble */}
          <div className="flex items-start gap-2.5 rounded-2xl bg-white/5 p-3.5 border border-white/10">
            <span className="text-xl">{pendingPassengerHail.avatar}</span>
            <div className="flex-1">
              <span className="text-[11px] font-black uppercase text-white/60">যাত্রী:</span>
              <p className="text-sm font-medium italic text-amber-200 mt-0.5">
                &ldquo;{pendingPassengerHail.dialogueBn}&rdquo;
              </p>
            </div>
          </div>

          {/* CNG Driver Mama's Classic Response */}
          <div className="flex items-start gap-2.5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-black/80 p-3.5 border border-amber-500/40 shadow-inner">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/30 text-lg border border-amber-400/40">
              🛺
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-black uppercase tracking-wide text-amber-400">
                ড্রাইভার মামা:
              </span>
              <p className="text-sm font-bold text-yellow-100 mt-0.5 leading-relaxed">
                &ldquo;{pendingPassengerHail.driverRoastBn}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={rejectPassenger}
            className="flex-1 rounded-2xl bg-white/10 p-3.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20 border border-white/10"
          >
            হাঁইটা যান মামা! (বাদ দিন)
          </button>
          <button
            onClick={acceptPassenger}
            className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-3.5 text-xs font-black text-white shadow-lg shadow-emerald-950/60 transition-all active:scale-95 hover:brightness-110 border border-emerald-400/40"
          >
            চুক্তিতে রাজি! (যাত্রী তুলুন)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
