import hues from './hues.js';
import shades from './shades.js';
import tones from './tones.js';


const hslColorMap = (options = {}) => {
  const _shades = shades(options);
  const _tones = tones(options);
  const _hues = hues(options);

  const mp = new Map();

  _shades.forEach((l) => {
    _tones.forEach((s) => {
      _hues.forEach((h) => {
        mp.set(`h${h}-s${s}-l${l}`, `hsl(${h},${s}%,${l}%)`);
      });
    });
  });

  return mp;
};


export default hslColorMap;
