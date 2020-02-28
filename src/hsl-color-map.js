import forEach from '@arr/foreach';
import hues from './hues.js';
import shades from './shades.js';
import tones from './tones.js';


const hslColorMap = (options = {}) => {
  const shadeLevels = shades(options.shades);
  const toneLevels = tones(options.tones);
  const hueValues = hues(options.hues);

  const mp = new Map();

  forEach(shadeLevels, (l) => {
    forEach(toneLevels, (s) => {
      forEach(hueValues, (h) => {
        mp.set(
          `h${h}-s${s}-l${l}`,
          `hsl(${h},${s}%,${l}%)`,
        );
      });
    });
  });

  return mp;
};


export default hslColorMap;
