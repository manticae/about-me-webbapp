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
    <Box>
      {/* Phone */}
      <AppBar
        position="absolute"
        color="transparent"
        elevation="0"
        sx={{
          display: { xs: "flex", md: "none" },
          padding: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ flexGrow: 1, justifyContent: "start", padding: "0" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            align="center"
            variant="h5"
            sx={{
              width: "170px",
              lineHeight: "1",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            HANNA LJUNGSTEN
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
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
        </Toolbar>
        <AppBar></AppBar>
      </AppBar>
      {/* Website */}
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
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
            <Box width={1 / 5}>
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
            <Box>
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
        <AppBar></AppBar>
      </AppBar>
    </Box>
  );
}

export default PageAppBar;
