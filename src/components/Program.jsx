import * as React from 'react'
import { Card, CardContent, Typography, Box, Divider } from '@mui/material'

function Program(props) {
  return (
    <Box
      bgcolor={props.item.color}
      height={'700px'}
      style={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Card
        align="center"
        style={{
          width: '80%',
          background:
            'rgb(204, 204, 204)' /* Fallback for older browsers without RGBA-support */,
          // eslint-disable-next-line no-dupe-keys
          background: 'rgba(234,198,183, 0.8'
        }}
        elevation={0}
      >
        <CardContent>
          <Typography
            align="center"
            variant="h4"
            color="white.main"
            sx={{
              letterSpacing: '2px'
            }}
          >
            {props.item.name}
          </Typography>
          <Divider color="white" />
        </CardContent>
      </Card>
    </Box>
  )
}

export default Program
