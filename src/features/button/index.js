import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { boardPreparation, shuffleArray } from "../../utils/functions";
import { gameBoardSelector, setBoard } from "../gameBoard/gameBoardSlice";
import { levelSelector } from "../level/levelSlice";

const Button = ({ shuffle }) => {
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
    dispatch(setBoard({ newSet }));
  };
  return (
    <button className="btn btn-outline-primary btn-lg" onClick={handleGameSet}>
      {shuffle ? "Reset" : "Play"}
    </button>
  );
};

export default Button;
