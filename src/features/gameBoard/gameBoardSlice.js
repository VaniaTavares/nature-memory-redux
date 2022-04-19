import { createSlice } from "@reduxjs/toolkit";
import { boardPreparation } from "../../utils/functions";

const initialState = boardPreparation("easy");

const gameBoardSlice = createSlice({
  name: "gameBoard",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      return action.payload.newSet.map((card, index) => {
        return { ...card, visible: false, matched: false, id: index };
      });
    },
    showCards: (state, action) => {
      const newState = state.map((card, index) => {
        return index === action.payload.id ? { ...card, visible: true } : card;
      });
      const checkMatch = newState.filter((card) => card.visible);
      if (
        checkMatch.length > 1 &&
        checkMatch[0].content === checkMatch[1].content
      ) {
        checkMatch.forEach(({ id }) => (newState[id].matched = true));
      }
    },
    resetCards: (state, action) => {
      return state.map((card) => {
        return { ...card, visible: false };
      });
    },
  },
});

export const gameBoardSelector = (state) => state.gameBoard;

export const { setBoard, showCards, resetCards } = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
