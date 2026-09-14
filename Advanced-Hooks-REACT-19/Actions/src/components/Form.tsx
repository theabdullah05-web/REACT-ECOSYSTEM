const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" />
      <br />
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="text" />
      <br />
      <label htmlFor="">Password</label>
      <input name="password" id="password" type="password" />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Form;
