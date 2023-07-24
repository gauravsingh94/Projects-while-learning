import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./Landing.css";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const navigate = useNavigate();
    const handleClick1 = ()=>{
        navigate("/register");
    }
    const handleClick2 = ()=>{
        navigate("/login");
    }
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url("https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          WebkitBackgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Welcome to course selling website Admin's Panel!</Typography>
        {/* <a href="/register">Register</a> */}
        <Grid container spacing={2} sx={{justifyContent:"center",marginTop:"10px"}}>
          <Grid item>
            <Button variant="contained" color="success" onClick={handleClick1}>
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={handleClick2}>
              Login
            </Button>
          </Grid>
        </Grid>
        <br />
      </Box>
    </div>
  );
}

export default Landing;
