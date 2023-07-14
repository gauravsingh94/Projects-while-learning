import React from "react";
import axios from "axios";

function ShowCourses() {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const handleGetRequest = async () => {
      const headers = {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      };
      try {
        const res = await axios.get("http://localhost:3000/admin/courses", {
          headers,
        });
        setCourses(res.data.courses);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
      
    };

    handleGetRequest();

    const interval = setInterval(handleGetRequest,3000);
    return ()=>{
        clearInterval(interval);
    }
  }, []);

  const handleDelete = async(courseId)=>{
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.delete(`http://localhost:3000/admin/courses/${courseId}`, {
        headers,
      });
      handleGetRequest();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }

  console.log(courses[0]);

  return (
    <div>
      <h1>Courses</h1>
      {console.log(courses)}
      {Array.isArray(courses) ? (
        courses.map((a) => {
          return (
            <div key={a._id}>
              <h2>{a.title}</h2>
              <p>{a.description}</p>
              <p>{a.published ? "Published" : "Unpublished"}</p>
              <button onClick={()=>handleDelete(a._id)}>Delete</button>
            </div>
          );
        })
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
}

export default ShowCourses;
