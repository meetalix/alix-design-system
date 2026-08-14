import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { tokens } from '../theme';
import type { SymbolProps, SymbolTone } from './Symbol.types';

/** Intrinsic dimensions of the Symbol artwork, for aspect-ratio-correct scaling. */
const ART_W = 263.04;
const ART_H = 190.02;
const ASPECT = ART_W / ART_H;

const PATH =
  'M 63.63 0 L 63.63 22.57 C 63.63 31.35 68.31 39.47 75.91 43.88 L 123.81 71.63 L 123.81 37.81 C 123.81 35.91 122.8 34.15 121.15 33.2 L 63.63 0 Z M 31.82 40.8 L 31.82 63.37 C 31.82 72.16 36.5 80.28 44.11 84.68 L 123.82 130.83 L 123.82 97.01 C 123.82 95.11 122.81 93.35 121.16 92.4 L 31.82 40.8 Z M 0 81.63 L 0 104.19 C 0 112.98 4.68 121.11 12.29 125.51 L 123.81 190.02 L 123.81 156.2 C 123.81 154.3 122.8 152.54 121.15 151.59 L 0 81.63 Z M 141.9 33.21 C 140.25 34.16 139.24 35.92 139.24 37.82 L 139.24 71.64 L 187.14 43.89 C 194.74 39.49 199.42 31.37 199.42 22.58 L 199.42 0 L 141.9 33.2 L 141.9 33.21 Z M 141.89 92.4 C 140.24 93.35 139.23 95.11 139.23 97.01 L 139.23 130.83 L 218.94 84.68 C 226.54 80.28 231.23 72.16 231.23 63.37 L 231.23 40.8 L 141.89 92.4 Z M 141.89 151.59 C 140.24 152.54 139.23 154.3 139.23 156.2 L 139.23 190.02 L 250.75 125.51 C 258.36 121.11 263.05 112.98 263.04 104.19 L 263.04 81.63 L 141.88 151.59 L 141.89 151.59 Z';

const TONE: Record<SymbolTone, string> = {
  navy: tokens.color.palette.navy,
  'symbol-blue': tokens.color.palette.symbolBlue,
  white: tokens.color.palette.white,
};

/**
 * The Alix Symbol — the brand's visual cornerstone.
 *
 * This is brand ART, not an icon: it never appears in `Icon`'s Lucide set, it is never
 * recolored outside the three approved tones, and it is never redrawn. Onboarding had a
 * bespoke animated purple orb standing in for it, which p23 does not permit.
 *
 * One of the few places a component reaches `color.palette` directly. That's deliberate:
 * these three are the brand's own constants, not themeable surfaces — a partner build
 * must not re-tone the Alix Symbol.
 */
export function Symbol({ size = 40, tone = 'navy', accessibilityLabel, testID }: SymbolProps) {
  return (
    <Svg
      testID={testID}
      width={size * ASPECT}
      height={size}
      viewBox={`0 0 ${ART_W} ${ART_H}`}
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
      accessibilityLabel={accessibilityLabel}
      accessibilityElementsHidden={!accessibilityLabel}
      importantForAccessibility={accessibilityLabel ? 'yes' : 'no-hide-descendants'}
    >
      <Path d={PATH} fill={TONE[tone]} fillRule="evenodd" />
    </Svg>
  );
}

Symbol.displayName = 'Symbol';
