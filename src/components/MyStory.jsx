import React, { useEffect } from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

function MyStory() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <Box
      style={{
        flexGrow: 1
      }}
    >
      <Grid container columns={2}>
        <Grid
          item
          xs={2}
          md={1}
          style={{
            minHeight: '800px',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/hanna3.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></Grid>
        <Grid
          item
          xs={2}
          md={1}
          style={{
            alignSelf: 'center',
            height: 'auto',
            backgroundColor: '#c3ccce'
          }}
        >
          <Card
            elevation={0}
            square
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%'
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ mt: 2, mx: 3 }}>
                Min Historia
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, mx: 3 }}
                data-aos-anchor-placement="center-bottom"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                Träning har alltid varit en stor del av mitt liv. I 11 år var
                gymnastiken allt, men ju äldre jag blev desto större blev
                kärleken för gymmet. Jag har sedan studerat Sam beteende med
                träning & hälsa som inrikting, just för att jag är så
                intresserads av människor, hur man fungerar och vad man behöver
                för att må bra.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, mx: 3 }}
                data-aos-anchor-placement="center-bottom"
                data-aos="fade-in"
                data-aos-duration="2000"
              >
                Efter gymnasiet började jag fundera på vad jag ville göra med
                mitt liv. Vad tycker jag är kul? Vad brinner jag för och vad är
                det absolut roligaste jag vet? Träning, kost och hälsa. Att
                motivera, inspirera och hjälpa människor. Därför valde jag att
                utbilda mig till personlig tränare och kostrådgivare med en
                internationell licens. Att kunna jobba med sitt största intresse
                är en dröm, och jag är mer än redo att hjälpa just DIG uppnå
                dina mål och drömmar. För det handlar inte bara om att äta rätt
                och träna bra. Det handlar också om att ha ett sunt mindset och
                hitta den livsstil som passar just dig. Det handlar om att göra
                träning till en livsstil. Att äta den mat man vill och mår bra
                av, men att göra det på ett sunt vis, ett hållbart vis.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, mx: 3 }}
                data-aos-anchor-placement="center-bottom"
                data-aos="fade-in"
                data-aos-duration="3000"
              >
                Din kropp och hälsa är det viktigaste du har och för att kunna
                leva ett långt och friskt liv behöver vi ta vårt ansvar idag. Vi
                behöver göra medvetna val och tänka rätt, vilket inte alltid är
                så enkelt. Därför finns jag för dig, för att vägleda och
                rådgiva, för att peppa och pusha i jobbiga stunder. För att
                hjälpa just dig uppnå dina mål och hitta en hälsosam livsstil.
                Investera i dig själv idag, jag finns vid din sida hela vägen.
              </Typography>

              <Typography
                variant="h5"
                data-aos-anchor-placement="center-bottom"
                data-aos="fade-in"
                data-aos-duration="4000"
                sx={{ mt: 2, mx: 3, display: 'flex', justifyContent: 'center' }}
              >
                / Hanna
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MyStory
