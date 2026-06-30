# Radio

A circular single-select control — render a set of these to pick **one** of many. (For multi-select use Checkbox; for an instant setting use Switch.) Selection state is owned by the parent; wire `selected`/`onSelect` per option.

## Usage

```tsx
import { Radio } from '@alix/design-system';

const [plan, setPlan] = useState('monthly');

<Radio
  selected={plan === 'monthly'}
  onSelect={() => setPlan('monthly')}
  label="Monthly"
  sublabel="$12 / month"
/>
<Radio
  selected={plan === 'annual'}
  onSelect={() => setPlan('annual')}
  label="Annual"
  sublabel="$120 / year — save 17%"
/>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `selected` | `boolean` | — | Navy ring + scaled-in navy dot |
| `onSelect` | `() => void` | — | Called when chosen |
| `disabled` | `boolean` | `false` | Flat `bg.block` ring, dimmed, not pressable |
| `label` | `string` | — | Primary line (`text.bodyStrong`) |
| `sublabel` | `string` | — | Secondary line (`text.secondary`, `fg.muted`) |
| `testID` | `string` | — | |

## Behavior

- **Ring:** 26×26 circle. Unselected: 1.5pt `fg.muted` border on `bg.default`. Selected: 2pt `bg.dark` (navy) border.
- **Inner dot:** 12×12 navy circle; `scale` animates 0→1 on select with `Animated.timing`, `duration.fast`, eased `[0.2,0.8,0.2,1]`.
- **Disabled:** `bg.block` ring, opacity 0.45, no press.
- Whole row (ring + label/sublabel) is pressable; min touch target 44pt.
- `accessibilityRole="radio"`, `accessibilityState={{ selected, disabled }}`.

## Do / Don't

- **Do** use Radios for mutually exclusive choices where one is always picked.
- **Don't** use a single Radio as a toggle — that's a Switch or Checkbox.
- **Don't** recolor the selected ring or dot — selected is always navy.

## Tokens

`color.bg.dark` · `color.bg.default` · `color.bg.block` · `color.fg.muted/default` · `radius.pill` · `text.bodyStrong/secondary` · `duration.fast` · `space.3`.
