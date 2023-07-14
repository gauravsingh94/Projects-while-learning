import axios from "axios";
import React, { useEffect, useState } from "react";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);

  const handleClick = () => {
    published ? setPublished(false) : setPublished(true);
  };
  const handleButtonClick = async () => {
    console.log(title);
    console.log(description);
    console.log(price);
    console.log(image);

    const body = {
      title: title,
      description: description,
      price: price,
      imageLink: image,
      published: published,
    };
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/admin/courses",
        body,
        { headers }
      );
      alert(res.data.message);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {});
  console.log(published);
  return (
    <div>
      <h1>Create Course</h1>
      <h2>Title:</h2>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <h2>Description:</h2>
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <h2>Price:</h2>
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <h2>Image:</h2>
      <input
        type="text"
        placeholder="Image-Link"
        onChange={(e) => setImage(e.target.value)}
      />
      <h3>Do you want to publish the course after creating?</h3>
      {published ? <button onClick={handleClick}>Not Publish</button> : <button onClick={handleClick}>Publish</button>}
      <br />
      <br />
      <button onClick={handleButtonClick}>Add Course</button>
    </div>
  );
}

export default CreateCourse;
