import { useRef } from "react";

const FocusInput = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  const focusInp = () => {
    inpRef.current!.focus();
  };
  return (
    <>
      <input ref={inpRef} />
      <button onClick={focusInp}>Focus on Input</button>
    </>
  );
};

export default FocusInput;
