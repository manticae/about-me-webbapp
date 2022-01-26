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
      <Box textAlign="center" sx={{ my: 2 }}>
        <Button onClick={handleInstagramClick} startIcon={<InstagramIcon />}>
          Instagram
        </Button>
      </Box>
    </Container>
  );
}

export default SocialMedia;
