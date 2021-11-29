import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavMenu from "./NavMenu";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hi-Mountain
          </Typography>
          {/* add href="" to turn button to a link */}
          <Button 
            // applying own style by passing in style prop - can override some of the custom styles
            style={{
              fontSize: 30
            }}
            size="large"
            variant="contained" 
            color="secondary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
