function Footer({ todos, setTodos, filteredTodos, status, setStatus }) {
    const todosLeft = filteredTodos.filter(
      (item) => item.completed === false
    ).length; 
    const clearCompleted = () => {
      setTodos(todos.filter((item) => item.completed === false)); 
    };
    const anyTodoCompleted = todos.some((todo) => todo.completed === true); 
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosLeft}</strong>
          items left
        </span>
  
        <ul className="filters">
          <li>
            <a
              onClick={() => {
                setStatus("all");
              }}
              className={`${status === "all" ? "selected" : ""}`}
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setStatus("active");
              }}
              className={`${status === "active" ? "selected" : ""}`}
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setStatus("completed");
              }}
              className={`${status === "completed" ? "selected" : ""}`}
            >
              Completed
            </a>
          </li>
        </ul>
  
        {anyTodoCompleted ? (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button> 
        ) : null}
      </footer>
    );
  }
  
  export default Footer;