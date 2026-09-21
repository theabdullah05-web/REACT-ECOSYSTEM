import { useState } from "react";

const UserProfile = () => {
  interface profile {
    name: string;
    age: string;
    email: string;
  }
  const [profile, setProfile] = useState<profile>({
    name: "",
    age: "",
    email: "",
  });
  const changeName = (name: string) => {
    setProfile((preVal) => ({ ...preVal, name }));
  };
  const changeAge = (age: string) => {
    setProfile((preVal) => ({ ...preVal, age }));
  };
  const changeEmail = (email: string) => {
    setProfile((preVal) => ({ ...preVal, email }));
  };
  return (
    <>
      <h2>Form</h2>
      <input
        type="text"
        value={profile.name}
        placeholder="name"
        onChange={(e) => changeName(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        value={profile.age}
        placeholder="age"
        onChange={(e) => changeAge(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="email"
        value={profile.email}
        onChange={(e) => changeEmail(e.target.value)}
      />
      <br></br>
      <h3>Profile Info</h3>
      {profile.name !== "" && <h4>Name: {profile.name}</h4>}
      {profile.age !== "" && <h4>Age: {profile.age}</h4>}
      {profile.email !== "" && <h4>Email: {profile.email}</h4>}
    </>
  );
};

export default UserProfile;
