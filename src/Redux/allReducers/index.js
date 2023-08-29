import { combineReducers } from "redux";
import gameScoreReducer from "../gameScores/index";
import currentTurnReducer from "../currentTurn/index";

const rootReducer = combineReducers({
  gameScore: gameScoreReducer,
  currentTurn: currentTurnReducer,
});

export default rootReducer;