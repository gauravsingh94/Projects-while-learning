import React, { useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Nav(props) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItem = [
    { text: "Login", link: "/login" },
    { text: "Signup", link: "/signup" },
  ];

  return (
    <>
      <AppBar sx={{ backgroundColor: "#461959" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight="bold">Course Selling Website</Typography>
          {isSmallDevice ? (
            <IconButton onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          ) : (
            <div style={{ display: "flex" }}>
              {props.login ? (
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              ) : (
                <></>
              )}
              {props.register ? (
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ marginLeft: "15px" }}
                >
                  Register
                </Button>
              ) : (
                <></>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItem.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Nav;
