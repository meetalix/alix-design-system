# Sheet

The Alix overlay surface: a panel that slides up over a scrim. It's the home for transient choices — source pickers, confirmations, quick forms — anything that shouldn't take the user off the screen they're on.

Depth is real here: a Sheet floats on `shadow.overlay` over a `color.bg.scrim` dim. This is the one place heavy elevation is correct (contrast with `Card`, which stays flat).

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `visible` | `boolean` | — | Whether the sheet is shown. |
| `onClose` | `() => void` | — | Fired on scrim tap or Android hardware back. |
| `title` | `string` | — | Optional heading at the top of the panel. |
| `showHandle` | `boolean` | `true` | Show the drag handle (grabber). |
| `children` | `ReactNode` | — | Sheet content. |

## Usage

```tsx
const [open, setOpen] = useState(false);

<Sheet visible={open} onClose={() => setOpen(false)} title="Choose source">
  {/* …content… */}
</Sheet>
```

## Do / Don't

- **Do** keep sheets short — a single decision or a small form. If it scrolls a lot, it wants a screen.
- **Do** let the scrim dismiss. Every sheet is cancelable.
- **Don't** stack sheets. Close one before opening another.
- **Don't** reach for a Sheet as a layout container — that's `Card`. A Sheet is a moment, not a surface you live on.
