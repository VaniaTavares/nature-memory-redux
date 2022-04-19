import { images } from "../assets";
export const gameLevels = {
  easy: {
    maxIndex: 7,
    gameLenght: 6,
  },
  medium: {
    maxIndex: 4,
    gameLenght: 9,
  },
  hard: {
    maxIndex: 0,
    gameLenght: 12,
  },
};

export const fullBoard = Object.keys(images).map((image) => {
  return { content: image, visible: true, matched: true };
});
