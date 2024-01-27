import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './components/Signupp'
import './App.css'
import Appbar from './components/Appbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{width:"100vw",height:'100vh',backgroundColor:"black"}}>
      <Appbar />
      <Signup />
      </div>
    </>
  );
}

export default App
