import forEach from '@arr/foreach';
import reduce from '@arr/reduce';
import hues from './hues';
import shades from './shades';
import tones from './tones';


const colors = (options = {}) => {
  const shadeLevels = shades(options.shades);
  const toneLevels = tones(options.tones);
  const hueValues = hues.all(options.hues);

  let mp = new Map();

  forEach(shadeLevels, (l) => {
    forEach(toneLevels, (s) => {
      mp = reduce(
        hueValues,
        (a, h) => a.set(`h${h}-s${s}-l${l}`, `hsl(${h},${s}%,${l}%)`)
        mp,
      );
    });
  });
  
  return mp;
};


export default colors;
