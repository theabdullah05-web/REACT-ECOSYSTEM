import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
    </>
  );
};

export default Nav;
