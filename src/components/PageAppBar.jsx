import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack
} from '@mui/material'
import * as React from 'react'
import { scroller } from 'react-scroll'
import InstagramIcon from '@mui/icons-material/Instagram'

function PageAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleHowItWorksClick = () => {
    handleCloseNavMenu()
    scroller.scrollTo('the-process-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const handleContactMeClick = () => {
    handleCloseNavMenu()
    scroller.scrollTo('contact-me-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const handleInstagramClick = () => {
    console.log('Instagram')
  }

  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            flexBasis: 0
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="white"
            sx={{ padding: '0' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClick={handleContactMeClick}>Intresseanmälan</MenuItem>
            <MenuItem onClick={handleInstagramClick}>
              <InstagramIcon /> Instagram
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            flexBasis: 0
          }}
        >
          <Button variant="outlined" onClick={handleContactMeClick}>
            Intresseanmälan
          </Button>
        </Box>

        <Stack justifyContent="flex-start">
          <Typography
            align="center"
            color="white.main"
            sx={{
              fontSize: { xs: 'small', md: 'large' },
              paddingLeft: { md: '55px' },
              paddingBottom: '5px',
              textAlign: 'center',
              lineHeight: '1',
              letterSpacing: '4px'
            }}
          >
            HANNA LJUNGSTEN
          </Typography>
          <Typography
            align="center"
            color="white.main"
            sx={{
              fontSize: { xs: 'small', md: 'medium' },
              paddingLeft: { md: '47px' },
              textAlign: 'center',
              lineHeight: '1',
              letterSpacing: '1px'
            }}
          >
            Lic. Personlig tränare & online coach
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            flexBasis: 0,
            alignItems: 'end',
            justifyContent: 'end'
          }}
        >
          <Button
            sx={{ display: { xs: 'none', md: 'flex' } }}
            onClick={handleInstagramClick}
            startIcon={<InstagramIcon />}
            color={'white'}
          >
            Instagram
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default PageAppBar
