import React, { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook 
function useTodos(){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setInterval(() => {axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            setTodos(res.data);
        })}, 5000)
    }, [])
    return todos;
}

function App(){
    const todos = useTodos();
    return (
        <>
        {todos && todos.map((todo) => <TodoRenderer key={todo.id} todo={todo} />)}
        </>
    )
}

function TodoRenderer({todo}){
    return (
        <>
        <h3>{todo.title}</h3>
        <p>{(todo.completed).toString()}</p>
        </>
)}

export default App;