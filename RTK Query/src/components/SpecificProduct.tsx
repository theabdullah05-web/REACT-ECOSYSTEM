import { useState, type FormEvent } from "react";
import { useGetProductByIdQuery } from "../services/dummyData";

const SpecificProduct = () => {
  const [num, setNum] = useState<string>("");
  const { data } = useGetProductByIdQuery(parseInt(num));
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
            <h2 key={el.id}>{el.title}</h2>
            <p>{el.description}</p>
          </>
        ))}
      </form>
    </>
  );
};

export default SpecificProduct;
