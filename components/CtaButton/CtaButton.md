# CtaButton

The brand's hero call to action: a sheered purple chip with a navy arrow cap (p63).

```tsx
<CtaButton onPress={onStart}>Talk To An Expert</CtaButton>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `children` | `string` | — (Title Case, per the CTA rule) |
| `hideArrow` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |

## vs Button

`Button` is the workhorse — one primary per screen, navy fill. `CtaButton` is the one
loud, brand-forward moment: a landing screen, an empty state, the end of a flow.

Separate rather than a `Button` variant because its geometry is two interlocking shapes,
not one rounded rect — folding that in would tangle `Button`'s pressed and disabled
handling for every existing consumer.

## Do / Don't

- **Do** use at most one per screen. Two competing sheered purple CTAs is the "one accent
  moment" rule breaking down.
- **Do** set the label in Title Case.
- **Don't** use it for destructive or secondary actions.
