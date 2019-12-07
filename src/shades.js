import range from './range';


const shades = ({
  start = 12,
  stop = 92,
  step = 5,
} = {}) => range(start, stop, step);


export default shades;
