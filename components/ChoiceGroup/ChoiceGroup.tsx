import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Text } from '../Text/Text';
import { tokens, MIN_TOUCH } from '../theme';
import type { ChoiceGroupProps, ChoiceOption } from './ChoiceGroup.types';

/**
 * Single-select from a small set of options — "Is there a surviving spouse?",
 * "What kind of account is it?", "What condition is it in?".
 *
 * This exists because the kit had no choice control at all: only `Button` and form
 * primitives. Onboarding therefore built its own pill row, which is a fair chunk of why
 * review feedback said the questionnaire "adds another design system". Fixing that
 * instance without filling the gap would just move the problem to the next screen.
 *
 * Deliberately NOT sheered. The book's sheered form is for wayfinding — steps, tabs,
 * on/off (p63) — and `SegmentedControl` carries it. A question with six answers is not
 * wayfinding, and sheering a wrapped grid of options reads as noise. Rounded here,
 * sheered there, is the distinction the book draws.
 *
 * Selection uses the semantic accent tokens, so a partner build (Edward Jones, Schwab)
 * re-themes by swapping the alias layer. Whoever supplies a partner palette owns its
 * contrast: EJ's derived tokens once produced yellow-on-pale-yellow at ~1.3:1, which is
 * why partner selection resolves to grey rather than the brand's accent.
 */
export function ChoiceGroup({
  options,
  value,
  onChange,
  layout = 'wrap',
  label,
  style,
  testID,
}: ChoiceGroupProps) {
  const stacked = layout === 'stack';

  return (
    <View
      testID={testID}
      accessibilityRole="radiogroup"
      accessibilityLabel={label}
      style={[stacked ? styles.stack : styles.wrap, style]}
    >
      {options.map((option) => (
        <Option
          key={option.value}
          option={option}
          selected={option.value === value}
          stacked={stacked}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
}

function Option({
  option,
  selected,
  stacked,
  onPress,
}: {
  option: ChoiceOption;
  selected: boolean;
  stacked: boolean;
  onPress: () => void;
}) {
  const disabled = !!option.disabled;

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      // `radio` rather than `button`: this is one of a set, and the state matters to
      // screen readers as much as the label does.
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      accessibilityLabel={option.hint ? `${option.label}. ${option.hint}` : option.label}
      style={({ pressed }) => [
        styles.option,
        stacked ? styles.optionStacked : styles.optionWrap,
        selected && styles.optionSelected,
        disabled && styles.optionDisabled,
        pressed && !disabled && styles.optionPressed,
      ]}
    >
      <Text
        variant="body"
        tone={disabled ? 'muted' : selected ? 'brand' : 'default'}
        center={!stacked}
        numberOfLines={stacked ? 2 : 1}
      >
        {option.label}
      </Text>
      {option.hint ? (
        <Text variant="small" tone="muted" center={!stacked} style={styles.hint}>
          {option.hint}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: tokens.space[2] },
  stack: { gap: tokens.space[2] },

  option: {
    minHeight: MIN_TOUCH,
    justifyContent: 'center',
    paddingVertical: tokens.space[3],
    paddingHorizontal: tokens.space[4],
    borderRadius: tokens.radius.md,
    borderWidth: 1.5,
    borderColor: tokens.color.border.hairline,
    backgroundColor: tokens.color.bg.default,
  },
  // Grow to share the row so a two-option row splits evenly, with a floor that keeps
  // "Yes"/"No" from collapsing to their text width.
  optionWrap: { flexGrow: 1, minWidth: 96, alignItems: 'center' },
  optionStacked: { width: '100%' },

  optionSelected: {
    borderColor: tokens.color.accent.default,
    backgroundColor: tokens.color.accent.soft,
  },
  optionPressed: { opacity: 0.9 },
  optionDisabled: { opacity: 0.5 },

  hint: { marginTop: 2 },
});
