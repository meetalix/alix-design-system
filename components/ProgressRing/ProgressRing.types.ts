export interface ProgressRingProps {
  /** Progress from 0 to 1. Values outside the range are clamped. */
  progress: number;
  /** Outer diameter in pixels. Default 132. */
  size?: number;
  /** Stroke width of both the track and the progress arc. Default 11. */
  strokeWidth?: number;
  /** Big centered label. Defaults to the rounded percentage, e.g. "62%". */
  label?: string;
  /** Optional small caption rendered below the label. */
  caption?: string;
  testID?: string;
}
