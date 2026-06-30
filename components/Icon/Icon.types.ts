import type { icons } from 'lucide-react-native';

/** Any Lucide icon name in PascalCase, e.g. "Scale", "Home", "ChevronRight". */
export type IconName = keyof typeof icons;

export interface IconProps {
  /** Lucide icon name. The brand wheat/laurel Symbol is NOT in this set — it is brand art, never a functional icon. */
  name: IconName;
  /** Pixel size (square). Default 20 (inline). Use 24 for nav, 16 for meta. */
  size?: number;
  /** Stroke color. Defaults to navy (color.fg.brand). */
  color?: string;
  /** Stroke width. Defaults to 1.75 — the Alix line weight. */
  strokeWidth?: number;
}
