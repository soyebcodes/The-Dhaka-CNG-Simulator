"use client";

import { useMemo, useState } from "react";
import { AudioController } from "@/components/audio-controller";
import { ChaBaanScene, type TeaProfile } from "@/components/cha-baan-scene";
import { TeaUi } from "@/components/tea-ui";

const initialTeaProfile: TeaProfile = {
  milk: 58,
  sugar: 42,
  ginger: 34,
  aroma: 72,
};

export default function Home() {
  const [teaProfile, setTeaProfile] = useState<TeaProfile>(initialTeaProfile);
  const [score, setScore] = useState(0);
  const [verdict, setVerdict] = useState("Ready to dip");
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [dropSignal, setDropSignal] = useState(0);

  const teaSceneProfile = useMemo(() => teaProfile, [teaProfile]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120d12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,170,110,0.18),_rgba(18,13,18,0)_38%),linear-gradient(180deg,_#1c140e_0%,_#120d12_42%,_#09070a_100%)]" />

      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <ChaBaanScene
            teaProfile={teaSceneProfile}
            audioEnabled={audioEnabled}
            dropSignal={dropSignal}
            onScoreChange={(nextScore, nextVerdict) => {
              setScore(nextScore);
              setVerdict(nextVerdict);
            }}
          />
        </div>

        <TeaUi
          teaProfile={teaProfile}
          onChange={setTeaProfile}
          onDrop={() => {
            setDropSignal((current) => current + 1);
            setVerdict("Dipping...");
            setScore((value) => Math.max(0, value - 10));
          }}
          score={score}
          verdict={verdict}
          audioEnabled={audioEnabled}
          onAudioToggle={() => setAudioEnabled((current) => !current)}
        />
      </div>

      <AudioController enabled={audioEnabled} />
    </main>
  );
}
