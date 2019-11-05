import test from 'ava';
import module from '../dist/module';
import main from '../dist/main';


const run = (name, bundle) => {
  const theme = bundle().theme;

  test(`dist/${name}: theme`, (t) => {
    t.is(
      theme['h30-s55-l62'],
      'hsl(30,55%,62%)',
    );
    t.is(
      theme['h255-s25-l12'],
      'hsl(255,25%,12%)',
    );
    t.is(
      theme['h315-s85-l77'],
      'hsl(315,85%,77%)',
    );
  });
};


run('module', module);
run('main', main);
