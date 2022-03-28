import { FC } from "react";

interface IProps {
    gameOver: any
}

const Board:FC<IProps> = ({gameOver, children}) => (
    <div className={`board ${gameOver ? "gameOver" : null}`}>
        {children}
    </div>
)

export default Board;