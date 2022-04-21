import { configureStore } from "@reduxjs/toolkit";
import { gameBoardReducer, levelReducer, scoreReducer } from "../features";

export const store = configureStore({
  reducer: {
    level: levelReducer,
    score: scoreReducer,
    gameBoard: gameBoardReducer,
  },
});
