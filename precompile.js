import jsonfile from 'jsonfile';
import theme from './src/theme';


(async () => {
  try {
    const precompiled = theme();

    await jsonfile.writeFile('dist/theme.json', precompiled);
  } catch (err) {
    console.error(err);
  }
})();
