import React from 'react'
import { Box, Container, Stack, Typography, Grid} from "@mui/material";
import myPic from './../../assets/my-pic.png';

const About = () => {
  return (
    <Container>
      <Grid container direction='row'>
        <Grid container item xs={6} alignItems='stretch' direction='column' justifyContent='center'>
          <Typography 
                variant="h6"  
                color='secondary.light' 
                textTransform='uppercase'
                fontWeight={700}
                fontSize='17px'
                sx={{
                  letterSpacing:'1px'
                }}
                >
                Hello, My name is
          </Typography>
          <Typography
            variant='h2'
            fontWeight={750}
            fontSize='48px'
            textTransform='uppercase'
            color='primary'
          >
            Jomari Hinayon
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            color='primary.light'
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas nemo sapiente dolorum cupiditate? Eaque, doloribus. Itaque, saepe.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img height='450px' width='350px' src={myPic}/>
        </Grid>
      </Grid>
    </Container>
  )
}


export default About





