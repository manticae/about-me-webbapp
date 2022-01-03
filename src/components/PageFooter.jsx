import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

function PageFooter() {
  return (
    <Box
      style={{
        flexGrow: 1,
        backgroundColor: "#000000",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography align="center" variant="body2" color="#FFFFFF">
          © Manticae 2021
        </Typography>
      </Container>
    </Box>
  );
}

export default PageFooter;
