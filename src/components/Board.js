import { useState } from "react";
import Square from "./Square";

function Board({ handleClick, currBoard, isXPlaying }) {
  return (
    <div className="board">
      <h3 className="next"> Next Player:{isXPlaying ? "X" : "O"}</h3>
      <div className="row">
        <Square
          row={0}
          col={0}
          updateBoard={handleClick}
          value={currBoard[0][0]}
        />
        <Square
          row={0}
          col={1}
          updateBoard={handleClick}
          value={currBoard[0][1]}
        />
        <Square
          row={0}
          col={2}
          updateBoard={handleClick}
          value={currBoard[0][2]}
        />
      </div>
      <div className="row">
        <Square
          row={1}
          col={0}
          updateBoard={handleClick}
          value={currBoard[1][0]}
        />
        <Square
          row={1}
          col={1}
          updateBoard={handleClick}
          value={currBoard[1][1]}
        />
        <Square
          row={1}
          col={2}
          updateBoard={handleClick}
          value={currBoard[1][2]}
        />
      </div>
      <div className="row">
        <Square
          row={2}
          col={0}
          updateBoard={handleClick}
          value={currBoard[2][0]}
        />
        <Square
          row={2}
          col={1}
          updateBoard={handleClick}
          value={currBoard[2][1]}
        />
        <Square
          row={2}
          col={2}
          updateBoard={handleClick}
          value={currBoard[2][2]}
        />
      </div>
    </div>
  );
}

export default Board;
