import range from './range.js';

const tones = (options = {}) => (
  options.tones || range(10, 85, 15)
);

export default tones;
