# StepRibbon

Horizontal progress as sheered chips — the book's wayfinding form (p62–63).

```tsx
<StepRibbon label="Onboarding progress" currentIndex={1}
  steps={[{ label: 'Review' }, { label: 'Questions' }, { label: 'Done' }]} />
```

## Props

| Prop | Type | Notes |
| --- | --- | --- |
| `steps` | `RibbonStep[]` | `label`, optional `state`. |
| `currentIndex` | `number` | Convenience — earlier steps complete, later upcoming. |
| `label` | `string` | Accessible name for the whole ribbon. |

## vs PhaseTracker

Different questions, both worth having:

- **`StepRibbon`** — horizontal, short bounded flow, 3–4 steps you see at once.
- **`PhaseTracker`** — vertical timeline with markers and connectors, for a long list of
  estate phases where each row needs a title and a date.

Forcing the sheer onto the vertical stepper would break a pattern that works.

## Do / Don't

- **Do** keep it to ~4 steps. Narrower than that and the chips stop being readable, which
  is the only reason to use a ribbon over "Step 2 of 6".
- **Don't** include a step the customer can't reach. Onboarding shipped a "Plan" chip for
  a screen that didn't exist — it advertises a destination and then doesn't go there.
- **Don't** use it for navigation. It reports progress; it isn't a tab bar.
