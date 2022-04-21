import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: 0,
  reducers: {
    updateMoves: (state) => {
      return state + 1;
    },
    resetMoves: (_state) => {
      return 0;
    },
  },
});

export const scoreSelector = (state) => state.score;

export const { updateMoves, resetMoves } = scoreSlice.actions;

export default scoreSlice.reducer;
