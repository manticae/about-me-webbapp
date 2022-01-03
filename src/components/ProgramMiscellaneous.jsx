import * as React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesIcon from "@mui/icons-material/Devices";
import TimelineIcon from "@mui/icons-material/Timeline";

function ProgramMiscellaneous() {
  return (
    <Container maxWidth="md">
      <Grid container columns={16} spacing={2} justifyContent={"space-evenly"}>
        <Grid
          item
          xs={8}
          md={4}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "150px",
            }}
          >
            <Typography align="center" variant="h4">
              <MailOutlineIcon
                color="primary"
                style={{ transform: "scale(1.3)" }}
              />
            </Typography>
            <Typography align="center" variant="body2">
              Mail kommunikation tillgängligt hela tiden med svar innom en dag
            </Typography>
          </Card>
        </Grid>

        <Grid
          item
          xs={8}
          md={4}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "150px",
            }}
          >
            <Typography align="center" variant="h4">
              <PhoneIphoneIcon
                color="primary"
                style={{ transform: "scale(1.3)" }}
              />
            </Typography>
            <Typography align="center" variant="body2">
              Tillgänglig på telefon under vanliga arbetstider. Perfekt vid
              snabba frågor
            </Typography>
          </Card>
        </Grid>

        <Grid
          item
          xs={8}
          md={4}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "150px",
            }}
          >
            <Typography align="center" variant="h4">
              <DevicesIcon
                color="primary"
                style={{ transform: "scale(1.3)" }}
              />
            </Typography>
            <Typography align="center" variant="body2">
              Regelbundna digitala möten och uppföljningar
            </Typography>
          </Card>
        </Grid>

        <Grid
          item
          xs={8}
          md={4}
          style={{
            alignSelf: "center",
          }}
        >
          <Card
            elevation={0}
            style={{
              width: "100%",
              height: "150px",
            }}
          >
            <Typography align="center" variant="h4">
              <TimelineIcon
                color="primary"
                style={{ transform: "scale(1.3)" }}
              />
            </Typography>
            <Typography align="center" variant="body2">
              Utvärderingar, statistik och progression
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProgramMiscellaneous;
