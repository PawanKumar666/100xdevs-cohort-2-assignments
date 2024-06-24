import { useState } from 'react'
import React from 'react';

function App() {
  const [titles, setTitles] = useState(["Title 1", "Title 2", "Title 3"])
  // We cant return multiple elements in react
  // So we need to return a single element
  // If any state of the parent changes it re-renders
  // Anytime the parent re-renders - all its children re-render (if they are not memoized)
  // Define the state in lowest ancestor from which it is needed
  return (
    //<> both this and <React.Fragment> are same and doesn't add any extra html tag
    <>
      <RandomTitle />
      {titles.map((title) => <MemoHeader title={title} />)}
    </>
    //</>
  )
}

function RandomTitle(){
  const [randomName, setRandomName] = useState("Name");
  return (
    <>
    <button onClick={() => setRandomName(Math.random())}>Click me</button>
    <h3>The name is {randomName}</h3>
    </>
  )
}

//memoization which prevents re-rendering of the component if the props are the same
const MemoHeader = React.memo(Header);

function Header({title}){
  return (
    <h3>The title is {title}</h3>
  )
}

function HeaderButton({title, setTitles}){
  return (
    <button style={{color: "red", fontSize: "20px", padding: "10px", margin: "10px"}} onClick={() => setTitles(prevTitles => [...prevTitles, "New Title " + (prevTitles.length + 1)])}>{title}</button>
  )
}

export default App
