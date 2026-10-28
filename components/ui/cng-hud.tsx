"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cngAudio } from "../../lib/cng-audio";
import { useGameStore, RADIO_LINES } from "../../store/game-store";

// Deterministic scattered raindrop positions (SSR/prerender safe)
const RAIN_DROPS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  delay: `${(((i * 23 + 7) % 15) / 10).toFixed(1)}s`,
  dur: `${(0.5 + ((i * 41 + 17) % 6) / 10).toFixed(1)}s`,
  top: `${-((i * 19 + 5) % 20)}%`,
}));

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
    weather,
    toggleWeather,
    activeStreetEvent,
    tripCompleteToast,
    dismissTripToast,
  } = useGameStore();

  // 📻 Radio ticker — cycles every 9s
  const [radioIndex, setRadioIndex] = useState(0);
  const [radioVisible, setRadioVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadioVisible(false);
      setTimeout(() => {
        setRadioIndex((i) => (i + 1) % RADIO_LINES.length);
        setRadioVisible(true);
      }, 500);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleHonk = () => {
    cngAudio.honk();
  };

  const handleMute = () => {
    cngAudio.toggleMute();
  };

  const isLowGas = gasPressureBar < 35;
  const speedPct = Math.min(100, (speedKmh / 85) * 100);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-4 font-sans select-none overflow-hidden">
      {/* ---- 2D Rain Overlay ---- */}
      <AnimatePresence>
        {weather === "rainy" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            {/* Dark rain vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 40%, rgba(20,30,50,0.65) 100%)",
              }}
            />
            {/* Rain streaks */}
            {RAIN_DROPS.map((d) => (
              <div
                key={d.id}
                className="absolute w-px bg-gradient-to-b from-transparent via-blue-300/60 to-transparent"
                style={{
                  left: d.left,
                  top: d.top,
                  height: "80px",
                  animationName: "rainFall",
                  animationDuration: d.dur,
                  animationDelay: d.delay,
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                  transform: "rotate(15deg)",
                }}
              />
            ))}
            {/* Rain status tag */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-blue-900/60 border border-blue-400/40 px-3 py-0.5 text-[11px] font-black text-blue-200 backdrop-blur-sm shadow-md"
              >
                🌧️ বৃষ্টি চলছে • সিএনজি ভাড়া চড়া!
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Top Area (Status Bar + Compact Alerts) --- */}
      <div className="relative z-10 flex flex-col gap-2">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* Cash & Gas Card */}
          <div className="pointer-events-auto flex items-center gap-2.5 rounded-2xl bg-black/75 px-3.5 py-2 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-emerald-950/40 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">💵</span>
              <div>
                <p className="text-[9px] uppercase font-bold tracking-wider text-emerald-400">নগদ টাকা</p>
                <p className="text-base sm:text-lg font-black text-white tracking-tight">৳ {cash.toLocaleString()}</p>
              </div>
            </div>

            <div className="h-7 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <span className={`text-lg ${isLowGas ? "animate-pulse" : ""}`}>⛽</span>
              <div>
                <p className={`text-[9px] uppercase font-bold tracking-wider ${isLowGas ? "text-red-400 animate-pulse" : "text-amber-400"}`}>
                  {isLowGas ? "গ্যাস শেষ!" : "সিলিন্ডার"}
                </p>
                <p className={`text-xs sm:text-sm font-black ${isLowGas ? "text-red-300" : "text-amber-200"}`}>
                  {Math.round(gasPressureBar)} <span className="text-[10px] font-normal text-white/70">bar</span>
                </p>
              </div>
            </div>

            <div className="h-7 w-px bg-white/20" />

            <div>
              <p className="text-[9px] uppercase font-bold tracking-wider text-rose-400">মোট চাঁদা</p>
              <p className="text-xs sm:text-sm font-black text-rose-300">৳ {metrics.totalChandaPaid + metrics.totalBribesPaid}</p>
            </div>
          </div>

          {/* Top Right Controls */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={toggleWeather}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-black/70 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 hover:bg-white/10 text-sm sm:text-base"
              title="আবহাওয়া বদল (বৃষ্টি/রোদ)"
            >
              {weather === "rainy" ? "☀️" : "🌧️"}
            </button>

            <button
              onClick={handleMute}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-black/70 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 hover:bg-white/10 text-sm sm:text-base"
              title="শব্দ অন/অফ"
            >
              🔊
            </button>

            <button
              onClick={endShift}
              className="flex items-center gap-1.5 rounded-xl bg-amber-600/90 px-3 py-2 text-[11px] font-bold text-white backdrop-blur-md border border-amber-400/40 shadow-md transition-all active:scale-95 hover:bg-amber-500"
            >
              <span>🛑 শিফট শেষ</span>
            </button>
          </div>
        </div>

        {/* Floating Top Notifications (Compact, non-intrusive) */}
        <div className="flex flex-col items-center gap-1.5 pointer-events-none mt-1">
          {/* Trip Complete Toast */}
          <AnimatePresence>
            {tripCompleteToast && (
              <motion.div
                key="trip-complete"
                initial={{ y: -20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -10, opacity: 0, scale: 0.95 }}
                onClick={dismissTripToast}
                className="pointer-events-auto cursor-pointer flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600/95 to-teal-600/95 px-4 py-2 text-white shadow-2xl backdrop-blur-md border-2 border-emerald-300"
              >
                <span className="text-xl">{tripCompleteToast.phrase.emoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-amber-300">ভাড়া জমা: +৳{tripCompleteToast.fare}</span>
                    <span className="text-[10px] text-white/80 bg-black/30 rounded px-1.5">গন্তব্যে পৌঁছালেন</span>
                  </div>
                  <p className="text-[11px] font-bold text-white/95 mt-0.5">{tripCompleteToast.phrase.text}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Street Event News Ticker — Compact slim pill */}
          <AnimatePresence>
            {activeStreetEvent && (
              <motion.div
                key={activeStreetEvent.id}
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 0.92 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 rounded-full bg-yellow-500/80 px-3.5 py-1 text-black backdrop-blur-md border border-yellow-300/60 shadow-lg"
              >
                <span className="text-base">{activeStreetEvent.emoji}</span>
                <span className="text-xs font-black leading-tight max-w-[280px] sm:max-w-md truncate">
                  {activeStreetEvent.textBn}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Crash Alert — Small snappy pill */}
          <AnimatePresence>
            {crashAlert && (
              <motion.div
                key="crash"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.95 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 rounded-full bg-red-600/90 px-3.5 py-1 text-white backdrop-blur-md border border-red-400/50 shadow-lg"
              >
                <span className="text-base">💥</span>
                <span className="text-xs font-black">{crashAlert}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Police Chase — Slim top pill */}
          <AnimatePresence>
            {isChased && (
              <motion.div
                key="chase"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.95, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-full bg-rose-700/85 px-4 py-1.5 text-white backdrop-blur-md border-2 border-yellow-300 shadow-xl animate-pulse"
              >
                <span className="text-lg">🚨</span>
                <span className="text-xs font-black text-yellow-300">ধাওয়া শুরু!</span>
                <span className="text-[11px] text-white/90">
                  টানা ৪৫+ কিমি রাখুন • বাকি: <strong className="text-yellow-200">{Math.ceil(chaseTimerSec)}s</strong>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- Passenger Trip Progress Strip (Anchored Top-Left, semi-transparent) --- */}
      <AnimatePresence>
        {currentPassenger && (
          <motion.div
            key="passenger-strip"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 0.78 }}
            exit={{ x: -30, opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute left-3 sm:left-4 top-[64px] sm:top-[70px] z-30 pointer-events-auto"
          >
            <div className="flex items-center gap-2 rounded-2xl bg-black/65 px-3 py-1.5 backdrop-blur-md border border-emerald-500/30 shadow-lg max-w-[210px] sm:max-w-[240px]">
              <span className="text-lg shrink-0">{currentPassenger.avatar}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-bold text-emerald-300 truncate">{currentPassenger.nameBn}</span>
                  <span className="text-[11px] font-black text-amber-300 shrink-0">৳{currentPassenger.fareOffer}</span>
                </div>
                <p className="text-[9px] text-white/60 truncate leading-none mt-0.5">{currentPassenger.destination.nameBn}</p>
                {/* Thin progress bar */}
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all duration-300"
                    style={{ width: `${Math.round(passengerProgressRatio * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Bottom Area: Radio Ticker + Speedometer & Controls --- */}
      <div className="relative z-10 flex flex-col gap-2">
        {/* 📻 Dhaka FM Radio Commentary Bar (Subtle, pure comedy) */}
        <div className="pointer-events-none flex justify-center">
          <AnimatePresence mode="wait">
            {radioVisible && (
              <motion.div
                key={radioIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.85, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1 text-white backdrop-blur-sm border border-white/10 max-w-lg shadow-sm"
              >
                <span className="text-xs shrink-0">📻</span>
                <span className="text-[9px] font-black text-amber-400 uppercase shrink-0">ঢাকা এফএম 88.0:</span>
                <span className="text-[11px] text-white/90 truncate font-medium">{RADIO_LINES[radioIndex]}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Speedometer & Controls Row */}
        <div className="flex items-end justify-between gap-3">
          {/* Left: Keyboard Controls info */}
          <div className="rounded-xl bg-black/60 p-2.5 text-[11px] text-white/75 backdrop-blur-sm border border-white/10 hidden md:block">
            <p className="font-bold text-emerald-400">⌨️ নিয়ন্ত্রণ:</p>
            <p className="mt-0.5 leading-tight">W/↑ গ্যাস • S/↓ ব্রেক • A/D ডানে-বামে</p>
            <p className="leading-tight">Space ড্রিফট • H হর্ন • Shift নাইট্রো</p>
          </div>

          {/* Center: Digital Arc Speedometer */}
          <div className="pointer-events-auto flex flex-col items-center mx-auto md:mx-0">
            <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full bg-black/80 border-2 border-emerald-500/40 shadow-2xl backdrop-blur-lg">
              {/* SVG arc */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 112 112" fill="none">
                <circle cx="56" cy="56" r="48" strokeWidth="6" stroke="rgba(255,255,255,0.07)" />
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  strokeWidth="6"
                  stroke={speedKmh > 60 ? "#f87171" : speedKmh > 35 ? "#fbbf24" : "#34d399"}
                  strokeDasharray={`${(speedPct / 100) * 301} 301`}
                  strokeLinecap="round"
                  transform="rotate(-90 56 56)"
                  style={{ transition: "stroke-dasharray 0.2s, stroke 0.3s" }}
                />
              </svg>
              <span className="text-[9px] font-semibold uppercase text-emerald-400">গতি</span>
              <span className="text-2xl sm:text-3xl font-black text-white leading-none">{Math.round(speedKmh)}</span>
              <span className="text-[9px] text-white/60">কিমি/ঘণ্টা</span>
            </div>
            <p className="mt-0.5 text-[10px] font-bold text-white/50">
              {Math.round(distanceTraveledMeters)} মি.
            </p>
          </div>

          {/* Right: Touch/Mouse Action Buttons */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={handleHonk}
              className="flex h-12 w-12 sm:h-14 sm:w-14 flex-col items-center justify-center rounded-2xl bg-amber-500 text-black shadow-lg shadow-amber-900/40 transition-all active:scale-90 hover:bg-amber-400"
              title="হর্ন দিন (H)"
            >
              <span className="text-lg sm:text-xl">📢</span>
              <span className="text-[9px] font-black uppercase">হর্ন (H)</span>
            </button>

            <button
              onClick={triggerNitro}
              disabled={!nitroReady || isNitroActive}
              className={`flex h-12 w-12 sm:h-14 sm:w-14 flex-col items-center justify-center rounded-2xl border transition-all active:scale-90 shadow-lg ${
                isNitroActive
                  ? "bg-cyan-500 text-black border-cyan-300 animate-pulse"
                  : nitroReady
                  ? "bg-cyan-600 text-white border-cyan-400 hover:bg-cyan-500 shadow-cyan-900/40"
                  : "bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed"
              }`}
              title="নাইট্রো বুস্ট (Shift)"
            >
              <span className="text-lg sm:text-xl">⚡</span>
              <span className="text-[9px] font-black uppercase">{isNitroActive ? "বুস্ট!" : "নাইট্রো"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Rain animation keyframes */}
      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(-80px) rotate(15deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(15deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
