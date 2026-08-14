# HelpHint

A "?" badge that opens a plain-language explanation.

```tsx
<HelpHint
  title="About transfer-on-death"
  body="Some accounts pass straight to a named person and skip probate. If you're not sure, leave it — your Settlement Specialist will confirm it with the bank."
/>
```

## Why

Estate settlement forces questions whose wording we can't be confident in —
transfer-on-death, occupancy, mortgage status. A customer who misreads one doesn't leave
it blank; they answer **confidently and wrongly**, and that answer reaches the care team
looking like a fact. Somewhere to check the meaning, in the flow, is the cheapest fix.

There was no tooltip or help component anywhere in the app before this.

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | — |
| `body` | `string` | — |
| `accessibilityLabel` | `string` | `About {title}` |
| `dismissLabel` | `string` | `Got It` |

## A modal, not an anchored tooltip

Anchored popovers need collision handling, clip inside scroll views, and on a phone they
cover the thing being explained. A centered sheet is dull and it works.

## Do / Don't

- **Do** say what happens if they don't know. "Leave it and we'll confirm" removes more
  anxiety than a definition does.
- **Do** keep it to a short paragraph or two. If it needs more, the question is wrong.
- **Don't** attach one to every field. A help badge on everything reads as a form that
  doesn't trust itself — reserve it for genuine ambiguity.
- **Don't** put anything in here the customer must read to proceed. It's optional by
  construction.
