import React from "react";
import { useSelector } from "react-redux";
import { levelSelector } from "./levelSlice";

const LevelDisplay = () => {
  const currentLevel = useSelector(levelSelector);
  return (
    <article>
      Level{" "}
      {currentLevel.substring(0, 1).toUpperCase() + currentLevel.substring(1)}
    </article>
  );
};

export default LevelDisplay;
