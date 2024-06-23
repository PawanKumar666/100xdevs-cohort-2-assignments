import { useState } from 'react'

function App() {
  const [titles, setTitles] = useState(["Title 1", "Title 2", "Title 3"])
  // We cant return multiple elements in react
  // So we need to return a single element
  return (
    //<> both this and <React.Fragment> are same and doesn't add any extra html tag
    <>
      {titles.map((title, index) => <Header title={title} setTitles={setTitles} />)}
    </>
    //</>
  )
}

function Header({title, setTitles}){
  return (
    <button style={{color: "red", fontSize: "20px", padding: "10px", margin: "10px"}} onClick={() => setTitles(prevTitles => [...prevTitles, "New Title " + (prevTitles.length + 1)])}>{title}</button>
  )
}

export default App
