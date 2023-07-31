import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import ResetButton from "./ResetButton";

export function App() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  // https://rickandmortyapi.com/api/character

  return (
    <section>
      <h1>Counter: {count}</h1>
      {count ? <DecrementButton setCount={setCount} count={count} /> : null}
      <ResetButton initialValue={initialValue} setCount={setCount} />
      <IncrementButton setCount={setCount} />
    </section>
  );
}
