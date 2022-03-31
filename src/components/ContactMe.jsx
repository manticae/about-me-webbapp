import React, { useState } from 'react'
import {
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Card,
  CardContent,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Dialog,
  CircularProgress,
  CardActions
} from '@mui/material'
import emailjs from 'emailjs-com'

import { styled } from '@mui/material/styles'

import Aos from 'aos'

import 'aos/dist/aos.css'

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'whitesmoke'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    },
    '&.Mui fieldset': {
      borderColor: 'white'
    }
  }
})

const genders = ['Man', 'Kvinna']
function ContactMe() {
  React.useEffect(() => {
    Aos.init({})
  }, [])
  const image = process.env.PUBLIC_URL + '/hanna2.jpg'

  return (
    <Grid container columns={2}>
      <Grid
        container
        item
        xs={2}
        md={1}
        name="contact-me-section"
        sx={{
          justifyContent: 'center',
          px: { xs: '10px', md: '100px' },
          py: '10px',
          background:
            'linear-gradient(0deg, rgba(222,167,144,1) 0%, rgba(234,198,183,1) 100%)',

          alignItems: 'center'
        }}
      >
        <ContactMeCard data-aos="fade-right"></ContactMeCard>
      </Grid>
      <Grid
        item
        xs={2}
        md={1}
        sx={{
          height: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `
          url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></Grid>
    </Grid>
  )
}

function ContactMeCard() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sex, setSex] = useState('')
  const [trainingDays, setTrainingDays] = useState('')
  const [help, setHelp] = useState([
    { id: 1, value: 'Gå upp/ned i vikt', isChecked: false },
    { id: 2, value: 'Bygga muskler', isChecked: false },
    { id: 3, value: 'Hälsosam livsstil', isChecked: false },
    { id: 4, value: 'Komma igång med träningen', isChecked: false },
    { id: 5, value: 'Annat', isChecked: false }
  ])
  const [errorMessage, setErrorMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  const handleSexChange = (event) => {
    setSex(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setphoneNumber(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleCheckChange = (event) => {
    const tempHelp = help.map((option) => {
      if (option.value === event.target.value) {
        return { ...option, isChecked: event.target.checked }
      }
      return option
    })
    setHelp(tempHelp)
    console.log(tempHelp)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      !name ||
      !trainingDays ||
      !lastName ||
      !age ||
      !phoneNumber ||
      !email ||
      !message ||
      !sex
    ) {
      setErrorMessage('Alla fälten är obligatoriska!')
    } else {
      setIsLoading(true)
      setErrorMessage(null)
      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve('foo')
      //   }, 300)
      // })
      emailjs
        .send(
          'service_fx4cv5v',
          'template_mvwhhki',
          {
            name: name,
            lastName: lastName,
            age: age,
            phoneNumber: phoneNumber,
            email: email,
            sex: sex,
            trainingDays: trainingDays,
            help: help
              .reduce((prevArr, option) => {
                if (option.isChecked) {
                  prevArr.push(option.value)
                }
                return prevArr
              }, [])
              .join(', '),
            message: message
          },
          'eZoiXmss4YQkjaWBN'
        )
        .then(() => {
          setIsLoading(false)
          setErrorMessage(null)
          setName('')
          setLastName('')
          setAge('')
          setphoneNumber('')
          setEmail('')
          setMessage('')
          setSex('')
          setTrainingDays('')
          setHelp([
            { id: 1, value: 'Gå upp/ned i vikt', isChecked: false },
            { id: 2, value: 'Bygga muskler', isChecked: false },
            { id: 3, value: 'Hälsosam livsstil', isChecked: false },
            { id: 4, value: 'Komma igång med träningen', isChecked: false },
            { id: 5, value: 'Annat', isChecked: false }
          ])
          setOpen(true)
        })
    }
  }
  return (
    <>
      <Card
        elevation={0}
        data-aos="fade-right"
        sx={{
          backgroundColor: 'transparent',
          maxWidth: { xs: '500px', md: '100%' }
        }}
      >
        <CardContent>
          <Typography
            align="center"
            color="white.main"
            sx={{
              fontWeight: 'bold',

              fontSize: { xs: '24px', md: '3vw' },
              letterSpacing: '2px'
            }}
          >
            Intresseanmälan:
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container columns={12} spacing={2}>
              <Grid item xs={12} md={4}>
                <CustomTextField
                  fullWidth
                  label="Förnamn"
                  value={name}
                  onChange={handleNameChange}
                  color="white"
                  margin="dense"
                />
                <CustomTextField
                  fullWidth
                  label="Efternamn"
                  value={lastName}
                  onChange={handleLastNameChange}
                  color="white"
                  margin="dense"
                />
                <CustomTextField
                  fullWidth
                  label="Ålder"
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
                  color="white"
                  margin="dense"
                />
                <CustomTextField
                  fullWidth
                  label="Kön"
                  select
                  value={sex}
                  onChange={handleSexChange}
                  color="white"
                  margin="dense"
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </CustomTextField>

                <CustomTextField
                  fullWidth
                  label="Telefonnummer"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  color="white"
                  margin="dense"
                />
                <CustomTextField
                  fullWidth
                  label="E-post"
                  value={email}
                  onChange={handleEmailChange}
                  color="white"
                  margin="dense"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl>
                  <FormLabel color="white" focused sx={{ fontSize: '18px' }}>
                    Hur många gånger i veckan vill du träna?
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="antalGånger"
                    value={trainingDays}
                    onChange={(event) => setTrainingDays(event.target.value)}
                  >
                    <FormControlLabel
                      value="1-2 gånger"
                      control={<Radio color="white" />}
                      label="1-2 gånger"
                    />
                    <FormControlLabel
                      value="2-4 gånger"
                      control={<Radio color="white" />}
                      label="2-4 gånger"
                    />
                    <FormControlLabel
                      value="4-7 gånger"
                      control={<Radio color="white" />}
                      label="4-7 gånger"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl>
                  <FormLabel color="white" focused sx={{ fontSize: '18px' }}>
                    Vad kan jag som PT hjälpa dig med?
                  </FormLabel>
                  <RadioGroup name="help">
                    {help.map((option) => (
                      <FormControlLabel
                        key={option.id}
                        value={option.value}
                        label={option.value}
                        control={
                          <Checkbox
                            checked={option.isChecked}
                            // isChecked={option.isChecked}
                            color="white"
                            onChange={handleCheckChange}
                          />
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={12}>
                <CustomTextField
                  fullWidth
                  multiline
                  minRows={3}
                  maxRows={5}
                  label="Annat"
                  value={message}
                  onChange={handleMessageChange}
                  color="white"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  alignSelf: 'center'
                }}
              >
                <Typography py={1} color="red">
                  {errorMessage}
                </Typography>
                {!isLoading && (
                  <Button type="submit" size="large" variant="contained">
                    Skicka
                  </Button>
                )}
                {isLoading && <CircularProgress />}
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Card>
          <CardContent>
            <Typography>
              Tack! Din intresseanmälan är mottagen, jag återkommer så snabbt
              jag kan.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                setOpen(false)
              }}
            >
              Toppen
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </>
  )
}

export default ContactMe
