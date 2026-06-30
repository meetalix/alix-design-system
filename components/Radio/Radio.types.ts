export interface RadioProps {
  /** Whether this option is the selected one. */
  selected: boolean;
  /** Called when this option is chosen. */
  onSelect?: () => void;
  /** Flat neutral ring, dimmed, not pressable. */
  disabled?: boolean;
  /** Optional primary label, laid out to the right. */
  label?: string;
  /** Optional secondary line under the label. */
  sublabel?: string;
  testID?: string;
}
