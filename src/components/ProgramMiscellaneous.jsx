import * as React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesIcon from "@mui/icons-material/Devices";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

function ProgramMiscellaneous() {
  return (
    <Container maxWidth="lg">
      <Grid container columns={18} spacing={2} justifyContent={"space-evenly"}>
        <Grid
          item
          xs={9}
          md={6}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <Typography align="center" variant="h4">
              <MailOutlineIcon
                color="primary"
                style={{ transform: "scale(2.0)" }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: "15px" }}
            >
              Mailkommunikation
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: "15px" }}
            >
              Mail kommunikation tillgängligt hela tiden med svar innom en dag
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={6}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <Typography align="center" variant="h4">
              <PhoneIphoneIcon
                color="primary"
                style={{ transform: "scale(2.0)" }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: "15px" }}
            >
              Telefontid
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: "15px" }}
            >
              Tillgänglig på telefon under vanliga arbetstider. Perfekt vid
              snabba frågor
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={6}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <Typography align="center" variant="h4">
              <DevicesIcon
                color="primary"
                style={{ transform: "scale(2.0)" }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: "15px" }}
            >
              Möten
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: "15px" }}
            >
              Regelbundna digitala möten och uppföljningar
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={6}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <Typography align="center" variant="h4">
              <TimelineIcon
                color="primary"
                style={{ transform: "scale(2.0)" }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: "15px" }}
            >
              Statistik
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: "15px" }}
            >
              Utvärderingar, statistik och progression
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={6}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <Typography align="center" variant="h4">
              <AccessTimeIcon
                color="primary"
                style={{ transform: "scale(2.0)" }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: "15px" }}
            >
              Lorem ipsum
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: "15px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={6}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <Typography align="center" variant="h4">
              <CloudQueueIcon
                color="primary"
                style={{ transform: "scale(2.0)" }}
              />
            </Typography>
            <Typography
              align="center"
              variant="h6"
              style={{ paddingTop: "15px" }}
            >
              Lorem ipsum
            </Typography>
            <Typography
              align="center"
              variant="body2"
              style={{ paddingTop: "15px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur adipisicing elit.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProgramMiscellaneous;
