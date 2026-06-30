/** One selectable segment. `value` is the identity, `label` is what shows. */
export interface Segment {
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  /** The set of segments to choose between (typically 2–4). */
  segments: Segment[];
  /** The currently selected segment value. */
  value: string;
  /** Called with the newly selected segment value. */
  onChange: (value: string) => void;
  testID?: string;
}
