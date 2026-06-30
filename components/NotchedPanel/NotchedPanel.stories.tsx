import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Text } from 'react-native';
import { NotchedPanel } from './NotchedPanel';

const meta = {
  title: 'Surfaces/NotchedPanel',
  component: NotchedPanel,
  args: {
    notchLabel: 'Your Specialist',
    title: 'One expert, start to finish',
    children: (
      <Text style={{ color: '#FFFFFF' }}>
        A dedicated probate specialist files the will, settles debts, and keeps the
        court on schedule.
      </Text>
    ),
  },
} satisfies Meta<typeof NotchedPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TitleOnly: Story = {
  args: { notchLabel: 'Next up', title: 'File the will', children: undefined },
};
