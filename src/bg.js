import lsh from './lsh';


const bg = (options = {}) => ({
  dark: lsh(options)(22)(25),
  darker: lsh(options)(17)(25),
  light: lsh(options)(77)(10),
  lighter: lsh(options)(87)(10),
  medium: lsh(options)(37)(40),
});


export default bg;
