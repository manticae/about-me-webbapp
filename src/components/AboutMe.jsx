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
    <Grid container columns={2}>
      <Grid
        item
        xs={2}
        md={1}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image})`,
          height: "100vh",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid item md={1}>
        <Card
          elevation="0"
          square
          sx={{
            height: { xs: "auto", md: "100vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignSelf: "center",
            background: "rgb(222,167,144)",
            background:
              "linear-gradient(0deg, rgba(222,167,144,1) 0%, rgba(234,198,183,1) 100%)",
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              color="white.main"
              mx={10}
              sx={{ fontWeight: "bold", letterSpacing: "2px" }}
            >
              Dags Att Förändra Ditt Liv
            </Typography>
            <Typography variant="body1" mx={10} mt={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aut eum fugit magnam reprehenderit, suscipit explicabo mollitia
              consequatur repellendus beatae maxime eligendi cum accusantium
              tempore nostrum numquam! Minima, tempore quis.re
            </Typography>
          </CardContent>

          <CardActions sx={{ mx: 10, my: 2 }}>
            <Button
              onClick={handleContactMeClick}
              size="large"
              variant="contained"
            >
              Intresseanmälan
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
