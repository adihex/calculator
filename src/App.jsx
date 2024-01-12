import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
    console.log(result.length);
  };
  const clear = () => {
    setResult("");
    console.log(result.length);
  };

  const deleteEl = () => {
    result.length == 1 ? setResult("") : setResult(result.slice(0, -1));
    console.log(result.length);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
      console.log(result.length);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled></input>

      <div className="buttons">
        <button className="operator" onClick={clear}>
          AC
        </button>
        <button className="operator" onClick={deleteEl}>
          DEL
        </button>
        <button id="." className="operator" onClick={handleClick}>
          .
        </button>
        <button id="/" className="operator" onClick={handleClick}>
          /
        </button>

        <button id="7" className="number" onClick={handleClick}>
          7
        </button>
        <button id="8" className="number" onClick={handleClick}>
          8
        </button>
        <button id="9" className="number" onClick={handleClick}>
          9
        </button>
        <button id="*" className="operator" onClick={handleClick}>
          x
        </button>

        <button id="4" className="number" onClick={handleClick}>
          4
        </button>
        <button id="5" className="number" onClick={handleClick}>
          5
        </button>
        <button id="6" className="number" onClick={handleClick}>
          6
        </button>

        <button id="-" className="operator" onClick={handleClick}>
          -
        </button>

        <button id="1" className="number" onClick={handleClick}>
          1
        </button>
        <button id="2" className="number" onClick={handleClick}>
          2
        </button>
        <button id="3" className="number" onClick={handleClick}>
          3
        </button>
        <button id="+" className="operator" onClick={handleClick}>
          +
        </button>
        <button id="00" className="operator" onClick={handleClick}>
          00
        </button>
        <button id="0" className="operator" onClick={handleClick}>
          0
        </button>
        <button id="=" className="operator col-span-2" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
