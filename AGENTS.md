# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project
IBM Db2 Lucknow Team Executive Review Dashboard — React 19 + TypeScript + Vite 6 + Tailwind v4 (via `@tailwindcss/vite` plugin, NOT the PostCSS plugin). Deployed on Google AI Studio with server-side Gemini API capability.

## Commands
```bash
npm run dev       # Dev server on port 3000, bound to 0.0.0.0
npm run build     # Vite build
npm run lint      # tsc --noEmit (TypeScript type-check only — no ESLint)
npm run clean     # rm -rf dist server.js
```
**No test framework is configured.** There are no test files or test runner.

## Critical Environment
- `GEMINI_API_KEY` and `APP_URL` are injected by AI Studio at runtime (see [`.env.example`](.env.example))
- `DISABLE_HMR=true` disables HMR **and** file watching entirely (AI Studio agent mode)
- Path alias `@` maps to the project root (not `src/`): `@/src/types` resolves to `./src/types`

## Architecture
All data lives statically in [`src/data/storyData.ts`](src/data/storyData.ts) — no API calls, no backend. State is lifted to [`src/App.tsx`](src/App.tsx) and passed down via props.

Tab routing uses the `DashboardTab` union type (`src/types.ts`) — **not** React Router. Active tab is a plain `useState`.

`ExecutivePanels` is a single component dispatched by `type` prop covering 6 different tabs (`achievements`, `in-progress`, `sovereign-innovations`, `collaborations`, `challenges`, `ai-adoption`).

## Code Style (project-specific)
- **Tailwind v4** — `@import "tailwindcss"` in CSS, not `@tailwind` directives. Custom utilities go in `@layer utilities`.
- Custom CSS classes (`glass-card`, `glass-panel`, `mesh-gradient-bg`, etc.) are defined in [`src/index.css`](src/index.css) and used alongside Tailwind classes throughout. Do not duplicate these as Tailwind utilities.
- IBM Carbon colour tokens are used as CSS variables (`--carbon-blue-60: #0f62fe`, etc.) and also as hardcoded hex `#0f62fe` directly in Tailwind classes — both patterns coexist.
- Named exports for all components (`export const Foo: React.FC<Props>`), default export only for `App`.
- Props interfaces are defined inline in the same file as the component, not in `types.ts`.
- `types.ts` holds only shared data-model types (`MemoryPhoto`, `DashboardTab`, `MemberProfile`, etc.).
- Icons come exclusively from `lucide-react` — no other icon library.
- Animation library is `motion` (Motion for React, formerly Framer Motion) — package name is `motion`, not `framer-motion`.

## Team Photos
Photos are served from `/team_photos/<Name>.jpg` (public directory). The `team_photos/` directory exists at both the project root and under `public/team_photos/`.
