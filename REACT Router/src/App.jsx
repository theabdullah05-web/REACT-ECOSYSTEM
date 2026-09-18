import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";

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
