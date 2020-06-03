const mapToObject = (mp) => {
  const out = {};
  
  for (const [key, value] of mp) {
    out[key] = value;
  }
  
  return out;
};


export default mapToObject;
