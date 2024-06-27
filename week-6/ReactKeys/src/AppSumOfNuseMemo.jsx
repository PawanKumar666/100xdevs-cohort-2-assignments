import { useState, useMemo } from "react";

function App(){
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    /*
    let sum = 0;
    for (let i = 0; i <= inputValue; i++){
        sum += i;
    }
    */
   // useMemo helps us save a state variable and not utilise useEffect and helps in minimizing the re-renders
    let sum = useMemo(() => {
        let sumOfN = 0;
        for (let i = 0; i<= inputValue; i++){
            sumOfN += i;
        }
        return sumOfN;
    }, [inputValue]);

    return (
        <div>
            <input type="number" onChange={(e) => setInputValue(e.target.value)} />
            <p>Sum: {sum}</p>
            <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </div>
    )
}

export default App;