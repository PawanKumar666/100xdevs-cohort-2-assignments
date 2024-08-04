import React, { useState } from 'react'

function App() {
  return (
    <>
    <CountComponent />
    <CountComponentClass />
    </>
  )
}

function CountComponent(){
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Function Component</h1>
    <h1>Count: {count}</h1>
    <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

// React backward compatibility - we can still use class component
class CountComponentClass extends React.Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  render(){
    return (
      <>
      <h1>Class Component</h1>
      <h1>Count: {this.state.count}</h1>
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
      </>
    )
  }
}

export default App;
