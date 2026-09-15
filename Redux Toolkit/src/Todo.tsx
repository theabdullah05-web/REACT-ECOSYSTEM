import { useSelector } from "react-redux";
import type { RootState } from "./app/store";

const Todo = () => {
  const todo = useSelector((state: RootState) => state.todo.value);
  return (
    <>
      <input />
      <button>Add</button>
      <ul>
        <li key={todo.id}>{todo.task}</li>
      </ul>
    </>
  );
};

export default Todo;
