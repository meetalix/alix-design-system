import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';
import { View } from 'react-native';
import { tokens } from '../theme';
import { Text } from './Text';

const meta = {
  title: 'Foundations/Text',
  component: Text,
  args: { variant: 'body', tone: 'default', children: 'Losing someone leaves behind a long and complex to-do list.' },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display', 'title', 'headline', 'numeral',
        'lead', 'body', 'body-strong', 'secondary', 'small',
        'section', 'eyebrow', 'button', 'note',
      ],
    },
    tone: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'brand', 'action', 'on-dark', 'on-dark-secondary'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {};

/** Make Way — one weight, sentence case, 105–115% line spacing, −2% tracking. */
export const Display: Story = {
  render: () => (
    <View style={{ gap: tokens.space[4] }}>
      <Text variant="display">Losing someone leaves behind a long to-do list.</Text>
      <Text variant="title">Whose estate this is</Text>
      <Text variant="headline">Retirement account funds distributed</Text>
      <Text variant="numeral">$412,000</Text>
    </View>
  ),
};

/** Beausite Classic — the workhorse. Tracking 0%, 125–135% line spacing. */
export const Copy: Story = {
  render: () => (
    <View style={{ gap: tokens.space[4] }}>
      <Text variant="lead">From paperwork and bills to property and taxes.</Text>
      <Text variant="body">Alix handles the full scope of estate settlement with clarity and care.</Text>
      <Text variant="body-strong">Every last wish, handled by experts.</Text>
      <Text variant="secondary" tone="secondary">The things you expect and the things you don’t.</Text>
      <Text variant="small" tone="muted">Updated Sep 2025</Text>
    </View>
  ),
};

/** Eyebrow above a headline — the ONLY place all-caps belongs. */
export const EyebrowInContext: Story = {
  render: () => (
    <View style={{ gap: tokens.space[1] }}>
      <Text variant="eyebrow" tone="secondary">Documents</Text>
      <Text variant="headline">Death certificates received</Text>
      <Text variant="secondary" tone="secondary">Sep 2025</Text>
    </View>
  ),
};

/** Approved pairings only (Brand Guidelines p41). */
export const Tones: Story = {
  render: () => (
    <View style={{ gap: tokens.space[3] }}>
      <View style={{ gap: tokens.space[2] }}>
        <Text variant="body">Default — Almost Black on light</Text>
        <Text variant="body" tone="secondary">Secondary — Working Text</Text>
        <Text variant="body" tone="muted">Muted — meta and placeholder</Text>
        <Text variant="body" tone="brand">Brand — Navy</Text>
        <Text variant="body" tone="action">Action — Blue, links</Text>
      </View>
      <View style={{ backgroundColor: tokens.color.bg.dark, padding: tokens.space[4], gap: tokens.space[2] }}>
        <Text variant="body" tone="on-dark">On dark — White on Navy</Text>
        <Text variant="body" tone="on-dark-secondary">On dark secondary — Light Blue</Text>
      </View>
    </View>
  ),
};
