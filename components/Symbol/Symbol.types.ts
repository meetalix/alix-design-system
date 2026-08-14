/**
 * The only colors the Symbol may appear in.
 *
 * "Our Symbol should only appear as a single color in Navy, Symbol Blue, or White"
 * — Brand Guidelines p23. Restricting the prop makes the rule unbreakable rather than
 * merely documented.
 */
export type SymbolTone = 'navy' | 'symbol-blue' | 'white';

export interface SymbolProps {
  /** Height in points. Width follows the Symbol's aspect ratio. */
  size?: number;
  tone?: SymbolTone;
  /**
   * Decorative by default — screen readers skip it. Pass a label only when the Symbol
   * is the sole thing identifying Alix on screen.
   */
  accessibilityLabel?: string;
  testID?: string;
}
