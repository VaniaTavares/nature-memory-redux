import React from "react";
import { useSelector } from "react-redux";
import { gameBoardSelector } from "./gameBoardSlice";
import GameCard from "./gameCard";

import "./index.scss";

const GameBoard = () => {
  const currentSet = useSelector(gameBoardSelector);

  return (
    <div className="app__game-grid">
      {currentSet.map(({ id, content, name }) => (
        <GameCard id={id} key={id + "a"} name={name} image={content} />
      ))}
    </div>
  );
};

export default GameBoard;
