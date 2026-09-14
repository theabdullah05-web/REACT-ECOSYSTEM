import React, { createContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const themeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
const ThemeProvider = ({ children }: React.ReactNode) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme((preVal) => (preVal == "light" ? "dark" : "light"));
  };
};
