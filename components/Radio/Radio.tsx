import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, Text, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens, MIN_TOUCH } from '../theme';
import type { RadioProps } from './Radio.types';

/**
 * A single-select control — use a set of these to pick one of many. The ring
 * thickens and the navy inner dot scales 0→1 on select. Optional label/sublabel
 * sit to the right; the whole thing is pressable.
 */
export function Radio({ selected, onSelect, disabled = false, label, sublabel, testID }: RadioProps) {
  const scale = useRef(new Animated.Value(selected ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: selected ? 1 : 0,
      duration: tokens.duration.fast,
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [selected, scale]);

  const hasText = label != null || sublabel != null;

  return (
    <Pressable
      onPress={disabled ? undefined : onSelect}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      testID={testID}
      style={[styles.row, disabled && styles.disabled]}
    >
      <View
        style={[
          styles.ring,
          selected && !disabled ? styles.ringSelected : styles.ringUnselected,
          disabled && styles.ringDisabled,
        ]}
      >
        <Animated.View style={[styles.dot, { transform: [{ scale }] }]} pointerEvents="none" />
      </View>
      {hasText && (
        <View style={styles.text}>
          {label != null && <Text style={styles.label}>{label}</Text>}
          {sublabel != null && <Text style={styles.sublabel}>{sublabel}</Text>}
        </View>
      )}
    </Pressable>
  );
}

Radio.displayName = 'Radio';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.space[3], // 12
    minHeight: MIN_TOUCH,
  },
  ring: {
    width: 26,
    height: 26,
    borderRadius: tokens.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  ringUnselected: {
    borderWidth: 1.5,
    borderColor: tokens.color.fg.muted,
    backgroundColor: tokens.color.bg.default,
  },
  ringSelected: {
    borderWidth: 2,
    borderColor: tokens.color.bg.dark,
    backgroundColor: tokens.color.bg.default,
  },
  ringDisabled: {
    borderWidth: 1.5,
    borderColor: tokens.color.fg.muted,
    backgroundColor: tokens.color.bg.block,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: tokens.radius.pill,
    backgroundColor: tokens.color.bg.dark,
  } as ViewStyle,
  text: {
    flexShrink: 1,
  },
  label: {
    ...(tokens.text.bodyStrong as TextStyle),
    color: tokens.color.fg.default,
  },
  sublabel: {
    ...(tokens.text.secondary as TextStyle),
    color: tokens.color.fg.muted,
  },
  disabled: { opacity: 0.45 },
});
