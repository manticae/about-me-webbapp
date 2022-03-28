import * as React from 'react'
import { Box, Container, Link, Typography } from '@mui/material'

function PageFooter() {
  return (
    <Box
      style={{
        flexGrow: 1,
        backgroundColor: '#000000'
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography align="center" variant="body2" color="#FFFFFF">
          ©{' '}
          <Link color="#FFFFFF" underline="none" href="https://manticae.com">
            Manticae 2022
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default PageFooter
