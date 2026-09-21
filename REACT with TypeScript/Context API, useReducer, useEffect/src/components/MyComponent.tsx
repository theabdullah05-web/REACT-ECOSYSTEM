import { useEffect, useState } from "react";

const MyComponent = () => {
  type data = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
  const [data, setData] = useState<data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/product/1");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Fetching data error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <>
          <h2>Product</h2>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.price}</p>
          <p>{data.discountPercentage}</p>
          <p>{data.rating}</p>
          <p>{data.stock}</p>
          <p>{data.brand}</p>
          <p>{data.category}</p>
          <img src={data.thumbnail} />
          {data.images.map((el) => (
            <img src={el} />
          ))}
        </>
      ) : (
        <p>Data not Found</p>
      )}
    </div>
  );
};

export default MyComponent;
