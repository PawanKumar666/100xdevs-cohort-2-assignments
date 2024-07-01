import { useState, useContext } from "react";
import { CountContext, SetCountContext } from "./context";

function app(){
    const [count, setCount] = useState(0);

    // wrap any component that wants to use the teleported value inside the provider
    // The context value can be a complex object
    return (
        <CountContext.Provider value={count}>  
            <SetCountContext.Provider value={setCount}>
                <Count />
            </SetCountContext.Provider>
        </CountContext.Provider>
    )
}

function Count(){
    return (
        <>
        <CountRenderer />
        <Buttons />
        </>
    )
}

function CountRenderer(){
    const count = useContext(CountContext);
    return (
        <h1>Count: {count}</h1>
    )
}

function Buttons(){
    const count = useContext(CountContext);
    const setCount = useContext(SetCountContext);
    return (
        <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default app;