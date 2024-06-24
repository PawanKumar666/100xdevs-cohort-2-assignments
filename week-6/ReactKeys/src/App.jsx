import { useState } from 'react'

/*
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
*/

function App() {
  const [todos, setTodos] = useState([
    {title: "Learn React", description: "Forget react", id: 1}, 
    {title: "Learn Vue", description: "Forget vue", id: 2}, 
    {title: "Learn Angular", description: "Forget angular", id: 3},
  ])
  /* 
  If we dont add a key to a component, especially when using a array, number of re-renders may increase and it is not efficient
  Keys tell React which array item each component corresponds to, so that it can match them up later. 
  This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. 
  A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
  */
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
    {todos.map((todo) => <RenderTodo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

function RenderTodo({title, description}){
  return (
    <div>
     <h1>{title}</h1>
     <p>{description}</p>
    </div>
  )
}

export default App
