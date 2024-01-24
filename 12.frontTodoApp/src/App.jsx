import './App.css'
import {useState} from 'react'
function App(person) {
  const [todo, settodo] = useState({
    title: "go to gym",
    describe: "go to gym from 5-6",
    id: 1,
  });

  setInterval(() => {
    settodo({
      title: "go to gerggr",
      describe: "go to gymgr gfrgom 5-6",
      id: Math.random() * 23,
    });
  }, 2000);

  return (
    <>
      <h1>hello world</h1>
      {todo.title}
      {todo.describe}
      {todo.id}
      <Person firstname={"kirta"} />
    </>
  );
}
function Person(props){
  return (
    <>
      <h1>This is Shravan</h1>
      <h1>welcome from {props.firstname}</h1>
    </>
  );
}

export default App
