import { createSlice } from "@reduxjs/toolkit";
import { boardPreparation } from "../../utils/functions";

const initialState = boardPreparation("easy");

const gameBoardSlice = createSlice({
  name: "gameBoard",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      return action.payload.newSet.map((card) => {
        return { ...card, visible: false, matched: false };
      });
    },
    showCards: (state, action) => {
      const [mapped] = state
        .filter((card) => card.visible)
        .map((card) => {
          return card.id === action.payload.id
            ? null
            : {
                name: card.name,
                id: card.id,
              };
        });
      let newState = [...state];
      newState = newState.map((card, index) => {
        if (
          index === action.payload.id &&
          mapped?.name === action.payload.name
        ) {
          return { ...card, matched: true, visible: true };
        } else if (index === action.payload.id) {
          return { ...card, visible: true };
        } else return card;
      });
      if (mapped?.name === action.payload.name) {
        newState = newState.map((card) => {
          return card.id === mapped.id ? { ...card, matched: true } : card;
        });
      }
      return newState;
    },
    resetCards: (state, action) => {
      return state.map((card) => {
        return { ...card, visible: false };
      });
    },
  },
});

export const gameBoardSelector = (state) => state.gameBoard;

export const visibleCardsSelector = (state) =>
  state.gameBoard.filter((card) => card.visible).map((card) => card.id);

export const matchedCardsSelector = (state) =>
  state.gameBoard.filter((card) => card.matched).map((card) => card.id);

export const { setBoard, showCards, resetCards } = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
