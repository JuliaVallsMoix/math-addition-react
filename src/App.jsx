import { useState } from "react";
import "./App.css";

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {

  const [firstNumber, setFirstNumber] = useState(randomNumber());
  const [secondNumber, setSecondNumber] = useState(randomNumber());
  const [inputNumber, setInputNumber] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  //Calculo la variable isCorrect en función de las variables de estado. Yo tengo la certeza que cada vez que cambia una variable de estado, esta instrucción se vuelve a ejecutar.

  let isCorrect = firstNumber + secondNumber === +inputNumber;

  const handleClick = () => {

    setShowMessage(true);

  }

  const handleReset = () => {
    setFirstNumber(randomNumber);
    setSecondNumber(randomNumber);
    setInputNumber('');
    setShowMessage(false);
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
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div style={{display: showMessage ? 'block' : 'none'}}>
          {isCorrect && <p className="correct">El resultado es correcto</p>}
          {!isCorrect && <p className="incorrect">El resultado es incorrecto</p>}

        {/* Una altra manera de fer-ho:
        <p style={{ display: isCorrect ? 'block' : 'none' }} className="correct">El resultado es correcto</p>
        <p style={{ display: !isCorrect ? 'block' : 'none' }} className="incorrect">El resultado es incorrecto</p>  */}
      </div>
    </div>
  );
}