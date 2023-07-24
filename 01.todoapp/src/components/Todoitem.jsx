import React from "react";
 const Todoitem =(props)=>{
    return (
      <li className="todo-item">
        <span>
          <input className="checkbox"type="checkbox" />
          <span>{props.todo}</span>
        </span>
        <p>...</p>
      </li>
    );
 }
 export default Todoitem