import * as React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

function MyStory() {
  const video = process.env.PUBLIC_URL + "/workoutVideo1.mp4";

  return (
    <Box
      style={{
        flexGrow: 1,
      }}
    >
      <Grid container columns={16}>
        <Grid
          item
          xs={16}
          md={8}
          style={{
            alignSelf: "center",
            backgroundColor: "#c3ccce",
            height: "700px",
          }}
        >
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </Grid>
        <Grid
          item
          xs={16}
          md={8}
          style={{
            alignSelf: "center",
            height: "700px",
            backgroundColor: "#c3ccce",
          }}
        >
          <Card
            elevation={0}
            square
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ mt: 2, mx: 3 }}>
                Min Historia
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, mx: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                aut eum fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cumque aut eum
                fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, mx: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                aut eum fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cumque aut eum
                fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, mx: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                aut eum fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cumque aut eum
                fugit magnam reprehenderit, suscipit explicabo mollitia
                consequatur repellendus beatae maxime eligendi cum accusantium
                tempore nostrum numquam! Minima, tempore quis.re
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyStory;
