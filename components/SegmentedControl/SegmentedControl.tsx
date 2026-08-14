import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Sheer } from '../Sheer/Sheer';
import { Text } from '../Text/Text';
import { tokens, MIN_TOUCH } from '../theme';
import type { SegmentedControlProps } from './SegmentedControl.types';

/**
 * Switch between a small set of filters or states.
 *
 * Now built on the SHEER. The Brand Guidelines' on/off control is a sheered pair
 * (p63) — the seam between segments leans, taken from the Symbol's lines. Previously
 * this was a rounded-rect track with a lifted white thumb, which is the iOS default
 * dressed in brand colors: correct tokens, none of the brand's form.
 *
 * Each segment's lean is positional, so the ribbon interlocks: the first leans left, the
 * last leans right, everything between leans both ways. `Sheer` draws its own fill, so
 * the selected segment is a navy shape rather than a background color on a box.
 */
export function SegmentedControl({ segments, value, onChange, testID }: SegmentedControlProps) {
  const last = segments.length - 1;

  return (
    <View style={styles.container} testID={testID} accessibilityRole="tablist">
      {segments.map((segment, i) => {
        const selected = segment.value === value;
        // First segment: only its trailing edge is sheered. Last: only its leading edge.
        // Middle: both. A single segment gets none — nothing to interlock with.
        const lean =
          segments.length === 1 ? 'none' : i === 0 ? 'right' : i === last ? 'left' : 'both';

        return (
          <Pressable
            key={segment.value}
            onPress={() => onChange(segment.value)}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            style={styles.pressable}
          >
            <Sheer
              lean={lean}
              fill={selected ? tokens.color.bg.dark : tokens.color.bg.block}
              style={styles.segment}
            >
              <Text
                variant="button"
                tone={selected ? 'on-dark' : 'secondary'}
                center
                numberOfLines={1}
              >
                {segment.label}
              </Text>
            </Sheer>
          </Pressable>
        );
      })}
    </View>
  );
}

SegmentedControl.displayName = 'SegmentedControl';

const styles = StyleSheet.create({
  // No track and no gap: the sheered edges meet, which is what makes the seam read as
  // one continuous ribbon rather than separate tiles.
  container: { flexDirection: 'row', alignItems: 'stretch' },
  pressable: { flex: 1 },
  segment: {
    minHeight: MIN_TOUCH,
    justifyContent: 'center',
    paddingVertical: tokens.space[3],
    paddingHorizontal: tokens.space[4],
  },
});
