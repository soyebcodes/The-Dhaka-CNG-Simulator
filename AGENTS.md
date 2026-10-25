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

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
