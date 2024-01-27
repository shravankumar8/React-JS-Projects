import "./App.css";
import { useEffect, useState } from "react";

function Todo(person) {
  const [todo, settodo] = useState([]);

  useEffect(() => {
    setInterval(() => {

        fetch("http://localhost:3000/todos", {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            settodo(data); // Update the state with the fetched data
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    },200)

  return (
    <>
      <h1>hello world</h1>

      {todo.map((value, index) => (
        <div key={index}>
          <h1></h1>
          <p>
            {value.title} &nbsp;&nbsp;&nbsp;&nbsp;{value.description}
            &nbsp;&nbsp;
            {value.id}
          </p>
        </div>
      ))}
    </>
  );
}

export default Todo;
