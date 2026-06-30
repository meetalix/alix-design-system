# CLAUDE.md

Guidance for AI agents (and humans) working in this repo. Read [README.md](./README.md) for *why* this
system exists and [ARCHITECTURE.md](./ARCHITECTURE.md) for *how* it's built. This file captures the rules
that aren't obvious from the file tree — follow them so generated work fits the system instead of fighting it.

## What this repo is

The Alix Design System: the **source of truth** for how Alix looks, feels, and is built. Code is canonical —
not Figma, not a wiki, not a screenshot. If it isn't defined here, it isn't part of the system. The team is
generalist builders + AI, with no dedicated embedded designer, so the system is optimized to be **legible to
AI and humans alike** and **reviewable like any other code**.

## Non-negotiable rules

1. **Tokens are the root of everything.** Foundations are authored once in `tokens/*.json` and *every*
   downstream format (React Native, Figma, future web) is **generated** from them. Never hand-edit generated
   downstream output — change the token source and regenerate.

2. **Token files follow the [W3C Design Tokens](https://www.w3.org/community/design-tokens/) shape** —
   `{ "$type": ..., "$value": ... }`. Keep them tool-agnostic and AI-legible. No tool-specific schemas in
   `tokens/`.

3. **Two token layers, kept separate:**
   - **Primitives** — raw values (e.g. `indigo-600: #4F46E5`).
   - **Semantic aliases** — intent-named tokens that *reference* primitives (e.g. `brand.primary → indigo-600`).

   **Components consume semantic tokens only — never primitives, never raw hex/px literals.** This is what lets
   us re-theme or add dark mode by swapping the alias layer without touching a component.

4. **Components are React Native, and RN is the canonical rendering.** Mobile-**first**, not mobile-only.
   Don't hard-code values that belong in tokens. One folder per component:
   `Component.tsx`, `Component.types.ts`, `Component.md` (usage, props, do/don't); export via `components/index.ts`.

5. **`platform/` is the extensibility seam.** `platform/native/` is populated; `platform/web/` stays reserved
   and empty until the first web client lands. Adding web later means filling a folder, not restructuring.

6. **Figma is a downstream consumer, one-way.** `export/` exports **foundations only** (color, typography,
   spacing, radius, elevation, motion) — **never components**. Tokens flow *out* to Figma; nothing flows back
   in. Don't add anything that treats Figma as a source.

7. **Docs live with the code** in `docs/`, versioned alongside what they describe. Live-component rendering
   (Storybook for RN) is *planned, not built* — don't assume it exists yet.

## Layout

```
tokens/      Source of truth for foundations (W3C JSON)
components/   React Native components (canonical implementation)
export/       Figma export pipeline (Style Dictionary; foundations only, one-way)
docs/         Authored docs, published via GitHub Pages
platform/     Per-platform generated output (native/ live, web/ reserved)
```

## Working norms

- Every change is a PR and reviewed like code — design decisions get the same scrutiny as engineering.
- When you change a foundation, update `tokens/` and regenerate; don't patch the generated artifacts.
- Build/export command shapes (see ARCHITECTURE.md): `npm run build:tokens`, `npm run export:figma`.
- If you're about to violate a rule above because the system seems to require it, that's a signal to stop and
  flag it — the rules are deliberate trade-offs documented in the README, not accidents.
