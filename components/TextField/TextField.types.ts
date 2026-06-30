import type { TextInputProps } from 'react-native';
import type { IconName } from '../Icon/Icon.types';

/**
 * A labeled text input with rest / focus / error / disabled states.
 * Extends the subset of RN TextInputProps that make sense to pass through.
 */
export interface TextFieldProps
  extends Pick<TextInputProps, 'keyboardType' | 'secureTextEntry' | 'autoCapitalize' | 'testID'> {
  /** Label rendered above the field. */
  label?: string;
  /** Controlled value. */
  value?: string;
  /** Change handler. */
  onChangeText?: (t: string) => void;
  /** Placeholder shown when empty (rendered in fg.muted). */
  placeholder?: string;
  /** Quiet helper text below the field. Hidden when `error` is a string. */
  helperText?: string;
  /**
   * Error state. A string shows the message below the field with an alert icon;
   * `true` paints the error styling without a message. Error takes precedence over focus.
   */
  error?: string | boolean;
  /** Disabled: tan surface, muted text, not editable. */
  disabled?: boolean;
  /** Optional leading icon (Lucide PascalCase name). */
  leftIcon?: IconName;
}
