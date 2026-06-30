# Switch

An instant on/off setting — the change takes effect immediately, no confirm step. **Navy track means on; never an accent color.**

## Usage

```tsx
import { Switch } from '@alix/design-system';

const [notify, setNotify] = useState(true);

<Switch value={notify} onValueChange={setNotify} />
<Switch value={false} disabled />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `value` | `boolean` | — | On = navy track, knob right |
| `onValueChange` | `(value: boolean) => void` | — | Called with the next value |
| `disabled` | `boolean` | `false` | Dimmed (opacity 0.45), not pressable |
| `testID` | `string` | — | |

## Behavior

- **Track:** 52×31, pill radius. `bg.dark` (navy) when on, `bg.block` (tan-dark) when off.
- **Knob:** 25×25 white circle with a soft local shadow; slides 21pt right when on.
- **Animation:** knob `translateX` animates with `Animated.timing`, `duration.fast` (120ms), eased `[0.2,0.8,0.2,1]`.
- **Disabled:** flat, opacity 0.45, no press.
- `accessibilityRole="switch"`, `accessibilityState={{ checked, disabled }}`.

## Do / Don't

- **Do** use a Switch for settings that apply instantly (notifications, sync).
- **Don't** color the "on" track purple or blue — on is always navy.
- **Don't** use a Switch where a form needs a submit step — use a Checkbox.

## Tokens

`color.bg.dark` · `color.bg.block` · `color.bg.default` · `radius.pill` · `duration.fast`.
