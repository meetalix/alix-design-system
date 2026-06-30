/**
 * The single import surface every Alix component uses to reach the design tokens.
 *
 * `tokens` is GENERATED from tokens/*.json by the Style Dictionary build
 * (platform/native/tokens.ts) — it is the runtime source of truth. Components
 * consume the SEMANTIC groups (color.bg, color.fg, color.accent, color.action,
 * color.state, text.*, space.*, radius.*, shadow.*) — never color.palette.* directly.
 */
import { tokens } from '../platform/native/tokens';

export { tokens };
export type { Tokens } from '../platform/native/tokens';

/** Minimum touch target — every interactive component honors this (≥44pt). */
export const MIN_TOUCH = 44;

/**
 * Press affordance. The system says "press darkens + nudges 1px." On fill
 * variants we lay this translucent ink over the surface to darken it generically
 * (works on navy, purple, etc.) rather than hard-coding a per-color pressed shade.
 */
export const PRESS_OVERLAY = 'rgba(0,0,0,0.14)';
export const PRESS_NUDGE = 1;

/** The standard 1px hairline border, ready to spread into a style. */
export const hairline = {
  borderWidth: 1,
  borderColor: tokens.color.border.hairline,
} as const;

/** Focus ring used by inputs — 3px soft halo in the given color at 16% alpha. */
export const focusRing = (color: string) => ({
  borderColor: color,
  shadowColor: color,
  shadowOpacity: 0.16,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 0 },
  elevation: 0,
});
