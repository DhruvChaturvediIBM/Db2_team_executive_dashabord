# Project Documentation Context (Non-Obvious Only)

- This is a **static showcase dashboard** — there is no backend, no database, no authentication. All data is hardcoded in `src/data/storyData.ts`.
- The `public/team_photos/` and root-level `team_photos/` directories both exist; the app references `/team_photos/` (served from `public/`).
- The `motion` package is Motion for React (formerly Framer Motion) — the package name changed. Import from `"motion/react"`.
- Tailwind v4 has no config file — searching for `tailwind.config.*` will find nothing. Customisation is in `src/index.css`.
- The `@` import alias points to the project **root**, not `src/`. Check `vite.config.ts` and `tsconfig.json` paths.
- Tab navigation is pure `useState` — there is no router. Searching for `react-router` or `useNavigate` will find nothing.
- `metadata.json` is consumed by Google AI Studio, not by the app itself — it declares the `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` capability needed for Gemini calls.
