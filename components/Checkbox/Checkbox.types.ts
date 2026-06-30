export interface CheckboxProps {
  /** Whether the box is checked. */
  checked: boolean;
  /** Called with the next checked value when toggled. */
  onChange?: (checked: boolean) => void;
  /** Flat neutral box, dimmed, not pressable. */
  disabled?: boolean;
  /** Optional trailing label; when present the whole row is pressable. */
  label?: string;
  testID?: string;
}
