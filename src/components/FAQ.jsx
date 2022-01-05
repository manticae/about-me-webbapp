import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Spacer from "./Spacer";
import FAQCard from "./FAQCard";

function FAQ() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">FAQ</Typography>
      <Spacer />
      <Grid container columns={16} spacing={2}>
        <Grid item xs={16} md={8}>
          <FAQCard
            question="Detta är en ganska vanlig fråga?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia, iusto voluptate quaerat corporis fugit. Rerum tempora nulla, odit ex non, vero, reprehenderit qui hic obcaecati eum sit assumenda aliquid"
          />
        </Grid>

        <Grid item xs={16} md={8}>
          <FAQCard
            question="Verkar som att många också undrar om detta?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia, iusto voluptate quaerat corporis fugit"
          />
        </Grid>
        <Grid item xs={16} md={8}>
          <FAQCard
            question="Detta är en ganska vanlig fråga?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia, iusto voluptate quaerat corporis fugit. Rerum tempora nulla, odit ex non, vero, reprehenderit qui hic obcaecati eum sit assumenda aliquid"
          />
        </Grid>
        <Grid item xs={16} md={8}>
          <FAQCard
            question="Verkar som att många också undrar om detta?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia, iusto voluptate quaerat corporis fugit"
          />
        </Grid>
        <Grid item xs={16} md={8}>
          <FAQCard
            question="Verkar som att många också undrar om detta?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia, iusto voluptate quaerat corporis fugit"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FAQ;
