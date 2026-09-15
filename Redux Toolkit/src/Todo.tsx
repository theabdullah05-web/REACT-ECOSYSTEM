import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { addTodo } from "./features/todo/todoSlice";
import { useState } from "react";

const Todo = () => {
  const todo = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();
  const [state, setState] = useState<string>("");
  return (
    <>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={() => dispatch(addTodo(state))}>Add</button>
      <ul>
        {todo.map((el) => (
          <li key={el.id}>
            {el.task}
            <button onClick={() => dispatch()}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
