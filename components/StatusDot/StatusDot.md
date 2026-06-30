# StatusDot

A colored dot + label that **reports truth** — the calm, at-a-glance state of a case, document, or task. The dot carries the signal; the label names it. `neutral` is the quiet "no signal yet" case.

## Usage

```tsx
import { StatusDot } from '@alix/design-system';

<StatusDot status="success" label="Filed" />
<StatusDot status="warning">Action needed</StatusDot>
<StatusDot status="error" label="Rejected" />
<StatusDot status="info" label="In review" />
<StatusDot status="neutral" label="Not started" />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `status` | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | — | Drives the dot color |
| `label` | `string` | — | The text; or pass a string child instead |
| `children` | `string` | — | Used when `label` is omitted |
| `testID` | `string` | — | |

## Behavior

- The 9×9 dot is colored by `status`: `success`/`warning`/`error`/`info` use `color.state.<status>.strong`; `neutral` uses `color.fg.muted`.
- The label is medium weight (`font.family.sansMedium` / `500`) over the `text.secondary` ramp, colored `fg.secondary` (or `fg.muted` for `neutral`).
- Laid out as a row, `space.2` gap, vertically centered.

## Do / Don't

- **Do** keep the label short and literal — it states the truth, not a sentence.
- **Do** use `neutral` for "not started / unknown" rather than coloring it as a real state.
- **Don't** rely on color alone — the label always carries the meaning too.

## Tokens

`color.state.success/warning/error/info.strong` · `color.fg.muted/secondary` · `font.family.sansMedium` · `text.secondary` · `space.2`.
