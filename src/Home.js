import * as React from 'react'
import PageAppBar from './components/PageAppBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AboutMe from './components/AboutMe'
import Spacer from './components/Spacer'
import ProgramDescriptions from './components/ProgramDescriptions'
import MyStory from './components/MyStory'
import ContactMe from './components/ContactMe'
import ProgramMiscellaneous from './components/ProgramMiscellaneous'
import PageFooter from './components/PageFooter'

const theme = createTheme({
  typography: {
    fontFamily: ['Ledger', 'serif'].join(',')
  },
  palette: {
    primary: {
      // main: "#6cc5d5",
      main: '#eac6b7',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00'
    },
    white: {
      main: '#ffffff'
    },
    textColor: {
      main: '#000000'
    }
  }
})

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <PageAppBar />
        <AboutMe />
        <ProgramDescriptions />
        <Spacer />
        <ProgramMiscellaneous />
        <Spacer />
        <ContactMe />
        <MyStory />
        <PageFooter />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Home
