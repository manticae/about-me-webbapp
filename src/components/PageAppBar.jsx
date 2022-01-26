import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
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
    <AppBar position="absolute" color="transparent" elevation="0">
      <Toolbar>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ padding: "0" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClit stack={handleContactMeClick}>
              Intresseanmälan
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <Button variant="outlined" onClick={handleContactMeClick}>
            Intresseanmälan
          </Button>
        </Box>

        <Typography
          align="center"
          variant="h5"
          sx={{
            width: "170px",
            lineHeight: "1",
            letterSpacing: { xs: "2px", md: "5px" },
            fontWeight: "bold",
          }}
        >
          HANNA LJUNGSTEN
        </Typography>

        <Box sx={{ flexGrow: 1, flexBasis: 0 }}></Box>
      </Toolbar>
    </AppBar>
  );
}

export default PageAppBar;
