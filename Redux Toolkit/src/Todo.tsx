import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { addTodo, deleteTodo, markAsDone } from "./features/todo/todoSlice";
import { useState } from "react";

const Todo = () => {
  const todo = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();
  const [state, setState] = useState<string>("");
  return (
    <>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button
        onClick={() => {
          (dispatch(addTodo(state)), setState(""));
        }}
      >
        Add
      </button>
      <ul>
        {todo.map(
          (el) =>
            el.task !== "" && (
              <li
                key={el.id}
                style={{
                  textDecoration: el.isDone == true ? "line-through" : "none",
                }}
              >
                {el.task}
                <button onClick={() => dispatch(deleteTodo(el.id))}>
                  Delete
                </button>
                <button onClick={() => dispatch(markAsDone(el.id))}>
                  Mark As Done
                </button>
              </li>
            ),
        )}
      </ul>
    </>
  );
};

export default Todo;
