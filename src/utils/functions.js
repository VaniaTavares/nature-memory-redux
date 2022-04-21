import { fullBoard, gameLevels } from "./constants";

export const shuffleArray = (array) => {
  let shuffledArray = [...array].sort(() => Math.random() - 0.5);
  shuffledArray = shuffledArray.map((card, index) => {
    return { ...card, id: index };
  });

  return shuffledArray;
};

export const boardPreparation = (level) => {
  const randomIndex = Math.floor(Math.random() * gameLevels[level].maxIndex);
  const newSet = [...fullBoard].splice(
    randomIndex,
    gameLevels[level].gameLenght
  );
  return shuffleArray([...newSet, ...newSet]);
};
