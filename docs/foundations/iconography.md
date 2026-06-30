# Iconography

One quiet line set. The Symbol stays sacred.

Functional icons are **[Lucide](https://lucide.dev)**, drawn at a **1.75px stroke** to match the restrained, geometric feel, and recolored to **navy** by default. Use the [`Icon`](../../components/Icon/Icon.md) component — it locks the stroke weight and default color for you.

```tsx
import { Icon } from '@alix/design-system';
<Icon name="Scale" />              // 20pt, navy, 1.75 stroke
```

## Sizes

`24` navigation · `20` inline / list · `16` metadata & helper text.

## The Symbol is brand, not UI

The wheat/laurel **Symbol** (the two-tone mark in [assets/brand](../../assets/brand)) is brand art. It is **never** used as a functional icon — keep it sacred. It appears as a logo, a large background deco on navy panels, and the like, not in toolbars or list rows.

## Naming

`Icon` takes Lucide **PascalCase** names (e.g. `"ChevronRight"`, `"CircleAlert"`). Lucide occasionally renames glyphs across versions — if a name fails to resolve, check the [Lucide icon list](https://lucide.dev/icons) for the current name.

## Choosing icons

Stick to the core app set the system already uses where possible: overview, tasks, legal (`Scale`), property (`Home`), accounts (`Landmark`), documents (`FileText`), messages, specialist (`UserRound`), schedule (`Calendar`), alerts (`Bell`), family (`Users`), bills (`Receipt`), secure (`ShieldCheck`), upload, call (`Phone`), go (`ChevronRight`). If you need a glyph that isn't here, pick the closest Lucide equivalent rather than introducing a second family.
