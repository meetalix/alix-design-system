export type StatusDotStatus = 'success' | 'warning' | 'error' | 'info' | 'neutral';

export interface StatusDotProps {
  /** Which status the dot reports. */
  status: StatusDotStatus;
  /** The label text. Pass either `label` or a string child. */
  label?: string;
  /** A string child, used when `label` is not provided. */
  children?: string;
  testID?: string;
}
