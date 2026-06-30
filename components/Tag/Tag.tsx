import React from 'react';
import { Pressable, Text, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens, hairline } from '../theme';
import { Icon } from '../Icon/Icon';
import type { TagProps, TagVariant } from './Tag.types';

const containerFor = (v: TagVariant): ViewStyle => {
  switch (v) {
    case 'accent':  return { backgroundColor: tokens.color.accent.default };
    case 'info':    return { backgroundColor: tokens.color.accent.soft };
    case 'solid':   return { backgroundColor: tokens.color.bg.dark };
    case 'neutral': return { backgroundColor: tokens.color.bg.block };
    case 'outline': return { backgroundColor: tokens.color.bg.default, ...hairline };
  }
};

const textColorFor = (v: TagVariant): string => {
  switch (v) {
    case 'accent':  return tokens.color.accent.onAccent;
    case 'info':    return tokens.color.fg.brand;
    case 'solid':   return tokens.color.fg.onDark;
    case 'neutral': return tokens.color.fg.secondary;
    case 'outline': return tokens.color.fg.brand;
  }
};

/**
 * Pill-shaped phase & ownership label. Five fixed variants — `accent` (purple)
 * is the one loud moment; the rest stay quiet. Optionally removable.
 */
export function Tag({ label, children, variant = 'accent', onRemove, testID }: TagProps) {
  const text = label ?? children ?? '';
  const color = textColorFor(variant);
  const removable = typeof onRemove === 'function';

  return (
    <View
      style={[styles.base, containerFor(variant), removable && styles.baseRemovable]}
      testID={testID}
    >
      <Text numberOfLines={1} style={[styles.label, { color }]}>
        {text}
      </Text>
      {removable && (
        <Pressable
          onPress={onRemove}
          accessibilityRole="button"
          accessibilityLabel="Remove"
          hitSlop={8}
          style={styles.remove}
        >
          <Icon name="X" size={14} strokeWidth={2.5} color={color} />
        </Pressable>
      )}
    </View>
  );
}

Tag.displayName = 'Tag';

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: tokens.radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  // tighten the trailing edge so the X sits closer; keep the gap to the label
  baseRemovable: {
    paddingRight: 9,
    gap: tokens.space[1], // 4
  },
  label: {
    ...(tokens.text.small as TextStyle),
    fontFamily: tokens.font.family.sansMedium,
    fontWeight: '500',
    fontSize: 13,
  },
  remove: {
    opacity: 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
