import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [color1, setColor1] = useState();
  

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>

      <button className="px-2  bg-red-500 rounded-2xl text-black"  onClick={() => {setColor("red");}}>red</button>
      <button className="px-2  bg-pink-500 rounded-2xl text-black" onClick={() => {setColor("pink");}}>pink</button>
      <button className="px-2  bg-yellow-500 rounded-2xl text-black" onClick={() => {setColor("yellow");}}>yellow</button>
      <button className="px-2  bg-orange-500 rounded-2xl text-black" onClick={() => {setColor("orange");}}>orange</button>
      <button className="px-2    bg-black rounded-2xl text-black" onClick={() => {setColor("black");}}>black</button>
      <button className="px-2    bg-gray-300 rounded-2xl text-black" onClick={() => {setColor("gray");}}>grey</button>
      <button className="px-2  bg-blue-500 rounded-2xl text-black" onClick={() => {setColor("blue");}}>blue</button>
      <button className="px-2  bg-purple-500 rounded-2xl text-black" onClick={() => {setColor("purple");}}>purple</button>
      <button className="px-2  bg-green-500 rounded-2xl text-black" onClick={() => {setColor("green");}}>green</button>
      <button className="px-2    bg-white rounded-2xl text-black" onClick={() => {setColor("white");}}>white</button>
     
    </>
  );
}

export default App;
