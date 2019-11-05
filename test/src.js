import test from 'ava';
import colors from '../src/colors';
import shades from '../src/shades';
import tones from '../src/tones';


test('shades', (t) => {
  t.deepEqual(
    shades({ start: 0, stop: 100, step: 25 }),
    [0, 25, 50, 75, 100],
  );  
});


test('tones', (t) => {
  t.deepEqual(
    tones({ start: 5, stop: 95, step: 20 }),
    [5, 25, 45, 65, 85],
  );  
});


test('colors', (t) => {
  t.is(
    colors().get('h315-s85-l77'),
    'hsl(315,85%,77%)',
  );  
});
