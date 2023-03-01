import './Tile.css'

interface Piece {
    image?: string;
    className: string;
}

export default function Tile({ className, image }: Piece) {
    return (
        <div className={className}><img className="chess-piece" alt="" src={image} /></div>
    );
}