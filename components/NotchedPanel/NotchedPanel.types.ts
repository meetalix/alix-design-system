import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface NotchedPanelProps {
  /** Text shown inside the tan corner notch (e.g. "Specialist"). */
  notchLabel: string;
  /** Optional headline rendered in Make Way, white, above the children. */
  title?: string;
  /** Panel body. Arbitrary content is rendered as-is. */
  children?: ReactNode;
  /** Extra style, merged last so callers can override. */
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
