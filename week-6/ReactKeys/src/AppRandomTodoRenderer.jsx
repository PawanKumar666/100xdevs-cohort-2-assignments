import React, {useState, useEffect} from "react";

function TodoRenderer({title, description}){
    return (
        <>
        <h3>{title}</h3>
        <p>{description}</p>
        </>
    )
}

function TodoCardWrapper({children}){
    return <div style={{border:"2px solid black", margin:"10px", padding:"10px"}}>{children}</div>
}

function App(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async (res) => {
            const value = await res.json();
            setTodos(value.todos);
        })
        }, 5000);
        return () => clearInterval(intervalId);
    }, [])

    /*
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
        const value = await res.json();
        setTodos(value.todos);
        })
    }, [])
    */

    return (
        <div>
            {todos && todos.map((todo) => {
                        return (<TodoCardWrapper key={todo.id}>
                            <TodoRenderer title={todo.title} description={todo.description} />
                        </TodoCardWrapper>)
                })}
        </div>
    )
}

export default App;