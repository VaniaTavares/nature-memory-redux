import React from "react";
import { useSelector } from "react-redux";
import { updateMoves } from "./scoreSlice";

const ScoreInfo = () => {
  const moves = useSelector(updateMoves);
  // number of matches - n, m total
  return (
    <>
      <article>{moves} moves</article>
      <article>n pairs of m</article>
    </>
  );
};

export default ScoreInfo;
