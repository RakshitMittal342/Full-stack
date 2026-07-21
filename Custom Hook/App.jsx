import { useCounter } from "./hooks/useCounter";

function App() {
  const { count, addButton, removeButton, reset } = useCounter();

  return (
    <>
      <h2>Counter: {count}</h2>

      <button onClick={addButton}>Add</button>
      <button onClick={removeButton}>Remove</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
