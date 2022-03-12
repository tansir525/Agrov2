import React from 'react';
import './BannerDevider.css'

import CustomButton from '../styles/Button.style';
import { Grid } from '@mui/material';

import { Container } from 'react-bootstrap';

const BannerDevider = () => {
    return (
        <div className='devider-banner'>

        <Container className='devider-content'>
          
            
          <Grid  container spacing={0}>
                    <Grid className='abouttitle' item xs={6}>
                       <h1>AGROVERSE</h1> 
                    </Grid>
                    <Grid item xs={6}>
                    <h5 className='bh'>Redefining the Future of Agro-Food Production</h5> 
                     <p className='text-white'>We are working closely with farmers, sourcing raw materials directly from them and authentic suppliers, processing and manufacturing agro-products maintaining high moral standards to ensure the utmost quality of the produce; and delivering the products to customers to satisfy their needs. 
   
                       </p>
    <CustomButton>Explore us</CustomButton>
                    </Grid>
                   
                   
        </Grid>
    
    
    
               
            </Container>
        </div>  
    );
};

export default BannerDevider;