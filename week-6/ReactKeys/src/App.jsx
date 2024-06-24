import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {title: "Learn React", description: "Forget react", id: 1}, 
    {title: "Learn Vue", description: "Forget vue", id: 2}, 
    {title: "Learn Angular", description: "Forget angular", id: 3},
  ])

  return (
    <>
    <button onClick={function createNewTodo(){
        setTodos((todos) => [...todos, {title: `Learn ${Math.random()}`, 
        description: `Forget ${Math.random()}`,
        id : todos.length + 1,
        }
      ]
    )}}>Add Todo
    </button>
    {todos.map((todo) => <RenderTodo title={todo.title} description={todo.description} id={todo.id}/>)}
    </>
  )
}

function RenderTodo({title, description, id}){
  return (
    <div key={id}>
     <h1>{title}</h1>
     <p>{description}</p>
    </div>
  )
}

export default App
