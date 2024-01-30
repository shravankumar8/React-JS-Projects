import { useEffect, useState } from "react";
import Card from "@mui/material/Card";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        authorization: "bearer " + localStorage.getItem("JwtToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //    data=JSON.stringify(data);
        setCourses(data.courses);
        console.log(courses);
      });
  }, []);
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center"
      }}
    >
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
  function Course(props) {
    return (
      <Card
        style={{
          margin: 10,
          width: 300,
          minHeight: 200,
        }}
      >
        <div>{props.course.title + " " + props.course.description}</div>
        <img
          src={`src/components/files/${props.course.imageLink}`}
          alt=""
          width={250}
        />
      </Card>
    );
  }
}
export default Courses;
