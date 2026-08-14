import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Symbol } from './Symbol';

const meta = {
  title: 'Foundations/Symbol',
  component: Symbol,
  args: { size: 56, tone: 'navy' },
  argTypes: { tone: { control: 'select', options: ['navy', 'symbol-blue', 'white'] } },
} satisfies Meta<typeof Symbol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navy: Story = {};
export const SymbolBlue: Story = { args: { tone: 'symbol-blue' } };
export const OnNavy: Story = {
  args: { tone: 'white' },
  parameters: { backgrounds: { default: 'navy' } },
};
