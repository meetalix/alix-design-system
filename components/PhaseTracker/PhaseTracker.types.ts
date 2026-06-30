/** State of a single phase in the tracker. */
export type PhaseStatus = 'complete' | 'current' | 'upcoming';

export interface PhaseStep {
  /** Phase title, e.g. "Gather documents". */
  title: string;
  /** Optional supporting line beneath the title. */
  sub?: string;
  status: PhaseStatus;
}

export interface PhaseTrackerProps {
  /** Ordered list of phases, top to bottom. */
  steps: PhaseStep[];
  testID?: string;
}
