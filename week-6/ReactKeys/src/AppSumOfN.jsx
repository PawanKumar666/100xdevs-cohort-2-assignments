import { useState } from "react";

function App(){
    const [sum, setSum] = useState(0);
    const [counterNum, setCounterNum] = useState(0);
    function OnInputChange(e){
        console.log(e)
        const sumOfN = (e * (e + 1))/2;
        setSum(sumOfN);
    }
    return (
        <>
        <input type="number" onChange={(e) => OnInputChange(parseInt(e.target.value))} />
        <p>Sum: {sum}</p>
        <button onClick={() => setCounterNum(counterNum + 1)}>Counter {counterNum}</button>
        </>
    )
}

export default App;