import { use } from "react";
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};
const todoData = fetchData();
const useFetchTodo = () => {
  const data = use(todoData);
  return <div>{data.title}</div>;
};

export default useFetchTodo;
