import { createSlice } from "@reduxjs/toolkit";

const levelSlice = createSlice({
  name: "level",
  initialState: "easy",
  reducers: {
    editLevel: (_state, action) => {
      return action.payload;
    },
  },
});

export const levelSelector = (state) => state.level;
export const { editLevel } = levelSlice.actions;
export default levelSlice.reducer;
