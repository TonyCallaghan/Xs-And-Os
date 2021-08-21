import React from 'react'

const History = ({ history, moveTo, currentMove }) => { // Display Moves
    return (
        <ul>
            {history.map((_, move) => {
                return (
                    <li key={move}>
                        <button
                            style={{
                                fontWeight: move === currentMove ? 'bold' : 'normal', // Highlight currentMove by making it bold
                            }}
                            type="button"
                            onClick={() => {
                                moveTo(move);
                            }}
                        >
                            {move === 0 ? 'Go to game start' : `Go to move #${move}`}
                        </button>
                    </li>
                );
            })}
        </ul >
    );
};

export default History