const { shuffleArray, boardPreparation } = require("../utils/functions");

const initialShuffle = [
  { letter: "alpha" },
  { letter: "beta" },
  { letter: "omega" },
  { letter: "gama" },
];

test("Shuffled: The items' order is changed", () => {
  const actual = shuffleArray(initialShuffle);

  const mappedInitial = initialShuffle.map((greek) => greek.letter).join(" ");

  const mappedActual = actual.map((greek) => greek.letter).join(" ");

  expect(mappedActual).not.toBe(mappedInitial);
});

test("Shuffled: Each item has an id equal to the current index", () => {
  const actual = shuffleArray(initialShuffle);
  expect(actual[1].id === 1).toBeTruthy();
  expect(actual[2].id === 2).toBeTruthy();
});

test("Board: Expected to return null if conditions are not met", () => {
  const actualNull = boardPreparation();
  const wrongInput = boardPreparation("har");
  expect(actualNull).toBeNull();
  expect(wrongInput).toBeNull();
});

test("Board: Expected to return an array with according length", () => {
  const medium = boardPreparation("medium");
  const hard = boardPreparation("hard");
  const easy = boardPreparation("easy");

  expect(easy.length).toBe(12);
  expect(medium.length).toBe(18);
  expect(hard.length).toBe(24);
});
