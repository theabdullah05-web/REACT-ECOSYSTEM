import { useGetAllProductsQuery } from "../services/dummyData";

const AllData = () => {
  const [data, isLoading, error] = useGetAllProductsQuery();
  return <div>AllData</div>;
};

export default AllData;
