import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { NavMenu } from "./NavMenu";
import { NavButton } from "../navButton/NavButton";
import { ReactElement } from "react";
import { IconButton } from "@mui/material";

export const Nav = (): ReactElement => {
  const logoStyle: any = { height: "100%" };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" style={{ top: 0 }}>
        <Toolbar disableGutters sx={{ height: 56 }}>
          <NavButton page="/" description="home"></NavButton>
          <NavButton page="/menu" description="menu"></NavButton>
          <NavButton page="/history" description="history"></NavButton>
          <IconButton sx={{ marginLeft: "auto", height: "100%" }}>
            <img
              src={process.env.PUBLIC_URL + "/img/HiMtnLogo-White.png"}
              alt="Hi-Mountain Logo"
              style={logoStyle}
            ></img>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
