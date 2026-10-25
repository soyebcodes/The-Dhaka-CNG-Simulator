"use client";

import { Howl } from "howler";
import { useEffect, useRef } from "react";

const ambientUrl = "/audio/ambient.wav";

export function AudioController({ enabled }: { enabled: boolean }) {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [ambientUrl],
      loop: true,
      volume: 0.22,
      autoplay: false,
    });

    return () => {
      soundRef.current?.stop();
      soundRef.current?.unload();
      soundRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!soundRef.current) {
      return;
    }

    if (enabled) {
      soundRef.current.play();
    } else {
      soundRef.current.stop();
    }
  }, [enabled]);

  return null;
}
