/**
 * @alix/design-system — package entry point.
 *
 * Re-exports the full public API from the components barrel (components + `tokens`
 * + theme helpers + types). The package ships TypeScript source; consuming apps
 * transpile it through their own bundler (Metro/Babel), which is the norm for
 * React Native component libraries.
 */
export * from './components';
