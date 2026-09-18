import { useNavigate, useParams } from "react-router-dom";

const Student = () => {
  let { id } = useParams();
  const handleClick = () => {
    useNavigate("/dashboard");
  };
  return (
    <>
      {id}
      <button onClick={handleClick}>Go to Dashboard</button>
    </>
  );
};

export default Student;
