# Text

The type primitive. Every string a customer reads goes through here.

```tsx
<Text variant="headline">Whose estate this is</Text>
<Text variant="body" tone="secondary">From paperwork and bills to property and taxes.</Text>
<Text variant="numeral">$412,000</Text>
```

## Why it exists

Components used to spread `tokens.text.*` into a raw `<Text>`. Nothing stopped a
developer hand-setting a size, and the mobile app drifted: 15pt, 11pt and 10pt text
against a 12/14/16 scale, and a 32pt headline at 119% line spacing where the Brand
Guidelines specify 105–115%. One component makes the scale the easy path.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `TextVariant` | `body` | Role, not size. See below. |
| `tone` | `TextTone` | `default` | Restricted to the book's approved pairings. |
| `center` | `boolean` | `false` | Body copy is left-aligned by default. |
| `style` | `TextStyle` | — | **Layout only.** See "Don't". |

## Variants

Straight from the Brand Guidelines' hierarchy (p34), which specifies family, case,
line spacing and tracking *together* — so a variant gives you all of it or none.

**Make Way** (display serif — one weight only, per p32)

| Variant | Size / line height / tracking | Use |
| --- | --- | --- |
| `display` | 34 / 37 / −0.68 (109%, −2%) | Hero headline or number. One per screen. |
| `title` | 28 / 31 / −0.56 (111%, −2%) | Screen title. |
| `headline` | 22 / 24 / −0.44 (109%, −2%) | Card or section headline. |
| `numeral` | 28 / 31 / 0 | Figures. The book sets numerals in Make Way at tracking 0%. |

**Beausite Classic** (body/UI)

| Variant | Size / line height / tracking | Use |
| --- | --- | --- |
| `lead` | 20 / 26 / 0 (130%) | Large intro paragraph. |
| `body` | 16 / 21 / 0 (131%) | Default. |
| `body-strong` | 16 / 21 / 0 | Emphasis in body copy (Semibold). |
| `secondary` | 14 / 18 / 0 (129%) | Supporting copy. |
| `small` | 12 / 16 / 0 (133%) | Meta, captions, timestamps. |
| `section` | 17 / 22 / 0 | Section header in a list or form. |
| `eyebrow` | 11 / 14 / +0.44, uppercase | Label **above a headline**. |
| `button` | 16 / 20 / 0 | CTA label, Title Case. |
| `note` | 16 / 21 / 0, italic | Editorial aside. |

## Tone

Only the pairings the book approves (p41 — *"Any combinations not shown on this page are
not approved for use"*): `default`, `secondary`, `muted`, `brand`, `action` on light;
`on-dark` and `on-dark-secondary` on navy. `inherit` exists for the rare case a parent
owns the color.

## Do

- Pick the variant by **role**. If you're choosing `small` because you want 12pt, stop —
  find the role that means what you're saying.
- Use `eyebrow` as an eyebrow: one all-caps label introducing a headline.
- Set CTAs in **Title Case** (`button`), per the hierarchy.
- Keep headlines **sentence case**. The book is explicit.

## Don't

- **Don't put type properties in `style`.** `fontSize`, `lineHeight`, `letterSpacing`,
  `fontFamily`, `fontWeight` belong to the variant. Overriding them is how a codebase
  grows a second type scale — the exact problem this component was added to stop. If no
  variant fits, that's a gap in the system: add a variant, don't patch a call site.
- **Don't reach for `eyebrow` as a general small-caps label.** All-caps is legitimate
  brand styling — the book defines it — but as an *eyebrow above a headline*, not on
  every card and tile. Onboarding applied it in seven places and it read as shouting.
- **Don't use a heavier Make Way.** The book allows exactly one weight (p32).
- **Don't center body copy** unless the layout genuinely calls for it.
