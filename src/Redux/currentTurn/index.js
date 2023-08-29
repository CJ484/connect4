import { createSlice } from "@reduxjs/toolkit";

const CurrentTurn = createSlice({
    name: 'currentTurn',
    initialState: {
        player: 'yellow',
    },
    reducers: {
        changeTurn: (state, action) => {
            state.player = action.payload;
        }
    }
})

export const { changeTurn } = CurrentTurn.actions;
export default CurrentTurn.reducer;