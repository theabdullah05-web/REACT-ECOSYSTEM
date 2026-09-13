import { useEffect, useState } from "react";

const FetchTodo = () => {
  interface data {
    title: string;
  }
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const API = "https://jsonplaceholder.typicode.com/todos/1";
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setData(result);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
  }, []);
  return <>Abdullah</>;
};

export default FetchTodo;
