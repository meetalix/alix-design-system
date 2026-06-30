# Button

The Alix button. Full-width navy **primary** is the mobile default — **one primary (or one accent) per screen**. Secondary and link recede.

## Usage

```tsx
import { Button } from '@alix/design-system';

<Button variant="primary" fullWidth onPress={approve}>Approve & file</Button>
<Button variant="secondary" onPress={dismiss}>Not now</Button>
<Button variant="accent" leftIcon="UserPlus" onPress={assign}>Assign to Specialist</Button>
<Button variant="link" rightIcon="ArrowRight" onPress={open}>View details</Button>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `string` | — | The label |
| `variant` | `'primary' \| 'secondary' \| 'accent' \| 'link'` | `'primary'` | |
| `onPress` | `() => void` | — | |
| `disabled` | `boolean` | `false` | Flat neutral block, muted label |
| `fullWidth` | `boolean` | `false` | Stretch to container (mobile default for primary) |
| `leftIcon` / `rightIcon` | `IconName` | — | Lucide PascalCase name |

## Behavior

- **Press:** the fill darkens (translucent ink overlay) and the button nudges **1px** down. Secondary darkens by swapping its surface to `bg.block`. Link turns `action.press` and underlines.
- **Disabled:** `bg.block` surface, `fg.muted` label, no press feedback.
- Minimum height **52pt**; touch target always ≥44pt.

## Do / Don't

- **Do** keep one primary action per screen — the rest recede to secondary/link.
- **Do** use `accent` (purple) for the single "one thing today" moment, never as a generic button color.
- **Don't** stack two filled buttons of equal weight side by side.
- **Don't** introduce new colors — variants are fixed.

## Tokens

`color.bg.dark` · `color.accent.default` · `color.action.default/press` · `color.fg.onDark/brand/muted` · `text.button` · `radius.md` · `space.5/2`.
