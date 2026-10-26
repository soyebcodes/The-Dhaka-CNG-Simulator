class CNGAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted = false;
  private masterGain: GainNode | null = null;
  private engineGain: GainNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineSubOsc: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private isRunning = false;

  private initContext(): void {
    if (this.ctx) return;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.isMuted ? 0 : 0.7;
    this.masterGain.connect(this.ctx.destination);
    this.initEngineAudio();
  }

  private initEngineAudio(): void {
    if (!this.ctx || !this.masterGain) return;

    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = "lowpass";
    this.engineFilter.frequency.value = 650;

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.value = 0;

    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = "sawtooth";
    this.engineOsc.frequency.value = 55;

    this.engineSubOsc = this.ctx.createOscillator();
    this.engineSubOsc.type = "square";
    this.engineSubOsc.frequency.value = 27.5;

    const subGain = this.ctx.createGain();
    subGain.gain.value = 0.4;

    this.engineOsc.connect(this.engineFilter);
    this.engineSubOsc.connect(subGain);
    subGain.connect(this.engineFilter);

    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.engineOsc.start();
    this.engineSubOsc.start();
    this.isRunning = true;
  }

  public ensureStarted(): void {
    if (!this.ctx) {
      this.initContext();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      void this.ctx.resume();
    }
  }

  public setEngineState(speedRatio: number, isAccelerating: boolean): void {
    if (!this.ctx || !this.engineGain || !this.engineOsc || !this.engineSubOsc) {
      return;
    }

    const baseFreq = 50 + speedRatio * 95 + (isAccelerating ? 25 : 0);
    const targetGain = this.isRunning ? 0.08 + speedRatio * 0.12 + (isAccelerating ? 0.06 : 0) : 0;

    const t = this.ctx.currentTime;
    this.engineOsc.frequency.setTargetAtTime(baseFreq, t, 0.08);
    this.engineSubOsc.frequency.setTargetAtTime(baseFreq * 0.5, t, 0.08);
    this.engineGain.gain.setTargetAtTime(targetGain, t, 0.08);
  }

  public honk(): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    // Iconic high-pitched dual-tone Dhaka CNG horn "Pee-Pee"
    const freqs = [784, 987]; // G5, B5
    freqs.forEach((freq) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
      gain.gain.setValueAtTime(0.18, now + 0.16);
      gain.gain.linearRampToValueAtTime(0, now + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.25);
    });
  }

  public whistle(): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const vibrato = this.ctx.createOscillator();
    const vibGain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(2400, now);

    vibrato.frequency.setValueAtTime(25, now);
    vibGain.gain.setValueAtTime(80, now);
    vibrato.connect(vibGain);
    vibGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.03);
    gain.gain.setValueAtTime(0.12, now + 0.28);
    gain.gain.linearRampToValueAtTime(0, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    vibrato.start(now);
    osc.stop(now + 0.38);
    vibrato.stop(now + 0.38);
  }

  public siren(active: boolean): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted || !active) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.linearRampToValueAtTime(950, now + 0.3);
    osc.frequency.linearRampToValueAtTime(650, now + 0.6);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.55);
    gain.gain.linearRampToValueAtTime(0, now + 0.65);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.7);
  }

  public cash(): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    [1046, 1318, 1567].forEach((f, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, now + idx * 0.07);

      gain.gain.setValueAtTime(0.15, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.3);
    });
  }

  public crash(): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    // Heavy impact thud
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.45);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    // Metal crunch & glass shatter harmonic
    const metal = this.ctx.createOscillator();
    const metalGain = this.ctx.createGain();
    metal.type = "square";
    metal.frequency.setValueAtTime(420, now);
    metal.frequency.exponentialRampToValueAtTime(80, now + 0.3);

    metalGain.gain.setValueAtTime(0.25, now);
    metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain).connect(this.masterGain);
    metal.connect(metalGain).connect(this.masterGain);

    osc.start(now);
    metal.start(now);
    osc.stop(now + 0.55);
    metal.stop(now + 0.4);
  }

  public yell(): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.linearRampToValueAtTime(580, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.4);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain).connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  public nitro(): void {
    this.ensureStarted();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(750, now + 0.4);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.55);
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.value = this.isMuted ? 0 : 0.7;
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

export const cngAudio = new CNGAudioEngine();
