import { useState } from 'react'
import Signup from './components/Signupp'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from './components/Appbar'
import Signin from './components/Signin'
import CreateCourse from './components/createCourse'
import Courses from './components/Courses';
import Course from './Course'
function App() {

  return (
    <>
      <div className="mainDiv">
        <Router>
          
          <Routes>
            <Route path="/createcourse" element={<CreateCourse />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Appbar />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
