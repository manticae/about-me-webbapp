import React, { useEffect } from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
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
    Aos.init({ duration: 1200 })
  }, [])
  const items = [
    {
      name: 'Bygga muskler',
      color: '#f0f4e6',
      image: process.env.PUBLIC_URL + '/program1.jpg'
    },
    {
      name: 'Komma igång med träningen',
      color: '#9cb58e',
      image: process.env.PUBLIC_URL + '/program2.jpg'
    },
    {
      name: 'Hälsosam livsstil',
      color: '#fdccdd',
      image: process.env.PUBLIC_URL + '/program3.jpg'
    },
    {
      name: 'Gå upp/ner i vikt',
      color: '#fdccdd',
      image: process.env.PUBLIC_URL + '/program4.jpg'
    },
    {
      name: 'Stärka en specifik muskelgrupp',
      color: '#fdccdd',
      image: process.env.PUBLIC_URL + '/program5.jpg'
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
          sx={{ pb: 5, px: 3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          <CardContent data-aos="fade-in">
            <Typography variant="h4">
              Detta ingår i min online coachning
            </Typography>
            {/* <Typography variant="body1" color="text.secondary">
              En undertitel designad för att introducera till punktlistan
            </Typography> */}
          </CardContent>

          <CardContent>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Skräddarsytt träningsschema.
            </Typography>

            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Kostschema och kostrådgivning.
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Tips på enkla & nyttiga recept.
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Möjlighet till daglig kontakt.
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Veckovis uppföljning.
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Tips för att motarbeta dåliga vanor.
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', py: 1 }}
              variant="body1"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <CheckBoxOutlinedIcon
                color="primary"
                style={{ transform: 'scale(1.5)' }}
                sx={{ mr: 1 }}
              />{' '}
              Veckovisa utmaningar.
            </Typography>
          </CardContent>
          {/* <CardContent>
            <Typography variant="body1">
              Mycket mer information får också plats här, som till exempel
              information om kost alternativ eller allergier i kostplaner osv
            </Typography>
          </CardContent> */}

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
          alignSelf: 'center',
          width: '100%'
        }}
      >
        <Carousel
          animation="slide"
          duration="1000"
          interval="10000"
          navButtonsAlwaysVisible="true"
          swipe={false}
        >
          {items.map((item, i) => (
            <Program key={i + item.name} item={item} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  )
}

export default ProgramDescriptions
