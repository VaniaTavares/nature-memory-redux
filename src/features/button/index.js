import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { boardPreparation, shuffleArray } from "../../utils/functions";
import { gameBoardSelector, setBoard } from "../gameBoard/gameBoardSlice";
import { levelSelector } from "../level/levelSlice";
import { resetMoves } from "../score/scoreSlice";

import "./index.scss";

const Button = ({ shuffle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSet = useSelector(gameBoardSelector);
  const currentLevel = useSelector(levelSelector);

  const handleGameSet = () => {
    let newSet = [];
    if (shuffle) {
      newSet = shuffleArray(currentSet);
    } else {
      newSet = boardPreparation(currentLevel);
    }
    dispatch(resetMoves());
    dispatch(setBoard({ newSet }));
    if (!shuffle) {
      navigate("/game");
    }
  };
  return (
    <button className={shuffle ? "btn__reset" : "btn"} onClick={handleGameSet}>
      {shuffle ? "Restart" : "Play"}
    </button>
  );
};

export default Button;
