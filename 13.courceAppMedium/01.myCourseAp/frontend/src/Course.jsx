import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Course(){
    let {courseId}=useParams()
    useEffect(()=>{
        
    },[])
    return (
      <>
        <div style={{ color: "white" }}>
          hii
          {courseId}
        </div>
      </>
    );
}
export default Course;