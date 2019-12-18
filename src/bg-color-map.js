import forEach from '@arr/foreach';
import bgPalette from './bg-palette';
import { named } from './hues';


const bgColorMap = (options = {}) => {
  const bgPaletteEntries = [...bgPalette(options).entries()];
  const namedHueEntries = [...named(options).entries()];

  const mp = new Map();

  forEach(bgPaletteEntries, ([bgName, partial]) => {
    mp.set(
      `bg-${bgName}`,
      partial(),
    );
  });

  forEach(namedHueEntries, ([hueName, hueValue]) => {
    forEach(bgPaletteEntries, ([bgName, partial]) => {
      mp.set(
        `bg-${bgName}-${hueName}`,
        partial(hueValue),
      );
    });
  });

  return mp;
};


export default bgColorMap;
