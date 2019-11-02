import bg from './src/bg';
import colors from './src/colors';
import grays from './src/grays';
import lsh from './src/lsh';
import text from './src/text';
import theme from './src/theme';


const colorSystem = (options = {}) => ({
  bg: bg(options),
  colors: colors(options),
  grays: grays(options),
  lsh: lsh(options),
  text: text(options),
  theme: theme(options),
});


export default colorSystem;
