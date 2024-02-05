import { useState } from "react";
import Signup from "./components/Signupp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin";
import CreateCourse from "./components/createCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";
import axios from "axios"
import LandingPage from './components/LandingPage'
import {RecoilRoot,useResetRecoilState, useSetRecoilState,} from 'recoil'
import { userState } from "../atom/admin";
function App() {
  return (
    <>
      <RecoilRoot>
        <div className="mainDiv">
          <Router>
            <Appbar />
            <InitUser/>
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
      </RecoilRoot>
    </>
  );
}

export default App;

function InitUser(){
const setAdmin = useSetRecoilState(userState);
const init=async()=>{
  try{
   const  response=await axios.get(`${url}/profile/me`,{
      headers:{
         authorization: "bearer " + localStorage.getItem("JwtToken")
      }
    })
    if(response.data.username){
      setAdmin({
        isLoading:false,
        userMail: response.data.username,
      })
     }else{
      setAdmin({
        isLoading:false,
        userMail: null,
      })
     }
     console.log(
      setAdmin()
     )

  }catch(e){
     setAdmin({
       isLoading: false,
       userMail: null,
     });

  }
     
}}

// just because harkirat singh said we have used the most ugly state management the main motto of a software engineer is never repeate yourself but
// /but the app which we built is the least fking effecient
// to make this effecient in state management we have two methods we can use global methods to verify the user auth
// and another efficient way is to use external libraries and apis
//1. one method is to create a global top level state where all the components use that that instead of getting values each time 
// but the disadvantage of this is that all the components rerender everything rerenders no matter which state is changed
// 2.another method is to use a library such as use contect of another hooks or recoil