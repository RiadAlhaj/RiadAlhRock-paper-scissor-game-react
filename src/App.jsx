import React , { useState } from 'react'; 
import rock from '/images/rock.png';
import paper from '/images/paper.png';
import scissors from '/images/scissors.png';

import './App.css'
function App() {
  const [playerChoice, setPlayerChoice] = useState(rock)
  const [computerChoice, setComputerChoice] = useState(rock)
  const [playerPoints, setPlayerPoints] = useState (0)
  const [computerPoints, setComputerPoints] = useState (0)
  const [result, setResult] = useState ('Let\'s see who wins!')
  const [gameOver, setGameOver] = useState(false)
  const [playerName, setPlayerName] = useState('Player')


  const choices = [rock, paper, scissors]
  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };

  const calculateResult = (player, computer) => {
    if (player === computer) {
      setResult('It\'s a draw!');
    } else if (
      (player === rock && computer === scissors) ||
      (player === paper && computer === rock) ||
      (player === scissors && computer === paper)
    ) {
      setResult('You win!');
      setPlayerPoints(prev => prev + 1);
    } else {
      setResult('Computer wins!');
      setComputerPoints(prev => prev + 1);
    }
  };

  const getImage = (choice) => {
    switch (choice) {
      case rock:
        return rock;
      case paper:
        return paper;
      case scissors:
        return scissors;
      default:
        return rock;
    }
  };

  const resetGame = () => {
    setPlayerChoice(rock);
    setComputerChoice(rock);
    setPlayerPoints(0);
    setComputerPoints(0);
    setResult('Let\'s see who wins!');
    setGameOver(false);
  };

  return (
    <section className="container">
      <div className="result_area">
        <div className="result_images">
          <span className="playerResult">
            <img src={getImage(playerChoice)} alt="Player Choice" />
          </span>
          <span className="computerResult">
            <img src={getImage(computerChoice)} alt="Computer Choice" />
          </span>
        </div>
        <div className="score">
          {playerName} {playerPoints} / {computerPoints} Computer
        </div>
        <div className="score">{result}</div>
      </div>
      <div className="option_images">
        <span className="option_image" onClick={() => handlePlayerChoice(rock)}>
          <img src={rock} alt="Rock" />
          <h3>Rock</h3>
        </span>
        <span className="option_image" onClick={() => handlePlayerChoice(paper)}>
          <img src={paper} alt="Paper" />
          <h3>Paper</h3>
        </span>
        <span className="option_image" onClick={() => handlePlayerChoice(scissors)}>
          <img src={scissors} alt="Scissors" />
          <h3>Scissors</h3>
        </span>
      </div>
      <button onClick={resetGame} className="reset-button">Reset Game</button>
    </section>
  );
}


export default App
