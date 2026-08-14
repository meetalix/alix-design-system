import React from 'react';
import { Text as RNText, StyleSheet, type TextStyle } from 'react-native';
import { tokens } from '../theme';
import type { TextProps, TextTone, TextVariant } from './Text.types';

/**
 * The type primitive. Every string a customer reads should come through here.
 *
 * Before this existed, each component spread `tokens.text.*` into a raw RN `<Text>`.
 * That works, but it puts nothing between a developer and a hand-set fontSize — which is
 * exactly how the mobile app ended up with 15pt, 11pt and 10pt text against a 12/14/16
 * scale, and a 32pt headline at 119% line spacing when the book specifies 105–115%.
 * Routing type through one component makes the scale the path of least resistance.
 *
 * Variants carry font family, size, line height, tracking and case together, because the
 * Brand Guidelines specify them together (p34). Picking `eyebrow` gets you Regular weight
 * all-caps at the book's tracking — you cannot get half of it by accident.
 */
const TONE_COLOR: Record<Exclude<TextTone, 'inherit'>, string> = {
  default: tokens.color.fg.default,
  secondary: tokens.color.fg.secondary,
  muted: tokens.color.fg.muted,
  brand: tokens.color.fg.brand,
  action: tokens.color.action.default,
  'on-dark': tokens.color.fg.onDark,
  'on-dark-secondary': tokens.color.fg.onDarkSecondary,
};

/** token key for a variant — `body-strong` → `bodyStrong`, matching the generated output. */
const tokenKey = (v: TextVariant) => v.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

export function Text({
  variant = 'body',
  tone = 'default',
  center = false,
  style,
  children,
  testID,
  ...rest
}: TextProps) {
  const scale = (tokens.text as Record<string, TextStyle>)[tokenKey(variant)] ?? tokens.text.body;

  return (
    <RNText
      testID={testID}
      // `style` is applied last so callers can set layout, but the variant sits ahead of
      // it in the array for readability — the type spec is the first thing you see.
      style={[
        styles.base,
        scale,
        tone !== 'inherit' && { color: TONE_COLOR[tone] },
        center && styles.center,
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  // `includeFontPadding: false` is Android-only and removes the extra leading Android
  // adds around glyphs, which otherwise breaks the book's line-spacing ratios by a
  // couple of points and makes iOS and Android disagree.
  base: { includeFontPadding: false },
  center: { textAlign: 'center' },
});
