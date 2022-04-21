import React from "react";
import { useSelector } from "react-redux";
import { scoreSelector } from "./scoreSlice";
import {
  gameBoardSelector,
  matchedCardsSelector,
} from "../gameBoard/gameBoardSlice";

const ScoreInfo = () => {
  const moves = useSelector(scoreSelector);
  const total = useSelector(gameBoardSelector);
  const matched = useSelector(matchedCardsSelector);

  return (
    <>
      <article>{moves} moves</article>
      <article>
        {matched.length / 2} pairs of {total.length / 2}
      </article>
    </>
  );
};

export default ScoreInfo;
