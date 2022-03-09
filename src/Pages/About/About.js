import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
          <div className='motherbannerabout'>
          <div className='aboutbanner'>
                <h1 className='centeredabout'>“A good farmer is nothing <br /> more nor  less than a handy <br />  man with a sense of humus.”</h1>
            </div>
          </div>
        <Container className='customAbout'>
          
            
      <Grid className='customabout' container spacing={0}>
                <Grid className='abouttitle' item xs={6}>
                   <h1>About Us</h1> 
                </Grid>
                <Grid item xs={6}>
                 <p>Founded in 2021, AgroVerse is a universal agricultural food products processing and manufacturing company located in Gazipur, Bangladesh. <br /> <br />

AgroVerse is working closely with farmers; sourcing raw materials directly from them and authentic suppliers; processing and manufacturing agro-products maintaining high moral standards to ensure the utmost quality of the produce; and delivering the products to customers to satisfy their needs. As a comprehensive agro-business company, AgroVerse is marketing agro-products locally in Bangladesh and exporting them to different parts of the globe including Europe, North America, the Middle East, and South-East Asia.
</p>
                </Grid>
               
               
    </Grid>



           
        </Container>
        </>
    );
};

export default About;