import lsh from './lsh.js';

const bgPalette = (options = {}) => {
  const _lsh = lsh(options);

  return options.bgPalette || new Map([
    ['lighter', _lsh(92)(25)],
    ['light', _lsh(87)(40)],
    ['medium-light', _lsh(77)(55)],
    ['bright', _lsh(62)(85)],
    ['soft', _lsh(62)(55)],
    ['softer', _lsh(57)(40)],
    ['medium', _lsh(47)(70)],
    ['medium-dark', _lsh(32)(55)],
    ['dark', _lsh(22)(40)],
    ['darker', _lsh(17)(40)],
  ]);
};

export default bgPalette;
