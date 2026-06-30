import React from 'react';
import { Pressable, Text, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens, MIN_TOUCH } from '../theme';
import { Icon } from '../Icon/Icon';
import type { CheckboxProps } from './Checkbox.types';

/**
 * A multi-select control. Checked is a navy box with a white check; the check is
 * always mounted and toggled by opacity so it never pops in/out. An optional
 * trailing label makes the whole row pressable.
 */
export function Checkbox({ checked, onChange, disabled = false, label, testID }: CheckboxProps) {
  const box = (
    <View
      style={[
        styles.box,
        checked && !disabled ? styles.boxChecked : styles.boxUnchecked,
        disabled && styles.boxDisabled,
      ]}
    >
      <View style={[styles.check, { opacity: checked ? 1 : 0 }]} pointerEvents="none">
        <Icon name="Check" size={16} strokeWidth={3} color={tokens.color.fg.onDark} />
      </View>
    </View>
  );

  return (
    <Pressable
      onPress={disabled ? undefined : () => onChange?.(!checked)}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      testID={testID}
      style={[styles.row, label != null && styles.rowWithLabel, disabled && styles.disabled]}
    >
      {box}
      {label != null && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}

Checkbox.displayName = 'Checkbox';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.space[3], // 12
  },
  rowWithLabel: {
    minHeight: MIN_TOUCH,
  },
  box: {
    width: 26,
    height: 26,
    borderRadius: tokens.radius.sm,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  boxUnchecked: {
    backgroundColor: tokens.color.bg.default,
    borderColor: tokens.color.fg.muted,
  },
  boxChecked: {
    backgroundColor: tokens.color.bg.dark,
    borderColor: tokens.color.bg.dark,
  },
  boxDisabled: {
    backgroundColor: tokens.color.bg.block,
    borderColor: tokens.color.fg.muted,
  },
  check: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...(tokens.text.body as TextStyle),
    color: tokens.color.fg.default,
    flexShrink: 1,
  },
  disabled: { opacity: 0.45 },
});
