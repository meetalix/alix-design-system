# Symbol

The Alix Symbol — the brand's visual cornerstone.

```tsx
<Symbol size={56} tone="white" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `size` | `number` | `40` — height in points; width follows the aspect ratio |
| `tone` | `'navy' \| 'symbol-blue' \| 'white'` | `navy` |
| `accessibilityLabel` | `string` | — decorative by default |

## The color rule is enforced, not documented

*"Our Symbol should only appear as a single color in Navy, Symbol Blue, or White"* (p23).
`tone` is a closed union, so an off-brand Symbol won't compile.

## Do / Don't

- **Do** treat it as brand art. It is not in `Icon`'s Lucide set and never will be.
- **Do** give it clearspace (p22) — don't crowd it against type or an edge.
- **Don't** recolor, gradient, animate the fill, or redraw it. Onboarding shipped a
  bespoke glowing purple orb in its place; p23 doesn't allow it.
- **Don't** re-tone it for partner builds. Partner palettes theme the product, not the
  Alix mark.
