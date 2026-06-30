import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { SegmentedControl } from './SegmentedControl';

const segments = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Done' },
];

const meta = {
  title: 'Selection/SegmentedControl',
  component: SegmentedControl,
  args: { segments, value: 'all' },
  argTypes: {
    onChange: { action: 'changed' },
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <SegmentedControl
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    );
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ActiveSelected: Story = { args: { value: 'active' } };
export const DoneSelected: Story = { args: { value: 'done' } };
