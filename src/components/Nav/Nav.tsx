import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavMenu} from "./NavMenu";
import {NavButton} from "../navButton/NavButton";
import { ReactElement } from "react";
// import Button from "@mui/material/Button";
// import LoginIcon from '@mui/icons-material/Login';


export const Nav = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
          {/* could loop through this info too */}
          <NavButton page="/admin" description="admin"></NavButton>
          <NavButton page="/" description="home"></NavButton>
          <NavButton page="/menu" description="menu"></NavButton>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hi-Mountain
           </Typography>

           {/* login button */}
          {/* <Button 
            style={{
              fontSize: 20, 
              color: "white"
            }}
            startIcon={<LoginIcon />}
            size="medium"
            variant="text"
            >
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
