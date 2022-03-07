import * as React from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Box,
  Card,
  CardContent,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";

import { alpha, styled } from "@mui/material/styles";

import Aos from "aos";

import "aos/dist/aos.css";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "whitesmoke",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "&.Mui fieldset": {
      borderColor: "white",
    },
  },
});

const genders = ["Man", "Kvinna", "Annat"];
function ContactMe() {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  const image = process.env.PUBLIC_URL + "/hanna2.jpg";

  return (
    <Grid container columns={2}>
      <Grid
        container
        item
        xs={2}
        md={1}
        name="contact-me-section"
        sx={{
          justifyContent: "center",
          px: { xs: "10px", md: "100px" },
          py: "10px",
          background:
            "linear-gradient(0deg, rgba(222,167,144,1) 0%, rgba(234,198,183,1) 100%)",

          alignItems: "center",
        }}
      >
        <ContactMeCard data-aos="fade-right"></ContactMeCard>
      </Grid>
      <Grid
        item
        xs={2}
        md={1}
        sx={{
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundImage: `
          url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
    </Grid>
  );
}

function ContactMeCard() {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [phoneNumber, setphoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sex, setSex] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setphoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    console.log(name);
    console.log(phoneNumber);
    console.log(email);
    console.log(message);
  };
  return (
    <Card
      elevation={0}
      data-aos="fade-right"
      sx={{
        backgroundColor: "transparent",
        maxWidth: { xs: "500px", md: "100%" },
      }}
    >
      <CardContent>
        <Typography
          align="center"
          color="white.main"
          sx={{
            fontWeight: "bold",

            fontSize: { xs: "24px", md: "3vw" },
            letterSpacing: "2px",
          }}
        >
          Intresseanmälan
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
                <FormLabel color="white" focused sx={{ fontSize: "18px" }}>
                  Hur många gånger i veckan vill du träna?
                </FormLabel>
                <RadioGroup aria-label="gender" name="antalGånger">
                  <FormControlLabel
                    value="1"
                    control={<Radio color="white" />}
                    label="1-2 gånger"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="white" />}
                    label="2-4 gånger"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="white" />}
                    label="4-7 gånger"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl>
                <FormLabel color="white" focused sx={{ fontSize: "18px" }}>
                  Vad kan jag som PT hjälpa dig med?
                </FormLabel>
                <RadioGroup aria-label="gender" name="antalGånger">
                  <FormControlLabel
                    value="1"
                    control={<Checkbox color="white" />}
                    label="Gå upp/ned i vikt"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Checkbox color="white" />}
                    label="Bygga muskler"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Checkbox color="white" />}
                    label="Hälsosam livsstil"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Checkbox color="white" />}
                    label="Komma igång med träningen"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Checkbox color="white" />}
                    label="Annat"
                  />
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
                alignSelf: "center",
              }}
            >
              <Button type="submit" size="large" variant="contained">
                Skicka
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactMe;
