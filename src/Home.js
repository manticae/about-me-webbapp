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
import ProgramMiscellaneous from "./components/ProgramMiscellaneous";
import PageFooter from "./components/PageFooter";
import FAQ from "./components/FAQ";
import Transformations from "./components/Transformations";

const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#6cc5d5",
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
        <ProgramMiscellaneous />
        <Spacer />
        <ContactMe />
        <Spacer />
        <Transformations />
        <Spacer />
        <MyStory />
        <Spacer />
        <SocialMedia />
        <Spacer />
        <FAQ />
        <Spacer />
        <PageFooter />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Home;
