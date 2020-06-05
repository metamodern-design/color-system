import test from 'ava';
import hues from '../src/hues.js';
import shades from '../src/shades.js';
import tones from '../src/tones.js';


test('shades', (t) => {
  t.deepEqual(
    shades(),
    [12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82, 87, 92],
  );
  t.deepEqual(
    shades({ shades: [25, 50, 75] }),
    [25, 50, 75],
  );  
});


test('tones', (t) => {
  t.deepEqual(
    tones(),
    [10, 25, 40, 55, 70, 85],
  ); 
  t.deepEqual(
    tones({ tones: [25, 50, 75] }),
    [25, 50, 75],
  );
});


test('hues', (t) => {
  const defaultHues = hues();
  const expected = [0, 15, 30, 45, 55, 60, 65, 75, 90, 105, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345];
  
  t.true(expected.every((h) => defaultHues.includes(h)));
  
  const customPrimary = hues({ red: 355, yellow: 55, blue: 235 });
  const customExpected = [].concat(expected, [355, 235]);
  
  t.true(customExpected.every((h) => customPrimary.includes(h)));
  
  const rotatedHues = hues({ hueRotation: -10 });
  const rotatedExpected = [-10, 5, 20, 35, 45, 50, 55, 65, 80, 95, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335];
  
  t.true(rotatedExpected.every((h) => rotatedHues.includes(h)));
});
