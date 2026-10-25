"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export type TeaProfile = {
  milk: number;
  sugar: number;
  ginger: number;
  aroma: number;
};

type LeaderboardEntry = {
  name: string;
  score: number;
  label: string;
};

type RoundTheme = {
  name: string;
  vibe: string;
  intro: string;
  accent: string;
};

type TeaUiProps = {
  teaProfile: TeaProfile;
  onChange: (profile: TeaProfile) => void;
  onDrop: () => void;
  score: number;
  verdict: string;
  audioEnabled: boolean;
  radioEnabled: boolean;
  dropBurst: number;
  impactShake: number;
  brewMeter: number;
  canPlay: boolean;
  onAudioToggle: () => void;
  onRadioToggle: () => void;
  reactionText: string;
  round: number;
  maxRounds: number;
  bestScore: number;
  totalScore: number;
  leaderboard: LeaderboardEntry[];
  onReset: () => void;
  gameOver: boolean;
  theme: RoundTheme;
  chaosMeter: number;
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
        className="h-2 w-full cursor-pointer accent-fuchsia-400"
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
  dropBurst,
  impactShake,
  brewMeter,
  canPlay,
  onAudioToggle,
  onRadioToggle,
  reactionText,
  round,
  maxRounds,
  bestScore,
  totalScore,
  leaderboard,
  onReset,
  gameOver,
  theme,
  chaosMeter,
}: TeaUiProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const mood = useMemo(() => {
    const chaosTone =
      teaProfile.milk > 65
        ? "chaotic"
        : teaProfile.milk > 35
          ? "funny"
          : "low-key";
    const sauceTone =
      teaProfile.sugar > 60
        ? "extra sauce"
        : teaProfile.sugar > 35
          ? "balanced"
          : "clean";
    return `${chaosTone} · ${sauceTone}`;
  }, [teaProfile]);

  const scoreFlash = dropBurst > 0;
  const isShaking = impactShake > 0;

  return (
    <div className="pointer-events-none flex h-full w-full flex-col justify-between rounded-[2rem] border border-fuchsia-200/10 bg-[#140f1c]/65 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-5">
      {showGuide && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none mb-4 rounded-full border border-fuchsia-200/20 bg-[#1f1526]/80 px-4 py-2 text-center text-[0.62rem] uppercase tracking-[0.28em] text-fuchsia-100 shadow-[0_10px_30px_rgba(232,121,249,0.18)] backdrop-blur-lg"
        >
          {theme.vibe} → drop snack → read verdict
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto mb-4 flex items-start justify-between gap-4"
      >
        <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-fuchsia-200/80">
            {theme.name}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Snack chaos
          </h1>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onRadioToggle}
            className="rounded-full border border-fuchsia-200/20 bg-fuchsia-400/10 px-3 py-2 text-[0.6rem] uppercase tracking-[0.2em] text-fuchsia-50 backdrop-blur-lg transition hover:bg-fuchsia-300/15"
          >
            {radioEnabled ? "DJ on" : "DJ off"}
          </button>
          <button
            type="button"
            onClick={onAudioToggle}
            className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/85 backdrop-blur-lg transition hover:bg-white/10"
          >
            {audioEnabled ? "SFX on" : "SFX off"}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="pointer-events-auto flex w-full flex-col gap-4"
      >
        <div className="w-full rounded-[1.8rem] border border-white/15 bg-black/15 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-5">
          <div className="mb-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-white/70">
            <span>Snack mix</span>
            <span>{mood}</span>
          </div>

          <div className="space-y-5">
            <Slider
              label="Chaos"
              value={teaProfile.milk}
              onChange={(next) => onChange({ ...teaProfile, milk: next })}
            />
            <Slider
              label="Sauce"
              value={teaProfile.sugar}
              onChange={(next) => onChange({ ...teaProfile, sugar: next })}
            />
            <Slider
              label="Drama"
              value={teaProfile.ginger}
              onChange={(next) => onChange({ ...teaProfile, ginger: next })}
            />
            <Slider
              label="Energy"
              value={teaProfile.aroma}
              onChange={(next) => onChange({ ...teaProfile, aroma: next })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] border border-white/10 bg-black/10 p-3 text-white/75">
          <div>
            <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/55">
              Round
            </div>
            <div className="mt-2 text-xl font-semibold text-white">
              {round}/{maxRounds}
            </div>
          </div>
          <div>
            <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/55">
              Best
            </div>
            <div className="mt-2 text-xl font-semibold text-white">
              {bestScore}
            </div>
          </div>
          <div>
            <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/55">
              Total
            </div>
            <div className="mt-2 text-xl font-semibold text-white">
              {totalScore}
            </div>
          </div>
          <div>
            <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/55">
              Live
            </div>
            <div className="mt-2 text-xl font-semibold text-white">{score}</div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-fuchsia-200/25 bg-black/10 p-3">
          <div className="mb-2 flex items-center justify-between text-[0.58rem] uppercase tracking-[0.2em] text-white/60">
            <span>Chaos meter</span>
            <span>{chaosMeter}%</span>
          </div>
          <div className="relative h-4 overflow-hidden rounded-full bg-white/8">
            <motion.div
              initial={false}
              animate={{ width: `${chaosMeter}%` }}
              transition={{ duration: 0.45 }}
              className={`h-full rounded-full bg-gradient-to-r ${theme.accent}`}
            />
          </div>
        </div>

        <div
          className={`w-full rounded-[1.8rem] border border-white/15 bg-black/15 p-4 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition-all duration-200 md:p-5 ${
            scoreFlash
              ? "ring-2 ring-fuchsia-300/70 shadow-[0_0_35px_rgba(232,121,249,0.32)]"
              : ""
          } ${isShaking ? "cha-baan-scene-shake" : ""}`}
        >
          <div className="mb-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-white/70">
            <span>Chaos score</span>
            <span>{score}</span>
          </div>

          <div
            className={`mb-3 text-4xl font-semibold text-white transition-all duration-200 ${
              scoreFlash
                ? "scale-105 text-fuchsia-100 drop-shadow-[0_0_18px_rgba(232,121,249,0.9)]"
                : ""
            }`}
          >
            {verdict}
          </div>

          <div className="mb-4 rounded-full border border-fuchsia-200/20 bg-[#1a120f]/70 px-3 py-2 text-center text-[0.62rem] uppercase tracking-[0.22em] text-fuchsia-100">
            {reactionText}
          </div>

          <div className="mb-4 rounded-full border border-amber-200/20 bg-[#1a120f]/70 p-2.5">
            <div className="mb-2 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
              <span>Meme meter</span>
              <span>{brewMeter}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-fuchsia-200 via-violet-300 to-pink-200 transition-all duration-500 ${
                  brewMeter > 70
                    ? "shadow-[0_0_14px_rgba(232,121,249,0.6)]"
                    : ""
                }`}
                style={{ width: `${brewMeter}%` }}
              />
            </div>
          </div>

          {gameOver && (
            <button
              type="button"
              onClick={onReset}
              className="mb-3 w-full rounded-full border border-fuchsia-200/40 bg-white/5 px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-fuchsia-50"
            >
              Retry run
            </button>
          )}

          <button
            type="button"
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onClick={() => {
              if (!canPlay) {
                return;
              }
              setShowGuide(false);
              onDrop();
            }}
            disabled={!canPlay}
            className={`w-full rounded-full border border-fuchsia-300/60 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-200 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-fuchsia-950 transition ${
              !canPlay ? "cursor-not-allowed opacity-60" : ""
            } ${
              isPressed
                ? "scale-[0.98] shadow-none"
                : "shadow-[0_16px_30px_rgba(232,121,249,0.4)]"
            }`}
          >
            {canPlay
              ? isPressed
                ? "Dropping..."
                : "Drop snack"
              : gameOver
                ? "Run over"
                : "Start chaos"}
          </button>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-3">
          <div className="mb-2 text-[0.58rem] uppercase tracking-[0.22em] text-white/55">
            Leaderboard
          </div>
          <div className="space-y-2">
            {leaderboard.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-white/80"
              >
                <span>
                  {index + 1}. {item.name}
                </span>
                <span className="text-fuchsia-100">{item.score}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
