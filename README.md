# tailwindcss-inverted-radius

Tailwind CSS v4 utilities for inverted (concave) rounded corners on elements.

Forked from [@butterfail/tailwindcss-inverted-radius](https://github.com/ggcls/tailwindcss-inverted-radius) with a CSS-first v4 implementation.

## Installation

```sh
npm install tailwindcss-inverted-radius
```

## Usage

Import the package in your Tailwind CSS entry file:

```css
@import 'tailwindcss';
@import 'tailwindcss-inverted-radius';
```

Combine `inv-rad` with a size utility to apply inverted corners:

```html
<div class="inv-rad inv-rad-4">
  <!-- ... -->
</div>
```

Use `inv-rad-0` to remove inverted radius at a breakpoint:

```html
<div class="inv-rad inv-rad-4 lg:inv-rad-0">
  <!-- ... -->
</div>
```

### Corner-specific utilities

| Position     | Class              |
| ------------ | ------------------ |
| `top`        | `.inv-rad-t-{n}`   |
| `right`      | `.inv-rad-r-{n}`   |
| `bottom`     | `.inv-rad-b-{n}`   |
| `left`       | `.inv-rad-l-{n}`   |
| `top right`  | `.inv-rad-t-r-{n}` |
| `top left`   | `.inv-rad-t-l-{n}` |
| `bottom right` | `.inv-rad-b-r-{n}` |
| `bottom left`  | `.inv-rad-b-l-{n}` |

Size values use your Tailwind spacing scale (`1`, `2`, `3`, `4`, `2.5`, `px`, etc.).

### Pseudo-elements

Utilities work with variant prefixes such as `after:`:

```html
<div class="after:inv-rad after:inv-rad-t-r-3 after:absolute after:h-6 after:w-6"></div>
```

## Configuration

In v4, sizes resolve from the default spacing scale. Extend spacing in your CSS to add custom values:

```css
@theme {
  --spacing-4_5: 1.125rem;
}
```

Then use `inv-rad-4.5`, `inv-rad-t-r-4.5`, and so on.

## Compatibility

These utilities use CSS mask properties. Test against your target browsers.

| CSS Property     | Reference |
| ---------------- | --------- |
| `mask-image`     | [Can I use](https://caniuse.com/?search=mask-image) |
| `mask-position`  | [Can I use](https://caniuse.com/?search=mask-position) |
| `mask-mode`      | [Can I use](https://caniuse.com/?search=mask-mode) |
| `mask-origin`    | [Can I use](https://caniuse.com/?search=mask-origin) |
| `mask-clip`      | [Can I use](https://caniuse.com/?search=mask-clip) |
| `mask-composite` | [Can I use](https://caniuse.com/?search=mask-composite) |
| `mask-repeat`    | [Can I use](https://caniuse.com/?search=mask-repeat) |
| `mask-size`      | [Can I use](https://caniuse.com/?search=mask-size) |

## Migrating from v3

| v3 (`@butterfail/tailwindcss-inverted-radius`) | v4 (`tailwindcss-inverted-radius`) |
| --- | --- |
| `plugins: [require('...')]` in `tailwind.config.js` | `@import 'tailwindcss-inverted-radius'` in CSS |
| `theme.extend.invRad` | `@theme { --spacing-*: ... }` |

Class names are unchanged.

## License

MIT. See [LICENSE](./LICENSE).
