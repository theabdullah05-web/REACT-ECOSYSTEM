import { useContext } from "react";
import { MyContext } from "./MyContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
