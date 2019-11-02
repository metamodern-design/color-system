import colors from './colors';
import grays from './grays';
import mapToObject from './map-to-object';


const theme = (options = {}) => ({
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  ...mapToObject(grays(options.shades)),
  ...mapToObject(colors(options)),
});


export default theme;
