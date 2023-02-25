import React from 'react';
import './Chessboard.css';

const Chessboard = () => {
    const board = new Array(64).fill(null);
    const tiles = ['tile black-tile', 'tile white-tile'];

    return (
        <div id="chessboard">
            {board.map((_, index) => {
                const i = index % 8;
                const j = Math.floor(index / 8);
                const number = i + j + 2;
                const className = tiles[number % 2];
                return <div key={index} className={className}/>;
            })}
        </div>
    );
};

export default Chessboard;
