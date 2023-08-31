import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
  name: "game",
  initialState: {
    player: 'yellow',
    scores: {
      red: 0,
      yellow: 0,
    }
  },
  reducers: {
    changeTurn: (state, action) => {
      state.player = action.payload;
    },
    increaseScore: (state, action) => {
      const { key } = action.payload;
      state.scores[key]++
    },
  },
});

export const { increaseScore, changeTurn } = game.actions;
export default game.reducer;