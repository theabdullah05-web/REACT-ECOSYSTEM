import { useEffect, useState } from "react";

const UserList = () => {
  type data = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const results = await res.json();
      setData(results);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>user Details:</h2>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <tr>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Id
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Name
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Username
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Email
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Phone
          </th>
        </tr>
        {data.map((el) => (
          <tr>
            <td
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              {el.id}
            </td>
            <td
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              {el.name}
            </td>
            <td
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              {el.username}
            </td>
            <td
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              {el.email}
            </td>
            <td
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              {el.phone}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default UserList;
