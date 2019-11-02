import reduce from '@arr/reduce';
import shades from './shades';


const grays = (options = {}) => reduce(
  shades(options),
  (a, k) => a.set(`gray-${k}`, `hsl(0,0%,${k}%)`), 
  new Map(),
);


export default grays;
