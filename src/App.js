import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Todo App</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
