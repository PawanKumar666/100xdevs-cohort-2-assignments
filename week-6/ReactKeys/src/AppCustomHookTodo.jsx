import React, { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook
// custom hook is a function whose name starts with use and that can call other hooks. 
// They allow you to extract component logic into reusable functions.
function useTodos(){
    const [todos, setTodos] = useState([]);
    console.log(typeof(todos))
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