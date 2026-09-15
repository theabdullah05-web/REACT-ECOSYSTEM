import { useActionState } from "react";

const Counter = () => {
  const increment = async (previousState: number, formData: FormData) => {
    console.log(formData.get("name"));
    return previousState + 1;
  };
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      <h2>{state}</h2>
      <button formAction={formAction}>Increment</button>
      <input name="name" />
    </form>
  );
};

export default Counter;
