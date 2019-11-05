import test from 'ava';
import colorSystem from '../dist/main';


const defaultColors = colorSystem().colors;


test('default colors', (t) => {
  t.is(
    defaultColors.get('h30-s55-l62'),
    'hsl(30,55%,62%)',
  );  
});
