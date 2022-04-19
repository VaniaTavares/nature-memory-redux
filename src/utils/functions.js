import { fullBoard, gameLevels } from "./constants";

export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export const boardPreparation = (level) => {
  const randomIndex = Math.floor(Math.random() * gameLevels[level].maxIndex);
  const newSet = fullBoard.splice(randomIndex, gameLevels[level].gameLenght);
  return shuffleArray([...newSet, ...newSet]);
};
