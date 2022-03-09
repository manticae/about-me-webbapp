import React, { useEffect } from 'react'
import { Container, Grid, Card, Typography, Link } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import InstagramIcon from '@mui/icons-material/Instagram'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ProgramMiscellaneous() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container columns={18} spacing={2} justifyContent={'space-evenly'}>
        <Grid
          item
          xs={18}
          md={6}
          style={{
            alignSelf: 'center'
          }}
        >
          <Card
            data-aos="fade-in"
            data-aos-anchor-placement="bottom-bottom"
            elevation={0}
            style={{
              width: '100%',
              height: '200px'
            }}
          >
            <Typography align="center" variant="h4">
              <MailOutlineIcon
                color="primary"
                style={{ transform: 'scale(2.0)' }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: '15px' }}
            >
              Mail
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: '15px' }}
            >
              Vid frågor och funderingar, maila hanna.ljungsten@exemple.se
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={18}
          md={6}
          style={{
            alignSelf: 'center'
          }}
        >
          <Card
            elevation={0}
            data-aos="fade-in"
            data-aos-anchor-placement="bottom-bottom"
            style={{
              width: '100%',
              height: '200px'
            }}
          >
            <Typography align="center" variant="h4">
              <InstagramIcon
                color="primary"
                style={{ transform: 'scale(2.0)' }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: '15px' }}
            >
              Instagram
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: '15px' }}
            >
              Följ mig på instagram för daglig inspiration{' '}
              <Link
                href="https://instagram.com/hannaljungsten"
                underline="none"
              >
                @hannaljungsten
              </Link>{' '}
              <Link
                href="https://instagram.com/fitnessbyhannalj"
                underline="none"
              >
                @fitnessbyhannalj
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={18}
          md={6}
          style={{
            alignSelf: 'center'
          }}
        >
          <Card
            elevation={0}
            data-aos="fade-in"
            data-aos-anchor-placement="bottom-bottom"
            style={{
              width: '100%',
              height: '200px'
            }}
          >
            <Typography align="center" variant="h4">
              <FavoriteBorderOutlinedIcon
                color="primary"
                style={{ transform: 'scale(2.0)' }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: '15px' }}
            >
              Samarbeten
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: '15px' }}
            >
              Ambassadör för Swedish Supplement. Kontakta mig för mer
              information
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProgramMiscellaneous
