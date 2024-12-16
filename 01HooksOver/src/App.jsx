import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleBtnI = () => {
    if (counter < 20) setCounter(counter + 1);
    else return counter;
  };
  const handleBtnD = () => {
    if (counter > 0) setCounter(counter - 1);
    else return 0;
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleBtnI}>+</button>
      <p>{counter}</p>
      <button onClick={handleBtnD}>-</button>
    </div>
  );
};

export default App;
