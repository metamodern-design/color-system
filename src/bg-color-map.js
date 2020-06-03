import bgPalette from './bg-palette.js';
import { named } from './hues.js';


const bgColorMap = (options = {}) => {
  const _bgPalette = bgPalette(options);
  const _named = named(options);

  const mp = new Map();

  _bgPalette.forEach(
    ([bgName, partial]) => { mp.set(bgName, partial()); },
  );

  _named.forEach(
    ([hueName, hueValue]) => {
      _bgPalette.forEach(([bgName, partial]) => {
        mp.set(`${bgName}-${hueName}`, partial(hueValue));
      });
    },
  );

  return mp;
};


export default bgColorMap;
