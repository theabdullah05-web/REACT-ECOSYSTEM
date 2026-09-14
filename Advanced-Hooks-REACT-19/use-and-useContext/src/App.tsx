// import FetchTodo from "./components/FetchTodo";
import { Suspense } from "react";
import UseFetchTodo from "./components/useFetchTodo";

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <UseFetchTodo />
    </Suspense>
  );
};

export default App;
