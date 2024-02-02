import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilValue, useSetRecoilValue } from "recoil";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)}}>count ++</button>
        <button onClick={() => {

          setCount((count) => count - 1)}}>count --</button>
        {/* <h1>{()=>count}</h1> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});
// recoild is another state management library this makes sure that only
// necessary components rerender when needed instead of much dom getting rendered again
// this includes an additional function called atom which takes key and default value
// we const CountState=atom({key:"countState",default:0});
