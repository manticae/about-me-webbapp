import * as React from "react";
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Box,
  Menu,
  Grid,
  IconButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { scroller } from "react-scroll";

function PageAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHowItWorksClick = () => {
    handleCloseNavMenu();
    scroller.scrollTo("the-process-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleContactMeClick = () => {
    handleCloseNavMenu();
    scroller.scrollTo("contact-me-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          width={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box width={1 / 5}></Box>
          <Box width={1 / 5}>
            <Typography align="center" marginTop={2} variant="h3">
              Hanna Ljungsten
            </Typography>
          </Box>
          <Box width={1 / 5} sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              color="textColor"
              onClick={handleHowItWorksClick}
            >
              Så Funkar Det
            </Button>
            <Button
              variant="text"
              color="textColor"
              onClick={handleContactMeClick}
            >
              Kontakta Mig
            </Button>
          </Box>
          <Box width={1 / 5} sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button
                variant="text"
                color="textColor"
                onClick={handleHowItWorksClick}
              >
                Så Funkar Det
              </Button>
              <Button
                variant="text"
                color="textColor"
                onClick={handleContactMeClick}
              >
                Kontakta Mig
              </Button>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default PageAppBar;
