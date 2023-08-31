/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {range, findLastIndex} from "lodash";
import { useDispatch } from "react-redux";

import gameSetting from "../../const/gameSettings";
import { increaseScore, changeTurn } from "../../Redux/game";
import checkConsecutive from "../../utils/checkConsecutive.js";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const BoardGame = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const numRows = gameSetting.numRows;
  const numCols = gameSetting.numCols;
  const [board, setBoard] = useState(Array(numRows).fill(Array(numCols).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState(gameSetting.players[0]);
  const [opposingPlayer, setOpposingPlayer] = useState(gameSetting.players[1]);
  const [winner, setWinner] = useState(null);

  const initGame = () => {
    setWinner(null);
    setBoard(Array(numRows).fill(Array(numCols).fill(null)));
  };

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
    const value = board[row][col];
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
        {board[row].map((_, col) => (
          <div key={col} className="col">
            {renderCell(row, col)}
          </div>
        ))}
      </div>
    );
  };

  const winnerStatus = () => {
    range(0, numRows).forEach((row) => {
      range(0, numCols).forEach((col) => {
        if (board[row][col]) {
          //? Explanation for If Statement: checkConsecutive is designed to check in both vetical & horizontal directions.
          //? If the function detects that their is any row or column with 4 of the same color in either direction. It will return TRUE
          if (
            checkConsecutive(board, board[row][col], row, col, 1, 0) ||
            checkConsecutive(board, board[row][col], row, col, 0, 1)
          ) {
            setWinner(board[row][col]);
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
  }, [board]);

  return (
    <div className="connect4-grid">
      {winner ? (
        <div className="winner-message">
          <p>{winner === "red" ? "Red" : "Yellow"} {t('winner.winnerStatement')}</p>
          <button onClick={() => initGame()}>{t(`button.new`)}</button>
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
