import React from "react";
import { useDispatch } from "react-redux";
import { editLevel } from "./levelSlice";
import { gameLevels } from "../../utils/constants";

const LevelForm = () => {
  const dispatch = useDispatch();
  const handleLevelChange = ({ target }) => {
    dispatch(editLevel(target.value));
  };

  return (
    <form>
      <label htmlFor="levels">Level: </label>
      <select id="levels" name="levels" onChange={handleLevelChange}>
        {Object.keys(gameLevels).map((level) => (
          <option key={level} value="level">
            {level.substring(0, 1).toUpperCase() + level.substring(1)}
          </option>
        ))}
      </select>
    </form>
  );
};

export default LevelForm;
