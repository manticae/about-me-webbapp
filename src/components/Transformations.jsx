import * as React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Transformations() {
  const progressPicture1 =
    process.env.PUBLIC_URL + "/progressPictures/progressPicture1.png";
  const progressPicture2 =
    process.env.PUBLIC_URL + "/progressPictures/progressPicture2.png";
  const progressPicture3 =
    process.env.PUBLIC_URL + "/progressPictures/progressPicture3.png";
  const items = [
    {
      imageOne: progressPicture1,
      imageTwo: progressPicture2,
      imageThree: progressPicture3,
    },
    {
      imageOne: progressPicture1,
      imageTwo: progressPicture2,
      imageThree: progressPicture3,
    },
    {
      imageOne: progressPicture1,
      imageTwo: progressPicture2,
      imageThree: progressPicture3,
    },
  ];
  return (
    <Box
      name="the-process-section"
      bgcolor="primary.main"
      style={{
        flexGrow: 1,
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ py: 2 }}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          style={{
            flexGrow: 1,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            pb={3}
            style={{
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <Typography pt={2} align="center" variant="h4">
              Före och efter bilder
            </Typography>
            <Typography align="center" variant="body2">
              En beskrivande undertitel till dessa bilder
            </Typography>
          </Box>
          <Carousel
            animation="slide"
            duration="1000"
            interval="10000"
            navButtonsAlwaysVisible="true"
          >
            {items.map((item, i) => (
              <ProgressPictures key={i} item={item} />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

function ProgressPictures(props) {
  return (
    <Grid
      columns={18}
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid
        item
        xs={14}
        md={6}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${props.item.imageOne})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "250px",
        }}
      ></Grid>
      <Grid
        item
        xs={14}
        md={6}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${props.item.imageTwo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "250px",
        }}
      ></Grid>
      <Grid
        item
        xs={14}
        md={6}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${props.item.imageThree})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "250px",
        }}
      ></Grid>
    </Grid>
  );
}

export default Transformations;
