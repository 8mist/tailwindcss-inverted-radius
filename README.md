# @butterfail/tailwindcss-inverted-radius

A plugin for Tailwind CSS v3.2+ that provides utilities to create inverted rounded corners for elements.

## Installation

Install the plugin from npm:

```sh
npm install @butterfail/tailwindcss-inverted-radius
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@butterfail/tailwindcss-inverted-radius'),
    // ...
  ],
}
```

## Usage

The plugin provides utility classes to create inverted rounded corners for elements.

It generates classes for specifying the size of the rounded corners individually for each corner.

Combine the `inv-rad` and `inv-rad-{n}` classes to specify the inverted radius for an element:

```html
<div class="inv-rad inv-rad-4">
  <!-- ... -->
</div>
```

Use `inv-rad-0` to remove any inverted radius behavior:

```html
<div class="inv-rad inv-rad-4 lg:inv-rad-0">
  <!-- ... -->
</div>
```

You can select the specific corner sizes by adding `inv-rad-{corner-position}-{n}`.

The following position corner values:

| Name           | Class              |
| -------------- | ------------------ |
| `top`          | `.inv-rad-t-{n}`   |
| `right`        | `.inv-rad-r-{n}`   |
| `bottom`       | `.inv-rad-b-{n}`   |
| `left`         | `.inv-rad-l-{n}`   |
| `top right`    | `.inv-rad-t-r-{n}` |
| `top left`     | `.inv-rad-t-l-{n}` |
| `bottom right` | `.inv-rad-b-r-{n}` |
| `bottom left`  | `.inv-rad-b-l-{n}` |

## Compatibility

The plugin utilizes CSS mask properties to create inverted rounded corners.

While this approach is widely supported, it's always a good practice to test for compatibility with your target browsers.

| CSS Property                                                   | Reference |
| -------------------------------------------------------------- | --------- |
| ["mask-image"](https://caniuse.com/?search=mask-image)         | CanIUse   |
| ["mask-position"](https://caniuse.com/?search=mask-position)   | CanIUse   |
| ["mask-mode"](https://caniuse.com/?search=mask-mode)           | CanIUse   |
| ["mask-origin"](https://caniuse.com/?search=mask-origin)       | CanIUse   |
| ["mask-clip"](https://caniuse.com/?search=mask-clip)           | CanIUse   |
| ["mask-composite"](https://caniuse.com/?search=mask-composite) | CanIUse   |
| ["mask-repeat"](https://caniuse.com/?search=mask-repeat)       | CanIUse   |
| ["mask-size"](https://caniuse.com/?search=mask-size)           | CanIUse   |

## Configuration

By default, we ship with the [tailwind's spacing](https://tailwindcss.com/docs/customizing-spacing) configuration.

You can configure which values are available for this plugin under the `invRad` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      invRad: {
        4.5: '1.125rem',
      },
    },
  },
}
```

## License

This plugin is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
