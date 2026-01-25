import { findLastIndex } from "lodash";
import gameSetting from "@/const/gameSettings";

type CreateBoardProps = {
  winner: string | null;
  board: string[][];
  setBoard: (board: string[][]) => void;
  currentPlayer: string;
}

  const CreateBoard = ({winner, board, setBoard, currentPlayer}: CreateBoardProps) => {
    const numRows = gameSetting.numRows;

  const handleCellClick = (col: number) => {
    if (winner) return;
    const updatedGrid = board.map((row) => [...row]);
    const emptyRow = findLastIndex(updatedGrid, (row) => !row[col]);

    if (emptyRow !== -1) {
      updatedGrid[emptyRow][col] = currentPlayer;
      setBoard(updatedGrid);
    }
  };

      const renderCell = (row: number, col: number) => {
        const cellLocation = board[row][col];
        return (
          <div
            key={col}
            data-testid="cell"
            className={`cell ${cellLocation}`}
            onClick={() => handleCellClick(col)}
          />
        );
      };

      const renderRow = (row: number) => {
        return (
          <div data-testid={`row`} key={row} style={{ display: 'flex', flexDirection: 'row' }}>
            {board[row].map((_, col) => (
              <div key={col} style={{ display: 'flex', flexDirection: 'column' }}>
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

export default CreateBoard;