import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Tag } from './Tag';

const meta = {
  title: 'Labels & status/Tag',
  component: Tag,
  args: { label: 'Probate & legal', variant: 'neutral' },
  argTypes: {
    variant: { control: 'select', options: ['accent', 'info', 'solid', 'neutral', 'outline'] },
    onRemove: { action: 'removed' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = { args: { variant: 'accent', label: 'Needs review' } };
export const Info: Story = { args: { variant: 'info', label: 'Phase 3' } };
export const Solid: Story = { args: { variant: 'solid', label: 'Filed' } };
export const Neutral: Story = { args: { variant: 'neutral', label: 'Probate & legal' } };
export const Outline: Story = { args: { variant: 'outline', label: 'Optional' } };
export const Removable: Story = {
  args: { variant: 'neutral', label: 'Real estate', onRemove: () => {} },
};
