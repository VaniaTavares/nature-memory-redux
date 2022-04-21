import React from "react";
import { Button, LevelDisplay, ScoreInfo } from "../../features";
import GameBoard from "../../features/gameBoard";
import "./index.scss";

const Game = () => {
  return (
    <div className="app__game">
      <section>
        <LevelDisplay />
        <ScoreInfo />
        <Button shuffle={true} />
      </section>
      <GameBoard />
    </div>
  );
};

export default Game;
