import "./App.css";
import { useState } from "react";
function App(person) {
  const [todo, settodo] = useState([
    {
      title:"brush ",
      describe:"wakie wakie brush your teeth",
      id:1
    },
    {
      title:"bath ",
      describe:"wakie wakie bath your body",
      id:1
    },
    {
      title:"shave ",
      describe:"wakie wakie shave your beard",
      id:1
    },
  ]);
  
  return (
    <>
      <h1>hello world</h1>

      {todo.map((value) => {
        return (
          <>
            <p>{value.title}</p>
            <p>{value.describe}</p>
            <p>{value.age}</p>
          </>
        );
      })}
    </>
  );
}


export default App;
