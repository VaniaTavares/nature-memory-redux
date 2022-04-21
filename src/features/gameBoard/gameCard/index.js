import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  matchedCardsSelector,
  resetCards,
  showCards,
  visibleCardsSelector,
} from "../gameBoardSlice";
import { updateMoves } from "../../score/scoreSlice";
import { overlay } from "../../../assets";
import "../index.scss";

const GameCard = ({ id, image, name }) => {
  const visibleCards = useSelector(visibleCardsSelector);
  const matchedCards = useSelector(matchedCardsSelector);
  let currentClass = "card__front";
  let coverClass = "";

  const dispatch = useDispatch();
  const flipCard = (providedId) => {
    if (!visibleCards.includes(id) && !matchedCards.includes(id)) {
      if (visibleCards.length === 2) {
        dispatch(resetCards());
      } else if (visibleCards.length === 1) {
        dispatch(updateMoves());
      }
      dispatch(showCards({ id: providedId, name }));
    } else return null;
  };

  if (visibleCards.includes(id) || matchedCards.includes(id)) {
    if (matchedCards.includes(id)) {
      currentClass = "card__front__show-matched";
    } else {
      currentClass = "card__front__show";
    }
    coverClass = "card__cover";
  }

  return (
    <div className="gamecard" onClick={() => flipCard(id)}>
      <img src={image} alt={name} className={currentClass} />
      <img src={overlay.cover} alt="cover" className={coverClass} />
    </div>
  );
};

export default GameCard;
