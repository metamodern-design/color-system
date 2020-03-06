# @metamodern/color-system [![Build Status](https://travis-ci.com/metamodern-design/color-system.svg?branch=master)](https://travis-ci.com/metamodern-design/color-system) [![npm (scoped)](https://img.shields.io/npm/v/@metamodern/color-system)](https://www.npmjs.com/package/@metamodern/color-system) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@metamodern/color-system)

*A configurable HSL color system for use with [TailwindCSS](https://tailwindcss.com/)*


## What

With default options, this package generates **130 named colors** that may be added to your Tailwind configuration to generate CSS utility classes. Additionally, the package generates a full palette of **2416 numeric HSL colors** that can be referenced from the `theme.colors` key of your Tailwind configuration.

## Why

Identity and branding considerations demand unique color palettes for company websites and digital products. Current browsers support upwards of 3.5 million unique values in the HSL color space. Despite this, in order to avoid large bundle sizes, most UI toolkits include only a small number of default colors, typically specified by a named hue and a light/dark value scale. This means that in order to use a brand-specific colors, designers often need to create a custom color configuration for each project, in addition to defining styles as usual for layout and components.

With Tailwind and PostCSS, it is possible to generate a large number of CSS classes and [only include the ones you actually use](https://tailwindcss.com/docs/controlling-file-size#removing-unused-css) as part of the resulting CSS bundle. Taking advantage of this feature, *@metamodern/color-system* defines a full range of hues, shades, and tones that allow for complete color customization via CSS classes without an additional configuration step. 

## Named Colors

Named colors are ready to use out of the box with the Tailwind prefix `bg-`, `text-`, or `border-`. Each color name combines a shade/tone variation and a hue, as follows: 
    
- `lighter-red => h0-s25-l92`
- `light-red => h0-s40-l87`
- `medium-light-red => h0-s55-l82`
- `softer-red => h0-s55-l72`
- `soft-red => h0-s70-l67`
- `bright-red => h0-s85-l62`
- `medium-red => h0-s70-l47`
- `medium-dark-red => h0-s40-l27`
- `dark-red => h0-s25-l17`
- `darker-red => h0-s10-l12`

Substitute any of the following named hues for "red" in the last portion of the class name:

- `red-orange => h30`
- `orange => h45`
- `yellow-orange => h55`
- `yellow => h60`
- `yellow-green => h90`
- `green => h150`
- `blue-green => h210`
- `blue => h240`
- `blue-purple => h255`
- `purple => h270`
- `red-purple => h300`

Leaving out the hue name, as in `.bg-medium-light`, gives a shade of gray (`.gray-72`).

The color names `black` (`#000`), `white` (`#FFF`), and `transparent` are also included in the configuration.


## HSL Reference Colors

Generated HSL reference colors use combinations of hue (H), saturation (S), and lightness (L) values in the following format: `h30-s55-l62`. Grayscale values use the format `gray-62`, which includes only the lightness value, omitting the `l`.

With default options, HSL combinations are generated from the following value ranges:

- **Hue**: 0, 15, 30, 45, 55, 60, 65, 75, 90, 105, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345
- **Saturation**: 10, 25, 40, 55, 70, 85
- **Lightness**: 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82, 87, 92

The default ranges for saturation and lightness take into account how colors are rendered on modern screens to avoid tones that are too bright and shades that are too light or dark.

## Basic Usage with Tailwind

The following example shows how to include *@metamodern/color-system* in a minimum Tailwind configuration file:

```js
// tailwind.config.js

const colorSystem = require('@metamodern/color-system');

module.exports = {
  theme: {
    ...colorSystem().theme,
    // additional customization
  },
};

```
