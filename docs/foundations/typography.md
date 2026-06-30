# Typography

A serif for the things that matter, a sans for everything else. **Make Way** carries the few words that should land — a status, a name, a number. **Beausite Classic** does the rest.

Source: [`tokens/typography.json`](../../tokens/typography.json) → `tokens.text.*` / `tokens.font.family.*`. Fonts: [assets/fonts](../../assets/fonts/README.md).

## Families

- **Make Way** — display serif (Fatype). Headlines, key numbers, quotes. Tracked tight.
- **Beausite Classic** — workhorse sans (Fatype). Body, labels, UI, data. Regular / Medium / Semibold.
- **App cuts** (`Make Way App`, `Beausite Classic App`) — screen-optimized; prefer at small sizes on dense product screens.

## Scale

Sizes are absolute points, tuned for mobile (the web reference uses fluid `clamp()` maxes that don't apply here). Each `tokens.text.*` entry is a ready-to-spread RN `TextStyle`.

| Token | Font | Size / line | Use |
|---|---|---|---|
| `text.display` | Make Way 500 | 34 / 37 | Hero number or name — one per screen |
| `text.title` | Make Way 500 | 28 / 32 | Screen title |
| `text.headline` | Make Way 500 | 22 / 26 | Headline |
| `text.lead` | Beausite 400 | 24 / 30 | Large intro paragraph |
| `text.section` | Beausite 600 | 17 / 22 | Section header |
| `text.body` | Beausite 400 | 16 / 24 | Body |
| `text.bodyStrong` | Beausite 500 | 16 / 24 | Emphasized body / control labels |
| `text.secondary` | Beausite 400 | 14 / 20 | Secondary |
| `text.small` | Beausite 400 | 12 / 16 | Meta |
| `text.eyebrow` | Beausite 500 | 11 / 14, +tracking, UPPERCASE | Eyebrow / label |
| `text.button` | Beausite 500 | 16 | Button / CTA label |
| `text.note` | Beausite 400 italic | 18 / 22 | Editorial aside |

Body text is **16px minimum** in inputs to avoid iOS zoom. Letter-spacing is baked into each token (Make Way is tracked tight, ~-3.5% at display sizes).
