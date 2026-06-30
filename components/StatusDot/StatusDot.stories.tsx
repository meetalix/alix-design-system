import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { StatusDot } from './StatusDot';

const meta = {
  title: 'Labels & status/StatusDot',
  component: StatusDot,
  args: { status: 'success', label: 'Will filed' },
  argTypes: {
    status: { control: 'select', options: ['success', 'warning', 'error', 'info', 'neutral'] },
  },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = { args: { status: 'success', label: 'Will filed' } };
export const Warning: Story = { args: { status: 'warning', label: 'Due this week' } };
export const Error: Story = { args: { status: 'error', label: 'Deadline missed' } };
export const Info: Story = { args: { status: 'info', label: 'Awaiting court' } };
export const Neutral: Story = { args: { status: 'neutral', label: 'Not started' } };
