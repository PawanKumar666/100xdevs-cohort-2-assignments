import { useState, useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        // setCount(count + 1);
        setCount(function(currentCount){
            return currentCount + 1;
        })
    }, []); // The benefit of useCallback is utilised in this particular problem only if we dont have count in the dependency array.
    // Instead of using setCount(count+1) which accesses the current state, we use setCount(function(currentCount){return currentCount + 1;})
    // which ensures that the latest state is captured by the callback. and this helps in ignoring count from the dependancy array

    const handleDecrement = useCallback(() => {
        // setCount(count - 1);
        setCount((currentCount) => currentCount - 1);
    }, []);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
