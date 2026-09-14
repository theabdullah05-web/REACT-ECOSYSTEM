import Card from "./Card";
import { ThemeProvider } from "./Context";

const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export default Theme;
