// import FetchTodo from "./components/FetchTodo";
import { Suspense } from "react";
import UseFetchTodo from "./components/useFetchTodo";

const App = () => {
  return (
    <Suspense>
      <UseFetchTodo />
    </Suspense>
  );
};

export default App;
