import lsh from './lsh';


const text = (options = {}) = ({
  dark: lsh(options)(17)(10),
  darker: lsh(options)(12)(10),
  light: lsh(options)(82)(55),
  lighter: lsh(options)(87)(55),
  medium: lsh(options)(57)(85),
  accent: lsh(options)(42)(85),
  highlight: lsh(options)(42)(85),
  code: lsh(options)(37)(70),
  link: lsh(options)(47)(70),
  visited: lsh(options)(47)(70),
});


export default text;
