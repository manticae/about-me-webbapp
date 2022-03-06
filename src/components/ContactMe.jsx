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

const genders = [
  "Man", "Kvinna", "Annat"
]
function ContactMe() {
  return (
    <Box name="contact-me-section">
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        style={{
          flexGrow: 1,
          minHeight: "650px",
          background:
            "linear-gradient(0deg, rgba(222,167,144,1) 0%, rgba(234,198,183,1) 100%)",
          alignItems: "center",
        }}
      >
        <Grid container columns={12} alignItems="center">
          <Grid item md={2}></Grid>

          <Grid item md={8}>
            <ContactMeCard />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        style={{
          flexGrow: 1,
          minHeight: "650px",

          alignItems: "center",
        }}
      >
        <Grid container columns={12} alignItems="center">
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={5}>
            <ContactMeCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function ContactMeCard() {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [phoneNumber, setphoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
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
    <Card elevation={0}>
      <CardContent>
        <Typography
          align="center"
          variant="h4"
          sx={{ display: "block", pb: 2 }}
        >
          Intresseanmälan
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container columns={12} spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Förnamn"
                value={name}
                onChange={handleNameChange}
                color="text"
                margin="dense"
              />
              <TextField
                fullWidth
                label="Efternamn"
                value={lastName}
                onChange={handleLastNameChange}
                color="text"
                margin="dense"
              />
              <TextField
                fullWidth
                label="Ålder"
                type="number"
                error={age < 16 || age > 99}
                value={age}
                onChange={handleAgeChange}
                color="text"
                    margin="dense"
              />
                            <TextField
                fullWidth
                label="Kön"
                select
                onChange={handleAgeChange}
                color="text"
                margin="dense"
              >
                        {genders.map((gender) => (
            <MenuItem key={gender} value={gender}>
              {gender}
            </MenuItem>
          ))}

              </TextField>



              <TextField
                fullWidth
                label="Telefonnummer"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                color="text"
                margin="dense"
              />
              <TextField
                fullWidth
                label="E-post"
                value={email}
                onChange={handleEmailChange}
                color="text"
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl>
                <FormLabel>Hur många gånger i veckan vill du träna?</FormLabel>
                <RadioGroup aria-label="gender" name="antalGånger">
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="1-2 gånger"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="2-4 gånger"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="4-7 gånger"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl>
                <FormLabel>Vad kan jag som PT hjälpa dig med?</FormLabel>
                <RadioGroup aria-label="gender" name="antalGånger">
                  <FormControlLabel
                    value="1"
                    control={<Checkbox />}
                    label="Gå upp/ned i vikt"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Checkbox />}
                    label="Bygga muskler"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Checkbox />}
                    label="Hälsosam livsstil"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Checkbox />}
                    label="Komma igång med träningen"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Checkbox />}
                    label="Annat"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                maxRows={5}
                label="Annat"
                value={message}
                onChange={handleMessageChange}
                color="text"
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
