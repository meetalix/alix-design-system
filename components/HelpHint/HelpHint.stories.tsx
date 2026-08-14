import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { HelpHint } from './HelpHint';

const meta = {
  title: 'Foundations/HelpHint',
  component: HelpHint,
  args: {
    title: 'About transfer-on-death',
    body: "Some accounts pass straight to a named person and skip probate. If you're not sure, leave it — your Settlement Specialist will confirm it with the bank.",
  },
} satisfies Meta<typeof HelpHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Occupancy: Story = {
  args: {
    title: 'About occupancy',
    body: 'Who lives in the home now changes how it can be sold and when. If it’s empty, say so — that’s the most common answer and it isn’t a problem.',
  },
};
