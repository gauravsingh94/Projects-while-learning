import React from "react";
import NavInternal from "../../compnents/Nav-Internal";
import MeCard from "../../compnents/me-components/Me-card";
import { Box } from "@mui/material";
import Footer from "../../compnents/footer";

function Me() {
  const navContent = [
    { text: "All Courses", link: "/courses" },
    { text: "Purchased Courses", link: "/purchasedcourse" },
  ];
  return (
    <>
      <Box sx={{backgroundColor:"#fafafa"}}>
        <NavInternal data={navContent} />
        <MeCard />
        <div style={{marginTop:"400px"}}>
        <Footer/>
        </div>
      </Box>
    </>
  );
}

export default Me;
