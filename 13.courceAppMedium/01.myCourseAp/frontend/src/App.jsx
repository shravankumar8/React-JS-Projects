import { useState } from "react";
import Signup from "./components/Signupp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin";
import CreateCourse from "./components/createCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";
import LandingPage from './components/LandingPage'
function App() {
  return (
    <>
      <div className="mainDiv">
        <Router>
          <Appbar />

          <Routes>
            <Route path="/createcourse" element={<CreateCourse />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
// just because harkirat singh said we have used the most ugly state management the main motto of a software engineer is never repeate yourself but
// /but the app which we built is the least fking effecient
// to make this effecient in state management we have two methods we can use global methods to verify the user auth
// and another efficient way is to use external libraries and apis
