import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Icon } from '../Icon/Icon';
import { Sheer } from '../Sheer/Sheer';
import { Text } from '../Text/Text';
import { tokens, MIN_TOUCH, PRESS_NUDGE } from '../theme';
import type { CtaButtonProps } from './CtaButton.types';

/**
 * The brand's hero call to action: a sheered purple chip with a navy arrow cap —
 * "Talk to an Expert →" exactly as the Brand Guidelines draw it (p63).
 *
 * Separate from `Button` rather than a variant of it, for two reasons. Its geometry is
 * different enough (two interlocking shapes, not one rounded rect) that folding it in
 * would tangle `Button`'s pressed/disabled handling for every existing consumer. And its
 * job is different: this is the one loud, brand-forward action — a landing moment, an
 * empty state, the end of a flow. `Button` remains the workhorse for everything else.
 *
 * Use at most one per screen. Two sheered purple CTAs competing is exactly the "one
 * accent moment" rule breaking down.
 */
export function CtaButton({
  children,
  onPress,
  disabled = false,
  hideArrow = false,
  accessibilityLabel,
  testID,
}: CtaButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? children}
      testID={testID}
      style={({ pressed }) => [
        styles.row,
        pressed && !disabled && { transform: [{ translateY: PRESS_NUDGE }] },
        disabled && styles.disabled,
      ]}
    >
      {/* Label chip — leans right, so the arrow cap tucks into its trailing edge. */}
      <Sheer lean="right" fill={tokens.color.accent.default} style={styles.label}>
        <Text variant="button" tone="default" numberOfLines={1}>
          {children}
        </Text>
      </Sheer>

      {hideArrow ? null : (
        // The cap leans left to mirror the label's trailing edge, so the two read as one
        // object with a seam rather than as two buttons side by side.
        <Sheer lean="left" fill={tokens.color.bg.dark} style={styles.cap}>
          <Icon name="ArrowRight" size={18} color={tokens.color.fg.onDark} />
        </Sheer>
      )}
    </Pressable>
  );
}

CtaButton.displayName = 'CtaButton';

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'stretch', alignSelf: 'flex-start' },
  label: {
    minHeight: MIN_TOUCH,
    justifyContent: 'center',
    paddingVertical: tokens.space[3],
    paddingLeft: tokens.space[5],
    paddingRight: tokens.space[4],
  },
  cap: {
    minHeight: MIN_TOUCH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.space[4],
  },
  disabled: { opacity: 0.5 },
});
