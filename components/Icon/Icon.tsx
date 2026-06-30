import React from 'react';
import { icons } from 'lucide-react-native';
import { tokens } from '../theme';
import type { IconProps } from './Icon.types';

/**
 * Functional iconography — Lucide, drawn at the Alix line weight (1.75) and
 * recolored to navy by default. One quiet line set across the whole app.
 */
export function Icon({ name, size = 20, color = tokens.color.fg.brand, strokeWidth = 1.75 }: IconProps) {
  const Glyph = icons[name];
  if (!Glyph) {
    if (__DEV__) console.warn(`<Icon> unknown name "${name}" — check the Lucide PascalCase name.`);
    return null;
  }
  return <Glyph size={size} color={color} strokeWidth={strokeWidth} />;
}

Icon.displayName = 'Icon';
