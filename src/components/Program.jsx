import * as React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

function Program(props) {
  return (
    <Card
      style={{
        height: "550px",
        backgroundColor: props.item.color,
        borderRadius: 20,
      }}
    >
      <CardMedia component="img" image={props.item.image} />
      <CardContent>
        <Typography align="center" variant="h4">
          {props.item.name}
        </Typography>
        <Typography variant="body1">{props.item.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default Program;
