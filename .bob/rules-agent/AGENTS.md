# Project Coding Rules (Non-Obvious Only)

## Data changes
All dashboard content is static data in `src/data/storyData.ts`. To add/change any panel content (achievements, in-progress, collaborations, etc.), edit only that file — no API, no DB.

## Adding a new tab
1. Add the tab id to the `DashboardTab` union in `src/types.ts`
2. Add a nav item in `DashboardSidebar.tsx` (`navItems` array)
3. Add a conditional render block in `App.tsx`
4. Either create a new panel component or extend `ExecutivePanels` with a new `type` branch

## ExecutivePanels name-highlighting
The `renderDetailText()` helper in `ExecutivePanels.tsx` auto-wraps known team member names as clickable buttons that fire `onSelectMember`. To add a name to this highlighting, append to the `teamNames` array at the top of the component.

## Tailwind v4 — no config file
There is no `tailwind.config.js/ts`. Tailwind v4 is configured via the Vite plugin only. Theme extensions must be done in CSS using `@theme` or `@layer utilities` inside `src/index.css`.

## Path alias
`@` resolves to the project root (`.`), not `src/`. So imports from root are `@/src/components/Foo`, not `@/components/Foo`.

## Member profiles
`DEFAULT_MEMBER_PROFILES` in `storyData.ts` is a `Record<string, MemberProfile>` keyed by full name. Fallback profile is generated inline in `App.handleSelectMember` for names not in the map — no crash, just defaults.

## No linter beyond TypeScript
`npm run lint` runs `tsc --noEmit` only. There is no ESLint. Formatting is not enforced by tooling.
