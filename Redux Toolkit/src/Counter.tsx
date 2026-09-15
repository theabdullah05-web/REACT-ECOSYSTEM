import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>{count}</h2>
      <button></button>
      <button></button>
    </>
  );
};

export default Counter;
