import React, { useState, useEffect } from "react";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import gameSetting from "../../const/gameSettings";
import { useDispatch } from "react-redux";
import { changeTurn } from "../../Redux/currentTurn";
import { increaseScore } from "../../Redux/gameScores";

const BoardGame = () => {
  const dispatch = useDispatch();
  const numRows = gameSetting.numRows;
  const numCols = gameSetting.numCols;
  const [grid, setGrid] = useState(Array(numRows).fill(Array(numCols).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState(gameSetting.players[0]);
  const [opposingPlayer, setOpposingPlayer] = useState(gameSetting.players[1]);
  const [winner, setWinner] = useState(null);

  const initGame = () => {
    setWinner(null);
    setGrid(Array(numRows).fill(Array(numCols).fill(null)));
  };

  const handleCellClick = (col) => {
    if (winner) return;
    const updatedGrid = grid.map((row) => [...row]);
    const emptyRow = _.findLastIndex(updatedGrid, (row) => !row[col]);

    if (emptyRow !== -1) {
      updatedGrid[emptyRow][col] = currentPlayer;
      setGrid(updatedGrid);
    }
  };

  const renderCell = (row, col) => {
    const value = grid[row][col];
    return (
      <div
        key={col}
        className={`cell ${value}`}
        onClick={() => handleCellClick(col)}
      />
    );
  };

  const renderRow = (row) => {
    return (
      <div key={row} id={`row${row}`} className="row">
        {grid[row].map((_, col) => (
          <div key={col} className="col">
            {renderCell(row, col)}
          </div>
        ))}
      </div>
    );
  };

  const checkConsecutive = (color, row, col, rowIncrement, colIncrement) => {
    for (let i = 0; i < 4; i++) {
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
    };
    return true;
  };

  const winnerStatus = () => {
    _.range(0, numRows).forEach((row) => {
      _.range(0, numCols).forEach((col) => {
        if (grid[row][col]) {
          if (
            checkConsecutive(grid[row][col], row, col, 1, 0) ||
            checkConsecutive(grid[row][col], row, col, 0, 1)
          ) {
            setWinner(grid[row][col]);
            dispatch(increaseScore({ key: `${currentPlayer}` }));
            return;
          }
        }
      });
    });
  };

  useEffect(() => {
    winnerStatus();
    setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
    setOpposingPlayer(opposingPlayer === "yellow" ? "red" : "yellow");
    dispatch(changeTurn(opposingPlayer));
  }, [grid]);

  return (
    <div className="connect4-grid">
      {winner ? (
        <div className="winner-message">
          <p>{winner === "red" ? "Red" : "Yellow"} player wins!</p>
          <button onClick={() => initGame()}>New Game</button>
        </div>
      ) : (
        <div className="game-board">
          {Array.from({ length: numRows }, (_, row) => renderRow(row))}
        </div>
      )}
    </div>
  );
};

export default BoardGame;
