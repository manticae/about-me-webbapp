import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { React, useEffect } from "react";
import { scroller } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

import Div100vh from "react-div-100vh";

const handleContactMeClick = () => {
  scroller.scrollTo("contact-me-section", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function AboutMe() {
  const image = process.env.PUBLIC_URL + "/hanna.jpg";
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Grid container columns={2}>
      <Grid item xs={2} md={1}>
        <Box
          sx={{
            height: "inherit",
            backgroundRepeat: "no-repeat",
            backgroundImage: `
          url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Grid>
      <Grid item xs={2} md={1}>
        <Card
          elevation={0}
          square
          sx={{
            px: "5vw",
            height: { xs: "auto", md: "100vh" },
            display: "flex",
            paddingY: { xs: "10px", md: "0px" },
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            background:
              "linear-gradient(0deg, rgba(222,167,144,1) 0%, rgba(234,198,183,1) 100%)",
          }}
        >
          <CardContent>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              variant="h3"
              color="white.main"
              sx={{
                fontWeight: "bold",
                fontSize: { md: "6vw" },
                letterSpacing: "2px",
              }}
            >
              Din Hälsa,
            </Typography>

            <Typography
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-duration="1000"
              variant="h3"
              color="white.main"
              sx={{
                fontWeight: "bold",
                fontSize: { md: "6vw" },
                letterSpacing: "2px",
              }}
            >
              Ditt Ansvar.
            </Typography>

            <Typography
              data-aos="fade-in"
              data-aos-delay="2200"
              data-aos-duration="1000"
              variant="body1"
              mt={2}
            >
              Bygg din drömkropp med min hjälp, har du viljan så har jag
              verktygen för att du ska uppnå dina mål på de mest hälsosamma
              viset.
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: "center", paddingY: "16px" }}>
            <Button
              data-aos="zoom-in"
              data-aos-delay="3000"
              data-aos-duration="1000"
              onClick={handleContactMeClick}
              size="large"
              variant="contained"
              fullWidth
              sx={{
                py: { xs: "15px" },
              }}
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
