# DocumentSourceSheet

The "add a file" picker: a `Sheet` with three option tiles — **Camera** (take a photo), **Gallery** (pick media), **Files** (browse storage). It's the single, canonical entry point for adding a document, replacing the per-screen upload/capture prompts the app hand-rolled before the system had a `Sheet`.

Pair it with a single **Add** button. The button opens the sheet; the sheet resolves the "from where?" question in one place.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `visible` | `boolean` | — | Whether the picker is shown. |
| `onClose` | `() => void` | — | Scrim tap, Cancel, or Android back. |
| `onSelect` | `(source) => void` | — | `'camera' \| 'gallery' \| 'files'`. Consumer decides what happens next. |
| `title` | `string` | `"Add a file"` | Sheet heading. |

## Usage

```tsx
const [open, setOpen] = useState(false);

<Button onPress={() => setOpen(true)}>Add</Button>
<DocumentSourceSheet
  visible={open}
  onClose={() => setOpen(false)}
  onSelect={(source) => { setOpen(false); startCapture(source); }}
/>
```

## Do / Don't

- **Do** trigger it from one **Add** button — don't split "Add" and "Upload" into competing actions.
- **Do** keep the three sources unless a surface genuinely can't support one (e.g. no camera).
- **Don't** perform the capture inside the sheet — `onSelect` hands back to the app, which owns the camera/library/file flows.
- **Don't** duplicate this per screen. It's the shared entry point.
