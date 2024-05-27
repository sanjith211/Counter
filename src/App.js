import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const getClassName = (num) => {
    if (num > 0) return "green";
    if (num < 0) return "red";
    return "black";
  };

  return (
    <div className="App">
      <div className={`counter ${getClassName(counter)}`}>{counter}</div>
      <div className="button">
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
