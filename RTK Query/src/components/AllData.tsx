import { useGetAllProductsQuery } from "../services/dummyData";

const AllData = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  if (error) {
    return <h1>Some Error Occured</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {data?.products.map((el) => (
        <>
          <h2 key={el.id}>{el.title}</h2>
          <p>{el.description}</p>
        </>
      ))}
    </>
  );
};

export default AllData;
