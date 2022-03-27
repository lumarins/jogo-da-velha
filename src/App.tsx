import React, {useState, useEffect} from 'react';
import './App.css';
import Game from './components/Game';
import Title from './components/Title';

type Players = "X" | "O";

function App() {

  const [turn, setTurn] = useState<Players>("X");
  const [winner, setWinner] = useState<Players | null>(null);
  const [draw, setDraw] = useState<boolean | null>(null);

  const [marks, setMarks] = useState<{ [key: string]: Players }> ({});

  const gameOver = !!winner || !!draw;

  const getSquares = () => {
    return new Array(9).fill(true);
  }

  const play = (index: number) => {
    if(marks[index] || gameOver) {
      return;
    }

    setMarks(prev => ({...prev, [index]: turn}));
    setTurn(prev => prev === "X" ? "O" : "X")
  }

  const getSquarePlayer = (index: number) => {
    if(!marks[index]) {
      return;
    }
    return marks[index];
  }

  const getWinner = () => {
    const thisLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const line of thisLines) {
      const [a, b, c] = line;

      if(marks[a] && marks[a] === marks[b] && marks[a] === marks[c]){
        return marks[a];
      }
    }
  };

  const reset = () => {
    setMarks({});
    setWinner(null);
    setDraw(null);
  }

  useEffect( () => {
    const winner = getWinner();
    if(winner) {
      setWinner(winner)
    } else {
      if (Object.keys(marks).length === 9){
        setDraw(true);
      }
    }
  }, [marks]);

  return (
    <Game>

      <Title />
      { winner &&<h2 className='victory'>Vitória do Jogador <span className='player'>{winner}</span></h2> }
      { draw && <h2 className='draw'>Vixi, Deu Velha</h2> }
      {!gameOver && <p>Vez do Jogador <span className='player'>{turn}</span></p> }

        <div className={`board ${gameOver ? "gameOver" : null}`}>

          {getSquares().map((_, i) => (
            <div className={`square ${getSquarePlayer(i)}`} onClick={() => play(i)}>
              {marks[i]}
            </div>
          ))}

        </div>

      { gameOver && <button className='playAgain' onClick={reset}>Jogar Novamente</button> }
      
    </Game>
  );
}

export default App;
