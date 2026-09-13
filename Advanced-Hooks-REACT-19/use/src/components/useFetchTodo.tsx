import { use } from "react";

const useFetchTodo = () => {
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  };
  const data = use(fetchData());
  return <div>{data.title}</div>;
};

export default useFetchTodo;
