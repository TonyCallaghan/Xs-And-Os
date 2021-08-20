import React from 'react'                       // {hook} for game state
import Square from './Square'

const Board = ({ board, updateSquare }) => {
    const renderSquare = position => {        // Func to clean code below in board
        return (
            <Square
                value={board[position]}
                onClick={() => updateSquare(position)}
            />
        );
    };

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
