import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Connect4Grid.css";

const BoardGame = () => {
    const numRows = 6;
    const numCols = 7;
    const [grid, setGrid] = useState(
      Array(numRows).fill(Array(numCols).fill(null))
    );

    const renderCell = (row, col) => {
      const value = grid[row][col];
      return <div key={col} className={`cell ${value}`} />;
    };

    const renderRow = (row) => {
      return (
        <div key={row} className="row">
          {grid[row].map((_, col) => renderCell(row, col))}
        </div>
      );
    };

    return (
      <div className="connect4-grid">
        {Array.from({ length: numRows }, (_, row) => renderRow(row))}
      </div>
    );


};

export default BoardGame;
