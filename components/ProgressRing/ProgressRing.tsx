import React from 'react';
import { View, Text, StyleSheet, type TextStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { tokens } from '../theme';
import type { ProgressRingProps } from './ProgressRing.types';

/**
 * A circular progress indicator with a centered percentage. The arc starts at
 * 12 o'clock and fills clockwise. Navy progress over a tan-dark track — navy is
 * "on", never an accent.
 */
export function ProgressRing({
  progress,
  size = 132,
  strokeWidth = 11,
  label,
  caption,
  testID,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  const pct = Math.round(clamped * 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - clamped);
  const center = size / 2;

  return (
    <View
      style={[styles.root, { width: size, height: size }]}
      accessibilityRole="progressbar"
      accessibilityValue={{ now: pct, min: 0, max: 100 }}
      testID={testID}
    >
      <Svg width={size} height={size} style={styles.svg}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={tokens.color.bg.block}
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={tokens.color.bg.dark}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
        />
      </Svg>
      <View style={styles.overlay} pointerEvents="none">
        <Text style={[styles.label, { fontSize: Math.round(size * 0.3) }]}>
          {label ?? `${pct}%`}
        </Text>
        {caption ? <Text style={styles.caption}>{caption}</Text> : null}
      </View>
    </View>
  );
}

ProgressRing.displayName = 'ProgressRing';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Rotate so the arc begins at the top (12 o'clock) and grows clockwise.
  svg: {
    transform: [{ rotate: '-90deg' }],
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: tokens.font.family.display,
    color: tokens.color.fg.brand,
    includeFontPadding: false,
    textAlign: 'center',
  },
  caption: {
    ...(tokens.text.small as TextStyle),
    color: tokens.color.fg.muted,
    marginTop: tokens.space[1], // 4
    textAlign: 'center',
  },
});
