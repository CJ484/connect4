import { createSlice } from "@reduxjs/toolkit";

const gameScores = createSlice({
  name: "gameScores",
  initialState: {
    players: {
      red: 0,
      yellow: 0,
    }
  },
  reducers: {
    increaseScore: (state, action) => {
      const { key } = action.payload;
      state.players[key]++
    },
  },
});

export const { increaseScore } = gameScores.actions;
export default gameScores.reducer;