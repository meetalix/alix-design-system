# Card

A flat content surface. Depth comes from the **hairline + space**, not from a heavy shadow. The default Alix container: white, hairline border, soft `radius.md` corners.

## Usage

```tsx
import { Card } from '@alix/design-system';

<Card>
  <Text>Default card — 16pt padding, hairline border.</Text>
</Card>

<Card padded={24}>
  <Text>Roomier padding.</Text>
</Card>

<Card padded={false}>
  <Image source={cover} style={{ width: '100%', height: 160 }} />
</Card>

<Card elevated>
  <Text>Floats above the page — shadow, no border.</Text>
</Card>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Card contents |
| `padded` | `boolean \| number` | `true` | `true` → `space[4]` (16); a number → that many points; `false` → 0 |
| `elevated` | `boolean` | `false` | Adds `shadow.md` and drops the hairline border |
| `style` | `StyleProp<ViewStyle>` | — | Merged last; caller overrides |
| `testID` | `string` | — | |

## Behavior

- **Default (flat):** `bg.default` (white), `radius.md`, hairline border, 16pt padding.
- **Elevated:** swaps the hairline for `shadow.md`. Use sparingly — flat is the house style.
- Purely presentational. Not pressable; wrap it in a `Pressable` if you need a tap target.

## Do / Don't

- **Do** keep cards flat by default — let the hairline and whitespace do the work.
- **Do** reach for `elevated` only when the surface genuinely floats (sheet, popover, FAB-adjacent).
- **Don't** stack many elevated cards — the page goes noisy fast.
- **Don't** hard-code padding with a wrapper `View`; use `padded`.

## Tokens

`color.bg.default` · `color.border.hairline` (via `hairline`) · `radius.md` · `space[4]` · `shadow.md`.
