import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { tokens } from '../theme';
import { Icon } from '../Icon/Icon';
import type { PhaseTrackerProps, PhaseStatus } from './PhaseTracker.types';

const MARKER = 26;

const markerBg = (status: PhaseStatus): string => {
  switch (status) {
    case 'complete': return tokens.color.bg.dark;
    case 'current':  return tokens.color.accent.default;
    case 'upcoming': return tokens.color.bg.block;
  }
};

// The connector below a marker is navy once that step is complete, else tan-dark.
const connectorColor = (status: PhaseStatus): string =>
  status === 'complete' ? tokens.color.bg.dark : tokens.color.bg.block;

/**
 * A vertical stepper for estate phases. Completed steps are navy with a check,
 * the current step is the single purple accent, upcoming steps recede to muted.
 */
export function PhaseTracker({ steps, testID }: PhaseTrackerProps) {
  return (
    <View style={styles.root} testID={testID}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const isCurrent = step.status === 'current';
        const isComplete = step.status === 'complete';
        const isUpcoming = step.status === 'upcoming';
        const titleStyle: TextStyle[] = [styles.title];
        // Current + complete read at medium weight; upcoming recedes to muted/regular.
        if (isCurrent || isComplete) titleStyle.push(styles.titleMedium);
        if (isUpcoming) titleStyle.push(styles.titleMuted);

        return (
          <View key={i} style={styles.row}>
            {/* Left column: marker + connector */}
            <View style={styles.left}>
              <View style={[styles.marker, { backgroundColor: markerBg(step.status) }]}>
                {step.status === 'complete' ? (
                  <Icon name="Check" size={14} strokeWidth={3} color={tokens.color.fg.onDark} />
                ) : (
                  <Text
                    style={[
                      styles.markerNum,
                      { color: isCurrent ? tokens.color.accent.onAccent : tokens.color.fg.muted },
                    ]}
                  >
                    {i + 1}
                  </Text>
                )}
              </View>
              {!isLast && (
                <View style={[styles.connector, { backgroundColor: connectorColor(step.status) }]} />
              )}
            </View>

            {/* Right column: title + optional sub */}
            <View style={[styles.body, !isLast && styles.bodySpacing]}>
              <Text style={titleStyle}>{step.title}</Text>
              {step.sub ? <Text style={styles.sub}>{step.sub}</Text> : null}
            </View>
          </View>
        );
      })}
    </View>
  );
}

PhaseTracker.displayName = 'PhaseTracker';

const styles = StyleSheet.create({
  root: {
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    gap: 14,
  },
  left: {
    alignItems: 'center',
    width: MARKER,
  },
  marker: {
    width: MARKER,
    height: MARKER,
    borderRadius: MARKER / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerNum: {
    fontFamily: tokens.font.family.sansMedium,
    fontSize: 13,
    lineHeight: 16,
    includeFontPadding: false,
  },
  connector: {
    width: 2,
    flex: 1,
    minHeight: 20,
    marginTop: 4,
  },
  body: {
    flex: 1,
    paddingTop: 3,
  },
  bodySpacing: {
    paddingBottom: 18,
  },
  title: {
    ...(tokens.text.body as TextStyle),
    fontSize: 15,
    color: tokens.color.fg.brand,
  },
  titleMedium: {
    fontFamily: tokens.font.family.sansMedium,
  },
  titleMuted: {
    color: tokens.color.fg.muted,
  },
  sub: {
    ...(tokens.text.small as TextStyle),
    color: tokens.color.fg.muted,
    marginTop: 2,
  },
});
