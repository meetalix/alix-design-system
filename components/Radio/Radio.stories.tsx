import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Radio } from './Radio';

const meta = {
  title: 'Selection/Radio',
  component: Radio,
  args: {
    selected: false,
    disabled: false,
    label: 'Assign to Specialist',
    sublabel: 'A probate expert handles filing end to end',
  },
  argTypes: {
    onSelect: { action: 'selected' },
  },
  render: (args) => {
    const [selected, setSelected] = React.useState(args.selected);
    return (
      <Radio
        {...args}
        selected={selected}
        onSelect={() => {
          setSelected(true);
          args.onSelect?.();
        }}
      />
    );
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = { args: { selected: true } };
export const Unselected: Story = { args: { selected: false } };
export const WithLabelAndSublabel: Story = {
  args: {
    selected: true,
    label: 'Handle it myself',
    sublabel: 'You file the paperwork; Alix guides each step',
  },
};
export const Disabled: Story = { args: { selected: false, disabled: true } };
