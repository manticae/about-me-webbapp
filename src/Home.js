import * as React from "react";
import PageAppBar from "./components/PageAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5EA563",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    white: {
      main: "#ffffff",
    },
    textColor: {
      main: "#000000",
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <PageAppBar />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Home;
