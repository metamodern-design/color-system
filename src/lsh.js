import { named } from './hues';


const lsh = (options = {}) => (l = 62) => (s = 0) => (h) => {
  if (!h && h !== 0) {
    return `hsl(0,0%,${l}%)`;
  }
  
  const namedHue = names(options).get(h);

  if (!namedHue && namedHue !== 0) {
    return `hsl(${namedHue},${s}%,${l}%)`;
  }
  
  return `hsl(${h},${s}%,${l}%)`
};


export default lsh;
