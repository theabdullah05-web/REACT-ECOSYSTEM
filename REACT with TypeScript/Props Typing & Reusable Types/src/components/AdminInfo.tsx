import type { AdminInfo } from "../types";

const AdminInfo = ({ id, name, email, role }: AdminInfo) => {
  return (
    <>
      <h1>{role}</h1>
      <p>{id}</p>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </>
  );
};

export default AdminInfo;
