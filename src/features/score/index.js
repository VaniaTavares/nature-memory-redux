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
      setTimeout(() => setOpenPortal(true), 1000);
    }
  }, [matched, total]);
  return (
    <>
      <article className="p__highlight">{moves} moves</article>
      <article>
        <span className="p__highlight">{matched.length / 2}</span> pairs of{" "}
        {total.length / 2}
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
