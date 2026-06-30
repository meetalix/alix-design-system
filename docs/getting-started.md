# Getting started

## Install

```bash
npm install @alix/design-system
```

Peer dependencies (provide these in the consuming app):

```bash
npm install react react-native react-native-svg lucide-react-native
```

Then **link the brand fonts** so the type tokens resolve — see [assets/fonts/README.md](../assets/fonts/README.md).

## Use a component

```tsx
import { Button, Card, TextField, StatusDot } from '@alix/design-system';

<Card>
  <TextField label="Estate name" value={name} onChangeText={setName} />
  <StatusDot status="success" label="Fully inventoried" />
  <Button variant="primary" fullWidth onPress={save}>Approve & file</Button>
</Card>
```

## Use a token directly

When you're composing something the kit doesn't cover yet, reach for tokens rather than raw values — and use the **semantic** layer, never `color.palette.*`.

```tsx
import { tokens } from '@alix/design-system';

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.color.bg.default,
    borderRadius: tokens.radius.md,
    padding: tokens.space[4],
  },
  heading: { ...tokens.text.headline, color: tokens.color.fg.default },
});
```

## Change a token

1. Edit the source in [`/tokens`](../tokens) (W3C/DTCG JSON).
2. Regenerate: `npm run build` (writes `platform/native/tokens.ts` + the Figma exports).
3. Commit the token change **and** the regenerated output. Open a PR — design changes are reviewed like code.

Never hand-edit `platform/native/tokens.ts` or `export/build/*` — they're generated.

## Scripts

| Script | Does |
|---|---|
| `npm run build:tokens` | `tokens/` → `platform/native/tokens.ts` (what the app consumes) |
| `npm run export:figma` | `tokens/` → `export/build/*.figma.json` (Figma-bound) |
| `npm run build` | both |
| `npm run typecheck` | `tsc --noEmit` over components + tokens |
