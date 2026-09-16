import { useState, type ChangeEvent, type FormEvent } from "react";
import { useGetProductByIdQuery } from "../services/dummyData";

const SpecificProduct = () => {
  const [num, setNum] = useState<string>("");
  const { data, error, isLoading } = useGetProductByIdQuery(parseInt(num));
  if (error) {
    return <h1>Some Error Occured</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let id = parseInt(num);
    if (Number.isNaN(id) || id <= 0) {
      return;
    }
    useGetProductByIdQuery(id);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={num} onChange={handleChange} />
        <button type="submit">Submit</button>
        {data ? (
          <>
            <h2 key={Math.random()}>{data.title}</h2>
            <p>{data.description}</p>
          </>
        ) : (
          <></>
        )}
      </form>
    </>
  );
};

export default SpecificProduct;
