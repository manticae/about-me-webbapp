import * as React from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import Spacer from "./Spacer";

function ContactMe() {
  const image = process.env.PUBLIC_URL + "/backgroundPicture2.png";
  return (
    <Box name="contact-me-section">
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        style={{
          flexGrow: 1,
          minHeight: "650px",
          backgroundColor: "#c3ccce",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
  const [phoneNumber, setphoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
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
          sx={{ display: { xs: "none", md: "block" }, py: 1 }}
        >
          Kontakta mig
        </Typography>
        <Typography
          align="center"
          variant="h5"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Kontakta mig
        </Typography>

        <Spacer />
        <form onSubmit={handleSubmit}>
          <Grid container columns={12} spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                alignSelf: "center",
              }}
            >
              <TextField
                fullWidth
                label="Namn"
                value={name}
                onChange={handleNameChange}
                color="text"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              style={{
                alignSelf: "center",
              }}
            >
              <TextField
                fullWidth
                label="Telefonnummer"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                color="text"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              style={{
                alignSelf: "center",
              }}
            >
              <TextField
                fullWidth
                label="E-post"
                value={email}
                onChange={handleEmailChange}
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
              <TextField
                fullWidth
                multiline
                minRows={3}
                maxRows={5}
                label="Meddelande"
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
