import { useRecoilValue, useRecoilState, RecoilRoot } from "recoil";
import { countState } from "./store/atoms/count";

/*
useRecoilState:
This hook is a combination of useRecoilValue and useSetRecoilState. It is used to read and write a Recoil state. 
It takes a Recoil state (atom or selector) as an argument and returns an array with two elements: 
the current value of the state and a setter function to update the state.

Example:
const [count, setCount] = useRecoilState(countState);


useRecoilValue:
This hook is used to read the value of a Recoil state. It takes a Recoil state (atom or selector) as an argument and returns the current value of that state. 
It subscribes the component to the Recoil state, so the component will re-render whenever the state changes.

Example:
const count = useRecoilValue(countState);

useSetRecoilState:
This hook is used to get a setter function for updating a Recoil state. 
It takes a Recoil state (atom or selector) as an argument and returns a function that can be used to update the state. This function can be used to set the state to a new value or to update it based on the previous value.

Example:
const setCount = useSetRecoilState(countState);
*/

function app(){
    return (
    <RecoilRoot><Count /></RecoilRoot>
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
    const count = useRecoilValue(countState);
    return (
        <h1>Count: {count}</h1>
    )
}

function Buttons(){
    // const count = useRecoilValue(CountContext);
    // const setCount = useSetRecoilState(SetCountContext);
    const [count, setCount] = useRecoilState(countState)
    return (
        <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default app;