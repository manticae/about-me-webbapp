import * as React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function TheProcess() {
  const image = process.env.PUBLIC_URL + "/backgroundPicture1.png";

  return (
    <Box
      style={{
        display: "flex",
        flexGrow: 1,
        minHeight: "650px",
        backgroundColor: "#c3ccce",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ py: 2 }}
        style={{
          height: "100%",
        }}
      >
        <Grid
          container
          columns={18}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={{ xs: 2 }}
        >
          <Grid item xs={18}>
            <Typography align="center" variant="h4">
              Så Här Fungerar Det
            </Typography>
          </Grid>
          <Grid item xs={10} md={4}>
            <Card
              elevation={0}
              style={{
                height: "250px",
              }}
            >
              <CardContent>
                <Typography align="center" variant="h4">
                  1
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Gconsectetur adipisicing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={4} style={{ alignSelf: "center" }}>
            <Card
              elevation={0}
              style={{
                height: "250px",
              }}
            >
              <CardContent>
                <Typography align="center" variant="h4">
                  2
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor
                  sit amet consectetur adipisicing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={4}>
            <Card
              elevation={0}
              style={{
                height: "250px",
              }}
            >
              <CardContent>
                <Typography align="center" variant="h4">
                  3
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TheProcess;
