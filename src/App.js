import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calcWinner } from './helpers';
import StatusMessage from './components/StatusMessage';
import './styles/root.scss';

const newGame = [
  { board: Array(9).fill(null), nextPlayer: true },
]

const App = () => {
  const [history, setHistory] = useState(newGame);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calcWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.nextPlayer ? 'X' : 'O'}`

  const updateSquare = position => {
    if (current.board[position] || winner) {                // if square already contains value,
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {  // if pos of currently iterated square is 
        if (pos === position) {                           // == position of currently clicked square
          return last.nextPlayer ? 'X' : 'O';             // then return X if isXNext is true or O if false.
        }

        return square;
      });

      return prev.concat({ board: newBoard, nextPlayer: !last.nextPlayer })
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  const onNewGame = () => {
    setHistory(newGame)
    setCurrentMove(0)
  }

  return (
    <div className="app">
      <h1>Xs <span className="text-green">&</span> Os</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} updateSquare={updateSquare} winningSquares={winningSquares} />
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ' '}`}>
        Start new game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;