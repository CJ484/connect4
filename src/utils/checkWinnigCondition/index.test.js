import checkWinningCondition from './index'
import gameSetting from "@/const/gameSettings/index";

describe("checkWinningCondition function", () => {
  let board;
  const {numCols, numRows} = gameSetting;
  const {players} = gameSetting;
  const [player1, player2] = [players[0], players[1]];
  
  beforeEach(() => {
    board = Array.from(Array(numRows), () => Array(numCols).fill(null));  //* Init empty Board
  });

  it("should return true for consecutive horizontal cells of the same color", () => {
    board[0][0] = player1;
    board[0][1] = player1;
    board[0][2] = player1;
    board[0][3] = player1;
    expect(checkWinningCondition({board, color: player1, row: 0, col: 0, rowIncrement: 0, colIncrement: 1})).toBe(true);
  });

  it("should return false for non-consecutive horizontal cells", () => {
    board[0][0] = player1;
    board[0][1] = player1;
    board[0][2] = player2;
    board[0][3] = player1;
    expect(checkWinningCondition({board, color: player1, row: 0, col: 0, rowIncrement: 0, colIncrement: 1})).toBe(false);
  });

  it("should return true for consecutive vertical cells of the same color", () => {
    board[0][0] = player1;
    board[1][0] = player1;
    board[2][0] = player1;
    board[3][0] = player1;
    expect(checkWinningCondition({board, color: player1, row: 0, col: 0, rowIncrement: 1, colIncrement: 0})).toBe(true);
  });

  it("should return false for cells outside of the grid bounds", () => {
    board[0][0] = player1;
    expect(checkWinningCondition({board, color: player1, row: -1, col: 0, rowIncrement: 1, colIncrement: 0})).toBe(false);
  });

  it("should return true for consecutive diagonal cells (down-right)", () => {
    board[0][0] = player1;
    board[1][1] = player1;
    board[2][2] = player1;
    board[3][3] = player1;
    expect(checkWinningCondition({board, color: player1, row: 0, col: 0, rowIncrement: 1, colIncrement: 1})).toBe(true);
  });

  it("should return true for consecutive diagonal cells (down-left)", () => {
    board[0][3] = player1;
    board[1][2] = player1;
    board[2][1] = player1;
    board[3][0] = player1;
    expect(checkWinningCondition({board, color: player1, row: 0, col: 3, rowIncrement: 1, colIncrement: -1})).toBe(true);
  });

});
