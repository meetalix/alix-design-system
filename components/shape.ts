/**
 * Brand geometry helpers.
 *
 * Most of the system is fixed tokens, but the Brand Guidelines define two forms
 * PROPORTIONALLY — a container's corner radius is "3% of the shortest side" (p57) and a
 * card's margin is "10% of the shortest size" (p60). A fixed radius scale cannot express
 * that: the same token would be too round on a chip and too square on a full-bleed panel.
 * These helpers compute the value from the element's own size, so the ratio survives.
 *
 * The sheer is the other half. "Inspired by the lines of the Symbol, we've created
 * sheered rectangles to be used throughout the brand" (p63) — the book applies it to
 * timeline steps, category tabs, on/off controls and CTAs. It is the most recognizable
 * Alix UI form, and a plain rounded rectangle is not a substitute for it.
 *
 * All values come from tokens/shape.json. Nothing here hard-codes geometry.
 */
import { tokens } from './theme';

const shape = tokens.shape;

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

/**
 * Corner radius for a folder/tab container — 3% of its shortest side, clamped so very
 * small panels don't read as square and very large ones don't read as pills.
 *
 * @param width  container width in points
 * @param height container height in points
 */
export const containerRadius = (width: number, height: number): number =>
  clamp(
    Math.round(Math.min(width, height) * shape.container.radiusRatio),
    shape.container.radiusMin,
    shape.container.radiusMax,
  );

/**
 * Corner radius for a Card. Rounder than a container at the same size — that difference
 * is what tells the two apart at a glance, so don't collapse them into one value.
 */
export const cardRadius = (width: number, height: number): number =>
  clamp(
    Math.round(Math.min(width, height) * shape.card.radiusRatio),
    shape.card.radiusMin,
    shape.card.radiusMax,
  );

/**
 * Inner margin for a Card — 10% of the shortest side, or 18% for the "extreme cases" the
 * book allows (p60), which in practice means cards small enough that 10% leaves type
 * touching the edge.
 */
export const cardMargin = (width: number, height: number, tight = false): number =>
  Math.round(Math.min(width, height) * (tight ? shape.card.marginRatioTight : shape.card.marginRatio));

/** Width of a container's tab, from the book's 12-column vertical grid (p57). */
export const tabWidth = (containerWidth: number, columns: number = shape.container.tabColumns): number =>
  Math.round((containerWidth / shape.container.gridColumns) * columns);

/** One row of a container's 16-row horizontal grid (p57). */
export const gridRow = (containerHeight: number): number =>
  containerHeight / shape.container.gridRows;

/**
 * Horizontal offset the sheered edge introduces over a given height.
 *
 * A sheer of `angle` degrees across a control of `height` displaces the top edge by
 * `height * tan(angle)`. Chips use this to interlock: each one is inset by this amount
 * so the ribbon reads continuously instead of as separate tiles with gaps.
 */
export const sheerInset = (height: number, angleDeg: number = shape.sheer.angle): number =>
  Math.round(height * Math.tan((angleDeg * Math.PI) / 180));

/**
 * SVG path for a sheered rectangle.
 *
 * `lean` controls which vertical edges are sheered:
 *   'right'  leading edge square, trailing edge sheered — the last chip in a ribbon
 *   'left'   leading edge sheered, trailing square — the first chip
 *   'both'   both edges sheered — a middle chip
 *   'none'   a plain rect, for completeness
 *
 * Corners stay square here on purpose: the book's wayfinding shapes have crisp points
 * where the sheer meets the horizontal, and rounding them loses the Symbol reference.
 */
export const sheerPath = (
  width: number,
  height: number,
  lean: 'left' | 'right' | 'both' | 'none' = 'right',
  angleDeg: number = shape.sheer.angle,
): string => {
  const d = sheerInset(height, angleDeg);
  const leadingSheered = lean === 'left' || lean === 'both';
  const trailingSheered = lean === 'right' || lean === 'both';

  // Only ONE corner of each vertical edge moves. A sheered edge leans forward: its top
  // sits ahead of its bottom. A square edge has both corners at the same x.
  //
  // The earlier version also pulled the trailing TOP back to `width - d` when the edge
  // was square, which sheered both sides at once and rendered the last chip in a ribbon
  // as a trapezoid instead of a flag. Ian caught it on the Basics/Property rail.
  const topLeft = leadingSheered ? d : 0;
  const bottomLeft = 0;
  const topRight = width;
  const bottomRight = trailingSheered ? width - d : width;

  return `M ${topLeft} 0 L ${topRight} 0 L ${bottomRight} ${height} L ${bottomLeft} ${height} Z`;
};

/** Every geometry value, for components that need the raw ratios. */
export const geometry = shape;
