# Alix Design System

The authoritative reference for how Alix looks, feels, and is built. **Code is the source of truth** — these docs describe what's defined in [`/tokens`](../tokens) and [`/components`](../components), and are versioned alongside it.

> Alix is the comprehensive service for executors — handling estate settlement and all the details a life leaves behind. The system is mobile-first (React Native), light mode only for now.

## Start here

- **[Getting started](./getting-started.md)** — install, link fonts, consume tokens & components
- **[Principles](./principles.md)** — the four rules every screen follows
- **Foundations**
  - [Color](./foundations/colors.md)
  - [Typography](./foundations/typography.md)
  - [Space, shape & motion](./foundations/space-shape-motion.md)
  - [Iconography](./foundations/iconography.md)
- **[Components](./components/index.md)** — the crafted kit

## How it fits together

```
tokens/*.json  ──►  Style Dictionary  ──►  platform/native/tokens.ts  ──►  components/  ──►  the Alix app
   (truth)                             └─►  export/build/*.figma.json  ──►  Figma (consumer)
```

Tokens are authored once in open [W3C/DTCG](https://www.w3.org/community/design-tokens/) JSON. Everything downstream is **generated** — never hand-edited. Change a token, run `npm run build`, and the app + Figma exports update from one source. See [ARCHITECTURE.md](../ARCHITECTURE.md).
