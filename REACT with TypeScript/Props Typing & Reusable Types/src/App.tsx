// import User from "./components/User";

import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

// import Button from "./components/Button";

export default function App() {
  // return <User name="Abdullah" age={21} isStudent={true} />;
  // return (
  //   <User>
  //     <p>Abdullah is here</p>
  //   </User>
  // );
  // let onclick = () => {
  //   alert("Button was clicked");
  // };
  // let nothing = () => {};
  // return (
  //   <>
  //     <Button label="Click Me" disabled={false} onClick={onclick} />
  //     <br></br>
  //     <br></br>
  //     <Button label="Disabled" disabled={true} onClick={nothing} />
  //   </>
  // );
  return (
    <>
      <UserInfo
        id={Math.floor(Math.random() * 10000000000000000)}
        name="John"
        email="john@abc"
      />
      <AdminInfo
        id={Math.floor(Math.random() * 10000000000000000)}
        name="Doe"
        email="doe@abc"
        role="Admin"
      />
    </>
  );
}
