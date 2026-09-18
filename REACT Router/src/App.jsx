import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
const App = () => {
  return <div>App</div>;
};

export default App;
