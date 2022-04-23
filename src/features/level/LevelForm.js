import React from "react";
import { useDispatch } from "react-redux";
import { editLevel } from "./levelSlice";
import { gameLevels } from "../../utils/constants";
import "./index.scss";
import LevelDisplay from ".";

const LevelForm = ({ current }) => {
  const dispatch = useDispatch();
  const handleLevelChange = ({ target }) => {
    dispatch(editLevel(target.value));
  };

  return (
    <>
      {current && <LevelDisplay current={true} />}
      <form className="app__select">
        <label htmlFor="levels">Level: </label>
        <select id="levels" name="levels" onChange={handleLevelChange}>
          {Object.keys(gameLevels).map((level) => (
            <option key={level} value={level}>
              {level.substring(0, 1).toUpperCase() + level.substring(1)}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default LevelForm;
