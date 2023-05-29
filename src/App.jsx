import { useState } from "react";
import "./App.css";

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {

  const [firstNumber, setFirstNumber] = useState(randomNumber());
  const [secondNumber, setSecondNumber] = useState(randomNumber());
  const [inputNumber, setInputNumber] = useState('');
  const handleClick = () => {
    if (firstNumber + secondNumber === +inputNumber) {
      console.log('Correct');
    } else if (firstNumber + secondNumber !== inputNumber) {
      console.log('Wrong');
    }
  }

  return (
    <div className="App">
      <div id="canvas">
        <div id="primary-number">{firstNumber}</div>
        <div id="add">+</div>
        <div id="secondary-number">{secondNumber}</div>
        <div id="equal">=</div>
        <div>
          <input
            type="number"
            id="guess"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>
        <div>
          <button id="btn" onClick={handleClick} > Check
          </button>
        </div>
      </div>
    </div>
  );
}