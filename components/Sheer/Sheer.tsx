import React, { useState } from 'react';
import { View, StyleSheet, type LayoutChangeEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sheerPath } from '../shape';
import type { SheerProps } from './Sheer.types';

/**
 * The sheered surface — the brand's signature UI shape.
 *
 * "Inspired by the lines of the Symbol, we've created sheered rectangles to be used
 * throughout the brand" (Brand Guidelines p63). The book applies it to timeline steps,
 * category tabs, on/off controls and CTAs. It is what makes a screen read as Alix rather
 * than as a generic app with Alix colors, and a rounded rectangle is not a substitute.
 *
 * Low-level on purpose: this draws the shape and nothing else. `SegmentedControl`,
 * `PhaseTracker` and `Button`'s sheered variant compose it. Reach for it directly only
 * when building a new wayfinding form the kit doesn't cover.
 *
 * The path is computed from the MEASURED size (the sheer's horizontal offset depends on
 * height), so the shape is drawn after first layout. Content renders immediately above
 * it, which means text never waits on measurement — only the fill appears a frame later.
 */
export function Sheer({
  fill,
  lean = 'right',
  stroke,
  strokeWidth = 1,
  children,
  style,
  testID,
}: SheerProps) {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    // Skip no-op updates; RN fires layout on every re-render in some parents.
    if (!size || size.width !== width || size.height !== height) setSize({ width, height });
  };

  return (
    <View testID={testID} onLayout={onLayout} style={[styles.wrap, style]}>
      {size ? (
        <Svg
          style={StyleSheet.absoluteFill}
          width={size.width}
          height={size.height}
          // Not focusable/announced — this is decoration behind real content.
          pointerEvents="none"
        >
          <Path
            d={sheerPath(size.width, size.height, lean)}
            fill={fill}
            stroke={stroke}
            strokeWidth={stroke ? strokeWidth : undefined}
          />
        </Svg>
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'relative', overflow: 'visible' },
});
