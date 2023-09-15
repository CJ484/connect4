/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { range, every } from "lodash";
import { useDispatch } from "react-redux";

import CreateBoard from "../CreateBoard";
import gameSetting from "../../const/gameSettings";
import { increaseScore, changeTurn, resetScores } from "../../Redux/game";
import checkConsecutive from "../../utils/checkConsecutive.js";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const BoardGame = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {numRows, numCols} = gameSetting
  const [player1, player2] = [`${t(`players.one`)}`, t(`players.two`)]

  //* The board is designed in a form of arrays. Arrays of Rows, inside is the cells that make up the columns
  const [board, setBoard] = useState(
    Array(numRows).fill(Array(numCols).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [opposingPlayer, setOpposingPlayer] = useState(player2);
  const [winner, setWinner] = useState(null);
  const [noWinner, setNoWinner] = useState(false);

  const initGame = () => {
    setWinner(null);
    setNoWinner(false);
    setBoard(Array(numRows).fill(Array(numCols).fill(null)));
  };

  const resetGame = () => {
    dispatch(resetScores());
    setWinner(null);
    setNoWinner(false);
    setBoard(Array(numRows).fill(Array(numCols).fill(null)));
  };

  const winnerStatus = () => {
    //? lines 76 & 77 are used to look through all rows and columns
    range(0, numRows).forEach((row) => {
      range(0, numCols).forEach((col) => {
        //? player color looks at board and sees each colors location
        const playersColor = board[row][col];
        //? The checkConsecutive will return true if it found 4 in a row, in which it will award the winner 1 point
        //? if the board is filled with no winner . A draw is announced.
        if (playersColor) {
          if (
            checkConsecutive(board, playersColor, row, col, 1, 0) ||
            checkConsecutive(board, playersColor, row, col, 0, 1)
          ) {
            setWinner(playersColor);
            dispatch(increaseScore({ key: `${currentPlayer}` }));
            return;
          } else if (every(board[0], (cell) => cell !== null)) {
            setNoWinner(true);
          }
        }
      });
    });
  };

  const hoverEffect = () => {
    document.documentElement.style.setProperty('--currentPlayer-color', opposingPlayer);
  };

  useEffect(() => {
    winnerStatus();
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
    setOpposingPlayer(opposingPlayer === player2 ? player1 : player2);
    hoverEffect();
    dispatch(changeTurn(opposingPlayer));
  }, [board]);

  return (
    <div className="connect4-grid">
      {winner ? (
        <div className="winner-message">
          <p>
            {winner === player1 ? player1 : player2}{" "}
            {t("winner.winnerStatement")}
          </p>
          <button onClick={() => initGame()}>{t(`button.new`)}</button>
        </div>
      ) : noWinner ? (
        <div>
          <h4>It is a draw! No winner</h4>
          <button onClick={() => resetGame()}>Reset Board</button>
        </div>
      ) : (
        <div className="gameSetup">
          <CreateBoard winner={winner} board={board} setBoard={setBoard} currentPlayer={currentPlayer}/>
          <button onClick={() => resetGame()}>Reset Game</button>
        </div>
      )}
    </div>
  );
};

export default BoardGame;
