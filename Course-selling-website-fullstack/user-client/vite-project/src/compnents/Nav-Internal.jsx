import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Tabs,
  Tab,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from '@mui/icons-material/Person';

function NavInternal(props) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value,setValue] =React.useState(1);

  const handleChange = (event,newValue)=>{
    console.log("Event data:",event);
    console.log("newValue:",newValue);
    setValue(newValue);
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItem = props.data;
  let a = 1;

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
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              
            >
              {menuItem.map((item)=>{
                return(<Tab key={a++} value={a++} label={item.text} component={Link} to={item.link} sx={{color:"white",fontWeight:"bold"}} />)
              })}
              <IconButton>
                <PersonIcon sx={{color:"white"}}/>
              </IconButton>
            </Tabs>
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

export default NavInternal;
