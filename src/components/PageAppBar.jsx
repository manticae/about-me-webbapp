import * as React from "react";
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Box,
  Menu,
  IconButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function PageAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHowItWorksClick = () => {
    console.log("Så funkar det!");
  };

  const handleContactMeClick = () => {
    console.log("Kontakta mig!");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="white" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h4" noWrap sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default PageAppBar;
