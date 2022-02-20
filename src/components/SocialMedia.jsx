import * as React from 'react'
import { Container, Button, Box, Grid } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'

const handleInstagramClick = () => {
  console.log('Instagram')
}

function SocialMedia() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" sx={{ my: 2 }}>
        <Button onClick={handleInstagramClick} startIcon={<InstagramIcon />}>
          Instagram
        </Button>
      </Box>
    </Container>
  )
}

export default SocialMedia
