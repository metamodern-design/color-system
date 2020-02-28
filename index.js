import bgColorMap from './src/bg-color-map.js';
import grayscaleMap from './src/grayscale-map.js';
import hslColorMap from './src/hsl-color-map.js';
import lsh from './src/lsh.js';
import textColorMap from './src/text-color-map.js';
import theme from './src/theme.js';


const colorSystem = (options = {}) => ({
  bgColorMap: bgColorMap(options),
  grayscaleMap: grayscaleMap(options),
  hslColorMap: hslColorMap(options),
  lsh: lsh(options),
  textColorMap: textColorMap(options),
  theme: theme(options),
});


export default colorSystem;
