import forEach from '@arr/foreach';
import textPalette from './text-palette.js';
import { named } from './hues.js';


const textColorMap = (options = {}) => {
  const textPaletteEntries = [...textPalette(options).entries()];
  const namedHueEntries = [...named(options).entries()];

  const mp = new Map();

  forEach(textPaletteEntries, ([textName, partial]) => {
    mp.set(
      textName,
      partial(),
    );
  });

  forEach(namedHueEntries, ([hueName, hueValue]) => {
    forEach(textPaletteEntries, ([textName, partial]) => {
      mp.set(
        `${textName}-${hueName}`,
        partial(hueValue),
      );
    });
  });

  return mp;
};


export default textColorMap;
