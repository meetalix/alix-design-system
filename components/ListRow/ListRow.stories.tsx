import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { View } from 'react-native';
import { ListRow } from './ListRow';

const meta = {
  title: 'Navigation/ListRow',
  component: ListRow,
  args: {
    icon: 'Scale',
    title: 'Probate & legal',
    subtitle: '4 tasks · 2 due this week',
  },
  argTypes: {
    onPress: { action: 'pressed' },
  },
} satisfies Meta<typeof ListRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithTrailingText: Story = {
  args: { icon: 'Scale', title: 'Probate & legal', subtitle: 'In progress', trailingText: 'Phase 3' },
};
export const Stacked: Story = {
  render: () => (
    <View>
      <ListRow icon="Scale" title="Probate & legal" subtitle="4 tasks · 2 due this week" divider />
      <ListRow icon="Home" title="Real estate" subtitle="Appraisal scheduled" divider />
      <ListRow icon="Bell" title="Notify beneficiaries" subtitle="3 of 5 contacted" />
    </View>
  ),
};
