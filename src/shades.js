import range from './range';


const shades = ({
  start = 12,
  stop = 87,
  step = 5,
} = {}) => range(start, stop, step);


export default shades;
