import type { IconName } from '../Icon/Icon.types';

/**
 * - `primary`   — navy fill. The mobile default; one primary per screen.
 * - `secondary` — white with hairline border. Recedes.
 * - `accent`    — purple fill. The single "one thing today" action.
 * - `link`      — text only, blue. Inline navigation.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'link';

export interface ButtonProps {
  /** Button label. */
  children: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  /** Stretch to fill the container width (the mobile default for primary actions). */
  fullWidth?: boolean;
  /** Optional leading icon (Lucide name). */
  leftIcon?: IconName;
  /** Optional trailing icon (Lucide name). */
  rightIcon?: IconName;
  /** Accessibility label override (defaults to the text label). */
  accessibilityLabel?: string;
  testID?: string;
}
