import { useState } from 'react'
import './App.css'

function App() {
  const [titles, setTitles] = useState(["Title 1", "Title 2", "Title 3"])
  // We cant return multiple elements in react
  // So we need to return a single element
  return (
    <>
    <div>
      {titles.map((title, index) => <Header title={title} index={index} />)}
    </div>
    </>
  )
}

function Header({title, index}){
  return (
    <h1>{title}</h1>
  )
}

export default App
