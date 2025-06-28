import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  let [count, setCount] = useState(20);

  const plusCounter = () => {
    if (count <= 20) {
      setCount(count++);
    } else {
    }
  };
  const minusCounter = () => {
    if (count >= 0) {
      setCount(count--);
    } else {
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>Current Count is {count}</h3>
      <button type="button" onClick={plusCounter}>
        Plus Counter
      </button>

      <br />
      <button type="button" onClick={minusCounter}>
        Minus Counter
      </button>
    </>
  );
}

export default App;
