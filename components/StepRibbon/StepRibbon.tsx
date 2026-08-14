import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Sheer } from '../Sheer/Sheer';
import { Text } from '../Text/Text';
import { tokens } from '../theme';
import type { StepRibbonProps, StepState } from './StepRibbon.types';

/**
 * Horizontal progress as sheered chips — "Step 1 / Step 2 / Step 3".
 *
 * This is the Brand Guidelines' wayfinding form applied literally (p62–63): navy for
 * done, purple for where you are, and the sheered seam between them taken from the
 * Symbol's lines.
 *
 * Separate from `PhaseTracker` on purpose. That component is a VERTICAL timeline with
 * markers and connectors, which suits a long list of estate phases where each row needs
 * room for a title and a date. This is a HORIZONTAL ribbon for a short, bounded flow —
 * three or four steps you can see at once. Forcing the sheer onto the vertical stepper
 * would have broken a pattern that works; they answer different questions.
 *
 * Keep it to ~4 steps. Beyond that the chips get too narrow to read and the ribbon
 * stops being glanceable, which is the only reason to use it over a count.
 */
const fillFor = (state: StepState): string => {
  switch (state) {
    case 'complete':
      return tokens.color.bg.dark;
    case 'current':
      return tokens.color.accent.default;
    case 'upcoming':
      return tokens.color.bg.block;
  }
};

// Navy carries white; purple and tan-dark both carry ink. These are the book's approved
// pairings (p41) — don't substitute without checking that page.
const toneFor = (state: StepState) => (state === 'complete' ? 'on-dark' : 'default');

export function StepRibbon({ steps, currentIndex, label, testID }: StepRibbonProps) {
  const last = steps.length - 1;

  const stateOf = (i: number, explicit?: StepState): StepState => {
    if (explicit) return explicit;
    if (currentIndex === undefined) return 'upcoming';
    if (i < currentIndex) return 'complete';
    if (i === currentIndex) return 'current';
    return 'upcoming';
  };

  const current = steps.findIndex((s, i) => stateOf(i, s.state) === 'current');

  return (
    <View
      testID={testID}
      style={styles.row}
      accessibilityRole="progressbar"
      accessibilityLabel={label}
      // One announcement for the whole ribbon rather than three unlabelled chips.
      accessibilityValue={
        current >= 0
          ? { min: 1, max: steps.length, now: current + 1, text: `Step ${current + 1} of ${steps.length}` }
          : undefined
      }
    >
      {steps.map((step, i) => {
        const state = stateOf(i, step.state);
        const lean = steps.length === 1 ? 'none' : i === 0 ? 'right' : i === last ? 'left' : 'both';

        return (
          <Sheer key={step.label} lean={lean} fill={fillFor(state)} style={styles.chip}>
            <Text
              variant="button"
              tone={state === 'upcoming' ? 'muted' : toneFor(state)}
              center
              numberOfLines={1}
            >
              {step.label}
            </Text>
          </Sheer>
        );
      })}
    </View>
  );
}

StepRibbon.displayName = 'StepRibbon';

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'stretch' },
  chip: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: tokens.space[3],
    paddingHorizontal: tokens.space[3],
  },
});
