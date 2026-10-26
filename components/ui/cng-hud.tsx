"use client";

import { motion } from "framer-motion";
import { cngAudio } from "../../lib/cng-audio";
import { useGameStore } from "../../store/game-store";

export default function CNGHud() {
  const {
    cash,
    gasPressureBar,
    speedKmh,
    distanceTraveledMeters,
    currentPassenger,
    passengerProgressRatio,
    isChased,
    chaseTimerSec,
    nitroReady,
    isNitroActive,
    triggerNitro,
    endShift,
    metrics,
    crashAlert,
  } = useGameStore();

  const handleHonk = () => {
    cngAudio.honk();
  };

  const handleMute = () => {
    cngAudio.toggleMute();
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-4 font-sans select-none">
      {/* --- Top Status Bar --- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Cash & Gas Card */}
        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-black/75 px-4 py-2.5 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-emerald-950/40">
          <div className="flex items-center gap-2">
            <span className="text-xl">💵</span>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">নগদ জমার টাকা</p>
              <p className="text-xl font-extrabold text-white tracking-tight">৳ {cash.toLocaleString()}</p>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-white/20" />

          <div className="flex items-center gap-2">
            <span className="text-xl">⛽</span>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-amber-400">গ্যাস সিলিন্ডার</p>
              <p className="text-sm font-black text-amber-200">
                {Math.round(gasPressureBar)} <span className="text-xs font-normal text-white/70">bar</span>
              </p>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-white/20" />

          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-rose-400">মোট চাঁদা প্রদান</p>
            <p className="text-sm font-black text-rose-300">৳ {metrics.totalChandaPaid + metrics.totalBribesPaid}</p>
          </div>
        </div>

        {/* Top Right Quick Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={handleMute}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/70 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 hover:bg-white/10"
            title="শব্দ অন/অফ"
          >
            🔊
          </button>

          <button
            onClick={endShift}
            className="flex items-center gap-1.5 rounded-xl bg-amber-600/90 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md border border-amber-400/40 shadow-md transition-all active:scale-95 hover:bg-amber-500"
          >
            <span>🛑 শিফট শেষ</span>
          </button>
        </div>
      </div>

      {/* --- Middle Floating Alerts (Police Chase, Crash, or Urgent Passenger) --- */}
      <div className="flex flex-col items-center gap-3">
        {crashAlert && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -10 }}
            animate={{ scale: 1.05, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-amber-500/95 px-5 py-2.5 text-black backdrop-blur-lg border-2 border-red-600 shadow-2xl font-black shadow-amber-950/70"
          >
            <span className="text-2xl">💥</span>
            <span className="text-sm tracking-tight">{crashAlert}</span>
          </motion.div>
        )}

        {isChased && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-rose-600/90 px-6 py-3 text-white backdrop-blur-lg border-2 border-yellow-300 shadow-2xl shadow-rose-900/60 animate-pulse"
          >
            <span className="text-3xl">🚨</span>
            <div>
              <p className="text-base font-black text-yellow-300">পুলিশ ও বড় ভাইদের ধাওয়া শুরু!</p>
              <p className="text-xs text-white/90">
                টানা ৪৫+ কিমি গতিতে থাকুন! বাঁচার বাকি: <span className="text-sm font-bold text-yellow-200">{Math.ceil(chaseTimerSec)} সে.</span>
              </p>
            </div>
          </motion.div>
        )}

        {/* Current Passenger Trip Progress Bar */}
        {currentPassenger && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-2xl bg-black/80 p-3 text-white backdrop-blur-md border border-emerald-400/40 shadow-xl"
          >
            <span className="text-3xl">{currentPassenger.avatar}</span>
            <div className="flex-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-emerald-300">{currentPassenger.nameBn}</span>
                <span className="font-extrabold text-amber-300">ভাড়া ৳ {currentPassenger.fareOffer}</span>
              </div>
              <p className="text-[11px] text-white/70">গন্তব্য: {currentPassenger.destination.nameBn}</p>
              {/* Progress bar */}
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all duration-300"
                  style={{ width: `${Math.round(passengerProgressRatio * 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* --- Bottom Controls & Speedometer --- */}
      <div className="flex items-end justify-between gap-4">
        {/* Left: Distance & Controls Info */}
        <div className="rounded-xl bg-black/60 p-3 text-xs text-white/80 backdrop-blur-sm border border-white/10 hidden md:block">
          <p className="font-bold text-emerald-400">⌨️ নিয়ন্ত্রণ বাটনসমূহ:</p>
          <p className="mt-0.5">W/↑ গ্যাস • S/↓ ব্রেক • A/D স্টিয়ারিং</p>
          <p>Space ড্রিফট • H হর্ন • Shift নাইট্রো</p>
        </div>

        {/* Center: Digital Speedometer */}
        <div className="pointer-events-auto flex flex-col items-center">
          <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-black/85 border-4 border-emerald-500/50 shadow-2xl backdrop-blur-lg">
            <span className="text-xs font-semibold uppercase text-emerald-400">গতি</span>
            <span className="text-3xl font-black text-white">{Math.round(speedKmh)}</span>
            <span className="text-[10px] text-white/70">কিমি/ঘণ্টা</span>
          </div>
          <p className="mt-1 text-[11px] font-bold text-white/60">
            দূরত্ব: {Math.round(distanceTraveledMeters)} মি.
          </p>
        </div>

        {/* Right: Interactive Touch Action Buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Horn button */}
          <button
            onClick={handleHonk}
            className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-amber-500 text-black shadow-lg shadow-amber-900/40 transition-all active:scale-90 hover:bg-amber-400"
            title="হর্ন দিন"
          >
            <span className="text-xl">📢</span>
            <span className="text-[10px] font-black uppercase">হর্ন (H)</span>
          </button>

          {/* Nitro Boost Button */}
          <button
            onClick={triggerNitro}
            disabled={!nitroReady || isNitroActive}
            className={`flex h-14 w-14 flex-col items-center justify-center rounded-2xl border transition-all active:scale-90 shadow-lg ${
              isNitroActive
                ? "bg-cyan-500 text-black border-cyan-300 animate-pulse"
                : nitroReady
                ? "bg-cyan-600 text-white border-cyan-400 hover:bg-cyan-500 shadow-cyan-900/40"
                : "bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed"
            }`}
            title="নাইট্রো বুস্ট"
          >
            <span className="text-xl">⚡</span>
            <span className="text-[10px] font-black uppercase">{isNitroActive ? "বুস্ট!" : "নাইট্রো"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
