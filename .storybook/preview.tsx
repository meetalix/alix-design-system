import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react-native-web-vite';
import { tokens } from '../components/theme';

// Load the licensed Fatype fonts and bind them to the exact RN family names the
// type tokens reference (e.g. "BeausiteClassic-Medium") — EXCEPT when built with
// VITE_ALIX_FONTS=off (the public Pages build), where this branch is statically
// dead-code-eliminated so the licensed OTFs are never published. Online the site
// falls back to system fonts; locally it shows the real typefaces.
if (import.meta.env.VITE_ALIX_FONTS !== 'off') {
  import('./fonts').then((m) => m.injectFonts());
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    options: {
      storySort: {
        order: ['Foundations', 'Actions', 'Selection', 'Inputs', 'Labels & status', 'Surfaces', 'Navigation', 'Progress'],
      },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: tokens.space[5], backgroundColor: tokens.color.bg.alt, minWidth: 360 }}>
        <Story />
      </View>
    ),
  ],
};

export default preview;
