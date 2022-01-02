import * as React from "react";
import PageAppBar from "./components/PageAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      // main: "#FDD982",
      main: "#FF7000",
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
        <AboutMe />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Home;
