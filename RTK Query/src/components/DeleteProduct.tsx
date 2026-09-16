import { useDeleteProductMutation } from "../services/dummyData";

const DeleteProduct = ({ id: number }) => {
  const [deleteProduct, { data, isLoading, error }] =
    useDeleteProductMutation();
  const handleClick = () => {
    deleteProduct(id);
  };
  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default DeleteProduct;
