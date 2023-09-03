import gameSetting from '../../const/gameSettings/index';

//? board: A 2D array that represents the game board.
//? color: The color to look for in the consecutive.
//? row: The starting row index to begin the check.
//? col: The starting column index to begin the check.
//? rowIncrement: The increment to apply to the row index for each iteration. 
//?               This controls the direction of the check vertically.
//? colIncrement: The increment to apply to the column index for each iteration.
//?               This controls the direction of the check horizontally.

const checkConsecutive = (board, color, row, col, rowIncrement, colIncrement) => {

  for (let i = 0; i < gameSetting.consecutiveToWin; i++) {

    const numRows = gameSetting.numRows;
    const numCols = gameSetting.numCols;

    //? newRow/newCol variable's go in a specific direction and check to see
    //? if any color are aligned 4 in a row. 
    const newRow = row + i * rowIncrement;
    const newCol = col + i * colIncrement;

    //? All of these conditions declare that no 4 in row could be found
    //? For example the last condition, if a cell does not equal any players color return FALSE
    //? If newCol/newRow is less than 0 or greater than or equal to numRows, return FALSE.
    if (
      newRow < 0 ||
      newRow >= numRows ||
      newCol < 0 ||
      newCol >= numCols ||
      board[newRow][newCol] !== color
    ) {
      return false;
    }
  }
  //* Returning TRUE means that the function found a row or column with 4 in a row
  return true;
};

export default checkConsecutive;