import React from "react";
import { Button, LevelDisplay, ScoreInfo } from "../../features";
import GameBoard from "../../features/gameBoard";
import "./index.scss";
import { motion } from "framer-motion";

const Game = () => {
  return (
    <motion.div
      className="app__game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <LevelDisplay />
        <ScoreInfo />
        <Button shuffle={true} />
      </section>
      <GameBoard />
    </motion.div>
  );
};

export default Game;
