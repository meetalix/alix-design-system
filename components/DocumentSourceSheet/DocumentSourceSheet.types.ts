export type DocumentSource = 'camera' | 'gallery' | 'files';

export interface DocumentSourceSheetProps {
  /** Whether the picker is shown. */
  visible: boolean;
  /** Fired on scrim tap, Cancel, or Android back. */
  onClose: () => void;
  /** Fired with the chosen source. The consumer decides what to close/open next. */
  onSelect: (source: DocumentSource) => void;
  /** Sheet heading. Defaults to "Add a file". */
  title?: string;
  testID?: string;
}
