import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import Masonry from "@mui/lab/Masonry";
import { Burgers } from "../../MockData/burgers";
import { MenuItemCard } from "../../components/Menu/MenuItem";

export const ShakeMenu = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h2"> BURGERS</Typography>
      <Masonry columns={2} spacing={2}>
        {Burgers.map((burger, index) => {
          return (MenuItemCard(burger, index))
        })}
      </Masonry>
    </Box>
  );
};
