import { Container, Typography, Grid } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Container sx={{padding: '100px 0'}}>
        <Grid spacing={5} container>
            <Grid item xs={12} textAlign='center'>
            <Typography
                variant='h3'
                fontSize='38px'
                fontWeight={600}
                color='primary'
            >
             ABOUT ME
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography component='p' padding='20px 0' fontSize='18px' color='secondary' textAlign='center' lineHeight={1.8}>
            I'm Jomari, looking for a position to kickstart my career in the field of Software Development. 
            I want to succeed in a stimulating and challenging environment,
            building the success of the company or individual, while I experience advance opportunities 
            where I can apply my skills and knowledge, to design and implement innovative and efficient technical projects.
            </Typography>
            </Grid>
        </Grid>
    </Container>
  )
}

export default About