import NavInternal from "../../compnents/Nav-Internal";
import CourseSvg from "../../../svg-component/course-svg";
import { Box, Grid, Typography } from "@mui/material";
function Courses() {
  const navContent = [
    { text: "Courses", link: "/courses" },
    { text: "Add Course", link: "/add" },
  ];
  return (
    <>
      <NavInternal data={navContent} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Grid item>
            <Typography variant="h4">
              Courses from world best educator.
            </Typography>
            <Typography
                variant="body1"
                sx={{ justifyContent: "center", maxWidth: "500px",textAlign:"center" }}
              >
                Proin mattis turpis ac magna maximus, ornare ultricies quam
                luctus.Proin mattis turpis ac magna maximus, ornare ultricies
                quam luctus. Morbi ac turpis nisi. Suspendisse id sapien
                accumsan, mollis nulla in, tincidunt massa. Mauris eget volutpat
                risus. Nam sollicitudin velit faucibus arcu lobortis, ut
                tincidunt ligula euismod. Aenean lacinia a nisl non fringilla.
                
              </Typography>
          </Grid>
          <Grid item>
            <CourseSvg />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Courses;
