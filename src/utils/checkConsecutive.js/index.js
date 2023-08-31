import gameSetting from '../../const/gameSettings/index';

const checkConsecutive = (grid, color, row, col, rowIncrement, colIncrement) => { 
  for (let i = 0; i < 4; i++) {
    const numRows = gameSetting.numRows;
    const numCols = gameSetting.numCols;
    const newRow = row + i * rowIncrement;
    const newCol = col + i * colIncrement;
    if (
      newRow < 0 ||
      newRow >= numRows ||
      newCol < 0 ||
      newCol >= numCols ||
      grid[newRow][newCol] !== color
    ) {
      return false;
    }
  }
  return true;
};

export default checkConsecutive;