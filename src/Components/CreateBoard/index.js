import { findLastIndex } from "lodash";
import gameSetting from "../../const/gameSettings";

  const Board = ({winner, board, setBoard, currentPlayer}) => {
    const numRows = gameSetting.numRows;

    
  const handleCellClick = (col) => {
    if (winner) return;
    const updatedGrid = board.map((row) => [...row]);
    const emptyRow = findLastIndex(updatedGrid, (row) => !row[col]);

    if (emptyRow !== -1) {
      updatedGrid[emptyRow][col] = currentPlayer;
      setBoard(updatedGrid);
    }
  };

      const renderCell = (row, col) => {
        const cellLocation = board[row][col];
        return (
          <div
            key={col}
            className={`cell ${cellLocation}`}
            onClick={() => handleCellClick(col)}
          />
        );
      };

      const renderRow = (row) => {
        return (
          <div key={row} id={`row${row}`} className="row">
            {board[row].map((_, col) => (
              <div key={col} className="col">
                {renderCell(row, col)}
              </div>
            ))}
          </div>
        );
      };

    return (
      <div className="game-board">
        {Array.from({ length: numRows }, (_, row) => renderRow(row))}
      </div>
    );
}

export default Board;