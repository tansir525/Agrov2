import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Sdgbottom.css'
import map from '../../Assets/SDG/organic farm.jpg'




const Sdgbottom = () => {
    return (
        <Container>
<div className='customb'>
<Grid className='mt-5 pt-5 mb-1 pb-1' container spacing={2}>
        <Grid item lg={6}  md={6} sm={12} xs={12}>
          <div className='custom-sdgbottom '>

          <h3 style={{color: '#008000', fontWeight:'bold'}} >The BetterFarms Ecosystem</h3>  
          <p> By working with farmers, we make sure farming is scientifically  made more efficient.
          And then we bring those products to the market. </p>  
          <h5>We’re implementing data-driven farming and<br />procurement across some of the most needed<br />verticals –</h5> 


         <ul>
            <li>Dairy milk</li>
            <li>Fattening cattle</li>
            <li> Wheat</li>
            
         </ul>


              
        </div>  
        </Grid>
        <Grid item lg={6}  md={6} sm={12} xs={12}>
        <img className='img-fluid custom-map' src={map} alt="" srcset="" />
            
        </Grid>
       
        </Grid>
   
</div>
        </Container>
    );
};

export default Sdgbottom;