import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavMenu} from "./NavMenu";
import {NavButton} from "../NavButton/NavButton";
import { ReactElement } from "react";

export const Nav = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
          <NavButton page="/admin" description="admin"></NavButton>
          <NavButton page="/" description="home"></NavButton>
          <NavButton page="/menu" description="menu"></NavButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hi-Mountain
          </Typography>
          <NavButton page="/signup" description="Sign Up"></NavButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
