import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { gameBoardReducer, levelReducer, scoreReducer } from "../features";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    level: levelReducer,
    score: scoreReducer,
    gameBoard: gameBoardReducer,
  },
});
