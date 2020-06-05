const primary = ({
  red = 0,
  yellow = 60,
  blue = 240,
  hueRotation = 0,
} = {}) => [
  ['red', red + hueRotation],
  ['yellow', yellow + hueRotation],
  ['blue', blue + hueRotation],
];


const secondary = ({
  orange = 45,
  green = 150,
  purple = 270,
  hueRotation = 0,
} = {}) => [
  ['orange', orange + hueRotation],
  ['green', green + hueRotation],
  ['purple', purple + hueRotation],
];


const tertiary = ({
  redOrange = 30,
  yellowOrange = 55,
  yellowGreen = 90,
  blueGreen = 210,
  bluePurple = 255,
  redPurple = 300,
  hueRotation = 0,
} = {}) => [
  ['red-orange', redOrange + hueRotation],
  ['yellow-orange', yellowOrange + hueRotation],
  ['yellow-green', yellowGreen + hueRotation],
  ['blue-green', blueGreen + hueRotation],
  ['blue-purple', bluePurple + hueRotation],
  ['red-purple', redPurple + hueRotation],
];


const named = (options = {}) => new Map([
  ...primary(options),
  ...secondary(options),
  ...tertiary(options),
]);


const adjacent = ({
  redAdjacent = [315, 330, 345, 0, 15, 30, 45],
  orangeAdjacent = [0, 15, 30, 45, 55, 60, 65],
  yellowAdjacent = [30, 45, 55, 60, 65, 75, 90],
  greenAdjacent = [90, 105, 135, 150, 165, 180, 195],
  blueAdjacent = [195, 210, 225, 240, 255, 270, 285],
  purpleAdjacent = [225, 240, 255, 270, 285, 300, 315],
  hueRotation = 0,
} = {}) => new Map([
  ['red', redAdjacent.map((h) => h + hueRotation)],
  ['orange', orangeAdjacent.map((h) => h + hueRotation)],
  ['yellow', yellowAdjacent.map((h) => h + hueRotation)],
  ['green', greenAdjacent.map((h) => h + hueRotation)],
  ['blue', blueAdjacent.map((h) => h + hueRotation)],
  ['purple', purpleAdjacent.map((h) => h + hueRotation)],
]);


const hues = (options = {}) => {
  const namedValues = [...named(options).values()];
  const adjacentGroups = [...adjacent(options).values()];
  const everyHue = [].concat(namedValues, ...adjacentGroups);

  return [...new Set(everyHue)];
};


export {
  hues as default,
  named,
};
