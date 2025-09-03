import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="app">
      <div className="banner">
        <img src="/logo.svg" alt="Todo App Logo" width={128} />
      </div>
      <ThemeToggle />
      <TodoContainer />
    </div>
  );
}

export default App;
