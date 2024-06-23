import { useState } from 'react'

function App() {
  const [titles, setTitles] = useState(["Title 1", "Title 2", "Title 3"])
  const [randomName, setRandomName] = useState("Name");
  // We cant return multiple elements in react
  // So we need to return a single element
  return (
    //<> both this and <React.Fragment> are same and doesn't add any extra html tag
    <>
      <button onClick={() => setRandomName(Math.random())}>Click me</button>
      <RandomTitle title={titles[0]} randomName={randomName} />
    </>
    //</>
  )
}

function RandomTitle({title, randomName}){
  return (
    <>
    <h3>The name is {randomName}</h3>
    <h3>The title is {title}</ h3>
    </>
  )
}

function Header({title, setTitles}){
  return (
    <button style={{color: "red", fontSize: "20px", padding: "10px", margin: "10px"}} onClick={() => setTitles(prevTitles => [...prevTitles, "New Title " + (prevTitles.length + 1)])}>{title}</button>
  )
}

export default App
