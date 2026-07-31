import React from 'react';
import { Modal, Pressable, Text, View, StyleSheet, type TextStyle } from 'react-native';
import { tokens } from '../theme';
import type { SheetProps } from './Sheet.types';

/**
 * The Alix overlay surface. A panel that slides up over a scrim — the home for
 * pickers, confirmations, and any transient choice. Tap the scrim (or Android
 * back) to dismiss. Unlike Card, a Sheet genuinely floats, so it carries real
 * depth via `shadow.overlay`.
 */
export function Sheet({ visible, onClose, title, showHandle = true, children, testID }: SheetProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose} testID={testID}>
      <View style={styles.root}>
        <Pressable style={styles.scrim} onPress={onClose} accessibilityRole="button" accessibilityLabel="Dismiss" />
        <View style={styles.panel} accessibilityViewIsModal>
          {showHandle && <View style={styles.handle} />}
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
        </View>
      </View>
    </Modal>
  );
}

Sheet.displayName = 'Sheet';

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end' },
  scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: tokens.color.bg.scrim },
  panel: {
    backgroundColor: tokens.color.bg.default,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
    paddingHorizontal: tokens.space[5],
    paddingTop: tokens.space[3],
    paddingBottom: tokens.space[6],
    ...tokens.shadow.overlay,
  },
  handle: {
    width: 36,
    height: 4,
    borderRadius: tokens.radius.pill,
    backgroundColor: tokens.color.bg.block,
    alignSelf: 'center',
    marginBottom: tokens.space[3],
  },
  title: {
    ...(tokens.text.section as TextStyle),
    color: tokens.color.fg.default,
    marginBottom: tokens.space[3],
  },
});
