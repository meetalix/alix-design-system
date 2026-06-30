# Icon

Functional iconography for Alix. A thin wrapper over [Lucide](https://lucide.dev) (`lucide-react-native`), locked to the Alix line weight (**1.75**) and recolored to **navy** by default.

## Usage

```tsx
import { Icon } from '@alix/design-system';

<Icon name="Scale" />                      // 20pt, navy, 1.75 stroke
<Icon name="Bell" size={24} />             // nav size
<Icon name="ChevronRight" color={tokens.color.fg.muted} />
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `name` | `IconName` (Lucide PascalCase) | — | e.g. `"Home"`, `"ChevronRight"` |
| `size` | `number` | `20` | 24 nav · 20 inline · 16 meta |
| `color` | `string` | `color.fg.brand` (navy) | Pass a token value |
| `strokeWidth` | `number` | `1.75` | The Alix weight — don't change without reason |

## Do / Don't

- **Do** keep the stroke at 1.75 and color icons navy (or `fg.muted` for trailing/meta).
- **Don't** use the brand wheat/laurel **Symbol** as a functional icon — it is brand art only, kept sacred.
- **Don't** introduce a second icon family. If a glyph is missing from Lucide, pick the closest Lucide equivalent.

## Sizes

`24` navigation · `20` inline/list · `16` metadata & helper text.
