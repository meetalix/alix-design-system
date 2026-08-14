# ChoiceGroup

Single-select from a small set of options.

```tsx
<ChoiceGroup
  label="Is there a surviving spouse?"
  options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'unsure', label: 'Not sure' }]}
  value={answer}
  onChange={setAnswer}
/>
```

## Why

The kit had **no choice control** — only `Button` and the form primitives. Onboarding
therefore built its own pill row, which is much of why review feedback said the
questionnaire "adds another design system". Fixing that instance without filling the gap
just moves the problem to the next screen.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `options` | `ChoiceOption[]` | — | `value`, `label`, optional `hint`, `disabled`. |
| `value` | `string \| undefined` | — | `undefined` = nothing chosen yet. |
| `layout` | `'wrap' \| 'stack'` | `wrap` | `stack` when options have hints or long labels. |
| `label` | `string` | — | Accessible name — usually the question. |

## Not sheered — on purpose

The book's sheered form is **wayfinding**: steps, tabs, on/off (p63). A question with six
answers isn't wayfinding, and sheering a wrapped grid reads as noise. Rounded here,
sheered in `SegmentedControl` and `StepRibbon`, is the distinction the book draws.

## Do / Don't

- **Do** offer an explicit "Not sure" when it's a real answer. Silence and uncertainty
  mean different things to whoever reads the result.
- **Do** use `stack` once labels wrap — a two-line wrapped pill is hard to scan.
- **Don't** use it for on/off state — that's `SegmentedControl`.
- **Don't** exceed ~7 options. Past that, use a picker.

## Partner brands

Selection uses semantic accent tokens, so a partner build re-themes by swapping the alias
layer. Whoever supplies a partner palette owns its contrast: Edward Jones' derived tokens
once produced yellow on pale yellow at ~1.3:1, which is why partner selection resolves to
grey rather than the brand accent. **Any change here must keep WCAG AA on every brand.**
