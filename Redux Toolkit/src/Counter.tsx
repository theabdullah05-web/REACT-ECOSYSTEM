import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [state, setState] = useState<any>();
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(state))}>
        Add this Number
      </button>
    </>
  );
};

export default Counter;
