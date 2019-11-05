import test from 'ava';
import colors from '../src/colors';
import hues from '../src/hues';
import shades from '../src/shades';
import tones from '../src/tones';


test('shades', (t) => {
  t.deepEqual(
    shades(),
    [12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82, 87],
  );
  t.deepEqual(
    shades({ start: 0, stop: 100, step: 25 }),
    [0, 25, 50, 75, 100],
  );  
});


test('tones', (t) => {
  t.deepEqual(
    tones(),
    [10, 25, 40, 55, 70, 85],
  ); 
  t.deepEqual(
    tones({ start: 5, stop: 95, step: 20 }),
    [5, 25, 45, 65, 85],
  );
});


test('hues', (t) => {
  const actual = hues();
  const expected = [0, 15, 30, 45, 55, 60, 75, 105, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345];
  
  t.true(expected.every((h) => actual.includes(h));
});


test('colors', (t) => {
  t.is(
    colors().get('h315-s85-l77'),
    'hsl(315,85%,77%)',
  );  
});
