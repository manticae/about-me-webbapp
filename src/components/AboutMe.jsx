import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material'
import * as React from 'react'
import { scroller } from 'react-scroll'

const handleContactMeClick = () => {
  scroller.scrollTo('contact-me-section', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

function AboutMe() {
  const image = process.env.PUBLIC_URL + '/hanna.jpg'
  return (
    <Grid container columns={2}>
      <Grid
        item
        xs={2}
        md={1}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage: `
          url(${image})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></Grid>
      <Grid item xs={2} md={1}>
        <Card
          elevation={0}
          square
          sx={{
            px: '5vw',
            height: { xs: 'auto', md: '100vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            background:
              'linear-gradient(0deg, rgba(222,167,144,1) 0%, rgba(234,198,183,1) 100%)'
          }}
        >
          <CardContent>
            <Typography
              variant="h3"
              color="white.main"
              sx={{
                fontWeight: 'bold',
                fontSize: { md: '6vw' },
                letterSpacing: '2px'
              }}
            >
              Din Hälsa
            </Typography>

            <Typography
              variant="h3"
              color="white.main"
              sx={{
                fontWeight: 'bold',
                fontSize: { md: '6vw' },
                letterSpacing: '2px'
              }}
            >
              Ditt Ansvar.
            </Typography>

            <Typography variant="body1" mt={2}>
              Bygg din drömkropp med min hjälp, har du viljan så har jag
              verktygen för att du ska uppnå dina mål på de mest hälsosamma
              viset
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              onClick={handleContactMeClick}
              size="large"
              variant="contained"
              fullWidth
              sx={{
                py: '15px'
              }}
            >
              Intresseanmälan
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutMe
