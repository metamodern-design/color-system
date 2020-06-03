import shades from './shades.js';


const grays = (options = {}) => shades(options).reduce(
  (a, k) => a.set(`gray-${k}`, `hsl(0,0%,${k}%)`),
  new Map(),
);


export default grays;
