import type { StyleProp, ViewStyle } from 'react-native';

/**
 * Which vertical edges are sheered.
 *
 * - `right` leading edge square, trailing sheered — the LAST chip in a ribbon
 * - `left`  leading sheered, trailing square — the FIRST chip
 * - `both`  both sheered — a MIDDLE chip
 * - `none`  a plain rectangle
 */
export type SheerLean = 'left' | 'right' | 'both' | 'none';

export interface SheerProps {
  /** Fill color. Pass a semantic token value, never a raw hex. */
  fill: string;
  lean?: SheerLean;
  /** Stroke color, for outline treatments (the book's white/navy on/off pair). */
  stroke?: string;
  strokeWidth?: number;
  /** Content laid over the shape. Padding belongs here, not on the shape. */
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
