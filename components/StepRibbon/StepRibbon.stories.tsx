import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { StepRibbon } from './StepRibbon';

const meta = {
  title: 'Wayfinding/StepRibbon',
  component: StepRibbon,
  args: {
    label: 'Onboarding progress',
    currentIndex: 1,
    steps: [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }],
  },
} satisfies Meta<typeof StepRibbon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The book's example, p63. */
export const ThreeSteps: Story = {};
export const FirstStep: Story = { args: { currentIndex: 0 } };
export const LastStep: Story = { args: { currentIndex: 2 } };
export const RealLabels: Story = {
  args: { currentIndex: 1, steps: [{ label: 'Review' }, { label: 'Questions' }, { label: 'Done' }] },
};
