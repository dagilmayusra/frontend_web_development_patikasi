import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); 
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    statusHandler(); 
    saveTodos(); 
  }, [todos, status]);
  const statusHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true)); 
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false)); 
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <section className="todoapp">
      {}
      <Header todos={todos} setTodos={setTodos} />

      {}
      {todos.length > 0 ? (
        <>
          <Main
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            status={status}
            setStatus={setStatus}
          />
          <Footer
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            status={status}
            setStatus={setStatus}
          />
        </>
      ) : null}
    </section>
  );
}

export default App;