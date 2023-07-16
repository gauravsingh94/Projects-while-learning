import React from "react";
import axios from "axios";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./nav.jsx"

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

    const interval = setInterval(handleGetRequest,10000);
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
    <Box>
      <ResponsiveAppBar/>
    </Box>
  );
}

export default ShowCourses;
