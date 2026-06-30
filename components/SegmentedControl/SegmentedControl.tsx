import React from 'react';
import { Pressable, Text, View, StyleSheet, type TextStyle } from 'react-native';
import { tokens, MIN_TOUCH } from '../theme';
import type { SegmentedControlProps } from './SegmentedControl.types';

/**
 * Switch between a small set of filters. Navy = "on": the selected segment lifts
 * onto a white surface with a soft shadow; the rest stay quiet on the tan track.
 */
export function SegmentedControl({ segments, value, onChange, testID }: SegmentedControlProps) {
  return (
    <View style={styles.container} testID={testID}>
      {segments.map((segment) => {
        const selected = segment.value === value;
        return (
          <Pressable
            key={segment.value}
            onPress={() => onChange(segment.value)}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            style={[styles.segment, selected && styles.segmentSelected]}
          >
            <Text
              numberOfLines={1}
              style={[styles.label, selected ? styles.labelSelected : styles.labelUnselected]}
            >
              {segment.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

SegmentedControl.displayName = 'SegmentedControl';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: tokens.color.bg.block,
    borderRadius: tokens.radius.md,
    padding: tokens.space[1], // 4
    gap: tokens.space[1], // 4
  },
  segment: {
    flex: 1,
    minHeight: MIN_TOUCH,
    borderRadius: tokens.radius.sm,
    paddingVertical: 11,
    paddingHorizontal: tokens.space[4], // 16
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  segmentSelected: {
    backgroundColor: tokens.color.bg.default,
    ...tokens.shadow.sm,
  },
  label: {
    ...(tokens.text.secondary as TextStyle),
    fontFamily: tokens.font.family.sansMedium,
    fontWeight: '500',
  },
  labelSelected: { color: tokens.color.fg.brand },
  labelUnselected: { color: tokens.color.fg.secondary },
});
