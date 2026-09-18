import { useNavigate, useParams } from "react-router-dom";

const Student = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      {id}
      <button onClick={handleClick}>Go to Dashboard</button>
    </>
  );
};

export default Student;
