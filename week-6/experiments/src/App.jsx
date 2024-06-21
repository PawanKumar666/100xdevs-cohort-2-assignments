import { useState } from 'react'
import './App.css'

function App() {
  const [titles, setTitles] = useState(["Title 1", "Title 2", "Title 3"])

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
