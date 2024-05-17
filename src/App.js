import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
      

    </div>
  );
}

export default App;
