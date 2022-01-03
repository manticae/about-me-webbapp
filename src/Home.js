import * as React from "react";
import PageAppBar from "./components/PageAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
import SocialMedia from "./components/SocialMedia";
import Spacer from "./components/Spacer";
import ProgramDescriptions from "./components/ProgramDescriptions";
import TheProcess from "./components/TheProcess";
import MyStory from "./components/MyStory";
import ContactMe from "./components/ContactMe";
const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#FF7000",
      contrastText: "#FFFFFF",
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
        <Spacer />
        <AboutMe />
        <Spacer />
        <TheProcess />
        <Spacer />
        <ProgramDescriptions />
        <Spacer />
        <ContactMe />
        <Spacer />
        <MyStory />
        <Spacer />
        <SocialMedia />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Home;
