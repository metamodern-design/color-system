import test from 'ava';
import colorSystem from '../dist/module';


const theme = colorSystem().theme;


test('theme with default options', (t) => {
  t.is(
    theme['h30-s55-l62'],
    'hsl(30,55%,62%)',
  );  
});
