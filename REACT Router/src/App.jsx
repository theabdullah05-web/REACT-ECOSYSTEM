import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import "./style.css";
import Student from "./components/Student";
import Notes from "./components/Notes";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Nav />
        <About />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Nav />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "notes",
        element: <Notes />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <>
        <Nav />
        <Student />
      </>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
