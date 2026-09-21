import type { Info } from "../types";

const UserInfo = ({ id, name, email }: Info) => {
  return (
    <>
      <p>{id}</p>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </>
  );
};

export default UserInfo;
