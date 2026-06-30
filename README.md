# Alix Design System

### → [**Open the interactive component library**](https://meetalix.github.io/alix-design-system/)

The live, clickable kit — every component, every state, rendered from the real React Native code. The fastest way in if you just want to browse what exists. *(Public site, published from `main` via GitHub Pages. The repo/source stays private; the licensed brand fonts are excluded from the public build.)*

---

The authoritative reference for how Alix looks, feels, and is built — for product managers, engineers, and anyone designing in the product.

This repository is the **source of truth**. Not Figma, not a wiki, not a screenshot in someone's deck. If it isn't defined here, it isn't part of the design system.

---

## Why this exists, and why it works this way

This design system is built for the team we actually are, not the team design-system tutorials assume.

We don't have a formal, dedicated designer embedded on the team. We have generalist builders — people who move fluidly between product, design, and engineering, often with AI assistance — and the occasional designer who joins for a project. That team makeup is unusual by traditional standards but increasingly normal for AI-assisted startups, where the bottleneck is no longer "can a specialist produce the asset" but "can everyone — humans and AI alike — reach the truth quickly and build from it."

So we optimize for a different set of priorities than a classic design org would:

- **The truth lives in code, in plain text, in one place.** Tokens, components, and documentation are version-controlled, diffable, and reviewable. An AI agent can read the entire system. A new engineer can read the entire system. A PM can read the entire system. Nothing is locked inside a proprietary canvas that requires a seat, a login, and tribal knowledge to navigate.
- **Accessibility to the reference beats fidelity of the authoring tool.** A system everyone can read and reason about is worth more than a beautiful one only a specialist can edit.
- **Live components beat screenshots.** The documentation site renders the *actual* shipping components, so the docs can never quietly drift from reality.
- **Generalists over specialists; open formats over legacy tools.** We treat Figma as an optional downstream consumer, not the system of record.

These are opinions, not universal laws. They're the right opinions *for us*. The rest of this README makes the trade-offs we're accepting explicit, so no one is surprised later.

---

## Principles

1. **Code is the source of truth.** Design tokens and components are defined here and published from here. Any other representation (a Figma library, a slide, a doc) is a *copy*, and copies are allowed to be wrong — this repo is not.
2. **Documentation lives with the code.** The published reference is authored in this repo and versioned alongside the components it describes, so docs and implementation move together. *(Planned enhancement: render live components directly in the docs via Storybook for React Native, so the reference can never drift from what ships. A tool we expect to add — not a dependency today.)*
3. **Everything is reviewable.** Changes to the system go through pull requests like any other code. Design decisions get the same scrutiny, history, and accountability as engineering decisions.
4. **The system is legible to AI.** Plain-text, well-structured definitions mean an AI assistant can read, reason about, and build with the full system. This is a first-class design goal, not a side effect.
5. **Figma is a consumer, not the owner.** We support exporting *to* Figma for designers who want it. We do not let Figma define anything.

---

## What this is — and what it is not

### Limitations we are choosing on purpose

We're writing these down so they read as deliberate decisions, not gaps we forgot to fill.

- **The Figma export covers tokens and foundations only — not components.** Designers can pull our colors, typography, spacing, and other foundations into Figma (via a Style Dictionary → Tokens Studio / Figma variables pipeline). They **cannot** round-trip our components back into editable Figma components. Coded React Native components do not export into a usable Figma library. If you want to mock up *using* Alix components inside Figma, that requires a hand-built Figma library that this repo does not produce or maintain. That is out of scope by choice.
- **The published reference is read-only, and the live component library is a public site.** The repo (the source of truth) stays private, but the compiled Storybook is published to a public GitHub Pages URL — the current plan doesn't support private Pages, and a public, linkable library is worth more to non-engineering teammates than a gated one. What this means in practice:
  - The site exposes the *compiled* component library, not the source. The repo, tokens, and code remain private to people with GitHub access.
  - The licensed Fatype brand fonts are **excluded** from the public build (system-font fallback online), so the licensed files are never served publicly.
  - The published site is for *reading*, not commenting. Feedback and change requests go through the channel below, not through the site.
- **The canonical visual is the React Native rendering.** We are mobile-first today. As web clients arrive, the system is structured to extend to them, but until then the live-rendered components reflect mobile.

### What it is not

- It is not a Figma file. Figma may consume our tokens; it does not define them.
- It is not a static gallery of screenshots. If a component image looks out of date, the image is wrong — trust the code in `/components`.
- It is not mobile-only by design. It is mobile-*first*. Tokens and structure are built to extend to web without a rewrite.

---

## How to engage

**To view the system:** open the [interactive component library](https://meetalix.github.io/alix-design-system/) — it's a public site, no login needed.

**To propose a change:** open a pull request, or if you're not comfortable in the repo, file the request in our feedback channel and a builder will carry it through. Design changes are reviewed like code.

**To use the tokens in Figma:** run the export pipeline (see below) and import the resulting tokens via Tokens Studio. Remember: tokens and foundations only.

---

## Structure

```
/tokens         Design tokens (color, type, spacing, etc.) — the foundation, in open formats
/components     React Native components, the canonical implementation
/docs           Authored documentation pages (published via GitHub Pages)
/export         Figma export pipeline (Style Dictionary → token formats Figma can import)
```

---

## A note on where this is heading

This is an opinionated, code-first, AI-legible workflow tuned for a team of generalist builders without a dedicated designer. As the team and product grow — more web surface area, maybe a designer or two — some of these trade-offs will be worth revisiting. When that happens, we revisit them *in the open*, by editing this README in a pull request, so the reasoning stays as visible as the system itself.
