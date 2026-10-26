"use client";

import CNGGameCanvas from "../components/canvas/cng-game-canvas";
import CNGHud from "../components/ui/cng-hud";
import CheckpointModal from "../components/ui/checkpoint-modal";
import PassengerModal from "../components/ui/passenger-modal";
import StartScreenModal from "../components/ui/start-screen-modal";
import GameOverModal from "../components/ui/game-over-modal";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#161b22] select-none font-sans">
      {/* 3D Three.js WebGL Canvas */}
      <CNGGameCanvas />

      {/* 2D UI Overlay */}
      <CNGHud />
      <CheckpointModal />
      <PassengerModal />
      <StartScreenModal />
      <GameOverModal />
    </main>
  );
}
