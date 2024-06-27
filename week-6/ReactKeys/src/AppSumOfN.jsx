import { useState, useEffect } from "react";

function App(){
    const [n, setN] = useState(0);
    const [sum, setSum] = useState(0);
    const [counterNum, setCounterNum] = useState(0);
    const [debouncedN, setDebouncedN] = useState(null);

    useEffect(() => {
        const handler = setTimeout (() => {
            setDebouncedN(n);
        }, 500)

        return () => clearTimeout(handler);
    }, [n]);

    useEffect(() => {
        const sumOfN = (debouncedN * (debouncedN + 1))/2;
        setSum(sumOfN);
    }, [debouncedN]);

    return (
        <>
        <input type="number" onChange={(e) => setN(parseInt(e.target.value))} />
        <p>Sum: {sum}</p>
        <button onClick={() => setCounterNum(counterNum + 1)}>Counter {counterNum}</button>
        </>
    )
}

export default App;