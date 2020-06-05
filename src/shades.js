import range from './range.js';


const shades = (options = {}) => (
  options.shades || range(12, 92, 5)
);


export default shades;
