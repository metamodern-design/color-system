# @metamodern/color-system [![Build Status](https://travis-ci.com/metamodern-design/color-system.svg?branch=master)](https://travis-ci.com/metamodern-design/color-system) [![npm (scoped)](https://img.shields.io/npm/v/@metamodern/color-system)](https://www.npmjs.com/package/@metamodern/color-system) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@metamodern/color-system)

*A configurable HSL color system for use with [TailwindCSS](https://tailwindcss.com/)*


## What

With default options, this package generates 2416 unique HSL color values that may be added to the `theme.colors` key of a Tailwind configuration to generate CSS classes. 

## Why

Identity and branding considerations demand unique color palettes for company websites and digital products. Current browsers support upwards of 3.5 million unique values in the HSL color space. Despite this, in order to avoid large bundle sizes, most UI toolkits include only a small number of default colors, typically specified by a named hue and a light/dark value scale. This means that in order to use a brand-specific colors, designers often need to create a custom color configuration for each project, in addition to defining styles as usual for layout and components.

With Tailwind and PostCSS, it is possible to generate a large number of CSS classes and only include the ones you actually use as part of the resulting CSS bundle. Taking advantage of this feature, *@metamodern/color-system* defines a full range of hues, shades, and tones that allow for complete color customization via CSS classes without an additional configuration step. Class names use the numeric HSL system that is familar to designers, but only specific HSL value combinations are generated, as detailed below. The default ranges for saturation and lightness take into account how colors are rendered on modern screens to avoid tones that are too bright and shades that are too light or dark.

## Color Names

Generated class names use combinations of hue (H), saturation (S), and lightness (L) values in the following format: `h30-s55-l62`. By default, Tailwind adds a prefix to indicate background color (`bg-h30-s55-l62`), text color (`text-h30-s55-l62`), or border color (`border-h30-s55-l62`). 

Grayscale values use the format `gray-62`, which includes only the lightness value, omitting the "l".

With default options, HSL combinations are generated from the following value ranges:

- **Hue**: 0, 15, 30, 45, 55, 60, 65, 75, 105, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345
- **Saturation**: 10, 25, 40, 55, 70, 85
- **Lightness**: 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82, 87

The color names "black" (`#000`), "white" (`#FFF`), and "transparent" are also included in the configuration. 

## Basic Usage with Tailwind

The following example shows how to include *@metamodern/color-system* in a minimum Tailwind configuration file:

```js
// tailwind.config.js

const colorSystem = require('@metamodern/color-system');

module.exports = {
  theme: {
    colors: colorSystem().theme,
  },
};

```
