"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { cngAudio } from "../../lib/cng-audio";
import { PASSENGER_PRESETS, RAIN_PASSENGER_PRESETS, useGameStore } from "../../store/game-store";
import type { Checkpoint } from "../../types/game";

export default function CNGGameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#e8925a");
    scene.fog = new THREE.FogExp2("#e8925a", 0.008);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      600
    );
    camera.position.set(0, 4.5, -10);
    camera.lookAt(0, 1.5, 15);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight("#ffcc88", 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight("#ffaa44", 2.2);
    dirLight.position.set(30, 50, -20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 100;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    scene.add(dirLight);

    // Warm sunset: no street lamp point light needed

    // --- Geometries & Materials Cache for disposal ---
    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];
    const texturesToDispose: THREE.CanvasTexture[] = [];

    const regGeo = <T extends THREE.BufferGeometry>(geo: T): T => {
      geometriesToDispose.push(geo);
      return geo;
    };
    const regMat = <T extends THREE.Material>(mat: T): T => {
      materialsToDispose.push(mat);
      return mat;
    };

    // --- 3D Rain Particle System ---
    const RAIN_COUNT = 900;
    const rainPositions = new Float32Array(RAIN_COUNT * 3);
    const rainVelocities = new Float32Array(RAIN_COUNT);
    for (let i = 0; i < RAIN_COUNT; i++) {
      rainPositions[i * 3] = (Math.random() - 0.5) * 60;
      rainPositions[i * 3 + 1] = Math.random() * 30 + 2;
      rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 80 + 30;
      rainVelocities[i] = 14 + Math.random() * 12;
    }
    const rainGeo = regGeo(new THREE.BufferGeometry());
    rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPositions, 3));
    const rainMat = regMat(new THREE.PointsMaterial({ color: "#a8d8f0", size: 0.12, transparent: true, opacity: 0.65 }));
    const rainParticles = new THREE.Points(rainGeo, rainMat);
    rainParticles.visible = false;
    scene.add(rainParticles);
    let lightningTimer = 0;

    // --- Build Player CNG ---
    const cngGroup = new THREE.Group();
    scene.add(cngGroup);

    // CNG Green Body
    const cngBodyMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#1e824c", // Iconic Dhaka Green
        roughness: 0.35,
        metalness: 0.1,
      })
    );
    const cngYellowRoofMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#f4d03f", // Yellow hood/canvas roof
        roughness: 0.6,
      })
    );
    const metalMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#bdc3c7",
        metalness: 0.8,
        roughness: 0.2,
      })
    );
    const blackMat = regMat(
      new THREE.MeshStandardMaterial({ color: "#1c1c1c", roughness: 0.8 })
    );
    const glassMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#85c1e9",
        transparent: true,
        opacity: 0.6,
      })
    );
    const lightGlowMat = regMat(
      new THREE.MeshBasicMaterial({ color: "#fff9c4" })
    );
    const tailLightMat = regMat(
      new THREE.MeshBasicMaterial({ color: "#e74c3c" })
    );

    // Main Cabin
    const cabinGeo = regGeo(new THREE.BoxGeometry(1.6, 1.3, 2.2));
    const cabinMesh = new THREE.Mesh(cabinGeo, cngBodyMat);
    cabinMesh.position.y = 1.1;
    cabinMesh.castShadow = true;
    cngGroup.add(cabinMesh);

    // Yellow Luggage Roof
    const roofGeo = regGeo(new THREE.BoxGeometry(1.58, 0.2, 2.15));
    const roofMesh = new THREE.Mesh(roofGeo, cngYellowRoofMat);
    roofMesh.position.set(0, 1.8, 0);
    cngGroup.add(roofMesh);

    // Luggage Carrier Railing
    const railGeo = regGeo(new THREE.BoxGeometry(1.4, 0.12, 1.9));
    const railMesh = new THREE.Mesh(railGeo, metalMat);
    railMesh.position.set(0, 1.95, 0);
    cngGroup.add(railMesh);

    // Windshield
    const windshieldGeo = regGeo(new THREE.BoxGeometry(1.4, 0.6, 0.05));
    const windshieldMesh = new THREE.Mesh(windshieldGeo, glassMat);
    windshieldMesh.position.set(0, 1.35, 1.08);
    cngGroup.add(windshieldMesh);

    // Wire-mesh Cage Entrance Doors (left & right)
    const doorMeshMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#2c3e50",
        wireframe: true,
      })
    );
    const doorGeo = regGeo(new THREE.PlaneGeometry(1.1, 0.9, 6, 6));
    const leftDoor = new THREE.Mesh(doorGeo, doorMeshMat);
    leftDoor.rotation.y = Math.PI / 2;
    leftDoor.position.set(-0.81, 1.05, -0.1);
    cngGroup.add(leftDoor);

    const rightDoor = new THREE.Mesh(doorGeo, doorMeshMat);
    rightDoor.rotation.y = -Math.PI / 2;
    rightDoor.position.set(0.81, 1.05, -0.1);
    cngGroup.add(rightDoor);

    // Headlight & Taillights
    const headLightGeo = regGeo(new THREE.CylinderGeometry(0.18, 0.18, 0.1, 12));
    headLightGeo.rotateX(Math.PI / 2);
    const headLight = new THREE.Mesh(headLightGeo, lightGlowMat);
    headLight.position.set(0, 0.9, 1.12);
    cngGroup.add(headLight);

    const tailGeo = regGeo(new THREE.BoxGeometry(0.2, 0.12, 0.05));
    const leftTail = new THREE.Mesh(tailGeo, tailLightMat);
    leftTail.position.set(-0.6, 0.8, -1.12);
    cngGroup.add(leftTail);

    const rightTail = new THREE.Mesh(tailGeo, tailLightMat);
    rightTail.position.set(0.6, 0.8, -1.12);
    cngGroup.add(rightTail);

    // Wheels: 1 front single wheel, 2 rear wheels
    const wheelGeo = regGeo(new THREE.CylinderGeometry(0.35, 0.35, 0.22, 16));
    wheelGeo.rotateZ(Math.PI / 2);

    const frontWheelMesh = new THREE.Mesh(wheelGeo, blackMat);
    frontWheelMesh.position.set(0, 0.35, 1.05);
    frontWheelMesh.castShadow = true;
    cngGroup.add(frontWheelMesh);

    const rearLeftWheel = new THREE.Mesh(wheelGeo, blackMat);
    rearLeftWheel.position.set(-0.75, 0.35, -0.75);
    rearLeftWheel.castShadow = true;
    cngGroup.add(rearLeftWheel);

    const rearRightWheel = new THREE.Mesh(wheelGeo, blackMat);
    rearRightWheel.position.set(0.75, 0.35, -0.75);
    rearRightWheel.castShadow = true;
    cngGroup.add(rearRightWheel);

    // Spot Light for night road illumination
    const cngSpot = new THREE.SpotLight("#fff5cc", 4, 35, Math.PI / 6, 0.4);
    cngSpot.position.set(0, 1.1, 1.2);
    cngSpot.target.position.set(0, 0, 18);
    cngGroup.add(cngSpot);
    cngGroup.add(cngSpot.target);

    // --- 3D Characters Inside CNG ---
    const skinMat = regMat(new THREE.MeshStandardMaterial({ color: "#d98880", roughness: 0.6 }));
    const hairMat = regMat(new THREE.MeshStandardMaterial({ color: "#1c1c1c", roughness: 0.8 }));
    const gamchaMat = regMat(new THREE.MeshStandardMaterial({ color: "#e74c3c", roughness: 0.5 }));
    const driverShirtMat = regMat(new THREE.MeshStandardMaterial({ color: "#2980b9", roughness: 0.5 }));
    const driverLungiMat = regMat(new THREE.MeshStandardMaterial({ color: "#27ae60", roughness: 0.6 }));

    // Driver Mama inside Front Cockpit
    const driverGroup = new THREE.Group();
    // Torso
    const dTorso = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.5, 0.55, 0.3)), driverShirtMat);
    dTorso.position.set(0, 1.25, 0.45);
    driverGroup.add(dTorso);
    // Head & Hair
    const dHead = new THREE.Mesh(regGeo(new THREE.SphereGeometry(0.18, 8, 8)), skinMat);
    dHead.position.set(0, 1.62, 0.45);
    driverGroup.add(dHead);
    const dHair = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.36, 0.1, 0.36)), hairMat);
    dHair.position.set(0, 1.74, 0.45);
    driverGroup.add(dHair);
    // Gamcha on shoulder
    const dGamcha = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.55, 0.1, 0.12)), gamchaMat);
    dGamcha.position.set(0, 1.5, 0.45);
    driverGroup.add(dGamcha);
    // Arms holding steering handlebar
    const dArmL = new THREE.Mesh(regGeo(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6)), driverShirtMat);
    dArmL.rotation.x = -Math.PI / 3;
    dArmL.position.set(-0.25, 1.2, 0.62);
    driverGroup.add(dArmL);
    const dArmR = new THREE.Mesh(regGeo(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6)), driverShirtMat);
    dArmR.rotation.x = -Math.PI / 3;
    dArmR.position.set(0.25, 1.2, 0.62);
    driverGroup.add(dArmR);
    // Lungi seated lower body
    const dLungi = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.52, 0.35, 0.45)), driverLungiMat);
    dLungi.position.set(0, 0.85, 0.45);
    driverGroup.add(dLungi);
    cngGroup.add(driverGroup);

    // Seated Passenger inside Back Cage (toggled dynamically)
    const passengerGroup = new THREE.Group();
    const passTorso = new THREE.Mesh(
      regGeo(new THREE.BoxGeometry(0.5, 0.55, 0.3)),
      regMat(new THREE.MeshStandardMaterial({ color: "#8e44ad" }))
    );
    passTorso.position.set(0.2, 1.25, -0.45);
    passengerGroup.add(passTorso);
    const passHead = new THREE.Mesh(regGeo(new THREE.SphereGeometry(0.18, 8, 8)), skinMat);
    passHead.position.set(0.2, 1.62, -0.45);
    passengerGroup.add(passHead);
    passengerGroup.visible = false;
    cngGroup.add(passengerGroup);

    // --- Road & Environment Infrastructure ---
    const ROAD_WIDTH = 18;
    const ROAD_SEGMENTS = 12;
    const SEGMENT_LENGTH = 50;

    const roadGeo = regGeo(new THREE.PlaneGeometry(ROAD_WIDTH, SEGMENT_LENGTH));
    roadGeo.rotateX(-Math.PI / 2);

    const roadMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#c4925a",
        roughness: 1.0,
      })
    );

    const roadMarkingMat = regMat(
      new THREE.MeshBasicMaterial({ color: "#a87040" })
    );

    // --- Global Ground Plane ---
    const groundGeo = regGeo(new THREE.PlaneGeometry(300, 1500));
    groundGeo.rotateX(-Math.PI / 2);
    const groundMesh = new THREE.Mesh(groundGeo, regMat(new THREE.MeshStandardMaterial({ color: "#6aaa44", roughness: 1.0 })));
    groundMesh.position.set(0, -0.01, 300);
    scene.add(groundMesh);

    // --- Low-Poly Tree Helper (defined BEFORE road segment loop) ---
    const treeTrunkMat = regMat(new THREE.MeshStandardMaterial({ color: "#5c3d1a", roughness: 0.9 }));
    const treeLeafMat = regMat(new THREE.MeshStandardMaterial({ color: "#2d7a33", roughness: 0.8 }));

    const addTree = (x: number, z: number, grp: THREE.Group): void => {
      const tGrp = new THREE.Group();
      const trunk = new THREE.Mesh(regGeo(new THREE.CylinderGeometry(0.25, 0.35, 2.2, 7)), treeTrunkMat);
      trunk.position.y = 1.1;
      trunk.castShadow = true;
      tGrp.add(trunk);
      const leaves = new THREE.Mesh(regGeo(new THREE.ConeGeometry(1.8 + Math.random() * 0.8, 3.5 + Math.random(), 7)), treeLeafMat);
      leaves.position.y = 3.8;
      leaves.castShadow = true;
      tGrp.add(leaves);
      tGrp.position.set(x, 0, z);
      grp.add(tGrp);
    };

    const roadSegments: THREE.Group[] = [];
    for (let i = 0; i < ROAD_SEGMENTS; i++) {
      const segGroup = new THREE.Group();
      segGroup.position.z = i * SEGMENT_LENGTH;

      // Asphalt
      const roadMesh = new THREE.Mesh(roadGeo, roadMat);
      roadMesh.receiveShadow = true;
      segGroup.add(roadMesh);

      // Center Divider Railing & White Stripes
      for (let m = -SEGMENT_LENGTH / 2 + 3; m < SEGMENT_LENGTH / 2; m += 8) {
        // Double dashed center line
        const stripeGeo = regGeo(new THREE.PlaneGeometry(0.3, 4));
        stripeGeo.rotateX(-Math.PI / 2);
        const stripeMesh1 = new THREE.Mesh(stripeGeo, roadMarkingMat);
        stripeMesh1.position.set(-0.25, 0.02, m);
        segGroup.add(stripeMesh1);

        const stripeMesh2 = new THREE.Mesh(stripeGeo, roadMarkingMat);
        stripeMesh2.position.set(0.25, 0.02, m);
        segGroup.add(stripeMesh2);
      }

      // Dirt shoulders instead of curbs and footpaths
      const shoulderMat = regMat(new THREE.MeshStandardMaterial({ color: "#b08050", roughness: 1.0 }));
      const shoulderGeo = regGeo(new THREE.PlaneGeometry(4, SEGMENT_LENGTH));
      shoulderGeo.rotateX(-Math.PI / 2);
      const leftShoulder = new THREE.Mesh(shoulderGeo, shoulderMat);
      leftShoulder.position.set(-ROAD_WIDTH / 2 - 2, 0.01, 0);
      segGroup.add(leftShoulder);
      const rightShoulder = new THREE.Mesh(shoulderGeo, shoulderMat);
      rightShoulder.position.set(ROAD_WIDTH / 2 + 2, 0.01, 0);
      segGroup.add(rightShoulder);


      // Low-poly trees on both sides
      for (let t = -SEGMENT_LENGTH / 2; t < SEGMENT_LENGTH / 2; t += 12 + Math.random() * 8) {
        addTree(-ROAD_WIDTH / 2 - 5 - Math.random() * 10, t, segGroup);
        addTree(ROAD_WIDTH / 2 + 5 + Math.random() * 10, t, segGroup);
      }


      // Tangled Electric Poles
      const poleGeo = regGeo(new THREE.CylinderGeometry(0.2, 0.25, 9, 8));
      const poleMat = regMat(new THREE.MeshStandardMaterial({ color: "#424949" }));
      const leftPole = new THREE.Mesh(poleGeo, poleMat);
      leftPole.position.set(-ROAD_WIDTH / 2 - 2, 4.5, -15);
      segGroup.add(leftPole);

      // Wide green grass fields instead of buildings
      const grassMat = regMat(new THREE.MeshStandardMaterial({ color: "#6aaa44", roughness: 1.0 }));
      const grassGeo = regGeo(new THREE.PlaneGeometry(60, SEGMENT_LENGTH));
      grassGeo.rotateX(-Math.PI / 2);
      const leftGrass = new THREE.Mesh(grassGeo, grassMat);
      leftGrass.position.set(-ROAD_WIDTH / 2 - 30, 0.01, 0);
      leftGrass.receiveShadow = true;
      segGroup.add(leftGrass);
      const rightGrass = new THREE.Mesh(grassGeo, grassMat);
      rightGrass.position.set(ROAD_WIDTH / 2 + 30, 0.01, 0);
      rightGrass.receiveShadow = true;
      segGroup.add(rightGrass);

      scene.add(segGroup);
      roadSegments.push(segGroup);
    }

    // --- Dynamic Traffic System ---
    interface SimTraffic {
      mesh: THREE.Group;
      type: "bus" | "rickshaw" | "battery_rickshaw" | "bike" | "car";
      laneX: number;
      z: number;
      speed: number;
      width: number;
      length: number;
    }

    const trafficList: SimTraffic[] = [];
    const busColors = ["#c0392b", "#2980b9", "#d35400", "#16a085"];

    const createBengaliTruckSignTexture = (text: string): THREE.CanvasTexture => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext("2d")!;

      // Background - warm cream/yellow
      ctx.fillStyle = "#f5d76e";
      ctx.fillRect(0, 0, 256, 128);

      // Decorative red border
      ctx.strokeStyle = "#c0392b";
      ctx.lineWidth = 6;
      ctx.strokeRect(4, 4, 248, 120);

      // Inner green accent border
      ctx.strokeStyle = "#27ae60";
      ctx.lineWidth = 3;
      ctx.strokeRect(12, 12, 232, 104);

      // Decorative flower patterns (simple dots)
      ctx.fillStyle = "#e74c3c";
      for (let dx = 30; dx < 240; dx += 40) {
        ctx.beginPath(); ctx.arc(dx, 20, 5, 0, Math.PI * 2); ctx.fill();
      }

      // Main Bengali text
      ctx.fillStyle = "#1a1a1a";
      ctx.font = "bold 28px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 128, 64);

      // Bottom decorative strip
      ctx.fillStyle = "#c0392b";
      ctx.fillRect(0, 108, 256, 20);
      ctx.fillStyle = "#f9f9f9";
      ctx.font = "12px serif";
      ctx.fillText("বাংলাদেশ • Bangladesh", 128, 118);

      const texture = new THREE.CanvasTexture(canvas);
      texturesToDispose.push(texture);
      return texture;
    };

    const createTrafficVehicle = (
      type: "bus" | "rickshaw" | "battery_rickshaw" | "bike" | "car",
      zPos: number
    ): SimTraffic => {
      const group = new THREE.Group();
      let width = 2;
      let length = 4.5;
      let speed = 25;

      if (type === "bus") {
        width = 2.8;
        length = 11;
        speed = 32;
        const busMat = regMat(
          new THREE.MeshStandardMaterial({
            color: busColors[Math.floor(Math.random() * busColors.length)],
            roughness: 0.4,
          })
        );
        const busBody = new THREE.Mesh(regGeo(new THREE.BoxGeometry(2.6, 3, 10.5)), busMat);
        busBody.position.y = 1.8;
        busBody.castShadow = true;
        group.add(busBody);

        // Windows strip
        const winGeo = regGeo(new THREE.BoxGeometry(2.65, 0.8, 9.5));
        const win = new THREE.Mesh(winGeo, blackMat);
        win.position.y = 2.2;
        group.add(win);

        // Bengali sign panel on back of bus
        const signTexts = ["মা-বাবার দোয়া", "আল্লাহর রহমত", "বাড়ি ফিরব", "এগিয়ে যাও", "সবুর করুন", "খোদার মেহেরবান"];
        const signText = signTexts[Math.floor(Math.random() * signTexts.length)];
        const signTexture = createBengaliTruckSignTexture(signText);
        const signMat = regMat(new THREE.MeshBasicMaterial({ map: signTexture }));
        const signGeo = regGeo(new THREE.PlaneGeometry(2.2, 1.0));
        const signMesh = new THREE.Mesh(signGeo, signMat);
        signMesh.position.set(0, 2.0, -5.35); // back of bus
        signMesh.rotation.y = Math.PI; // face backward (toward camera)
        group.add(signMesh);

        // Decorative colored stripes on bus sides
        const stripeColors = ["#c0392b", "#f39c12", "#27ae60"];
        stripeColors.forEach((col, si) => {
          const stripeMat = regMat(new THREE.MeshStandardMaterial({ color: col }));
          const stripeGeo = regGeo(new THREE.BoxGeometry(0.05, 0.3, 10.5));
          const stripe = new THREE.Mesh(stripeGeo, stripeMat);
          stripe.position.set(-1.35, 0.9 + si * 0.35, 0);
          group.add(stripe);
          const stripeR = new THREE.Mesh(stripeGeo, stripeMat);
          stripeR.position.set(1.35, 0.9 + si * 0.35, 0);
          group.add(stripeR);
        });
      } else if (type === "battery_rickshaw") {
        // ঢাকা Tesla: Battery-powered rickshaw with neon body, heavy battery block, LED light
        width = 1.3;
        length = 2.4;
        speed = 28; // Fast and reckless!
        const teslaMat = regMat(
          new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? "#00e5ff" : "#ff007f", // Cyberpunk Dhaka Neon
            roughness: 0.35,
            metalness: 0.3,
          })
        );
        const seat = new THREE.Mesh(regGeo(new THREE.BoxGeometry(1.05, 0.45, 0.85)), teslaMat);
        seat.position.y = 0.6;
        group.add(seat);

        // Battery block under seat
        const batteryMat = regMat(new THREE.MeshStandardMaterial({ color: "#1c2833", roughness: 0.8 }));
        const battery = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.85, 0.35, 0.55)), batteryMat);
        battery.position.set(0, 0.25, 0);
        group.add(battery);

        // Hood
        const hood = new THREE.Mesh(regGeo(new THREE.CylinderGeometry(0.58, 0.58, 0.95, 8)), teslaMat);
        hood.rotation.z = Math.PI / 2;
        hood.position.set(0, 1.25, -0.1);
        group.add(hood);

        // Bright LED headlight
        const ledMat = regMat(new THREE.MeshBasicMaterial({ color: "#00ffff" }));
        const led = new THREE.Mesh(regGeo(new THREE.SphereGeometry(0.12, 8, 8)), ledMat);
        led.position.set(0, 0.85, 1.1);
        group.add(led);
      } else if (type === "rickshaw") {
        width = 1.2;
        length = 2.2;
        speed = 14;
        const hoodMat = regMat(
          new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? "#e74c3c" : "#f1c40f",
          })
        );
        const seat = new THREE.Mesh(regGeo(new THREE.BoxGeometry(1, 0.4, 0.8)), hoodMat);
        seat.position.y = 0.6;
        group.add(seat);
        const hood = new THREE.Mesh(regGeo(new THREE.CylinderGeometry(0.55, 0.55, 0.9, 8)), hoodMat);
        hood.rotation.z = Math.PI / 2;
        hood.position.set(0, 1.2, -0.1);
        group.add(hood);
      } else if (type === "bike") {
        width = 0.9;
        length = 2;
        speed = 42;
        const bikeBody = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.4, 0.8, 1.8)), redMat);
        bikeBody.position.y = 0.6;
        group.add(bikeBody);
      } else {
        // Private Car
        width = 1.8;
        length = 4.4;
        speed = 36;
        const carMat = regMat(new THREE.MeshStandardMaterial({ color: "#2c3e50" }));
        const carBody = new THREE.Mesh(regGeo(new THREE.BoxGeometry(1.8, 1.1, 4.2)), carMat);
        carBody.position.y = 0.7;
        carBody.castShadow = true;
        group.add(carBody);
      }

      const lanes = [-6.0, -2.2, 2.2, 6.0];
      const laneX = lanes[Math.floor(Math.random() * lanes.length)];
      group.position.set(laneX, 0, zPos);
      scene.add(group);

      return { mesh: group, type, laneX, z: zPos, speed, width, length };
    };

    const redMat = regMat(new THREE.MeshStandardMaterial({ color: "#c0392b" }));

    // Spawn Initial Traffic well ahead of player
    for (let i = 0; i < 14; i++) {
      const types: Array<"bus" | "rickshaw" | "battery_rickshaw" | "bike" | "car"> = [
        "bus",
        "rickshaw",
        "battery_rickshaw",
        "bike",
        "car",
      ];
      const t = types[Math.floor(Math.random() * types.length)];
      trafficList.push(createTrafficVehicle(t, 45 + i * 26));
    }

    // --- Footpath Pedestrian Characters (পথচারী) ---
    interface Pedestrian {
      mesh: THREE.Group;
      x: number;
      z: number;
      walkSpeed: number;
      phase: number;
      legL: THREE.Mesh;
      legR: THREE.Mesh;
      armL: THREE.Mesh;
      armR: THREE.Mesh;
    }

    const pedestrianList: Pedestrian[] = [];
    const shirtColors = ["#e67e22", "#3498db", "#1abc9c", "#9b59b6", "#f1c40f", "#e74c3c"];
    const lungiColors = ["#2c3e50", "#27ae60", "#d35400", "#16a085", "#7f8c8d"];

    for (let p = 0; p < 14; p++) {
      const pGroup = new THREE.Group();
      const sColor = shirtColors[p % shirtColors.length];
      const lColor = lungiColors[p % lungiColors.length];
      const pShirtMat = regMat(new THREE.MeshStandardMaterial({ color: sColor, roughness: 0.6 }));
      const pLungiMat = regMat(new THREE.MeshStandardMaterial({ color: lColor, roughness: 0.7 }));

      // Torso
      const torso = new THREE.Mesh(regGeo(new THREE.BoxGeometry(0.44, 0.6, 0.26)), pShirtMat);
      torso.position.y = 1.2;
      torso.castShadow = true;
      pGroup.add(torso);

      // Head
      const head = new THREE.Mesh(regGeo(new THREE.SphereGeometry(0.16, 8, 8)), skinMat);
      head.position.y = 1.62;
      pGroup.add(head);

      // Arms
      const armGeo = regGeo(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 6));
      const armL = new THREE.Mesh(armGeo, pShirtMat);
      armL.position.set(-0.28, 1.15, 0);
      pGroup.add(armL);

      const armR = new THREE.Mesh(armGeo, pShirtMat);
      armR.position.set(0.28, 1.15, 0);
      pGroup.add(armR);

      // Lungi / Legs
      const legGeo = regGeo(new THREE.CylinderGeometry(0.08, 0.08, 0.75, 6));
      const legL = new THREE.Mesh(legGeo, pLungiMat);
      legL.position.set(-0.13, 0.45, 0);
      pGroup.add(legL);

      const legR = new THREE.Mesh(legGeo, pLungiMat);
      legR.position.set(0.13, 0.45, 0);
      pGroup.add(legR);

      const isLeft = p % 2 === 0;
      const footpathX = isLeft
        ? -ROAD_WIDTH / 2 - 1.8 - (p % 3) * 0.8
        : ROAD_WIDTH / 2 + 1.8 + (p % 3) * 0.8;
      const pZ = 15 + p * 24;
      pGroup.position.set(footpathX, 0.35, pZ);
      scene.add(pGroup);

      pedestrianList.push({
        mesh: pGroup,
        x: footpathX,
        z: pZ,
        walkSpeed: (Math.random() > 0.5 ? 1 : -1) * (2.8 + Math.random() * 1.5),
        phase: p * 1.2,
        legL,
        legR,
        armL,
        armR,
      });
    }

    // --- Interactive 3D Checkpoint Obstacle (Barricade + Sergeant / Boro Bhai) ---
    const checkpointGroup = new THREE.Group();
    checkpointGroup.visible = false;
    scene.add(checkpointGroup);

    // Barricade Bar
    const barrierGeo = regGeo(new THREE.BoxGeometry(ROAD_WIDTH - 2, 0.4, 0.4));
    const barrierMat = regMat(
      new THREE.MeshStandardMaterial({
        color: "#f39c12", // Yellow-Black caution
        roughness: 0.5,
      })
    );
    const barrierMesh = new THREE.Mesh(barrierGeo, barrierMat);
    barrierMesh.position.y = 1.1;
    checkpointGroup.add(barrierMesh);

    // Sergeant / Mastan Figure
    const figureMat = regMat(new THREE.MeshStandardMaterial({ color: "#2e4053" }));
    const figureBody = new THREE.Mesh(regGeo(new THREE.CylinderGeometry(0.3, 0.35, 1.5, 8)), figureMat);
    figureBody.position.set(2, 0.8, -0.5);
    checkpointGroup.add(figureBody);

    const headMat = regMat(new THREE.MeshStandardMaterial({ color: "#d98880" }));
    const figureHead = new THREE.Mesh(regGeo(new THREE.SphereGeometry(0.25, 8, 8)), headMat);
    figureHead.position.set(2, 1.7, -0.5);
    checkpointGroup.add(figureHead);

    // --- Keyboard Input Handling ---
    const keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      drift: false,
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      cngAudio.ensureStarted();
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.forward = true;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.backward = true;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = true;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = true;
      if (e.code === "Space") keys.drift = true;
      if (e.code === "KeyH") {
        cngAudio.honk();
        // Make traffic in current lane move aside!
        trafficList.forEach((tr) => {
          if (Math.abs(tr.mesh.position.x - playerPos.x) < 3.5 && tr.z > 0 && tr.z < 35) {
            tr.laneX += tr.laneX > 0 ? 3.5 : -3.5;
            tr.laneX = THREE.MathUtils.clamp(tr.laneX, -6.5, 6.5);
          }
        });
        // Pedestrians on footpath startle
        pedestrianList.forEach((p) => {
          if (Math.abs(p.z - 0) < 30) {
            p.mesh.position.y = 0.65;
            setTimeout(() => { p.mesh.position.y = 0.35; }, 220);
          }
        });
      }
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        useGameStore.getState().triggerNitro();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.forward = false;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.backward = false;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = false;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = false;
      if (e.code === "Space") keys.drift = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // --- Physics State ---
    const playerPos = { x: 0, y: 0, z: 0 };
    let currentSpeed = 0;
    let turnSteer = 0;
    let tiltAngle = 0;
    let spinRecoil = 0;
    let crashShake = 0;
    let collisionCooldown = 0;
    let nextCheckpointDistance = 350;
    let nextPassengerHailDistance = 150;

    // --- Main Game Loop ---
    let lastTime = performance.now();
    let animationFrameId = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const store = useGameStore.getState();
      if (store.gameState !== "driving") {
        cngAudio.setEngineState(0, false);
        renderer.render(scene, camera);
        return;
      }

      // Update Seated Passenger inside CNG back cage
      passengerGroup.visible = !!store.currentPassenger;

      // 1. Acceleration & Speed Physics
      const maxSpeed = store.isNitroActive ? 85 : 62;
      const accel = store.isNitroActive ? 32 : 18;
      const decel = 24;

      if (keys.forward) {
        currentSpeed = Math.min(maxSpeed, currentSpeed + accel * dt);
      } else if (keys.backward) {
        currentSpeed = Math.max(-15, currentSpeed - decel * dt);
      } else {
        currentSpeed = Math.max(0, currentSpeed - decel * 0.4 * dt);
      }

      // Engine audio feedback
      cngAudio.setEngineState(currentSpeed / 65, keys.forward);

      // 2. Steering & Drifts (Screen-Accurate)
      const steerSpeed = keys.drift ? 16 : 11;
      if (keys.left) {
        // Move towards Screen Left (+X)
        turnSteer = Math.min(1, turnSteer + steerSpeed * dt);
      } else if (keys.right) {
        // Move towards Screen Right (-X)
        turnSteer = Math.max(-1, turnSteer - steerSpeed * dt);
      } else {
        turnSteer *= Math.max(0, 1 - 12 * dt);
      }

      // Responsive steering even when stopped or in traffic!
      const speedSteerFactor = Math.max(0.75, Math.min(1.25, Math.abs(currentSpeed) / 18));
      const lateralMovement = turnSteer * speedSteerFactor * 12 * dt;

      // Full road access across the 18m road
      const maxRoadOffset = ROAD_WIDTH / 2 - 1.4; // 18 / 2 - 1.4 = 7.6m
      playerPos.x = THREE.MathUtils.clamp(
        playerPos.x + lateralMovement,
        -maxRoadOffset,
        maxRoadOffset
      );

      // Footpath curb impact / crash check
      if (
        Math.abs(playerPos.x) >= maxRoadOffset - 0.05 &&
        Math.abs(currentSpeed) > 28 &&
        collisionCooldown <= 0
      ) {
        cngAudio.crash();
        cngAudio.yell();
        collisionCooldown = 1.0;
        crashShake = 0.45;
        currentSpeed = -6;
        spinRecoil = (playerPos.x > 0 ? -1 : 1) * 0.6;
        store.recordCrash(90, "⚠️ ফুটপাতে ধাক্কা! বাম্পার ক্ষতিগ্রস্ত (-৳ ৯০)!");
      }

      // Tilt CNG on turn (tilt into turn)
      tiltAngle = THREE.MathUtils.lerp(tiltAngle, turnSteer * 0.16, 0.15);

      // Update Player Mesh (turn steering nose towards direction of travel + spin recoil)
      spinRecoil *= Math.max(0, 1 - 7 * dt);
      cngGroup.position.set(playerPos.x, playerPos.y, 0);
      cngGroup.rotation.y = turnSteer * 0.22 + spinRecoil;
      cngGroup.rotation.z = -tiltAngle;

      // Rotate wheels with speed
      frontWheelMesh.rotation.x += (currentSpeed * dt) / 0.35;
      rearLeftWheel.rotation.x += (currentSpeed * dt) / 0.35;
      rearRightWheel.rotation.x += (currentSpeed * dt) / 0.35;

      // 3. Move Road & Infinite Progression
      const worldTravelDelta = (currentSpeed * 1000 * dt) / 3600;
      store.advanceDistance(dt);
      store.setSpeed(currentSpeed);
      store.checkChaseTick(dt);

      roadSegments.forEach((seg) => {
        seg.position.z -= worldTravelDelta;
        if (seg.position.z < -SEGMENT_LENGTH) {
          seg.position.z += ROAD_SEGMENTS * SEGMENT_LENGTH;
        }
      });

      // 4. Update Footpath Pedestrians (Walk animations & progression)
      const walkTime = time * 0.005;
      pedestrianList.forEach((p) => {
        p.z -= worldTravelDelta;
        p.z += p.walkSpeed * dt;

        // Swing arms & legs
        const swing = Math.sin(walkTime * 12 + p.phase) * 0.45;
        p.legL.rotation.x = swing;
        p.legR.rotation.x = -swing;
        p.armL.rotation.x = -swing;
        p.armR.rotation.x = swing;

        p.mesh.position.set(p.x, p.mesh.position.y, p.z);

        // Respawn ahead when passed
        if (p.z < -25) {
          p.z = 200 + Math.random() * 80;
        } else if (p.z > 320) {
          p.z = 40 + Math.random() * 60;
        }
      });

      // 5. Update Dynamic Traffic Vehicles & Crash Handling
      if (collisionCooldown > 0) {
        collisionCooldown -= dt;
      }

      trafficList.forEach((tr) => {
        // Traffic moves forward relative to road
        const trRelativeSpeed = tr.speed - currentSpeed;
        // Battery rickshaws (Dhaka Tesla) weave slightly erratically
        if (tr.type === "battery_rickshaw") {
          tr.laneX += Math.sin(time * 0.003 + tr.mesh.id) * 0.012;
          tr.laneX = THREE.MathUtils.clamp(tr.laneX, -6.5, 6.5);
        }

        tr.z += (trRelativeSpeed * 1000 * dt) / 3600;
        tr.mesh.position.set(tr.laneX, 0, tr.z);

        // Respawn when passed far behind
        if (tr.z < -30) {
          tr.z = 220 + Math.random() * 100;
          const lanes = [-6.0, -2.2, 2.2, 6.0];
          tr.laneX = lanes[Math.floor(Math.random() * lanes.length)];
        } else if (tr.z > 360) {
          tr.z = 80 + Math.random() * 80;
        }

        // Realistic Crash with Traffic Vehicle
        const dx = Math.abs(playerPos.x - tr.mesh.position.x);
        const dz = tr.z - 0;
        if (
          collisionCooldown <= 0 &&
          dx < (1.6 + tr.width) * 0.45 &&
          dz > -0.8 &&
          dz < (2.2 + tr.length) * 0.45
        ) {
          cngAudio.crash();
          cngAudio.yell();
          collisionCooldown = 1.0; // Cooldown to prevent lock
          crashShake = 0.55; // Camera shake
          spinRecoil = (playerPos.x > tr.mesh.position.x ? 1 : -1) * 0.85; // Spin & skid!
          const speedBefore = currentSpeed;
          currentSpeed = -8; // Bounce backwards!
          playerPos.x += playerPos.x > tr.mesh.position.x ? 1.5 : -1.5;
          playerPos.x = THREE.MathUtils.clamp(playerPos.x, -maxRoadOffset, maxRoadOffset);

          let penalty = speedBefore > 38 ? 150 : 80;
          let crashMsg = `💥 ধপাস! মারাত্মক সংঘর্ষ! সিএনজি মেরামত খরচ ৳ ${penalty}!`;

          if (tr.type === "battery_rickshaw") {
            penalty = 110;
            crashMsg = `💥 ঢাকা Tesla (ব্যাটারি রিকশা) তে ধাক্কা! জনতা: "ছাইড়া দেন মামা গরীব মানুষ!" (-৳ ${penalty})`;
          } else if (tr.type === "bus") {
            penalty = 160;
            crashMsg = `💥 লোকাল বাসের সাথে ধাক্কা! ড্রাইভার বলছে: "আমার কোনো দোষ নাই!" (-৳ ${penalty})`;
          } else if (tr.type === "bike") {
            penalty = 90;
            crashMsg = `💥 বাইকারের সাথে ধাক্কা! "মামা পাঠাও ট্রিপে ছিলাম, হেলমেট ভাঙলেন!" (-৳ ${penalty})`;
          } else if (tr.type === "car") {
            penalty = 140;
            crashMsg = `💥 প্রাইভেট কারে ধাক্কা! "বউরে নিয়া ডেটে যাইতাসি, স্ক্র্যাচ মারলেন!" (-৳ ${penalty})`;
          } else if (tr.type === "rickshaw") {
            penalty = 80;
            crashMsg = `💥 রিকশায় ধাক্কা! রিকশাওয়ালা: "মামা প্যাডেল ভাইঙ্গা গেল!" (-৳ ${penalty})`;
          }

          store.recordCrash(penalty, crashMsg);
        }
      });

      // 6. Trigger Checkpoint Events (Chanda / Traffic Police)
      const currentDist = store.distanceTraveledMeters;
      if (currentDist > nextCheckpointDistance && !store.activeCheckpoint) {
        nextCheckpointDistance = currentDist + 400 + Math.random() * 300;
        const roll = Math.random();
        const newCp: Checkpoint = roll < 0.28
          ? {
              id: `cp-${Math.floor(currentDist)}`,
              type: "police_sergeant",
              distance: currentDist,
              titleBn: "ট্রাফিক সার্জেন্ট 🚔",
              subBn: "মামলা না খাইতে চাইলে চা-পানির খরচ দিন!",
              demandAmount: 300,
              dialogueBn: "ড্রাইভার সাব! ফিটনেস সার্টিফিকেট আর রুট পারমিট দেখান! না থাকলে চা-নাস্তার ব্যবস্থা করেন!",
              passed: false,
              evaded: false,
            }
          : roll < 0.52
          ? {
              id: `cp-${Math.floor(currentDist)}`,
              type: "boro_bhai_chanda",
              distance: currentDist,
              titleBn: "এলাকার বড় ভাই 😤",
              subBn: "স্ট্যান্ড উন্নয়ন তহবিল ও ভাইদের নাস্তা বাবদ চাঁদা",
              demandAmount: 200,
              dialogueBn: "ঐ সিএনজি থামাও! এই এলাকায় গাড়ি চালাইবা আর বড় ভাইরে সালাম দেবা না? মহল্লার উন্নয়নে একটু দিয়া যাও!",
              passed: false,
              evaded: false,
            }
          : roll < 0.68
          ? {
              id: `cp-${Math.floor(currentDist)}`,
              type: "boro_bhai_chanda",
              distance: currentDist,
              titleBn: "মহল্লা ফুটবল টুর্নামেন্ট ⚽",
              subBn: "আন্তঃমহল্লা ফুটবল স্পনসরশিপ চাঁদা",
              demandAmount: 150,
              dialogueBn: "মামা থামেন! মহল্লার ফুটবল টুর্নামেন্ট আছে — জার্সি কিনতে টাকা নাই! স্পনসর করেন, আপনার নাম লাগাব!",
              passed: false,
              evaded: false,
            }
          : roll < 0.82
          ? {
              id: `cp-${Math.floor(currentDist)}`,
              type: "flyover_toll",
              distance: currentDist,
              titleBn: "ফ্লাইওভার টোল প্লাজা 🛣️",
              subBn: "সরকারি টোল — ফ্লাইওভার রক্ষণাবেক্ষণ ফি",
              demandAmount: 100,
              dialogueBn: "মামা, এই ফ্লাইওভার সরকারি। টোল দিয়া যান — না দিলে আটকায়া রাখব!",
              passed: false,
              evaded: false,
            }
          : {
              id: `cp-${Math.floor(currentDist)}`,
              type: "vip_protocol",
              distance: currentDist,
              titleBn: "পূজা/ঈদ চাঁদা কমিটি 🪔",
              subBn: "বার্ষিক উৎসব চাঁদা — অংশগ্রহণ বাধ্যতামূলক",
              demandAmount: 180,
              dialogueBn: "ভাই! উৎসবের চাঁদা! গরীব-বড়লোক সবাই দেয়, আপনি কি দেবেন না?",
              passed: false,
              evaded: false,
            };

        store.setCheckpoint(newCp);
      }

      // 7. Trigger Passenger Hails — prefer rain presets when weather is rainy
      if (currentDist > nextPassengerHailDistance && !store.currentPassenger && !store.pendingPassengerHail) {
        nextPassengerHailDistance = currentDist + 200 + Math.random() * 220;
        const isRainy = store.weather === "rainy";
        const pool = isRainy && Math.random() > 0.45
          ? RAIN_PASSENGER_PRESETS
          : PASSENGER_PRESETS;
        const preset = pool[Math.floor(Math.random() * pool.length)];
        store.hailPassenger({
          ...preset,
          id: `p-${Math.floor(currentDist)}`,
          pickupDistance: currentDist,
          dropDistance: currentDist + preset.destination.distanceMeters,
        });
      }

      // 8. Rain particle system update
      const isRaining = store.weather === "rainy";
      rainParticles.visible = isRaining;
      if (isRaining) {
        rainMat.opacity = 0.65;
        const posArr = rainGeo.attributes.position.array as Float32Array;
        for (let ri = 0; ri < RAIN_COUNT; ri++) {
          posArr[ri * 3 + 1] -= rainVelocities[ri] * dt;
          posArr[ri * 3] += 2 * dt; // slight angle
          if (posArr[ri * 3 + 1] < -2) {
            posArr[ri * 3] = (Math.random() - 0.5) * 60;
            posArr[ri * 3 + 1] = 28 + Math.random() * 8;
            posArr[ri * 3 + 2] = (Math.random() - 0.5) * 80 + 30;
          }
        }
        rainGeo.attributes.position.needsUpdate = true;

        // Lightning flash every 4-8 seconds
        lightningTimer -= dt;
        if (lightningTimer <= 0) {
          lightningTimer = 4 + Math.random() * 5;
          // flash
          ambientLight.intensity = 3.5;
          dirLight.intensity = 4.8;
          cngAudio.thunder();
          setTimeout(() => {
            ambientLight.intensity = 0.35;
            dirLight.intensity = 0.55;
          }, 120);
          setTimeout(() => {
            ambientLight.intensity = 0.45;
            dirLight.intensity = 0.7;
          }, 280);
        }

        // Rain: dark wet atmosphere
        scene.fog = new THREE.FogExp2("#0d1520", 0.022);
        scene.background = new THREE.Color("#0d1520");
        ambientLight.color.set("#8ba5c4");
        dirLight.color.set("#7090b0");
      } else {
        // Sunny: normal
        scene.fog = new THREE.FogExp2("#e8925a", 0.008);
        scene.background = new THREE.Color("#e8925a");
        ambientLight.color.set("#e0e6ed");
        ambientLight.intensity = 0.7;
        dirLight.color.set("#fff5d6");
        dirLight.intensity = 1.8;
      }

      // Camera Follows Player CNG with Smooth Damping + Crash Shake Effect
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, playerPos.x * 0.45, 0.08);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 4.2 + (store.isNitroActive ? 0.6 : 0), 0.08);
      if (crashShake > 0) {
        camera.position.x += (Math.random() - 0.5) * crashShake;
        camera.position.y += (Math.random() - 0.5) * crashShake;
        crashShake = Math.max(0, crashShake - dt * 2.2);
      }
      camera.lookAt(playerPos.x * 0.25, 1.2, 12);

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // --- Cleanup & Destruction on Unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      texturesToDispose.forEach((t) => t.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden" />;
}
