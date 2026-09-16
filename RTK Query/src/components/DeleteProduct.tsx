import { useDeleteProductMutation } from "../services/dummyData";

const DeleteProduct = ({ id }: { id: number }) => {
  const [deleteProduct, { data, isLoading, error }] =
    useDeleteProductMutation();
  const handleClick = () => {
    deleteProduct(id);
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
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

export default DeleteProduct;
