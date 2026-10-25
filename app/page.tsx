"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Character = {
  id: string;
  name: string;
  title: string;
  tagline: string;
  accent: string;
  emoji: string;
};

type RunItem = {
  id: number;
  lane: number;
  y: number;
  type: "tea" | "coffee";
  speed: number;
};

type DecorItem = {
  id: number;
  x: number;
  kind: "tree" | "stall" | "rickshaw";
  height: number;
  depth: number;
};

type LeaderboardEntry = {
  name: string;
  score: number;
};

const characters: Character[] = [
  {
    id: "rahat",
    name: "Rahat",
    title: "Street chai pro",
    tagline: "Fast feet, warm smile, tea in hand.",
    accent: "from-amber-300 via-orange-400 to-yellow-500",
    emoji: "🧑‍🍳",
  },
  {
    id: "nilu",
    name: "Nilu",
    title: "Village sprinter",
    tagline: "Darting past the market like a local legend.",
    accent: "from-rose-300 via-pink-400 to-fuchsia-500",
    emoji: "👩‍🦰",
  },
  {
    id: "shuvo",
    name: "Shuvo",
    title: "Railway runner",
    tagline: "Never misses a tea stop, never trusts coffee.",
    accent: "from-cyan-300 via-sky-400 to-indigo-500",
    emoji: "🧑‍💼",
  },
];

const lanePositions = [18, 50, 82];

type GameLevel = {
  id: string;
  name: string;
  subtitle: string;
  story: string;
  requiredScore: number;
  accent: string;
};

const levels: GameLevel[] = [
  {
    id: "sunrise-lane",
    name: "Cha Khor Runner",
    subtitle: "Village lanes, tea stalls, and a sunrise sprint",
    story:
      "A bright Bangladeshi village morning. Rickshaws hum, the river breeze flows, and tea sellers call out from every corner. The only rule is simple: collect the hot cha and dodge the coffee chaos.",
    requiredScore: 0,
    accent: "from-amber-300 via-orange-400 to-yellow-500",
  },
  {
    id: "market-rush",
    name: "Market Rush",
    subtitle: "Busy bazaar sprint with tighter gaps",
    story:
      "The morning market is packed and noisy. Everyone is moving fast, the tea cups are flying, and the wayward coffee cups are everywhere. Keep your rhythm and keep the lane clean.",
    requiredScore: 120,
    accent: "from-rose-300 via-pink-400 to-fuchsia-500",
  },
  {
    id: "river-dusk",
    name: "River Dusk",
    subtitle: "Golden-hour run with faster traffic",
    story:
      "Evening settles over the riverbank. The breeze is cooler, the roads are busier, and the tea stalls are glowing under a sunset haze. This is where the real sprint begins.",
    requiredScore: 220,
    accent: "from-cyan-300 via-sky-400 to-indigo-500",
  },
];

const STORAGE_KEY = "cha-khor-runner-save-v1";

type SaveProgress = {
  characterId: string;
  selectedLevelId: string;
  unlockedLevelIds: string[];
  bestScores: Record<string, number>;
};

const defaultProgress: SaveProgress = {
  characterId: characters[0].id,
  selectedLevelId: levels[0].id,
  unlockedLevelIds: [levels[0].id],
  bestScores: { [levels[0].id]: 0 },
};

const readProgress = (): SaveProgress => {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultProgress;
    }

    const parsed = JSON.parse(saved) as Partial<SaveProgress>;
    const resolvedCharacterId =
      typeof parsed.characterId === "string" &&
      characters.some((character) => character.id === parsed.characterId)
        ? parsed.characterId
        : defaultProgress.characterId;

    const resolvedLevelId =
      typeof parsed.selectedLevelId === "string" &&
      levels.some((level) => level.id === parsed.selectedLevelId)
        ? parsed.selectedLevelId
        : defaultProgress.selectedLevelId;

    const unlockedLevelIds = Array.isArray(parsed.unlockedLevelIds)
      ? parsed.unlockedLevelIds.filter(
          (levelId): levelId is string =>
            typeof levelId === "string" &&
            levels.some((level) => level.id === levelId),
        )
      : [...defaultProgress.unlockedLevelIds];

    const bestScores =
      typeof parsed.bestScores === "object" && parsed.bestScores !== null
        ? Object.fromEntries(
            Object.entries(parsed.bestScores).filter(
              ([levelId, score]) =>
                typeof levelId === "string" &&
                levels.some((level) => level.id === levelId) &&
                typeof score === "number",
            ),
          )
        : { ...defaultProgress.bestScores };

    const normalizedUnlocked =
      unlockedLevelIds.length > 0 ? unlockedLevelIds : [resolvedLevelId];

    return {
      characterId: resolvedCharacterId,
      selectedLevelId: resolvedLevelId,
      unlockedLevelIds: normalizedUnlocked,
      bestScores,
    };
  } catch {
    return defaultProgress;
  }
};

export default function Home() {
  const storedProgress = readProgress();
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    () =>
      characters.find(
        (character) => character.id === storedProgress.characterId,
      ) ?? characters[0],
  );
  const [selectedLevelId, setSelectedLevelId] = useState<string>(
    storedProgress.selectedLevelId,
  );
  const [unlockedLevelIds, setUnlockedLevelIds] = useState<string[]>(
    storedProgress.unlockedLevelIds,
  );
  const [bestScores, setBestScores] = useState<Record<string, number>>(
    storedProgress.bestScores,
  );
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [playerLane, setPlayerLane] = useState(1);
  const [items, setItems] = useState<RunItem[]>([]);
  const [decor] = useState<DecorItem[]>([
    { id: 1, x: 18, kind: "tree", height: 52, depth: 20 },
    { id: 2, x: 68, kind: "tree", height: 60, depth: 18 },
    { id: 3, x: 82, kind: "stall", height: 52, depth: 18 },
  ]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([
    { name: "Rifat", score: 260 },
    { name: "Mahi", score: 200 },
    { name: "Nishat", score: 150 },
  ]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [statusText, setStatusText] = useState(
    "Pick your runner and start the chai sprint",
  );
  const [isPaused, setIsPaused] = useState(false);
  const [worldScroll, setWorldScroll] = useState(0);
  const itemIdRef = useRef(1);
  const audioContextRef = useRef<AudioContext | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const playTone = useCallback(
    (
      frequency: number,
      duration: number,
      type: OscillatorType,
      volume: number,
    ) => {
      if (!soundEnabled || typeof window === "undefined") {
        return;
      }

      const AudioCtor =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;

      if (!AudioCtor) {
        return;
      }

      const context = audioContextRef.current ?? new AudioCtor();
      audioContextRef.current = context;

      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.type = type;
      oscillator.frequency.value = frequency;

      gainNode.gain.setValueAtTime(volume, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + duration,
      );

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.start();
      oscillator.stop(context.currentTime + duration);
    },
    [soundEnabled],
  );

  const villageScene =
    levels.find((level) => level.id === selectedLevelId) ?? levels[0];

  const storyLine = useMemo(
    () =>
      `${selectedCharacter.name} is ready for the ${villageScene.name.toLowerCase()} route.`,
    [selectedCharacter.name, villageScene.name],
  );

  const speedLevel = Math.min(6, 1 + Math.floor(score / 80));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const progressToSave: SaveProgress = {
      characterId: selectedCharacter.id,
      selectedLevelId,
      unlockedLevelIds,
      bestScores,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progressToSave));
  }, [bestScores, selectedCharacter.id, selectedLevelId, unlockedLevelIds]);

  const bestScore = bestScores[selectedLevelId] ?? 0;

  const handleStartRun = useCallback(() => {
    setGameStarted(true);
    setGameOver(false);
    setIsPaused(false);
    setWorldScroll(0);
    setScore(0);
    setLives(3);
    setItems([]);
    setPlayerLane(1);
    setStatusText(
      `${selectedCharacter.name} is racing through ${villageScene.name}.`,
    );
    if (soundEnabled) {
      playTone(440, 0.12, "sine", 0.04);
    }
  }, [playTone, selectedCharacter.name, soundEnabled, villageScene.name]);

  const moveLane = useCallback(
    (direction: "left" | "right") => {
      if (!gameStarted || gameOver || isPaused) {
        return;
      }

      setPlayerLane((current) => {
        const next =
          direction === "left"
            ? Math.max(0, current - 1)
            : Math.min(2, current + 1);
        if (next !== current) {
          playTone(260 + next * 60, 0.08, "triangle", 0.02);
        }
        return next;
      });
    },
    [gameStarted, gameOver, isPaused, playTone],
  );

  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) {
      return;
    }

    const scrollLoop = window.setInterval(() => {
      setWorldScroll((current) => (current + 1 + speedLevel) % 240);
    }, 30);

    return () => window.clearInterval(scrollLoop);
  }, [gameStarted, gameOver, isPaused, speedLevel]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (event.code === "Space") {
        if (!gameStarted && !gameOver) {
          handleStartRun();
        } else if (gameStarted && !gameOver) {
          setIsPaused((current) => !current);
        }
        return;
      }

      if (event.key === "ArrowLeft" || key === "a") {
        if (!gameStarted && !gameOver) {
          handleStartRun();
          return;
        }
        moveLane("left");
        return;
      }

      if (event.key === "ArrowRight" || key === "d") {
        if (!gameStarted && !gameOver) {
          handleStartRun();
          return;
        }
        moveLane("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted, gameOver, handleStartRun, moveLane]);

  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) {
      return;
    }

    const spawnInterval = window.setInterval(
      () => {
        const lane = Math.floor(Math.random() * 3);
        const type = Math.random() < 0.68 ? "tea" : "coffee";
        const speedBoost = 1 + score / 220;
        const speed = 1.15 + Math.random() * 1.1 + speedBoost * 0.3;

        setItems((current) => [
          ...current,
          {
            id: itemIdRef.current++,
            lane,
            y: 28 + Math.random() * 28,
            type,
            speed,
          },
        ]);
      },
      Math.max(500, 1050 - speedLevel * 70),
    );

    return () => window.clearInterval(spawnInterval);
  }, [gameStarted, gameOver, isPaused, score, speedLevel]);

  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) {
      return;
    }

    const gameLoop = window.setInterval(() => {
      setItems((current) => {
        const moved = current.map((item) => ({ ...item }));

        let teaCollected = 0;
        let coffeeHits = 0;
        const remaining: RunItem[] = [];

        for (const item of moved) {
          const collision =
            item.lane === playerLane && item.y >= 22 && item.y <= 42;

          if (collision) {
            if (item.type === "tea") {
              teaCollected += 1;
              playTone(620, 0.09, "triangle", 0.03);
            } else {
              coffeeHits += 1;
              playTone(120, 0.14, "sawtooth", 0.04);
            }
            continue;
          }

          if (item.y < 80) {
            remaining.push(item);
          }
        }

        if (teaCollected > 0) {
          setScore((currentScore) => {
            const nextScore = currentScore + teaCollected * 10;
            setBestScores((currentScores) => ({
              ...currentScores,
              [selectedLevelId]: Math.max(
                currentScores[selectedLevelId] ?? 0,
                nextScore,
              ),
            }));
            return nextScore;
          });
          setStatusText("Bhai! Fresh cha. The stall uncle is smiling.");
        }

        if (coffeeHits > 0) {
          setLives((currentLives) => {
            const nextLives = Math.max(0, currentLives - coffeeHits);
            if (nextLives <= 0) {
              setGameOver(true);
              setGameStarted(false);
              setIsPaused(false);
              setStatusText(
                "Coffee won this round. Try another village sprint.",
              );
              playTone(180, 0.22, "square", 0.05);

              setScore((currentScore) => {
                const finalScore = currentScore;
                setLeaderboard((previous) => {
                  const updated = [
                    ...previous,
                    { name: selectedCharacter.name, score: finalScore },
                  ]
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 5);
                  return updated;
                });

                setBestScores((currentScores) => {
                  const nextBestScore = Math.max(
                    currentScores[selectedLevelId] ?? 0,
                    finalScore,
                  );
                  const updatedScores = {
                    ...currentScores,
                    [selectedLevelId]: nextBestScore,
                  };

                  const unlocked = new Set(unlockedLevelIds);
                  for (const level of levels) {
                    if ((updatedScores[level.id] ?? 0) >= level.requiredScore) {
                      unlocked.add(level.id);
                    }
                  }

                  setUnlockedLevelIds(
                    levels
                      .filter((level) => unlocked.has(level.id))
                      .map((level) => level.id),
                  );
                  return updatedScores;
                });

                return currentScore;
              });
            }
            return nextLives;
          });
          setStatusText("Coffee alert! Keep moving, bhai.");
        }

        return remaining;
      });
    }, 90);

    return () => window.clearInterval(gameLoop);
  }, [
    gameStarted,
    gameOver,
    isPaused,
    playerLane,
    playTone,
    score,
    selectedCharacter.name,
    selectedLevelId,
    unlockedLevelIds,
  ]);

  const handleLevelSelect = (levelId: string) => {
    const level = levels.find((entry) => entry.id === levelId);
    if (
      !level ||
      (!unlockedLevelIds.includes(levelId) && level.id !== levels[0].id)
    ) {
      return;
    }

    setSelectedLevelId(levelId);
    setStatusText(`${selectedCharacter.name} moved to ${level.name}.`);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 32) {
      moveLane(deltaX < 0 ? "left" : "right");
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120d12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_rgba(18,13,18,0)_35%),linear-gradient(180deg,_#1f0d12_0%,_#120d12_35%,_#0d0b13_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-5 md:px-6 lg:px-8">
        <header className="mb-5 flex items-center justify-between gap-3 rounded-full border border-amber-200/15 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-amber-200/80">
              Bangla runner
            </p>
            <h1 className="mt-1 text-lg font-semibold text-white">
              {villageScene.name}
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/80">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              {bestScore} best
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              {lives} lives
            </span>
          </div>
        </header>

        <div className="grid flex-1 gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#170f1d]/70 p-4 shadow-[0_25px_65px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-amber-200/15 bg-gradient-to-br from-[#311b12] via-[#1b1222] to-[#120d12] p-4">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-amber-100/70">
                Choose your rider
              </p>
              <div className="mt-4 grid gap-3">
                {characters.map((character) => {
                  const isSelected = character.id === selectedCharacter.id;
                  return (
                    <button
                      key={character.id}
                      type="button"
                      onClick={() => setSelectedCharacter(character)}
                      className={`flex items-center justify-between rounded-[1.25rem] border px-3 py-3 text-left transition ${
                        isSelected
                          ? "border-amber-200/50 bg-amber-400/10 shadow-[0_12px_30px_rgba(251,191,36,0.15)]"
                          : "border-white/10 bg-white/3 hover:bg-white/6"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${character.accent} text-xl`}
                        >
                          {character.emoji}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-white">
                            {character.name}
                          </div>
                          <div className="text-[0.62rem] uppercase tracking-[0.18em] text-white/60">
                            {character.title}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl">{isSelected ? "✓" : "→"}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-white/55">
                Selected rider
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${selectedCharacter.accent} text-2xl`}
                >
                  {selectedCharacter.emoji}
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">
                    {selectedCharacter.name}
                  </div>
                  <div className="text-xs text-amber-100/80">
                    {selectedCharacter.tagline}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-white/55">
                Scenario routes
              </p>
              <div className="mt-3 grid gap-2">
                {levels.map((level) => {
                  const isUnlocked =
                    unlockedLevelIds.includes(level.id) ||
                    level.id === levels[0].id;
                  const isSelected = level.id === selectedLevelId;

                  return (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => handleLevelSelect(level.id)}
                      disabled={!isUnlocked}
                      className={`rounded-[1rem] border px-3 py-2 text-left transition ${
                        isSelected
                          ? "border-amber-200/50 bg-amber-400/10"
                          : isUnlocked
                            ? "border-white/10 bg-white/5 hover:bg-white/8"
                            : "border-white/5 bg-white/[0.02] opacity-45"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {level.name}
                          </div>
                          <div className="text-[0.58rem] uppercase tracking-[0.18em] text-white/55">
                            {isUnlocked
                              ? "Unlocked"
                              : `Needs ${level.requiredScore}`}
                          </div>
                        </div>
                        <span className="text-lg">
                          {isSelected ? "✓" : isUnlocked ? "→" : "🔒"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-white/55">
                Run status
              </p>
              <div className="mt-3 text-xl font-semibold text-white">
                {score}
              </div>
              <div className="mt-2 text-sm text-white/75">{statusText}</div>
              <div className="mt-4 text-xs leading-6 text-white/60">
                {storyLine}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-white/55">
                Leaderboard
              </p>
              <div className="mt-3 space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={`${entry.name}-${index}`}
                    className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
                  >
                    <span>
                      {index + 1}. {entry.name}
                    </span>
                    <span className="text-amber-100">{entry.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!gameStarted) {
                    handleStartRun();
                    return;
                  }
                  if (gameOver) {
                    handleStartRun();
                    return;
                  }
                  setIsPaused((current) => !current);
                }}
                className="flex-1 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-950 shadow-[0_18px_35px_rgba(251,191,36,0.25)]"
              >
                {!gameStarted
                  ? "Start run"
                  : gameOver
                    ? "Play again"
                    : isPaused
                      ? "Resume"
                      : "Pause"}
              </button>
              <button
                type="button"
                onClick={() => setSoundEnabled((current) => !current)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-3 text-xs uppercase tracking-[0.18em] text-white/80"
              >
                {soundEnabled ? "SFX" : "Mute"}
              </button>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-black/10 p-3">
              <div className="mb-2 flex items-center justify-between text-[0.56rem] uppercase tracking-[0.22em] text-white/55">
                <span>Speed</span>
                <span>Lv {speedLevel}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200"
                  style={{ width: `${Math.min(100, (speedLevel / 6) * 100)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => moveLane("left")}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
              >
                ← Left
              </button>
              <button
                type="button"
                onClick={() => moveLane("right")}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
              >
                Right →
              </button>
            </div>
          </aside>

          <section
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1f120f]/70 shadow-[0_30px_90px_rgba(0,0,0,0.42)]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,157,0.18),_rgba(18,13,18,0)_40%),linear-gradient(180deg,_#f7c95b_0%,_#f59e0b_24%,_#8a3b18_100%)]"
              style={{ backgroundPositionY: `${worldScroll * 1.4}px` }}
            />

            <div
              className="absolute inset-x-[8%] bottom-[6%] top-[16%] overflow-hidden rounded-[40px] border border-white/15 bg-[#ffedb3]/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.08)]"
              style={{
                transform: `translateY(${(worldScroll % 120) * 0.4}px)`,
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(120,146,80,0.18),_rgba(38,64,32,0.2))]" />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-[#2a5d3a] via-[#1d3d2b] to-[#0d2018]" />
              <div className="absolute inset-x-0 bottom-[28%] h-[16%] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.28)_14%,_rgba(255,255,255,0)_28%,_rgba(255,255,255,0.28)_42%,_rgba(255,255,255,0)_60%,_rgba(255,255,255,0.28)_74%,_rgba(255,255,255,0)_90%)] opacity-70" />
              <div className="absolute inset-x-[10%] bottom-[11%] h-[20%] rounded-t-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(51,65,85,0.45),_rgba(15,23,42,0.85))]" />
              <div className="absolute inset-x-[11%] bottom-[12%] h-[18%] rounded-t-[2.25rem] bg-[linear-gradient(90deg,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0)_18%,_rgba(255,255,255,0)_82%,_rgba(255,255,255,0.06)_100%)]" />

              {[0, 1, 2, 3, 4, 5, 6].map((lane) => (
                <div
                  key={lane}
                  className="absolute inset-y-[8%] w-[2px] bg-white/25"
                  style={{
                    left: `${18 + lane * 12}%`,
                    transform: `translateY(${(worldScroll * 0.9 + lane * 5) % 28}px)`,
                  }}
                />
              ))}

              {Array.from({ length: 9 }).map((_, index) => {
                const x = (index * 14 + ((worldScroll * 0.7) % 14)) % 100;
                return (
                  <div
                    key={`tree-${index}`}
                    className="absolute bottom-[18%] z-10"
                    style={{
                      left: `${x}%`,
                      transform: `translateX(-50%) scale(${0.8 + (index % 3) * 0.12})`,
                    }}
                  >
                    <div className="relative h-16 w-12">
                      <div className="absolute bottom-0 left-1/2 h-6 w-2 -translate-x-1/2 rounded-full bg-[#4b2d1d]" />
                      <div className="absolute bottom-4 left-1/2 h-9 w-9 -translate-x-1/2 rounded-full bg-[#4ade80] shadow-[0_0_25px_rgba(74,222,128,0.45)]" />
                      <div className="absolute bottom-7 left-1/2 h-8 w-10 -translate-x-1/2 rounded-full bg-[#22c55e]" />
                    </div>
                  </div>
                );
              })}

              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`hut-${index}`}
                  className="absolute bottom-[20%] z-10"
                  style={{
                    left: `${12 + index * 15}%`,
                    transform: `translateX(-50%)`,
                  }}
                >
                  <div className="relative h-16 w-16 rounded-t-[1rem] border border-amber-100/30 bg-[#f6d36c]/25 shadow-[inset_0_0_16px_rgba(255,255,255,0.1)]">
                    <div className="absolute inset-x-2 bottom-0 h-[26%] rounded-t-md bg-[#8b5e34]" />
                    <div className="absolute inset-x-3 top-2 h-[26%] rounded-md bg-[#fde68a]/80" />
                    <div className="absolute left-2 top-8 h-[38%] w-[18%] rounded bg-[#fbbf24]" />
                    <div className="absolute right-2 top-8 h-[38%] w-[18%] rounded bg-[#fbbf24]" />
                  </div>
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.10)_14%,_rgba(255,255,255,0)_30%,_rgba(255,255,255,0.10)_48%,_rgba(255,255,255,0)_68%,_rgba(255,255,255,0.10)_84%,_rgba(255,255,255,0)_100%)] opacity-80" />
            </div>

            <div className="absolute left-0 right-0 top-0 flex items-start justify-between px-5 py-4 text-white/85">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-amber-50/80">
                  {villageScene.name}
                </p>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                  {villageScene.subtitle}
                </h2>
              </div>
              <div className="rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-sm font-medium">
                {score} pts
              </div>
            </div>

            {decor.map((piece) => (
              <div
                key={piece.id}
                className="absolute bottom-[18%] z-10 opacity-80"
                style={{
                  left: `${piece.x}%`,
                  height: `${piece.height}px`,
                  width:
                    piece.kind === "rickshaw"
                      ? "72px"
                      : piece.kind === "stall"
                        ? "64px"
                        : "46px",
                }}
              >
                {piece.kind === "tree" && (
                  <div className="relative h-full w-full">
                    <div className="absolute bottom-0 left-1/2 h-[45%] w-[16%] -translate-x-1/2 rounded-full bg-[#4b2d1d]" />
                    <div className="absolute bottom-[18%] left-1/2 h-[48%] w-[68%] -translate-x-1/2 rounded-full bg-[#4ade80]" />
                    <div className="absolute bottom-[26%] left-1/2 h-[38%] w-[76%] -translate-x-1/2 rounded-full bg-[#22c55e]" />
                  </div>
                )}
                {piece.kind === "stall" && (
                  <div className="relative h-full w-full rounded-[1rem] border border-amber-100/40 bg-[#f59e0b]/30 shadow-[inset_0_0_18px_rgba(255,255,255,0.2)]">
                    <div className="absolute inset-x-2 bottom-0 h-[35%] rounded-t-xl bg-[#8b4513]" />
                    <div className="absolute inset-x-3 top-2 h-[24%] rounded-md bg-[#fef3c7]/80" />
                    <div className="absolute left-2 top-8 h-[42%] w-[20%] rounded bg-[#f3b95f]" />
                    <div className="absolute right-2 top-8 h-[42%] w-[20%] rounded bg-[#f3b95f]" />
                  </div>
                )}
                {piece.kind === "rickshaw" && (
                  <div className="relative h-full w-full rounded-[0.9rem] border border-amber-100/30 bg-[#fcd34d]/20">
                    <div className="absolute inset-x-2 bottom-0 h-[24%] rounded-md bg-[#1f2937]" />
                    <div className="absolute inset-x-4 bottom-[18%] h-[36%] rounded-md bg-[#f97316]" />
                    <div className="absolute left-3 top-3 h-[20%] w-[16%] rounded-full bg-[#fbbf24]" />
                    <div className="absolute right-3 top-3 h-[20%] w-[16%] rounded-full bg-[#fbbf24]" />
                  </div>
                )}
              </div>
            ))}

            <div className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2">
              <motion.div
                animate={{
                  x: lanePositions[playerLane] - 50,
                  y: 0,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="relative h-28 w-20"
              >
                <motion.div
                  animate={{ rotate: [8, -8, 8] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-0 h-7 w-7 -translate-x-1/2 rounded-full border-2 border-white/60 bg-[#f8fafc] shadow-[0_8px_18px_rgba(15,23,42,0.22)]"
                />
                <motion.div
                  animate={{ rotate: [18, -18, 18] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-5 h-8 w-4 -translate-x-1/2 rounded-full bg-[#f8fafc]"
                />
                <motion.div
                  animate={{ rotate: [-28, 28, -28] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[30%] top-10 h-10 w-3 rounded-full bg-[#f8fafc]"
                />
                <motion.div
                  animate={{ rotate: [28, -28, 28] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[30%] top-10 h-10 w-3 rounded-full bg-[#f8fafc]"
                />
                <motion.div
                  animate={{ rotate: [-12, 18, -12] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[32%] top-[5.3rem] h-8 w-3 rounded-full bg-[#f8fafc]"
                />
                <motion.div
                  animate={{ rotate: [18, -12, 18] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[32%] top-[5.3rem] h-8 w-3 rounded-full bg-[#f8fafc]"
                />
                <div className="absolute left-1/2 top-12 h-12 w-12 -translate-x-1/2 rounded-[1.2rem] border border-white/15 bg-gradient-to-b from-white/5 via-white/10 to-transparent shadow-[0_18px_30px_rgba(15,23,42,0.25)]" />
                <div
                  className={`absolute left-1/2 top-14 h-16 w-16 -translate-x-1/2 rounded-[1.5rem] border border-white/15 bg-gradient-to-b ${selectedCharacter.accent} shadow-[0_18px_35px_rgba(15,23,42,0.25)]`}
                />
                <div className="absolute left-1/2 top-[4.9rem] flex -translate-x-1/2 items-center justify-center text-4xl">
                  {selectedCharacter.emoji}
                </div>
              </motion.div>
            </div>

            {items.map((item) => (
              <div
                key={item.id}
                className="absolute z-20 -translate-x-1/2 transition-all duration-75"
                style={{
                  left: `${lanePositions[item.lane]}%`,
                  bottom: `${item.y}%`,
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 90, 180] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-xl shadow-[0_0_18px_rgba(251,191,36,0.38)] ${
                    item.type === "tea"
                      ? "border-amber-200/70 bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-500"
                      : "border-rose-200/70 bg-gradient-to-br from-rose-200 via-red-300 to-pink-500"
                  }`}
                >
                  {item.type === "tea" ? "🪙" : "☕"}
                </motion.div>
              </div>
            ))}

            {!gameStarted && !gameOver && (
              <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#120d12]/55 backdrop-blur-sm">
                <div className="w-[min(86%,480px)] rounded-[2rem] border border-amber-200/20 bg-[#1d1714]/90 p-6 text-left shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-amber-100/80">
                    How to play
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold text-white">
                    Run the village lane
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                    <li>• Tap Start Run or press the main button to begin.</li>
                    <li>
                      • Swipe left/right or use the Left / Right buttons to
                      change lanes.
                    </li>
                    <li>
                      • Collect coins to build score and avoid coffee cups or
                      you lose a life.
                    </li>
                    <li>
                      • Keep moving and unlock more routes as your score climbs.
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={handleStartRun}
                    className="mt-6 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-950"
                  >
                    Start run
                  </button>
                </div>
              </div>
            )}

            <div className="absolute left-4 top-20 max-w-xs rounded-[1.5rem] border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-amber-100/80">
                Morning vibe
              </p>
              <p className="mt-3 text-sm leading-6 text-white/80">
                {villageScene.story}
              </p>
            </div>

            {gameOver && (
              <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#120d12]/70 backdrop-blur-sm">
                <div className="w-[min(86%,420px)] rounded-[2rem] border border-amber-200/25 bg-[#1c1517]/90 p-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-amber-100/80">
                    Run complete
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold text-white">
                    {score} pts
                  </h3>
                  <p className="mt-3 text-sm text-white/75">
                    {selectedCharacter.name} finished the village lane with{" "}
                    {lives} lives left.
                  </p>
                  <button
                    type="button"
                    onClick={handleStartRun}
                    className="mt-6 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-950"
                  >
                    Run again
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
