import React from 'react';
import { Text, View, StyleSheet, type TextStyle } from 'react-native';
import { tokens } from '../theme';
import type { StatusDotProps, StatusDotStatus } from './StatusDot.types';

const dotColorFor = (status: StatusDotStatus): string => {
  switch (status) {
    case 'success': return tokens.color.state.success.strong;
    case 'warning': return tokens.color.state.warning.strong;
    case 'error':   return tokens.color.state.error.strong;
    case 'info':    return tokens.color.state.info.strong;
    case 'neutral': return tokens.color.fg.muted;
  }
};

/**
 * A colored dot + label that reports truth — the calm at-a-glance state of a
 * thing. `neutral` is the quiet "no signal" case; the rest map to state colors.
 */
export function StatusDot({ status, label, children, testID }: StatusDotProps) {
  const text = label ?? children ?? '';
  const labelColor = status === 'neutral' ? tokens.color.fg.muted : tokens.color.fg.secondary;

  return (
    <View style={styles.row} testID={testID}>
      <View style={[styles.dot, { backgroundColor: dotColorFor(status) }]} />
      <Text numberOfLines={1} style={[styles.label, { color: labelColor }]}>
        {text}
      </Text>
    </View>
  );
}

StatusDot.displayName = 'StatusDot';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.space[2], // 8
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
  label: {
    ...(tokens.text.secondary as TextStyle),
    fontFamily: tokens.font.family.sansMedium,
    fontWeight: '500',
  },
});
