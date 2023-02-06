import * as React from "react";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { MenuItem } from "../../types";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MenuItemCard = (
  { name, description, price, reactions, img }: MenuItem,
  index: number
): ReactElement => {
  function numberWithCommas(x: number | undefined) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : undefined;
  }

  function openCard(e: any) {
    console.log(e);
  }

  const ItemCard = (
    <React.Fragment>
      <CardMedia
        component="img"
        height="194"
        image={process.env.PUBLIC_URL + "/img/byb.jpg"}
        alt="Paella dish"
      />
      <CardContent sx={{ position: "relative", padding: 3, paddingTop: 5, paddingBottom: 0 }}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <div style={{ backgroundColor: "#edd2a4", opacity: 0.7 }}>
          <Typography
            variant="h5"
            sx={{ position: "absolute", top: 5, right: 5, color: "grey" }}
          >
            ${price}
          </Typography>
        </div>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }} key={index} onClick={openCard}>
      <Card>
        {ItemCard}
        <CardActions sx={{ flexDirection: "row-reverse" }}>
          <IconButton aria-label="add to favorites">
            <Typography variant="subtitle1" style={{ paddingRight: 5 }}>
              {numberWithCommas(reactions)}
            </Typography>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
