import React, { useState } from 'react';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import { Text } from '../Text/Text';
import { tokens } from '../theme';
import type { HelpHintProps } from './HelpHint.types';

/**
 * A "?" badge that opens a plain-language explanation.
 *
 * Estate settlement forces us to ask questions whose wording we cannot be confident in —
 * transfer-on-death, occupancy, mortgage status. A customer who misreads one doesn't
 * leave it blank; they answer confidently and wrongly, and that wrong answer reaches the
 * care team looking like a fact. Somewhere to check the meaning, in the flow, is the
 * cheapest fix for that.
 *
 * A modal rather than an anchored tooltip, on purpose. Anchored popovers need collision
 * handling, they clip inside scroll views, and on a phone they cover the very thing
 * being explained. A centered sheet is dull and it works.
 *
 * Sized to a 44pt touch target while drawing at 20pt — a small glyph that is still easy
 * to hit, since the affordance sits inline next to text.
 */
export function HelpHint({
  title,
  body,
  accessibilityLabel,
  dismissLabel = 'Got It',
  style,
  testID,
}: HelpHintProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable
        testID={testID}
        onPress={() => setOpen(true)}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? `About ${title}`}
        accessibilityHint="Opens a short explanation"
        style={[styles.trigger, style]}
      >
        <Text variant="small" tone="brand" style={styles.glyph}>
          ?
        </Text>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        {/* Tapping the scrim dismisses; the inner press is swallowed so tapping the
            card itself doesn't. */}
        <Pressable style={styles.scrim} onPress={() => setOpen(false)}>
          <Pressable style={styles.card} onPress={() => {}}>
            <Text variant="headline">{title}</Text>
            <Text variant="body" tone="secondary" style={styles.body}>
              {body}
            </Text>
            <Pressable
              onPress={() => setOpen(false)}
              accessibilityRole="button"
              style={styles.dismiss}
            >
              <Text variant="button" tone="action">
                {dismissLabel}
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    width: 20,
    height: 20,
    borderRadius: tokens.radius.pill,
    borderWidth: 1,
    borderColor: tokens.color.fg.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Nudge the glyph optically centered inside the ring.
  glyph: { lineHeight: 14 },

  scrim: {
    flex: 1,
    backgroundColor: tokens.color.bg.scrim,
    justifyContent: 'center',
    padding: tokens.space[5],
  },
  card: {
    backgroundColor: tokens.color.bg.default,
    borderRadius: tokens.radius.md,
    padding: tokens.space[5],
    gap: tokens.space[3],
  },
  body: {},
  dismiss: { alignSelf: 'flex-start', paddingTop: tokens.space[1] },
});
