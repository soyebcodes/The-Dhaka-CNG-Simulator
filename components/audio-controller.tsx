"use client";

import { Howl } from "howler";
import { useEffect, useRef } from "react";

const ambientUrl = "/audio/ambient.wav";
const kettleUrl = "/audio/kettle.wav";
const clinkUrl = "/audio/clink.wav";
const splashUrl = "/audio/splash.wav";

export function AudioController({
  enabled,
  radioEnabled,
  cue,
}: {
  enabled: boolean;
  radioEnabled: boolean;
  cue: number;
}) {
  const ambientRef = useRef<Howl | null>(null);
  const kettleRef = useRef<Howl | null>(null);
  const clinkRef = useRef<Howl | null>(null);
  const splashRef = useRef<Howl | null>(null);

  useEffect(() => {
    ambientRef.current = new Howl({
      src: [ambientUrl],
      loop: true,
      volume: 0.14,
      autoplay: false,
    });
    kettleRef.current = new Howl({
      src: [kettleUrl],
      loop: true,
      volume: 0,
      autoplay: false,
    });
    clinkRef.current = new Howl({
      src: [clinkUrl],
      loop: false,
      volume: 0.25,
      autoplay: false,
    });
    splashRef.current = new Howl({
      src: [splashUrl],
      loop: false,
      volume: 0.22,
      autoplay: false,
    });

    return () => {
      ambientRef.current?.stop();
      kettleRef.current?.stop();
      clinkRef.current?.stop();
      splashRef.current?.stop();
      ambientRef.current?.unload();
      kettleRef.current?.unload();
      clinkRef.current?.unload();
      splashRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    if (!ambientRef.current || !kettleRef.current) {
      return;
    }

    if (!enabled) {
      ambientRef.current.stop();
      kettleRef.current.stop();
      return;
    }

    ambientRef.current.volume(radioEnabled ? 0.16 : 0.08);
    ambientRef.current.play();

    kettleRef.current.volume(radioEnabled ? 0.2 : 0);
    if (radioEnabled) {
      kettleRef.current.play();
    } else {
      kettleRef.current.stop();
    }
  }, [enabled, radioEnabled]);

  useEffect(() => {
    if (!enabled || cue === 0) {
      return;
    }

    const play = cue % 2 === 0 ? splashRef.current : clinkRef.current;
    if (play) {
      play.stop();
      play.play();
    }
  }, [cue, enabled]);

  return null;
}
