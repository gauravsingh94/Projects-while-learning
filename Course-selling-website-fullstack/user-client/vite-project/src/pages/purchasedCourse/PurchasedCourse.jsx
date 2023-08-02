import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "../../compnents/CourseCard";
import Footer from "../../compnents/footer";
import NavInternal from "../../compnents/Nav-Internal";
function PurchasedCourse() {
    const navContent = [
        { text: "All Courses", link: "/allcourses" },
        { text: "Purchased Courses", link: "/purchasedcourse" },
      ];
  return (
    <>
      <Box sx={{ display: "flex",backgroundColor:"#fafafa" }}>
    <NavInternal data={navContent} me={"/me"}/>
        <Grid  spacing={3} container sx={{justifyContent:"center"}}>
          <Grid item xs={12} sx={{ textAlign: "center", marginTop: "100px" }}>
            <Typography variant="h5" fontWeight="bold">
              Courses
            </Typography>
          </Grid>
          <Grid item >
            <CourseCard />
          </Grid>
          <Grid item>
            <CourseCard />
          </Grid>
          <Grid item>
            <CourseCard />
          </Grid>
          <Grid item>
            <CourseCard />
          </Grid>
          <Grid item>
            <CourseCard />
          </Grid>
          <Grid item>
            <CourseCard />
          </Grid>

          <Grid xs={12} item sx={{ marginTop: "60px" }}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PurchasedCourse;
