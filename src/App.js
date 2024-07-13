import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = evaluate(display.replace(/x/g, "*")).toString();
        setDisplay(result);
      } catch {
        setDisplay("Error");
      }
    } else if (value === "RESET") {
      setDisplay("");
    } else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div id="calc-screen">
          <div id="calc-result"> {display}</div>

          <div>
            <h2 id="calc-h2">calc</h2>
            <h4 id="calc-h4">THEME</h4>
            <button id="calc-theme-btn">
              <div id="calc-theme-btn-circle"></div>
            </button>
            <p id="calc-theme-p-1">1</p>
            <p id="calc-theme-p-2">2</p>
            <p id="calc-theme-p-3">3</p>
          </div>
          <div id="calc-keys-board">
            <div id="calc-keys-board-top">
              <button onClick={() => handleClick("7")} id="calc-key-7">
                7
              </button>
              <button onClick={() => handleClick("8")} id="calc-key-8">
                8
              </button>
              <button onClick={() => handleClick("9")} id="calc-key-9">
                9
              </button>
              <button onClick={() => handleClick("DEL")} id="calc-key-del">
                DEL
              </button>
            </div>
            <div id="calc-keys-board-middle">
              <button onClick={() => handleClick("4")} id="calc-key-4">
                4
              </button>
              <button onClick={() => handleClick("5")} id="calc-key-5">
                5
              </button>
              <button onClick={() => handleClick("6")} id="calc-key-6">
                6
              </button>
              <button onClick={() => handleClick("+")} id="calc-key-plus">
                +
              </button>
            </div>
            <div id="calc-keys-board-bottom">
              <button onClick={() => handleClick("1")} id="calc-key-1">
                1
              </button>
              <button onClick={() => handleClick("2")} id="calc-key-2">
                2
              </button>
              <button onClick={() => handleClick("3")} id="calc-key-3">
                3
              </button>
              <button onClick={() => handleClick("-")} id="calc-key-minus">
                -
              </button>
            </div>
            <div id="calc-keys-board-last">
              <button onClick={() => handleClick(".")} id="calc-key-dot">
                .
              </button>
              <button onClick={() => handleClick("0")} id="calc-key-0">
                0
              </button>
              <button onClick={() => handleClick("/")} id="calc-key-division">
                /
              </button>
              <button onClick={() => handleClick("x")} id="calc-key-multiply">
                x
              </button>
            </div>
            <div id="calc-keys-board-reset-equal">
              <button onClick={() => handleClick("RESET")} id="calc-key-reset">
                RESET
              </button>
              <button onClick={() => handleClick("=")} id="calc-key-equal">
                =
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
