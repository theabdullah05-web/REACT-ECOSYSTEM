import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};
const ProductList = () => {
  const [state, setState] = useState<Product[]>([
    { id: 1, name: "Abdullah", price: 2005 },
    { id: 2, name: "Mubasher", price: 1977 },
    { id: 3, name: "Hussain", price: 2024 },
  ]);
  const handleClick = (id: number) => {
    setState(state.filter((el) => el.id !== id));
  };
  return (
    <ul>
      {state.map((el) => (
        <li key={el.id}>
          {el.name}
          {el.price}
          <button onClick={() => handleClick(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
