import type { IconName } from '../Icon/Icon.types';

export interface ListRowProps {
  /** The primary line — required. */
  title: string;
  /** Optional supporting line below the title. */
  subtitle?: string;
  /** Optional leading icon (Lucide PascalCase name), rendered in a rounded tile. */
  icon?: IconName;
  /**
   * Background color for the leading icon tile — pass a semantic token value
   * (e.g. `tokens.color.bg.alt`). Defaults to tan (`color.bg.alt`).
   */
  iconBackground?: string;
  /** Optional trailing value shown before the chevron. */
  trailingText?: string;
  /** Show the trailing chevron. Defaults to `true`. */
  showChevron?: boolean;
  /** Draw a bottom hairline divider. */
  divider?: boolean;
  /** Tap handler. When omitted the row renders non-interactive (no press feedback). */
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
}
