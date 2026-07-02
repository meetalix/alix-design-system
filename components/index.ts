/**
 * @alix/design-system — public API.
 *
 * Components are the canonical implementation of the Alix Design System.
 * `tokens` is re-exported for composing UI the kit doesn't cover yet —
 * consume its SEMANTIC groups (color.bg/fg/accent/action/state, text.*,
 * space.*, radius.*, shadow.*), never color.palette.*.
 */

// Tokens + theme helpers
export { tokens, MIN_TOUCH, PRESS_OVERLAY, PRESS_NUDGE, hairline, focusRing } from './theme';
export type { Tokens } from './theme';

// Foundations
export { Icon } from './Icon/Icon';
export type { IconProps, IconName } from './Icon/Icon.types';

// Actions
export { Button } from './Button/Button';
export type { ButtonProps, ButtonVariant } from './Button/Button.types';

// Selection & toggles
export { Switch } from './Switch/Switch';
export type { SwitchProps } from './Switch/Switch.types';
export { Checkbox } from './Checkbox/Checkbox';
export type { CheckboxProps } from './Checkbox/Checkbox.types';
export { Radio } from './Radio/Radio';
export type { RadioProps } from './Radio/Radio.types';
export { SegmentedControl } from './SegmentedControl/SegmentedControl';
export type { SegmentedControlProps, Segment } from './SegmentedControl/SegmentedControl.types';

// Inputs
export { TextField } from './TextField/TextField';
export type { TextFieldProps } from './TextField/TextField.types';

// Labels & status
export { Tag } from './Tag/Tag';
export type { TagProps, TagVariant } from './Tag/Tag.types';
export { StatusDot } from './StatusDot/StatusDot';
export type { StatusDotProps, StatusDotStatus } from './StatusDot/StatusDot.types';

// Surfaces
export { Card } from './Card/Card';
export type { CardProps } from './Card/Card.types';
export { NotchedPanel } from './NotchedPanel/NotchedPanel';
export type { NotchedPanelProps } from './NotchedPanel/NotchedPanel.types';
export { Sheet } from './Sheet/Sheet';
export type { SheetProps } from './Sheet/Sheet.types';

// Navigation
export { ListRow } from './ListRow/ListRow';
export type { ListRowProps } from './ListRow/ListRow.types';

// Progress
export { ProgressRing } from './ProgressRing/ProgressRing';
export type { ProgressRingProps } from './ProgressRing/ProgressRing.types';
export { PhaseTracker } from './PhaseTracker/PhaseTracker';
export type { PhaseTrackerProps, PhaseStep, PhaseStatus } from './PhaseTracker/PhaseTracker.types';

// Patterns
export { DocumentSourceSheet } from './DocumentSourceSheet/DocumentSourceSheet';
export type { DocumentSourceSheetProps, DocumentSource } from './DocumentSourceSheet/DocumentSourceSheet.types';
