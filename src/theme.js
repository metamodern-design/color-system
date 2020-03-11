import bgColorMap from './bg-color-map.js';
import grayscaleMap from './grayscale-map.js';
import hslColorMap from './hsl-color-map.js';
import textColorMap from './text-color-map.js';
import mapToObject from './map-to-object.js';


const theme = (options = {}) => {
  const grayscaleObj = mapToObject(grayscaleMap(options.shades));
  const hslColorObj = mapToObject(hslColorMap(options));

  const colors = {
    ...grayscaleObj,
    ...hslColorObj,
  };

  const maybeFullPalette = (
    options.includeFullPalette
      ? colors
      : {}
  );

  const backgroundColor = {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    'near-black': 'hsl(0,0%,12%)',
    'near-white': 'hsl(0,0%,97%)',
    ...mapToObject(bgColorMap(options)),
    ...maybeFullPalette,
  };

  const textColor = {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    'near-black': 'hsl(0,0%,12%)',
    'near-white': 'hsl(0,0%,97%)',
    ...mapToObject(textColorMap(options)),
    ...maybeFullPalette,
  };

  const borderColor = {
    default: options.defaultBorderColor || 'transparent',
    ...textColor,
  };

  return {
    colors,
    borderColor,
    backgroundColor,
    textColor,
  };
};


export default theme;
