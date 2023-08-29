import { useSelector } from 'react-redux';

export const GetYellowScore = () => useSelector((state) => state.reducers.gameScore.players.yellow);
export const GetRedScore = () => useSelector((state) => state.reducers.gameScore.players.red)