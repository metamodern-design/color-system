import { named } from './hues.js';

const lsh = (options = {}) => (l = 62) => (s = 0) => (h) => {
  if (!h && h !== 0) {
    return `hsl(0,0%,${l}%)`;
  }

  const namedHue = named(options).get(h);

  if (!namedHue && namedHue !== 0) {
    return `hsl(${h},${s}%,${l}%)`;
  }

  return `hsl(${namedHue},${s}%,${l}%)`;
};

export default lsh;
