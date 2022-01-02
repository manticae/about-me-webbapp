import * as React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const handleInstagramClick = () => {
  console.log("Instagram");
};

function SocialMedia() {
  const instagramPost1 = process.env.PUBLIC_URL + "/instagramPost1.png";
  const instagramPost2 = process.env.PUBLIC_URL + "/instagramPost2.png";
  const instagramPost3 = process.env.PUBLIC_URL + "/instagramPost3.png";

  return (
    <Container maxWidth="md">
      <Typography align="center" variant="h4">
        Följ min resa på Instagram
      </Typography>

      <Box textAlign="center" sx={{ my: 2 }}>
        <Button onClick={handleInstagramClick} startIcon={<InstagramIcon />}>
          Instagram
        </Button>
      </Box>

      <Grid container columns={12}>
        <Grid
          onClick={handleInstagramClick}
          item
          xs={12}
          md={4}
          style={{
            cursor: "pointer",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${instagramPost1})`,
            height: "294px",
            width: "237px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></Grid>

        <Grid
          onClick={handleInstagramClick}
          item
          md={4}
          sx={{ display: { xs: "none", md: "flex" } }}
          style={{
            cursor: "pointer",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${instagramPost2})`,
            height: "294px",
            width: "237px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></Grid>

        <Grid
          onClick={handleInstagramClick}
          item
          md={4}
          sx={{ display: { xs: "none", md: "flex" } }}
          style={{
            cursor: "pointer",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${instagramPost3})`,
            height: "294px",
            width: "237px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
    </Container>
  );
}

export default SocialMedia;
