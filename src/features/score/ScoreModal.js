import React from "react";
import ReactDOM from "react-dom";
import LevelForm from "../level/LevelForm";
import Button from "../button";
import "./index.scss";

const ScoreModal = ({ average, open, closePortal }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="app__score-overlay" />
      <div className="app__score-modal">
        <h4>
          {average
            ? "Next time will be better for sure!"
            : "Congratulations, you paired all images!"}
        </h4>
        <LevelForm />
        <Button text="New Game" closePortal={closePortal} />
      </div>
    </>,
    document.getElementById("game-modal")
  );
};

export default ScoreModal;
