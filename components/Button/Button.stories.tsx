import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Button } from './Button';

const meta = {
  title: 'Actions/Button',
  component: Button,
  args: { children: 'Approve & file', variant: 'primary', disabled: false, fullWidth: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'accent', 'link'] },
    onPress: { action: 'pressed' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Not now' } };
export const Accent: Story = { args: { variant: 'accent', children: 'Assign to Specialist' } };
export const Link: Story = { args: { variant: 'link', children: 'View details', rightIcon: 'ArrowRight' } };
export const WithIcon: Story = { args: { leftIcon: 'Check', children: 'Approve & file' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
