import * as React from "react";
import { Card, Typography } from "@mui/material";

function FAQCard(props) {
  return (
    <Card
      elevation={0}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="h6">{props.question}</Typography>
      <Typography variant="body1">{props.answer}</Typography>
    </Card>
  );
}

export default FAQCard;
