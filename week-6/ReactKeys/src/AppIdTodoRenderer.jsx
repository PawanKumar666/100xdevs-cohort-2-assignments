import React, { useState, useEffect } from "react";
import axios from "axios";

function App(){
    const [todo, setTodo] = useState({});
    const [todoId, setTodoId] = useState(null);
    useEffect(() =>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
        .then((res) => {
            console.log(res.data.todo);
            setTodo(res.data.todo);
        })
    }, [todoId])
    return (
        <>
        <TodoRenderer todo={todo} setTodoId={setTodoId}/>
        </>
    )
}

function TodoRenderer({todo, setTodoId}){
    return (
        <>
        <input type="number" onChange={(e) => setTodoId(e.target.value)} />
        {todo && (
        <>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        </>
    )}
        </>
    )
}

export default App;