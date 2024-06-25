import React, {useState} from "react";

function App(){
    // Better Syntax
    return (
    <div>
        <TextWrapper>
            <TextRenderer text="Hello World"/>
        </TextWrapper>
        <TextWrapper>
            <RandomRenderer/>
        </TextWrapper>
     </div>
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

function TextWrapper({children}){
    return <div style={{border:"2px solid black", margin:"10px", padding:"10px"}}>{children}</div>
}
export default App;