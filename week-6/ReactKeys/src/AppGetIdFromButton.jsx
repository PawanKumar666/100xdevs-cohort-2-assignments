import React, {useState, useEffect} from "react";
import axios from "axios";

function App(){
    return (
        <>
        <RenderTodo />
        </>
    )
}

function RenderTodo(){
    const [todoId, setTodoId] = useState(1);
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
        .then((res) => {
            setTodo(res.data.todo);
        })
    }, [todoId])

    return (
        <>
        <ButtonOptionsRenderer todoId={todoId} setTodoId={setTodoId} />
        {todo && <TodoRenderer todo={todo} />}
        </>
    )
}

function TodoRenderer({todo}){
    return (
        <>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        </>
    )
}

function ButtonOptionsRenderer({todoId, setTodoId}){

    function CheckAndSetTodoId(id){
        if(id !== todoId){
            setTodoId(id);
        }
    }

    return (
        <>
        <button onClick={() => CheckAndSetTodoId(1)}>1</button>
        <button onClick={() => CheckAndSetTodoId(2)}>2</button>
        <button onClick={() => CheckAndSetTodoId(3)}>3</button>
        <button onClick={() => CheckAndSetTodoId(4)}>4</button>
        </>
    )
}

export default App;