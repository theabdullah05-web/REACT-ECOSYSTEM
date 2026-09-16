import { useGetAllProductsQuery } from "../services/dummyData";

const AllData = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products.</div>;

  return <div>{data ? JSON.stringify(data) : "No products found."}</div>;
};

export default AllData;
