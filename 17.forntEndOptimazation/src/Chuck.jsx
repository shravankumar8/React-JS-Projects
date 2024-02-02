import axios from 'axios'
import { useEffect, useState } from 'react'
function Chuck(){
const   [jokes,setJokes]=useState("")
const   [img,setImg]=useState("")
function fetchguy(){
    axios.get("https://api.chucknorris.io/jokes/random").then((res)=>{
        return res
    }).then((data)=>{
        console.log(data);
       setJokes(data.data.value)
       setImg(data.data.url);
    })

}

useEffect(()=>{
fetchguy()    

},[])

return (
  <>
    <img
      style={{
        animation: "zoomInOut 1s infinite alternate",
        width: "400px", // Set your preferred width
        height: "auto", // Set your preferred height
      }}
      src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
      alt=""
    />
    {jokes}
    <style>
      {`
          @keyframes zoomInOut {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}
    </style>
  </>
);
}
export default Chuck