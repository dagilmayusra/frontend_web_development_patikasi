import {useState} from 'react'

function Header({ todos, setTodos }) {
  const [input, setInput] = useState("");
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Eksik bilgi girdiniz!");
      return false;
    }
    setTodos([
      ...todos, 
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput(""); 
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={input} 
          onChange={onChangeInput} 
        />
      </form>
    </header>
  );
}

export default Header;