import * as React from "react";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { MenuItem } from "../../types";

export const HistoryCard = ({
  name,
  description,
  img,
}: MenuItem): ReactElement => {
  const ItemCard = (
    <React.Fragment>
      <CardMedia
        component="img"
        height="194"
        image={process.env.PUBLIC_URL + "/img/byb.jpg"}
        alt="Paella dish"
      />
      <CardContent sx={{ position: "relative" }}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <div style={{ backgroundColor: "#edd2a4", opacity: 0.7 }}>
        </div>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card >
        {ItemCard}
      </Card>
    </Box>
  );
};
