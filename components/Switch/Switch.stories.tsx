import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Switch } from './Switch';

const meta = {
  title: 'Selection/Switch',
  component: Switch,
  args: { value: false, disabled: false },
  argTypes: {
    onValueChange: { action: 'valueChanged' },
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <Switch
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next);
          args.onValueChange?.(next);
        }}
      />
    );
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = { args: { value: true } };
export const Off: Story = { args: { value: false } };
export const Disabled: Story = { args: { value: true, disabled: true } };
