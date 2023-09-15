export const getCurrentTurn = () => (state) => state.game.player;
export const getYellowScore = () => (state) => state.game.scores.Yellow;
export const getRedScore = () => (state) => state.game.scores.Red;
