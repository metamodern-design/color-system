import lsh from './lsh';


const text = (options = {}) => {
  const _lsh = lsh(options);

  return options.textPalette || new Map([
    ['bright', _lsh(62)(85)],
    ['medium', _lsh(47)(70)],
    ['soft', _lsh(67)(70)],
    ['softer', _lsh(72)(55)],
    ['medium-light', _lsh(82)(55)],
    ['light', _lsh(87)(25)],
    ['lighter', _lsh(92)(25)],
    ['medium-dark', _lsh(22)(25)],
    ['dark', _lsh(17)(10)]
    ['darker', _lsh(12)(10)]
  ]);
};


export default text;
