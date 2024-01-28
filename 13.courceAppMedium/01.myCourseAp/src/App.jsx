import { useState } from 'react'
import Signup from './components/Signupp'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from './components/Appbar'
import Signin from './components/Signin'

function App() {

  return (
    <>
      <div className="mainDiv">
        <Router>
        <Appbar />
          <Routes>
            <Route path="/Signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
