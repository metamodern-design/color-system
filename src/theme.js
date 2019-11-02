import colors from './src/colors';
import grays from './src/grays';
import mapToObject from './src/map-to-object';


const theme = (options = {}) => ({
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  ...mapToObject(grays(options.shades)),
  ...mapToObject(colors(options)),
});


export default theme;
