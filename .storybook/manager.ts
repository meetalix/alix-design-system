import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Alix Design System',
    brandUrl: 'https://github.com/meetalix/alix-design-system',
    colorPrimary: '#0C2553', // navy
    colorSecondary: '#1170DB', // action blue
  }),
});
