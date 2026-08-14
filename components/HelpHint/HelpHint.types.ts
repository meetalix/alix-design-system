import type { StyleProp, ViewStyle } from 'react-native';

export interface HelpHintProps {
  /** Modal heading — name the thing being explained, e.g. "About transfer-on-death". */
  title: string;
  /**
   * The explanation, in plain language. Say what we mean and what happens if the
   * customer isn't sure. Keep it to a short paragraph or two — if it needs more, the
   * question itself is probably wrong.
   */
  body: string;
  /**
   * Accessible label for the trigger. Defaults to "About {title}". Override when the
   * title alone wouldn't tell a screen-reader user what they're opening.
   */
  accessibilityLabel?: string;
  /** Label for the dismiss action. */
  dismissLabel?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
