import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { scoreSelector } from "./scoreSlice";
import {
  gameBoardSelector,
  matchedCardsSelector,
} from "../gameBoard/gameBoardSlice";
import ScoreModal from "./ScoreModal";

const ScoreInfo = () => {
  const [openPortal, setOpenPortal] = useState(false);
  const moves = useSelector(scoreSelector);
  const total = useSelector(gameBoardSelector);
  const matched = useSelector(matchedCardsSelector);

  const closePortal = useCallback(() => setOpenPortal(false), []);

  useEffect(() => {
    if (matched.length === total.length) {
      console.log("here");
      setOpenPortal(true);
    }
  }, [matched, total]);
  return (
    <>
      <article>{moves} moves</article>
      <article>
        {matched.length / 2} pairs of {total.length / 2}
      </article>
      <ScoreModal
        average={moves > total.length}
        open={openPortal}
        closePortal={closePortal}
      />
    </>
  );
};

export default ScoreInfo;
