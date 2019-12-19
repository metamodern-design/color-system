import { named } from './hues';


const lsh = (options = {}) => (l = 62) => (s = 0) => (h) => (
  (!h && h !== 0)
    ? `hsl(0,0%,${l}%)`
    : `hsl(${named(options).get(h) || h},${s}%,${l}%)`
);


export default lsh;
