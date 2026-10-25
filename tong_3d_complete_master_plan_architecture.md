# Tong 3D (টং ৩ডি) — The Ultimate Bangladeshi Tea Stall Simulator

> **An Interactive 3D Physics Web Experience & Bangladeshi Street Culture Simulator** ☕🫖

---

## 1. Executive Summary & Brand Identity

### Recommended App Names
1. **Tong 3D (টং ৩ডি)** *(Recommended: Punchy, universally recognized by all Bangladeshis, modern)*
2. **MalaiCha 3D (মলাই চা ৩ডি)** *(Focuses on tea culture)*
3. **Tong-Er-Mama 3D (টংয়ের মামা ৩ডি)** *(Character-centric & humorous)*

### Concept Overview
**Tong 3D** is a lightweight, animation-heavy 3D micro web app that lets users interact with a classic Bangladeshi roadside tea stall (*চায়ের টং*). Users can customize their tea in real-time, play a 3D physics-based biscuit dipping mini-game, trigger nostalgic audio soundscapes, and generate meme-worthy street political debates.

### Core Objectives
* **Engineering Objective:** Showcase advanced WebGL, 3D physics, particle shaders, positional audio, and edge performance for an elite Upwork portfolio showcase.
* **Cost Constraints:** 100% Free deployment ($0 infrastructure). Zero database backend, fully client-side rendered with Vercel Edge hosting.

---

## 2. Technical Stack & Infrastructure Strategy

| Layer | Technology | Justification | Cost |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js 15+ (App Router)** | Fast React 19 SSR static scaffolding with zero server execution costs. | Free (Vercel) |
| **3D Rendering Core** | **Three.js + React Three Fiber (R3F)** | High-performance WebGL 3D rendering optimized for React components. | Free (Open Source) |
| **3D Helpers & Shaders** | **@react-three/drei** | Out-of-the-box orbit controls, ambient lighting setups, dynamic shadows, and canvas loaders. | Free (Open Source) |
| **3D Physics Engine** | **@react-three/cannon (Cannon-es)** | Rigid-body 3D physics engine for biscuit dipping, glass collisions, and fluid drop mechanics. | Free (Open Source) |
| **UI Motion Engine** | **Motion (Framer Motion)** | Smooth HUD overlay springs, interactive glassmorphism menus, and modal popups. | Free (Open Source) |
| **Sound Synthesis** | **Howler.js** | Low-latency Web Audio API wrapper for ambient street background sounds and positional 3D effects. | Free (Open Source) |
| **Styling & Icons** | **Tailwind CSS + Lucide React** | Retro urban Bangladeshi street aesthetic (neon teal, tea-leaf green, condensed retro typography). | Free (Open Source) |

---

## 3. System Architecture & Component Workflow

```
+-----------------------------------------------------------------------+
|                            USER INTERFACE                             |
|                                                                       |
|  +--------------------+   +-------------------+   +----------------+  |
|  | Recipe Customizer  |   | Biscuit Dip Mode  |   | Radio / Sound  |  |
|  | (Ingredient UI)    |   | (Mini-Game HUD)   |   | (Audio Controls|  |
|  +---------+----------+   +---------+---------+   +-------+--------+  |
+------------|------------------------|---------------------|-----------+
             |                        |                     |
             v                        v                     v
+-----------------------------------------------------------------------+
|                    CLIENT-SIDE APPLICATION ENGINE                     |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                   Zustand Global State Manager                |   |
|   |  (Tracks tea color, biscuit soggy %, audio volume, score)    |   |
|   +-------------------------------+-------------------------------+   |
|                                   |                                   |
|        +--------------------------+--------------------------+        |
|        |                                                     |        |
|        v                                                     v        |
|  +---------------------------+                 +--------------------+ |
|  | WebGL Scene Manager       |                 | Sound Engine       | |
|  | (React Three Fiber Canvas)|                 | (Howler.js Audio)  | |
|  +-------------+-------------+                 +---------+----------+ |
|                |                                         |            |
+----------------|-----------------------------------------|------------+
                 |                                         |
                 v                                         v
+-----------------------------------------------------------------------+
|                         ANIMATION & PHYSICS                           |
|                                                                       |
|   +------------------------+              +-----------------------+   |
|   | 3D Physics Rigid Bodies|              | Particle Shaders      |   |
|   | (Cannon-es Collisions) |              | (Steam, Tea Pouring)  |   |
|   +------------------------+              +-----------------------+   |
+-----------------------------------------------------------------------+
```

---

## 4. Module Specifications & Functional Requirements

### Module A: The 3D Scene Environment
* **Lighting:** Warm dusk ambient light paired with a glowing neon tea stall sign casting realistic soft shadows.
* **Camera Controls:** Smooth orbit camera constrained to a 45-degree horizontal and 30-degree vertical viewing arc focused on a weathered wooden table.
* **Objects:** 3D procedural/low-poly models for:
  1. Traditional glass tea cup (*চায়ের কাপ*).
  2. Condensed milk container (*দুধের কৌটা*).
  3. Vintage radio (*রেডিও*).
  4. Energy/Toast biscuit (*বিস্কুট*).

### Module B: The Interactive Tea Customizer
* **Controls:** Sliders for *Milk Ratio*, *Sugar Level*, *Ginger/Masala*, and *Condensed Milk*.
* **Real-time 3D Fluid Animation:** Changing the sliders dynamically interpolates the 3D tea mesh color using WebGL shaders (from deep reddish-black *Lal Cha* to thick cream *Malai Cha*).
* **Steam Particle System:** A 3D particle emitter generating soft, rising steam above the cup, accelerating based on temperature sliders.

### Module C: "Biscuit Dubao" Physics Mini-Game
* **Mechanics:** User clicks and holds to dip a 3D biscuit into the tea glass.
* **Soggy-meter Algorithm:**
  * 0–2 seconds: Crisp biscuit.
  * 2–4 seconds: Perfect dunk (+100 Points).
  * >4 seconds: Biscuit structural integrity drops to zero, breaks via 3D mesh split, and sinks to the bottom with a 3D splash particle effect!
* **Sound Effects:** Squeaky tea glass clinks, liquid splashes, and a dramatic "Oh no!" sound byte on failure.

### Module D: Street Radio & Ambience (Positional Audio)
* **Radio Toggle:** Interactive 3D radio model that turns on when clicked.
* **Audio Track Layers:**
  1. *Track 1:* Dhaka traffic soundscape (horns, rickshaw bells, distant chatter).
  2. *Track 2:* Boiling tea kettle bubbling.
  3. *Track 3:* Hilarious satirical cricket/politics voice clips.

---

## 5. File Structure & Repository Layout

```text
tong-3d/
├── public/
│   ├── audio/
│   │   ├── ambient-dhaka.mp3
│   │   ├── tea-boil.mp3
│   │   ├── glass-clink.mp3
│   │   └── splash.mp3
│   └── models/
│       ├── tea-glass.glb
│       ├── biscuit.glb
│       └── radio.glb
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Scene.tsx          # R3F Main Canvas
│   │   │   ├── TeaGlass.tsx       # 3D Glass model + Shaders
│   │   │   ├── BiscuitPhysics.tsx # Cannon-es physics model
│   │   │   ├── SteamParticles.tsx # WebGL Particle system
│   │   │   └── RadioModel.tsx     # Interactive Radio
│   │   └── ui/
│   │       ├── HUDOverlay.tsx     # Glassmorphism UI
│   │       ├── RecipeControls.tsx # Sliders & controls
│   │       └── ScoreBoard.tsx     # Mini-game HUD
│   ├── hooks/
│   │   ├── useAudio.ts            # Howler.js controller
│   │   └── useTeaState.ts         # Zustand store
│   └── lib/
│       └── utils.ts
├── AGENTS.md
└── package.json
```

---

## 6. Guidelines for AI Agents (`AGENTS.md`)

Save the block below as `AGENTS.md` in the root of your project directory for AI coding tools.

```markdown
# AGENTS.md

Rules for any coding agent working on this repo (Claude Code, Cursor, Windsurf, etc.).
Read this file fully before making changes.

## 1. What this project is

Tong 3D is a client-side, animation-heavy 3D micro web application simulating a Bangladeshi street tea stall. It features React Three Fiber 3D rendering, Cannon-es 3D physics, Motion UI springs, and Howler.js positional audio.

This project has ZERO backend databases and zero monthly server hosting costs.

## 2. Technical Stack

- Next.js 15+ (App Router) + TypeScript (strict mode enabled).
- Three.js + `@react-three/fiber` + `@react-three/drei` for WebGL rendering.
- `@react-three/cannon` (Cannon-es) for 3D rigid-body physics.
- `framer-motion` (Motion) for 2D UI overlay animations.
- `howler` for audio synthesis.
- `zustand` for client-side state management.
- Tailwind CSS + shadcn/ui styles.

## 3. Mandatory Development Commands

- `pnpm dev` - Launch local dev server.
- `pnpm typecheck` - Run strict TypeScript compilation check.
- `pnpm lint` - Run ESLint checks.
- `pnpm build` - Run static production build check.

Before declaring any coding step complete, `pnpm typecheck && pnpm lint` MUST pass with 0 errors.

## 4. Coding & Architectural Standards

1. 3D PERFORMANCE IS TOP PRIORITY: Keep 3D geometry low-poly and optimize lighting setups. Avoid expensive realtime post-processing effects that cause frame drops on mobile devices.
2. CANVAS ISOLATION: Keep 3D Canvas logic (`src/components/canvas/`) separated from standard HTML UI components (`src/components/ui/`).
3. NO PROCESS.ENV IN UI: Read all local configurations through clean fallback utilities or dedicated constants.
4. STRICT TYPESCRIPT: No `any` types allowed. Define explicit TypeScript interfaces for all R3F props, Zustand state models, and audio events.
5. DESTRUCTION AND CLEANUP: Always dispose of Three.js geometries, materials, and Howler audio instances when components unmount to prevent memory leaks.
```