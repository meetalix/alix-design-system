import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { PhaseTracker } from './PhaseTracker';

const meta = {
  title: 'Progress/PhaseTracker',
  component: PhaseTracker,
  args: {
    steps: [
      { title: 'Open the estate', sub: 'Will filed with probate court', status: 'complete' },
      { title: 'Settle debts & taxes', sub: 'Creditors notified · returns pending', status: 'current' },
      { title: 'Distribute & close', sub: 'Pay beneficiaries and file the final account', status: 'upcoming' },
    ],
  },
} satisfies Meta<typeof PhaseTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
