import React from "react"
import { Typography } from "@mui/material";
import MediaCard from "./MediaCard";

import "./courseDetailCard.css";

function courseDetailsCard() {

  return (
    <>
      <div className="courseShow">
        <Typography variant="h5" sx={{color:"white",textAlign:"center",fontWeight:"bold",marginLeft:"auto",marginRight:"auto"}}>Course Name will be here</Typography>
        <div className="card">
        <MediaCard/>
        </div>
        <div className="about">
          <Typography sx={{fontWeight:"bold"}}>About</Typography>
        <Typography sx={{marginLeft:"10px"}}>Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.</Typography>
        </div>
      </div>
    </>
  )
}

export default courseDetailsCard;
