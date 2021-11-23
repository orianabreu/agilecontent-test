import React from "react";
import img from "../../assets/images/personalphoto.JPG";
import gLogo from "../../assets/images/g-logo.png";
import { useResponsive } from "../../ResponsiveContext/ResponsiveContext";
import { GLogo } from "./styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";

export default function NavBar() {
  const isMobile = useResponsive();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='inherit'>
        <Toolbar>
          {isMobile ? (
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Agile Content
            </Typography>
          ) : (
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Agile Content | Frontend test
            </Typography>
          )}

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
