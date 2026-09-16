import { useState } from "react";
import { useGetProductByIdQuery } from "../services/dummyData";

const SpecificProduct = () => {
  const [num, setNum] = useState<string>("");
  const { data } = useGetProductByIdQuery(parseInt(num));
  return (
    <>
      <input />
    </>
  );
};

export default SpecificProduct;
