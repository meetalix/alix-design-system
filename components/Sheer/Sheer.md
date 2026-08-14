# Sheer

The brand's signature UI shape — a sheered (skewed) rectangle.

```tsx
<Sheer lean="right" fill={tokens.color.bg.dark}>
  <Text variant="button" tone="on-dark">Step 1</Text>
</Sheer>
```

## Why

*"Inspired by the lines of the Symbol, we've created sheered rectangles to be used
throughout the brand"* — Brand Guidelines p63. The book applies it to timeline steps,
category tabs, on/off controls and CTAs. It's what makes a screen read as Alix rather
than as a generic app wearing Alix colors. **A rounded rectangle is not a substitute.**

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `fill` | `string` | — | Semantic token value. Never a raw hex. |
| `lean` | `'left' \| 'right' \| 'both' \| 'none'` | `right` | Which edges are sheered. |
| `stroke`, `strokeWidth` | `string`, `number` | — | Outline treatments. |

## Lean is positional

In a ribbon, lean encodes position so the chips interlock:

- first → `right`
- middle → `both`
- last → `left`
- only one → `none`

Get this wrong and the seam reads as a gap.

## Do / Don't

- **Do** reach for `SegmentedControl`, `StepRibbon` or `CtaButton` first — they compose
  this correctly. Use `Sheer` directly only for a wayfinding form the kit doesn't cover.
- **Don't** use it as a general card or panel shape. Containers and cards have their own
  construction rules (p56–60) — see `shape.ts`.
- **Don't** round the corners. The book's wayfinding shapes have crisp points where the
  sheer meets the horizontal; rounding loses the Symbol reference.

## Note on rendering

The path depends on measured height, so the fill paints one frame after layout. Content
renders immediately, so text never waits.
