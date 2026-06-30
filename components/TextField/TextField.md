# TextField

A labeled text input with **rest / focus / error / disabled** states. Uses **16px body text** to avoid iOS zoom-on-focus, a **blue focus halo**, and a **state-red ring + alert message** on error.

## Usage

```tsx
import { TextField } from '@alix/design-system';

<TextField
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="you@example.com"
  keyboardType="email-address"
  autoCapitalize="none"
  helperText="We'll never share it."
/>

<TextField
  label="Password"
  value={pw}
  onChangeText={setPw}
  secureTextEntry
  leftIcon="Lock"
  error="Must be at least 8 characters"
/>

<TextField label="Account ID" value="ALX-0042" disabled />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | `string` | — | Rendered above the field (13pt medium) |
| `value` | `string` | — | Controlled value |
| `onChangeText` | `(t: string) => void` | — | |
| `placeholder` | `string` | — | Shown in `fg.muted` when empty |
| `helperText` | `string` | — | Quiet helper below; hidden when `error` is a string |
| `error` | `string \| boolean` | — | String shows message + alert icon; `true` paints error ring only. Takes precedence over focus |
| `disabled` | `boolean` | `false` | Tan surface, muted text, not editable |
| `leftIcon` | `IconName` | — | Lucide PascalCase name, absolutely positioned at left |
| `keyboardType` / `secureTextEntry` / `autoCapitalize` / `testID` | RN `TextInputProps` | — | Pass-through |

## Behavior

- **Rest:** hairline border on a white surface.
- **Focus:** blue ring + soft halo via `focusRing(color.action.default)` (tracked with `onFocus` / `onBlur`).
- **Error:** `state.error.strong` border + matching halo, and an inline message with a leading `AlertCircle`. Error overrides focus styling.
- **Disabled:** `bg.alt` (tan) surface, `fg.muted` text/label, `editable={false}`, no focus ring.
- **Left icon:** muted, vertically centered at `left: 15`; the input gains `paddingLeft: 44` so text never collides with it.
- Field **minHeight 52pt**; 16px text avoids iOS zoom.

## Do / Don't

- **Do** pass a `label` — it also labels the input for accessibility.
- **Do** use a short, specific `error` string; it replaces the helper line.
- **Don't** hard-code red — error styling always derives from `state.error.strong`.
- **Don't** drop below 16px text; smaller sizes trigger iOS zoom-on-focus.

## Tokens

`color.bg.default/alt` · `color.fg.default/muted` · `color.action.default` · `color.state.error.strong` · `color.border.hairline` · `font.family.sansMedium` · `text.body/small` · `radius.md` · `space.1/2/4` · `focusRing` helper.
