# Architecture & Token Export Spec

This document defines the repository structure for `alix-design-system` and the pipeline that exports design tokens to Figma. It is the build-spec companion to the [README](./README.md), which covers the *why*. This covers the *how*.

---

## Repository structure

```
alix-design-system/
├── README.md                  Principles, limitations, how to engage (the front door)
├── ARCHITECTURE.md            This file
├── package.json               Workspace root; scripts for build, export, publish
│
├── tokens/                    THE SOURCE OF TRUTH for foundations
│   ├── color.json             Color primitives + semantic aliases
│   ├── typography.json        Font families, sizes, weights, line-heights
│   ├── spacing.json           Spacing scale
│   ├── radius.json            Border radii
│   ├── elevation.json         Shadows / elevation
│   └── motion.json            Durations, easing curves
│
├── components/                React Native components (canonical implementation)
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.types.ts
│   │   └── Button.md          Usage notes, props, do/don't
│   ├── ...
│   └── index.ts               Public exports
│
├── export/                    Figma export pipeline (tokens + foundations ONLY)
│   ├── style-dictionary.config.js
│   └── build/                 Generated artifacts (gitignored or committed per team call)
│       ├── tokens.figma.json          Tokens Studio-compatible export
│       └── variables.figma.json       Figma Variables REST API-compatible export
│
├── docs/                      Authored documentation, published via GitHub Pages
│   ├── index.md
│   ├── getting-started.md
│   ├── foundations/           Rendered token references (color swatches, type scale)
│   └── components/            One page per component
│
└── platform/                  Per-platform output (extensibility seam)
    ├── native/                React Native consumes tokens here today
    └── web/                   Reserved for future web clients (empty for now)
```

### Why this shape

- **`tokens/` is the root of everything.** Tokens are authored once, in open JSON, and every downstream format (React Native, Figma, future web) is *generated* from them. Nothing downstream is hand-edited.
- **`platform/` exists from day one even though only `native/` is populated.** This is the cheap insurance that makes the "mobile-first, not mobile-only" promise real — adding web later means filling a folder, not restructuring the repo.
- **`export/` is clearly fenced off as a one-way, partial bridge.** Its presence and naming make it obvious that Figma is a downstream consumer, and the folder only ever contains tokens/foundations — never components.

---

## Token format

We follow the [W3C Design Tokens](https://www.w3.org/community/design-tokens/) shape so the files stay tool-agnostic and AI-legible. Example (`tokens/color.json`):

```json
{
  "color": {
    "brand": {
      "primary":   { "$type": "color", "$value": "#4F46E5" },
      "primaryFg": { "$type": "color", "$value": "#FFFFFF" }
    },
    "surface": {
      "default": { "$type": "color", "$value": "#FFFFFF" },
      "muted":   { "$type": "color", "$value": "#F4F4F5" }
    }
  }
}
```

Two layers, deliberately:

1. **Primitives** — raw values (`indigo-600: #4F46E5`).
2. **Semantic aliases** — intent-named tokens that *reference* primitives (`brand.primary → indigo-600`).

Components consume **semantic** tokens only, never primitives. This is what lets us re-theme or add dark mode by swapping the alias layer without touching a single component.

---

## Token export pipeline (→ Figma)

The export is a one-way street: **tokens flow out to Figma; nothing flows back in.** Built on [Style Dictionary](https://amzn.github.io/style-dictionary/), which reads the W3C token files and emits multiple targets.

### What the pipeline produces

| Target | Consumer | Notes |
|---|---|---|
| `native/` token modules (TS) | React Native app | The live, in-product values |
| `tokens.figma.json` | Figma via **Tokens Studio** plugin | Designers import this to get our foundations |
| `variables.figma.json` | Figma via **Variables REST API** | Optional automated push to a Figma file's variables |

### Flow

```
tokens/*.json  ──►  Style Dictionary  ──┬─►  platform/native/  (app consumes)
   (truth)                              │
                                        ├─►  export/build/tokens.figma.json  ──► Tokens Studio (manual import)
                                        │
                                        └─►  export/build/variables.figma.json ──► Figma Variables API (optional auto-push)
```

### Commands (target shape)

```bash
npm run build:tokens     # tokens/ → platform/native/  (in-product values)
npm run export:figma     # tokens/ → export/build/*     (Figma-bound artifacts)
```

### Hard boundary — read this before anyone asks "why can't I get the components in Figma?"

The pipeline exports **color, typography, spacing, radius, elevation, motion** — the foundations. It does **not** and **cannot** export components. React Native components do not round-trip into editable Figma components. A designer who wants to compose mock-ups *with* Alix components inside Figma needs a hand-built Figma library, which this repo neither produces nor maintains. That is out of scope by the deliberate choice documented in the README.

---

## Versioning & publishing

- The system is versioned with the repo (semver tags). A token or component change is a normal PR.
- GitHub Pages publishes `docs/` on merge to `main`. Site is private — viewers need repo access.
- The Figma export artifacts are regenerated on release; designers re-import to pick up changes. (There is no live sync — re-import is a deliberate, explicit step.)

---

## Planned, not built yet

- **Storybook for React Native** to render live components in the docs site (removes the last hand-maintained gap between docs and shipped UI).
- **`platform/web/`** populated when the first web client lands.
- **Optional automated Figma Variables push** in CI, if manual Tokens Studio import proves too lossy for the designers who use it.
