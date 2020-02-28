import lsh from './lsh.js';


const bgPalette = (options = {}) => {
  const _lsh = lsh(options);

  return options.bgPalette || new Map([
    ['lighter', _lsh(87)(25)],
    ['light', _lsh(82)(55)],
    ['medium-light', _lsh(77)(70)],
    ['softer', _lsh(72)(55)],
    ['soft', _lsh(67)(70)],
    ['bright', _lsh(62)(85)],
    ['medium', _lsh(47)(70)],
    ['medium-dark', _lsh(42)(55)],
    ['dark', _lsh(37)(40)],
    ['darker', _lsh(22)(25)],
  ]);
};


export default bgPalette;
