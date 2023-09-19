import React, { useState,useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
const [numberalow,Setnumberalow]=useState(false)
const [charalowed,Setcharalowed]=useState(false)
const [passord,Setpassord]=useState("")
const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
},[length,numberalow,charalowed,passord])
  return (
    <>
      <button>Increase Length</button>
      <p>Current Length: {length}</p>
    </>
  );
}

export default App;
