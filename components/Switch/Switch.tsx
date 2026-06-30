import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { tokens } from '../theme';
import type { SwitchProps } from './Switch.types';

const KNOB_TRAVEL = 21;

/**
 * Instant on/off setting. Navy track = on (never an accent color); tan when off.
 * The knob slides on a fast eased timing curve. Disabled is flat and dimmed.
 */
export function Switch({ value, onValueChange, disabled = false, testID }: SwitchProps) {
  const translateX = useRef(new Animated.Value(value ? KNOB_TRAVEL : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? KNOB_TRAVEL : 0,
      duration: tokens.duration.fast,
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [value, translateX]);

  return (
    <Pressable
      onPress={disabled ? undefined : () => onValueChange?.(!value)}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      testID={testID}
      style={[
        styles.track,
        { backgroundColor: value ? tokens.color.bg.dark : tokens.color.bg.block },
        disabled && styles.disabled,
      ]}
    >
      <Animated.View style={[styles.knob, { transform: [{ translateX }] }]} />
    </Pressable>
  );
}

Switch.displayName = 'Switch';

const styles = StyleSheet.create({
  track: {
    width: 52,
    height: 31,
    borderRadius: tokens.radius.pill,
  } as ViewStyle,
  knob: {
    position: 'absolute',
    top: 3,
    left: 3,
    width: 25,
    height: 25,
    borderRadius: tokens.radius.pill,
    backgroundColor: tokens.color.bg.default,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  } as ViewStyle,
  disabled: { opacity: 0.45 },
});
