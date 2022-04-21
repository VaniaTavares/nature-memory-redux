import { images } from "../assets";
export const gameLevels = {
  easy: {
    maxIndex: 6,
    gameLenght: 6,
  },
  medium: {
    maxIndex: 3,
    gameLenght: 9,
  },
  hard: {
    maxIndex: 0,
    gameLenght: 12,
  },
};

export const fullBoard = Object.keys(images).map((image) => {
  return {
    name: image,
    content: images[image],
    visible: false,
    matched: false,
  };
});
