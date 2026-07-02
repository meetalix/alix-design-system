import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { DocumentSourceSheet } from './DocumentSourceSheet';
import { Button } from '../Button/Button';

const meta = {
  title: 'Patterns/DocumentSourceSheet',
  component: DocumentSourceSheet,
} satisfies Meta<typeof DocumentSourceSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [picked, setPicked] = useState('—');
    return (
      <View style={{ padding: 24, gap: 12 }}>
        <Button onPress={() => setOpen(true)}>Add a file</Button>
        <Text>Last picked: {picked}</Text>
        <DocumentSourceSheet
          visible={open}
          onClose={() => setOpen(false)}
          onSelect={(source) => {
            setPicked(source);
            setOpen(false);
          }}
        />
      </View>
    );
  },
};
