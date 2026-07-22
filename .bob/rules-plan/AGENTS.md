# Project Architecture Constraints (Non-Obvious Only)

- **Single source of truth is `storyData.ts`** — any feature that needs persistent data must either accept that it lives only in static code, or introduce a new storage mechanism (none exists today).
- **State is fully lifted to `App.tsx`** — all modals, sidebar states, selected photo/member, and photo/note collections are owned there. Components are mostly presentational. Adding deeply nested state should follow this lift-to-root pattern.
- **`ExecutivePanels` is a God component** — 6 tab types are rendered via a single `type` prop switch. New executive tab panels should either extend this component or justify a standalone one.
- **No persistence layer** — `memories`, `notes`, and `memberProfiles` state is lost on page reload. The upload and bio-edit flows write to React state only.
- **Tailwind v4 + `@tailwindcss/vite`** — the Vite plugin compiles Tailwind at build time. There is no separate PostCSS step. Any CSS tooling plan must account for this.
- **AI Studio deployment constraints** — `DISABLE_HMR=true` kills file watching too (see `vite.config.ts`). HMR-dependent dev workflows won't function in the AI Studio agent environment.
- **`metadata.json` gates Gemini API** — the `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` entry is required for the AI Studio runtime to inject `GEMINI_API_KEY`. Without it, Gemini calls will silently lack credentials.
