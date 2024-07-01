import { useState } from 'react';

function App(){
    const [count, setCount] = useState(0);

    return (
        <>
        <Count count={count} />
        <Buttons count={count} setCount={setCount} />
        </>
    )
}

function Count({count, setCount}){ // This component doesn't need the props for count and setCount. It's just getting used as bridge between the parent and child components
    return (
        <>
        <CountRenderer count={count} />
        <Buttons count={count} setCount={setCount} />
        </>
    )
}

function CountRenderer({count}){
    return (
        <h1>Count: {count}</h1>
    )
}

function Buttons({count, setCount}){
    return (
        <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default App;