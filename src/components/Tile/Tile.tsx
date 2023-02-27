import './Tile.css'
import bishop_b from "../../assets/images/bishop_b.png";

export default function Tile({ className }: { className: string }) {
    return (
        <div className={className}><img alt="img_piece" src={bishop_b} /></div>
    );
}