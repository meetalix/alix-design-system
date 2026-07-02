import type { ReactNode } from 'react';

export interface SheetProps {
  /** Whether the sheet is shown. */
  visible: boolean;
  /** Called on scrim tap or Android hardware back. */
  onClose: () => void;
  /** Optional heading rendered at the top of the panel. */
  title?: string;
  /** Show the drag handle (grabber). Defaults to true. */
  showHandle?: boolean;
  children: ReactNode;
  testID?: string;
}
