import React from 'react';
import { Pressable, Text, View, StyleSheet, type TextStyle } from 'react-native';
import { tokens, hairline } from '../theme';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import { Sheet } from '../Sheet/Sheet';
import type { IconName } from '../Icon/Icon.types';
import type { DocumentSource, DocumentSourceSheetProps } from './DocumentSourceSheet.types';

const OPTIONS: { key: DocumentSource; icon: IconName; title: string; subtitle: string }[] = [
  { key: 'camera', icon: 'Camera', title: 'Camera', subtitle: 'Take a photo' },
  { key: 'gallery', icon: 'Image', title: 'Gallery', subtitle: 'Pick media' },
  { key: 'files', icon: 'Folder', title: 'Files', subtitle: 'Browse storage' },
];

/**
 * The "add a file" picker: choose where a document comes from — camera, photos,
 * or files. A `Sheet` with three option tiles. This is the one modern home for
 * the upload/capture entry point the app hand-rolled before the system had a
 * Sheet.
 */
export function DocumentSourceSheet({ visible, onClose, onSelect, title = 'Add a file', testID }: DocumentSourceSheetProps) {
  return (
    <Sheet visible={visible} onClose={onClose} title={title} testID={testID}>
      <View style={styles.row}>
        {OPTIONS.map((o) => (
          <Pressable
            key={o.key}
            onPress={() => onSelect(o.key)}
            accessibilityRole="button"
            accessibilityLabel={`${o.title} — ${o.subtitle}`}
            style={({ pressed }) => [styles.tile, pressed && styles.tilePressed]}
          >
            <View style={styles.iconTile}>
              <Icon name={o.icon} size={22} color={tokens.color.fg.brand} />
            </View>
            <Text style={styles.tileTitle}>{o.title}</Text>
            <Text style={styles.tileSub}>{o.subtitle}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.cancel}>
        <Button variant="link" onPress={onClose}>Cancel</Button>
      </View>
    </Sheet>
  );
}

DocumentSourceSheet.displayName = 'DocumentSourceSheet';

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: tokens.space[2] },
  tile: {
    flex: 1,
    alignItems: 'center',
    gap: tokens.space[2],
    paddingVertical: tokens.space[4],
    paddingHorizontal: tokens.space[2],
    borderRadius: tokens.radius.md,
    ...hairline,
  },
  tilePressed: { backgroundColor: tokens.color.bg.alt },
  iconTile: {
    width: 44,
    height: 44,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.color.bg.alt,
  },
  tileTitle: {
    ...(tokens.text.secondary as TextStyle),
    fontFamily: tokens.font.family.sansMedium,
    fontWeight: '500',
    color: tokens.color.fg.default,
  },
  tileSub: {
    ...(tokens.text.small as TextStyle),
    color: tokens.color.fg.muted,
    textAlign: 'center',
  },
  cancel: { alignItems: 'center', marginTop: tokens.space[3] },
});
