import React, { useEffect, useState } from "react";
import Nav from "./nav.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import MediaCard from "./Course-card.jsx";
import UpdateCard from "./comp/updateCard.jsx";
import { Grid } from "@mui/material";
import "./css/editpage.css";

function Edit() {
  const [course, setCourses] = useState("");
  const [published, setPublished] = useState(false);

  

  function onClickPublished() {
    published ? setPublished(false) : setPublished(true);
  }

  const courseId = useParams();

  const getCourse = async () => {
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.get(
        "http://localhost:3000/admin/courses/" + courseId.courseId,
        { headers }
      );
      setPublished(res.data.published);
      setCourses(res.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="edit-container">
      <Nav />
      <Grid
        container
        spacing={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
          marginLeft: "60px",
        }}
      >
        <Grid item>
          <MediaCard
            key={course._id}
            title={course.title}
            description={course.description}
            courseId={course._id}
            img={course.imageLink}
            price={course.price}
            Edit={false}
            published={published}
          />
        </Grid>
        <Grid item>
          <UpdateCard
            published={published}
            handlePublished={onClickPublished}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Edit;
