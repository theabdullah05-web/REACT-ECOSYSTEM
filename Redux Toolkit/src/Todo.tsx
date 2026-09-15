import { useSelector } from "react-redux";
import type { RootState } from "./app/store";

const Todo = () => {
  const todo = useSelector((state: RootState) => state.todo.value);
  return (
    <>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Todo;
