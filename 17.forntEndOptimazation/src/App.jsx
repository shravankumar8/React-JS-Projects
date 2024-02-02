import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilValue, useSetRecoilState, RecoilRoot, atom } from "recoil";
function IncreaseCount() {
  const setCount = useSetRecoilState(countState);
  return (
    <div style={{ color: "white" }}>
      <button
        onClick={() => {
          setCount((existingcount) => existingcount + 1);
        }}
      >
        {" "}
        increase the count{" "}
      </button>
    </div>
  );
}
function CountDisplay() {
  const Count = useRecoilValue(countState);
  return (
    <div>
      <h1>{Count}</h1>
    </div>
  );
}


function DecreaseCount() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <button
        onClick={() => {
          setCount((existingcount) => existingcount - 1);
        }}
      >
        {" "}
        increase the count{" "}
      </button>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <>
        <div
          style={{ width: "400px", border: "2px solid red", height: "325px" }}
        >
          <IncreaseCount />
          <CountDisplay />
          <DecreaseCount />
        </div>
      </>
    </RecoilRoot>
  );
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});
