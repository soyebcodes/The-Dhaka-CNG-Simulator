"use client";

import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bodies, Body, Engine, World } from "matter-js";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

export type TeaProfile = {
  milk: number;
  sugar: number;
  ginger: number;
  aroma: number;
};

type ChaBaanSceneProps = {
  teaProfile: TeaProfile;
  audioEnabled: boolean;
  dropSignal: number;
  onScoreChange: (score: number, verdict: string) => void;
};

type BiscuitState = "idle" | "dropping" | "settled";

function getTeaColor(profile: TeaProfile) {
  const temperatureMix = profile.aroma / 100;
  const milkBlend = profile.milk / 100;
  const sugarBlend = profile.sugar / 100;

  const r = Math.round(
    124 + 54 * milkBlend + 18 * sugarBlend + 42 * temperatureMix,
  );
  const g = Math.round(
    72 + 70 * milkBlend + 58 * sugarBlend + 18 * temperatureMix,
  );
  const b = Math.round(
    34 + 46 * milkBlend + 26 * sugarBlend + 6 * temperatureMix,
  );

  return `rgb(${r}, ${g}, ${b})`;
}

function TeaCup({ teaColor }: { teaColor: string }) {
  return (
    <group position={[0, 0.6, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.95, 1.05, 1.6, 40]} />
        <meshStandardMaterial
          color="#f7e7d9"
          metalness={0.1}
          roughness={0.18}
          transparent
          opacity={0.82}
        />
      </mesh>

      <mesh castShadow position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.82, 0.9, 1.05, 40]} />
        <meshStandardMaterial
          color={teaColor}
          roughness={0.48}
          metalness={0.15}
        />
      </mesh>

      <mesh castShadow position={[0, 0.82, 0]}>
        <torusGeometry args={[0.8, 0.08, 18, 60]} />
        <meshStandardMaterial
          color="#f5f1ec"
          roughness={0.45}
          metalness={0.22}
        />
      </mesh>

      <mesh
        castShadow
        position={[0.82, 0.25, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.08, 0.1, 0.7, 18]} />
        <meshStandardMaterial color="#f7d9ba" roughness={0.6} />
      </mesh>
    </group>
  );
}

function SteamParticles({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        x: (index % 4) * 0.12 - 0.22,
        z: Math.floor(index / 4) * 0.12 - 0.22,
      })),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.children.forEach((mesh, index) => {
      const child = mesh as THREE.Mesh;
      const drift = index * 0.37;
      const phase = state.clock.elapsedTime * 0.8 + drift;
      child.position.y = 1.2 + (phase % 1.4) * 0.75;
      child.position.x = particles[index].x + Math.sin(phase * 2.1) * 0.08;
      child.position.z = particles[index].z + Math.cos(phase * 1.8) * 0.08;
      const material = child.material as THREE.MeshStandardMaterial;
      material.opacity = active ? 0.45 : 0.08;
    });
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {particles.map(({ id, x, z }) => (
        <mesh key={id} position={[x, 1.2, z]}>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshStandardMaterial color="#fce8d2" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function BiscuitPhysics({
  dropSignal,
  onScoreChange,
}: {
  dropSignal: number;
  onScoreChange: (score: number, verdict: string) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const engineRef = useRef<Engine | null>(null);
  const bodyRef = useRef<Matter.Body | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const resolvedRef = useRef(false);
  const [state, setState] = useState<BiscuitState>("idle");

  useEffect(() => {
    const engine = Engine.create();
    engine.gravity.y = 0.13;

    const body = Bodies.rectangle(0.4, 2.6, 0.7, 0.32, {
      restitution: 0.18,
      friction: 0.18,
      density: 0.002,
      frictionAir: 0.016,
      chamfer: { radius: 0.08 },
    });

    World.add(engine.world, [body]);
    engineRef.current = engine;
    bodyRef.current = body;

    return () => {
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  useEffect(() => {
    if (!bodyRef.current || !engineRef.current) {
      return;
    }

    const body = bodyRef.current;
    Body.setPosition(body, { x: 0.35, y: 2.8 });
    Body.setVelocity(body, { x: 0.18, y: 0.12 });
    Body.setAngle(body, 0);
    Body.setAngularVelocity(body, 0.08);
    startedAtRef.current = performance.now();
    resolvedRef.current = false;
    setState("dropping");
  }, [dropSignal]);

  useFrame((_, delta) => {
    const engine = engineRef.current;
    const body = bodyRef.current;

    if (!engine || !body || !meshRef.current) {
      return;
    }

    Engine.update(engine, delta * 60);

    const x = body.position.x * 0.9;
    const y = 1.05 - body.position.y * 0.44;

    meshRef.current.position.set(x, y, 0.7);
    meshRef.current.rotation.set(0, 0, body.angle + Math.PI / 2);

    const inCup =
      body.position.y > 0.85 &&
      body.position.y < 1.3 &&
      Math.abs(body.position.x) < 0.72 &&
      state === "dropping";

    if (inCup && !resolvedRef.current && startedAtRef.current !== null) {
      resolvedRef.current = true;
      const elapsedSeconds = (performance.now() - startedAtRef.current) / 1000;
      let score = 0;
      let verdict = "Too quick";

      if (elapsedSeconds < 1.6) {
        score = 65;
        verdict = "Crisp & cozy";
      } else if (elapsedSeconds < 3.2) {
        score = 100;
        verdict = "Perfect dunk";
      } else if (elapsedSeconds < 4.8) {
        score = 80;
        verdict = "Soft & soaked";
      } else {
        score = 55;
        verdict = "A little too messy";
      }

      setState("settled");
      onScoreChange(score, verdict);
    }

    if (body.position.y > 2.2 && state === "dropping") {
      setState("idle");
    }
  });

  const dominantColor = state === "settled" ? "#d7a76f" : "#f7d7a6";

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[0.7, 0.18, 0.7]} />
      <meshStandardMaterial
        color={dominantColor}
        roughness={0.7}
        metalness={0.12}
      />
    </mesh>
  );
}

function StallProps() {
  return (
    <group position={[0, 1.4, -1.6]}>
      <mesh castShadow position={[0, 0.4, 0]}>
        <boxGeometry args={[2.1, 1.1, 0.12]} />
        <meshStandardMaterial
          color="#2d1d17"
          roughness={0.68}
          metalness={0.15}
        />
      </mesh>
      <mesh position={[0, 0.12, 0.08]}>
        <planeGeometry args={[1.8, 0.8]} />
        <meshStandardMaterial
          color="#ffad70"
          emissive="#ffb96c"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 0.12, 0.1]}>
        <planeGeometry args={[1.6, 0.62]} />
        <meshBasicMaterial color="#5d2f1d" />
      </mesh>
    </group>
  );
}

function TeaStallSceneContent({
  teaProfile,
  audioEnabled,
  dropSignal,
  onScoreChange,
}: ChaBaanSceneProps) {
  const teaColor = useMemo(() => getTeaColor(teaProfile), [teaProfile]);
  const dropletPulse = dropSignal > 0;

  return (
    <>
      <color attach="background" args={["#170f14"]} />
      <fog attach="fog" args={["#170f14", 5, 13]} />
      <ambientLight
        intensity={0.8 + (audioEnabled ? 0.1 : 0)}
        color="#ffc18f"
      />
      <directionalLight
        castShadow
        position={[3.5, 5.5, 3.2]}
        intensity={1.7}
        color="#ffd7a8"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[-4, 5, 4]}
        angle={0.5}
        penumbra={1}
        intensity={55}
        color="#ffb37a"
      />

      <group position={[0, -0.25, 0]}>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.7, 0]}
        >
          <circleGeometry args={[5.4, 64]} />
          <meshStandardMaterial color="#2f1d1d" roughness={0.95} />
        </mesh>

        <mesh castShadow receiveShadow position={[0, -0.95, 0]}>
          <cylinderGeometry args={[2.5, 2.6, 0.65, 64]} />
          <meshStandardMaterial color="#5c382d" roughness={0.78} />
        </mesh>

        <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
          <cylinderGeometry args={[2.2, 2.3, 0.22, 64]} />
          <meshStandardMaterial color="#c68d5d" roughness={0.62} />
        </mesh>

        <TeaCup teaColor={teaColor} />
        <BiscuitPhysics dropSignal={dropSignal} onScoreChange={onScoreChange} />
        <SteamParticles active={dropletPulse} />

        <mesh position={[1.6, 0.4, 0.8]} castShadow>
          <boxGeometry args={[0.48, 0.48, 0.48]} />
          <meshStandardMaterial
            color="#f7d981"
            roughness={0.75}
            metalness={0.2}
          />
        </mesh>

        <mesh position={[-1.7, 0.45, -0.3]} castShadow>
          <boxGeometry args={[0.5, 0.62, 0.5]} />
          <meshStandardMaterial color="#d6b48d" roughness={0.8} />
        </mesh>

        <StallProps />
      </group>

      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.6}
        scale={8}
        blur={2.2}
      />
      <OrbitControls
        enablePan={false}
        minDistance={5.2}
        maxDistance={8}
        minPolarAngle={Math.PI / 3.8}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
}

export function ChaBaanScene(props: ChaBaanSceneProps) {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{ position: [0, 1.8, 5.6], fov: 42 }}
        dpr={[1, 2]}
      >
        <TeaStallSceneContent {...props} />
      </Canvas>
    </div>
  );
}
