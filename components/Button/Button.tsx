import React from 'react';
import { Pressable, Text, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens, MIN_TOUCH, PRESS_OVERLAY, PRESS_NUDGE, hairline } from '../theme';
import { Icon } from '../Icon/Icon';
import type { ButtonProps, ButtonVariant } from './Button.types';

const FILL: Record<ButtonVariant, boolean> = { primary: true, accent: true, secondary: false, link: false };

const containerFor = (v: ButtonVariant): ViewStyle => {
  switch (v) {
    case 'primary':   return { backgroundColor: tokens.color.bg.dark };
    case 'accent':    return { backgroundColor: tokens.color.accent.default };
    case 'secondary': return { backgroundColor: tokens.color.bg.default, ...hairline };
    case 'link':      return {};
  }
};

const labelColorFor = (v: ButtonVariant, pressed: boolean): string => {
  switch (v) {
    case 'primary':   return tokens.color.fg.onDark;
    case 'accent':    return tokens.color.accent.onAccent;
    case 'secondary': return tokens.color.fg.brand;
    case 'link':      return pressed ? tokens.color.action.press : tokens.color.action.default;
  }
};

/**
 * The Alix button. Press darkens the fill and nudges it 1px down. Disabled is a
 * flat neutral block. Use exactly one `primary` (or one `accent`) per screen.
 */
export function Button({
  children,
  onPress,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  accessibilityLabel,
  testID,
}: ButtonProps) {
  const isLink = variant === 'link';
  const isFill = FILL[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? children}
      testID={testID}
      style={({ pressed }) => [
        isLink ? styles.link : styles.base,
        !isLink && containerFor(variant),
        fullWidth && styles.fullWidth,
        // secondary darkens by swapping its surface (an ink overlay would gray the white)
        !isLink && pressed && !disabled && variant === 'secondary' && { backgroundColor: tokens.color.bg.block },
        pressed && !disabled && { transform: [{ translateY: PRESS_NUDGE }] },
        disabled && !isLink && styles.disabledFill,
      ]}
    >
      {({ pressed }) => {
        const color = disabled
          ? tokens.color.fg.muted
          : labelColorFor(variant, pressed);
        return (
          <>
            {/* darken affordance for fill variants */}
            {isFill && pressed && !disabled && <View pointerEvents="none" style={styles.overlay} />}
            {leftIcon && <Icon name={leftIcon} size={18} color={color} />}
            <Text
              style={[
                styles.label,
                { color },
                isLink && pressed && !disabled && styles.linkPressed,
              ]}
              numberOfLines={1}
            >
              {children}
            </Text>
            {rightIcon && <Icon name={rightIcon} size={18} color={color} />}
          </>
        );
      }}
    </Pressable>
  );
}

Button.displayName = 'Button';

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    minWidth: MIN_TOUCH,
    paddingHorizontal: tokens.space[5], // 24
    borderRadius: tokens.radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.space[2], // 8
    overflow: 'hidden', // clip the press overlay to the radius
  },
  link: {
    minHeight: MIN_TOUCH,
    paddingHorizontal: tokens.space[1],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.space[2],
  },
  fullWidth: { alignSelf: 'stretch' },
  disabledFill: { backgroundColor: tokens.color.bg.block, borderWidth: 0 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: PRESS_OVERLAY },
  label: { ...(tokens.text.button as TextStyle) },
  linkPressed: { textDecorationLine: 'underline' },
});
