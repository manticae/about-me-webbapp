import React, { useEffect } from 'react'
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import CheckIcon from '@mui/icons-material/Check'
import Program from './Program'
import { scroller } from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'

const handleContactMeClick = () => {
  scroller.scrollTo('contact-me-section', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

function ProgramDescriptions() {
  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1000 })
  }, [])
  const items = [
    {
      name: 'Gå upp/ner i vikt',
      color: '#eac6b7',
      image: process.env.PUBLIC_URL + '/hannaProgramPicture.jpg'
    },
    {
      name: 'Bygga muskler',
      color: '#eac6b7',
      image: process.env.PUBLIC_URL + '/program2.png'
    },
    {
      name: 'Hälsosam livsstil',
      color: '#eac6b7',
      image: process.env.PUBLIC_URL + '/program3.png'
    },
    {
      name: 'Komma igång med träningen & förändra mindset',
      color: '#eac6b7',
      image: process.env.PUBLIC_URL + '/program3.png'
    },
    {
      name: 'Stärka en specifik muskelgrupp ',
      color: '#eac6b7',
      image: process.env.PUBLIC_URL + '/program3.png'
    }
  ]
  return (
    <Grid container columns={16}>
      <Grid
        item
        xs={16}
        md={8}
        style={{
          alignSelf: 'center'
        }}
      >
        <Card
          elevation={0}
          square
          sx={{ pl: 3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: '100%'
          }}
        >
          <CardContent data-aos="fade-in">
            <Typography variant="h4">
              Detta ingår i min online coachning
            </Typography>
            <Typography variant="body1" color="text.secondary">
              En undertitel designad för att introducera till punktlistan
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Skräddarsytt
              träningsschema.
            </Typography>
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Kostschema och
              kostrådgivning.
            </Typography>
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Tips på enkla &
              nyttiga recept.
            </Typography>
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Möjlighet till
              daglig kontakt.
            </Typography>
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Veckovis
              uppföljning.
            </Typography>
            {/* <Typography variant="body1" data-aos="fade-right">
                <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Tips &
                rådgivning kring vanor.
              </Typography> */}
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Tips för att
              motarbeta dåliga vanor.
            </Typography>
            <Typography variant="body1" data-aos="fade-right">
              <CheckIcon fontSize="inherit" sx={{ mr: 1 }} /> Veckovisa
              utmaningar.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              Mycket mer information får också plats här, som till exempel
              information om kost alternativ eller allergier i kostplaner osv
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              onClick={handleContactMeClick}
              size="large"
              variant="contained"
            >
              Jag vill veta mer
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        xs={16}
        md={8}
        style={{
          alignSelf: 'center'
        }}
      >
        <Carousel
          animation="slide"
          duration="1000"
          interval="10000"
          navButtonsAlwaysVisible="true"
        >
          {items.map((item, i) => (
            <Box key={i}>
              <Program item={item} />
            </Box>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  )
}

export default ProgramDescriptions
