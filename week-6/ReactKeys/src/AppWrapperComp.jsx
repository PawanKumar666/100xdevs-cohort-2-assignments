import React, {useState} from "react";

function App(){
    return (
    <>
     <TextWrapper component={<TextRenderer text="Hello World"/>}/>
     <TextWrapper component={<RandomRenderer/>}/>
    </>
    )
}

function TextRenderer({text}){
    return (
    <>
    <h3>{text}</h3>
    <p>I'm just accompanying text</p>
    </>
    )
}

function RandomRenderer(){
    return <h3>{Math.random()}</h3>
}

function TextWrapper({component}){
    return <div style={{border:"2px solid black", margin:"10px", padding:"10px"}}>{component}</div>
}
export default App;