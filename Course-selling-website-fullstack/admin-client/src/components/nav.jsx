import { AppBar, Toolbar, Typography,Stack } from "@mui/material";
import React from "react";

function ResponsiveAppBar(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexgrow:1}}>Course Website</Typography>
                <Stack direction="row" spacing={2}>
                    <button>Edit Courses</button>
                </Stack>
            </Toolbar>

        </AppBar>
    )
}
export  default ResponsiveAppBar;