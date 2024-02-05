import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{display:"grid",justifyItems: "center",alignItems: "center"}}>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>0</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>1</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>2</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>3</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>4</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>5</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>6</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>7</div>
      <div style={{border:"2px solid red",width:"40px",height:"40px"}}>8</div>

     </div>
    </>
  )
}

export default App
