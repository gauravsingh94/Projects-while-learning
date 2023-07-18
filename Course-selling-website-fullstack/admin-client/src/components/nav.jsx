import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Nav() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const getUsername = async () => {
      const headers = {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      };
      try {
        const res = await axios.get("http://localhost:3000/admin/username", {
          headers,
        });
        setUsername(res.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
    };
    getUsername();
  }, []);

  const handleLogOut=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight="bold" variant="h6">
            Course-Website
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography>Admin- {username}</Typography>
            <Button
              variant="contained"
              sx={{ marginLeft: "10px", backgroundColor: "#A2FF86" }}
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
