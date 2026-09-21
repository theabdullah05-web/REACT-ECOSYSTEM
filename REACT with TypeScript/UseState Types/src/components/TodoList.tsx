import { useState } from "react";

const TodoList = () => {
  interface todo {
    id: number;
    value: string;
    isDone: boolean;
  }
  const [todo, setTodo] = useState<todo[]>([
    {
      id: Math.random(),
      value: "",
      isDone: false,
    },
  ]);
  const addTodo = () => {
    setTodo((preVal) => [
      ...preVal,
      { id: Math.random(), value: "New Todo", isDone: false },
    ]);
  };
  return (
    <>
      <h3>Todo List</h3>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todo.map(
          (el) =>
            el.value !== "" && (
              <li key={el.id}>
                {el.value}
                {el.isDone === true && <b> Completed</b>}
              </li>
            ),
        )}
      </ul>
    </>
  );
};

export default TodoList;
