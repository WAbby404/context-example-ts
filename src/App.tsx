import { ThemeContextProvider } from "./ThemeContext";
import { Box } from "./Box";

function App() {
  return (
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  );
}

export default App;
