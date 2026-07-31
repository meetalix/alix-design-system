import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Sheet } from './Sheet';
import { Button } from '../Button/Button';

const meta = {
  title: 'Surfaces/Sheet',
  component: Sheet,
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <View style={{ padding: 24 }}>
        <Button onPress={() => setOpen(true)}>Open sheet</Button>
        <Sheet visible={open} onClose={() => setOpen(false)} title="Choose source">
          <Text style={{ marginBottom: 16 }}>Any content composes inside a Sheet.</Text>
          <Button variant="secondary" fullWidth onPress={() => setOpen(false)}>Close</Button>
        </Sheet>
      </View>
    );
  },
};
