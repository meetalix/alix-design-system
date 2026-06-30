import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Selection/Checkbox',
  component: Checkbox,
  args: { checked: false, disabled: false, label: 'File the will with probate court' },
  argTypes: {
    onChange: { action: 'changed' },
  },
  render: (args) => {
    const [checked, setChecked] = React.useState(args.checked);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(next) => {
          setChecked(next);
          args.onChange?.(next);
        }}
      />
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { checked: false } };
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { checked: true, disabled: true, label: 'Notify beneficiaries' } };
