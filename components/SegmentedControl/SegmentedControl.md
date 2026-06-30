# SegmentedControl

Switch between a small set of mutually exclusive filters or views. The selected segment lifts onto a white surface (navy = "on"); the unselected ones stay quiet on the tan track. Best for **2–4** short options.

## Usage

```tsx
import { SegmentedControl } from '@alix/design-system';

const [filter, setFilter] = useState('all');

<SegmentedControl
  segments={[
    { value: 'all', label: 'All' },
    { value: 'open', label: 'Open' },
    { value: 'done', label: 'Done' },
  ]}
  value={filter}
  onChange={setFilter}
/>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `segments` | `{ value: string; label: string }[]` | — | The options; each `value` is its identity |
| `value` | `string` | — | Currently selected segment value |
| `onChange` | `(value: string) => void` | — | Fires with the newly selected value |
| `testID` | `string` | — | |

## Behavior

- The selected segment gets a white (`bg.default`) surface, `shadow.sm`, and navy (`fg.brand`) label. Unselected segments are transparent with a `fg.secondary` label.
- Labels are medium weight (`font.family.sansMedium` / `500`) over the `text.secondary` ramp.
- Each segment is `accessibilityRole="button"` with `accessibilityState={{ selected }}`; touch target is ≥44pt.

## Do / Don't

- **Do** keep labels to one or two words — segments share the width equally (`flex: 1`).
- **Do** use for 2–4 options. **Don't** use it as a long list — reach for a different control past four.
- **Don't** recolor the selected segment; navy-on-white is the fixed "on" state.

## Tokens

`color.bg.block/default` · `color.fg.brand/secondary` · `font.family.sansMedium` · `text.secondary` · `radius.md/sm` · `space.1/4` · `shadow.sm`.
