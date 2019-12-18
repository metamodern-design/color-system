import bgColorMap from './src/bg-color-map';
import grayscaleMap from './src/grayscale-map';
import hslColorMap from './src/hsl-color-map';
import lsh from './src/lsh';
import textColorMap from './src/text-color-map';
import theme from './src/theme';


const colorSystem = (options = {}) => ({
  bgColorMap: bgColorMap(options),
  grayscaleMap: grayscaleMap(options),
  hslColorMap: hslColorMap(options),
  lsh: lsh(options),
  textColorMap: textColorMap(options),
  theme: theme(options),
});


export default colorSystem;
