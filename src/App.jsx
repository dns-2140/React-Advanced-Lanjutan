import './App.css';
import ThemeToggle from './components/ThemeToggle';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className='app'>
      <ThemeToggle />
      <TodoContainer />
    </div>
  );
}

export default App;
