import { useState } from "react";
import IncrementButton from "./IncrementButton";

export function App() {
  const initalValue = 0
  const [count, setCount] = useState(initalValue);

  return (
    <section>
      <h1>Counter: {count}</h1>
      <IncrementButton setCount={setCount} />
    </section>
  );
}
