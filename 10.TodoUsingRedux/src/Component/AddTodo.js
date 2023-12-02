import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../../features/todo/todoSlice'


function AddTodo(){
    const [input,setinput]=useState('')
    const dispatch =useDispatch
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }
    return(
        <div>ADDTODO</div>
    )
}
export default AddTodo