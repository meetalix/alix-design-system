export interface CtaButtonProps {
  /** Label. Title Case, per the book's CTA rule. */
  children: string;
  onPress?: () => void;
  disabled?: boolean;
  /** Hide the trailing arrow cap. The book always shows it; hiding is for tight rows. */
  hideArrow?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
