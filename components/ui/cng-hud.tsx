"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cngAudio } from "../../lib/cng-audio";
import { useGameStore, RADIO_LINES } from "../../store/game-store";

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
    currentPassenger,
    passengerProgressRatio,
    isChased,
    chaseTimerSec,
    nitroReady,
    isNitroActive,
    triggerNitro,
    endShift,
    crashAlert,
    weather,
    toggleWeather,
    tripCompleteToast,
    dismissTripToast,
  } = useGameStore();

  const [radioIndex, setRadioIndex] = useState(0);
  const [radioVisible, setRadioVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadioVisible(false);
      setTimeout(() => {
        setRadioIndex((i) => (i + 1) % RADIO_LINES.length);
        setRadioVisible(true);
      }, 500);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  const handleHonk = () => cngAudio.honk();
  const handleMute = () => cngAudio.toggleMute();

  const isLowFuel = gasPressureBar < 25;
  const speedPct = Math.min(100, (speedKmh / 75) * 100);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-4 font-sans select-none overflow-hidden">
      {/* 2D Rain Overlay */}
      <AnimatePresence>
        {weather === "rainy" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 40%, rgba(30,22,12,0.6) 100%)",
              }}
            />
            {RAIN_DROPS.map((d) => (
              <div
                key={d.id}
                className="absolute w-px bg-gradient-to-b from-transparent via-amber-200/50 to-transparent"
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar Header */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        {/* Left: Vintage Cash & Fuel meter */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 rounded-2xl border border-amber-500/40 bg-black/75 px-3.5 py-2 shadow-lg backdrop-blur-md">
            <span className="text-lg">🪙</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/70">
                টাকা জমানো (Cash)
              </span>
              <p className="text-xl font-black text-amber-300 leading-none">৳ {cash}</p>
            </div>
          </div>

          {/* Fuel Meter */}
          <div className="flex items-center gap-2 rounded-2xl border border-amber-900/40 bg-black/70 px-3 py-1.5 shadow-md backdrop-blur-md">
            <span className="text-sm">⛽</span>
            <div className="w-24 sm:w-32">
              <div className="flex justify-between text-[10px] font-semibold text-amber-200/70">
                <span>জ্বালানি তেল</span>
                <span>{Math.round(gasPressureBar)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10 mt-0.5">
                <div
                  className={`h-full transition-all duration-300 ${
                    isLowFuel ? "bg-rose-500 animate-pulse" : "bg-amber-400"
                  }`}
                  style={{ width: `${gasPressureBar}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center: Trip Progress */}
        {currentPassenger && (
          <div className="flex flex-col items-center rounded-2xl border border-amber-500/40 bg-black/80 px-4 py-2 shadow-xl backdrop-blur-md max-w-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-100">
              <span>{currentPassenger.avatar}</span>
              <span>{currentPassenger.nameBn}</span>
            </div>
            <p className="text-[10px] text-amber-300/80 mt-0.5">
              গন্তব্য: {currentPassenger.destination.nameBn}
            </p>
            <div className="mt-1.5 h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 transition-all duration-200"
                style={{ width: `${Math.round(passengerProgressRatio * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Right: Sound, Weather & Speedometer */}
        <div className="flex flex-col items-end gap-1.5">
          <div className="pointer-events-auto flex items-center gap-1.5">
            <button
              onClick={toggleWeather}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/40 bg-black/70 text-sm shadow backdrop-blur hover:bg-amber-950/40 active:scale-95 text-amber-200"
              title="আবহাওয়া পরিবর্তন"
            >
              {weather === "sunny" ? "☀️" : "🌧️"}
            </button>
            <button
              onClick={handleMute}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/40 bg-black/70 text-sm shadow backdrop-blur hover:bg-amber-950/40 active:scale-95 text-amber-200"
              title="শব্দ নিয়ন্ত্রণ"
            >
              🔊
            </button>
            <button
              onClick={endShift}
              className="rounded-xl border border-rose-500/40 bg-black/70 px-2.5 py-1.5 text-[11px] font-bold text-rose-300 shadow backdrop-blur hover:bg-rose-950/40 active:scale-95"
            >
              শিফট শেষ
            </button>
          </div>

          {/* Speed Indicator */}
          <div className="flex items-center gap-2 rounded-2xl border border-amber-500/40 bg-black/75 px-3 py-1.5 shadow-lg backdrop-blur-md">
            <div>
              <p className="text-right text-lg font-black text-amber-300 leading-none">
                {Math.round(speedKmh)} <span className="text-[10px] font-semibold text-amber-200/60">কিমি/ঘণ্টা</span>
              </p>
              <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-amber-400 transition-all duration-150"
                  style={{ width: `${speedPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Alerts Area: Positioned high up away from road center, with subtle opacity */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 px-2 pointer-events-none -mt-4">
        <AnimatePresence>
          {crashAlert && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 0.8, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-amber-400/30 bg-stone-900/60 px-3.5 py-1.5 text-center text-[11px] font-semibold text-amber-100 shadow-md backdrop-blur-sm"
            >
              {crashAlert}
            </motion.div>
          )}

          {tripCompleteToast && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 0.75, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1.5 text-[11px] font-medium text-emerald-100 shadow-md backdrop-blur-sm pointer-events-auto cursor-pointer hover:opacity-100 transition-opacity"
              onClick={dismissTripToast}
            >
              <span className="text-sm">{tripCompleteToast.emoji}</span>
              <span>{tripCompleteToast.text}</span>
            </motion.div>
          )}

          {isChased && (
            <motion.div
              animate={{ opacity: [0.65, 0.9, 0.65] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="rounded-xl border border-rose-500/40 bg-rose-950/60 px-3 py-1 text-[11px] font-bold text-rose-200 shadow-md backdrop-blur-sm"
            >
              🚨 গতি বজায় রাখুন! বাকি: {Math.ceil(chaseTimerSec)} সে.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bar: 80s Dhaka Radio & Touch Controls */}
      <div className="relative z-10 flex flex-col gap-2">
        {/* 📻 80s Dhaka Radio Banner */}
        <div className="flex items-center gap-2 rounded-2xl border border-amber-600/40 bg-gradient-to-r from-[#2b1e12]/90 via-[#18110a]/90 to-[#2b1e12]/90 px-4 py-2 shadow-2xl backdrop-blur-md">
          <span className="text-base animate-pulse">📻</span>
          <div className="flex-1 overflow-hidden">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80">
              বাংলাদেশ বেতার • ঢাকা ক কেন্দ্র (১৯৮৫)
            </span>
            <p
              className={`text-xs font-medium text-amber-100 transition-opacity duration-300 truncate ${
                radioVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {RADIO_LINES[radioIndex]}
            </p>
          </div>
        </div>

        {/* Quick Touch Controls for Mobile / Action */}
        <div className="pointer-events-auto flex items-center justify-between gap-2">
          <button
            onClick={handleHonk}
            className="flex-1 rounded-2xl border border-amber-500/40 bg-black/70 py-2.5 text-xs font-bold text-amber-200 shadow-lg backdrop-blur hover:bg-amber-950/50 active:scale-95"
          >
            📢 ক্লাসিক হর্ন (H)
          </button>
          <button
            onClick={triggerNitro}
            disabled={!nitroReady}
            className={`flex-1 rounded-2xl border py-2.5 text-xs font-bold shadow-lg backdrop-blur active:scale-95 transition-all ${
              nitroReady
                ? "border-amber-400/60 bg-gradient-to-r from-amber-600 to-yellow-600 text-stone-950 hover:brightness-110"
                : "border-white/10 bg-black/40 text-white/40 cursor-not-allowed"
            }`}
          >
            {isNitroActive ? "⚡ টান চলছে!" : nitroReady ? "⚡ এক্সট্রা থ্রোটল (Shift)" : "⏳ থ্রোটল চার্জ হচ্ছে"}
          </button>
        </div>
      </div>
    </div>
  );
}