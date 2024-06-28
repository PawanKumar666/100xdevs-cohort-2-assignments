import { useMemo } from "react";
import { memo, useState, useCallback } from "react";

// Use React.memo to prevent a functional component from re-rendering when its props have not changed.
// Use useMemo to memoize a value or a result of an expensive computation, 
// recalculating it only when its dependencies change.

function App(){
    const [count, setCount] = useState(0);
    
    function a(){
        console.log("Function a called");
    }
    function b(){
        console.log("Function b called");
    }

    // 
    let c = useCallback(() => {
        console.log("Function c called");
    }, [])

    let objC = useMemo(() => {
        console.log("Function objC called");
        return {name: "John", age: 20} // Utilise useMemo to memoize the object
    }, [])

    const numA = 1;
    const numB = 1;
    const strA = "Hello"
    const strB = "Hello"
    const objA = {name: "John", age: 20}
    const objB = {name: "John", age: 20}

    console.log("Are functions equal?", a === b);
    console.log("Are numA and numB equal?", numA === numB);
    console.log("Are strA and strB equal?", strA === strB);
    console.log("Are objA and objB equal?", objA === objB);
    console.log(`Functions and objects equality are checked by reference, 
                 while numbers and strings are checked by value.`);

    // So if while using function(object) as a prop to a component, we need to utilise useCallback
    // to ensure that the reference to the function or object is not lost, and the component is not re-rendered.

    return (
        <>
        <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        <ChildComponentObject data={a} />
        <ChildComponentObject data={objA} />
        <ChildComponentObject data={c} />
        <ChildComponentObject data={objC} />
        <ChildComponentNonObject data = {numA} />
        <ChildComponentNonObject data = {strA} />
        </>
    )
}

// Memo is used to prevent re-rendering of a component when its props are not changed.
const ChildComponentObject = memo(({obj}) => {
    console.log("ChildComponent(Object) re-rendered");
    return <p>Child Component (Object)</p>
})


const ChildComponentNonObject = memo(({data}) => {
    console.log("ChildComponent(Non-Object) re-rendered");
    return <p>Child Component (Non-Object)</p>
})

// function ChildComponentNonObject({data}){
//     console.log("ChildComponent(Non-Object) re-rendered");
//     return <p>Child Component (Non-Object)</p>
// }

export default App;