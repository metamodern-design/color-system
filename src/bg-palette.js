import lsh from './lsh';


const bgPalette = (options = {}) => {
  const _lsh = lsh(options);
  
  return options.bgPalette || new Map([
    ['bright', _lsh(62)(85)],
    ['soft', _lsh(57)(55)],
    ['softer', _lsh(52)(40)],
    ['medium-light', _lsh(72)(70)],
    ['light', _lsh(82)(55)],
    ['lighter', _lsh(87)(25)],
    ['medium-dark', _lsh(47)(55)],
    ['dark', _lsh(37)(40)]
    ['darker', _lsh(22)(25)]
  ]);
};


export default bgPalette;
