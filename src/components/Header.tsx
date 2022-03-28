import { FC } from "react";

interface IProps {
    winner: any,
    draw: any,
    gameOver: boolean,
    turn: String
}

const Header:FC<IProps> = ({winner, draw, gameOver, turn}) => {
    return (
        <div>
            <h1>Jogo da Velha</h1>
            { winner && <h2 className='victory'> Vitória do Jogador <span className='player'>{winner}</span> </h2> }
            { draw && <h2 className='draw'>Vixi, Deu Velha</h2> }
            {!gameOver && <p>Vez do Jogador <span className='player'>{turn}</span></p> }
        </div>
    )
}

export default Header;