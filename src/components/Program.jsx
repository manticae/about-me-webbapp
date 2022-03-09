import * as React from 'react'
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material'

function Program(props) {
  return (
    <Box
      height={'550px'}
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        bgcolor={props.item.color}
        height={'550px'}
        style={{
          // flexGrow: 1,
          flex: 1,
          // flexGrow: 1,
          display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'end',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${props.item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <Box
          bgcolor={props.item.color}
          sx={{
            margin: 2,
            padding: 1,
            height: 'fit-content',
            borderRadius: 1
          }}
        >
          <Typography
            // style={{ backgroundColor: props.item.color }}
            align="center"
            variant="h5"
            color={'#FFFFFF'}
          >
            {props.item.name}
          </Typography>
        </Box>
        {/* <Box
          height={"350px"}
          bgcolor={props.item.color}
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${props.item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card
            style={{
              top: "0px",
              left: "2rem",
              maxWidth: "250px",
              height: "100%",
              position: "absolute",
            }}
          >
            <CardContent>
              <Typography align="center" variant="h5">
                {props.item.name}
              </Typography>
              <Typography variant="body1">{props.item.description}</Typography>
            </CardContent>
          </Card> 
        </Box> */}
      </Box>
    </Box>
  )
}

export default Program
