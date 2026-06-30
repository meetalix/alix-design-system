import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens } from '../theme';
import type { NotchedPanelProps } from './NotchedPanel.types';

/**
 * The brand's signature navy panel with a tan "notch" label in the top-left
 * corner. A loud-on-purpose surface — reserve it for the Specialist and other
 * key moments, never as a generic container.
 */
export function NotchedPanel({ notchLabel, title, children, style, testID }: NotchedPanelProps) {
  return (
    <View testID={testID} style={[styles.panel, style]}>
      <View style={styles.notch}>
        <Text style={styles.notchLabel} numberOfLines={1}>
          {notchLabel}
        </Text>
      </View>
      <View style={styles.content}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {children}
      </View>
    </View>
  );
}

NotchedPanel.displayName = 'NotchedPanel';

const NOTCH_HEIGHT = 30;

const styles = StyleSheet.create({
  panel: {
    backgroundColor: tokens.color.bg.dark,
    borderRadius: tokens.radius.md,
    overflow: 'hidden',
    position: 'relative',
    padding: tokens.space[5], // 20
  } as ViewStyle,
  notch: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: NOTCH_HEIGHT,
    backgroundColor: tokens.color.bg.alt,
    borderBottomRightRadius: tokens.radius.md,
    paddingVertical: 7,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  notchLabel: {
    ...(tokens.text.small as TextStyle),
    color: tokens.color.fg.default,
  },
  content: {
    // Clear the absolutely-positioned notch.
    marginTop: tokens.space[5], // 20
  },
  title: {
    ...(tokens.text.headline as TextStyle),
    color: tokens.color.fg.onDark,
    marginBottom: tokens.space[3], // 12
  },
});
