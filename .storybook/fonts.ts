// Licensed Fatype fonts for local Storybook. This module is dynamically imported
// ONLY when fonts are enabled (see preview.tsx) — building with VITE_ALIX_FONTS=off
// statically eliminates the import so the OTF files are never bundled into the
// public build. Keeps the licensed typefaces out of the world-readable site.
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

export function injectFonts() {
  if (typeof document !== 'undefined' && !document.getElementById('alix-fonts')) {
    const el = document.createElement('style');
    el.id = 'alix-fonts';
    el.textContent = fontCss;
    document.head.appendChild(el);
  }
}
