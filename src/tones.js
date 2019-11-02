import range from './range';


const tones = ({
  start = 10,
  stop = 85,
  step = 15,
} = {}) => range(start, stop, step);


export default tones;
