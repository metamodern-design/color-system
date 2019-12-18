import forEach from '@arr/foreach';
import textPalette from './text-palette';
import { named } from './hues';


const textColorMap = (options = {}) => {
  const textPaletteEntries = [...textPalette(options).entries()];
  const namedHueEntries = [...named(options).entries()];

  let mp = new Map();
  
  forEach(textPaletteEntries, ([textName, partial]) => {
    mp.set(
      `text-${textName}`,
      partial(),
    );
  });

  forEach(namedHueEntries, ([hueName, hueValue]) => {
    forEach(textPaletteEntries, ([textName, partial]) => {
      mp.set(
        `text-${textName}-${hueName}`,
        partial(hueValue),
      );
    });
  });

  return mp;
};


export default textColorMap;
