import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(10);

  const addButton = () => {
    setCount((prev) => prev + 1);
  };

  const removeButton = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    addButton,
    removeButton,
    reset,
  };
}
