import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CheckIcon from "@mui/icons-material/Check";
import Program from "./Program";
import { scroller } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const handleContactMeClick = () => {
  scroller.scrollTo("contact-me-section", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function ProgramDescriptions() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  const items = [
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
            Ex, amet quisquam eveniet vitae veniam placeat.`,
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
      <Grid container columns={16} spacing={2}>
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
            <CardContent data-aos="fade-up">
              <Typography variant="h4">
                Detta ingår i min online coachning
              </Typography>
              <Typography variant="body1" color="text.secondary">
                En undertitel designad för att introducera till punktlistan
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Skräddarsydda
                träningsscheman.
              </Typography>
              <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Kostschema och
                kostrådgivning.
              </Typography>
              <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Tips på enkla &
                nyttiga recept.
              </Typography>
              <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Möjlighet till
                daglig kontakt.
              </Typography>
              <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Veckovis
                uppföljning.
              </Typography>
              <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Tips &
                rådgivning kring vanor.
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
        <Grid
          item
          xs={16}
          md={8}
          style={{
            alignSelf: "center",
          }}
        >
          <Carousel
            animation="slide"
            duration="1000"
            interval="10000"
            navButtonsAlwaysVisible="true"
          >
            {items.map((item, i) => (
              <Box key={i} px={2}>
                <Program item={item} />
              </Box>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProgramDescriptions;
