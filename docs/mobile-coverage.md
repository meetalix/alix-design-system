# Mobile coverage map

What the design system has, what `alix-mobile` actually uses today, and what's missing.
This is the working plan for making the system a **complete reference for the mobile app** —
the first client. Web and Estate Manager come later.

Status key: **✅ built** · **🟡 partial** — exists but needs work to match the Brand
Guidelines · **⬜ missing** · **➕ new** — no mobile equivalent, but the product will need it.

---

## Foundations

| Foundation | Status | Notes |
| --- | --- | --- |
| Color | ✅ | Reconciled with the book. `ink` corrected to Almost Black `#1D1A18`; the book's utility green `#15A573` added; `viz.*` series group added, chart-only per p40/p43. |
| Typography | ✅ | **Rebuilt from the book's ratios** (p34). Was not derived from it: body sat at 150% line spacing against a stated 125–135%, eyebrow was tracked +8% against 0%, and Make Way carried `fontWeight: 500` when the book allows one weight. |
| Spacing | ✅ | 4pt grid. The book doesn't specify a UI spacing scale, so this is ours. |
| Radius | 🟡 | Fixed steps are fine for controls, but containers and cards are **proportional** in the book — use `containerRadius()` / `cardRadius()` from `shape.ts`. |
| Shape (sheer, container, card) | ✅ | **New.** The sheered wayfinding form (p62–63) and the container/card construction rules (p56–60) had no representation at all. |
| Elevation | ✅ | Restrained; depth comes from hairlines and space. |
| Motion | ✅ | Fade + small shifts, one easing curve. |
| Grid | 🟡 | `shape.container` carries the book's 12-column / 16-row container grid. A **screen-level** layout grid is still undefined. |

---

## Components

### Built and aligned

| Component | Status | Notes |
| --- | --- | --- |
| `Text` | ✅ ➕ | **New.** The single biggest gap — there was no type primitive, so every component hand-spread `tokens.text.*`. |
| `Sheer` | ✅ ➕ | **New.** The brand's signature shape (p63), as real SVG geometry. |
| `StepRibbon` | ✅ ➕ | **New.** The book's horizontal Step 1/2/3 ribbon (p62–63). |
| `CtaButton` | ✅ ➕ | **New.** The sheered purple CTA with a navy arrow cap (p63). |
| `ChoiceGroup` | ✅ ➕ | **New.** Single-select options — the control whose absence made onboarding invent its own. |
| `HelpHint` | ✅ ➕ | **New.** "?" badge → plain-language modal. Nothing of the kind existed in the app. |
| `Button` | 🟡 | Works, but see **Sheered CTA** below — the book's primary CTA is a sheered chip with an arrow cap (p63), which this doesn't do. |
| `Card` | 🟡 | Needs the proportional radius/margin rules from p60. |
| `NotchedPanel` | 🟡 | Right idea — this is the folder/tab container — but the notch is fixed rather than following the 12-column tab grid (p57). |
| `SegmentedControl` | ✅ | **Rebuilt on the sheer.** Was a rounded-rect track with a lifted thumb — the iOS default in brand colors. |
| `PhaseTracker` | ✅ | Stays a VERTICAL timeline; the book's horizontal step form is `StepRibbon`. Deliberately not merged. |
| `Icon`, `ListRow`, `Tag`, `StatusDot`, `ProgressRing`, `Switch`, `Checkbox`, `Radio`, `TextField`, `Sheet`, `DocumentSourceSheet` | ✅ | Exist and consume semantic tokens. |

### Missing — mobile uses these today

Each maps to something real in `alix-mobile`, so these block adoption.

| Component | Mobile equivalent | Why it matters |
| --- | --- | --- |
| `Divider` ⬜ | `atoms/Divider` | Trivial, used everywhere. |
| `PasswordField` ⬜ | `atoms/PasswordInput` | Reveal toggle, autofill behavior. |
| `OTPField` ⬜ | `atoms/OTPInput` | Segmented code entry; fiddly enough to be worth owning once. |
| `Modal` / `Dialog` ⬜ | `TrackedModal`, `ConfirmationModal` | `Sheet` covers bottom sheets, not centered dialogs. |
| `Toast` ⬜ | `molecules/GlobalToast` | Transient feedback. |
| `Banner` / `Callout` ⬜ | `molecules/Status`, `Maintenance` | Inline state messaging — this is where the status ramp belongs. |
| `Avatar` ⬜ | Care-team and Specialist rows | Photo, initials and fallback. The book's Specialist headshots have their own art direction (p48). |
| `Badge` ⬜ | `molecules/Badge` | Count/notification marker. Distinct from `Tag`. |
| `AppBar` / `Header` ⬜ | `molecules/Header`, `organisms/Navbar` | Brand lockup placement lives here. |
| `TabBar` ⬜ | `navigation/bottom-tab` | Four-tab bar. |
| `EmptyState` ⬜ | Ad-hoc per screen | Currently reinvented each time. |
| `Skeleton` / `Loading` ⬜ | Ad-hoc | Motion tokens exist; nothing consumes them. |
| `Chart` primitives ⬜ | `molecules/EstateValueChart` | The **only** legitimate consumer of the utility palette. |
| `FileTypeIcon` ⬜ | `atoms/FileTypeIcon` | Document vault. |
| `UploadTile` ⬜ | `UploadSourcePickerButton` | Pairs with `DocumentSourceSheet`. |

### Missing — needed by work already in flight

| Component | Driver |
| --- | --- |
| `HelpHint` ✅ | **CX-139 — built.** There is no tooltip or help component anywhere in the app, and onboarding asks questions we can't be sure we're wording correctly. The pattern already exists as `EstimateNote` in mobile — a "?" badge opening a plain-language modal. Promote it. |
| `ChoiceGroup` ✅ | **CX-139 — built.** Onboarding's yes/no pills are bespoke *because the styleguide has no choice control* — only `Button` and `Text` existed. Fixing the instance without filling the gap means the next screen invents another. Must keep the brand-aware selection rule: partner brands use grey, never yellow (EJ's derived tokens gave ~1.3:1 contrast). |
| Sheered `SegmentedControl` ✅ | Done. |
| Sheered step chips ✅ | Done as `StepRibbon`, separate from the vertical `PhaseTracker`. |
| `Logo` / `Symbol` ⬜ | Assets are in `assets/brand/`, but no component enforces the rules: the Symbol appears **only** in Navy, Symbol Blue or White (p23), with minimum clearspace (p22). Onboarding currently draws a bespoke purple orb, which those rules don't permit. |

### Likely future needs

Not in mobile today, but the product shape points at them.

| Component | Rationale |
| --- | --- |
| `Accordion` / `Disclosure` | Long questionnaires and document lists. |
| `DateField` | Dates of death, filings and deadlines are everywhere in estate settlement. |
| `CurrencyField` | Asset values; pairs with the `numeral` Make Way variant. |
| `Stepper` / `WizardChrome` | Onboarding built its own `StepChrome` and `ProgressRail`. |
| `Timeline` | Settlement is a sequence of milestones; the book's wayfinding is built for exactly this. |
| `Menu` / `ActionSheet` | Overflow actions. |
| `SearchField` | Document vault growth. |
| `Table` / `DataGrid` | Estate Manager will need it; worth designing before that lands. |
| `Tooltip` (anchored) | `HelpHint` covers the modal case; anchored popovers are harder and may not be needed on mobile. |
| `Pagination`, `Breadcrumb` | Web/EM, not mobile. |

---

## Known conflicts to resolve

Recording these rather than silently picking a side.

1. **All-caps.** Review feedback says all-caps tile headers aren't in the toolkit; the
   book defines `Eyebrow — Beausite Classic Regular, All-Capitals`. Both are right: the
   treatment is legitimate, the *scope* is not. Resolution encoded in `Text.md` — eyebrow
   above a headline, sentence case for tile and card labels.

2. **Status colors.** The book's utility palette is explicitly data-viz only (~10%,
   p40/p43) and it defines no error/warning/success. The system's status ramp is a
   deliberate extension, muted so it never reads as brand color. Flagged in `color.json`.

3. **CTA weight.** The hierarchy names *Beausite Classic Medium* for CTAs (p34), but the
   weights page lists Light / Regular / Semibold (p33). We ship Medium, since the
   hierarchy is the more specific instruction.

4. **Partner brands.** Edward Jones and Schwab keep their own palettes; typesetting,
   spacing and shape follow the Alix system. Any component with a selected/active state
   must keep the brand-aware rule and its WCAG AA coverage.

---

## Sequence

1. ~~**Foundations**~~ — done.
2. ~~**`Text`**~~ — done. Everything else depends on it.
3. ~~**`ChoiceGroup` + `HelpHint`**~~ — done; unblocks CX-139.
4. ~~**Sheer adoption**~~ — done: `Sheer`, `StepRibbon`, `CtaButton`, and
   `SegmentedControl` rebuilt on it.
5. **The mobile-parity list** — `Divider` through `UploadTile`. ← next
6. **`Logo`/`Symbol`** with the usage rules enforced.
7. **Adopt in `alix-mobile`** — the system is only worth what consumes it. CX-139 is
   the first candidate.
6. **`Logo`/`Symbol`** with the usage rules enforced.
7. Future-needs list, as product work calls for it.
