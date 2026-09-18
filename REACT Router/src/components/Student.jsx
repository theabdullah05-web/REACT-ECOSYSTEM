import { useParams } from "react-router-dom";

const Student = () => {
  let { id } = useParams();
  return (
    <>
      {id}
      <button>Go to Dashboard</button>
    </>
  );
};

export default Student;
