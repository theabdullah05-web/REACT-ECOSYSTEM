import type { MouseEvent } from "react";

const EventHandling = () => {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered:", e.currentTarget);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button was clicked", e.currentTarget);
  };
  return (
    <>
      <div onMouseEnter={handleMouseEnter}>
        <h1>Event Handling</h1>
        <h2>Exercise</h2>
      </div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default EventHandling;
