import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game/index'

export default configureStore({
    reducer: {
        game: gameReducer, 
    }
})