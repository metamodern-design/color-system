import forEach from '@arr/foreach';
import bgPalette from './bg-palette.js';
import { named } from './hues.js';


const bgColorMap = (options = {}) => {
  const bgPaletteEntries = [...bgPalette(options).entries()];
  const namedHueEntries = [...named(options).entries()];

  const mp = new Map();

  forEach(bgPaletteEntries, ([bgName, partial]) => {
    mp.set(
      bgName,
      partial(),
    );
  });

  forEach(namedHueEntries, ([hueName, hueValue]) => {
    forEach(bgPaletteEntries, ([bgName, partial]) => {
      mp.set(
        `${bgName}-${hueName}`,
        partial(hueValue),
      );
    });
  });

  return mp;
};


export default bgColorMap;
