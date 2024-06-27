import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [debouncedTodoId, setDebouncedTodoId] = useState(null);

  useEffect(() => {
    // Debouncing logic
    const handler = setTimeout(() => {
      setDebouncedTodoId(inputValue);
    }, 500); // 500ms delay

    // Cleanup timeout if inputValue changes before delay is over
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    if (debouncedTodoId) {
      axios
        .get(`https://sum-server.100xdevs.com/todo?id=${debouncedTodoId}`)
        .then((res) => {
          console.log(res.data.todo);
          setTodo(res.data.todo);
        });
    }
  }, [debouncedTodoId]);

  return (
    <>
      <TodoRenderer inputValue={inputValue} setInputValue={setInputValue} todo={todo} />
    </>
  );
}

function TodoRenderer({ inputValue, setInputValue, todo }) {
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {todo && (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </>
      )}
    </>
  );
}

export default App;
