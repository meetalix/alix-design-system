import type { StyleProp, TextStyle, TextProps as RNTextProps } from 'react-native';

/**
 * Every role in the Brand Guidelines' type hierarchy (p34), plus the sizes the mobile
 * product needs below it. Choose by ROLE, not by how big it looks — that is the whole
 * point of naming them.
 *
 * Make Way (display serif, one weight only):
 * - `display`   Hero headline or number. One per screen.
 * - `title`     Screen title.
 * - `headline`  Card or section headline.
 * - `numeral`   Figures — the book sets numerals in Make Way, tracking 0%.
 *
 * Beausite Classic (body/UI):
 * - `lead`         Large intro paragraph.
 * - `body`         Default paragraph.
 * - `body-strong`  Emphasis inside body copy.
 * - `secondary`    Supporting copy.
 * - `small`        Meta, captions, timestamps.
 * - `section`      Section header in a list or form.
 * - `eyebrow`      ALL-CAPS label above a headline. See the warning in Text.md.
 * - `button`       CTA label — Title Case.
 * - `note`         Editorial italic aside.
 */
export type TextVariant =
  | 'display'
  | 'title'
  | 'headline'
  | 'numeral'
  | 'lead'
  | 'body'
  | 'body-strong'
  | 'secondary'
  | 'small'
  | 'section'
  | 'eyebrow'
  | 'button'
  | 'note';

/**
 * Text color by intent. Restricted to the pairings the book approves (p41: "Any
 * combinations not shown on this page are not approved for use"), so a component cannot
 * casually invent an unapproved text-on-background combination.
 *
 * - `default`    Almost Black on light. The workhorse.
 * - `secondary`  Working Text on light.
 * - `muted`      Disabled / placeholder / meta.
 * - `brand`      Navy on light.
 * - `action`     Blue — links and actions on light.
 * - `on-dark`    White on navy.
 * - `on-dark-secondary` Light Blue on navy.
 * - `inherit`    Take color from `style`, for the rare case a parent owns it.
 */
export type TextTone =
  | 'default'
  | 'secondary'
  | 'muted'
  | 'brand'
  | 'action'
  | 'on-dark'
  | 'on-dark-secondary'
  | 'inherit';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  variant?: TextVariant;
  tone?: TextTone;
  /** Centers the text. Left-aligned is the default; the book never centers body copy. */
  center?: boolean;
  /**
   * Escape hatch for layout only — margins, alignment, flex. Do NOT pass fontSize,
   * lineHeight, letterSpacing, fontFamily or fontWeight here: those come from the
   * variant, and overriding them is how a codebase ends up with five type scales.
   */
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  testID?: string;
}
