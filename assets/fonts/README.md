# Fonts

The Alix brand typefaces, licensed from **[Fatype](https://fatype.com)**. These are proprietary, licensed files — they live in this private repo because the React Native app needs them at build time. Do not redistribute outside Alix.

| Family (RN name) | File | Use |
|---|---|---|
| `MakeWay-Regular` | MakeWay-Regular.otf | Display serif — headlines, key numbers, quotes |
| `MakeWayApp-Regular` | MakeWayApp-Regular.otf | Screen-optimized display cut |
| `BeausiteClassic-Regular` | BeausiteClassic-Regular.otf | Body / UI |
| `BeausiteClassic-Medium` | BeausiteClassic-Medium.otf | Medium UI text |
| `BeausiteClassic-Semibold` | BeausiteClassic-Semibold.otf | Section headers |
| `BeausiteClassicApp-Regular/Medium/Semibold` | BeausiteClassicApp-*.otf | Screen-optimized sans cuts for dense UI |

## Linking in React Native

The typography tokens reference fonts by the **RN family name** in the left column (one family per weight — the licensed OTFs ship one file per weight, so we don't rely on `fontWeight` mapping). Register them so those names resolve:

**Expo:** load with `expo-font`, keying each by the exact name above.

```ts
import { useFonts } from 'expo-font';

useFonts({
  'MakeWay-Regular': require('@alix/design-system/assets/fonts/MakeWay-Regular.otf'),
  'BeausiteClassic-Regular': require('@alix/design-system/assets/fonts/BeausiteClassic-Regular.otf'),
  'BeausiteClassic-Medium': require('@alix/design-system/assets/fonts/BeausiteClassic-Medium.otf'),
  'BeausiteClassic-Semibold': require('@alix/design-system/assets/fonts/BeausiteClassic-Semibold.otf'),
  // …the App cuts as needed
});
```

**Bare RN:** add the OTFs to `react-native.config.js` assets and run `npx react-native-asset`, ensuring the PostScript names match the family names above.
