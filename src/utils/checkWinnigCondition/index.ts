import gameSetting from '@/const/gameSettings/index';

//? board: A 2D array that represents the game board.
//? color: The color to look for in the consecutive.
//? row: The starting row index to begin the check.
//? col: The starting column index to begin the check.
//? rowIncrement: The increment to apply to the row index for each iteration. 
//?               This controls the direction of the check vertically.
//? colIncrement: The increment to apply to the column index for each iteration.
//?               This controls the direction of the check horizontally.

interface CheckWinningConditionProps {
  board: string[][];
  color: string;
  row: number;
  col: number;
  rowIncrement: number;
  colIncrement: number;
}

export default function checkWinningCondition({board, color, row, col, rowIncrement, colIncrement}: CheckWinningConditionProps) {

  for (let i = 0; i < gameSetting.consecutiveToWin; i++) {

    const numRows = gameSetting.numRows;
    const numCols = gameSetting.numCols;

    //? selectedRow/selectedCol variable's go in a specific direction and check to see
    //? if any color are aligned 4 in a row. 
    const selectedRow = row + i * rowIncrement;
    const selectedCol = col + i * colIncrement;

    //? All of these conditions declare that no 4 in row could be found
    //? For example the last condition, if a cell does not equal any players color return FALSE
    //? If selectedCol/selectedRow is less than 0 or greater than or equal to numRows, return FALSE.
    if (
      selectedRow < 0 ||
      selectedRow >= numRows ||
      selectedCol < 0 ||
      selectedCol >= numCols ||
      board[selectedRow][selectedCol] !== color
    ) {
      return false;
    }
  }
  //* Returning TRUE means that the function found a row or column with 4 in a row
  return true;
};
