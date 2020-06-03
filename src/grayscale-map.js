import shades from './shades.js';


const grays = (options = {}) => {
  const mp = new Map();

  shades(options).forEach(
    (k) => { mp.set(`gray-${k}`, `hsl(0,0%,${k}%)`); },
  );

  return mp;
};


export default grays;
