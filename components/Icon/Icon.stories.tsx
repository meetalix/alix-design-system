import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Icon } from './Icon';

const meta = {
  title: 'Foundations/Icon',
  component: Icon,
  args: { name: 'Scale', size: 24 },
  argTypes: {
    name: { control: 'select', options: ['Scale', 'Home', 'Bell', 'ChevronRight'] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {};
export const Home: Story = { args: { name: 'Home' } };
export const Bell: Story = { args: { name: 'Bell', size: 16 } };
export const ChevronRight: Story = { args: { name: 'ChevronRight', size: 20 } };
export const Large: Story = { args: { name: 'Scale', size: 40, color: '#6B5BD2' } };
