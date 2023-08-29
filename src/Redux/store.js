import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./allReducers";

export default configureStore({
    reducer: {
        reducers: rootReducer, 
    }
})