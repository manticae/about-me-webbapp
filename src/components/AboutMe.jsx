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
import { scroller } from "react-scroll";

const handleContactMeClick = () => {
  scroller.scrollTo("contact-me-section", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function AboutMe() {
  const image = process.env.PUBLIC_URL + "/profilePicture.png";
  return (
    <Container maxWidth="xl">
      <Grid container columns={16}>
        <Grid
          item
          xs={16}
          md={8}
          style={{
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${image})`,
            height: "580px",
            width: "720px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={16}
          md={8}
          style={{
            alignSelf: "center",
            height: "580px",
            width: "720px",
          }}
        >
          <Card
            elevation={0}
            square
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignSelf: "center",
              height: "100%",
              width: "100%",
              // backgroundColor: "#eac6b7",
            }}
          >
            <CardContent>
              <Typography variant="h4">
                En lång titel som verkligen poängterar din stil och ditt uppdrag
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, mx: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                aut eum fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re
              </Typography>
            </CardContent>

            <CardActions sx={{ ml: 5 }}>
              <Button
                onClick={handleContactMeClick}
                size="large"
                variant="contained"
              >
                Kontakta Mig
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
