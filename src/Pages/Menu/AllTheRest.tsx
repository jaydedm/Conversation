import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import Masonry from "@mui/lab/Masonry";
import { Burgers } from "../../MockData/burgers";
import { MenuItemCard } from "../../components/Menu/MenuItem";
import { AllTheRest } from "../../MockData/AllTheRest";

export const AllTheRestMenu = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h2"> All The Rest</Typography>
      <Masonry columns={2} spacing={2}>
        {AllTheRest.map((item, index) => {
          return (MenuItemCard(item, index))
        })}
      </Masonry>
    </Box>
  );
};
