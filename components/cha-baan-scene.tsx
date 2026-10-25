"use client";

import { ContactShadows, OrbitControls, Text } from "@react-three/drei";
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
  radioEnabled: boolean;
  dropSignal: number;
  soundCue: number;
  dropBurst: number;
  impactShake: number;
  onScoreChange: (score: number, verdict: string) => void;
  onRadioToggle: () => void;
};

type BiscuitState = "idle" | "dropping" | "settled" | "broken";

function getTeaColor(profile: TeaProfile) {
  const temperatureMix = profile.aroma / 100;
  const milkBlend = profile.milk / 100;
  const sugarBlend = profile.sugar / 100;

  const r = Math.round(
    120 + 58 * milkBlend + 22 * sugarBlend + 54 * temperatureMix,
  );
  const g = Math.round(
    80 + 66 * milkBlend + 60 * sugarBlend + 26 * temperatureMix,
  );
  const b = Math.round(
    130 + 52 * milkBlend + 34 * sugarBlend + 18 * temperatureMix,
  );

  return `rgb(${r}, ${g}, ${b})`;
}

function TeaCup({ teaColor, isHot }: { teaColor: string; isHot: boolean }) {
  return (
    <group position={[0, 0.68, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.98, 1.08, 1.7, 42]} />
        <meshStandardMaterial
          color="#f7e6d5"
          metalness={0.12}
          roughness={0.28}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh castShadow position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.82, 0.88, 1.1, 40]} />
        <meshStandardMaterial
          color={teaColor}
          roughness={0.45}
          metalness={0.18}
          emissive={isHot ? "#f59e0b" : "#000000"}
          emissiveIntensity={isHot ? 0.2 : 0}
        />
      </mesh>

      <mesh castShadow position={[0, 0.9, 0]}>
        <torusGeometry args={[0.82, 0.08, 18, 60]} />
        <meshStandardMaterial
          color="#f5f1ec"
          roughness={0.42}
          metalness={0.22}
        />
      </mesh>

      <mesh castShadow position={[0.83, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.1, 0.72, 18]} />
        <meshStandardMaterial color="#f7d7b0" roughness={0.6} />
      </mesh>

      <Text
        position={[0, 0.2, 0.92]}
        fontSize={0.18}
        color="#fff7cc"
        anchorX="center"
        anchorY="middle"
      >
        LOL
      </Text>
    </group>
  );
}

function SteamParticles({
  active,
  intensity,
}: {
  active: boolean;
  intensity: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        x: ((index % 6) - 2.5) * 0.14,
        z: Math.floor(index / 6) * 0.14 - 0.2,
      })),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.children.forEach((mesh, index) => {
      const child = mesh as THREE.Mesh;
      const drift = index * 0.44;
      const phase = state.clock.elapsedTime * (0.75 + intensity * 0.45) + drift;
      child.position.y = 1.2 + (phase % 1.7) * 0.82;
      child.position.x = particles[index].x + Math.sin(phase * 2.1) * 0.08;
      child.position.z = particles[index].z + Math.cos(phase * 1.8) * 0.1;
      const material = child.material as THREE.MeshStandardMaterial;
      material.opacity = active ? 0.5 + intensity * 0.2 : 0.04;
    });
  });

  return (
    <group ref={groupRef} position={[0, 0.45, 0]}>
      {particles.map(({ id, x, z }) => (
        <mesh key={id} position={[x, 1.2, z]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#fce8d2" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function RadioModel({
  isOn,
  onToggle,
}: {
  isOn: boolean;
  onToggle: () => void;
}) {
  const radioRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!radioRef.current) {
      return;
    }

    radioRef.current.rotation.y =
      0.18 + Math.sin(state.clock.elapsedTime * 1.2) * 0.18;
    radioRef.current.position.y =
      0.94 + Math.sin(state.clock.elapsedTime * 1.8) * 0.06;
  });

  return (
    <group
      ref={radioRef}
      position={[2.4, 0.9, 1.2]}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.7, 0.5]} />
        <meshStandardMaterial
          color={isOn ? "#f5b45a" : "#4b362f"}
          emissive={isOn ? "#f59e0b" : "#000000"}
          emissiveIntensity={isOn ? 0.3 : 0.04}
        />
      </mesh>
      <mesh position={[0, 0.12, 0.26]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.08, 30]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[0.25, 0.38, 0.27]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.25, 24]} />
        <meshStandardMaterial color="#f8d586" />
      </mesh>
      <mesh position={[-0.22, -0.25, 0.32]} castShadow>
        <boxGeometry args={[0.42, 0.05, 0.12]} />
        <meshStandardMaterial
          color="#facc15"
          emissive="#f59e0b"
          emissiveIntensity={isOn ? 1 : 0.2}
        />
      </mesh>
      <mesh position={[0.38, 0.57, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 18]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      <mesh position={[0.38, 0.9, 0]} castShadow>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f9a8d4"
          emissiveIntensity={isOn ? 0.85 : 0.12}
        />
      </mesh>
      <Text
        position={[0, -0.42, 0.26]}
        fontSize={0.12}
        color="#fff7cc"
        anchorX="center"
        anchorY="middle"
      >
        BANGER
      </Text>
    </group>
  );
}

function BiscuitModel({
  color,
  isBroken = false,
}: {
  color: string;
  isBroken?: boolean;
}) {
  if (isBroken) {
    return (
      <group>
        <mesh
          position={[-0.22, 0.12, 0.18]}
          rotation={[0.8, 0.5, 0.6]}
          castShadow
        >
          <boxGeometry args={[0.5, 0.12, 0.34]} />
          <meshStandardMaterial color="#d09b61" roughness={0.9} />
        </mesh>
        <mesh
          position={[0.18, -0.14, -0.08]}
          rotation={[0.9, -0.4, -0.7]}
          castShadow
        >
          <boxGeometry args={[0.46, 0.12, 0.38]} />
          <meshStandardMaterial color="#e6b573" roughness={0.88} />
        </mesh>
        <mesh
          position={[0.14, 0.38, 0.18]}
          rotation={[1.05, 0.4, 0.9]}
          castShadow
        >
          <boxGeometry args={[0.34, 0.12, 0.3]} />
          <meshStandardMaterial color="#f5cb8a" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.58, 0.06, 10, 26]} />
          <meshStandardMaterial color="#f5d29b" transparent opacity={0.72} />
        </mesh>
      </group>
    );
  }

  return (
    <group>
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.22, 0.52, 6, 18]} />
        <meshStandardMaterial
          color={color}
          roughness={0.78}
          metalness={0.08}
          emissive="#c47c4f"
          emissiveIntensity={0.08}
        />
      </mesh>
      <mesh position={[0, 0.08, 0.04]} rotation={[0.18, 0.35, 0]} castShadow>
        <boxGeometry args={[0.56, 0.14, 0.34]} />
        <meshStandardMaterial
          color="#f4d79b"
          roughness={0.9}
          opacity={0.72}
          transparent
        />
      </mesh>
      <mesh
        position={[0.06, 0.12, 0.08]}
        rotation={[0.25, -0.2, 0.3]}
        castShadow
      >
        <boxGeometry args={[0.2, 0.08, 0.18]} />
        <meshStandardMaterial
          color="#8a5b36"
          roughness={0.9}
          opacity={0.5}
          transparent
        />
      </mesh>
      <mesh
        position={[-0.12, -0.16, -0.06]}
        rotation={[0.22, 0.26, -0.28]}
        castShadow
      >
        <boxGeometry args={[0.18, 0.1, 0.12]} />
        <meshStandardMaterial
          color="#cf9d73"
          roughness={0.92}
          opacity={0.78}
          transparent
        />
      </mesh>
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
  const groupRef = useRef<THREE.Group>(null);
  const engineRef = useRef<Engine | null>(null);
  const bodyRef = useRef<Matter.Body | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const resolvedRef = useRef(false);
  const [state, setState] = useState<BiscuitState>("idle");

  useEffect(() => {
    const engine = Engine.create();
    engine.gravity.y = 0.11;

    const body = Bodies.rectangle(0.2, 2.9, 0.56, 0.26, {
      restitution: 0.14,
      friction: 0.18,
      density: 0.0028,
      frictionAir: 0.014,
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
    Body.setPosition(body, { x: 0.12, y: 8.5 });
    Body.setVelocity(body, { x: 0.06, y: 0.2 });
    Body.setAngle(body, 0.35);
    Body.setAngularVelocity(body, 0.08);
    startedAtRef.current = performance.now();
    resolvedRef.current = false;
    setState("dropping");
  }, [dropSignal]);

  useFrame((_, delta) => {
    const engine = engineRef.current;
    const body = bodyRef.current;

    if (!engine || !body || !groupRef.current) {
      return;
    }

    Engine.update(engine, delta * 60);

    const x = body.position.x * 0.9 + 0.12;
    const y = THREE.MathUtils.mapLinear(body.position.y, 1, 9, -0.5, 2.5);

    groupRef.current.position.set(x, y, 0.72);
    groupRef.current.rotation.set(0, 0, body.angle + Math.PI / 2);

    if (state === "dropping" && startedAtRef.current !== null) {
      const elapsedSeconds = (performance.now() - startedAtRef.current) / 1000;
      const inCup =
        body.position.y > 0.9 &&
        body.position.y < 1.26 &&
        Math.abs(body.position.x - 0.12) < 0.46;

      if (inCup && !resolvedRef.current) {
        resolvedRef.current = true;
        let score = 0;
        let verdict = "A bit cursed";

        if (elapsedSeconds < 1.5) {
          score = 68;
          verdict = "Peak chaos";
        } else if (elapsedSeconds < 3.1) {
          score = 100;
          verdict = "No cap. Iconic.";
        } else if (elapsedSeconds < 4.8) {
          score = 81;
          verdict = "Sticky but funny";
        } else {
          score = 42;
          verdict = "Too much drama";
        }

        setState("settled");
        onScoreChange(score, verdict);
      }

      if (elapsedSeconds > 5 && !resolvedRef.current) {
        resolvedRef.current = true;
        setState("broken");
        onScoreChange(22, "The biscuit lost the plot");
      }
    }

    if (body.position.y > 2.45 && (state === "settled" || state === "broken")) {
      setState("idle");
    }
  });

  const dominantColor =
    state === "settled"
      ? "#d3a36a"
      : state === "broken"
        ? "#c084fc"
        : "#f7d7a6";

  return (
    <group ref={groupRef}>
      {state !== "broken" && <BiscuitModel color={dominantColor} />}
      {state === "broken" && <BiscuitModel color={dominantColor} isBroken />}
    </group>
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
        <planeGeometry args={[1.9, 0.82]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#f9a8d4"
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh position={[0, 0.12, 0.1]}>
        <planeGeometry args={[1.64, 0.62]} />
        <meshBasicMaterial color="#5d2f1d" />
      </mesh>
      <Text
        position={[0, 0.92, -0.08]}
        fontSize={0.24}
        color="#f7d07d"
        anchorX="center"
        anchorY="middle"
      >
        MEME SHOP
      </Text>
    </group>
  );
}

function TeaStallSceneContent({
  teaProfile,
  audioEnabled,
  radioEnabled,
  dropSignal,
  soundCue,
  dropBurst,
  impactShake,
  onScoreChange,
  onRadioToggle,
}: ChaBaanSceneProps) {
  const teaColor = useMemo(() => getTeaColor(teaProfile), [teaProfile]);
  const steamActive = dropSignal > 0 || audioEnabled || dropBurst > 0;
  const burstBoost = dropBurst > 0 ? 0.5 : 0;
  const shakeBoost = impactShake > 0 ? 0.3 : 0;
  const steamIntensity = Math.min(
    1.5,
    teaProfile.aroma / 120 + teaProfile.ginger / 120 + burstBoost + shakeBoost,
  );

  return (
    <>
      <color attach="background" args={["#170f14"]} />
      <fog attach="fog" args={["#170f14", 5, 13]} />
      <ambientLight
        intensity={0.85 + (audioEnabled ? 0.12 : 0)}
        color="#fbbf24"
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

        <TeaCup
          teaColor={teaColor}
          isHot={teaProfile.aroma > 40 || soundCue > 0 || dropBurst > 0}
        />
        <BiscuitPhysics dropSignal={dropSignal} onScoreChange={onScoreChange} />
        <SteamParticles active={steamActive} intensity={steamIntensity} />

        <group position={[0, 0.1, 0.86]}>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.7 + dropBurst * 0.18 + impactShake * 0.1}
            visible={dropBurst > 0}
          >
            <ringGeometry args={[0.75, 1.4, 42]} />
            <meshBasicMaterial
              color="#fbbf24"
              transparent
              opacity={dropBurst > 0 ? 0.9 : 0}
            />
          </mesh>
          <mesh
            position={[0, 0.03, 0]}
            scale={0.9 + dropBurst * 0.12}
            visible={dropBurst > 0}
          >
            <circleGeometry args={[0.48, 26]} />
            <meshBasicMaterial
              color="#fff1c2"
              transparent
              opacity={dropBurst > 0 ? 0.5 : 0}
            />
          </mesh>
        </group>

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

        <RadioModel isOn={radioEnabled} onToggle={onRadioToggle} />
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
    <div
      className={`relative h-full w-full ${props.dropBurst > 0 ? "cha-baan-scene-pulse" : ""} ${props.impactShake > 0 ? "cha-baan-scene-shake" : ""}`}
    >
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
