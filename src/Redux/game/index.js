import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player: "yellow",
  scores: {
    red: 0,
    yellow: 0,
  },
};

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeTurn: (state, action) => {
      state.player = action.payload;
    },
    increaseScore: (state, action) => {
      const { key } = action.payload;
      state.scores[key]++
    },
    resetScores: () => initialState,
  },
});

export const { increaseScore, changeTurn,resetScores } = game.actions;
export default game.reducer;