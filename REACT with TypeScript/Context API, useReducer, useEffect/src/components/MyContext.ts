import { createContext } from "react";
interface context {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<context>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
