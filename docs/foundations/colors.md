# Color

Navy anchors. Color earns its place. White, navy and tan carry almost every screen; accents and state colors are deployed sparingly — a single point of emphasis at a time.

Source: [`tokens/color.json`](../../tokens/color.json). **Components consume the semantic groups below — never `color.palette.*` directly.**

## The 90 / 10 budget

~90% of every surface is **white + navy + tan**. The remaining ~10% is accent (purple) and action (blue), used once per screen.

## Core palette (primitives)

| Name | Hex | |
|---|---|---|
| Navy | `#0C2553` | Primary brand color |
| Navy deep | `#0E2D66` | Tonal symbol-on-navy |
| White | `#FFFFFF` | |
| Tan | `#F4F3F1` | Neutral light background |
| Tan dark | `#EAE8E1` | Deeper neutral block |
| Purple | `#B6ABFD` | Signature accent |
| Light blue | `#D7F5F9` | Text + fields on navy |
| Symbol blue | `#A0DAE0` | Two-tone logo accent |
| Blue | `#1170DB` | Links, primary action |
| CTA blue | `#043CA5` | Hover / pressed action |
| Ink | `#11100D` | Near-black text |
| Working text | `#2F3136` | Secondary text |
| Gray | `#9E9E9E` | Disabled / placeholder |

Data-viz only (charts, never general UI): teal `#05D3BD`, cyan `#72F2E4`, yellow `#FFEB67`, orange `#FFC167`.

## Semantic aliases (what you use)

| Token | → | Use |
|---|---|---|
| `color.bg.default / alt / block / dark` | white / tan / tan-dark / navy | Surfaces |
| `color.fg.default / secondary / muted` | ink / working / gray | Text on light |
| `color.fg.brand` | navy | Functional icons, key labels on light |
| `color.fg.onDark / onDarkSecondary` | white / light-blue | Text on navy |
| `color.accent.default / soft / onAccent` | purple / light-blue / ink | The one accent moment |
| `color.action.default / press` | blue / cta-blue | Links & primary action |
| `color.border.hairline` | ink @12% | The default 1px separator |

## Semantic state colors

Muted to sit beside navy — never neon. Each has a **strong** tone (icon, text, 1px border) and a **soft** tint (background fill). Use the soft tint for the surface, the strong tone for the one thing that matters — and only on genuine state moments.

| State | Strong | Soft |
|---|---|---|
| `color.state.error` | `#B23A2B` | `#F6E7E4` |
| `color.state.warning` | `#A56A12` | `#F7EEDD` |
| `color.state.success` | `#2F6B4F` | `#E4EEE8` |
| `color.state.info` | `#1170DB` | `#E4F0FB` |
