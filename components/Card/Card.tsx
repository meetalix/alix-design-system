import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { tokens, hairline } from '../theme';
import type { CardProps } from './Card.types';

/**
 * A flat content surface. Depth comes from the hairline border and generous
 * space — not heavy shadow. Pass `elevated` only when the surface truly floats.
 */
export function Card({ children, padded = true, elevated = false, style, testID }: CardProps) {
  const padding = padded === true ? tokens.space[4] : padded === false ? 0 : padded;

  return (
    <View
      testID={testID}
      style={[
        styles.base,
        { padding },
        elevated ? styles.elevated : hairline,
        style,
      ]}
    >
      {children}
    </View>
  );
}

Card.displayName = 'Card';

const styles = StyleSheet.create({
  base: {
    backgroundColor: tokens.color.bg.default,
    borderRadius: tokens.radius.md,
  } as ViewStyle,
  elevated: { ...tokens.shadow.md },
});
