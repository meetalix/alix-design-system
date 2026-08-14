export type StepState = 'complete' | 'current' | 'upcoming';

export interface RibbonStep {
  label: string;
  state?: StepState;
}

export interface StepRibbonProps {
  steps: RibbonStep[];
  /**
   * Index of the current step. Convenience alternative to setting `state` on each step —
   * everything before is complete, everything after upcoming.
   */
  currentIndex?: number;
  /** Accessible name, e.g. "Onboarding progress". */
  label?: string;
  testID?: string;
}
