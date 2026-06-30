# Tag

A pill-shaped label for **phase** and **ownership** — e.g. "Probate", "Specialist", "Draft". Five fixed variants; reach for the quiet ones by default and save `accent` (purple) for the single moment that earns it.

## Usage

```tsx
import { Tag } from '@alix/design-system';

<Tag variant="solid">Probate</Tag>
<Tag variant="neutral" label="Draft" />
<Tag variant="info">Awaiting court</Tag>
<Tag variant="accent">One thing today</Tag>
<Tag variant="outline" onRemove={() => clearFilter('open')}>Open</Tag>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | `string` | — | The text; or pass a string child instead |
| `children` | `string` | — | Used when `label` is omitted |
| `variant` | `'accent' \| 'info' \| 'solid' \| 'neutral' \| 'outline'` | `'accent'` | |
| `onRemove` | `() => void` | — | When set, renders a trailing X button |
| `testID` | `string` | — | |

## Variants

| Variant | Surface | Text |
|---|---|---|
| `accent` | `accent.default` (purple) | `accent.onAccent` (ink) |
| `info` | `accent.soft` (light-blue) | `fg.brand` (navy) |
| `solid` | `bg.dark` (navy) | `fg.onDark` (white) |
| `neutral` | `bg.block` (tan-dark) | `fg.secondary` |
| `outline` | `bg.default` (white) + hairline | `fg.brand` (navy) |

## Behavior

- Label is medium weight (`font.family.sansMedium` / `500`) at 13pt over the `text.small` ramp.
- When `onRemove` is provided, a trailing `<Icon name="X" size={14} />` button renders at ~0.55 opacity (`accessibilityLabel="Remove"`), tinted to the variant's text color. The right padding tightens to seat it.

## Do / Don't

- **Do** use `solid`/`neutral`/`info`/`outline` for everyday phase & ownership labels.
- **Do** reserve `accent` for the one purple moment — never as a generic chip color.
- **Don't** stuff long sentences into a Tag; it's a label, not a paragraph (`numberOfLines={1}`).

## Tokens

`color.accent.default/soft/onAccent` · `color.bg.dark/block/default` · `color.fg.onDark/secondary/brand` · `color.border.hairline` · `font.family.sansMedium` · `text.small` · `radius.pill`.
