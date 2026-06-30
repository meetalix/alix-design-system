import React from 'react';
import { Pressable, Text, View, StyleSheet, type TextStyle } from 'react-native';
import { tokens } from '../theme';
import { Icon } from '../Icon/Icon';
import type { ListRowProps } from './ListRow.types';

/**
 * The backbone of navigation. A tappable row: leading icon tile, title +
 * supporting line, optional trailing value and chevron. Tappable rows tint tan
 * on press — the tint is the only feedback (no 1px nudge on rows).
 */
export function ListRow({
  title,
  subtitle,
  icon,
  iconBackground = tokens.color.bg.alt,
  trailingText,
  showChevron = true,
  divider = false,
  onPress,
  disabled = false,
  testID,
}: ListRowProps) {
  const interactive = onPress !== undefined && !disabled;

  return (
    <Pressable
      onPress={onPress}
      disabled={!interactive}
      accessibilityRole={interactive ? 'button' : undefined}
      accessibilityState={interactive ? { disabled: false } : undefined}
      testID={testID}
      style={({ pressed }) => [
        styles.row,
        divider && styles.divider,
        interactive && pressed && styles.pressed,
      ]}
    >
      {icon && (
        <View style={[styles.tile, { backgroundColor: iconBackground }]}>
          <Icon name={icon} size={19} color={tokens.color.fg.brand} />
        </View>
      )}

      <View style={styles.middle}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>

      {trailingText && (
        <Text style={styles.trailingText} numberOfLines={1}>
          {trailingText}
        </Text>
      )}
      {showChevron && (
        <Icon name="ChevronRight" size={18} color={tokens.color.fg.muted} />
      )}
    </Pressable>
  );
}

ListRow.displayName = 'ListRow';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.space[4] - 2, // ~14
    paddingVertical: 12,
    paddingHorizontal: tokens.space[4], // 16
    minHeight: 56,
    backgroundColor: tokens.color.bg.default,
  },
  pressed: {
    backgroundColor: tokens.color.bg.alt,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: tokens.color.border.hairline,
  },
  tile: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
  },
  title: {
    ...(tokens.text.body as TextStyle),
    fontFamily: tokens.font.family.sansMedium,
    fontWeight: '500',
    fontSize: 15,
    color: tokens.color.fg.default,
  },
  subtitle: {
    ...(tokens.text.small as TextStyle),
    fontSize: 13,
    color: tokens.color.fg.muted,
    marginTop: 2,
  },
  trailingText: {
    ...(tokens.text.secondary as TextStyle),
    fontSize: 14,
    fontWeight: '500',
    color: tokens.color.fg.secondary,
  },
});
