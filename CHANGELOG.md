# Changelog

## 1.0.0

### Added

- Tailwind CSS v4 support via CSS `@utility` directives
- Functional utilities that resolve sizes from the Tailwind spacing scale
- npm package exports for CSS `@import`

### Changed

- **Breaking:** Replaced the v3 JavaScript plugin API with a CSS-first package
- Import with `@import 'tailwindcss-inverted-radius'` instead of `plugins: [...]`
- Custom `invRad` theme key replaced by standard `--spacing-*` theme variables

### Credits

Forked from [@butterfail/tailwindcss-inverted-radius](https://github.com/ggcls/tailwindcss-inverted-radius) by ggcls.
