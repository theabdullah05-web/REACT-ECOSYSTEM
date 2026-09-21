import { useReducer } from "react";

type state = {
  count: number;
};

type action = { type: "Increment" } | { type: "Decrement" };

const ReduceCounter = () => {
  const reducer = (state: state, action: action): state => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </>
  );
};

export default ReduceCounter;
