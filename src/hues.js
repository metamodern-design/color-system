const primary = ({
  red = 0,
  yellow = 60,
  blue = 240,
  rotation = 0,
} = {}) => [
  ['red', red + rotation],
  ['yellow', yellow + rotation],
  ['blue', blue + rotation],
];


const secondary = ({
  orange = 45,
  green = 150,
  purple = 270,
  rotation = 0,
} = {}) => [
  ['orange', orange + rotation],
  ['green', green + rotation],
  ['purple', purple + rotation],
];


const tertiary = ({
  redOrange = 30,
  yellowOrange = 55,
  yellowGreen = 90,
  blueGreen = 210,
  bluePurple = 255,
  redPurple = 300,
  rotation = 0,
} = {}) => [
  ['red-orange', redOrange + rotation],
  ['yellow-orange', yellowOrange + rotation],
  ['yellow-green', yellowGreen + rotation],
  ['blue-green', blueGreen + rotation],
  ['blue-purple', bluePurple + rotation],
  ['red-purple', redPurple + rotation],
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
  rotation = 0,
} = {}) => new Map([
  ['red', redAdjacent.map((h) => h + rotation)],
  ['orange', orangeAdjacent.map((h) => h + rotation)],
  ['yellow', yellowAdjacent.map((h) => h + rotation)],
  ['green', greenAdjacent.map((h) => h + rotation)],
  ['blue', blueAdjacent.map((h) => h + rotation)],
  ['purple', purpleAdjacent.map((h) => h + rotation)],
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
