# Checkbox

A square multi-select control — use when the user can pick **many** of a set. (For one-of-many, use Radio; for an instant setting, use Switch.)

## Usage

```tsx
import { Checkbox } from '@alix/design-system';

const [agree, setAgree] = useState(false);

<Checkbox checked={agree} onChange={setAgree} label="I agree to the terms" />
<Checkbox checked disabled label="Already verified" />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `checked` | `boolean` | — | Navy box + white check when on |
| `onChange` | `(checked: boolean) => void` | — | Called with the next value |
| `disabled` | `boolean` | `false` | Flat `bg.block` box, dimmed, not pressable |
| `label` | `string` | — | Optional trailing label; makes the whole row pressable |
| `testID` | `string` | — | |

## Behavior

- **Box:** 26×26, `radius.sm`, 1.5pt border.
- **Unchecked:** `bg.default` fill, `fg.muted` border.
- **Checked:** `bg.dark` (navy) fill + border, centered `Check` icon in `fg.onDark` at strokeWidth 3.
- **Check toggling:** the check is always mounted; its opacity flips 1/0 so it never mounts/unmounts.
- **Disabled:** `bg.block` fill, `fg.muted` border, opacity 0.45, no press.
- `accessibilityRole="checkbox"`, `accessibilityState={{ checked, disabled }}`.

## Do / Don't

- **Do** use Checkboxes for independent multi-select options.
- **Don't** use a Checkbox to pick exactly one of a set — use Radio.
- **Don't** recolor the checked box — checked is always navy.

## Tokens

`color.bg.dark` · `color.bg.default` · `color.bg.block` · `color.fg.muted/onDark/default` · `radius.sm` · `text.body` · `space.3`.
