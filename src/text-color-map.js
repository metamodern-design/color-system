import textPalette from './text-palette.js';
import { named } from './hues.js';

const textColorMap = (options = {}) => {
  const _textPalette = textPalette(options);
  const _named = named(options);

  const mp = new Map();

  _textPalette.forEach(
    (partial, textName) => { mp.set(textName, partial()); },
  );

  _named.forEach(
    (hueValue, hueName) => {
      _textPalette.forEach(
        (partial, textName) => {
          mp.set(`${textName}-${hueName}`, partial(hueValue));
        },
      );
    },
  );

  return mp;
};

export default textColorMap;
