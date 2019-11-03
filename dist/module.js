function flat(arr, res) {
	var i=0, cur, len=arr.length;
	for (; i < len; i++) {
		cur = arr[i];
		Array.isArray(cur) ? flat(cur, res) : res.push(cur);
	}
	return res;
}

function flatten (arr) {
	return flat(arr, []);
}

const primary = ({
  red = 0,
  yellow = 60,
  blue = 240,
  rotation = 0,
} = {}) => new Map([
  ['red', red + rotation],
  ['yellow', yellow + rotation],
  ['blue', blue + rotation],
]);


const secondary = ({
  orange = 45,
  green = 150,
  purple = 270,
  rotation = 0,
} = {}) => new Map([
  ['orange', orange + rotation],
  ['green', green + rotation],
  ['purple', purple + rotation],
]);


const tertiary = ({
  redOrange = 30,
  yellowOrange = 55,
  yellowGreen = 90,
  blueGreen = 210,
  bluePurple = 255,
  redPurple = 300,
  rotation = 0,
} = {}) => new Map([
  ['red-orange', redOrange + rotation],
  ['yellow-orange', yellowOrange + rotation],
  ['yellow-green', yellowGreen + rotation],
  ['blue-green', blueGreen + rotation],
  ['blue-purple', bluePurple + rotation],
  ['red-purple', redPurple + rotation],
]);


const adjacent = ({
  redAdjacent = [315, 330, 345, 0, 15, 30, 45],
  orangeAdjacent = [0, 15, 30, 45, 55, 60, 75],
  yellowAdjacent = [30, 45, 55, 60, 65, 75, 90],
  greenAdjacent = [90, 105, 135, 150, 165, 180, 195],
  blueAdjacent = [195, 210, 225, 240, 255, 270, 285],
  purpleAdjacent = [225, 240, 255, 270, 285, 300, 315],
  rotation = 0,
} = {}) => new Map([
  ['red', redAdjacent.map((h) => h + rotation)],
  ['orange', orangeAdjacent.map((h) => h + rotation)],
  ['yellow', yellowAdjacent.map((h) => h + rotation)],
  ['green', greenAdjacent.map((h) => h + rotation)],
  ['blue', blueAdjacent.map((h) => h + rotation)],
  ['purple', purpleAdjacent.map((h) => h + rotation)],
]);


const named = (options = {}) => new Map([
  ...primary(options).entries(),
  ...secondary(options).entries(),
  ...tertiary(options).entries(),
]);


const hues = (options = {}) => {
  const everyHue = flatten(
    [...named(options).values()],
    [...adjacent(options).values()],
  );

  return [...new Set(everyHue)];
};

const lsh = (options = {}) => (l = 62) => (s = 0) => (h = 0) => (
  !h
    ? `hsl(0,0%,${l}%)`
    : `hsl(${named(options).get(h) || h},${s}%,${l}%)`
);

const bg = (options = {}) => ({
  dark: lsh(options)(22)(25),
  darker: lsh(options)(17)(25),
  light: lsh(options)(77)(10),
  lighter: lsh(options)(87)(10),
  medium: lsh(options)(37)(40),
});

function forEach (arr, fn) {
	var i=0, len=arr.length;

	for (; i < len; i++) {
		fn(arr[i], i, arr);
	}
}

function reduce (arr, fn, val) {
	if (arr == null) {
		return [];
	}

	var i=0, len=arr.length, out=val;

	if (out === void 0) {
		out = arr[0];
		i = 1;
	}

	for (; i < len; i++) {
		out = fn(out, arr[i], i, arr);
	}

	return out;
}

const range = (start, stop, step) => Array.from(
  { length: (stop - start) / step + 1 },
  (_, i) => start + (i * step),
);

const shades = ({
  start = 12,
  stop = 87,
  step = 5,
} = {}) => range(start, stop, step);

const tones = ({
  start = 10,
  stop = 85,
  step = 15,
} = {}) => range(start, stop, step);

const colors = (options = {}) => {
  const shadeLevels = shades(options.shades);
  const toneLevels = tones(options.tones);
  const hueValues = hues(options.hues);

  let mp = new Map();

  forEach(shadeLevels, (l) => {
    forEach(toneLevels, (s) => {
      mp = reduce(
        hueValues,
        (a, h) => a.set(`h${h}-s${s}-l${l}`, `hsl(${h},${s}%,${l}%)`),
        mp,
      );
    });
  });

  return mp;
};

const grays = (options = {}) => reduce(
  shades(options),
  (a, k) => a.set(`gray-${k}`, `hsl(0,0%,${k}%)`),
  new Map(),
);

const text = (options = {}) => ({
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

const mapToObject = (mp) => reduce(
  [...mp.entries()],
  (a, [key, value]) => ({ ...a, [key]: value }),
  {},
);

const theme = (options = {}) => ({
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  ...mapToObject(grays(options.shades)),
  ...mapToObject(colors(options)),
});

const colorSystem = (options = {}) => ({
  bg: bg(options),
  colors: colors(options),
  grays: grays(options),
  lsh: lsh(options),
  text: text(options),
  theme: theme(options),
});

export default colorSystem;
