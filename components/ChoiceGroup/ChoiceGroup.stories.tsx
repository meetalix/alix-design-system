import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { ChoiceGroup } from './ChoiceGroup';

const meta = {
  title: 'Forms/ChoiceGroup',
  component: ChoiceGroup,
  args: {
    label: 'Is there a surviving spouse?',
    value: 'yes',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'unsure', label: 'Not sure' },
    ],
  },
  argTypes: { onChange: { action: 'changed' }, layout: { control: 'select', options: ['wrap', 'stack'] } },
} satisfies Meta<typeof ChoiceGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YesNo: Story = {};
export const Unanswered: Story = { args: { value: undefined } };

/** Six account types — the real onboarding case. */
export const ManyOptions: Story = {
  args: {
    label: 'What kind of account is it?',
    value: 'Retirement',
    options: [
      { value: 'Checking', label: 'Checking' },
      { value: 'Savings', label: 'Savings' },
      { value: 'Retirement', label: 'IRA or 401(k)' },
      { value: 'Brokerage', label: 'Brokerage or stocks' },
      { value: 'PensionAnnuity', label: 'Pension or annuity' },
      { value: 'LifeInsurance', label: 'Life insurance' },
      { value: 'Other', label: 'Something else' },
    ],
  },
};

/** Stacked, with hints — when labels need a clarifier. */
export const Stacked: Story = {
  args: {
    layout: 'stack',
    label: 'Who’s living there now?',
    value: 'vacant',
    options: [
      { value: 'family', label: 'A family member', hint: 'Someone related to the deceased' },
      { value: 'tenant', label: 'A tenant', hint: 'Paying rent under a lease' },
      { value: 'vacant', label: 'Nobody', hint: 'The home is empty' },
    ],
  },
};
