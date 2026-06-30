import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { ProgressRing } from './ProgressRing';

const meta = {
  title: 'Progress/ProgressRing',
  component: ProgressRing,
  args: { progress: 0.62, caption: 'Settled' },
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NearlyDone: Story = { args: { progress: 0.92, caption: 'Settled' } };
export const Small: Story = { args: { progress: 0.62, caption: 'Settled', size: 72, strokeWidth: 7 } };
