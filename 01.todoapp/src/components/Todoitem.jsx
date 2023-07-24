import React from "react";
 const Todoitem =(props)=>{
    return (
      <li className="todo-item">
        <span>
        {props.completed ?<></>:
          <input className="checkbox"type="checkbox" />}
          <span>{props.todo}</span>
        </span>
        <p>...</p>
      </li>
    );
 }
 export default Todoitem