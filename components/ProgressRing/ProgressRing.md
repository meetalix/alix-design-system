# ProgressRing

A circular progress indicator with a centered percentage. The navy arc starts at the top (12 o'clock) and fills clockwise over a tan-dark track. Use it for completion state — e.g. how far through an estate's tasks the user is.

## Usage

```tsx
import { ProgressRing } from '@alix/design-system';

<ProgressRing progress={0.62} />
<ProgressRing progress={0.4} caption="complete" />
<ProgressRing progress={0.9} size={88} strokeWidth={8} label="9/10" caption="tasks" />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `progress` | `number` | — | 0–1, clamped |
| `size` | `number` | `132` | Outer diameter (px) |
| `strokeWidth` | `number` | `11` | Track + arc stroke |
| `label` | `string` | `` `${Math.round(progress*100)}%` `` | Big centered label |
| `caption` | `string` | — | Small line below the label |
| `testID` | `string` | — | |

## Behavior

- Geometry: `radius = (size - strokeWidth) / 2`, `circumference = 2π·radius`, `strokeDasharray = circumference`, `strokeDashoffset = circumference · (1 − progress)`.
- The `<Svg>` is rotated `-90deg` so the arc starts at the top.
- The progress arc uses `strokeLinecap="round"`.
- `accessibilityRole="progressbar"` with `accessibilityValue={{ now, min: 0, max: 100 }}` (rounded percentage).

## Do / Don't

- **Do** keep navy as the progress color — navy is "on", never decorative.
- **Do** use a short `caption` (one word) to name what's complete.
- **Don't** use purple here — the accent is reserved for the single action moment.
- **Don't** pass un-normalized values; `progress` is 0–1, not 0–100.

## Tokens

`color.bg.block` (track) · `color.bg.dark` (arc) · `color.fg.brand` (label) · `color.fg.muted` (caption) · `font.family.display` · `text.small` · `space.1`.
