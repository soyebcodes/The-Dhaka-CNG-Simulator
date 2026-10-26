"use client";

import { useEffect, useRef } from "react";

export default function SobjirTruckGame() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run in client
    const scriptId = "sobjir-truck-engine";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.src = "/game/sobjir-truck.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional: script cleanup if needed on full unmount
    };
  }, []);

  return (
    <div id="app" ref={containerRef}>
      <canvas id="game-canvas" aria-label="সবজির ট্রাক গেম" />
      <div id="ui-root" />
      <main id="boot">
        <h1>সবজির ট্রাক</h1>
        <p>ক্ষেতে সস্তা, বাজারে আগুন — মাঝের রাস্তাটা নিজে চালিয়ে দেখুন।</p>
        <p className="boot-more">
          যশোর, রাজশাহী বা ফরিদপুরের ক্ষেত থেকে সবজি কিনে ঢাকার কাওরান বাজারের পথে
          ট্রাক চালান। পথে চাঁদাবাজির ব্যারিকেড, লালন শাহ, যমুনা ও পদ্মা সেতুর
          টোল, রেলক্রসিং, বাজার ও স্কুল এলাকা, বৃষ্টি-ঝড় আর রাত। শেষে হিসাব:
          প্রতি কেজিতে কত গেল চাঁদায়।
        </p>
        <p className="boot-loading">লোড হচ্ছে…</p>
        <noscript>
          <p>এই গেম খেলতে ব্রাউজারে JavaScript চালু করুন।</p>
        </noscript>
      </main>
    </div>
  );
}
