import NavInternal from "../../compnents/Nav-Internal";
import CourseSvg from "../../../svg-component/course-svg";
import CourseCard from "../../compnents/CourseCard";
import Footer from "../../compnents/footer";
import { Box, Grid, Typography } from "@mui/material";

function Courses() {
  const navContent = [
    { text: "All Courses", link: "/courses" },
    { text: "Purchased Courses", link: "/add" },
  ];
  return (
    <>
      <NavInternal data={navContent} />
      <Box
        sx={{

          flexDirection:"column",
          height: "100vh",
          marginTop:"50px"
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "50px",
            
          }}
        >
          <Grid item sx={{flexGrow:"1",marginLeft:"100px"}}>
            <Typography variant="h4">
              Courses from world best educator.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                justifyContent: "center",
                maxWidth: "500px",
                textAlign: "center",
                
              }}
            >
              Proin mattis turpis ac magna maximus, ornare ultricies quam
              luctus.Proin mattis turpis ac magna maximus, ornare ultricies quam
              luctus. Morbi ac turpis nisi. Suspendisse id sapien accumsan,
              mollis nulla in, tincidunt massa. Mauris eget volutpat risus. Nam
              sollicitudin velit faucibus arcu lobortis, ut tincidunt ligula
              euismod. Aenean lacinia a nisl non fringilla.
            </Typography>
          </Grid>
          <Grid item sx={{ textAlign: "center", marginBottom: "50px" }}>
            <CourseSvg />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", marginTop: "100px" }}>
            <Typography variant="h5" fontWeight="bold" >
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
          

          <Grid xs={12}item sx={{ marginTop: "60px" }}>
          <Footer/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Courses;
