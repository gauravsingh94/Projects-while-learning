import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import MediaCard from "../courseCard/Course-card.jsx";
import UpdateCard from "./updateCard.jsx";
import { Grid } from "@mui/material";
import "./editpage.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import{titleAtom,descriptionAtom,priceAtom,publishedAtom ,imageLinkAtom,courseAtom} from "../atom/atom.json";

function Edit() {
  const courseId = useParams();
  console.log(courseId.courseId);

  const handleUpdate = async()=>{
    const title = useRecoilValue(titleAtom);
    const description = useRecoilValue(descriptionAtom);
    const price = useRecoilValue(priceAtom);
    const published = useRecoilValue(publishedAtom);
    const imageLink = useRecoilValue(imageLinkAtom);

    const newCourse = {
      title : title,
      description:description,
      price:price,
      imageLink:imageLink,
      published:published
    }

    const headers={
      authorization:"Bearer "+localStorage.getItem("token"),
      "Content-Type":"application/json"
    }
    
    try{
      const res = await axios.put("http://localhost:3000/admin/courses/"+courseId.courseId,newCourse,{headers})
      console.log(res.data);
      getCourse();
    }catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      else{
        console.log(error.message);
      }
    }
  }

  function onClickPublished() {
    const setPublished = useSetRecoilState(publishedAtom);
    setPublished((existingVal)=>!existingVal);
  }


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
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setImageLink(res.data.imageLink);
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
          marginTop: "140px",
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
            setImageLink={setImageLink}
            setPrice={setPrice}
            setDescription={setDescription}
            setTitle={setTitle}
            ohandleUpdate={handleUpdate}
            title={title}
            description={description}
            imageLink={imageLink}
            price={price}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Edit;
