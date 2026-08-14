import type { StyleProp, ViewStyle } from 'react-native';

export interface ChoiceOption {
  /** Stable value stored in state. Never derive this from the label. */
  value: string;
  label: string;
  /** Optional second line — a short clarifier, not a paragraph. */
  hint?: string;
  disabled?: boolean;
}

export interface ChoiceGroupProps {
  options: ChoiceOption[];
  /** The selected value, or `undefined` when nothing is chosen yet. */
  value?: string;
  onChange: (value: string) => void;
  /**
   * `wrap` — options flow and wrap. The default; right for 2–7 short options.
   * `stack` — one per row, full width. Use when options carry hints or long labels.
   */
  layout?: 'wrap' | 'stack';
  /** Accessible name for the group — usually the question being asked. */
  label?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
