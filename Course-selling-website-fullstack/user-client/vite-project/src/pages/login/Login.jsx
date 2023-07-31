import React from "react";
import {
  Card,
  Typography,
  TextField,
  Box,
  Grid,
  inputLabelClasses,
  Button,
} from "@mui/material";
import LoginSvg from "../../../svg-component/login-svg";
import Nav from "../../compnents/Nav";
import "./login.css";

function Login() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#e3c3ef",
        }}
      >
        <Nav
          navContent={[
            { text: "Login", link: "/login" },
            { text: "Signup", link: "/signup" },
          ]}
          login={false}
        />
        <Grid
          container
          spacing={15}
          alignItems="center"
          justifyContent="center"
          sx={{mt:"1"}}
        >
          <Grid item xs={12} marginBottom="5px">
            <Typography
              variant="h3"
              fontWeight="bold"
              color="purple"
              textAlign="center"
              sx={{ fontFamily: "Dancing Script, cursive",marginTop:"80px" }}
            >
              Login to Course Selling Website
            </Typography>
          </Grid>
          <Grid item>
            <LoginSvg />
          </Grid>
          <Grid item>
            <Card sx={{ padding: "40px", maxWidth: "210px" }}>
              <div>
                <TextField
                  id="filled-basic"
                  label="Username"
                  variant="standard"
                  InputLabelProps={{
                    sx: {
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "purple",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "purple",
                    },
                  }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="standard"
                  InputLabelProps={{
                    sx: {
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "purple",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "purple",
                    },
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: "15px", backgroundColor: "purple" }}
              >
                Login
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
