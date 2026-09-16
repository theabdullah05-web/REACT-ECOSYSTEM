import { useState, type FormEvent } from "react";
import { useGetProductByIdQuery } from "../services/dummyData";

const SpecificProduct = () => {
  const [num, setNum] = useState<string>("0");
  const { data, error, isLoading } = useGetProductByIdQuery(parseInt(num));
  if (error) {
    return <h1>Some Error Occured</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    useGetProductByIdQuery(parseInt(num));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={num} onChange={(e) => setNum(e.target.value)} />
        <button type="submit">Submit</button>
        {data?.products.map((el) => (
          <>
            <h2 key={Math.random()}>{el.title}</h2>
            <p>{el.description}</p>
          </>
        ))}
      </form>
    </>
  );
};

export default SpecificProduct;
