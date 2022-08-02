import Board from "./Board";
import { useState } from "react";
import { useRef } from "react";

function Game(props) {
  let startingBoard = new Array(3).fill(new Array(3).fill(" "));

  let winner = useRef;
  let [gameState, setGameState] = useState([true, ""]);

  let [currBoard, setBoard] = useState(startingBoard);
  let [isXPlaying, setXPlaying] = useState(true);

  let [history, setHistory] = useState([]);

  let remove = (i) => {
    setBoard(history[i]);
    setHistory(history.slice(0, i));
  };

  let isSolved = (board) => {
    let winningCombos = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      let [a, b, c] = winningCombos[i];
      console.log(a, b, c, board[a]);
      if (
        board[a[0]][a[1]] === board[b[0]][b[1]] &&
        board[a[0]][a[1]] === board[c[0]][c[1]] &&
        board[a[0]][a[1]] !== " "
      ) {
        winner.current = board[a[0]][a[1]];

        return true;
      }
    }
    return false;
  };

  let handleClick = (row, col) => {
    let copyBoard = JSON.parse(JSON.stringify(currBoard));

    if (copyBoard[row][col] == "X" || copyBoard[row][col] == "O") {
      return;
    }
    console.log(currBoard);

    copyBoard[row][col] = isXPlaying ? "X" : "O";
    if (isSolved(copyBoard)) {
      setBoard(startingBoard);
      setGameState([false, `${winner.current} won!`]);
      console.log(`${winner.current} won!`);
    }

    setHistory((prevHistory) => [...prevHistory, copyBoard]);

    setBoard(() => copyBoard);

    setXPlaying(!isXPlaying);

    console.log(history);
  };
  let count = 0;
  return (
    <div className="game-container">
      <h1> TicTaeToe</h1>
      <div className="window">
        <h1 className="win">{gameState[1]}</h1>
        <Board
          handleClick={handleClick}
          currBoard={currBoard}
          isXPlaying={isXPlaying}
        />
        <div className="history">
          {history.map((elm, i) => (
            <button
              onClick={(e) => {
                remove(i);
              }}
              key={count}
              index={i}
            >
              {/* {JSON.stringify(elm)} {count++} */}
              {`Move ${count++}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
