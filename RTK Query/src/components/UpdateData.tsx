import { useUpdateProductMutation } from "../services/dummyData";

const UpdateData = ({ id }: any) => {
  const [addNewProduct, { data, isLoading, error }] =
    useUpdateProductMutation();
  const handleClick = async () => {
    const updatedProduct = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Product Updated",
      description: "One of the best updated Products",
    };
    await addNewProduct({ id, updatedProduct });
  };
  if (error) {
    return <h1>Some Error Occured</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {data ? (
        <>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
        </>
      ) : (
        <></>
      )}
      <button onClick={handleClick}>Add Data</button>
    </>
  );
};

export default UpdateData;
