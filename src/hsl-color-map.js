import forEach from '@arr/foreach';
import reduce from '@arr/reduce';
import hues from './hues';
import shades from './shades';
import tones from './tones';


const hslColorMap = (options = {}) => {
  const shadeLevels = shades(options.shades);
  const toneLevels = tones(options.tones);
  const hueValues = hues(options.hues);
  
  let mp = new Map();
  
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
