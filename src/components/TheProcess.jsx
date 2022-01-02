import * as React from "react";
import {
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function TheProcess() {
  return (
    <Box
      style={{
        flexGrow: 1,
        backgroundColor: "#c3ccce",
      }}
    >
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Typography
          align="center"
          variant="h4"
          sx={{ display: { xs: "none", md: "block" }, py: 1 }}
        >
          Så Här Fungerar Det
        </Typography>
        <Typography
          align="center"
          variant="h5"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Så Här Fungerar Det
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Card
            elevation={0}
            style={{
              height: "250px",
              width: "250px",
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
          <Card
            elevation={0}
            style={{
              height: "250px",
              width: "250px",
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
          <Card
            elevation={0}
            style={{
              height: "250px",
              width: "250px",
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
        </Stack>
      </Container>
    </Box>
  );
}

export default TheProcess;
