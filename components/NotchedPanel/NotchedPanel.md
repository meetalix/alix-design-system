# NotchedPanel

The brand's signature **navy panel** with a tan "notch" label tucked into the top-left corner. This is a loud-on-purpose surface — **reserve it for the Specialist and key moments**, never as a generic container.

## Usage

```tsx
import { NotchedPanel } from '@alix/design-system';
import { Text } from 'react-native';

<NotchedPanel notchLabel="Specialist" title="We've got this from here">
  <Text style={{ color: '#fff' }}>
    Your Specialist has reviewed the estate and filed the paperwork.
  </Text>
</NotchedPanel>

<NotchedPanel notchLabel="Today">
  {/* arbitrary children render as-is */}
  <SomeSummaryRow />
</NotchedPanel>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `notchLabel` | `string` | — | Text inside the tan corner notch |
| `title` | `string` | — | Optional headline; Make Way, white, above the body |
| `children` | `React.ReactNode` | — | Panel body; rendered as-is |
| `style` | `StyleProp<ViewStyle>` | — | Merged last; caller overrides |
| `testID` | `string` | — | |

## Behavior

- **Surface:** `bg.dark` (navy), `radius.md`, `overflow: 'hidden'`, 20pt padding.
- **Notch:** an absolutely-positioned 30pt-tall tan (`bg.alt`) tab pinned top-left with a rounded bottom-right corner; label in `text.small`, ink (`fg.default`).
- **Content** sits below the notch (top margin clears the 30pt tab). A `title` renders in `text.headline`, white (`fg.onDark`).
- On navy, text must read light — give body children `fg.onDark` / `fg.onDarkSecondary`.

## Do / Don't

- **Do** reserve it for the Specialist and genuine key moments.
- **Do** keep body text light so it reads on navy.
- **Don't** use it as a default card — that's `Card`.
- **Don't** put more than one on a screen; the whole point is that it's rare.

## Tokens

`color.bg.dark` · `color.bg.alt` · `color.fg.default` · `color.fg.onDark` · `text.small` · `text.headline` · `radius.md` · `space[5]` · `space[3]`.
