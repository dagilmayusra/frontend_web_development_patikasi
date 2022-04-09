function Todo({ todo, text, todos, setTodos }) {
    const completed = () => {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      );
    };
    const destroy = () => {
      setTodos(todos.filter((item) => item.id !== todo.id));
    };
    return (
      <>
        <li className={`${todo.completed ? "completed" : ""}`}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={completed}
              checked={todo.completed}
            />
            <label>{text}</label>
            <button className="destroy" onClick={destroy}></button>
          </div>
        </li>
      </>
    );
  }
  
  export default Todo;