import range from './range.js';


const shades = ({
  start = 12,
  stop = 92,
  step = 5,
} = {}) => range(start, stop, step);


export default shades;
