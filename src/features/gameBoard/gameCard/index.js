import React from "react";
import { overlay, images } from "../../../assets";
import "./index.scss";

const GameCard = () => {
  return (
    <div className="gamecard">
      <img src={images.coral} alt="coral" className="card__front" />
      <img src={overlay.cover} alt="cover" className="card__cover" />
    </div>
  );
};

export default GameCard;
