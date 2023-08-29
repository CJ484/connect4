import { useSelector } from "react-redux";

export const GetCurrentTurn = () => useSelector((state) => state.reducers.currentTurn.player);