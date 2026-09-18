import { useParams } from "react-router-dom";

const Student = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default Student;
