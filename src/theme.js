import bgColorMap from './bg-color-map';
import grayscaleMap from './grayscale-map';
import hslColorMap from './hsl-color-map';
import textColorMap from './text-color-map';
import mapToObject from './map-to-object';


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
    ...mapToObject(bgColorMap(options)),
    ...maybeFullPalette,
  };

  const textColor = {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
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
