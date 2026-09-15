import SubmitButton from "./SubmitButton";

const Form = () => {
  const formAction = async (formData: any) => {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 3000);
    });
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
  };
  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" />
      <br />
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="text" />
      <br />
      <label htmlFor="">Password</label>
      <input name="password" id="password" type="password" />
      <br />
      <SubmitButton />
    </form>
  );
};

export default Form;
