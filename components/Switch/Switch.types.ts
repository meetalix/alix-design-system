export interface SwitchProps {
  /** Whether the switch is on. Navy track = on. */
  value: boolean;
  /** Called with the next value when toggled. */
  onValueChange?: (value: boolean) => void;
  /** Flat, dimmed, not pressable. */
  disabled?: boolean;
  testID?: string;
}
