# Principles

Four rules that keep every screen feeling like expert hands are on it. When a design decision is unclear, these break the tie.

### 1. Calm by default, loud on purpose
Navy and neutrals carry ~90% of every screen. Color is a tool for attention, never decoration — **one clear focal point per view**. Purple marks what's *next*; a state color marks what's *true*. Never stack two accents in one card.

### 2. One job per screen
Executors are overwhelmed. Each screen states where things stand and the single next action. We do the work; the app reports it.

### 3. Editorial, not enterprise
Generous space, a confident serif (Make Way) for the few things that matter, restrained UI chrome. It should read like a trusted firm, not a dashboard.

### 4. Consistent, so it can scale
Every new feature reuses a named component from the [kit](./components/index.md). If something doesn't exist, **add it to the system** — don't reinvent it on one screen.

---

## Settled decisions

- **Look & feel: bold reinvention.** Confident, editorial use of navy + the Make Way serif — a navy hero leading with one large serif number, a single purple "one thing today" action.
- **Palette and fonts are fixed:** navy anchor, Make Way + Beausite Classic. Everything else is free to evolve.
- **Light mode only**, for now. The token alias layer is structured so dark mode can be added by swapping semantic aliases — without touching components.

## Conventions

- Restraint with color; attention callouts must be highly intentional.
- The semantic **state** colors (error / warning / success / info) and the Lucide icon set @1.75 stroke are the current proposals — swap for Alix's own when defined, at the token layer.
- Crafted over "thrown together": deliberate spacing, clear hierarchy, hairlines over heavy borders.
