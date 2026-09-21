import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import "./App.css";
import TodoList from "./components/TodoList";
export const App = () => {
  return (
    <>
      <Counter />
      <br></br>
      <br></br>
      <UserProfile />
      <br></br>
      <TodoList />
    </>
  );
};
