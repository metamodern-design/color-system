import bgColorMap from './bg-color-map.js';
import grayscaleMap from './grayscale-map.js';
import hslColorMap from './hsl-color-map.js';
import lsh from './lsh.js';
import textColorMap from './text-color-map.js';
import theme from './theme.js';

const colorSystem = (options = {}) => ({
  bgColorMap: bgColorMap(options),
  grayscaleMap: grayscaleMap(options),
  hslColorMap: hslColorMap(options),
  lsh: lsh(options),
  textColorMap: textColorMap(options),
  theme: theme(options),
});

export default colorSystem;
