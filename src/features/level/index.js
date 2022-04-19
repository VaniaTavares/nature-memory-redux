import React from "react";
import { useSelector } from "react-redux";
import { levelSelector } from "./levelSlice";

const LevelDisplay = () => {
  const currentLevel = useSelector(levelSelector);
  return <article>{currentLevel}</article>;
};

export default LevelDisplay;
