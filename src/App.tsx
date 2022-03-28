import React, {useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import Game from './components/Game';
import Header from './components/Header';
import ResetGameButton from './components/ResetGameButton';

type Players = "X" | "O";

function App() {

  //De qual jogador é a vez
  const [turn, setTurn] = useState<Players>("X");

  //Qual jogador Venceu
  const [winner, setWinner] = useState<Players | null>(null);

  //Empate
  const [draw, setDraw] = useState<boolean | null>(null);

  //Quadrado Clicado (Marcado)
  const [marks, setMarks] = useState<{ [key: string]: Players }> ({});

  //Fim de Jogo
  const gameOver = !!winner || !!draw;

  //Preenchendo os quadrados
  const getSquares = () => {
    return new Array(9).fill(true);
  }

  const play = (index: number) => {
    if(marks[index] || gameOver) {
      return;
    }

    //Recebe o valor anterior do vetor, adiciona a última marca
    setMarks(prev => ({...prev, [index]: turn}));
    //Recebe o último jogador a clicar e passa a vez para o próximo
    setTurn(prev => prev === "X" ? "O" : "X")
  }


  //Verifica o jogador que clicou
  const getSquarePlayer = (index: number) => {
    if(!marks[index]) {
      return;
    }
    return marks[index];
  }

  //Possíveis combinações de vitória
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

    //Verifica se as marcações do jogador fazem parte do conjunto de combinações de vitória
    for (const line of thisLines) {
      const [a, b, c] = line;

      if(marks[a] && marks[a] === marks[b] && marks[a] === marks[c]){
        return marks[a];
      }
    }
  };

  //Reseta o jogo
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
      <Header winner={winner} draw={draw} gameOver={gameOver} turn={turn}/>
      <Board gameOver={gameOver}>
          {getSquares().map((_, i) => (
            <div className={`square ${getSquarePlayer(i)}`} onClick={() => play(i)}>
              {marks[i]}
            </div>
          ))}
      </Board>
      <ResetGameButton gameOver={gameOver} reset={reset} />
    </Game>
  );
}

export default App;
