import React from "react";
import CourseDetailsCard from "../../compnents/courseDetailCard/CourseDetailCard";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import NavInternal from "../../compnents/Nav-Internal";
import Footer from "../../compnents/footer";

function CourseDetail() {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const navContent = [
    { text: "All Courses", link: "/courses" },
    { text: "Purchased Courses", link: "/add" },
  ];
  return (
    <>
      <NavInternal data={navContent} />
      <div style={{ marginTop: "40px" }}>
        <CourseDetailsCard />
        <Typography
          variant="h6"
          sx={{
            marginTop: isMobileDevice ? "450px" : "300px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Detail
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: isMobileDevice ? "400px" : "1000px",
            textAlign: "center",
            marginTop: "1%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada
          est a est dignissim, vel volutpat tellus bibendum. Integer a dui
          venenatis, bibendum erat sed, cursus turpis. Aenean pulvinar nulla
          est, quis rutrum odio luctus vel. Aenean eget pellentesque turpis.
          Suspendisse potenti. Maecenas porta odio eros, et pharetra augue
          hendrerit quis. Aenean mattis ante tortor, viverra pharetra risus
          accumsan sed. Cras sit amet eleifend leo, in congue quam.{" "}
        </Typography>
        <div style={{ marginTop: "100px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
