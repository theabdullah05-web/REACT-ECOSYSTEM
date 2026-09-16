import { useAddNewProductMutation } from "../services/dummyData";

const AddNewData = () => {
  const [addNewProduct, { data, isLoading, error }] =
    useAddNewProductMutation();
  const handleClick = async () => {
    const newProduct = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Hoodie",
      description: "One of the best hoodies of the world",
    };
    await addNewProduct(newProduct);
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

export default AddNewData;
