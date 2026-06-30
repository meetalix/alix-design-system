# Space, shape & motion

Room to breathe. Soft, consistent edges. Depth from hairlines and space — not heavy shadows.

## Spacing — 4px grid

`tokens.space[1..9]`. Author against the scale, never with arbitrary numbers.

| Token | px | Use |
|---|---|---|
| `space[1]` | 4 | Hairline gaps, icon padding |
| `space[2]` | 8 | Within a component |
| `space[3]` | 12 | Label to control |
| `space[4]` | 16 | Card padding, list rows |
| `space[5]` | 24 | Between cards, screen gutter |
| `space[6]` | 32 | Section breaks |
| `space[7]` | 48 | Major rhythm |
| `space[8] / [9]` | 64 / 96 | Large layout |

## Radius

`tokens.radius.*`. Generous, soft rectangles — pills only for fully-rounded controls.

| Token | px | Use |
|---|---|---|
| `radius.sm` | 8 | Chips, inner tags |
| `radius.md` | 12 | **Default** — buttons, fields, cards |
| `radius.lg` | 26 | Panels, sheets |
| `radius.xl` | 36 | Hero frames |
| `radius.pill` | 999 | Switch tracks, tags, status pills |

## Elevation — restrained

`tokens.shadow.*` — each is a ready-to-spread RN shadow object (with Android `elevation`). Most surfaces are **flat** (hairline only).

| Token | Use |
|---|---|
| `shadow.sm` | Subtle lift (segmented thumb) |
| `shadow.md` | Raised — menus, popovers |
| `shadow.lg` | Large raised surfaces |
| `shadow.overlay` | Sheets, dialogs |
| `shadow.fab` | Floating action button |

## Motion

`tokens.duration.*` + `tokens.easing.default`.

- **120ms** taps, toggles · **180ms** most transitions · **260ms** sheets, screens.
- Easing: `Easing.bezier(0.2, 0.8, 0.2, 1)` — a gentle ease-out, the only curve.
- Fades and small position shifts only. Press nudges 1px. **Never bounce, never overshoot.**
