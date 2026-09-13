import { useState } from "react";

const FetchTodo = () => {
  interface data {
    title: string;
  }
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  return <>Abdullah</>;
};

export default FetchTodo;
