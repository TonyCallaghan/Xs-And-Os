import React, { useState } from 'react' // {hook} for game state
import Square from './Square'

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null)); // Board set as empty array,
    const [isNext, xOrO] = useState(false); // X or O
    console.log(board) // check array after onClick function
    // 
    const updateSquare = (position) => {
        if (board[position]) { // if square already contains value,
            return; // return from this function
        }

        // 
        setBoard((prev) => {
            return prev.map((square, pos) => {
                // if pos of currently iterated square is 
                // == position of currently clicked square
                if (pos === position) {
                    return isNext ? 'X' : 'O'; // then return X if xOrO is true or O if false.
                }
                return square;
            });
        });
        xOrO((prev => !prev)) // If xOrO is X(true), set to O(false)
    };

    const renderSquare = (position) => { // Func to clean code below in board
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
