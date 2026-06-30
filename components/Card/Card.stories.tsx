import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Text, View } from 'react-native';
import { Card } from './Card';

const meta = {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    padded: true,
    elevated: false,
    children: (
      <View>
        <Text style={{ fontWeight: '600', marginBottom: 4 }}>The Chen Estate</Text>
        <Text>4 tasks open · 2 due this week</Text>
      </View>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Elevated: Story = {
  args: {
    elevated: true,
    children: (
      <View>
        <Text style={{ fontWeight: '600', marginBottom: 4 }}>Your Specialist</Text>
        <Text>One expert handles probate filing start to finish.</Text>
      </View>
    ),
  },
};
export const CustomPadding: Story = {
  args: {
    padded: 28,
    children: <Text>Probate & legal — Phase 3 of 5</Text>,
  },
};
