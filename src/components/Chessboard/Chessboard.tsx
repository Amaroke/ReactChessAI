import './Chessboard.css';
import Tile from '../Tile/Tile';
import bishop_b from "../../assets/images/bishop_b.png";
import bishop_w from "../../assets/images/bishop_w.png";
import king_b from "../../assets/images/king_b.png";
import king_w from "../../assets/images/king_w.png";
import knight_b from "../../assets/images/knight_b.png";
import knight_w from "../../assets/images/knight_w.png";
import pawn_b from "../../assets/images/pawn_b.png";
import pawn_w from "../../assets/images/pawn_w.png";
import queen_b from "../../assets/images/queen_b.png";
import queen_w from "../../assets/images/queen_w.png";
import rook_b from "../../assets/images/rook_b.png";
import rook_w from "../../assets/images/rook_w.png";

const pieces = [
    rook_b, knight_b, bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b,
    pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w,
    rook_w, knight_w, bishop_w, queen_w, king_w, bishop_w, knight_w, rook_w
];

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
                return <Tile key={index} image={pieces[index]} className={className}/>;
            })}
        </div>
    );
};

export default Chessboard;
