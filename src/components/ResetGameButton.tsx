import { FC } from "react"

interface IProps {
    gameOver: any
    reset: any
}


const ResetGameButton:FC<IProps> = ({gameOver, reset}) => {
    return (
        <div>
            { gameOver && <button className='playAgain' onClick={reset}>Jogar Novamente</button> }
        </div>
    );
}

export default ResetGameButton;