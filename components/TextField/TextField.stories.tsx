import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { TextField } from './TextField';

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  args: { label: 'Estate name', placeholder: 'e.g. The Chen Estate' },
  argTypes: {
    onChangeText: { action: 'changedText' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rest: Story = {};
export const WithValue: Story = { args: { value: 'The Chen Estate' } };
export const Error: Story = {
  args: {
    label: 'Probate case number',
    value: '2024-PR',
    error: 'Enter a valid case number (e.g. 2024-PR-00831)',
  },
};
export const Disabled: Story = {
  args: { label: 'Filing date', value: 'Locked until the will is filed', disabled: true },
};
export const WithLeftIcon: Story = {
  args: { label: 'Find a task', placeholder: 'Search tasks…', leftIcon: 'Search' },
};
