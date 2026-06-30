/**
 * - `accent`  — purple fill, ink text. The single accent moment; use sparingly.
 * - `info`    — light-blue fill, navy text. Quiet informational label.
 * - `solid`   — navy fill, white text. A firm "on" label.
 * - `neutral` — tan-dark fill, secondary text. The default quiet chip.
 * - `outline` — white with hairline, navy text. Recedes the most.
 */
export type TagVariant = 'accent' | 'info' | 'solid' | 'neutral' | 'outline';

export interface TagProps {
  /** The label text. Pass either `label` or a string child. */
  label?: string;
  /** A string child, used when `label` is not provided. */
  children?: string;
  variant?: TagVariant;
  /** When provided, renders a trailing "remove" (X) button. */
  onRemove?: () => void;
  testID?: string;
}
