import * as React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CheckIcon from "@mui/icons-material/Check";
import Program from "./Program";

const handleContactMeClick = () => {
  console.log("Kontakta mig!");
};

function ProgramDescriptions() {
  var items = [
    {
      name: "Exempel Program Stryka",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ex, amet quisquam eveniet vitae veniam placeat, distinctio eius 
        quaerat necessitatibus numquam sed, veritatis illo pariatur? Veniam 
        id ab aliquid voluptatibus dolore.`,
      color: "#f0f4e6",
      image: process.env.PUBLIC_URL + "/program1.png",
    },
    {
      name: "Exempel Program Rörlighet",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Ex, amet quisquam eveniet vitae veniam placeat, distinctio eius 
            quaerat necessitatibus numquam sed, veritatis illo pariatur? Veniam 
            id ab aliquid voluptatibus dolore.`,
      color: "#9cb58e",
      image: process.env.PUBLIC_URL + "/program2.png",
    },
    {
      name: "Exempel Program Viktnedgång",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Ex, amet quisquam eveniet vitae veniam placeat, distinctio eius 
      quaerat necessitatibus numquam sed, veritatis illo pariatur? Veniam 
      id ab aliquid voluptatibus dolore.`,
      color: "#fdccdd",
      image: process.env.PUBLIC_URL + "/program3.png",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Grid container columns={16}>
        <Grid
          item
          xs={16}
          md={8}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            square
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h4">
                En mycket lång titel om de program som du erbjuder och hur det
                till exempel kan fungera
              </Typography>
              <Typography variant="body1" color="text.secondary">
                En undertitel designad för att introducera till punktlistan
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="h6">
                <CheckIcon sx={{ mr: 1 }} /> Detta ingår i ditt program
              </Typography>
              <Typography variant="h6">
                <CheckIcon sx={{ mr: 1 }} /> Detta ingår också i ditt program
              </Typography>
              <Typography variant="h6">
                <CheckIcon sx={{ mr: 1 }} /> Detta ingår också i ditt program
              </Typography>
              <Typography variant="h6">
                <CheckIcon sx={{ mr: 1 }} /> Detta ingår också i ditt program
              </Typography>
              <Typography variant="h6">
                <CheckIcon sx={{ mr: 1 }} /> Detta ingår också i ditt program
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1">
                Mycket mer information får också plats här, som till exempel
                information om kost alternativ eller allergier i kostplaner osv
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={handleContactMeClick}
                size="large"
                variant="contained"
              >
                Jag vill veta mer
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={16} md={2}></Grid>
        <Grid
          item
          xs={16}
          md={4}
          style={{
            alignSelf: "center",
          }}
        >
          <Carousel animation="slide" duration="1000" interval="10000">
            {items.map((item, i) => (
              <Program key={i} item={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={16} md={2}></Grid>
      </Grid>
    </Container>
  );
}

export default ProgramDescriptions;
