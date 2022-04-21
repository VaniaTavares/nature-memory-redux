import React from "react";
import { Button, LevelDisplay, LevelForm, ScoreInfo } from "../../features";
import GameBoard from "../../features/gameBoard";
import "./index.scss";

const Game = () => {
  return (
    <div className="app__game">
      <section>
        <LevelDisplay />
        <ScoreInfo />
        <LevelForm />
        <Button shuffle={true} />
      </section>
      <GameBoard />
    </div>
  );
};

export default Game;
