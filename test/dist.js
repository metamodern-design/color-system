import test from 'ava';
import colorSystem from '../dist/index.js';


const defaultSystem = colorSystem();
const fullPalette = colorSystem({ includeFullPalette: true });

test(`dist: colors`, (t) => {
  t.is(
    defaultSystem.hslColorMap.get('h45-s70-l27'),
    'hsl(45,70%,27%)',
  );
  t.is(
    defaultSystem.hslColorMap.get('h90-s10-l52'),
    'hsl(90,10%,52%)',
  );
  t.is(
    defaultSystem.hslColorMap.get('h225-s40-l67'),
    'hsl(225,40%,67%)',
  );
});

test(`dist: grays`, (t) => {
  t.is(
    defaultSystem.grayscaleMap.get('gray-12'),
    'hsl(0,0%,12%)',
  );
  t.is(
    defaultSystem.grayscaleMap.get('gray-57'),
    'hsl(0,0%,57%)',
  );
  t.is(
    defaultSystem.grayscaleMap.get('gray-87'),
    'hsl(0,0%,87%)',
  );
});

test(`dist: lsh`, (t) => {
  t.is(
    defaultSystem.lsh(83)(66)(11),
    'hsl(11,66%,83%)',
  );
  t.is(
    defaultSystem.lsh(83)(66)(0),
    'hsl(0,66%,83%)',
  );
  t.is(
    defaultSystem.lsh(83)(66)('red'),
    'hsl(0,66%,83%)',
  );
  t.is(
    defaultSystem.lsh(83)(66)('blue-green'),
    'hsl(210,66%,83%)',
  );
  t.is(
    defaultSystem.lsh(83)(66)(),
    'hsl(0,0%,83%)',
  );
});

test(`dist: theme.colors`, (t) => {
  t.is(
    defaultSystem.theme.colors['h30-s55-l62'],
    'hsl(30,55%,62%)',
  );
  t.is(
    defaultSystem.theme.colors['h255-s25-l12'],
    'hsl(255,25%,12%)',
  );
  t.is(
    defaultSystem.theme.colors['h315-s85-l77'],
    'hsl(315,85%,77%)',
  );
  t.is(
    defaultSystem.theme.colors['gray-32'],
    'hsl(0,0%,32%)',
  );
});

test(`dist: theme.backgroundColor`, (t) => {
  t.is(
    defaultSystem.theme.backgroundColor['light'],
    'hsl(0,0%,87%)',
  );
  t.is(
    defaultSystem.theme.backgroundColor['light-blue'],
    'hsl(240,40%,87%)',
  );
  t.is(
    defaultSystem.theme.backgroundColor['medium-light-red-orange'],
    'hsl(30,55%,77%)',
  );
  
  t.falsy(
    defaultSystem.theme.backgroundColor['h30-s55-l62'],
  );
  t.is(
    fullPalette.theme.backgroundColor['h30-s55-l62'],
    'hsl(30,55%,62%)',
  );
});

test(`dist: theme.textColor`, (t) => {
  t.is(
    defaultSystem.theme.textColor['light'],
    'hsl(0,0%,87%)',
  );
  t.is(
    defaultSystem.theme.textColor['light-blue'],
    'hsl(240,40%,87%)',
  );
  t.is(
    defaultSystem.theme.textColor['medium-light-red-orange'],
    'hsl(30,55%,77%)',
  );
  
  t.falsy(
    defaultSystem.theme.textColor['h240-s85-l32'],
  );
  t.is(
    fullPalette.theme.textColor['h240-s85-l32'],
    'hsl(240,85%,32%)',
  );
});

test(`dist: theme.borderColor`, (t) => {
  t.is(
    defaultSystem.theme.borderColor['light'],
    'hsl(0,0%,87%)',
  );
  t.is(
    defaultSystem.theme.borderColor['light-blue'],
    'hsl(240,40%,87%)',
  );
  t.is(
    defaultSystem.theme.borderColor['medium-light-red-orange'],
    'hsl(30,55%,77%)',
  );
  
  t.falsy(
    defaultSystem.theme.borderColor['h240-s85-l32'],
  );
  t.is(
    fullPalette.theme.borderColor['h240-s85-l32'],
    'hsl(240,85%,32%)',
  );
  
  t.is(
    defaultSystem.theme.borderColor['default'],
    'transparent',
  );
});

