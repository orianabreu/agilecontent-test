import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import img from "../../assets/images/personalphoto.JPG";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='inherit'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Agile Content | Frontend test
          </Typography>
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <AppsIcon />
          </IconButton>
          <Avatar src={img} sx={{ width: 30, height: 30 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
