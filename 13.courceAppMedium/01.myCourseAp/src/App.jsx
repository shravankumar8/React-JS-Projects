import { useState } from 'react'
import Signup from './components/Signupp'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from './components/Appbar'
import Signin from './components/Signin'
import CreateCourse from './components/createCourse'
function App() {

  return (
    <>
      <div className="mainDiv">
        <Router>
          <Routes>
            <Route path="/createcourse" element={<CreateCourse />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
