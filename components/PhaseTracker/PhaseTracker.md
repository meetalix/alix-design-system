# PhaseTracker

A vertical stepper for the phases of an estate. Completed phases are navy with a check, the **current** phase is the single purple accent moment, and upcoming phases recede to muted. A 2px connector runs between markers.

## Usage

```tsx
import { PhaseTracker } from '@alix/design-system';

<PhaseTracker
  steps={[
    { title: 'Gather documents', sub: 'Will, deeds, accounts', status: 'complete' },
    { title: 'Notify institutions', status: 'complete' },
    { title: 'File with the court', sub: 'Due in 14 days', status: 'current' },
    { title: 'Distribute assets', status: 'upcoming' },
  ]}
/>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `steps` | `PhaseStep[]` | — | Ordered top→bottom |
| `testID` | `string` | — | |

`PhaseStep = { title: string; sub?: string; status: 'complete' \| 'current' \| 'upcoming' }`

## Anatomy

Each step is a row (`flexDirection: 'row'`, `gap: 14`):

- **Left column** — a 26×26 circular marker plus a 2px connector below it (omitted on the last step).
  - `complete`: navy marker with a `Check` icon (size 14, strokeWidth 3, `fg.onDark`); navy connector.
  - `current`: purple marker with the 1-based number in `accent.onAccent`; tan-dark connector.
  - `upcoming`: tan-dark marker with the number in `fg.muted`; tan-dark connector.
- **Right column** — the title (15pt; medium for current/complete, muted regular for upcoming) and an optional `sub` line (`text.small`, `fg.muted`, `marginTop: 2`). Steps carry `paddingBottom: 18`.

## Do / Don't

- **Do** keep exactly one `current` step — it's the single purple moment.
- **Do** list phases in order; the marker numbers are 1-based by position.
- **Don't** color upcoming steps with navy or purple — they must recede.
- **Don't** render a connector after the final step.

## Tokens

`color.bg.dark` · `color.accent.default/onAccent` · `color.bg.block` · `color.fg.brand/muted/onDark` · `font.family.sansMedium` · `text.body/small`.
