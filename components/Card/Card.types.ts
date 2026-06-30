import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface CardProps {
  /** Card contents. */
  children: ReactNode;
  /**
   * Inner padding. `true` (default) → `space[4]` (16). A number → that many
   * points. `false` → no padding (let the children own their edges).
   */
  padded?: boolean | number;
  /**
   * Lift the card with a soft shadow and drop the hairline border. Reserve for
   * surfaces that genuinely float (sheets, popovers) — flat is the default.
   */
  elevated?: boolean;
  /** Extra style, merged last so callers can override. */
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
