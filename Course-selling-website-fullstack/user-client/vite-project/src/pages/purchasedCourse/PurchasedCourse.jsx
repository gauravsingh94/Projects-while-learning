import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "../../compnents/CourseCard";
import Footer from "../../compnents/footer";
import NavInternal from "../../compnents/Nav-Internal";
import axios from "axios";

function PurchasedCourse() {
  const [purchasedCourse, setPurchasedCourse] = useState("");

  useEffect(() => {
    const getPurchasedCourses = async () => {
      try {
        const headers = {
          authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        };

        const res = await axios.get(
          "http://localhost:3000/user/purchasedCourses",
          {
            headers,
          }
        );

        console.log(res.data.purchasedCourse);
        setPurchasedCourse(res.data.purchasedCourse);
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        } else {
          console.log(error.message);
        }
      }
    };

    getPurchasedCourses();
  }, []);

  console.log(purchasedCourse);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <NavInternal />
      <Grid
        container
        spacing={3}
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          marginBottom:"50px"
          
        }}
      >
        {purchasedCourse.length > 0 ? (
          <>
            <Grid item xs={12} sx={{ textAlign: "center", mt: "100px" }}>
              <Typography variant="h5" fontWeight="bold">
                Courses
              </Typography>
            </Grid>
            {purchasedCourse.map((course, index) => (
              <Grid item key={index}>
                <div style={{ maxWidth: "400px", minWidth: "400px" }}>
                  <CourseCard
                    button1={"view"}
                    title={course.title}
                    description={course.description}
                  />
                </div>
              </Grid>
            ))}
          </>
        ) : (
          <Grid item xs={12} sx={{ textAlign: "center", mt: "300px" }}>
            <Typography variant="h4">No Purchased Courses</Typography>
          </Grid>
        )}
      </Grid>
      <Footer />
    </Box>
  );
}

export default PurchasedCourse;
