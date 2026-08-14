import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { CtaButton } from './CtaButton';

const meta = {
  title: 'Actions/CtaButton',
  component: CtaButton,
  args: { children: 'Talk To An Expert' },
  argTypes: { onPress: { action: 'pressed' } },
} satisfies Meta<typeof CtaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The book's hero CTA, p63. */
export const Default: Story = {};
export const NoArrow: Story = { args: { hideArrow: true } };
export const Disabled: Story = { args: { disabled: true } };
