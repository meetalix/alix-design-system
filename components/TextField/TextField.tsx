import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens, focusRing } from '../theme';
import { Icon } from '../Icon/Icon';
import type { TextFieldProps } from './TextField.types';

/**
 * The Alix text field. 16px text (avoids iOS zoom), a blue focus halo, and a
 * state-red ring + alert message on error. Error styling takes precedence over focus.
 */
export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  helperText,
  error,
  disabled = false,
  leftIcon,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  testID,
}: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : undefined;

  const fieldStateStyle: ViewStyle = hasError
    ? focusRing(tokens.color.state.error.strong)
    : focused && !disabled
      ? focusRing(tokens.color.action.default)
      : { borderColor: tokens.color.border.hairline };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
      )}

      <View style={styles.fieldWrap}>
        {leftIcon && (
          <View pointerEvents="none" style={styles.leftIcon}>
            <Icon name={leftIcon} size={18} color={tokens.color.fg.muted} />
          </View>
        )}
        <TextInput
          style={[
            styles.input,
            fieldStateStyle,
            leftIcon ? styles.inputWithIcon : null,
            disabled && styles.inputDisabled,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={tokens.color.fg.muted}
          editable={!disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          testID={testID}
          accessibilityLabel={label}
          accessibilityState={{ disabled }}
        />
      </View>

      {errorMessage ? (
        <View style={styles.messageRow}>
          <Icon name="CircleAlert" size={14} strokeWidth={2} color={tokens.color.state.error.strong} />
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
}

TextField.displayName = 'TextField';

const styles = StyleSheet.create({
  container: {
    gap: tokens.space[2], // 8
  },
  label: {
    fontFamily: tokens.font.family.sansMedium,
    fontWeight: '500',
    fontSize: 13,
    color: tokens.color.fg.default,
  },
  labelDisabled: {
    color: tokens.color.fg.muted,
  },
  fieldWrap: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    ...(tokens.text.body as TextStyle),
    color: tokens.color.fg.default,
    minHeight: 52,
    paddingVertical: 14,
    paddingHorizontal: tokens.space[4], // 16
    borderRadius: tokens.radius.md,
    borderWidth: 1,
    backgroundColor: tokens.color.bg.default,
  },
  inputWithIcon: {
    paddingLeft: 44,
  },
  inputDisabled: {
    backgroundColor: tokens.color.bg.alt,
    color: tokens.color.fg.muted,
  },
  leftIcon: {
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.space[1], // 4
  },
  errorText: {
    ...(tokens.text.small as TextStyle),
    color: tokens.color.state.error.strong,
  },
  helperText: {
    ...(tokens.text.small as TextStyle),
    color: tokens.color.fg.muted,
  },
});
