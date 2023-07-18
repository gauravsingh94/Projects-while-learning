import React,{useState} from "react";
import { Card, TextField, Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");
  const handleUpdate = async()=>{
  
    const newCourse = {
      title : title,
      description:description,
      price:price,
      imageLink:imageLink,
      published:props.published
    }

    const headers={
      authorization:"Bearer "+localStorage.getItem("token"),
      "Content-Type":"application/json"
    }
    
    try{
      const res = await axios.put("http://localhost:3000/admin/courses/"+useParams().courseId,newCourse,{headers})
      console.log(res.data);
    }catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      else{
        console.log(error.message);
      }
    }
  }
  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="ImageTitle"
          variant="outlined"
          sx={{ marginTop: "10px" }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={props.handlePublished}
        >
          {props.published ? "Not published" : "Published"}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ marginTop: "10px" }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Card>
    </>
  );
}

export default UpdateCard;
