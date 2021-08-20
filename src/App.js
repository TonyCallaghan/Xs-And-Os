import React, { useState } from "react";
import Board from "./components/Board";
import { calcWinner } from "./helpers";
import "./styles/root.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Board set as empty array,
  const [nextPlayer, isXNext] = useState(false); // X or O

  const winner = calcWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer ? 'X' : 'O'}`

  const updateSquare = position => {
    if (board[position] || winner) {                // if square already contains value,
      return;                             // return from this function
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {  // if pos of currently iterated square is 
        if (pos === position) {           // == position of currently clicked square
          return nextPlayer ? 'X' : 'O';      // then return X if isXNext is true or O if false.
        }

        return square;
      });
    });

    isXNext((prev => !prev));                // If isXNext is X(true), set to O(false)
  };

  return (
    <div className="app">
      <h1>Xs & Os</h1>
      <h2>{message}</h2>
      <Board board={board} updateSquare={updateSquare} />
    </div>
  );
};

export default App;