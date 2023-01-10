import { useEffect, useState } from 'react';
import init, { add } from 'wasm-lib';

function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    init().then(() => {
      setNumber(add(1, 1));
    });
  }, [number]);
  return (
    <div className="App">
      <h1>1 + 1 = {number}</h1>
    </div>
  );
}

export default App;
