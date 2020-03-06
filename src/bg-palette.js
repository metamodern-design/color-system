import lsh from './lsh.js';


const bgPalette = (options = {}) => {
  const _lsh = lsh(options);

  return options.bgPalette || new Map([
    ['lighter', _lsh(92)(25)],
    ['light', _lsh(87)(40)],
    ['medium-light', _lsh(82)(55)],
    ['softer', _lsh(72)(55)],
    ['soft', _lsh(67)(70)],
    ['bright', _lsh(62)(85)],
    ['medium', _lsh(47)(70)],
    ['medium-dark', _lsh(27)(40)],
    ['dark', _lsh(17)(25)],
    ['darker', _lsh(12)(10)],
  ]);
};


export default bgPalette;
