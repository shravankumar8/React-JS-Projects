import { useEffect, useState } from "react";

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
    // console.log(data.courses)
    setCourses(data.courses)
      });
  }, []);
  return (
    <div style={{color:"white"}}>
courses titles=
{
    courses.forEach((course)=>{
               return  < Course course={course}/>
    })
}
    </div>
  );
  function Course(props){
    return(
        <div>
            {props.course.title}
        </div>
    )
  }
}
export default Courses;
