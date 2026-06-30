import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react-native-web-vite';
import { tokens } from '../components/theme';

// Load the licensed Fatype fonts and bind them to the exact RN family names the
// type tokens reference (e.g. "BeausiteClassic-Medium"), so react-native-web
// renders the real typefaces.
import MakeWay from '../assets/fonts/MakeWay-Regular.otf?url';
import MakeWayApp from '../assets/fonts/MakeWayApp-Regular.otf?url';
import BeausiteRegular from '../assets/fonts/BeausiteClassic-Regular.otf?url';
import BeausiteMedium from '../assets/fonts/BeausiteClassic-Medium.otf?url';
import BeausiteSemibold from '../assets/fonts/BeausiteClassic-Semibold.otf?url';
import BeausiteAppRegular from '../assets/fonts/BeausiteClassicApp-Regular.otf?url';
import BeausiteAppMedium from '../assets/fonts/BeausiteClassicApp-Medium.otf?url';
import BeausiteAppSemibold from '../assets/fonts/BeausiteClassicApp-Semibold.otf?url';

const face = (family: string, url: string) =>
  `@font-face{font-family:'${family}';src:url(${url}) format('opentype');font-display:swap;}`;

const fontCss = [
  face('MakeWay-Regular', MakeWay),
  face('MakeWayApp-Regular', MakeWayApp),
  face('BeausiteClassic-Regular', BeausiteRegular),
  face('BeausiteClassic-Medium', BeausiteMedium),
  face('BeausiteClassic-Semibold', BeausiteSemibold),
  face('BeausiteClassicApp-Regular', BeausiteAppRegular),
  face('BeausiteClassicApp-Medium', BeausiteAppMedium),
  face('BeausiteClassicApp-Semibold', BeausiteAppSemibold),
].join('\n');

if (typeof document !== 'undefined' && !document.getElementById('alix-fonts')) {
  const el = document.createElement('style');
  el.id = 'alix-fonts';
  el.textContent = fontCss;
  document.head.appendChild(el);
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
