import { useEffect, useState } from "react";

const FetchTodo = () => {
  interface data {
    title: string;
  }
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=>{
    const fetchData=async()=>{
      const API="https://jsonplaceholder.typicode.com/todos/1"
    try{
      const res=await fetch(API)
      if(!result){
        throw new Error("Network response was not ok")
      }
            const result=res.json()
    }
    }
  },[])
  return <>Abdullah</>;
};

export default FetchTodo;
