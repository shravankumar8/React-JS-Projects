import React from 'react'
import {useState} from 'react'
function App(){
  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")

 let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
 let numbers="1234567890"
  let chars="!@#$%^&*(){}"
  const passwordgenerator=()=>{
    if(numberallowed){
str+=numbers
for (let i = 0; i <length; i++) {
  console.log(str[i])
  
}
    }
    if(charallowed){
      str+=chars
    }

  }
  return(
    <>
    <h1 className='text-black'>hi</h1></>
  )
}
export default App