# ListRow

The backbone of navigation. A tappable row with an optional leading icon tile, a title and supporting line, an optional trailing value, and a chevron. **Tappable rows tint tan on press** — the tint is the only feedback (no 1px nudge).

## Usage

```tsx
import { ListRow } from '@alix/design-system';

<ListRow icon="FileText" title="Documents" subtitle="12 files" onPress={open} />
<ListRow icon="Bell" title="Notifications" trailingText="On" onPress={open} divider />
<ListRow icon="Scale" title="Estate plan" iconBackground={tokens.color.accent.soft} onPress={open} />
<ListRow title="App version" trailingText="1.4.0" showChevron={false} />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | `string` | — | Primary line (medium weight, 15pt) |
| `subtitle` | `string` | — | Supporting line below the title (13pt, muted) |
| `icon` | `IconName` | — | Lucide PascalCase name; rendered navy in a 36×36 tile |
| `iconBackground` | `string` | `color.bg.alt` | Semantic token value for the icon tile background |
| `trailingText` | `string` | — | Value shown before the chevron |
| `showChevron` | `boolean` | `true` | Hide the chevron on non-navigating rows |
| `divider` | `boolean` | `false` | Bottom hairline divider |
| `onPress` | `() => void` | — | When omitted the row is non-interactive (no press tint) |
| `disabled` | `boolean` | `false` | Renders non-interactive |
| `testID` | `string` | — | |

## Behavior

- **Press:** the row surface tints from `bg.default` (white) to `bg.alt` (tan). No 1px nudge — the tint is the feedback.
- **Non-interactive:** when `onPress` is undefined (or `disabled`), the row renders flat with no press feedback and no `button` role.
- **Layout:** `flexDirection: row`, `alignItems: center`, gap ~14, `paddingVertical` 12, `paddingHorizontal` 16, `minHeight` 56. The middle column flexes; trailing text and chevron sit at the end.
- **Accessibility:** `accessibilityRole="button"` only when interactive.

## Do / Don't

- **Do** give the icon tile a quiet background — default tan, or a soft accent (`accent.soft`) to highlight one row.
- **Do** drop the chevron (`showChevron={false}`) for rows that only display a value and don't navigate.
- **Don't** color the leading icon anything but navy — it stays `fg.brand`.
- **Don't** stack dividers under every row; group rows and let the container edge do the work.

## Tokens

`color.bg.default/alt` · `color.fg.default/secondary/muted/brand` · `color.border.hairline` · `text.body/small/secondary` · `font.family.sansMedium` · `space.4`.
