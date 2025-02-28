import Todo from "./Components/Todo";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <>
      <ThemeProvider>
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;
