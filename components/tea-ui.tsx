"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export type TeaProfile = {
  milk: number;
  sugar: number;
  ginger: number;
  aroma: number;
};

type TeaUiProps = {
  teaProfile: TeaProfile;
  onChange: (profile: TeaProfile) => void;
  onDrop: () => void;
  score: number;
  verdict: string;
  audioEnabled: boolean;
  radioEnabled: boolean;
  onAudioToggle: () => void;
  onRadioToggle: () => void;
};

function Slider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (next: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.25em] text-white/75">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-amber-400"
      />
    </label>
  );
}

export function TeaUi({
  teaProfile,
  onChange,
  onDrop,
  score,
  verdict,
  audioEnabled,
  radioEnabled,
  onAudioToggle,
  onRadioToggle,
}: TeaUiProps) {
  const [isPressed, setIsPressed] = useState(false);

  const mood = useMemo(() => {
    const milkTone =
      teaProfile.milk > 65 ? "malai" : teaProfile.milk > 35 ? "sweet" : "deshi";
    const sugarTone =
      teaProfile.sugar > 60
        ? "full sugar"
        : teaProfile.sugar > 35
          ? "balanced"
          : "light";
    return `${milkTone} · ${sugarTone}`;
  }, [teaProfile]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto flex items-start justify-between gap-4"
      >
        <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-white/65">
            চায়ের স্টল
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Biscuit & Brew
          </h1>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onRadioToggle}
            className="rounded-full border border-amber-200/20 bg-amber-400/10 px-3 py-2 text-[0.6rem] uppercase tracking-[0.2em] text-amber-50 backdrop-blur-lg transition hover:bg-amber-300/15"
          >
            {radioEnabled ? "Radio on" : "Radio off"}
          </button>
          <button
            type="button"
            onClick={onAudioToggle}
            className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/85 backdrop-blur-lg transition hover:bg-white/10"
          >
            {audioEnabled ? "Sound on" : "Sound off"}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="pointer-events-auto flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div className="w-full max-w-xl rounded-[1.8rem] border border-white/15 bg-black/15 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-5">
          <div className="mb-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-white/70">
            <span>Tea recipe</span>
            <span>{mood}</span>
          </div>

          <div className="space-y-5">
            <Slider
              label="Milk"
              value={teaProfile.milk}
              onChange={(next) => onChange({ ...teaProfile, milk: next })}
            />
            <Slider
              label="Sugar"
              value={teaProfile.sugar}
              onChange={(next) => onChange({ ...teaProfile, sugar: next })}
            />
            <Slider
              label="Ginger"
              value={teaProfile.ginger}
              onChange={(next) => onChange({ ...teaProfile, ginger: next })}
            />
            <Slider
              label="Aroma"
              value={teaProfile.aroma}
              onChange={(next) => onChange({ ...teaProfile, aroma: next })}
            />
          </div>
        </div>

        <div className="w-full max-w-sm rounded-[1.8rem] border border-white/15 bg-black/15 p-4 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-5">
          <div className="mb-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-white/70">
            <span>Dip score</span>
            <span>{score}</span>
          </div>

          <div className="mb-4 text-4xl font-semibold text-white">
            {verdict}
          </div>

          <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
            <span>Street meter</span>
            <span>{Math.min(100, Math.max(20, score))}%</span>
          </div>

          <button
            type="button"
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onClick={onDrop}
            className={`w-full rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-stone-900 transition ${
              isPressed
                ? "scale-[0.98] shadow-none"
                : "shadow-[0_16px_30px_rgba(251,191,36,0.4)]"
            }`}
          >
            {isPressed ? "Dipping..." : "Drop biscuit"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
